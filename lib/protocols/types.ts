/**
 * Data model for a single-peptide protocol page.
 *
 * Rich text in `paragraphs`, list `items`, table cells and captions may use
 * `**double asterisks**` to mark bold spans (rendered by <RichText />).
 */

export type Pill = { label: string; red?: boolean };

export type ChartRow = { label: string; value: string };

export type ProtocolTable = {
  columns: string[];
  rows: string[][];
  caption?: string;
};

export type Reference = {
  /** Citation text, e.g. "Rosenstock J, et al. Retatrutide in Type 2 diabetes." */
  cite: string;
  /** Journal / source, rendered in italics, e.g. "The Lancet (2023)." */
  journal: string;
  href: string;
  /** Visible link label, e.g. "pubmed.ncbi.nlm.nih.gov/37385280". */
  label: string;
};

export type RelatedLink = { label: string; href: string };

export type Section =
  | { id: string; heading: string; type: "prose"; paragraphs: string[] }
  | {
      id: string;
      heading: string;
      type: "table";
      intro?: string;
      table: ProtocolTable;
      note?: string;
    }
  | { id: string; heading: string; type: "steps"; intro?: string; steps: string[] }
  | { id: string; heading: string; type: "list"; intro?: string; items: string[] }
  | {
      id: string;
      heading: string;
      type: "benefits";
      groups: { subheading: string; items: string[] }[];
    }
  | { id: string; heading: string; type: "references"; refs: Reference[] }
  | { id: string; heading: string; type: "related"; links: RelatedLink[] };

export type Protocol = {
  slug: string;
  /** Short breadcrumb label, e.g. "Retatrutide 10 mg". */
  crumb: string;
  title: string;
  lead: string;
  pills: Pill[];
  chartTitle: string;
  chart: ChartRow[];
  sections: Section[];
  /** Research-use note shown before the References section. */
  disclaimer: string;
};
