export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const singlePeptides: NavChild[] = [
  { label: "All Single-Peptide Protocols", href: "/single-peptide-dosages" },
  { label: "Retatrutide", href: "/single-peptide-dosages/retatrutide-10mg" },
  { label: "Tirzepatide", href: "/single-peptide-dosages/tirzepatide-10mg" },
  { label: "BPC-157", href: "/single-peptide-dosages/bpc-157-10mg" },
  { label: "TB-500", href: "/single-peptide-dosages/tb-500-10mg" },
  { label: "MOTS-C", href: "/single-peptide-dosages/mots-c-10mg" },
  { label: "GHK-Cu", href: "/single-peptide-dosages/ghk-cu-50mg" },
  { label: "Semax", href: "/single-peptide-dosages/semax-10mg" },
  { label: "Selank", href: "/single-peptide-dosages/selank-10mg" },
];

export const blends: NavChild[] = [
  { label: "All Blend Protocols", href: "/peptide-blend-dosages" },
  { label: "Wolverine (BPC-157 + TB-500)", href: "/peptide-blend-dosages/bpc-157-tb-500-20mg" },
  { label: "GLOW Blend", href: "/peptide-blend-dosages/glow-70mg" },
  { label: "KLOW Blend", href: "/peptide-blend-dosages/klow-80mg" },
  { label: "CJC-1295 + Ipamorelin", href: "/peptide-blend-dosages/cjc-1295-no-dac-ipamorelin-10mg" },
];

export const learn: NavChild[] = [
  { label: "Beginner's Guide", href: "/guides/beginners-guide" },
  { label: "Reconstitution Guide", href: "/guides/reconstitution-guide" },
  { label: "Syringe & Measurement", href: "/guides/syringe-measurement-guide" },
  { label: "Storage Guide", href: "/guides/storage-guide" },
  { label: "Master Dosage Chart", href: "/guides/dosage-chart" },
  { label: "Glossary", href: "/guides/glossary" },
  { label: "Compound Library", href: "/learn" },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Single Peptides", href: "/single-peptide-dosages", children: singlePeptides },
  { label: "Blends", href: "/peptide-blend-dosages", children: blends },
  { label: "Learn", href: "/guides/beginners-guide", children: learn },
  { label: "Calculator", href: "/calculator" },
  { label: "FAQ", href: "/guides/faq" },
];
