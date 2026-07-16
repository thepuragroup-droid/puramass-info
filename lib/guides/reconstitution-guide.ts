import type { Guide } from "./types";

export const reconstitutionGuide: Guide = {
  slug: "reconstitution-guide",
  crumb: "How to Reconstitute Peptides",
  eyebrow: "Laboratory Technique Guide",
  title: "How to Reconstitute Peptides",
  lead: "Lyophilized research peptides arrive as a dry powder that has to be dissolved before it can be measured accurately. This guide walks through the diluent choices, the concentration math, the insulin-syringe conversions, and the handling habits that keep a vial usable across its working life.",
  pills: [
    { label: "Technique", red: true },
    { label: "Bacteriostatic Water" },
    { label: "U-100 Syringe Math" },
  ],
  disclaimer:
    "The compounds referenced here are investigational and supplied strictly for in-vitro and laboratory research. They are not approved for human or veterinary use, and nothing on this page is medical advice or a dosing instruction. Reconstitution figures are provided as technical illustrations only.",
  sections: [
    {
      id: "sec-1",
      heading: "What Reconstitution Means",
      chunks: [
        {
          t: "p",
          text: "Most research peptides ship as a lyophilized (freeze-dried) cake or fluff sealed under vacuum in a glass vial. Drying strips out the water so the molecule stays stable through transit and storage, but in that state it can't be drawn into a syringe or measured by volume. Reconstitution is simply the controlled addition of a sterile liquid — the diluent — that returns the powder to a known, uniform concentration in solution. Because every later dose is calculated from that concentration, the accuracy of the entire protocol rides on getting this one step right and writing it down.",
        },
      ],
    },
    {
      id: "sec-2",
      heading: "Supplies You Need",
      chunks: [
        {
          t: "p",
          text: "Gathering everything before you open a vial keeps the work clean and quick. A typical reconstitution station includes:",
        },
        {
          t: "list",
          items: [
            "The sealed peptide vial (lyophilized powder under a rubber stopper).",
            "A vial of diluent — most often bacteriostatic water for multi-dose work.",
            "U-100 insulin syringes, 1 mL barrel, 29–31 gauge, for both transferring diluent and drawing later doses.",
            "70% isopropyl alcohol prep pads — one per puncture.",
            "A clean, flat work surface and a sharps container for spent needles.",
          ],
        },
      ],
    },
    {
      id: "sec-3",
      heading: "Choosing a Diluent",
      chunks: [
        {
          t: "p",
          text: "The liquid you add determines how long the solution stays viable. Bacteriostatic water — sterile water carrying roughly 0.9% benzyl alcohol as a preservative — holds back microbial growth across many punctures, which is why it suits vials drawn from repeatedly. Plain sterile water has no preservative and is only appropriate when a vial will be used up almost immediately. The table below sums up the practical differences.",
        },
        {
          t: "table",
          table: {
            columns: ["Diluent", "Preservative", "Best Suited For", "Working Life In Solution"],
            rows: [
              ["Bacteriostatic water (BAC)", "~0.9% benzyl alcohol", "Multi-dose vials drawn many times", "~25–30 days refrigerated"],
              ["Sterile water for injection", "None", "Single- or dual-use only", "~24–48 hours"],
              ["0.9% sodium chloride (saline)", "None (plain)", "Specific protocol requirements", "Varies; treat as short-term"],
            ],
          },
        },
        {
          t: "callout",
          title: "Match the diluent to the molecule.",
          body: "A few compounds are sensitive to benzyl alcohol or to the pH of a given diluent. When a vendor or protocol specifies a particular liquid, follow that specification rather than defaulting to bacteriostatic water.",
        },
      ],
    },
    {
      id: "sec-4",
      heading: "Step-by-Step Procedure",
      chunks: [
        {
          t: "p",
          text: "Work slowly and let the powder dissolve on its own. The goal is a clear, particle-free solution with the peptide structure intact.",
        },
        {
          t: "steps",
          steps: [
            "Let both vials reach room temperature, then wash your hands and clear a clean surface.",
            "Wipe the rubber stopper of each vial with a separate alcohol pad and let them air-dry.",
            "Draw the planned volume of diluent into a fresh syringe (for example, 2 mL reads as 200 units on a U-100 barrel).",
            "Insert the needle into the peptide vial and aim the stream at the inner glass wall, not straight down onto the powder, so the liquid runs down gently.",
            "Withdraw the needle and let the vial sit. Swirl it slowly if needed; never shake. Most powders clear within one to ten minutes.",
            "Hold the vial to the light and confirm the solution is fully clear with no floating particles or persistent cloudiness.",
            "Label the vial with the date and the diluent volume you added, then refrigerate it upright.",
          ],
        },
        {
          t: "callout",
          title: "Equalize the pressure.",
          body: "Before drawing solution back out of a vial, inject a matching volume of air. This keeps a vacuum from forming and makes each later draw smooth and accurate.",
        },
      ],
    },
    {
      id: "sec-5",
      heading: "The Concentration Math",
      chunks: [
        {
          t: "p",
          text: "Once dissolved, the vial holds a fixed concentration set by two numbers: the total peptide mass and the volume of diluent you added.",
        },
        {
          t: "formula",
          text: "Concentration (mg/mL) = total peptide (mg) ÷ diluent volume (mL)",
        },
        {
          t: "p",
          text: "Choosing the diluent volume is a trade-off. A small volume yields a concentrated solution that lasts more days per vial but demands tiny, less-forgiving draws; a larger volume dilutes the peptide so each dose becomes an easier-to-read volume on the syringe. The chart below shows how the same vial behaves at different fill volumes.",
        },
        {
          t: "table",
          table: {
            columns: ["Diluent Added", "Resulting Trait", "Typical Use"],
            rows: [
              ["1 mL", "Most concentrated", "Small vials, microgram dosing"],
              ["2 mL", "Balanced precision", "The common default"],
              ["3 mL", "More dilute, easier draws", "Larger vials"],
              ["5 mL", "Very dilute", "High-dilution or large-vial work"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-6",
      heading: "Converting Volume to Syringe Units",
      chunks: [
        {
          t: "p",
          text: "U-100 insulin syringes are marked in units, where the full 1 mL barrel equals 100 units. That makes the conversion direct: multiply any dose volume in millilitres by 100 to get units.",
        },
        {
          t: "formula",
          text: "Syringe units = dose volume (mL) × 100",
        },
        {
          t: "table",
          table: {
            columns: ["Dose Volume (mL)", "U-100 Units"],
            rows: [
              ["0.01 mL", "1 unit"],
              ["0.05 mL", "5 units"],
              ["0.10 mL", "10 units"],
              ["0.20 mL", "20 units"],
              ["0.25 mL", "25 units"],
              ["0.50 mL", "50 units"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-7",
      heading: "Worked Examples",
      chunks: [
        {
          t: "p",
          text: "These examples run the full chain — vial size, diluent, concentration, a sample draw, and how many of those draws a vial yields. Treat the doses as arithmetic illustrations of the math, not as recommendations.",
        },
        {
          t: "table",
          table: {
            columns: ["Compound", "Vial", "Diluent", "Concentration", "Sample Draw", "As Units", "Draws / Vial"],
            rows: [
              ["[BPC-157](/single-peptide-dosages/bpc-157-10mg)", "5 mg", "2 mL", "2.5 mg/mL", "250 mcg (0.10 mL)", "10 u", "20"],
              ["[Ipamorelin](/single-peptide-dosages/ipamorelin-5mg)", "5 mg", "2 mL", "2.5 mg/mL", "250 mcg (0.10 mL)", "10 u", "20"],
              ["[CJC-1295 + Ipamorelin](/peptide-blend-dosages/cjc-1295-no-dac-ipamorelin-10mg)", "10 mg total", "2 mL", "5.0 mg/mL", "300 mcg (0.06 mL)", "6 u", "33"],
              ["[Tirzepatide](/single-peptide-dosages/tirzepatide-10mg)", "10 mg", "2 mL", "5.0 mg/mL", "2.5 mg (0.50 mL)", "50 u", "4"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-8",
      heading: "Storage After Reconstitution",
      chunks: [
        {
          t: "p",
          text: "A solution is far less stable than the dry powder it came from, so storage tightens up the moment you add liquid. Keep it cold, keep it dark, and never let it freeze.",
        },
        {
          t: "table",
          table: {
            columns: ["Parameter", "Requirement"],
            rows: [
              ["Temperature", "2–8 °C (36–46 °F) refrigerator"],
              ["Working life", "~25–30 days, peptide-dependent"],
              ["Orientation", "Store upright"],
              ["Light", "Keep away from direct light"],
              ["Freezing", "Never — ice crystals fracture peptide bonds"],
              ["Labeling", "Record reconstitution date and diluent volume"],
            ],
          },
        },
        {
          t: "callout",
          title: "Discard on schedule.",
          body: "Once a multi-dose vial passes roughly 30 days, retire it even if the solution still looks clear. Preservative capacity and peptide integrity both decline before the liquid shows any visible change.",
        },
      ],
    },
    {
      id: "sec-9",
      heading: "Common Mistakes",
      chunks: [
        {
          t: "list",
          items: [
            "**Shaking the vial.** Agitation foams the solution and the shear forces can degrade fragile peptides; swirl gently instead.",
            "**Reusing syringes.** A second use dulls the needle and risks introducing bacteria — always start fresh.",
            "**Skipping the swab.** A vial that takes dozens of punctures needs a clean alcohol wipe on every single entry.",
            "**Spraying powder directly.** A hard stream aimed at the cake can scatter it and slow dissolution; run the liquid down the glass wall.",
            "**Mis-recording the volume.** If you add the wrong amount of diluent, recalculate the real concentration immediately rather than dosing off the intended number.",
          ],
        },
      ],
    },
    {
      id: "sec-10",
      heading: "Troubleshooting",
      chunks: [
        {
          t: "table",
          table: {
            columns: ["Observation", "What It Suggests / Next Step"],
            rows: [
              ["Powder still undissolved after ~15 min", "Confirm the diluent type and check for prior heat exposure; give it more gentle time"],
              ["Persistent cloudiness", "Likely degradation or contamination — discard the vial"],
              ["Brown, pink, or green tint", "A sign of breakdown — discard"],
              ["Foam on the surface", "Usually harmless; let it settle for 10–20 minutes"],
              ["Rubber coring (plug shed into vial)", "Enter the stopper at a 45° angle and reuse the same entry point"],
            ],
          },
        },
      ],
    },
  ],
  references: [
    {
      cite: "U.S. Pharmacopeia. Bacteriostatic Water for Injection — monograph and benzyl-alcohol preservative content.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK557722/",
      label: "ncbi.nlm.nih.gov/books/NBK557722",
    },
    {
      cite: "Manning MC, et al. Stability of protein and peptide pharmaceuticals in solution.",
      journal: "Pharmaceutical Research (2010).",
      href: "https://pubmed.ncbi.nlm.nih.gov/20143256/",
      label: "pubmed.ncbi.nlm.nih.gov/20143256",
    },
    {
      cite: "Wang W. Lyophilization and development of solid protein pharmaceuticals.",
      journal: "International Journal of Pharmaceutics (2000).",
      href: "https://pubmed.ncbi.nlm.nih.gov/10840244/",
      label: "pubmed.ncbi.nlm.nih.gov/10840244",
    },
    {
      cite: "Bhambhani A, et al. Formulation design and high-throughput excipient selection for biopharmaceuticals.",
      journal: "PMC.",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3517177/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC3517177",
    },
  ],
  related: [
    { label: "Bacteriostatic Water — Handling Notes", href: "/single-peptide-dosages/bac-water" },
    { label: "BPC-157 — 10 mg Dosing Protocol", href: "/single-peptide-dosages/bpc-157-10mg" },
    { label: "Ipamorelin — 5 mg Dosing Protocol", href: "/single-peptide-dosages/ipamorelin-5mg" },
    { label: "What Is BPC-157?", href: "/learn/bpc-157" },
  ],
};
