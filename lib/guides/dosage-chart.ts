import type { Guide } from "./types";

export const dosageChart: Guide = {
  slug: "dosage-chart",
  crumb: "Master Peptide Dosage Chart",
  eyebrow: "Master Reference Chart",
  title: "Master Peptide Dosage Chart",
  lead: "One consolidated table of the research compounds catalogued on this site — each row pairs a vial size with a sensible reconstitution volume, the concentration that results, and the dose range most often cited in the literature. Every compound name links through to its full protocol page, where the syringe-unit math is worked out in detail.",
  pills: [
    { label: "Reference", red: true },
    { label: "mg/mL Concentrations" },
    { label: "Dose Ranges" },
  ],
  disclaimer:
    "Every compound on this chart is supplied strictly for in-vitro and laboratory research. None is approved for human or veterinary use, and the dose ranges shown are arithmetic illustrations drawn from the literature, not dosing instructions or medical advice.",
  sections: [
    {
      id: "sec-1",
      heading: "How to Read This Chart",
      chunks: [
        {
          t: "p",
          text: "Each entry assumes the vial has already been reconstituted with bacteriostatic water to the volume noted, giving the listed concentration in milligrams per milliliter. The dose-range column reflects the spread commonly reported in research protocols — it is not a recommendation. These are investigational compounds, and the numbers exist only to illustrate scale. Where a compound comes in several vial sizes, the chart lists the size that has a published protocol page on this site, so you can follow the link for the full breakdown.",
        },
        {
          t: "callout",
          title: "Concentration is a choice, not a constant.",
          body: "The mg/mL figures here come from the diluent volume used in each compound's protocol. Adding more or less bacteriostatic water changes the concentration, which changes how many syringe units a given dose occupies. Always recalculate against the volume you actually used.",
        },
      ],
    },
    {
      id: "sec-2",
      heading: "Growth-Hormone Secretagogues & GHRH Analogs",
      chunks: [
        {
          t: "p",
          text: "This family — GHRPs, ghrelin-receptor agonists and GHRH analogs — is studied for its effect on the growth-hormone axis. The compounds are typically dosed in micrograms and reconstituted to low concentrations, so a small dose still reads as a measurable number of units.",
        },
        {
          t: "table",
          table: {
            columns: ["Compound", "Vial", "Reconstitute With", "Concentration", "Typical Dose Range", "Frequency"],
            rows: [
              ["[Ipamorelin](/single-peptide-dosages/ipamorelin-5mg)", "5 mg", "3 mL", "1.67 mg/mL", "100–250 mcg", "Daily"],
              ["[CJC-1295 with DAC](/single-peptide-dosages/cjc-1295-dac-5mg)", "5 mg", "2 mL", "2.5 mg/mL", "300 mcg–1 mg", "Weekly"],
              ["[Sermorelin](/single-peptide-dosages/sermorelin-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "200–500 mcg", "Daily"],
              ["[Tesamorelin](/single-peptide-dosages/tesamorelin-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "1–2 mg", "Daily"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-3",
      heading: "Tissue Repair & Recovery Peptides",
      chunks: [
        {
          t: "p",
          text: "Compounds in this group are explored in regeneration, angiogenesis and connective-tissue models. Most are dosed in the few-hundred-microgram range and dissolve readily into clear, low-concentration solutions.",
        },
        {
          t: "table",
          table: {
            columns: ["Compound", "Vial", "Reconstitute With", "Concentration", "Typical Dose Range", "Frequency"],
            rows: [
              ["[BPC-157](/single-peptide-dosages/bpc-157-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "200–600 mcg", "Daily"],
              ["[TB-500](/single-peptide-dosages/tb-500-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "500 mcg–1 mg", "Daily"],
              ["[KPV](/single-peptide-dosages/kpv-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "200–500 mcg", "Daily"],
              ["[Thymosin Alpha-1](/single-peptide-dosages/thymosin-alpha-1-5mg)", "5 mg", "3 mL", "1.67 mg/mL", "300–500 mcg", "Daily"],
              ["[AOD-9604](/single-peptide-dosages/aod-9604-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "300–500 mcg", "Daily"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-4",
      heading: "Metabolic & Incretin Compounds",
      chunks: [
        {
          t: "p",
          text: "The GLP-1, GIP and amylin-class molecules are dosed by the milligram and titrated upward slowly in the studies that examine them. Concentrations are kept higher here so a multi-milligram weekly dose stays within a practical syringe volume.",
        },
        {
          t: "table",
          table: {
            columns: ["Compound", "Vial", "Reconstitute With", "Concentration", "Typical Dose Range", "Frequency"],
            rows: [
              ["[Tirzepatide](/single-peptide-dosages/tirzepatide-10mg)", "10 mg", "2 mL", "5.0 mg/mL", "2.5–10 mg", "Weekly"],
              ["[Retatrutide](/single-peptide-dosages/retatrutide-10mg)", "10 mg", "1 mL", "10.0 mg/mL", "2–8 mg", "Weekly"],
              ["[Cagrilintide](/single-peptide-dosages/cagrilintide-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "600 mcg–4.5 mg", "Weekly"],
              ["[MOTS-c](/single-peptide-dosages/mots-c-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "200 mcg–1 mg", "Daily"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-5",
      heading: "Cognitive, Longevity & Signaling Peptides",
      chunks: [
        {
          t: "p",
          text: "This is a broad bucket — nootropic peptides, mitochondrial protectants, telomere-research compounds and sleep-related molecules. Dosing varies widely, so read the concentration alongside the range rather than comparing rows directly.",
        },
        {
          t: "table",
          table: {
            columns: ["Compound", "Vial", "Reconstitute With", "Concentration", "Typical Dose Range", "Frequency"],
            rows: [
              ["[Semax](/single-peptide-dosages/semax-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "300–800 mcg", "Daily"],
              ["[Selank](/single-peptide-dosages/selank-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "300–500 mcg", "Daily"],
              ["[Epithalon](/single-peptide-dosages/epithalon-10mg)", "10 mg", "2 mL", "5.0 mg/mL", "5–10 mg", "Daily (cycled)"],
              ["[DSIP](/single-peptide-dosages/dsip-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "100–300 mcg", "Daily"],
              ["[SS-31](/single-peptide-dosages/ss-31-10mg)", "10 mg", "1 mL", "10 mg/mL", "5–10 mg", "Daily"],
              ["[NAD+](/single-peptide-dosages/nad-500mg)", "500 mg", "3 mL", "166.7 mg/mL", "50–100 mg", "Daily"],
              ["[Glutathione](/single-peptide-dosages/glutathione-1500mg)", "1500 mg", "5 mL", "300 mg/mL", "100–200 mg", "Daily"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-6",
      heading: "Cosmetic, Pigmentation & Other Compounds",
      chunks: [
        {
          t: "p",
          text: "Melanocortin agonists, copper peptides and the reproductive-axis compounds round out the single-peptide list. Concentrations track the vial size, with larger cosmetic vials reconstituted to noticeably higher mg/mL.",
        },
        {
          t: "table",
          table: {
            columns: ["Compound", "Vial", "Reconstitute With", "Concentration", "Typical Dose Range", "Frequency"],
            rows: [
              ["[GHK-Cu](/single-peptide-dosages/ghk-cu-50mg)", "50 mg", "3 mL", "16.67 mg/mL", "1–2 mg", "5 days/week"],
              ["[Melanotan II](/single-peptide-dosages/melanotan-2-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "250 mcg–1 mg", "Daily"],
              ["[PT-141](/single-peptide-dosages/pt-141-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "500 mcg–1.5 mg", "As needed"],
              ["[Oxytocin](/single-peptide-dosages/oxytocin-10mg)", "10 mg", "3 mL", "3.33 mg/mL", "100–500 mcg", "Daily"],
              ["[HCG](/single-peptide-dosages/hcg-5000iu)", "5000 IU", "5 mL", "1000 IU/mL", "~500 IU", "Weekly"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-7",
      heading: "Blends & Stacks",
      chunks: [
        {
          t: "p",
          text: "Multi-compound vials combine two or more peptides into a single reconstitution. The total milligram figure is the sum of the components, so the concentration and dose range describe the blended solution rather than any one peptide. The protocol pages break down how much of each component a given draw delivers.",
        },
        {
          t: "table",
          table: {
            columns: ["Blend", "Components", "Vial", "Concentration", "Typical Dose Range", "Frequency"],
            rows: [
              ["[BPC-157 + TB-500](/peptide-blend-dosages/bpc-157-tb-500-10mg)", "BPC-157, TB-500", "10 mg", "3.33 mg/mL", "600–800 mcg", "Daily"],
              ["[BPC-157 + TB-500](/peptide-blend-dosages/bpc-157-tb-500-20mg)", "BPC-157, TB-500", "20 mg", "6.67 mg/mL", "250–500 mcg", "Daily"],
              ["[CJC-1295 (no DAC) + Ipamorelin](/peptide-blend-dosages/cjc-1295-no-dac-ipamorelin-10mg)", "CJC-1295, Ipamorelin", "10 mg", "3.33 mg/mL", "100–300 mcg", "Daily"],
              ["[GLOW](/peptide-blend-dosages/glow-70mg)", "GHK-Cu, BPC-157, TB-500", "70 mg", "23.3 mg/mL", "~2.33 mg", "Daily"],
              ["[KLOW](/peptide-blend-dosages/klow-80mg)", "KPV, GHK-Cu, BPC-157, TB-500", "80 mg", "26.7 mg/mL", "250–750 mcg", "Daily"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-8",
      heading: "The Conversion Math Behind Every Row",
      chunks: [
        {
          t: "p",
          text: "Two formulas generate everything in the chart. The first sets the concentration when you reconstitute; the second turns a target dose into a reading on a U-100 insulin syringe, where the full 1 mL barrel equals 100 units.",
        },
        {
          t: "formula",
          text: "Concentration (mg/mL) = total peptide (mg) ÷ diluent volume (mL)",
        },
        {
          t: "formula",
          text: "Syringe units = (dose in mcg ÷ concentration in mcg/mL) × 100",
        },
        {
          t: "steps",
          steps: [
            "Take the vial size and the diluent volume from the chart row. For a 10 mg Ipamorelin vial reconstituted with 3 mL, the concentration is 10 ÷ 3 = 3.33 mg/mL, or 3,330 mcg/mL.",
            "Pick a dose from the range — say 100 mcg.",
            "Divide the dose by the concentration to get the volume: 100 ÷ 3,330 = 0.030 mL.",
            "Multiply by 100 to read it on the syringe: 0.030 × 100 = 3 units.",
            "Confirm the vial yield: a 10 mg vial holds 100 doses of 100 mcg, so plan refrigerated storage accordingly.",
          ],
        },
        {
          t: "callout",
          title: "Higher concentration, smaller draw.",
          body: "The metabolic compounds sit at 5–10 mg/mL precisely because their doses run into the milligrams; a low-concentration fill would push a single dose past the 1 mL barrel. Match the fill volume to the dose size you expect to draw.",
        },
      ],
    },
    {
      id: "sec-9",
      heading: "Storage & Handling Reminders",
      chunks: [
        {
          t: "p",
          text: "Lyophilized powder stays stable for months in a freezer and weeks in a refrigerator before reconstitution. Once in solution, keep vials refrigerated at roughly 2–8 °C and treat a bacteriostatic-water solution as good for about 25–30 days; plain sterile water carries no preservative and should be used within a day or two. Protect solutions from light, avoid repeated freeze-thaw cycles, and label every vial with its reconstitution date and diluent volume so the concentration is never in doubt. The [storage guide](/guides/storage-guide) covers this in full.",
        },
      ],
    },
  ],
  references: [
    {
      cite: "Raun K, et al. Ipamorelin, the first selective growth hormone secretagogue.",
      journal: "European Journal of Endocrinology (1998).",
      href: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
      label: "pubmed.ncbi.nlm.nih.gov/9849822",
    },
    {
      cite: "Jastreboff AM, et al. Tirzepatide once weekly for the treatment of obesity.",
      journal: "New England Journal of Medicine (2022).",
      href: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      label: "pubmed.ncbi.nlm.nih.gov/35658024",
    },
    {
      cite: "Sikiric P, et al. Stable gastric pentadecapeptide BPC 157 in the treatment of organ healing.",
      journal: "Current Pharmaceutical Design (2018).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6428022/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC6428022",
    },
    {
      cite: "A study of retatrutide (LY3437943) in participants with obesity.",
      journal: "ClinicalTrials.gov.",
      href: "https://clinicaltrials.gov/study/NCT04881760",
      label: "clinicaltrials.gov/study/NCT04881760",
    },
    {
      cite: "Pickart L, Margolina A. Regenerative and protective actions of the GHK-Cu peptide.",
      journal: "International Journal of Molecular Sciences (2018).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC6073405",
    },
  ],
  related: [
    { label: "How to Reconstitute Peptides", href: "/guides/reconstitution-guide" },
    { label: "Syringe & Measurement Guide", href: "/guides/syringe-measurement-guide" },
    { label: "Storage & Handling Guide", href: "/guides/storage-guide" },
    { label: "Dosage Calculator", href: "/calculator" },
    { label: "Compound Library", href: "/learn" },
  ],
};
