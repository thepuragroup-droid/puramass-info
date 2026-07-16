import type { Protocol } from "./types";

export const glow70mg: Protocol = {
  slug: "glow-70mg",
  crumb: "GLOW 70 mg",
  title: "GLOW (70 mg Blend) Dosage Protocol",
  lead: "A reference breakdown of how a 70 mg GLOW research vial — a fixed combination of GHK-Cu, TB-500 and BPC-157 — is reconstituted and dosed in the published recovery and tissue-repair literature, expressed in insulin-syringe units for laboratory measurement work.",
  pills: [
    { label: "GHK-Cu + TB-500 + BPC-157", red: true },
    { label: "Regenerative Blend" },
    { label: "Tissue Repair Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "GLOW 70 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → ~23.3 mg/mL" },
    { label: "Typical Daily Dose", value: "2.33 mg (2330 mcg) once daily" },
    { label: "Per Daily Dose", value: "≈ 10 units (0.10 mL)" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "GLOW and its component peptides are investigational compounds that are not approved for human or veterinary use. The schedules above are reproduced from published research solely for educational and in-vitro reference. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "GLOW is a tri-peptide research blend that fixes three regenerative compounds in a single 70 mg vial: **GHK-Cu**, **TB-500 (thymosin beta-4)** and **BPC-157**. The figures below are compiled strictly for laboratory and educational reference — they describe how the blend has been handled and dosed in tissue-repair research models, not a recommendation for use in humans or animals.",
        "The 70 mg of total peptide is split roughly 1.7 mg GHK-Cu, 0.33 mg TB-500 and 0.33 mg BPC-157 per daily 2.33 mg portion. Adding **3.0 mL of bacteriostatic water** to the vial yields a working concentration of about **23.3 mg/mL** (23,300 mcg/mL). At that fill, drawing 0.10 mL on a U-100 insulin syringe equals 10 units and delivers roughly 2.33 mg of combined peptide — the standard daily reference dose.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard (Gradual) Titration Schedule",
      type: "table",
      intro:
        "The published handling model for GLOW uses a flat daily dose rather than a stepped escalation, run as a defined cycle followed by a washout window. The table below reflects that single-tier schedule.",
      table: {
        columns: ["Phase", "Daily Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–4", "2.33 mg (2330 mcg)", "10 units", "0.10 mL", "Once daily"],
          ["Weeks 5–6+", "Rest / washout", "—", "—", "2–4 week pause"],
        ],
        caption:
          "Units assume a ~23.3 mg/mL fill (3 mL BAC water in a 70 mg vial). One vial supplies roughly one 4-week daily cycle (~28 doses).",
      },
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed lyophilized vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 3.0 mL of bacteriostatic water and inject it slowly down the inside wall of the vial — never directly onto the powder pellet — to limit foaming.",
        "Swirl or roll the vial gently until the powder is fully dissolved. Do not shake; vigorous agitation can shear the peptides.",
        "The solution should be clear with a faint blue tint from the copper in GHK-Cu. Label the vial with the concentration (~23.3 mg/mL) and the reconstitution date.",
        "Refrigerate upright at 2–8 °C between uses, protect it from light, and draw each daily volume with a fresh sterile syringe.",
      ],
    },
    {
      id: "sec-4",
      heading: "Advanced (Cycle-Based) Schedule",
      type: "table",
      intro:
        "Because GLOW is dosed at a single flat tier, the only common variation in the literature is cycle length rather than a higher milligram ceiling. The schedule below extends a continuous run before the washout for research models that track longer repair windows.",
      table: {
        columns: ["Phase", "Daily Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–6", "2.33 mg (2330 mcg)", "10 units", "0.10 mL", "Once daily"],
          ["Weeks 7–10", "Rest / washout", "—", "—", "3–4 week pause"],
        ],
        caption:
          "An extended-cycle reference uses two vials to cover the longer ~6-week daily run before a deload window.",
      },
      note: "GLOW carries no published high-dose ceiling like the metabolic agonists. The fixed 2.33 mg daily portion holds the GHK-Cu, TB-500 and BPC-157 in roughly the same ratio at every dose, so the variable in practice is cycle duration, not unit count.",
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      items: [
        "**GLOW vials (70 mg):** ~1 vial per 4-week daily cycle; ~2 vials for an extended 6-week run.",
        "**Insulin syringes (U-100, 0.3 mL / 30-unit):** ~28 per 4-week cycle (one fresh syringe per daily draw); ~42 for a 6-week run.",
        "**Bacteriostatic water (10 mL):** one bottle covers multiple vials (only 3 mL is used per reconstitution).",
        "**Alcohol swabs:** a single 100-count box comfortably covers one or two cycles (two swabs per dose).",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research goal:** model multi-tissue repair and regeneration via combined collagen, angiogenesis and growth-factor pathways.",
        "**Schedule:** once-daily subcutaneous administration over a defined cycle in the published model.",
        "**Dose band:** flat 2.33 mg combined peptide daily (no escalation tier).",
        "**Fill:** 70 mg lyophilized blend, reconstituted to ~23.3 mg/mL with 3 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted, used within ~4 weeks.",
      ],
    },
    {
      id: "sec-7",
      heading: "Dosing Protocol Notes",
      type: "list",
      items: [
        "Hold the flat 10-unit daily dose for the full cycle rather than escalating, since the blend ratio is fixed.",
        "Keep administration on a consistent daily cadence — same time of day where possible — for steady exposure modelling.",
        "Observe the 2–4 week washout between cycles built into the reference schedule.",
        "A reconstituted vial supports about four weeks of daily draws before potency declines, which aligns with the standard cycle length.",
      ],
    },
    {
      id: "sec-8",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials at **−20 °C** or below, protected from light, where stability extends for many months to over a year. Refrigeration at 2–8 °C is acceptable for shorter holding. Once reconstituted, refrigerate at **2–8 °C** at all times when not in use and consume within about four weeks. Do not freeze the reconstituted solution, allow it to warm slightly before drawing, and avoid repeated temperature swings.",
      ],
    },
    {
      id: "sec-9",
      heading: "Important Handling Notes",
      type: "list",
      items: [
        "Use a sterile syringe for every draw and never re-enter the vial with a used needle.",
        "Expect a light blue colour from the copper complex; discard if the solution turns cloudy or develops particulate.",
        "Do not freeze the reconstituted blend — freeze-thaw cycling degrades the peptides.",
        "Document each draw — date, volume, remaining material — for reproducibility across the cycle.",
      ],
    },
    {
      id: "sec-10",
      heading: "How the GLOW Blend Works",
      type: "prose",
      paragraphs: [
        "GLOW combines three peptides whose mechanisms overlap on tissue repair from different angles. **GHK-Cu** is a copper-binding tripeptide that acts as a genomic modulator, upregulating gene programs tied to tissue growth and collagen synthesis while downregulating inflammatory signalling, and it supports angiogenesis and antioxidant activity. **TB-500**, a synthetic fragment of thymosin beta-4, binds actin to drive cytoskeletal remodelling and cell migration, mobilising repair cells toward injured tissue, promoting new blood-vessel formation and reducing fibrosis. **BPC-157**, a pentadecapeptide, amplifies growth-factor signalling and the nitric-oxide pathway to improve microcirculation while counteracting inflammatory mediators and supporting cell survival. Together the three are studied as a layered regenerative stack rather than a single-receptor agonist.",
      ],
    },
    {
      id: "sec-11",
      heading: "Reported Benefits & Side Effects",
      type: "benefits",
      groups: [
        {
          subheading: "Benefits observed in research",
          items: [
            "Accelerated wound and soft-tissue healing across multiple tissue types in preclinical models.",
            "Anti-inflammatory effects with associated reductions in pain signalling.",
            "Improved tissue quality and reduced fibrosis during repair.",
            "Regenerative signal spanning orthopedic, dermatologic and gastrointestinal tissue in the cited reviews.",
          ],
        },
        {
          subheading: "Side effects reported",
          items: [
            "Occasional mild injection-site reactions such as redness or itching with subcutaneous administration.",
            "Generally well tolerated in the available literature.",
            "Most reactions are transient and localised to the administration site.",
          ],
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Supporting Lifestyle Factors (Research Context)",
      type: "list",
      items: [
        "Adequate dietary protein and micronutrients to supply the building blocks for collagen and tissue synthesis.",
        "Managed loading or activity around the tissue being modelled to avoid disrupting repair.",
        "Sufficient sleep and hydration as standard recovery controls in study designs.",
      ],
    },
    {
      id: "sec-13",
      heading: "Injection Technique (Reference Only)",
      type: "list",
      items: [
        "Clean the vial stopper and the chosen site separately with alcohol swabs and let both air-dry.",
        "Draw 10 units (0.10 mL) with a 29–31 gauge insulin syringe; choose a site with adequate subcutaneous tissue such as the abdomen, thigh or upper arm.",
        "Pinch a skin fold and insert at roughly a 45° angle (or 90° with the fold), inject slowly over 2–3 seconds, and do not aspirate for subcutaneous work.",
        "Apply gentle pressure without rubbing, rotate sites with 1–2 inch spacing, and dispose of sharps in an approved container.",
      ],
    },
    {
      id: "sec-14",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Pickart L, Margolina A. Regenerative and protective actions of the GHK-Cu peptide in light of new gene data.",
          journal: "Int. J. Mol. Sci. (2018).",
          href: "https://www.mdpi.com/1422-0067/19/7/1987",
          label: "mdpi.com/1422-0067/19/7/1987",
        },
        {
          cite: "Tripeptides in wound healing and skin regeneration — a comprehensive review.",
          journal: "Int. J. Med. Sci. (2025).",
          href: "https://www.medsci.org/v22p4175.htm",
          label: "medsci.org/v22p4175.htm",
        },
        {
          cite: "Thymosin beta-4 promotes dermal healing.",
          journal: "Vitamins & Hormones (2016).",
          href: "https://pubmed.ncbi.nlm.nih.gov/27450738/",
          label: "pubmed.ncbi.nlm.nih.gov/27450738",
        },
        {
          cite: "Goldstein AL, et al. Thymosin beta-4 — a multifunctional regenerative peptide.",
          journal: "Expert Opin. Biol. Ther. (2012).",
          href: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
          label: "pubmed.ncbi.nlm.nih.gov/22074294",
        },
        {
          cite: "Emerging use of BPC-157 in orthopaedic sports medicine — a systematic review.",
          journal: "HSS Journal (2025).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC12313605",
        },
      ],
    },
    {
      id: "sec-15",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "KLOW — 80 mg Blend", href: "/peptide-blend-dosages/klow-80mg" },
        {
          label: "Wolverine (BPC-157 + TB-500) Blend",
          href: "/peptide-blend-dosages/bpc-157-tb-500-20mg",
        },
        { label: "BPC-157 — 10 mg Vial", href: "/single-peptide-dosages/bpc-157-10mg" },
        { label: "What Is the GLOW Blend? — Compound Overview", href: "/learn/glow" },
      ],
    },
  ],
};
