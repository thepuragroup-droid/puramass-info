import type { Protocol } from "./types";

export const bpc157Tb50020mg: Protocol = {
  slug: "bpc-157-tb-500-20mg",
  crumb: "BPC-157 + TB-500 20 mg",
  title: "BPC-157 + TB-500 (20 mg Blend) Dosage Protocol",
  lead: "A reference breakdown of how a 20 mg combined BPC-157 and TB-500 research vial is reconstituted and titrated, expressed in insulin-syringe units for laboratory measurement work. The 20 mg fill splits into 10 mg of each peptide.",
  pills: [
    { label: "Tissue-Repair Blend", red: true },
    { label: "BPC-157 + TB-500" },
    { label: "Regenerative Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "BPC-157 + TB-500 20 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → ~6.67 mg/mL total" },
    { label: "Per-Peptide Concentration", value: "≈ 3.33 mg/mL BPC-157 + 3.33 mg/mL TB-500" },
    { label: "Typical Daily Range", value: "500 mcg – 1500 mcg total blend" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "BPC-157 and TB-500 are investigational compounds that are not approved for human or veterinary use. The schedules above are compiled from published research and reference material solely for educational and in-vitro purposes. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "This blend pairs BPC-157, a 15-amino-acid fragment derived from a protein found in gastric juice, with TB-500, a synthetic version of the active region of thymosin beta-4. The two are co-formulated in a single lyophilized vial holding 20 mg of total material — split evenly as 10 mg of BPC-157 and 10 mg of TB-500. The figures below are compiled strictly for laboratory and educational reference; they describe how the combination is handled and measured, not a recommendation for use in humans or animals.",
        "For a 20 mg vial, adding **3.0 mL of bacteriostatic water** yields a total concentration of **~6.67 mg/mL**, which works out to roughly **3.33 mg/mL of each peptide**. At that fill, a 0.10 mL draw on a U-100 insulin syringe equals 10 units and delivers about 667 mcg of blend (≈333 mcg of each compound), so the per-unit math stays consistent across the titration steps below.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard (Gradual) Titration Schedule",
      type: "table",
      intro:
        "The gradual schedule starts low and steps the daily amount upward over several weeks, giving a slow ramp that many reference protocols favour for tolerability when modelling once-daily subcutaneous administration.",
      table: {
        columns: ["Phase", "Daily Dose (total)", "Per Peptide", "Units (U-100)", "Volume"],
        rows: [
          ["Weeks 1–2", "500 mcg (0.5 mg)", "≈ 250 mcg each", "7.5 units", "0.075 mL"],
          ["Weeks 3–4", "666 mcg (0.67 mg)", "≈ 333 mcg each", "10 units", "0.10 mL"],
          ["Weeks 5–8", "1000 mcg (1.0 mg)", "≈ 500 mcg each", "15 units", "0.15 mL"],
        ],
        caption:
          "Units assume a ~6.67 mg/mL total fill (3 mL BAC water). One 20 mg vial supplies roughly 20 days at the 1.0 mg step.",
      },
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed lyophilized vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 3.0 mL of bacteriostatic water and inject it slowly down the inside wall of the vial — never directly onto the powder pellet.",
        "Swirl gently until both peptides fully dissolve. Do not shake; vigorous agitation can damage the peptide chains.",
        "The finished solution should be clear and colourless. Label the vial with the total concentration (~6.67 mg/mL) and the reconstitution date.",
        "Store upright under refrigeration between uses and draw each subsequent volume with a fresh sterile syringe.",
      ],
    },
    {
      id: "sec-4",
      heading: "Advanced (Loading) Schedule",
      type: "table",
      intro:
        "The advanced approach front-loads a higher daily amount for the first four weeks before dropping to a maintenance level. It reaches the top of the typical range at the loading step and is sometimes referenced where a faster cumulative exposure is being modelled.",
      table: {
        columns: ["Phase", "Daily Dose (total)", "Per Peptide", "Units (U-100)", "Volume"],
        rows: [
          ["Loading (Weeks 1–4)", "1500 mcg (1.5 mg)", "≈ 750 mcg each", "22.5 units", "0.225 mL"],
          ["Maintenance (Weeks 5–8)", "1000 mcg (1.0 mg)", "≈ 500 mcg each", "15 units", "0.15 mL"],
        ],
        caption:
          "At the 1.5 mg loading step a single 20 mg vial covers roughly 13 days, so plan vial counts around the higher early draw.",
      },
      note: "1500 mcg total per day (≈750 mcg of each peptide) sits at the upper edge of the commonly referenced range for this blend. The loading-then-maintenance pattern simply shifts more of the cumulative dose into the first month rather than spreading it evenly.",
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      items: [
        "**Blend vials (20 mg):** ~2 vials for a 4-week run; ~3 vials for 6 weeks; ~3–4 vials for 8 weeks.",
        "**Insulin syringes (U-100, 1 mL):** 28 for 4 weeks, 42 for 6 weeks, 56 for 8 weeks (one fresh syringe per daily draw).",
        "**Bacteriostatic water (10 mL):** one bottle covers a 4–6 week run; two bottles for an 8-week schedule.",
        "**Alcohol swabs:** a single 100-count box covers 4–6 weeks; two boxes for 8 weeks.",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research goal:** model combined cytoprotective and tissue-repair signalling from a BPC-157 / TB-500 pairing.",
        "**Schedule:** once-daily subcutaneous administration in the referenced model.",
        "**Dose band:** 500–1500 mcg total blend daily (≈250–750 mcg of each peptide).",
        "**Fill:** 20 mg lyophilized (10 mg + 10 mg), reconstituted to ~6.67 mg/mL with 3 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted.",
      ],
    },
    {
      id: "sec-7",
      heading: "Dosing Protocol Notes",
      type: "list",
      items: [
        "Begin at the lowest 500 mcg step and hold each level for one to two weeks before stepping up.",
        "Keep administration on a fixed daily cadence and ideally the same time of day for steady exposure modelling.",
        "Escalate only after the prior step has been tolerated.",
        "Most referenced runs sit in the 4–8 week window before pausing to reassess.",
      ],
    },
    {
      id: "sec-8",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials at **−20 °C**, protected from light, where the dry powder stays stable for many months. Once reconstituted, refrigerate at **2–8 °C** and use within about **14 days**. Allow refrigerated solution to warm slightly before drawing, avoid repeated freeze-thaw cycles, and aliquot if a vial will be sampled many times.",
      ],
    },
    {
      id: "sec-9",
      heading: "Important Handling Notes",
      type: "list",
      items: [
        "Use a sterile syringe for every draw and never re-enter the vial with a used needle.",
        "Rotate handling technique to keep the rubber stopper intact across many punctures.",
        "Because both peptides share the vial, draw the full daily volume in one pull to keep the split even.",
        "Document each draw — date, volume, remaining material — for reproducibility.",
      ],
    },
    {
      id: "sec-10",
      heading: "How It Works",
      type: "prose",
      paragraphs: [
        "BPC-157 is a stable 15-amino-acid pentadecapeptide fragment isolated from a protein in gastric juice. In preclinical work it has been studied for cytoprotective and tissue-repair activity spanning the gastrointestinal tract, tendons and other musculoskeletal tissue, and the nervous system, with proposed effects on blood-vessel formation. TB-500 is the synthetic active fragment of thymosin beta-4, a 43-amino-acid peptide tied to cell migration, angiogenesis and wound healing. The rationale for pairing them is that their reported repair mechanisms are studied as complementary — BPC-157 leaning toward localized protection and TB-500 toward broader cell-migration and vascular processes.",
      ],
    },
    {
      id: "sec-11",
      heading: "Reported Benefits & Side Effects",
      type: "benefits",
      groups: [
        {
          subheading: "Benefits reported in research",
          items: [
            "Wound healing and tendon-repair signalling in preclinical models.",
            "Anti-inflammatory activity across several tissue types.",
            "Gastroprotective and ulcer-healing effects attributed mainly to BPC-157.",
            "A wide safety margin in the available animal studies.",
          ],
        },
        {
          subheading: "Side effects reported",
          items: [
            "Occasional mild injection-site reactions such as redness or itching.",
            "Rare, transient dizziness or nausea in scattered reports.",
            "Long-term controlled human safety data remain limited for both compounds.",
          ],
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Injection/Handling Technique (Reference Only)",
      type: "list",
      items: [
        "Clean the vial stopper and the handling site with alcohol and let both dry.",
        "Insert subcutaneously at a 45–90° angle using a fine needle (23–25 gauge, 5/8″); aspiration is not required for subcutaneous work.",
        "Inject slowly and steadily; rotate sites systematically across the abdomen, lateral thigh, upper arm and other approved areas.",
        "Where a localized site is being modelled, subcutaneous placement near the target area is sometimes referenced when anatomically appropriate.",
        "Dispose of sharps in an approved container.",
      ],
    },
    {
      id: "sec-13",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Stable gastric pentadecapeptide BPC 157: pleiotropic beneficial activity and neurotransmitter interactions.",
          journal: "Biomedicines (2022).",
          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11053547/",
          label: "ncbi.nlm.nih.gov/pmc/articles/PMC11053547",
        },
        {
          cite: "BPC 157 and standard angiogenic growth factors in gastrointestinal tract healing and angiogenesis.",
          journal: "Current Pharmaceutical Design (2018).",
          href: "https://pubmed.ncbi.nlm.nih.gov/29701147/",
          label: "pubmed.ncbi.nlm.nih.gov/29701147",
        },
        {
          cite: "Thymosin beta-4: roles in development, repair and regeneration.",
          journal: "Annals of the New York Academy of Sciences (2007).",
          href: "https://pubmed.ncbi.nlm.nih.gov/17312315/",
          label: "pubmed.ncbi.nlm.nih.gov/17312315",
        },
        {
          cite: "Randomized, placebo-controlled single- and multiple-dose study of intravenous thymosin beta-4 in healthy volunteers (2010).",
          journal: "",
          href: "https://pubmed.ncbi.nlm.nih.gov/20536472/",
          label: "pubmed.ncbi.nlm.nih.gov/20536472",
        },
        {
          cite: "Emerging use of BPC-157 in orthopaedic sports medicine: a systematic review.",
          journal: "Arthroscopy (2025).",
          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12313605/",
          label: "ncbi.nlm.nih.gov/pmc/articles/PMC12313605",
        },
      ],
    },
    {
      id: "sec-14",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "BPC-157 — 10 mg Vial", href: "/single-peptide-dosages/bpc-157-10mg" },
        { label: "TB-500 — 10 mg Vial", href: "/single-peptide-dosages/tb-500-10mg" },
        { label: "GLOW Blend — Recovery Protocol", href: "/peptide-blend-dosages/glow-70mg" },
        {
          label: "What Is the BPC-157 + TB-500 Blend? — Compound Overview",
          href: "/learn/wolverine",
        },
      ],
    },
  ],
};
