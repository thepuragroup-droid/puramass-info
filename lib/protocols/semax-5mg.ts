import type { Protocol } from "./types";

export const semax5mg: Protocol = {
  slug: "semax-5mg",
  crumb: "Semax 5 mg",
  title: "Semax (5 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 5 mg Semax research vial is prepared as an intranasal solution and converted into per-spray amounts. Unlike most peptides on this site, published human Semax research used the nasal route — so the math here is in sprays, not syringe units.",
  pills: [
    { label: "ACTH(4-10) Analogue", red: true },
    { label: "Intranasal" },
    { label: "Cognitive Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "Semax 5 mg — Quick Chart",
  chart: [
    { label: "5 mL final volume", value: "1 mg/mL → 100 mcg per 0.10 mL spray" },
    { label: "10 mL final volume", value: "0.5 mg/mL → 50 mcg per 0.10 mL spray" },
    { label: "Reference amount", value: "200–300 mcg, 2–3× daily" },
    { label: "Storage (prepared)", value: "≤ 10 °C, dark, do not freeze" },
  ],
  disclaimer:
    "Semax is not FDA approved, and the FDA lists it among bulk substances that may present significant safety risks in compounding. The registered Russian 0.1% product is a specific preserved formulation; a custom research solution and pump are not equivalent to it. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Preparation Overview",
      type: "prose",
      paragraphs: [
        "Semax is a synthetic heptapeptide (Met-Glu-His-Phe-Pro-Gly-Pro) built on the ACTH(4-10) sequence and stabilised with a Pro-Gly-Pro tail. It was developed in Russia without the hormonal activity of full-length ACTH and is registered there as a 0.1% intranasal drop. Human studies have almost exclusively used the nasal route, so this page converts the vial into a nasal-spray bottle rather than syringe units.",
        "The full 5 mg vial (5,000 mcg) is dissolved and brought to an exact **measured final volume**. At **5.0 mL** that gives **1 mg/mL** — the same concentration as the registered 0.1% product — and **100 mcg per 0.10 mL spray**. At **10.0 mL** it gives **0.5 mg/mL** and **50 mcg per spray**. Everything downstream depends on two numbers you must verify: the final volume and the pump's output per stroke.",
      ],
    },
    {
      id: "sec-2",
      heading: "Concentration by Final Volume",
      type: "table",
      intro:
        "Both options start by adding 3.0 mL to the vial. The dissolved solution is then transferred in full to the spray bottle and topped up to the measured final volume.",
      table: {
        columns: ["Final Volume", "Vehicle Added After Transfer", "Concentration", "Per 0.10 mL Spray", "Nominal Sprays"],
        rows: [
          ["5.0 mL", "≈ 2.0 mL", "1,000 mcg/mL", "100 mcg", "50"],
          ["10.0 mL", "≈ 7.0 mL", "500 mcg/mL", "50 mcg", "100"],
        ],
        caption:
          "Nominal spray counts are before priming and residual hold-up in the bottle, so usable sprays will be somewhat fewer.",
      },
    },
    {
      id: "sec-3",
      heading: "Reference Schedule",
      type: "table",
      intro:
        "This row translates the registered 0.1% drop schedule into spray volume at the 1 mg/mL (5 mL) preparation.",
      table: {
        columns: ["Period", "Amount per Administration", "Sprays (5 mL bottle)", "Daily Total", "Frequency"],
        rows: [
          [
            "Days 1–5",
            "200–300 mcg",
            "2–3 sprays (0.20–0.30 mL)",
            "400–900 mcg",
            "2–3× daily, first half of the day",
          ],
        ],
        caption:
          "A full 5-day course at these amounts uses 2.0–4.5 mg, so one 5 mg vial covers one course.",
      },
      note: "This is a concentration conversion of a registered drop schedule, not a validated regimen for a custom research preparation.",
    },
    {
      id: "sec-4",
      heading: "Preparing the Spray Bottle",
      type: "steps",
      steps: [
        "Confirm the 5 mg vial, the sterile vehicle, the spray bottle's capacity and the pump's documented output per stroke before starting.",
        "Add 3.0 mL of compatible sterile vehicle to the vial using aseptic technique.",
        "Swirl gently until fully dissolved. Do not shake.",
        "Transfer the entire 3.0 mL into a sterile 5 mL or 10 mL nasal spray bottle.",
        "Add vehicle until the measured final volume is exactly 5.0 mL or 10.0 mL (≈ 2.0 mL or ≈ 7.0 mL added). Measure the final volume rather than trusting the bottle's capacity mark.",
        "Fit the pump and label the bottle with peptide amount, final volume, concentration, pump output and preparation date.",
        "Prime the pump per its instructions and record the priming sprays in the log.",
      ],
    },
    {
      id: "sec-5",
      heading: "Amount to Spray Conversions",
      type: "table",
      intro: "Assumes a pump verified at 0.10 mL per complete stroke.",
      table: {
        columns: ["Research Amount", "5 mL Bottle (100 mcg/spray)", "10 mL Bottle (50 mcg/spray)"],
        rows: [
          ["200 mcg", "2 sprays", "4 sprays"],
          ["300 mcg", "3 sprays", "6 sprays"],
          ["400 mcg", "4 sprays", "8 sprays"],
          ["500 mcg", "5 sprays", "10 sprays"],
        ],
        caption:
          "The 5 mL preparation keeps spray counts low; the 10 mL preparation allows finer 50 mcg steps but needs twice as many actuations.",
      },
    },
    {
      id: "sec-6",
      heading: "Why Pump Output Must Be Verified",
      type: "table",
      intro:
        "Nasal pumps are not standardised — pharmaceutical literature reports outputs from roughly 0.025 mL to 0.20 mL per stroke. The per-spray amount scales directly with it: mcg per spray = (5,000 mcg ÷ final volume) × mL per stroke.",
      table: {
        columns: ["Pump Output", "5 mL Bottle", "10 mL Bottle"],
        rows: [
          ["0.05 mL / stroke", "50 mcg", "25 mcg"],
          ["0.10 mL / stroke", "100 mcg", "50 mcg"],
          ["0.13 mL / stroke", "130 mcg", "65 mcg"],
        ],
        caption:
          "Use the manufacturer's specification or a measured value for the exact pump. Priming, stroke consistency and tail-off near the end of the bottle all affect delivered volume.",
      },
    },
    {
      id: "sec-7",
      heading: "Supplies Needed",
      type: "list",
      items: [
        "**Semax vial (5 mg):** one per prepared bottle.",
        "**Sterile vehicle:** single-use sterile 0.9% sodium chloride or another validated sterile nasal vehicle.",
        "**Nasal spray bottle:** one sterile 5 mL or 10 mL bottle with a metered pump documented at 0.10 mL per stroke.",
        "**Calibrated transfer tools:** sterile syringes or pipettes able to measure 3.0 mL and the exact final volume, plus a transfer needle if the vial has a septum.",
        "**Handling supplies:** alcohol pads, gloves, a disinfected work surface and a sharps container if needles are used.",
        "**Label and log:** to record concentration, pump output, preparation date, priming sprays and every actuation.",
      ],
    },
    {
      id: "sec-8",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "The registered 0.1% product is stored protected from light at **no more than 10 °C** and must not be frozen. It uses purified water with methylparaben as a preservative — a custom saline preparation has no preservative and is not covered by the registered product's stability data. Keep the prepared bottle refrigerated and capped, minimise warming and light exposure, and follow a formulation-specific stability plan rather than assuming the registered product's shelf life applies.",
      ],
    },
    {
      id: "sec-9",
      heading: "Published Human Intranasal Research",
      type: "table",
      intro:
        "The amounts below come from different populations, formulations and goals. They show the range in the literature — not a single schedule.",
      table: {
        columns: ["Source", "Setting", "Intranasal Amount & Formulation"],
        rows: [
          [
            "Kaplan et al., 1996",
            "Healthy volunteers — operator performance and EEG",
            "0.25 mg and 1 mg exposures; 1 mg in 0.4 mL physiological solution in the operator experiment",
          ],
          [
            "Lebedeva et al., 2018",
            "Healthy volunteers — resting-state fMRI",
            "Single 1.2 mg dose of a 1% solution, 60 µL per nostril",
          ],
          [
            "Gusev et al., 2018",
            "Ischaemic stroke recovery",
            "6,000 mcg/day for 10 days, repeated after a 20-day interval",
          ],
          [
            "Registered 0.1% product",
            "Approved intranasal drop (Russia)",
            "1 mg/mL in purified water with methylparaben; 50 mcg per 0.05 mL drop",
          ],
        ],
        caption:
          "The 5 mL preparation matches the registered product's 1 mg/mL concentration, but a matching concentration does not make the formulation, preservative system, delivery or stability equivalent.",
      },
    },
    {
      id: "sec-10",
      heading: "How Semax Is Thought to Work",
      type: "prose",
      paragraphs: [
        "Semax keeps the ACTH(4-10) fragment associated with effects on attention and learning while dropping the adrenal-stimulating part of the hormone. Research has linked it to increased brain-derived neurotrophic factor (**BDNF**) and its receptor signalling, neuroprotective effects in ischaemia models, and changes in attention, memory and functional brain connectivity. Intranasal delivery places the solution on the nasal mucosa, the route used throughout the human studies above.",
        "These findings come from varied populations and formulations — including N-acetyl Semax and the registered preserved drop — and do not establish that a custom 5 mg research preparation behaves identically.",
      ],
    },
    {
      id: "sec-11",
      heading: "Reported Benefits & Side Effects",
      type: "benefits",
      groups: [
        {
          subheading: "Effects reported in published research",
          items: [
            "Changes in attention, operator performance and EEG measures in healthy volunteers.",
            "Altered default-mode network connectivity on fMRI after a single dose.",
            "Use as an adjunct in ischaemic stroke recovery, moderate head injury and motor neuron disease studies, among others.",
          ],
        },
        {
          subheading: "Side effects and cautions",
          items: [
            "Mild nasal irritation with prolonged use is listed in the registered product information.",
            "The FDA flags Semax among compounded bulk substances that may present significant safety risks.",
            "Pump output, formulation, nasal congestion and technique can all change the delivered amount.",
          ],
        },
      ],
    },
    {
      id: "sec-12",
      heading: "Nasal Spray Technique (Reference Only)",
      type: "steps",
      steps: [
        "Check the label's concentration and the pump output before use.",
        "Prime or re-prime the pump as the manufacturer instructs.",
        "Hold the bottle upright and use one complete, smooth stroke per spray.",
        "Record every actuation immediately, including priming sprays, to track remaining volume and tail-off.",
        "Wipe the nozzle, replace the cap and return the bottle to refrigerated, dark storage.",
      ],
    },
    {
      id: "sec-13",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Kaplan AY, et al. Synthetic ACTH analogue Semax displays nootropic-like activity in humans.",
          journal: "Neuroscience Research Communications (1996).",
          href: "https://onlinelibrary.wiley.com/doi/10.1002/%28SICI%291520-6769%28199609%2919%3A2%3C115%3A%3AAID-NRC171%3E3.0.CO%3B2-B",
          label: "onlinelibrary.wiley.com — Kaplan 1996",
        },
        {
          cite: "Lebedeva IS, et al. Effects of Semax on the default mode network of the brain.",
          journal: "Bulletin of Experimental Biology and Medicine (2018).",
          href: "https://doi.org/10.1007/s10517-018-4234-3",
          label: "doi.org/10.1007/s10517-018-4234-3",
        },
        {
          cite: "Gusev EI, et al. Efficacy of Semax in patients at different stages of ischemic stroke.",
          journal: "(2018).",
          href: "https://pubmed.ncbi.nlm.nih.gov/29798983/",
          label: "pubmed.ncbi.nlm.nih.gov/29798983",
        },
        {
          cite: "Semax 0.1% nasal drops — product instructions.",
          journal: "RLSnet (based on the manufacturer-approved instruction).",
          href: "https://www.rlsnet.ru/drugs/semaks-5420",
          label: "rlsnet.ru — Semax",
        },
        {
          cite: "Trows S, et al. Analytical challenges and regulatory requirements for nasal drug products in Europe and the U.S.",
          journal: "Pharmaceutics (2014).",
          href: "https://doi.org/10.3390/pharmaceutics6020195",
          label: "doi.org/10.3390/pharmaceutics6020195",
        },
        {
          cite: "Nasal spray and inhalation solution, suspension and spray drug products — chemistry, manufacturing and controls.",
          journal: "U.S. Food and Drug Administration — guidance.",
          href: "https://www.fda.gov/media/70857/download",
          label: "fda.gov/media/70857",
        },
        {
          cite: "Deigin VI, et al. Development of peptide biopharmaceuticals in Russia.",
          journal: "Pharmaceutics (2022).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9030433/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC9030433",
        },
        {
          cite: "Certain bulk drug substances for use in compounding that may present significant safety risks.",
          journal: "U.S. Food and Drug Administration.",
          href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
          label: "fda.gov — compounding safety risks",
        },
        {
          cite: "Nasution Z, et al. ACTH(4-10)Pro8-Gly9-Pro10 in moderate head injury.",
          journal: "(2013).",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3775187/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC3775187",
        },
        {
          cite: "Intranasal Semax as an adjunct in motor neuron disease — open-label study with two 10-day courses.",
          journal: "(2008).",
          href: "https://pubmed.ncbi.nlm.nih.gov/18379501/",
          label: "pubmed.ncbi.nlm.nih.gov/18379501",
        },
      ],
    },
    {
      id: "sec-14",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "Semax — 10 mg Vial", href: "/single-peptide-dosages/semax-10mg" },
        { label: "Selank — 10 mg Vial", href: "/single-peptide-dosages/selank-10mg" },
        { label: "MOTS-c — 5 mg Vial", href: "/single-peptide-dosages/mots-c-5mg" },
        { label: "Reconstitution Guide", href: "/guides/reconstitution-guide" },
      ],
    },
  ],
};
