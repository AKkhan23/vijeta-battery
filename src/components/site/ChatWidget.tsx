"use client";

import { useEffect, useRef, useState } from "react";
import {
  closingMessage,
  greeting,
  suggestedPrompts,
  type ChatLink,
} from "@/lib/chatbot/knowledge";
import { site } from "@/lib/site";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  links?: ChatLink[];
};

const LABELS = ["Talk with our bot", "Need help? Ask us"];
const THINKING_LINES = [
  "Site data check kar raha hoon…",
  "Ek second…",
  "Jodi raha hoon…",
];
const STORE_KEY = "vj-chat";
const MAX_LEN = 600;

function nextId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function ChatIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-4.6A7.5 7.5 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.1 2.7 4.3 3.6c-.9.5-1.4 1.5-1.2 2.5.7 5.3 4.4 9 9.7 9.7 1 .1 2-.4 2.5-1.2l.9-1.8c.3-.6.1-1.4-.4-1.8l-2.3-1.6c-.5-.3-1.1-.3-1.6 0l-1 .7c-1.6-.8-2.9-2.1-3.7-3.7l.7-1c.3-.5.3-1.1 0-1.6L6.9 3c-.4-.5-1.2-.6-1.8-.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12.04 2.5a9.4 9.4 0 0 0-8.1 14.14L2.5 21.5l4.98-1.4a9.4 9.4 0 1 0 4.56-17.6Zm0 17.05a7.6 7.6 0 0 1-3.88-1.06l-.28-.17-2.89.81.79-2.82-.18-.29a7.65 7.65 0 1 1 6.44 3.53Zm4.34-5.41c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.52 2 .78 2.41.62 2.85.58.44-.04 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
      <path
        d="m2.5 9.6 14.2-6.1-6 14.2-1.8-5.5-6.4-2.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m8.9 12.2 7.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3 w-3">
      <path
        d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Typing({ line }: { line?: string }) {
  return (
    <div className="vjchat-up flex justify-start">
      <div className="rounded-2xl rounded-bl-sm border border-line bg-white px-3.5 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="vjchat-dot h-1.5 w-1.5 rounded-full bg-royal" style={{ animationDelay: "0ms" }} />
          <span className="vjchat-dot h-1.5 w-1.5 rounded-full bg-royal" style={{ animationDelay: "150ms" }} />
          <span className="vjchat-dot h-1.5 w-1.5 rounded-full bg-royal" style={{ animationDelay: "300ms" }} />
        </div>
        {line ? <p className="mt-1.5 text-[11px] text-ink/45">{line}</p> : null}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [labelIdx, setLabelIdx] = useState(0);
  const [microIdx, setMicroIdx] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chips, setChips] = useState<string[]>(() => suggestedPrompts.slice(0, 4));
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [greetingPending, setGreetingPending] = useState(false);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>([]);
  const hydrated = useRef(false);
  const greetingDone = useRef(false);
  const wasOpen = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Restore conversation after mount (never during render — avoids hydration mismatch).
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter(
            (m): m is Message =>
              !!m &&
              (m.role === "user" || m.role === "assistant") &&
              typeof m.content === "string",
          );
          if (valid.length) {
            setMessages(valid);
            greetingDone.current = true;
          }
        }
      }
    } catch {
      /* ignore malformed or unavailable storage */
    }
    hydrated.current = true;
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
    if (!hydrated.current) return;
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify(messages));
    } catch {
      /* storage may be unavailable */
    }
  }, [messages]);

  // Hide the launcher near the contact / enquiry sections, as FloatingActions does.
  useEffect(() => {
    const targets = document.querySelectorAll("#contact, #enquiry");
    if (!targets.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => setAtContact(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.02 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setIsMobile(mq.matches);
      setReducedMotion(motionMq.matches);
    };
    update();
    mq.addEventListener("change", update);
    motionMq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      motionMq.removeEventListener("change", update);
    };
  }, []);

  // Launcher label rotation — paused on hover / focus and off for reduced motion.
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(() => setLabelIdx((i) => (i + 1) % LABELS.length), 4000);
    return () => clearInterval(id);
  }, [paused, reducedMotion]);

  useEffect(() => {
    if (!thinking || reducedMotion) return;
    const id = setInterval(() => setMicroIdx((i) => (i + 1) % THINKING_LINES.length), 900);
    return () => clearInterval(id);
  }, [thinking, reducedMotion]);

  // First-open greeting: a short typing beat, then the knowledge-base greeting.
  useEffect(() => {
    if (!open || greetingDone.current || messagesRef.current.length) return;
    setGreetingPending(true);
    const delay = 450 + Math.random() * 250;
    const timer = setTimeout(() => {
      setMessages((prev) => [
        { id: nextId(), role: "assistant", content: greeting },
        ...prev,
      ]);
      setGreetingPending(false);
      greetingDone.current = true;
    }, delay);
    return () => clearTimeout(timer);
  }, [open]);

  // Move focus into the panel on open and back to the launcher on close.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const timer = setTimeout(() => inputRef.current?.focus(), 90);
      return () => clearTimeout(timer);
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      const timer = setTimeout(() => launcherRef.current?.focus(), 0);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePanel();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(
      () => endRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "end" }),
      60,
    );
    return () => clearTimeout(timer);
  }, [open, messages.length, thinking, greetingPending, reducedMotion]);

  function openPanel() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
  }

  function closePanel() {
    setShown(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 240);
  }

  function endChat() {
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "assistant", content: closingMessage },
    ]);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => closePanel(), 900);
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || thinking || greetingPending) return;
    const history = messages.map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { id: nextId(), role: "user", content: trimmed }]);
    setInput("");
    setThinking(true);
    setMicroIdx(0);

    const [data] = await Promise.all([
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      })
        .then((res) => res.json())
        .catch(() => null),
      new Promise((resolve) => setTimeout(resolve, 950)),
    ]);

    if (data && data.ok === true && typeof data.reply === "string") {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "assistant",
          content: data.reply,
          links: Array.isArray(data.links) ? (data.links as ChatLink[]) : undefined,
        },
      ]);
      if (Array.isArray(data.chips) && data.chips.length) {
        setChips(data.chips.slice(0, 4));
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "assistant",
          content:
            "Sorry, I couldn't reach the service just now. Please call us or message on WhatsApp — we're happy to help.",
        },
      ]);
    }
    setThinking(false);
  }

  return (
    <>
      <style>{`
        .vjchat-ring { animation: vjchat-pulse 2.6s ease-out infinite; }
        @keyframes vjchat-pulse {
          0% { box-shadow: 0 0 0 0 rgba(20,54,200,0.45); }
          70% { box-shadow: 0 0 0 12px rgba(20,54,200,0); }
          100% { box-shadow: 0 0 0 0 rgba(20,54,200,0); }
        }
        .vjchat-cursor { animation: vjchat-blink 1s steps(1) infinite; }
        @keyframes vjchat-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .vjchat-dot { animation: vjchat-bounce 1s ease-in-out infinite; }
        @keyframes vjchat-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.45; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .vjchat-up { animation: vjchat-fadeup 0.36s ease-out both; }
        @keyframes vjchat-fadeup {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .vjchat-paused, .vjchat-paused * { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) {
          .vjchat-ring, .vjchat-cursor, .vjchat-dot, .vjchat-up { animation: none !important; }
        }
      `}</style>

      {!open ? (
        <button
          ref={launcherRef}
          type="button"
          onClick={openPanel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-label="Open chat with VIJETA Service Assistant"
          aria-hidden={atContact || undefined}
          inert={atContact}
          className={`fixed bottom-[80px] right-4 z-50 flex items-center gap-2 rounded-full bg-royal px-3.5 py-2.5 text-white shadow-[0_16px_38px_-16px_rgba(20,54,200,0.95)] transition-all duration-300 hover:bg-royal-deep sm:bottom-[84px] sm:right-6 sm:px-4 ${
            paused ? "vjchat-paused" : ""
          } ${atContact ? "pointer-events-none translate-y-2 opacity-0" : "opacity-100"}`}
        >
          <span className="vjchat-ring grid h-6 w-6 place-items-center rounded-full bg-white/15">
            <ChatIcon className="h-[17px] w-[17px]" />
          </span>
          <span className="whitespace-nowrap text-[13px] font-semibold leading-none tracking-[-0.01em]">
            {LABELS[labelIdx]}
            <span className="vjchat-cursor ml-0.5 inline-block font-normal">|</span>
          </span>
        </button>
      ) : null}

      {open ? (
        <>
          <div
            aria-hidden="true"
            onClick={closePanel}
            className={`fixed inset-0 z-[55] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 sm:hidden ${
              shown ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal={isMobile ? true : undefined}
            aria-label="VIJETA Service Assistant chat"
            className={`fixed inset-0 z-[60] flex flex-col overflow-hidden bg-paper pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] shadow-[0_30px_80px_-20px_rgba(8,11,20,0.5)] transition-all duration-300 ease-out sm:inset-y-4 sm:right-4 sm:left-auto sm:w-[420px] sm:rounded-3xl sm:pt-0 sm:pb-0 ${
              shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <header className="shrink-0 bg-royal px-4 py-3 text-white sm:px-5">
              <div className="flex items-center gap-2">
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-extrabold leading-none tracking-[0.18em]">
                    VIJETA
                  </span>
                  <span className="mt-1 block text-[11px] font-medium text-white/70">
                    Service Assistant
                  </span>
                </span>
                <a
                  href={`tel:${site.phonePrimary}`}
                  aria-label="Call VIJETA Batteries"
                  title="Call us"
                  className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1.5 text-[11px] font-semibold transition-colors hover:bg-white/20"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Call</span>
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with VIJETA Batteries on WhatsApp"
                  title="WhatsApp us"
                  className="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1.5 text-[11px] font-semibold transition-colors hover:bg-white/20"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={closePanel}
                  aria-label="Close chat"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10.5px] text-white/75">
                <span className="h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-300/25" />
                Online · replies from vijetabattery.com
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5" data-lenis-prevent>
              <div className="flex flex-col gap-3">
                {messages.map((m) => {
                  const isUser = m.role === "user";
                  return (
                    <div key={m.id} className={`vjchat-up flex ${isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                          isUser
                            ? "rounded-br-sm bg-royal text-white"
                            : "rounded-bl-sm border border-line bg-white text-ink"
                        }`}
                      >
                        <p
                          aria-live={isUser ? undefined : "polite"}
                          className="whitespace-pre-wrap break-words"
                        >
                          {m.content}
                        </p>
                        {m.links && m.links.length ? (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {m.links.map((link, i) => {
                              const external = /^https?:\/\//i.test(link.href);
                              return (
                                <a
                                  key={i}
                                  href={link.href}
                                  target={external ? "_blank" : undefined}
                                  rel={external ? "noopener noreferrer" : undefined}
                                  className="inline-flex items-center gap-1 rounded-full border border-royal/25 bg-mist/70 px-2.5 py-1 text-[11px] font-semibold text-royal transition-colors hover:bg-royal hover:text-white"
                                >
                                  {link.label}
                                  <ArrowIcon />
                                </a>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
                {greetingPending ? <Typing /> : null}
                {thinking ? <Typing line={THINKING_LINES[microIdx]} /> : null}
              </div>

              {chips.length && !thinking && !greetingPending ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => send(chip)}
                      className="rounded-full border border-royal/25 bg-white px-3 py-1.5 text-[12px] font-medium text-royal transition-colors hover:border-royal hover:bg-mist"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              ) : null}
              <div ref={endRef} />
            </div>

            <footer className="shrink-0 border-t border-line bg-white/85 px-3 pt-2.5 pb-3 sm:px-4">
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-white p-1.5 focus-within:border-royal focus-within:ring-2 focus-within:ring-royal/15">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  maxLength={MAX_LEN}
                  aria-label="Type your message"
                  placeholder="Ask about batteries, warranty, fitment…"
                  onChange={(e) => {
                    setInput(e.target.value);
                    const el = e.target;
                    el.style.height = "auto";
                    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  className="max-h-[120px] min-h-[36px] flex-1 resize-none bg-transparent px-2 py-1.5 text-[13px] leading-snug text-ink outline-none placeholder:text-ink/40"
                />
                <button
                  type="button"
                  onClick={() => send(input)}
                  disabled={!input.trim() || thinking || greetingPending}
                  aria-label="Send message"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-royal text-white transition-colors hover:bg-royal-deep disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <SendIcon />
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2 px-1">
                <p className="text-[10px] leading-snug text-ink/45">
                  Answers from vijetabattery.com · Exact fitment? Confirm with your dealer.
                </p>
                <button
                  type="button"
                  onClick={endChat}
                  className="shrink-0 rounded-full border border-royal/20 bg-white px-2.5 py-1 font-sans text-[10px] font-semibold text-royal transition-colors hover:border-royal hover:bg-mist"
                >
                  End chat
                </button>
              </div>
            </footer>
          </div>
        </>
      ) : null}
    </>
  );
}
