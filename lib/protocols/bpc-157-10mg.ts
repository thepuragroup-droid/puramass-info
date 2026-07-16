import type { Protocol } from "./types";

export const bpc15710mg: Protocol = {
  slug: "bpc-157-10mg",
  crumb: "BPC-157 10 mg",
  title: "BPC-157 (10 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 10 mg BPC-157 research vial is reconstituted and titrated in the published preclinical literature, expressed in insulin-syringe units for laboratory measurement work.",
  pills: [
    { label: "Pentadecapeptide", red: true },
    { label: "Tissue-Repair Research" },
    { label: "Daily Dosing" },
    { label: "Lyophilized" },
  ],
  chartTitle: "BPC-157 10 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → 3.33 mg/mL" },
    { label: "Typical Daily Range", value: "200 mcg – 600 mcg" },
    { label: "Per 200 mcg (0.2 mg)", value: "≈ 6 units (0.06 mL)" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "BPC-157 is an investigational compound that is not approved for human or veterinary use. The schedules above are reproduced from published research solely for educational and in-vitro reference. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide — a 15-amino-acid fragment derived from a protein found in gastric juice — studied for its role in tissue repair and angiogenesis. The figures below are compiled strictly for laboratory and educational reference; they describe how the compound was handled and dosed in published research models, not a recommendation for use in humans or animals.",
        "For a 10 mg vial, adding **3.0 mL of bacteriostatic water** yields a concentration of **3.33 mg/mL** (3,333 mcg/mL). At that fill, every 0.01 mL drawn on a U-100 insulin syringe equals 1 unit and delivers roughly 33 mcg of material, so a 200 mcg measurement lands at about 6 units, which keeps the arithmetic manageable across the small daily steps used for this compound.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard (Gradual) Titration Schedule",
      type: "table",
      intro:
        "The gradual schedule mirrors the conservative dose-ramping seen in research handling, where small daily amounts are increased every couple of weeks to observe tolerability before settling into a maintenance band. Unlike weekly metabolic peptides, BPC-157 is administered once daily in the published models.",
      table: {
        columns: ["Phase", "Daily Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–2", "200 mcg (0.2 mg)", "6 units", "0.06 mL", "Once daily"],
          ["Weeks 3–4", "400 mcg (0.4 mg)", "12 units", "0.12 mL", "Once daily"],
          ["Weeks 5–8+", "600 mcg (0.6 mg)", "18 units", "0.18 mL", "Once daily"],
        ],
        caption:
          "Units assume a 3.33 mg/mL fill (3 mL BAC water). One 10 mg vial supplies roughly 16–17 daily doses at the 600 mcg maintenance step.",
      },
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed lyophilized vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 3.0 mL of bacteriostatic water and inject it slowly down the inside wall of the vial — never directly onto the powder pellet, which helps avoid foaming.",
        "Swirl or gently roll the vial until fully dissolved. Do not shake; aggressive agitation can shear the peptide.",
        "The solution should be clear and colourless. Label the vial with the concentration (3.33 mg/mL) and the reconstitution date.",
        "Refrigerate at 2–8 °C between uses, keep it protected from light, and draw subsequent volumes with a fresh sterile syringe each time.",
      ],
    },
    {
      id: "sec-4",
      heading: "Maintenance / Extended Schedule",
      type: "table",
      intro:
        "Where the gradual ramp is complete, research handling typically holds the compound at a steady maintenance level rather than escalating further. The table below illustrates a flat extended-use band held once daily for the remainder of an observation window.",
      table: {
        columns: ["Phase", "Daily Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–2", "250 mcg (0.25 mg)", "7.5 units", "0.075 mL", "Once daily"],
          ["Weeks 3–4", "500 mcg (0.5 mg)", "15 units", "0.15 mL", "Once daily"],
          ["Weeks 5–12", "600 mcg (0.6 mg)", "18 units", "0.18 mL", "Once daily"],
        ],
        caption:
          "A flat maintenance band of 600 mcg/day consumes roughly one 10 mg vial every 16–17 days at the 3.33 mg/mL fill.",
      },
      note: "600 mcg per day sits at the upper end of the dose band described in preclinical handling references. Because human efficacy data are absent, no figure here should be read as an established therapeutic dose.",
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      items: [
        "**BPC-157 vials (10 mg):** ~3 vials cover an 8-week daily run that finishes at the 600 mcg maintenance step.",
        "**Insulin syringes (U-100, 1 mL):** ~56 for an 8-week daily schedule — one fresh syringe per daily draw.",
        "**Bacteriostatic water (10 mL):** a single bottle reconstitutes ~3 vials.",
        "**Alcohol swabs:** two 100-count boxes comfortably cover a daily 8-week schedule.",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research goal:** model tissue-repair, angiogenesis and anti-inflammatory activity in gut, tendon, muscle and skin systems.",
        "**Schedule:** once-daily subcutaneous administration in the published handling model.",
        "**Dose band:** 200–600 mcg daily, ramped gradually.",
        "**Fill:** 10 mg lyophilized, reconstituted to 3.33 mg/mL with 3 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted.",
      ],
    },
    {
      id: "sec-7",
      heading: "Dosing Protocol Notes",
      type: "list",
      items: [
        "Begin at the lowest 200 mcg step and hold each level for roughly two weeks before escalating.",
        "Keep administration on a fixed daily cadence — the same time of day where possible — for steady exposure modelling.",
        "Escalate only after tolerability is established at the prior step.",
        "Most published handling settles at the 600 mcg maintenance band rather than pushing higher.",
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
        "Because daily dosing means frequent stopper entries, rotate the puncture point and inspect the septum for coring.",
        "The small daily volumes (6–18 units) demand a steady draw — measure at eye level against the syringe graduations.",
        "Document each draw — date, volume, remaining material — for reproducibility.",
      ],
    },
    {
      id: "sec-10",
      heading: "How BPC-157 Works",
      type: "prose",
      paragraphs: [
        "BPC-157 is a stable gastric pentadecapeptide thought to act largely through modulation of the nitric oxide (NO) system and upregulation of growth-factor expression. In preclinical models this combination is associated with angiogenesis — the formation of new blood vessels — and with increased collagen deposition and fibroblast activity at sites of tissue damage. It has also been linked to interactions with the VEGFR2 pathway and with stabilising effects on the gut–brain axis. Unlike incretin or growth-hormone peptides, its proposed activity centres on repair and protection of soft tissue rather than metabolic signalling.",
      ],
    },
    {
      id: "sec-11",
      heading: "Reported Benefits & Side Effects",
      type: "benefits",
      groups: [
        {
          subheading: "Effects observed in preclinical research",
          items: [
            "Accelerated wound and soft-tissue repair across gut, tendon, muscle and skin models.",
            "Anti-inflammatory activity and apparent protection of the gastrointestinal lining.",
            "Promotion of tendon-to-bone and ligament healing in animal studies.",
            "Good tolerability with no serious adverse events recorded at the doses tested in those models.",
          ],
        },
        {
          subheading: "Side effects reported",
          items: [
            "Occasional mild injection-site reactions such as redness or itching.",
            "No consistent systemic toxicity signal in the available preclinical record.",
            "Long-term human safety and efficacy remain unestablished and under investigation.",
          ],
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Injection/Handling Technique (Reference Only)",
      type: "list",
      items: [
        "Clean the vial stopper and the handling site with alcohol swabs and let them dry.",
        "Pinch a skinfold and insert subcutaneously at a 45–90° angle depending on needle length; aspiration is not required for subcutaneous work.",
        "Inject slowly given the small daily volume, then withdraw smoothly.",
        "Rotate sites systematically (abdomen, thighs, upper arms) to avoid lipohypertrophy, and dispose of sharps in an approved container.",
      ],
    },
    {
      id: "sec-13",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Sikiric P, et al. BPC-157, a stable gastric pentadecapeptide as a novel therapy.",
          journal: "Current Pharmaceutical Design.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC5333585",
        },
        {
          cite: "Seiwerth S, et al. BPC-157 and its relationship with angiogenic growth factors.",
          journal: "Life Sciences.",
          href: "https://pubmed.ncbi.nlm.nih.gov/29990514/",
          label: "pubmed.ncbi.nlm.nih.gov/29990514",
        },
        {
          cite: "Chang CH, et al. BPC-157 promotes tendon-to-bone healing.",
          journal: "Journal of Orthopaedic Research.",
          href: "https://pubmed.ncbi.nlm.nih.gov/32710582/",
          label: "pubmed.ncbi.nlm.nih.gov/32710582",
        },
        {
          cite: "Vasireddi N, et al. Emerging use of BPC-157 in orthopaedic sports medicine.",
          journal: "HSS Journal.",
          href: "https://pubmed.ncbi.nlm.nih.gov/40756949/",
          label: "pubmed.ncbi.nlm.nih.gov/40756949",
        },
        {
          cite: "PCO-02: Phase I safety study of oral BPC-157 (NCT02637284).",
          journal: "ClinicalTrials.gov.",
          href: "https://clinicaltrials.gov/study/NCT02637284",
          label: "clinicaltrials.gov/study/NCT02637284",
        },
      ],
    },
    {
      id: "sec-14",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "BPC-157 — 20 mg Vial", href: "/single-peptide-dosages/bpc-157-20mg" },
        { label: "TB-500 — 10 mg Vial", href: "/single-peptide-dosages/tb-500-10mg" },
        {
          label: "Wolverine Blend (BPC-157 + TB-500)",
          href: "/peptide-blend-dosages/bpc-157-tb-500-20mg",
        },
        { label: "What Is BPC-157? — Compound Overview", href: "/learn/bpc-157" },
      ],
    },
  ],
};
