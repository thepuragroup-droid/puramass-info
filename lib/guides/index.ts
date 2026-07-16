import type { Guide } from "./types";
import { beginnersGuide } from "./beginners-guide";
import { reconstitutionGuide } from "./reconstitution-guide";
import { syringeMeasurementGuide } from "./syringe-measurement-guide";

export type { Guide } from "./types";

const all: Guide[] = [beginnersGuide, reconstitutionGuide, syringeMeasurementGuide];

export const guides: Record<string, Guide> = Object.fromEntries(
  all.map((g) => [g.slug, g]),
);

export const guideSlugs = all.map((g) => g.slug);

export function getGuide(slug: string): Guide | undefined {
  return guides[slug];
}
