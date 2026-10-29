import type { Protocol } from "./protocols/types";
import { bpc157Tb50020mg } from "./protocols/bpc-157-tb-500-20mg";
import { glow70mg } from "./protocols/glow-70mg";
import { klow80mg } from "./protocols/klow-80mg";
import { cjc1295NoDacIpamorelin10mg } from "./protocols/cjc-1295-no-dac-ipamorelin-10mg";

const all: Protocol[] = [bpc157Tb50020mg, glow70mg, klow80mg, cjc1295NoDacIpamorelin10mg];

export const blendProtocols: Record<string, Protocol> = Object.fromEntries(
  all.map((p) => [p.slug, p]),
);

export const blendProtocolSlugs = all.map((p) => p.slug);

export function getBlendProtocol(slug: string): Protocol | undefined {
  return blendProtocols[slug];
}
