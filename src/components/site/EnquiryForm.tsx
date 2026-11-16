"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";
import { enquiryTypes, site } from "@/lib/site";

type Values = {
  name: string;
  phone: string;
  city: string;
  email: string;
  type: string;
  message: string;
  company: string;
};

const initial: Values = {
  name: "",
  phone: "",
  city: "",
  email: "",
  type: "",
  message: "",
  company: "",
};

function validate(values: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";

  const digits = values.phone.replace(/\D/g, "");
  const validPhone =
    (digits.length === 10 && /^[6-9]/.test(digits)) ||
    (digits.length === 12 && digits.startsWith("91") && /^[6-9]/.test(digits.slice(2)));
  if (!validPhone) errors.phone = "Enter a valid 10-digit mobile number.";

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email doesn’t look right.";
  }
  if (!values.type) errors.type = "Choose what you’re looking for.";
  return errors;
}

export function EnquiryForm({ defaultType }: { defaultType?: string }) {
  const [values, setValues] = useState<Values>({ ...initial, type: defaultType ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [reference, setReference] = useState("");
  const [serverError, setServerError] = useState("");

  const set = (key: keyof Values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const whatsappHref = useMemo(() => {
    const lines = [
      "Hi VIJETA, I'd like to enquire.",
      values.name && `Name: ${values.name}`,
      values.phone && `Phone: ${values.phone}`,
      values.city && `City: ${values.city}`,
      values.type && `Looking for: ${values.type}`,
      values.message && `Message: ${values.message}`,
    ].filter(Boolean);
    return `https://wa.me/919981716000?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [values]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        reference?: string;
        error?: string;
        fields?: Partial<Record<keyof Values, string>>;
      };

      if (!response.ok || !data.ok) {
        if (data.fields) setErrors(data.fields);
        setServerError(
          data.error === "rate_limited"
            ? "Too many attempts from this connection. Please call or WhatsApp us instead."
            : data.error === "delivery_unavailable"
              ? "Email delivery is being set up. Please call or WhatsApp us with your requirement — your details were not saved."
              : "That didn’t go through. Try again, or message us on WhatsApp.",
        );
        setStatus("error");
        return;
      }

      setReference(data.reference ?? "");
      setStatus("success");
    } catch {
      setServerError("That didn’t go through. Try again, or message us on WhatsApp.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="relative border border-line bg-white p-6 sm:p-9">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-royal" />
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-royal/25 bg-royal/5 text-royal">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="m5 12.5 4.2 4.3L19 6.8"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-[1.9rem] font-bold tracking-tight">
          Enquiry received.
        </h3>
        <p className="mt-3 max-w-[36ch] text-[0.9rem] leading-relaxed text-ink/60">
          Thank you, {values.name.split(" ")[0] || "there"}. Our team will get back to you
          on {values.phone || "the number you gave"}.
        </p>
        {reference && (
          <p className="mt-5 inline-flex items-center gap-2 border border-line bg-paper px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/55">
            Reference
            <span className="text-royal">{reference}</span>
          </p>
        )}

        <div className="mt-7 border-t border-line pt-5">
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/35">
            What happens next
          </p>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-ink/55">
            Our team checks the details and calls you to confirm the right battery and
            the nearest dealer. If it is urgent, WhatsApp is faster.
          </p>
          <Link href="/products" className="link-arrow mt-3 text-[0.78rem]">
            Browse the range while you wait
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-7 flex flex-col gap-2.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setValues({ ...initial, type: defaultType ?? "" });
              setReference("");
            }}
            className="text-[0.78rem] font-medium text-ink/45 underline-offset-4 hover:text-ink hover:underline"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative border border-line bg-white p-6 sm:p-8">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-royal" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-ink/40">Enquiry form</p>
          <h3 className="mt-2 font-display text-[1.45rem] font-bold tracking-tight">
            Send us the details
          </h3>
        </div>
        <span className="hidden border border-line px-2.5 py-1 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/35 sm:inline-block">
          Under a minute
        </span>
      </div>

      {status === "error" && serverError && (
        <p
          role="alert"
          className="mt-5 border border-[#b42318]/25 bg-[#b42318]/[0.04] px-3.5 py-3 text-[0.8rem] leading-relaxed text-[#8f1d14]"
        >
          {serverError}
        </p>
      )}

      <form onSubmit={onSubmit} className="mt-6" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="eyebrow mb-2 block text-ink/45">
              Name <span className="text-royal">*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="field"
              placeholder="Your full name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-[0.7rem] text-[#b42318]">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="eyebrow mb-2 block text-ink/45">
              Mobile <span className="text-royal">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="field"
              placeholder="+91 00000 00000"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-[0.7rem] text-[#b42318]">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="eyebrow mb-2 block text-ink/45">
              City
            </label>
            <input
              id="city"
              name="city"
              autoComplete="address-level2"
              value={values.city}
              onChange={(e) => set("city", e.target.value)}
              className="field"
              placeholder="Where are you?"
            />
          </div>

          <div>
            <label htmlFor="email" className="eyebrow mb-2 block text-ink/45">
              Email <span className="font-sans text-[0.6rem] normal-case tracking-normal text-ink/30">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="field"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-[0.7rem] text-[#b42318]">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="type" className="eyebrow mb-2 block text-ink/45">
            Looking for <span className="text-royal">*</span>
          </label>
          <div className="relative">
            <select
              id="type"
              name="type"
              value={values.type}
              onChange={(e) => set("type", e.target.value)}
              aria-invalid={Boolean(errors.type)}
              aria-describedby={errors.type ? "type-error" : undefined}
              className={`field appearance-none pr-10 ${values.type ? "text-ink" : "text-[#8d95a8]"}`}
            >
              <option value="" disabled>
                Choose a battery or enquiry type
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type} className="text-ink">
                  {type}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 12 12"
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-ink/40"
              fill="none"
            >
              <path d="m2 4.5 4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          {errors.type && (
            <p id="type-error" className="mt-1.5 text-[0.7rem] text-[#b42318]">
              {errors.type}
            </p>
          )}
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <label htmlFor="message" className="eyebrow text-ink/45">
              Vehicle or message
            </label>
            <span className="font-mono text-[0.55rem] text-ink/25">{values.message.length}/1200</span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1200}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className="field min-h-[7rem] resize-y"
            placeholder="Car / tractor model, fuel type, or anything we should know."
          />
        </div>

        {/* honeypot */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <span
                aria-hidden="true"
                className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="mt-3 text-center text-[0.68rem] leading-relaxed text-ink/40">
          We use these details only to answer your enquiry. No mailing list.
        </p>
      </form>
    </div>
  );
}
