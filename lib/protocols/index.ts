import type { Protocol } from "./types";
import { retatrutide10mg } from "./retatrutide-10mg";
import { tirzepatide10mg } from "./tirzepatide-10mg";
import { bpc15710mg } from "./bpc-157-10mg";
import { tb5005mg } from "./tb-500-5mg";
import { motsC5mg } from "./mots-c-5mg";
import { ghkCu100mg } from "./ghk-cu-100mg";

export type { Protocol } from "./types";

const all: Protocol[] = [retatrutide10mg, tirzepatide10mg, bpc15710mg, tb5005mg, motsC5mg, ghkCu100mg];

export const protocols: Record<string, Protocol> = Object.fromEntries(
  all.map((p) => [p.slug, p]),
);

export const protocolSlugs = all.map((p) => p.slug);

export function getProtocol(slug: string): Protocol | undefined {
  return protocols[slug];
}
