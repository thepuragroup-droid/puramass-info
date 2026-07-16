import type { Protocol } from "./types";

export const retatrutide10mg: Protocol = {
  slug: "retatrutide-10mg",
  crumb: "Retatrutide 10 mg",
  title: "Retatrutide (10 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 10 mg Retatrutide research vial is reconstituted and titrated in the published Phase 2 literature, expressed in insulin-syringe units for laboratory measurement work.",
  pills: [
    { label: "GLP-1 / GIP / Glucagon", red: true },
    { label: "Triple Agonist" },
    { label: "Metabolic Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "Retatrutide 10 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "1.0 mL BAC water → 10 mg/mL" },
    { label: "Typical Weekly Range", value: "2 mg – 8 mg (advanced to 12 mg)" },
    { label: "Per 2 mg (2000 mcg)", value: "≈ 20 units (0.20 mL)" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "Retatrutide is an investigational compound that is not approved for human or veterinary use. The schedules above are reproduced from published research solely for educational and in-vitro reference. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "Retatrutide (research code LY3437943) is a single-molecule triple agonist studied for its activity at the GLP-1, GIP and glucagon receptors. The figures below are compiled strictly for laboratory and educational reference — they describe how the compound was handled and dosed across published trials, not a recommendation for use in humans or animals.",
        "For a 10 mg vial, adding **1.0 mL of bacteriostatic water** yields a concentration of **10 mg/mL** (10,000 mcg/mL). At that concentration, every 0.10 mL drawn on a U-100 insulin syringe equals 10 units and delivers 1 mg of material, which keeps the arithmetic clean across the titration steps.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard (Gradual) Titration Schedule",
      type: "table",
      intro:
        "The gradual schedule mirrors the slow dose-escalation arms used in the Phase 2 program, where weekly amounts were stepped up roughly every four weeks to manage gastrointestinal tolerability.",
      table: {
        columns: ["Phase", "Weekly Dose", "Units (U-100)", "Volume", "Vials / Dose"],
        rows: [
          ["Weeks 1–4", "2 mg (2000 mcg)", "20 units", "0.20 mL", "—"],
          ["Weeks 5–8", "4 mg (4000 mcg)", "40 units", "0.40 mL", "—"],
          ["Weeks 9–12", "6 mg (6000 mcg)", "60 units", "0.60 mL", "—"],
          ["Weeks 13+", "8 mg (8000 mcg)", "80 units", "0.80 mL", "—"],
        ],
        caption:
          "Units assume a 10 mg/mL fill (1 mL BAC water). One 10 mg vial supplies roughly one 8 mg weekly dose.",
      },
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed lyophilized vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 1.0 mL of bacteriostatic water and inject it slowly down the inside wall of the vial — never directly onto the powder pellet.",
        "Swirl gently until fully dissolved. Do not shake; aggressive agitation can shear the peptide.",
        "The solution should be clear and colourless. Label the vial with the concentration (10 mg/mL) and the reconstitution date.",
        "Store upright under refrigeration between uses and draw subsequent volumes with a fresh sterile syringe each time.",
      ],
    },
    {
      id: "sec-4",
      heading: "Advanced (Aggressive) Titration Schedule",
      type: "table",
      intro:
        "The advanced schedule reaches the 12 mg ceiling tested in Phase 2, where the highest cohort recorded the largest average weight reductions. It escalates faster and crosses the single-vial volume limit at the top step.",
      table: {
        columns: ["Phase", "Weekly Dose", "Units (U-100)", "Volume", "Vials / Dose"],
        rows: [
          ["Weeks 1–4", "2 mg (2000 mcg)", "20 units", "0.20 mL", "—"],
          ["Weeks 5–8", "4 mg (4000 mcg)", "40 units", "0.40 mL", "—"],
          ["Weeks 9–12", "8 mg (8000 mcg)", "80 units", "0.80 mL", "—"],
          ["Weeks 13+", "12 mg (12000 mcg)", "120 units", "1.20 mL", "2 vials"],
        ],
        caption:
          "At 12 mg the weekly volume exceeds a single 10 mg fill, so two vials are required per dose at that step.",
      },
      note: "12 mg represents the highest dose evaluated in the Phase 2 obesity trial, which reported roughly 24% average body-weight reduction at 48 weeks in the top cohort.",
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      items: [
        "**Retatrutide vials (10 mg):** ~5 vials for a 12-week gradual run to 6 mg; ~15 vials for a 24-week run to 8 mg; ~6 vials for a 12-week aggressive run.",
        "**Insulin syringes (U-100, 1 mL):** 12–24 for a 12-week schedule; 24–48 for 24 weeks (one fresh syringe per draw).",
        "**Bacteriostatic water (10 mL):** one bottle covers ~5 vials; two bottles for a 15-vial run.",
        "**Alcohol swabs:** a single 100-count box comfortably covers a 12–24 week schedule.",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research goal:** model metabolic weight-regulation via simultaneous GLP-1, GIP and glucagon receptor activation.",
        "**Schedule:** once-weekly subcutaneous administration in the published model.",
        "**Dose band:** 2–8 mg standard, up to 12 mg in aggressive arms.",
        "**Fill:** 10 mg lyophilized, reconstituted to 10 mg/mL with 1 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted.",
      ],
    },
    {
      id: "sec-7",
      heading: "Dosing Protocol Notes",
      type: "list",
      items: [
        "Begin at the lowest 2 mg step and hold each level for about four weeks before escalating.",
        "Keep administration on a fixed weekly cadence and the same day where possible for steady exposure modelling.",
        "Escalate only after tolerability is established at the prior step.",
        "Target the mid-band (6–8 mg) for the bulk of the published efficacy signal.",
      ],
    },
    {
      id: "sec-8",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials at **−20 °C**, protected from light, where stability extends for many months. Once reconstituted, refrigerate at **2–8 °C** and use within about four weeks. Allow refrigerated solution to warm slightly before drawing, avoid repeated freeze-thaw cycles, and aliquot if a vial will be sampled many times.",
      ],
    },
    {
      id: "sec-9",
      heading: "Important Handling Notes",
      type: "list",
      items: [
        "Use a sterile syringe for every draw and never re-enter the vial with a used needle.",
        "Rotate sampling/handling technique to keep the stopper intact.",
        "Split larger volumes if they exceed a single syringe's capacity.",
        "Document each draw — date, volume, remaining material — for reproducibility.",
      ],
    },
    {
      id: "sec-10",
      heading: "How Retatrutide Works",
      type: "prose",
      paragraphs: [
        "Retatrutide is a synthetic peptide engineered to act as a balanced agonist at three incretin and metabolic receptors at once: GLP-1 and GIP (both involved in glucose-dependent insulin signalling and appetite) and the glucagon receptor (linked to energy expenditure and hepatic lipid handling). A fatty-acid moiety extends its half-life enough to support once-weekly dosing in trials. The combined activity is what distinguishes it from single (GLP-1) and dual (GLP-1/GIP) agonists in the comparative literature.",
      ],
    },
    {
      id: "sec-11",
      heading: "Reported Benefits & Side Effects",
      type: "benefits",
      groups: [
        {
          subheading: "Benefits observed in trials",
          items: [
            "Average body-weight reduction of roughly 22–24% at 48 weeks in the highest-dose obesity cohort.",
            "HbA1c reductions of about 1.3–2.0% in the Type 2 diabetes study.",
            "Improvements in blood pressure, LDL, waist circumference and liver-fat markers.",
            "A very high proportion of the high-dose cohort achieved at least 5% weight loss.",
          ],
        },
        {
          subheading: "Side effects reported",
          items: [
            "Dose-dependent gastrointestinal effects — nausea, vomiting and diarrhoea — most common during escalation.",
            "Generally transient and mitigated by slower titration.",
            "Overall tolerability profile comparable to other incretin agonists.",
          ],
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Supporting Lifestyle Factors (Research Context)",
      type: "list",
      items: [
        "Protein-forward, micronutrient-dense nutrition in the published study designs.",
        "Combined resistance and aerobic activity to preserve lean mass.",
        "Adequate sleep, stress management and hydration as standard trial controls.",
      ],
    },
    {
      id: "sec-13",
      heading: "Injection Technique (Reference Only)",
      type: "list",
      items: [
        "Prepare the vial and site with alcohol swabs and let them dry.",
        "Insert subcutaneously at a 45–90° angle depending on needle length; aspiration is not required for subcutaneous work.",
        "Split volume across sites when it exceeds a comfortable single injection.",
        "Rotate sites systematically and dispose of sharps in an approved container.",
      ],
    },
    {
      id: "sec-14",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Rosenstock J, et al. Retatrutide in Type 2 diabetes — Phase 2 trial.",
          journal: "The Lancet (2023).",
          href: "https://pubmed.ncbi.nlm.nih.gov/37385280/",
          label: "pubmed.ncbi.nlm.nih.gov/37385280",
        },
        {
          cite: "Jastreboff AM, et al. Triple-hormone-receptor agonist for obesity — Phase 2.",
          journal: "NEJM (2023).",
          href: "https://pubmed.ncbi.nlm.nih.gov/37366315/",
          label: "pubmed.ncbi.nlm.nih.gov/37366315",
        },
        {
          cite: "Study of Retatrutide in adults with obesity (NCT04881760).",
          journal: "ClinicalTrials.gov.",
          href: "https://clinicaltrials.gov/study/NCT04881760",
          label: "clinicaltrials.gov/study/NCT04881760",
        },
        {
          cite: "Hamza M, et al. Triple agonism therapies.",
          journal: "Current Obesity Reports (2025).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12304053/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC12304053",
        },
        {
          cite: "Coskun T, et al. LY3437943 discovery and mechanism.",
          journal: "Cell Metabolism (2022).",
          href: "https://pubmed.ncbi.nlm.nih.gov/35985340/",
          label: "pubmed.ncbi.nlm.nih.gov/35985340",
        },
      ],
    },
    {
      id: "sec-15",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "Retatrutide — 5 mg Vial", href: "/single-peptide-dosages/retatrutide-5mg" },
        { label: "Retatrutide — 30 mg Vial", href: "/single-peptide-dosages/retatrutide-30mg" },
        { label: "Tirzepatide — 10 mg Vial", href: "/single-peptide-dosages/tirzepatide-10mg" },
        { label: "What Is Retatrutide? — Compound Overview", href: "/learn/retatrutide" },
      ],
    },
  ],
};
