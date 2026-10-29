import type { Protocol } from "./types";

export const ghkCu100mg: Protocol = {
  slug: "ghk-cu-100mg",
  crumb: "GHK-Cu 100 mg",
  title: "GHK-Cu (100 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 100 mg GHK-Cu research vial is reconstituted and measured, expressed in insulin-syringe units for laboratory work. Human GHK-Cu research is almost entirely topical — the injection schedules below are community-reported arithmetic, not clinically validated dosing.",
  pills: [
    { label: "Copper Tripeptide", red: true },
    { label: "Collagen & Skin Research" },
    { label: "5×/Week or 3×/Week" },
    { label: "Lyophilized" },
  ],
  chartTitle: "GHK-Cu 100 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL diluent → 33.33 mg/mL" },
    { label: "Typical Range", value: "1 mg – 2 mg per administration" },
    { label: "Per 1 mg (1000 mcg)", value: "3 units (0.03 mL)" },
    { label: "Storage (lyophilized)", value: "Per batch label; cool, dry, dark" },
  ],
  disclaimer:
    "GHK-Cu has no FDA-approved injectable dosing regimen, and FDA compounding materials flag potential safety concerns for injections containing GHK-Cu, with limited human safety data. Published human studies are topical or wound-formulation studies. The schedules on this page are calculation examples only, and nothing here is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "GHK-Cu (glycyl-L-histidyl-L-lysine copper, also called copper tripeptide-1) is a naturally occurring tripeptide that binds a copper ion. First identified in human plasma, it has been studied for decades in connection with collagen and extracellular-matrix signalling, tissue remodelling, antioxidant activity and wound repair. The figures below are compiled strictly for laboratory and educational reference.",
        "Because the vial is large, the concentration is high: adding **3.0 mL of diluent** to a 100 mg vial yields **33.33 mg/mL**. Each U-100 unit (0.01 mL) therefore holds about **333 mcg**, so 1 mg lands at just 3 units and 2 mg at 6 units.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard Schedule (5 Days per Week)",
      type: "table",
      intro:
        "The commonly reported standard approach administers once daily on five days each week, stepping up every four weeks.",
      table: {
        columns: ["Phase", "Dose per Administration", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–4", "1.0 mg (1000 mcg)", "3 units", "0.03 mL", "5 days / week"],
          ["Weeks 5–8", "1.5 mg (1500 mcg)", "4.5 units", "0.045 mL", "5 days / week"],
          ["Weeks 9–12+", "2.0 mg (2000 mcg)", "6 units", "0.06 mL", "5 days / week"],
        ],
        caption:
          "Units assume a 33.33 mg/mL fill (3 mL diluent). Cumulative use: ≈50 mg by week 8, ≈90 mg by week 12, ≈130 mg by week 16.",
      },
      note: "These are community-reported practice patterns, not a regimen validated in any human injection trial.",
    },
    {
      id: "sec-3",
      heading: "Alternative Schedule (3 Times per Week)",
      type: "table",
      intro:
        "A flat alternative holds a single amount three times weekly (for example Monday, Wednesday and Friday), totalling about 6 mg per week.",
      table: {
        columns: ["Phase", "Dose per Administration", "Units (U-100)", "Volume", "Frequency"],
        rows: [["Weeks 1–12+", "2.0 mg (2000 mcg)", "6 units", "0.06 mL", "3× / week"]],
        caption: "Cumulative use: ≈48 mg by week 8, ≈72 mg by week 12, ≈96 mg by week 16.",
      },
    },
    {
      id: "sec-4",
      heading: "Measuring Small Volumes Accurately",
      type: "list",
      intro:
        "At 33.33 mg/mL every dose in the tables is 6 units or less, which sits at the bottom of a standard syringe scale where reading errors are proportionally large.",
      items: [
        "**Use a 0.3 mL (30-unit) U-100 syringe** — its wider spacing makes 3–6 unit marks far easier to read than a 1 mL barrel.",
        "**4.5 units needs half-unit markings.** Most 1 mL and 0.5 mL syringes are graduated in whole or 2-unit steps and cannot measure it reliably.",
        "**A 1-unit misread is a 33% error at 3 units.** If the readable range is a problem, a larger diluent volume lowers the concentration and enlarges the draw — but every unit value must then be recalculated.",
        "**Units are volume markings**, not international units of GHK-Cu — 1 unit is always 0.01 mL.",
      ],
    },
    {
      id: "sec-5",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed vial and the diluent reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 3.0 mL of sterile or bacteriostatic water and run it slowly down the inside wall of the vial to reduce foaming.",
        "Swirl or roll gently until fully dissolved. Do not shake. Copper-bound GHK typically gives a blue-tinted solution.",
        "Label the vial with the concentration (33.33 mg/mL), preparation date, lot number and storage condition.",
        "Refrigerate between uses, protect from light and follow the batch's own discard guidance.",
      ],
    },
    {
      id: "sec-6",
      heading: "Supplies Needed",
      type: "list",
      intro: "Totals follow the two schedules above.",
      items: [
        "**GHK-Cu vials (100 mg):** 1 vial covers 8–12 weeks on either schedule; the 5-day schedule needs a second vial by week 16 (≈130 mg).",
        "**Insulin syringes (0.3 mL U-100):** 5/week on the standard schedule (40 / 60 / 80 for 8 / 12 / 16 weeks); 3/week on the alternative (24 / 36 / 48).",
        "**Diluent:** 3 mL per vial — a single 10 mL bottle covers up to three vials.",
        "**Alcohol swabs:** two per administration — one 100-count box covers 8 weeks on the standard schedule or 16 weeks on the alternative; 12–16 weeks on the standard schedule needs two boxes.",
      ],
    },
    {
      id: "sec-7",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Store sealed dry material as the batch label directs — cool, dry and protected from light. Once reconstituted, refrigerate, minimise light exposure and avoid freeze-thaw cycles. Note that at these dose sizes a single 100 mg vial is drawn from for **two to three months**, which is longer than the in-use window many reconstituted peptide preparations are documented for. The vial counts above are arithmetic minimums; if the product's documented beyond-use period is shorter, plan to reconstitute fresh vials (or use a smaller vial strength) on that cadence instead.",
      ],
    },
    {
      id: "sec-8",
      heading: "How GHK-Cu Is Thought to Work",
      type: "prose",
      paragraphs: [
        "GHK is a three-amino-acid peptide (glycine–histidine–lysine) with a high affinity for copper; GHK-Cu is the copper-bound complex. Reviews describe it acting on a network of processes rather than a single target — extracellular-matrix signalling, collagen and elastin synthesis, antioxidant and anti-inflammatory pathways, and broad shifts in gene-expression patterns. Experimental work has also linked GHK to modulation of matrix metalloproteinase-2, an enzyme involved in matrix remodelling, and local GHK-Cu exposure increased collagen deposition in a rat wound-chamber model.",
        "These mechanisms explain why research concentrates on skin structure, wound healing and remodelling. They do not, on their own, show that an injected preparation produces those outcomes or establish what amount would.",
      ],
    },
    {
      id: "sec-9",
      heading: "What the Human Evidence Does and Doesn't Show",
      type: "list",
      items: [
        "**Topical and wound studies:** human research covers a topical copper-peptide treatment of diabetic ulcers, post-laser-resurfacing skin care, comparative creams, a split-face serum study of collagen and wrinkle measures, and human-skin penetration work.",
        "**Ongoing trial:** a Phase 2 study (NCT07437586) is evaluating a topical GHK-Cu gel for acute skin-wound healing.",
        "**Device, not drug:** FDA records include a topical GHK-Cu wound-dressing gel cleared as a device — this is route- and product-specific and is not approval of any injection.",
        "**No injection trials:** no controlled human study has established an injected GHK-Cu dose, frequency, cycle length or systemic benefit. Topical findings cannot be converted into a subcutaneous schedule.",
        "**Hair and cosmetic claims** (hair growth, microneedling and similar) rest on formulation-specific topical evidence and do not establish an injected dose.",
      ],
    },
    {
      id: "sec-10",
      heading: "Safety & Regulatory Notes",
      type: "list",
      items: [
        "FDA compounding materials identify potential safety concerns for injections containing GHK-Cu and note limited human safety information.",
        "FDA evaluates bulk substances route by route — topical tolerability does not carry over to injection.",
        "Injection-specific risks depend on sterility, endotoxin control, concentration, excipients, copper exposure and technique.",
        "A vial label does not confirm identity, purity or sterility — keep lot-specific documentation.",
      ],
    },
    {
      id: "sec-11",
      heading: "Injection/Handling Technique (Reference Only)",
      type: "list",
      items: [
        "Use new sterile equipment for every preparation and administration.",
        "Clean the vial stopper and the site, and let the antiseptic dry fully.",
        "Read the U-100 marking at eye level and confirm it against the mL value in the table.",
        "Rotate and record sites rather than reusing one location.",
        "Record dose, concentration, volume, date, lot and site, and dispose of sharps immediately in an approved container.",
      ],
    },
    {
      id: "sec-12",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Mulder GD, et al. Topical glycyl-L-histidyl-L-lysine copper in diabetic ulcers.",
          journal: "Wound Repair and Regeneration.",
          href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
          label: "pubmed.ncbi.nlm.nih.gov/17147644",
        },
        {
          cite: "Miller TR, et al. Topical copper tripeptide complex after carbon-dioxide laser resurfacing.",
          journal: "Archives of Facial Plastic Surgery (2006).",
          href: "https://pubmed.ncbi.nlm.nih.gov/16847171/",
          label: "pubmed.ncbi.nlm.nih.gov/16847171",
        },
        {
          cite: "Abdulghani AA, et al. Comparative topical-cream study including a copper-binding peptide preparation.",
          journal: "(1998).",
          href: "https://doi.org/10.1016/S1088-3371(98)00011-4",
          label: "doi.org/10.1016/S1088-3371(98)00011-4",
        },
        {
          cite: "Badenhorst T, et al. Split-face GHK-Cu nano-serum study of collagen, elastin and wrinkle outcomes.",
          journal: "(2016).",
          href: "https://doi.org/10.4172/2329-8847.1000166",
          label: "doi.org/10.4172/2329-8847.1000166",
        },
        {
          cite: "Hostynek JJ, et al. Human skin penetration of a copper tripeptide preparation.",
          journal: "Inflammation Research (2010).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2945467/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC2945467",
        },
        {
          cite: "Maquart FX, et al. Local GHK-Cu in a rat experimental wound-chamber model.",
          journal: "Journal of Clinical Investigation (1993).",
          href: "https://pubmed.ncbi.nlm.nih.gov/8227353/",
          label: "pubmed.ncbi.nlm.nih.gov/8227353",
        },
        {
          cite: "Pickart L, Margolina A. Regenerative and protective actions of the GHK-Cu peptide in the light of the new gene data.",
          journal: "International Journal of Molecular Sciences (2018).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC6073405",
        },
        {
          cite: "Maquart FX, et al. GHK-related modulation of matrix metalloproteinase-2 expression.",
          journal: "(2000).",
          href: "https://pubmed.ncbi.nlm.nih.gov/11045606/",
          label: "pubmed.ncbi.nlm.nih.gov/11045606",
        },
        {
          cite: "Phase 2 study of topical GHK-Cu gel for acute skin-wound healing (NCT07437586).",
          journal: "ClinicalTrials.gov.",
          href: "https://clinicaltrials.gov/study/NCT07437586",
          label: "clinicaltrials.gov/study/NCT07437586",
        },
        {
          cite: "Certain bulk drug substances for use in compounding that may present significant safety risks.",
          journal: "U.S. Food and Drug Administration.",
          href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
          label: "fda.gov — compounding safety risks",
        },
        {
          cite: "510(k) K953853 — topical wound-dressing gel device record.",
          journal: "U.S. Food and Drug Administration.",
          href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K953853",
          label: "accessdata.fda.gov — K953853",
        },
        {
          cite: "Subcutaneous injection technique job aid.",
          journal: "Centers for Disease Control and Prevention.",
          href: "https://www.cdc.gov/vaccines/hcp/admin/downloads/YCTS-VaxAdmin-Subcut-injection.pdf",
          label: "cdc.gov — subcutaneous injection",
        },
      ],
    },
    {
      id: "sec-13",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "GHK-Cu — 50 mg Vial", href: "/single-peptide-dosages/ghk-cu-50mg" },
        { label: "GLOW Blend (70 mg)", href: "/peptide-blend-dosages/glow-70mg" },
        { label: "BPC-157 — 10 mg Vial", href: "/single-peptide-dosages/bpc-157-10mg" },
        { label: "TB-500 — 5 mg Vial", href: "/single-peptide-dosages/tb-500-5mg" },
      ],
    },
  ],
};
