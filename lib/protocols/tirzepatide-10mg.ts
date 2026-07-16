import type { Protocol } from "./types";

export const tirzepatide10mg: Protocol = {
  slug: "tirzepatide-10mg",
  crumb: "Tirzepatide 10 mg",
  title: "Tirzepatide (10 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 10 mg Tirzepatide research vial is reconstituted and titrated in the published clinical literature, expressed in insulin-syringe units for laboratory measurement work.",
  pills: [
    { label: "GLP-1 / GIP", red: true },
    { label: "Dual Agonist" },
    { label: "Metabolic Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "Tirzepatide 10 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "2.0 mL BAC water → 5 mg/mL" },
    { label: "Typical Weekly Range", value: "2.5 mg – 10 mg (advanced to 15 mg)" },
    { label: "Per 2.5 mg (2500 mcg)", value: "≈ 50 units (0.50 mL)" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "Tirzepatide is an investigational compound that is not approved for human or veterinary use in this context. The schedules above are reproduced from published research solely for educational and in-vitro reference. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "Tirzepatide (research code LY3298176) is a single-molecule dual agonist studied for its combined activity at the GLP-1 and GIP receptors. The values below are compiled strictly for laboratory and educational reference — they describe how the compound was handled and dosed across published trials, not a recommendation for use in humans or animals.",
        "For a 10 mg vial, adding **2.0 mL of bacteriostatic water** yields a concentration of **5 mg/mL** (5,000 mcg/mL). At that fill, every 0.10 mL drawn on a U-100 insulin syringe equals 10 units and delivers 0.5 mg of material, so a full 1 mL syringe (100 units) holds 5 mg — a convenient half-vial measure that keeps the titration arithmetic tidy.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard (Gradual) Titration Schedule",
      type: "table",
      intro:
        "The gradual schedule mirrors the four-week escalation cadence used in the clinical program, where weekly amounts were stepped up roughly every four weeks to manage gastrointestinal tolerability. Because a single syringe tops out at 5 mg (1 mL), the upper steps are noted as split draws.",
      table: {
        columns: ["Phase", "Weekly Dose", "Units (U-100)", "Volume", "Draws"],
        rows: [
          ["Weeks 1–4", "2.5 mg (2500 mcg)", "50 units", "0.50 mL", "1"],
          ["Weeks 5–8", "5 mg (5000 mcg)", "100 units", "1.00 mL", "1"],
          ["Weeks 9–12", "7.5 mg (7500 mcg)", "150 units", "1.50 mL", "2 × 75 units"],
          ["Weeks 13–16", "10 mg (10000 mcg)", "200 units", "2.00 mL", "2 × 100 units"],
        ],
        caption:
          "Units assume a 5 mg/mL fill (2 mL BAC water). One 10 mg vial supplies one full 10 mg weekly dose.",
      },
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed lyophilized vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 2.0 mL of bacteriostatic water and inject it slowly down the inside wall of the vial — never directly onto the powder pellet.",
        "Swirl gently until fully dissolved. Do not shake; aggressive agitation can shear the peptide.",
        "The solution should be clear and colourless. Label the vial with the concentration (5 mg/mL) and the reconstitution date.",
        "Store upright under refrigeration between uses and draw subsequent volumes with a fresh sterile syringe each time.",
      ],
    },
    {
      id: "sec-4",
      heading: "Advanced (Aggressive) Titration Schedule",
      type: "table",
      intro:
        "The advanced schedule reaches the 15 mg ceiling tested in the obesity program, where the highest cohort recorded the largest average weight reductions. It carries the same four-week steps but extends past the 10 mg top of the standard arm.",
      table: {
        columns: ["Phase", "Weekly Dose", "Units (U-100)", "Volume", "Draws"],
        rows: [
          ["Weeks 1–4", "2.5 mg (2500 mcg)", "50 units", "0.50 mL", "1"],
          ["Weeks 5–8", "5 mg (5000 mcg)", "100 units", "1.00 mL", "1"],
          ["Weeks 9–12", "10 mg (10000 mcg)", "200 units", "2.00 mL", "2 × 100 units"],
          ["Weeks 13+", "15 mg (15000 mcg)", "300 units", "3.00 mL", "1.5 vials"],
        ],
        caption:
          "At 15 mg the weekly volume exceeds a single 10 mg fill, so one and a half vials' worth of solution is required per dose at that step.",
      },
      note: "15 mg is the highest maintenance dose evaluated in the pivotal obesity trial, where the top cohort recorded roughly 20–21% average body-weight reduction at 72 weeks.",
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      items: [
        "**Tirzepatide vials (10 mg):** ~6 vials for a 16-week gradual run to 10 mg; one full vial supplies a single 10 mg weekly dose, while early low-dose weeks stretch one vial across several draws.",
        "**Insulin syringes (U-100, 1 mL):** ~24 for a 16-week schedule, allowing for the split draws required at 7.5 mg and above (one fresh syringe per draw).",
        "**Bacteriostatic water (10 mL):** one bottle reconstitutes ~5 vials at 2 mL each; two bottles cover a longer run.",
        "**Alcohol swabs:** a single 100-count box comfortably covers a 16-week schedule.",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research goal:** model metabolic weight-regulation and glycaemic control via combined GLP-1 and GIP receptor activation.",
        "**Schedule:** once-weekly subcutaneous administration in the published model.",
        "**Dose band:** 2.5–10 mg standard, up to 15 mg in aggressive arms.",
        "**Fill:** 10 mg lyophilized, reconstituted to 5 mg/mL with 2 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted.",
      ],
    },
    {
      id: "sec-7",
      heading: "Dosing Protocol Notes",
      type: "list",
      items: [
        "Begin at the lowest 2.5 mg step and hold each level for about four weeks before escalating.",
        "Keep administration on a fixed weekly cadence and the same day where possible for steady exposure modelling.",
        "Escalate only after tolerability is established at the prior step.",
        "Split any weekly amount that exceeds 1 mL (5 mg) across two draws, since a U-100 syringe holds only 1 mL.",
      ],
    },
    {
      id: "sec-8",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials at **−20 °C**, protected from light, where stability extends for many months. Once reconstituted, refrigerate at **2–8 °C** and use within about 28 days. Allow refrigerated solution to warm slightly before drawing, avoid repeated freeze-thaw cycles, and aliquot if a vial will be sampled many times.",
      ],
    },
    {
      id: "sec-9",
      heading: "Important Handling Notes",
      type: "list",
      items: [
        "Use a sterile syringe for every draw and never re-enter the vial with a used needle.",
        "Rotate sampling/handling technique to keep the stopper intact.",
        "Split larger volumes if they exceed a single syringe's 1 mL capacity.",
        "Document each draw — date, volume, remaining material — for reproducibility.",
      ],
    },
    {
      id: "sec-10",
      heading: "How Tirzepatide Works",
      type: "prose",
      paragraphs: [
        "Tirzepatide is a synthetic peptide engineered to act as a dual agonist at two incretin receptors at once: GLP-1 and GIP, both of which contribute to glucose-dependent insulin secretion, glucagon suppression, slowed gastric emptying and reduced appetite. A fatty-acid moiety extends its half-life enough to support once-weekly dosing in trials. The simultaneous GIP component is what distinguishes it from single GLP-1 agonists in the comparative literature and is associated with its larger weight-loss signal.",
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
            "Average body-weight reduction of roughly 15–21% across the higher maintenance doses in the obesity program.",
            "HbA1c reductions of about 1.8–2.6% in the Type 2 diabetes comparison studies.",
            "Improvements in fasting glucose, blood pressure, lipid markers and waist circumference.",
            "A high proportion of higher-dose participants reached at least 5–10% weight loss.",
          ],
        },
        {
          subheading: "Side effects reported",
          items: [
            "Dose-dependent gastrointestinal effects — nausea, diarrhoea, vomiting and constipation — most common during escalation.",
            "Generally mild-to-moderate, transient and mitigated by slower titration.",
            "Occasional injection-site reactions; overall tolerability comparable to other incretin agonists.",
          ],
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Supporting Lifestyle Factors (Research Context)",
      type: "list",
      items: [
        "Reduced-calorie, protein-forward nutrition used across the published study designs.",
        "Combined resistance and aerobic activity to help preserve lean mass during weight loss.",
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
        "Split volume across two sites when a weekly amount exceeds a comfortable single injection.",
        "Rotate sites systematically and dispose of sharps in an approved container.",
      ],
    },
    {
      id: "sec-14",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Farzam K, Patel P. Tirzepatide — pharmacology overview.",
          journal: "StatPearls, NCBI Bookshelf.",
          href: "https://www.ncbi.nlm.nih.gov/books/NBK585056/",
          label: "ncbi.nlm.nih.gov/books/NBK585056",
        },
        {
          cite: "Frías JP, et al. Tirzepatide versus semaglutide in Type 2 diabetes — Phase 2.",
          journal: "The Lancet (2018).",
          href: "https://pubmed.ncbi.nlm.nih.gov/30293770/",
          label: "pubmed.ncbi.nlm.nih.gov/30293770",
        },
        {
          cite: "Jastreboff AM, et al. Tirzepatide once weekly for the treatment of obesity.",
          journal: "NEJM (2022).",
          href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
          label: "nejm.org/doi/full/10.1056/NEJMoa2206038",
        },
        {
          cite: "Gallwitz B. Clinical perspectives on incretin dual agonism.",
          journal: "Frontiers in Endocrinology (2022).",
          href: "https://doi.org/10.3389/fendo.2022.1004044",
          label: "doi.org/10.3389/fendo.2022.1004044",
        },
        {
          cite: "Jordan MA, et al. Subcutaneous injection technique and handling.",
          journal: "Hospital Pharmacy (2021).",
          href: "https://pubmed.ncbi.nlm.nih.gov/33944846/",
          label: "pubmed.ncbi.nlm.nih.gov/33944846",
        },
      ],
    },
    {
      id: "sec-15",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "Tirzepatide — 5 mg Vial", href: "/single-peptide-dosages/tirzepatide-5mg" },
        { label: "Tirzepatide — 30 mg Vial", href: "/single-peptide-dosages/tirzepatide-30mg" },
        { label: "Retatrutide — 10 mg Vial", href: "/single-peptide-dosages/retatrutide-10mg" },
        { label: "What Is Tirzepatide? — Compound Overview", href: "/learn/tirzepatide" },
      ],
    },
  ],
};
