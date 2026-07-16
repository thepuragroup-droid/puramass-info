/**
 * Data model for a long-form "Learn" guide page (Beginner's Guide,
 * Reconstitution Guide, Syringe & Measurement Guide, …).
 *
 * Text in prose, list items, steps, table cells, callouts and formulas may use
 * `**double asterisks**` for bold spans and `[label](href)` for inline links
 * (rendered by <GuideRich />). Internal hrefs beginning with "/" become Next
 * <Link>s; anything else renders as an external anchor.
 */

export type GuidePill = { label: string; red?: boolean };

export type GuideTable = {
  columns: string[];
  rows: string[][];
  caption?: string;
};

/** A content block that lives inside a section. */
export type GuideChunk =
  | { t: "p"; text: string }
  | { t: "list"; items: string[] }
  | { t: "steps"; steps: string[] }
  | { t: "table"; table: GuideTable }
  | { t: "callout"; title: string; body: string }
  | { t: "formula"; text: string };

export type GuideSection = {
  id: string;
  heading: string;
  chunks: GuideChunk[];
};

export type GuideReference = {
  /** Citation text up to the source name. */
  cite: string;
  /** Source / journal, rendered in italics. Optional. */
  journal?: string;
  href: string;
  /** Visible link label. */
  label: string;
};

export type GuideRelated = { label: string; href: string };

export type Guide = {
  slug: string;
  /** Short breadcrumb / TOC label. */
  crumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  pills: GuidePill[];
  /** Body sections. References and Related are appended automatically. */
  sections: GuideSection[];
  /** Research-use note shown just before the References heading. */
  disclaimer: string;
  references: GuideReference[];
  related: GuideRelated[];
};
