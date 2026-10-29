import type { Protocol } from "./types";

export const selank5mg: Protocol = {
  slug: "selank-5mg",
  crumb: "Selank 5 mg",
  title: "Selank (5 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 5 mg Selank research vial is prepared as an intranasal solution and converted into per-spray amounts. Published human Selank research used the nasal route, so the math here is in sprays, not syringe units.",
  pills: [
    { label: "Tuftsin Analogue", red: true },
    { label: "Intranasal" },
    { label: "Anxiolytic Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "Selank 5 mg — Quick Chart",
  chart: [
    { label: "3.33 mL final volume", value: "1.5 mg/mL → 150 mcg per 0.10 mL spray" },
    { label: "5 mL final volume", value: "1 mg/mL → 100 mcg per 0.10 mL spray" },
    { label: "Reference amount", value: "300 mcg, 3× daily (900 mcg/day)" },
    { label: "Storage (prepared)", value: "≤ 10 °C, dark, do not freeze" },
  ],
  disclaimer:
    "Selank is not FDA approved. The registered Russian 0.15% product is a specific preserved formulation; a custom research solution and pump are not equivalent to it. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Preparation Overview",
      type: "prose",
      paragraphs: [
        "Selank is a synthetic heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) derived from tuftsin, a fragment of immunoglobulin G, with a Pro-Gly-Pro tail added for stability. It was developed in Russia and is registered there as a 0.15% intranasal drop. Human studies have used the nasal route in anxiety-spectrum populations and healthy-volunteer neuroimaging, so this page converts the vial into a nasal-spray bottle rather than syringe units.",
        "The full 5 mg vial (5,000 mcg) is dissolved and brought to an exact **measured final volume**. At **3.33 mL** that gives **1.5 mg/mL** — the same concentration as the registered 0.15% product — and **150 mcg per 0.10 mL spray**. At **5.0 mL** it gives **1 mg/mL** and **100 mcg per spray**; at **10.0 mL**, **0.5 mg/mL** and **50 mcg per spray**. Everything downstream depends on two numbers you must verify: the final volume and the pump's output per stroke.",
      ],
    },
    {
      id: "sec-2",
      heading: "Concentration by Final Volume",
      type: "table",
      intro:
        "All three options start by adding 3.0 mL to the vial. The dissolved solution is then transferred in full to the spray bottle and topped up to the measured final volume.",
      table: {
        columns: ["Final Volume", "Vehicle Added After Transfer", "Concentration", "Per 0.10 mL Spray", "Nominal Sprays"],
        rows: [
          ["3.33 mL", "≈ 0.33 mL", "1,500 mcg/mL", "150 mcg", "33"],
          ["5.0 mL", "≈ 2.0 mL", "1,000 mcg/mL", "100 mcg", "50"],
          ["10.0 mL", "≈ 7.0 mL", "500 mcg/mL", "50 mcg", "100"],
        ],
        caption:
          "Nominal spray counts are before priming and residual hold-up in the bottle, so usable sprays will be somewhat fewer. The 3.33 mL option needs a small, accurately measured top-up.",
      },
    },
    {
      id: "sec-3",
      heading: "Reference Schedule",
      type: "table",
      intro:
        "This row translates the registered 0.15% drop schedule — two drops per nostril, three times daily, for 14 days — into spray volume at the matching 1.5 mg/mL (3.33 mL) preparation.",
      table: {
        columns: ["Period", "Amount per Administration", "Sprays (3.33 mL bottle)", "Daily Total", "Frequency"],
        rows: [["Days 1–14", "300 mcg", "2 sprays (0.20 mL)", "900 mcg", "3× daily"]],
        caption:
          "One 5 mg vial covers about 5.5 days at 900 mcg/day. A full 14-day course needs 12.6 mg — three 5 mg vials.",
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
        "Add vehicle until the measured final volume is exactly 3.33 mL, 5.0 mL or 10.0 mL (≈ 0.33 mL, ≈ 2.0 mL or ≈ 7.0 mL added). Measure the final volume rather than trusting the bottle's capacity mark.",
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
        columns: ["Research Amount", "3.33 mL Bottle (150 mcg/spray)", "5 mL Bottle (100 mcg/spray)", "10 mL Bottle (50 mcg/spray)"],
        rows: [
          ["300 mcg", "2 sprays", "3 sprays", "6 sprays"],
          ["900 mcg", "6 sprays", "9 sprays", "18 sprays"],
          ["2,700 mcg", "18 sprays", "27 sprays", "54 sprays"],
          ["Whole vial", "33 sprays", "50 sprays", "100 sprays"],
        ],
        caption:
          "The 900 and 2,700 mcg rows are daily totals from the literature, split across several administrations — not single-sitting amounts. The large spray counts show why amounts reported with a manufactured drop should not be treated as direct pump instructions.",
      },
    },
    {
      id: "sec-6",
      heading: "Why Pump Output Must Be Verified",
      type: "table",
      intro:
        "Nasal pumps are not standardised — pharmaceutical literature reports outputs from roughly 0.025 mL to 0.20 mL per stroke. The per-spray amount scales directly with it: mcg per spray = (5,000 mcg ÷ final volume) × mL per stroke.",
      table: {
        columns: ["Pump Output", "3.33 mL Bottle", "5 mL Bottle", "10 mL Bottle"],
        rows: [
          ["0.05 mL / stroke", "75 mcg", "50 mcg", "25 mcg"],
          ["0.10 mL / stroke", "150 mcg", "100 mcg", "50 mcg"],
          ["0.13 mL / stroke", "195 mcg", "130 mcg", "65 mcg"],
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
        "**Selank vial (5 mg):** one per prepared bottle — three for a full 14-day course at 900 mcg/day.",
        "**Sterile vehicle:** single-use sterile 0.9% sodium chloride or another validated sterile nasal vehicle.",
        "**Nasal spray bottle:** one sterile 5 mL or 10 mL bottle per vial, with a metered pump documented at 0.10 mL per stroke.",
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
        "The registered 0.15% product is stored protected from light at **no more than 10 °C** and must not be frozen. It uses purified water with methylparaben as a preservative — a custom saline preparation has no preservative and is not covered by the registered product's stability data. Keep the prepared bottle refrigerated and capped, minimise warming and light exposure, and follow a formulation-specific stability plan rather than assuming the registered product's shelf life applies. Record preparation date, final volume, concentration, vehicle and storage conditions on the label.",
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
            "Zozulia et al., 2008",
            "62 adults with generalized anxiety disorder or neurasthenia; compared with medazepam",
            "0.15% drops at 2.7 mg/day — 36 drops split across three administrations — followed through day 14",
          ],
          [
            "Syunyakov et al., 2012",
            "20 adults with generalized anxiety disorder",
            "2,700 mcg/day; the pharmaco-EEG analysis also examined a single 900 mcg exposure",
          ],
          [
            "Medvedev et al., 2014",
            "60 adults with phobic-anxiety or somatoform disorders; compared with phenazepam",
            "Intranasal Selank course",
          ],
          [
            "Panikratova et al., 2020",
            "52 healthy volunteers — resting-state functional connectivity",
            "Single exposure of 0.15% solution, 60 µL per nostril (≈ 0.2 mg total)",
          ],
          [
            "Registered 0.15% product",
            "Approved intranasal drop (Russia)",
            "1.5 mg/mL in purified water with methylparaben; 2 drops per nostril, 3× daily, for 14 days",
          ],
        ],
        caption:
          "The 2.7 mg/day amounts used in the GAD studies would need about 37.8 mg — eight 5 mg vials — over 14 days. The 3.33 mL preparation matches the registered product's 1.5 mg/mL concentration, but a matching concentration does not make the formulation, preservative system, delivery or stability equivalent.",
      },
    },
    {
      id: "sec-10",
      heading: "How Selank Is Thought to Work",
      type: "prose",
      paragraphs: [
        "Mechanistic research has explored GABA-related signalling, gene expression, enkephalin metabolism and brain-network connectivity. Rat frontal-cortex experiments reported changes in the expression of genes involved in GABAergic neurotransmission after Selank exposure, and a molecular review described effects on GABA binding in experimental systems. These findings explain why Selank is discussed alongside GABAergic compounds.",
        "They are preclinical, however, and do not establish a human dose-response relationship, long-term safety, or that a custom 5 mg research preparation behaves like the registered preserved drop.",
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
            "Anxiety-related effects similar to medazepam, with additional anti-asthenic and psychostimulant observations in the Selank group (2008).",
            "In the 2012 GAD report, 40% of participants responded rapidly (days 1–3) and 60% gradually through day 14.",
            "Anxiolytic and mild nootropic findings in a small comparison with phenazepam (2014).",
            "Acute changes in resting-state functional connectivity after a single dose in healthy volunteers (2020).",
          ],
        },
        {
          subheading: "Side effects and cautions",
          items: [
            "A 2021 clinical-pharmacology review described Selank as poorly studied and called for more safety evaluation.",
            "The human evidence is small and heterogeneous; population, formulation, device and endpoint differences limit comparison.",
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
          cite: "Zozulia AA, et al. Efficacy and possible mechanisms of action of a new peptide anxiolytic Selank in generalized anxiety disorder and neurasthenia.",
          journal: "(2008).",
          href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
          label: "pubmed.ncbi.nlm.nih.gov/18454096",
        },
        {
          cite: "Syunyakov et al. Rapid and gradual response patterns and pharmaco-EEG of intranasal Selank in generalized anxiety disorder.",
          journal: "European Psychiatry (2012).",
          href: "https://doi.org/10.1016/S0924-9338(12)75281-1",
          label: "doi.org/10.1016/S0924-9338(12)75281-1",
        },
        {
          cite: "Medvedev et al. Comparative study of Selank and phenazepam in anxiety-spectrum and somatoform disorders.",
          journal: "(2014).",
          href: "https://pubmed.ncbi.nlm.nih.gov/25176261/",
          label: "pubmed.ncbi.nlm.nih.gov/25176261",
        },
        {
          cite: "Panikratova et al. Functional connectivity of the brain after a single intranasal dose of Selank in healthy volunteers.",
          journal: "(2020).",
          href: "https://pubmed.ncbi.nlm.nih.gov/32342318/",
          label: "pubmed.ncbi.nlm.nih.gov/32342318",
        },
        {
          cite: "Doyno CR, White CM. Clinical pharmacology review discussing Selank within the GABAergic evidence and safety landscape.",
          journal: "(2021).",
          href: "https://pubmed.ncbi.nlm.nih.gov/34396551/",
          label: "pubmed.ncbi.nlm.nih.gov/34396551",
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
          cite: "Volkova et al. Selank-associated changes in the expression of genes involved in GABAergic neurotransmission in the rat frontal cortex.",
          journal: "(2016).",
          href: "https://pubmed.ncbi.nlm.nih.gov/26924987/",
          label: "pubmed.ncbi.nlm.nih.gov/26924987",
        },
        {
          cite: "Kozlovskii et al. Experimental review of molecular mechanisms proposed for the heptapeptide Selank.",
          journal: "(2018).",
          href: "https://pubmed.ncbi.nlm.nih.gov/30255741/",
          label: "pubmed.ncbi.nlm.nih.gov/30255741",
        },
      ],
    },
    {
      id: "sec-14",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "Selank — 10 mg Vial", href: "/single-peptide-dosages/selank-10mg" },
        { label: "Semax — 5 mg Vial", href: "/single-peptide-dosages/semax-5mg" },
        { label: "Semax — 10 mg Vial", href: "/single-peptide-dosages/semax-10mg" },
        { label: "Reconstitution Guide", href: "/guides/reconstitution-guide" },
      ],
    },
  ],
};
