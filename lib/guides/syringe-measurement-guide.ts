import type { Guide } from "./types";

export const syringeMeasurementGuide: Guide = {
  slug: "syringe-measurement-guide",
  crumb: "Syringe & Measurement Guide",
  eyebrow: "Measurement Reference",
  title: "Syringe & Measurement Guide",
  lead: "How to read an insulin syringe, how units relate to millilitres, and how to turn a reconstituted vial into a precise measured volume — the core measurement math behind every reconstitution worksheet on this site.",
  pills: [
    { label: "U-100 Insulin Syringe", red: true },
    { label: "Reconstitution Math" },
    { label: "Unit Conversions" },
  ],
  disclaimer:
    "The compounds referenced on this site are investigational materials supplied strictly for in-vitro and laboratory research. They are not approved for human or veterinary use, and nothing on this page — including any measurement, conversion or procedure — constitutes medical advice or a dosing instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Why Measurement Accuracy Matters",
      chunks: [
        {
          t: "p",
          text: "Working with reconstituted research peptides means juggling three separate unit systems at once: mass (milligrams and micrograms in the powder), volume (millilitres of diluent), and the unit markings printed on an insulin syringe. A single slip between any two of them shifts the measured quantity by an order of magnitude or more. The purpose of this page is to make those conversions mechanical, so the figures on each compound's reconstitution worksheet can be read and verified without ambiguity. Nothing here is a usage instruction — it is reference math for laboratory measurement.",
        },
      ],
    },
    {
      id: "sec-2",
      heading: "Anatomy of a U-100 Insulin Syringe",
      chunks: [
        {
          t: "p",
          text: 'Almost all peptide reconstitution math on this site is expressed against the **U-100** insulin syringe, the most widely stocked format. "U-100" describes the scale, not the size: it means the barrel is graduated so that **100 units fills exactly 1 mL**. Because that ratio is fixed, every unit on a U-100 syringe always equals 0.01 mL, regardless of the barrel\'s total capacity. The three common barrel sizes simply divide that same scale more or less finely:',
        },
        {
          t: "table",
          table: {
            columns: ["Barrel size", "Total capacity", "Smallest graduation", "Per unit"],
            rows: [
              ["1 mL", "100 units", "2 units", "0.01 mL"],
              ["0.5 mL", "50 units", "1 unit", "0.01 mL"],
              ["0.3 mL", "30 units", "0.5 units", "0.01 mL"],
            ],
          },
        },
        {
          t: "p",
          text: "The practical takeaway: smaller barrels resolve finer increments. A 0.3 mL barrel marks every half-unit, so it reads small measured volumes more precisely than a 1 mL barrel that only marks every two units. For very small target volumes, the narrower barrel trims rounding error.",
        },
        {
          t: "callout",
          title: 'Syringe "units" are volume marks, not International Units.',
          body: 'The numbers on an insulin barrel measure how much liquid you have drawn — they have nothing to do with the "IU" potency unit used for some biologics. Treating a syringe unit as an IU is one of the most common measurement mistakes; keep the two ideas entirely separate.',
        },
      ],
    },
    {
      id: "sec-3",
      heading: "The mL, cc and Unit Relationship",
      chunks: [
        {
          t: "p",
          text: 'Three terms describe the same volume axis. A millilitre (mL) and a cubic centimetre (cc) are identical — 1 mL = 1 cc — so a "1 cc syringe" and a "1 mL syringe" are the same barrel. Layered on top of that, a U-100 syringe re-labels the same volume in units, where 100 units = 1 mL. The table below pins those three scales together at the points you read most often.',
        },
        {
          t: "table",
          table: {
            columns: ["Volume (mL / cc)", "U-100 units"],
            rows: [
              ["0.01", "1"],
              ["0.05", "5"],
              ["0.10", "10"],
              ["0.20", "20"],
              ["0.25", "25"],
              ["0.50", "50"],
              ["1.00", "100"],
            ],
          },
        },
      ],
    },
    {
      id: "sec-4",
      heading: "Milligrams and Micrograms",
      chunks: [
        {
          t: "p",
          text: "Peptide vials are labelled by total mass in milligrams (mg), while many research dose figures are quoted in micrograms (mcg). The conversion is a simple factor of one thousand — 1 mg = 1,000 mcg — but because the scale is so large, a misplaced decimal is the difference between a measured quantity and one a thousand times bigger.",
        },
        {
          t: "table",
          table: {
            columns: ["Milligrams (mg)", "Micrograms (mcg)"],
            rows: [
              ["0.10", "100"],
              ["0.25", "250"],
              ["0.50", "500"],
              ["1.00", "1,000"],
              ["2.00", "2,000"],
              ["5.00", "5,000"],
            ],
          },
        },
        {
          t: "callout",
          title: "Watch the mg/mcg boundary.",
          body: "Mistaking milligrams for micrograms — or the reverse — shifts the figure by a factor of 1,000. Always confirm which unit a worksheet is using before converting it into a measured volume.",
        },
      ],
    },
    {
      id: "sec-5",
      heading: "Reconstitution Math, Step by Step",
      chunks: [
        {
          t: "p",
          text: "Reconstitution is the act of dissolving a lyophilized (freeze-dried) powder into a measured volume of diluent — typically bacteriostatic water — to produce a known concentration. Once the concentration is fixed, every measured volume maps to a precise mass. The whole calculation is three steps:",
        },
        {
          t: "steps",
          steps: [
            "**Find the concentration.** Divide the total peptide mass in the vial by the volume of bacteriostatic water you add. Concentration (mg/mL) = vial mass (mg) ÷ diluent (mL).",
            "**Find the draw volume.** Divide your target mass by that concentration. Volume (mL) = target dose ÷ concentration (mg/mL).",
            "**Convert to syringe units.** On a U-100 syringe, multiply the volume in mL by 100. Units = volume (mL) × 100.",
          ],
        },
        {
          t: "p",
          text: "**Worked example.** Add 2 mL of bacteriostatic water to a 5 mg vial. Step one gives 5 mg ÷ 2 mL = 2.5 mg/mL. If a worksheet targets 0.25 mg, step two gives 0.25 ÷ 2.5 = 0.10 mL, and step three gives 0.10 × 100 = 10 units on a U-100 syringe. The same three lines work for any vial and any diluent volume.",
        },
        {
          t: "callout",
          title: "Diluent volume sets the resolution.",
          body: "Adding more bacteriostatic water lowers the concentration, which spreads each measured dose across more units and makes small quantities easier to read accurately. Adding less concentrates the solution into fewer units. The mass drawn is identical either way — only the readability of the markings changes.",
        },
      ],
    },
    {
      id: "sec-6",
      heading: "Reading the Syringe Accurately",
      chunks: [
        {
          t: "steps",
          steps: [
            "Draw slightly past your target, then tap the barrel so trapped air rises to the needle end.",
            "Gently push the plunger to expel the air and bring the liquid down to the exact mark — air pockets occupy volume and inflate the reading.",
            "Read the measurement at the **top edge of the plunger's rubber stopper**, the surface that faces the liquid, not the tip or the centre dome.",
            "Hold the barrel at eye level so the marking and the stopper line up without parallax distortion.",
          ],
        },
      ],
    },
    {
      id: "sec-7",
      heading: "Needle Gauge and Length Reference",
      chunks: [
        {
          t: "p",
          text: "For subcutaneous work in research models, the needle's bore (gauge) and length are chosen to balance flow against solution viscosity. A higher gauge number means a thinner needle. The figures below describe what is commonly stocked rather than a recommendation.",
        },
        {
          t: "table",
          table: {
            columns: ["Spec", "Option", "Notes"],
            rows: [
              ["Gauge", "29G", "Wider bore; draws and dispenses thicker solutions more easily."],
              ["Gauge", "30G", "The most common choice for reconstituted peptides."],
              ["Gauge", "31G", "Thinnest common bore; slower with viscous solutions."],
              ["Length", "1/2 in (12.7 mm)", "The standard, most widely available length."],
              ["Length", "5/16 in (8 mm)", "Shorter option suited to leaner models."],
            ],
          },
        },
      ],
    },
    {
      id: "sec-8",
      heading: "IU-Based Compounds and the Unit Trap",
      chunks: [
        {
          t: "p",
          text: "A few biologics are dosed by International Units (IU) rather than by mass, and their potency-per-milligram is fixed by an assay rather than by a clean conversion. Growth hormone is the classic case, where roughly 3 IU corresponds to about 1 mg. The table below shows how IU maps to approximate mass and to syringe units for a 10 IU vial reconstituted with 1 mL of bacteriostatic water — a worked illustration of why IU and syringe units must never be conflated.",
        },
        {
          t: "table",
          table: {
            columns: ["IU", "Approx. mg", "U-100 units (10 IU vial + 1 mL diluent)"],
            rows: [
              ["1", "0.33", "10"],
              ["2", "0.67", "20"],
              ["3", "1.00", "30"],
              ["4", "1.33", "40"],
              ["5", "1.67", "50"],
              ["10", "3.33", "100"],
            ],
          },
        },
      ],
    },
  ],
  references: [
    {
      cite: "U.S. Food & Drug Administration. Insulin syringe and U-100 scale labeling guidance.",
      href: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/information-regarding-insulin-storage-and-switching-between-products-emergency",
      label: "fda.gov",
    },
    {
      cite: "National Institutes of Health, NCBI Bookshelf. Subcutaneous injection technique and needle selection.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK556035/",
      label: "ncbi.nlm.nih.gov/books/NBK556035",
    },
    {
      cite: "NCBI Bookshelf. Reconstitution of lyophilized parenteral preparations.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK493199/",
      label: "ncbi.nlm.nih.gov/books/NBK493199",
    },
    {
      cite: "U.S. Pharmacopeia / NCBI. Bacteriostatic water for injection and diluent handling.",
      href: "https://pubmed.ncbi.nlm.nih.gov/3414723/",
      label: "pubmed.ncbi.nlm.nih.gov/3414723",
    },
  ],
  related: [
    { label: "Bacteriostatic Water — Reconstitution Diluent", href: "/single-peptide-dosages/bac-water" },
    { label: "Ipamorelin — 5 mg Reconstitution Worksheet", href: "/single-peptide-dosages/ipamorelin-5mg" },
    { label: "What Is BPC-157?", href: "/learn/bpc-157" },
  ],
};
