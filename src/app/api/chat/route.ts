import { NextResponse } from "next/server";
import { answer } from "@/lib/chatbot/engine";
import { askLLM, type ChatTurn } from "@/lib/chatbot/llm";

type Payload = {
  message?: unknown;
  history?: unknown;
};

const WINDOW = 10 * 60 * 1000;
const LIMIT = 30;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 2000) {
    for (const [key, value] of hits) {
      if (value.every((time) => now - time >= WINDOW)) hits.delete(key);
    }
  }

  return recent.length > LIMIT;
}

function cleanTurns(value: unknown): ChatTurn[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((turn): turn is Record<string, unknown> => typeof turn === "object" && turn !== null)
    .filter((turn) => turn.role === "user" || turn.role === "assistant")
    .filter((turn) => typeof turn.content === "string")
    .slice(-8)
    .map((turn) => ({
      role: turn.role as ChatTurn["role"],
      content: (turn.content as string).slice(0, 800),
    }));
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

  const message = typeof body.message === "string" ? body.message.trim().slice(0, 600) : "";
  if (!message) {
    return NextResponse.json(
      { ok: false, error: "Please type a message." },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const history = cleanTurns(body.history);
  const result = (await askLLM(message, history)) ?? answer(message);

  return NextResponse.json(
    { ok: true, ...result },
    { headers: { "Cache-Control": "no-store" } },
  );
}
