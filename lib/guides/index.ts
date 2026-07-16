import type { Guide } from "./types";
import { beginnersGuide } from "./beginners-guide";
import { reconstitutionGuide } from "./reconstitution-guide";
import { syringeMeasurementGuide } from "./syringe-measurement-guide";
import { storageGuide } from "./storage-guide";
import { dosageChart } from "./dosage-chart";
import { glossary } from "./glossary";

export type { Guide } from "./types";

const all: Guide[] = [
  beginnersGuide,
  reconstitutionGuide,
  syringeMeasurementGuide,
  storageGuide,
  dosageChart,
  glossary,
];

export const guides: Record<string, Guide> = Object.fromEntries(
  all.map((g) => [g.slug, g]),
);

export const guideSlugs = all.map((g) => g.slug);

export function getGuide(slug: string): Guide | undefined {
  return guides[slug];
}
