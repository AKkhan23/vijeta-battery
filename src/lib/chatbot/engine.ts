/**
 * No-key matching engine.
 *
 * The visitor's message is normalised, tokenised and scored against the
 * hand-curated knowledge entries in ./knowledge. Every reply is a verbatim
 * snippet from that file, so the bot can never invent a price, a dealer or a
 * specification. If nothing matches confidently, it falls back to a graceful
 * "we don't have that on the website" answer with a way to reach the team.
 */

import {
  fallbackAnswer,
  fallbackLinks,
  knowledgeEntries,
  suggestedPrompts,
  type ChatLink,
  type KnowledgeEntry,
} from "@/lib/chatbot/knowledge";

export type ChatResult = {
  reply: string;
  links?: ChatLink[];
  chips?: string[];
};

const SYNONYMS: Record<string, string> = {
  batery: "battery",
  batter: "battery",
  bateri: "battery",
  warrnty: "warranty",
  warranty: "warranty",
  garantee: "warranty",
  guarantee: "warranty",
  garenti: "warranty",
  daam: "price",
  rate: "price",
  kitna: "price",
  kitni: "price",
  dukan: "dealer",
  dukaan: "dealer",
  showroom: "dealer",
  ricksha: "rickshaw",
  riksha: "rickshaw",
  rickshawala: "rickshaw",
  trk: "truck",
  truck: "truck",
  moto: "bike",
  motorcycle: "bike",
  scooty: "bike",
  scooter: "bike",
  gadi: "gaadi",
  gaadi: "gaadi",
  vahan: "gaadi",
  invertor: "inverter",
  litec: "lithtec",
  platnum: "plante",
};

function normalise(value: string) {
  return value.toLowerCase().normalize("NFKC").replace(/[\u200b-\u200d\ufeff]/g, " ").trim();
}

function tokenise(value: string) {
  return normalise(value).match(/[\p{L}\p{N}]+/gu) ?? [];
}

function canonical(token: string) {
  return SYNONYMS[token] ?? token;
}

type Term = { key: string; phrase: boolean };
type Prepared = { entry: KnowledgeEntry; terms: Term[] };

const TOTAL = knowledgeEntries.length;
const documentFrequency = new Map<string, number>();

const prepared: Prepared[] = knowledgeEntries.map((entry) => {
  const terms: Term[] = [];
  for (const raw of entry.keywords) {
    const key = normalise(raw)
      .split(/\s+/)
      .map(canonical)
      .filter(Boolean)
      .join(" ");
    if (!key) continue;
    terms.push({ key, phrase: key.includes(" ") });
    documentFrequency.set(key, (documentFrequency.get(key) ?? 0) + 1);
  }
  return { entry, terms };
});

function idf(key: string) {
  return Math.log((TOTAL + 1) / ((documentFrequency.get(key) ?? 0) + 1)) + 0.35;
}

function fallback(): ChatResult {
  return {
    reply: fallbackAnswer,
    links: fallbackLinks,
    chips: suggestedPrompts,
  };
}

function byId(id: string) {
  return knowledgeEntries.find((entry) => entry.id === id);
}

/** A few unambiguous phrases get a direct route before fuzzy scoring. */
function directRoute(tokenSet: Set<string>, padded: string): KnowledgeEntry | undefined {
  if ((tokenSet.has("gold") && tokenSet.has("silver")) ||
      padded.includes(" gold vs silver ") ||
      padded.includes(" gold or silver ") ||
      padded.includes(" gold silver ")) {
    return byId("gold-vs-silver");
  }

  const fitment = /\b(swift|dzire|baleno|alto|i10|vento|kaunsi|kaunsa|which battery|my car|meri car|meri gaadi|car me|gaadi me)\b/.test(padded);
  if (fitment && !tokenSet.has("inverter") && !tokenSet.has("lithtec") && !tokenSet.has("bike")) {
    return byId("car-fitment");
  }

  return undefined;
}

export function answer(message: string): ChatResult {
  const rawTokens = tokenise(message);
  if (rawTokens.length === 0) return fallback();

  const scoredTokens = rawTokens.map(canonical);
  // Keep every token: short greetings and "thanks" are valid intents. Generic
  // words are naturally down-weighted by the IDF below instead of being removed.
  const tokenSet = new Set(scoredTokens);
  const padded = ` ${scoredTokens.join(" ")} `;

  const direct = directRoute(tokenSet, padded);
  if (direct) {
    return { reply: direct.answer, links: direct.links, chips: direct.chips };
  }

  let best: { entry: KnowledgeEntry; score: number } | null = null;

  for (const { entry, terms } of prepared) {
    let score = 0;
    let matched = false;

    for (const term of terms) {
      if (term.phrase) {
        if (padded.includes(` ${term.key} `)) {
          score += 5 * idf(term.key);
          matched = true;
        }
      } else if (tokenSet.has(term.key)) {
        score += 3 * idf(term.key);
        matched = true;
      }
    }

    if (!matched) continue;
    score *= entry.weight ?? 1;

    if (!best || score > best.score) {
      best = { entry, score };
    }
  }

  if (!best || best.score < 2.2) return fallback();

  return {
    reply: best.entry.answer,
    links: best.entry.links,
    chips: best.entry.chips,
  };
}
