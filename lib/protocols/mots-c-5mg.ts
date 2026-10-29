import type { Protocol } from "./types";

export const motsC5mg: Protocol = {
  slug: "mots-c-5mg",
  crumb: "MOTS-c 5 mg",
  title: "MOTS-c (5 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 5 mg MOTS-c research vial is reconstituted and measured, expressed in insulin-syringe units for laboratory work. The schedule below reflects community-reported use; no controlled human study has established a MOTS-c injection dose.",
  pills: [
    { label: "Mitochondrial-Derived Peptide", red: true },
    { label: "AMPK Signalling" },
    { label: "Daily Dosing" },
    { label: "Lyophilized" },
  ],
  chartTitle: "MOTS-c 5 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → 1.67 mg/mL" },
    { label: "Typical Daily Range", value: "500 mcg – 2000 mcg" },
    { label: "Per 500 mcg (0.5 mg)", value: "≈ 30 units (0.30 mL)" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "MOTS-c is an investigational compound with no FDA-approved human dosing regimen. The FDA has not identified published human exposure data for drug products containing native MOTS-c by any route. The schedule on this page is community-reported arithmetic, not a validated protocol, and nothing here is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "MOTS-c is a 16-amino-acid peptide encoded within the 12S rRNA region of mitochondrial DNA. First described in 2015, it is studied as a metabolic signalling molecule linked to the folate–AICAR–AMPK pathway, and in laboratory models it has been reported to move into the nucleus under metabolic stress and influence nuclear gene expression. The figures below are compiled strictly for laboratory and educational reference.",
        "For a 5 mg vial, adding **3.0 mL of bacteriostatic water** yields **1.67 mg/mL** (≈1,667 mcg/mL). Every 0.01 mL drawn on a U-100 insulin syringe is 1 unit and holds about 16.7 mcg, so a 500 mcg measurement lands at 30 units and 1,000 mcg at 60 units.",
      ],
    },
    {
      id: "sec-2",
      heading: "Community-Reported Titration Schedule",
      type: "table",
      intro:
        "Online community descriptions step the daily amount up every two weeks with once-daily subcutaneous administration. The rows are shown to make the vial, unit and volume arithmetic transparent — published human research has not validated the amounts, frequency or progression.",
      table: {
        columns: ["Phase", "Daily Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–2", "500 mcg (0.5 mg)", "30 units", "0.30 mL", "Once daily"],
          ["Weeks 3–4", "1000 mcg (1 mg)", "60 units", "0.60 mL", "Once daily"],
          ["Weeks 5–6", "1500 mcg (1.5 mg)", "90 units", "0.90 mL", "Once daily"],
          ["Weeks 7–8", "2000 mcg (2 mg)", "120 units (2 × 60)", "1.20 mL", "Once daily"],
        ],
        caption:
          "Units assume a 1.67 mg/mL fill (3 mL BAC water). 120 units exceeds a 1 mL syringe, so the 2000 mcg step is measured as two 60-unit draws.",
      },
      note: "At the higher steps a 5 mg vial runs out quickly — 3 full 1500 mcg amounts or 2 full 2000 mcg amounts per vial — which is why larger vial strengths are often used for the later weeks.",
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 3.0 mL of bacteriostatic water and run it slowly down the inside wall of the vial to avoid foaming.",
        "Swirl or roll the vial gently until fully dissolved. Do not shake vigorously.",
        "Label the vial with the concentration (1.67 mg/mL), preparation date and lot number.",
        "Refrigerate at 2–8 °C, protected from light, and follow any formulation-specific discard guidance from the batch documentation.",
      ],
    },
    {
      id: "sec-4",
      heading: "Vial Yield & Unit Conversions",
      type: "table",
      intro:
        "5 mg ÷ 3.0 mL = 1.67 mg/mL, so 1 unit ≈ 16.7 mcg. Vial strength changes concentration and yield — it does not change the underlying evidence.",
      table: {
        columns: ["Amount", "Volume", "U-100 Marking", "Full Amounts per 5 mg Vial"],
        rows: [
          ["500 mcg", "0.30 mL", "30 units", "10"],
          ["1,000 mcg", "0.60 mL", "60 units", "5"],
          ["1,500 mcg", "0.90 mL", "90 units", "3 (500 mcg left over)"],
          ["2,000 mcg", "1.20 mL", "120 units (2 × 60)", "2 (1,000 mcg left over)"],
        ],
        caption:
          "Nominal yield only. Recoverable volume is usually a little lower because of syringe dead space and transfer loss. U-100 units are volume markings, not international units of MOTS-c.",
      },
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      intro:
        "Totals follow the 8-week table above, which uses 70 mg of material in all (7 mg, 14 mg, 21 mg and 28 mg across the four two-week steps).",
      items: [
        "**MOTS-c vials (5 mg):** 14 vials for the full 8 weeks.",
        "**Insulin syringes (U-100, 1 mL):** 70 — one per day for weeks 1–6, two per day for the 2000 mcg step in weeks 7–8.",
        "**Bacteriostatic water (10 mL):** each bottle reliably yields three 3 mL fills — 5 bottles for 14 vials.",
        "**Alcohol swabs:** ~140 (stopper and site for each draw) — two 100-count boxes.",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research area:** mitochondrial–nuclear signalling, AMPK activation, glucose handling and exercise physiology.",
        "**Schedule:** once-daily subcutaneous administration in the community-reported model, stepped up every two weeks over 8 weeks.",
        "**Dose band:** 500–2,000 mcg daily.",
        "**Fill:** 5 mg lyophilized, reconstituted to 1.67 mg/mL with 3 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted.",
      ],
    },
    {
      id: "sec-7",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials frozen at **−20 °C**, dry and protected from light. Once reconstituted, refrigerate at **2–8 °C** and avoid repeated temperature cycling. The FDA's review notes that reconstituted stability depends on formulation, container, concentration and manufacturing quality, so there is no universal discard date — use the batch documentation, and record vial strength, final volume, concentration, preparation date and lot number on every vial.",
      ],
    },
    {
      id: "sec-8",
      heading: "How MOTS-c Is Thought to Work",
      type: "prose",
      paragraphs: [
        "In the foundational 2015 experiments, MOTS-c inhibited the folate cycle, leading to accumulation of the metabolite AICAR and activation of **AMPK** — the cell's central energy sensor. In mice this was associated with improved insulin sensitivity and resistance to diet-induced obesity. Follow-up work in 2018 reported that MOTS-c translocates to the nucleus during metabolic stress and regulates stress-responsive gene expression, positioning it as a messenger in mitochondria-to-nucleus communication rather than a conventional hormone.",
        "MOTS-c also responds to physical activity. A 2021 study reported that exercise raised MOTS-c levels in human skeletal muscle (roughly 12-fold) and modestly in plasma, and that MOTS-c treatment improved physical performance in aged mice. Those are measurements of the body's own peptide plus animal findings — they do not show that injecting a given amount reproduces the effects of exercise in people.",
      ],
    },
    {
      id: "sec-9",
      heading: "What the Human Evidence Does and Doesn't Show",
      type: "list",
      items: [
        "**Endogenous vs. injected:** most human studies measure naturally circulating MOTS-c and its association with age, exercise or metabolic status — not what happens after administration.",
        "**Variable baselines:** a 2024 systematic review and meta-analysis covering 602 participants found reported circulating levels varied widely across populations, assays and conditions.",
        "**Preclinical scope:** findings on glucose handling, adipose tissue, bone and ageing come from cell and animal models and do not establish a human benefit.",
        "**No human exposure data:** the FDA's technical review found no published human exposure studies for drug products containing native MOTS-c by any route, and flagged uncertainties around immunogenicity, aggregation, impurities and formulation quality.",
      ],
    },
    {
      id: "sec-10",
      heading: "Safety & Product Quality Notes",
      type: "list",
      items: [
        "Native MOTS-c is investigational and has no FDA-approved human dosing regimen.",
        "A \"5 mg\" label does not by itself confirm identity, purity, sterility, endotoxin status or post-reconstitution stability — keep lot-specific documentation.",
        "MOTS-c is discussed in anti-doping contexts, and analytical methods have been developed to detect it in biological samples.",
        "Long-term human safety, effective amount, frequency, route and duration remain unestablished.",
      ],
    },
    {
      id: "sec-11",
      heading: "Injection/Handling Technique (Reference Only)",
      type: "list",
      items: [
        "Clean the vial stopper and the site with alcohol swabs and let both dry.",
        "Read the U-100 marking at eye level and confirm the matching mL value against the table before administering.",
        "If a volume exceeds the syringe's capacity (as at the 120-unit step), plan the split draws in the written protocol rather than improvising.",
        "Rotate sites (abdomen, thighs, upper arms), use a new sterile syringe every time and dispose of it in an approved sharps container.",
      ],
    },
    {
      id: "sec-12",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Lee C, et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.",
          journal: "Cell Metabolism (2015).",
          href: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
          label: "pubmed.ncbi.nlm.nih.gov/25738459",
        },
        {
          cite: "Kim KH, et al. The mitochondrial-encoded peptide MOTS-c translocates to the nucleus to regulate nuclear gene expression in response to metabolic stress.",
          journal: "Cell Metabolism (2018).",
          href: "https://pubmed.ncbi.nlm.nih.gov/29983246/",
          label: "pubmed.ncbi.nlm.nih.gov/29983246",
        },
        {
          cite: "Reynolds JC, et al. MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.",
          journal: "Nature Communications (2021).",
          href: "https://pubmed.ncbi.nlm.nih.gov/34351816/",
          label: "pubmed.ncbi.nlm.nih.gov/34351816",
        },
        {
          cite: "D'Souza RF, et al. Circulating mitochondrial-derived peptide MOTS-c is responsive to exercise.",
          journal: "PubMed.",
          href: "https://pubmed.ncbi.nlm.nih.gov/33473109/",
          label: "pubmed.ncbi.nlm.nih.gov/33473109",
        },
        {
          cite: "Systematic review and meta-analysis of circulating MOTS-c levels in human populations.",
          journal: "PubMed (2024).",
          href: "https://pubmed.ncbi.nlm.nih.gov/39160573/",
          label: "pubmed.ncbi.nlm.nih.gov/39160573",
        },
        {
          cite: "Safety risks associated with certain bulk drug substances nominated for use in compounding: MOTS-c.",
          journal: "U.S. Food and Drug Administration — technical review.",
          href: "https://www.fda.gov/media/193347/download",
          label: "fda.gov/media/193347",
        },
        {
          cite: "Subcutaneous (SQ) injections.",
          journal: "MedlinePlus Medical Encyclopedia.",
          href: "https://medlineplus.gov/ency/patientinstructions/000430.htm",
          label: "medlineplus.gov — SQ injections",
        },
      ],
    },
    {
      id: "sec-13",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "MOTS-c — 10 mg Vial", href: "/single-peptide-dosages/mots-c-10mg" },
        { label: "MOTS-c — 20 mg Vial", href: "/single-peptide-dosages/mots-c-20mg" },
        { label: "Retatrutide — 10 mg Vial", href: "/single-peptide-dosages/retatrutide-10mg" },
        { label: "Tirzepatide — 10 mg Vial", href: "/single-peptide-dosages/tirzepatide-10mg" },
      ],
    },
  ],
};
