import type { Protocol } from "./types";

export const klow80mg: Protocol = {
  slug: "klow-80mg",
  crumb: "KLOW 80 mg",
  title: "KLOW (80 mg Blend) Dosage Protocol",
  lead: "A reference breakdown of how an 80 mg KLOW research vial — a fixed 5:1:1:1 combination of GHK-Cu, BPC-157, TB-500 and KPV — is reconstituted and measured on a U-100 insulin syringe, with the per-component amount behind every unit.",
  pills: [
    { label: "GHK-Cu + BPC-157 + TB-500 + KPV", red: true },
    { label: "Fixed-Ratio Blend" },
    { label: "Tissue Repair Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "KLOW 80 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → ~26.67 mg/mL total" },
    { label: "1 unit (0.01 mL)", value: "≈ 266.7 mcg total blend" },
    { label: "Reference range", value: "7.5–22.5 units once daily" },
    { label: "Storage (reconstituted)", value: "2–8 °C, protected from light" },
  ],
  disclaimer:
    "KLOW and its component peptides are investigational compounds that are not approved for human or veterinary use. The schedule on this page is a community-reported calculation, not a validated protocol — no controlled study has tested the four-component blend. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "KLOW is a four-peptide research blend that fixes **50 mg GHK-Cu, 10 mg BPC-157, 10 mg TB-500 and 10 mg KPV** in a single 80 mg vial. Compared with the three-component GLOW blend, it adds KPV as a fourth peptide. Because the ratio is fixed, every syringe marking changes all four component amounts together — one cannot be adjusted without the others.",
        "Adding **3.0 mL of bacteriostatic water** gives a total concentration of about **26.67 mg/mL**. On a U-100 insulin syringe, one unit is 0.01 mL and holds roughly **266.7 mcg** of blend: about 166.7 mcg GHK-Cu plus 33.3 mcg each of BPC-157, TB-500 and KPV. U-100 units are volume markings, not peptide international units.",
      ],
    },
    {
      id: "sec-2",
      heading: "Component Breakdown",
      type: "table",
      intro: "Per-component concentration at a 3.0 mL final volume.",
      table: {
        columns: ["Component", "Mass in Vial", "Share of Blend", "Concentration", "Per U-100 Unit"],
        rows: [
          ["GHK-Cu", "50 mg", "62.5%", "16.67 mg/mL", "166.7 mcg"],
          ["BPC-157", "10 mg", "12.5%", "3.33 mg/mL", "33.3 mcg"],
          ["TB-500", "10 mg", "12.5%", "3.33 mg/mL", "33.3 mcg"],
          ["KPV", "10 mg", "12.5%", "3.33 mg/mL", "33.3 mcg"],
          ["Total", "80 mg", "100%", "26.67 mg/mL", "266.7 mcg"],
        ],
        caption: "Drawing more or less liquid scales all four components in the same 5:1:1:1 mass ratio.",
      },
    },
    {
      id: "sec-3",
      heading: "Gradual Titration Schedule",
      type: "table",
      intro:
        "The community-reported schedule steps the daily volume up over eight weeks, then drops back to a maintenance level. Each row shows the amount of every component delivered by that volume.",
      table: {
        columns: ["Period", "BPC-157 / TB-500 / KPV (each)", "GHK-Cu", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–2", "250 mcg", "1.25 mg", "7.5 units", "0.075 mL", "Once daily"],
          ["Weeks 3–4", "500 mcg", "2.5 mg", "15 units", "0.15 mL", "Once daily"],
          ["Weeks 5–8", "750 mcg", "3.75 mg", "22.5 units", "0.225 mL", "Once daily"],
          ["Weeks 9–12 (maintenance)", "500 mcg", "2.5 mg", "15 units", "0.15 mL", "Once daily"],
        ],
        caption:
          "Total blend per dose is 2.0 mg, 4.0 mg and 6.0 mg at 7.5, 15 and 22.5 units. The 7.5 and 22.5 unit steps fall on half-unit marks, so a 0.3 mL (30-unit) or 0.5 mL (50-unit) syringe with half-unit graduations is easier to read.",
      },
      note: "This is a calculation record of a community-reported schedule. It has not been tested in a controlled study and does not establish safety, effectiveness or an optimal cycle length.",
    },
    {
      id: "sec-4",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Wipe the vial stopper and the bacteriostatic water stopper with separate alcohol swabs.",
        "Draw 3.0 mL of bacteriostatic water with a sterile syringe.",
        "Inject it slowly down the inside wall of the vial — not onto the powder — to avoid foaming.",
        "Swirl or roll gently until fully dissolved. Do not shake. A faint blue tint from the copper in GHK-Cu is expected.",
        "Label the vial with the concentration (~26.67 mg/mL) and date, then refrigerate at 2–8 °C, protected from light.",
      ],
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      intro:
        "Totals follow the schedule above; the 16-week figures assume the 15-unit maintenance level continues through weeks 13–16. Each 80 mg vial holds 300 units at 3.0 mL.",
      items: [
        "**KLOW vials (80 mg):** 8 weeks uses ~252 mg → **4 vials**; 12 weeks ~364 mg → **5 vials**; 16 weeks ~476 mg → **6 vials**.",
        "**Insulin syringes (U-100, 0.3 or 0.5 mL with half-unit marks):** one per day — 56 for 8 weeks, 84 for 12 weeks, 112 for 16 weeks.",
        "**Bacteriostatic water (10 mL):** 3.0 mL per vial — 12–18 mL across 4–6 vials, so **2 bottles** for any of the three lengths.",
        "**Alcohol swabs:** two per day (vial stopper and site) — 112, 168 or 224 swabs; two 100-count boxes cover 8 or 12 weeks, three cover 16 weeks.",
      ],
    },
    {
      id: "sec-6",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials frozen at **−20 °C**, protected from light. After reconstitution, refrigerate at **2–8 °C** and keep the vial out of light; do not freeze the solution and avoid repeated freeze-thaw cycles. Discard the vial if liquid is lost, the stopper leaks, the solution turns cloudy or develops particles, or its storage history is uncertain — the concentration math is no longer reliable.",
      ],
    },
    {
      id: "sec-7",
      heading: "What the Blend Evidence Does and Doesn't Show",
      type: "prose",
      paragraphs: [
        "The available literature studies KLOW's ingredients separately. **No controlled human trial** has tested an 80 mg vial of GHK-Cu, BPC-157, TB-500 and KPV in a 5:1:1:1 ratio, and none validates the daily schedule above. The components differ in molecular size, proposed mechanism, studied route, formulation and evidence maturity, so combining them can change exposure and tolerability in ways a single-component experiment cannot predict.",
        "Terms like injury recovery, tissue repair and inflammation control describe the research interest around the individual components. They are not demonstrated clinical outcomes for the complete blend.",
      ],
    },
    {
      id: "sec-8",
      heading: "How the Components Are Thought to Work",
      type: "prose",
      paragraphs: [
        "**TB-500** is discussed in relation to thymosin beta-4, which has been studied in cell migration, angiogenesis and corneal and dermal wound-healing models; effects depend on the model, tissue, route and formulation. **BPC-157** has a mostly preclinical evidence base — a systematic review of orthopaedic and sports-medicine research found largely animal and laboratory studies — and its pharmacokinetics have been described in rats and dogs, not humans.",
        "**KPV** is the Lys-Pro-Val tripeptide from the C-terminal region of alpha-melanocyte-stimulating hormone. It has been studied for uptake through the PepT1 transporter and for inflammatory signalling in intestinal cell and animal models, including orally targeted nanoparticle delivery in experimental colitis — routes that do not validate a subcutaneous protocol. **GHK-Cu** is a naturally occurring copper peptide studied in skin, extracellular-matrix, gene-expression and wound-repair research, with proposed effects on collagen, elastin, antioxidant pathways and angiogenesis. It makes up most of the blend by mass.",
      ],
    },
    {
      id: "sec-9",
      heading: "Reported Benefits & Limitations",
      type: "benefits",
      groups: [
        {
          subheading: "Areas of research interest (component-level)",
          items: [
            "Wound healing, cell migration and angiogenesis in thymosin beta-4 research.",
            "Tendon, ligament and muscle healing in preclinical BPC-157 studies.",
            "Reduced intestinal inflammation in KPV cell and animal models.",
            "Collagen synthesis and tissue remodelling in GHK-Cu research.",
          ],
        },
        {
          subheading: "Limitations and cautions",
          items: [
            "No controlled human safety study of the complete blend exists; safety cannot be inferred by adding up separate component findings.",
            "BPC-157 and KPV evidence is largely preclinical; GHK-Cu and thymosin beta-4 sources span varied routes and formulations.",
            "A fixed blend makes it impossible to adjust one component or identify which ingredient caused a reaction.",
            "Identity, purity, sterility and batch consistency can materially affect results. Unexpected local or systemic reactions are safety signals, not signs a protocol is working.",
          ],
        },
      ],
    },
    {
      id: "sec-10",
      heading: "Injection Technique (Reference Only)",
      type: "steps",
      steps: [
        "Check the syringe scale first: 100 units = 1 mL, and one unit = 0.01 mL (≈ 266.7 mcg of blend at this concentration).",
        "Clean the vial stopper and the chosen site with separate alcohol swabs and let both air-dry.",
        "Draw the row's volume with a new sterile syringe, reading half-unit marks carefully for the 7.5 and 22.5 unit steps.",
        "Choose a site with adequate subcutaneous tissue such as the abdomen or thigh, and rotate sites between doses.",
        "Dispose of the syringe in a sharps container and return the vial to refrigerated, dark storage.",
      ],
    },
    {
      id: "sec-11",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Philp D, et al. Thymosin beta 4 accelerates wound healing.",
          journal: "(1999).",
          href: "https://pubmed.ncbi.nlm.nih.gov/10469335/",
          label: "pubmed.ncbi.nlm.nih.gov/10469335",
        },
        {
          cite: "Thymosin β4 promotes dermal healing in preclinical models and clinical trials.",
          journal: "Vitamins & Hormones (2016).",
          href: "https://pubmed.ncbi.nlm.nih.gov/27450738/",
          label: "pubmed.ncbi.nlm.nih.gov/27450738",
        },
        {
          cite: "Emerging use of BPC-157 in orthopaedic sports medicine — a systematic review.",
          journal: "HSS Journal (2025).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC12313605",
        },
        {
          cite: "Pharmacokinetics, distribution, metabolism and excretion of BPC-157 in rats and dogs.",
          journal: "PubMed Central.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9794587/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC9794587",
        },
        {
          cite: "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation.",
          journal: "Gastroenterology (2008).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2431115/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC2431115",
        },
        {
          cite: "Orally targeted delivery of tripeptide KPV via hyaluronic acid-functionalized nanoparticles alleviates ulcerative colitis.",
          journal: "PubMed Central.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5498804/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC5498804",
        },
        {
          cite: "Pickart L, Margolina A. Regenerative and protective actions of the GHK-Cu peptide in light of new gene data.",
          journal: "Int. J. Mol. Sci. (2018).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC6073405",
        },
        {
          cite: "Pickart L, et al. GHK peptide as a natural modulator of multiple cellular pathways in skin regeneration.",
          journal: "BioMed Research International (2015).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC4508379",
        },
        {
          cite: "Goldstein AL, et al. Thymosin β4 — a multifunctional regenerative peptide.",
          journal: "Expert Opin. Biol. Ther. (2012).",
          href: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
          label: "pubmed.ncbi.nlm.nih.gov/22074294",
        },
        {
          cite: "The potential of GHK as an anti-aging peptide.",
          journal: "PubMed Central.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8789089/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC8789089",
        },
        {
          cite: "Vaccine administration — subcutaneous injection technique.",
          journal: "U.S. Centers for Disease Control and Prevention.",
          href: "https://www.cdc.gov/vaccines/hcp/admin/downloads/YCTS-VaxAdmin-Subcut-injection.pdf",
          label: "cdc.gov — subcutaneous injection",
        },
        {
          cite: "Administration of parenteral medications (Chapter 18).",
          journal: "NCBI Bookshelf.",
          href: "https://www.ncbi.nlm.nih.gov/books/NBK596739/",
          label: "ncbi.nlm.nih.gov/books/NBK596739",
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "GLOW — 70 mg Blend", href: "/peptide-blend-dosages/glow-70mg" },
        { label: "Wolverine (BPC-157 + TB-500) Blend", href: "/peptide-blend-dosages/bpc-157-tb-500-20mg" },
        { label: "GHK-Cu — 100 mg Vial", href: "/single-peptide-dosages/ghk-cu-100mg" },
        { label: "TB-500 — 5 mg Vial", href: "/single-peptide-dosages/tb-500-5mg" },
        { label: "BPC-157 — 10 mg Vial", href: "/single-peptide-dosages/bpc-157-10mg" },
      ],
    },
  ],
};
