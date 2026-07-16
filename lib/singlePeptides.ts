export type Variant = { label: string; slug: string };
export type CompoundCard = {
  name: string;
  tag: string;
  blurb: string;
  search: string;
  variants: Variant[];
};

/** The single-peptide index grid. `slug` values omit the `.html` extension. */
export const singlePeptides: CompoundCard[] = [
  {
    name: "Retatrutide",
    tag: "GLP-1 / GIP / Glucagon",
    blurb: "Triple-agonist metabolic research compound.",
    search: "retatrutide glp",
    variants: [
      { label: "5 mg", slug: "retatrutide-5mg" },
      { label: "10 mg", slug: "retatrutide-10mg" },
      { label: "30 mg", slug: "retatrutide-30mg" },
      { label: "60 mg", slug: "retatrutide-60mg" },
    ],
  },
  {
    name: "Tirzepatide",
    tag: "GLP-1 / GIP",
    blurb: "Dual-incretin metabolic research compound.",
    search: "tirzepatide glp",
    variants: [
      { label: "5 mg", slug: "tirzepatide-5mg" },
      { label: "10 mg", slug: "tirzepatide-10mg" },
      { label: "30 mg", slug: "tirzepatide-30mg" },
      { label: "60 mg", slug: "tirzepatide-60mg" },
      { label: "100 mg", slug: "tirzepatide-100mg" },
    ],
  },
  {
    name: "BPC-157",
    tag: "Regenerative",
    blurb: "Body-protective compound; repair pathways.",
    search: "bpc-157 healing",
    variants: [
      { label: "10 mg", slug: "bpc-157-10mg" },
      { label: "20 mg", slug: "bpc-157-20mg" },
      { label: "30 mg", slug: "bpc-157-30mg" },
    ],
  },
  {
    name: "TB-500",
    tag: "Regenerative",
    blurb: "Thymosin β4 fragment; tissue remodeling.",
    search: "tb-500 thymosin",
    variants: [
      { label: "10 mg", slug: "tb-500-10mg" },
      { label: "20 mg", slug: "tb-500-20mg" },
      { label: "30 mg", slug: "tb-500-30mg" },
    ],
  },
  {
    name: "GHK-Cu",
    tag: "Copper Peptide",
    blurb: "Copper tripeptide; collagen & skin research.",
    search: "ghk-cu copper",
    variants: [
      { label: "50 mg", slug: "ghk-cu-50mg" },
      { label: "100 mg", slug: "ghk-cu-100mg" },
    ],
  },
  {
    name: "MOTS-c",
    tag: "Mitochondrial",
    blurb: "Mitochondrial-derived metabolic peptide.",
    search: "mots-c mitochondrial",
    variants: [
      { label: "10 mg", slug: "mots-c-10mg" },
      { label: "20 mg", slug: "mots-c-20mg" },
      { label: "40 mg", slug: "mots-c-40mg" },
    ],
  },
  {
    name: "Ipamorelin",
    tag: "GHRP",
    blurb: "Selective growth-hormone secretagogue.",
    search: "ipamorelin ghrp",
    variants: [{ label: "5 mg", slug: "ipamorelin-5mg" }],
  },
  {
    name: "CJC-1295 w/ DAC",
    tag: "GHRH Analog",
    blurb: "Long-acting growth-hormone-releasing hormone.",
    search: "cjc-1295 dac ghrh",
    variants: [
      { label: "5 mg", slug: "cjc-1295-dac-5mg" },
      { label: "10 mg", slug: "cjc-1295-dac-10mg" },
      { label: "20 mg", slug: "cjc-1295-dac-20mg" },
      { label: "30 mg", slug: "cjc-1295-dac-30mg" },
    ],
  },
  {
    name: "Sermorelin",
    tag: "GHRH Analog",
    blurb: "GHRH (1-29) growth-hormone research analog.",
    search: "sermorelin ghrh",
    variants: [
      { label: "10 mg", slug: "sermorelin-10mg" },
      { label: "20 mg", slug: "sermorelin-20mg" },
      { label: "30 mg", slug: "sermorelin-30mg" },
    ],
  },
  {
    name: "Tesamorelin",
    tag: "GHRH Analog",
    blurb: "GHRH analog; lipid-metabolism research.",
    search: "tesamorelin ghrh",
    variants: [
      { label: "10 mg", slug: "tesamorelin-10mg" },
      { label: "20 mg", slug: "tesamorelin-20mg" },
      { label: "30 mg", slug: "tesamorelin-30mg" },
    ],
  },
  {
    name: "Semax",
    tag: "Neuropeptide",
    blurb: "Heptapeptide; cognitive & BDNF research.",
    search: "semax nootropic",
    variants: [
      { label: "10 mg", slug: "semax-10mg" },
      { label: "20 mg", slug: "semax-20mg" },
      { label: "30 mg", slug: "semax-30mg" },
    ],
  },
  {
    name: "Selank",
    tag: "Neuropeptide",
    blurb: "Tuftsin analog; stress & GABA research.",
    search: "selank anxiolytic",
    variants: [
      { label: "10 mg", slug: "selank-10mg" },
      { label: "20 mg", slug: "selank-20mg" },
      { label: "30 mg", slug: "selank-30mg" },
    ],
  },
  {
    name: "DSIP",
    tag: "Neuropeptide",
    blurb: "Delta sleep-inducing peptide research.",
    search: "dsip sleep",
    variants: [
      { label: "10 mg", slug: "dsip-10mg" },
      { label: "20 mg", slug: "dsip-20mg" },
      { label: "30 mg", slug: "dsip-30mg" },
    ],
  },
  {
    name: "Cagrilintide",
    tag: "Amylin Analog",
    blurb: "Long-acting amylin metabolic research.",
    search: "cagrilintide amylin",
    variants: [
      { label: "10 mg", slug: "cagrilintide-10mg" },
      { label: "20 mg", slug: "cagrilintide-20mg" },
      { label: "30 mg", slug: "cagrilintide-30mg" },
    ],
  },
  {
    name: "Melanotan II",
    tag: "Melanocortin",
    blurb: "α-MSH analog; pigmentation research.",
    search: "melanotan ii mt2",
    variants: [
      { label: "10 mg", slug: "melanotan-2-10mg" },
      { label: "20 mg", slug: "melanotan-2-20mg" },
      { label: "30 mg", slug: "melanotan-2-30mg" },
    ],
  },
  {
    name: "PT-141",
    tag: "Melanocortin",
    blurb: "Bremelanotide; MC3R/MC4R research.",
    search: "pt-141 bremelanotide",
    variants: [{ label: "10 mg", slug: "pt-141-10mg" }],
  },
  {
    name: "NAD+",
    tag: "Coenzyme",
    blurb: "Redox coenzyme; cellular-energy research.",
    search: "nad metabolic",
    variants: [
      { label: "500 mg", slug: "nad-500mg" },
      { label: "1000 mg", slug: "nad-1000mg" },
    ],
  },
  {
    name: "Epithalon",
    tag: "Longevity",
    blurb: "Tetrapeptide; telomerase research.",
    search: "epithalon epitalon",
    variants: [
      { label: "10 mg", slug: "epithalon-10mg" },
      { label: "40 mg", slug: "epithalon-40mg" },
      { label: "50 mg", slug: "epithalon-50mg" },
    ],
  },
  {
    name: "SS-31",
    tag: "Mitochondrial",
    blurb: "Cardiolipin-targeting tetrapeptide.",
    search: "ss-31 elamipretide mitochondrial",
    variants: [{ label: "10 mg", slug: "ss-31-10mg" }],
  },
  {
    name: "AOD-9604",
    tag: "GH Fragment",
    blurb: "GH (176-191) fragment; lipolysis research.",
    search: "aod-9604 fat",
    variants: [{ label: "10 mg", slug: "aod-9604-10mg" }],
  },
  {
    name: "Thymosin Alpha-1",
    tag: "Immune",
    blurb: "Immune-regulating peptide research.",
    search: "thymosin alpha 1 immune",
    variants: [{ label: "5 mg", slug: "thymosin-alpha-1-5mg" }],
  },
  {
    name: "KPV",
    tag: "Anti-Inflammatory",
    blurb: "α-MSH fragment; epithelial research.",
    search: "kpv anti-inflammatory",
    variants: [{ label: "10 mg", slug: "kpv-10mg" }],
  },
  {
    name: "Glutathione",
    tag: "Antioxidant",
    blurb: "Master antioxidant tripeptide research.",
    search: "glutathione antioxidant",
    variants: [{ label: "1500 mg", slug: "glutathione-1500mg" }],
  },
  {
    name: "HCG",
    tag: "Gonadotropin",
    blurb: "Human chorionic gonadotropin research.",
    search: "hcg gonadotropin",
    variants: [{ label: "5000 iu", slug: "hcg-5000iu" }],
  },
  {
    name: "Oxytocin",
    tag: "Neuroendocrine",
    blurb: "Nonapeptide; behavioural research.",
    search: "oxytocin neuropeptide",
    variants: [{ label: "10 mg", slug: "oxytocin-10mg" }],
  },
  {
    name: "Vitamin B12",
    tag: "Vitamin",
    blurb: "Methylcobalamin solution; research grade.",
    search: "b12 vitamin cobalamin",
    variants: [{ label: "10 mL", slug: "b12-10ml" }],
  },
  {
    name: "Bacteriostatic Water",
    tag: "Diluent",
    blurb: "0.9% benzyl-alcohol reconstitution diluent.",
    search: "bac water bacteriostatic diluent",
    variants: [{ label: "3 / 10 mL", slug: "bac-water" }],
  },
];
