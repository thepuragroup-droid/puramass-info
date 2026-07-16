export type BlendCard = {
  name: string;
  tag: string;
  blurb: string;
  slug: string;
};

/** The peptide-blend index grid. `slug` values omit the `.html` extension. */
export const blends: BlendCard[] = [
  {
    name: "BPC-157 + TB-500 — 10 mg",
    tag: "Regenerative Blend",
    blurb: "The “Wolverine” recovery pairing at a 10 mg total fill (5 mg + 5 mg).",
    slug: "bpc-157-tb-500-10mg",
  },
  {
    name: "BPC-157 + TB-500 — 20 mg",
    tag: "Regenerative Blend",
    blurb: "The “Wolverine” pairing at a 20 mg total fill (10 mg + 10 mg).",
    slug: "bpc-157-tb-500-20mg",
  },
  {
    name: "GLOW — 70 mg",
    tag: "Recovery Blend",
    blurb: "BPC-157 + GHK-Cu + TB-500 tri-compound regenerative blend.",
    slug: "glow-70mg",
  },
  {
    name: "KLOW — 80 mg",
    tag: "Recovery Blend",
    blurb: "GHK-Cu + BPC-157 + TB-500 + KPV quad-compound blend.",
    slug: "klow-80mg",
  },
  {
    name: "CJC-1295 (No DAC) + Ipamorelin — 10 mg",
    tag: "Growth-Hormone Blend",
    blurb: "The classic GHRH + GHRP growth-hormone research pairing.",
    slug: "cjc-1295-no-dac-ipamorelin-10mg",
  },
];
