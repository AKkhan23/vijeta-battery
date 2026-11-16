import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { enquiryTypes, site } from "@/lib/site";

type Payload = {
  name?: unknown;
  phone?: unknown;
  city?: unknown;
  email?: unknown;
  type?: unknown;
  message?: unknown;
  company?: unknown;
};

const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 6;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) {
    for (const [key, value] of hits) {
      if (value.every((time) => now - time >= WINDOW)) hits.delete(key);
    }
  }

  return recent.length > LIMIT;
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return (
    (digits.length === 10 && /^[6-9]/.test(digits)) ||
    (digits.length === 12 && digits.startsWith("91") && /^[6-9]/.test(digits.slice(2)))
  );
}

function makeReference() {
  const now = new Date();
  const stamp = [
    String(now.getFullYear()).slice(2),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `VJT-${stamp}-${rand}`;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  // honeypot — pretend success, store nothing
  if (text(body.company, 80)) {
    return NextResponse.json(
      { ok: true, reference: "VJT-0000-0000", delivery: "ignored" },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const name = text(body.name, 80);
  const phone = text(body.phone, 24);
  const city = text(body.city, 60);
  const email = text(body.email, 120);
  const type = text(body.type, 60);
  const message = text(body.message, 1200);

  const fields: Record<string, string> = {};
  if (name.length < 2) fields.name = "Please enter your name.";
  if (!validPhone(phone)) fields.phone = "Enter a valid 10-digit mobile number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    fields.email = "That email doesn’t look right.";
  }
  if (!type || !enquiryTypes.includes(type as (typeof enquiryTypes)[number])) {
    fields.type = "Choose what you’re looking for.";
  }

  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { ok: false, error: "validation", fields },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const reference = makeReference();
  const receivedAt = new Date();
  const receivedLabel = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(receivedAt);

  const record = {
    reference,
    receivedAt: receivedAt.toISOString(),
    name,
    phone,
    city,
    email,
    type,
    message,
    source: "vijetabattery.com",
  };

  let logged = false;
  try {
    const dataDir = path.join(process.cwd(), ".data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(
      path.join(dataDir, "enquiries.jsonl"),
      `${JSON.stringify({ ...record, receivedLabel })}\n`,
      "utf8",
    );
    logged = true;
  } catch (error) {
    console.error("[enquiry] could not write local log", error);
  }

  let emailed = false;
  const smtpReady = Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  );

  if (smtpReady) {
    try {
      const port = Number(process.env.SMTP_PORT ?? 587);
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465 || process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const rows: Array<[string, string]> = [
        ["Name", name],
        ["Mobile", phone],
        ["City", city || "—"],
        ["Email", email || "—"],
        ["Looking for", type],
        ["Message", message || "—"],
      ];

      const rowsHtml = rows
        .map(
          ([label, value]) => `
            <tr>
              <td style="padding:10px 16px;border-bottom:1px solid #e6e9f2;font-family:Arial,sans-serif;font-size:12px;color:#7b8396;text-transform:uppercase;letter-spacing:1px;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
              <td style="padding:10px 16px;border-bottom:1px solid #e6e9f2;font-family:Arial,sans-serif;font-size:14px;color:#0a0f1e;line-height:1.6;">${escapeHtml(value).replaceAll("\n", "<br/>")}</td>
            </tr>`,
        )
        .join("");

      await transporter.sendMail({
        from:
          process.env.MAIL_FROM ??
          `"VIJETA Website" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO ?? site.email,
        replyTo: email || undefined,
        subject: `New enquiry — ${type} — ${name}`,
        text: [
          `New website enquiry (${reference})`,
          `Received: ${receivedLabel} IST`,
          "",
          ...rows.map(([label, value]) => `${label}: ${value}`),
          "",
          "Source: vijetabattery.com",
        ].join("\n"),
        html: `
          <div style="max-width:620px;margin:0 auto;border:1px solid #e2e6f0;background:#f7f8fb;">
            <div style="background:#1638c6;padding:26px 28px;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2.4px;color:#c9d5ff;">VIJETA BATTERIES · EST. 1988</p>
              <h1 style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:22px;color:#ffffff;">New website enquiry</h1>
            </div>
            <table style="width:100%;border-collapse:collapse;background:#ffffff;">${rowsHtml}</table>
            <div style="padding:16px 28px;font-family:Arial,sans-serif;font-size:11px;color:#7b8396;line-height:1.7;">
              Reference <strong style="color:#1638c6;">${escapeHtml(reference)}</strong> · ${escapeHtml(receivedLabel)} IST<br/>
              Reply to this email to reach the customer${email ? "" : " (no email given — call instead)"}.
            </div>
          </div>
        `,
      });
      emailed = true;
    } catch (error) {
      console.error("[enquiry] SMTP send failed", error);
    }
  }

  if (!emailed && !logged) {
    return NextResponse.json(
      { ok: false, error: "delivery_failed" },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      reference,
      delivery: emailed ? "emailed" : "logged",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
