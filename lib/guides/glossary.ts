import type { Guide } from "./types";

export const glossary: Guide = {
  slug: "glossary",
  crumb: "Peptide Glossary",
  eyebrow: "Reference Guide",
  title: "Peptide Glossary",
  lead: "A clear, jargon-free reference for the terms that turn up across peptide research — from reconstitution math and measurement units to receptor classes and quality-control acronyms — so you can read any protocol page with confidence.",
  pills: [
    { label: "Terminology", red: true },
    { label: "Units & Measurement" },
    { label: "Handling" },
  ],
  disclaimer:
    "The compounds and terms described here relate strictly to in-vitro and laboratory research. Nothing on this page is approved for human or veterinary use, and none of it constitutes medical advice or a dosing instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "How to Use This Glossary",
      chunks: [
        {
          t: "p",
          text: "Research literature and protocol sheets lean heavily on shorthand: a single line can mix a weight unit, a volume unit, a biological-potency unit and a receptor abbreviation. This page groups those terms by theme so the vocabulary actually clicks, rather than sitting as a flat alphabetical wall. Start with the measurement section if a dose chart is confusing you, or jump to the handling section if you are trying to make sense of storage and reconstitution language. Every definition here is descriptive background for laboratory study only and is not an instruction to administer anything.",
        },
      ],
    },
    {
      id: "sec-2",
      heading: "Measurement & Unit Terms",
      chunks: [
        {
          t: "p",
          text: "Most dosing mistakes trace back to confusing one kind of unit with another. The table below separates the three families that get mixed up most often: units of weight, units of volume and units of biological potency.",
        },
        {
          t: "table",
          table: {
            columns: ["Term", "Type", "What It Measures", "Key Relationship"],
            rows: [
              ["Milligram (mg)", "Weight", "Mass of dry peptide in a vial", "1 mg = 1,000 mcg"],
              ["Microgram (mcg)", "Weight", "Smaller mass, common for potent peptides", "1,000 mcg = 1 mg"],
              ["Milliliter (mL)", "Volume", "Amount of liquid solution", "1 mL = 100 units on a U-100 syringe"],
              ["Syringe unit (U)", "Volume", "Tick mark on an insulin syringe", "10 units = 0.1 mL on a U-100 syringe"],
              ["International Unit (IU)", "Potency", "Biological activity, not mass", "Used mainly for HGH and HCG"],
              ["Concentration", "Derived", "Peptide mass per volume of solution", "Expressed as mg/mL or mcg per unit"],
            ],
          },
        },
        {
          t: "callout",
          title: "The single most important distinction.",
          body: "\"Units\" on a U-100 insulin syringe measure **volume** — 100 of them equal 1 mL. \"International Units\" (IU) measure biological **potency** and have nothing to do with the syringe markings. Reading one as the other is the classic source of large dosing errors in research notes.",
        },
      ],
    },
    {
      id: "sec-3",
      heading: "Concentration & Conversion Quick Reference",
      chunks: [
        {
          t: "p",
          text: "Concentration is fixed the moment a vial is reconstituted: it is simply the peptide mass divided by the volume of diluent added. The table shows how the same 10 mg vial yields very different concentrations depending on how much liquid is used, and what one syringe unit then delivers.",
        },
        {
          t: "table",
          table: {
            columns: ["Vial Amount", "Diluent Added", "Concentration", "Per 1 Unit (U-100)", "Per 10 Units"],
            rows: [
              ["10 mg", "1 mL", "10 mg/mL", "100 mcg", "1,000 mcg (1 mg)"],
              ["10 mg", "2 mL", "5 mg/mL", "50 mcg", "500 mcg"],
              ["5 mg", "2 mL", "2.5 mg/mL", "25 mcg", "250 mcg"],
              ["5 mg", "1 mL", "5 mg/mL", "50 mcg", "500 mcg"],
              ["2 mg", "1 mL", "2 mg/mL", "20 mcg", "200 mcg"],
            ],
          },
        },
        {
          t: "p",
          text: "For worked examples on any specific compound, the interactive [reconstitution calculator](/calculator) handles the arithmetic for you.",
        },
      ],
    },
    {
      id: "sec-4",
      heading: "Reconstitution & Handling Terms",
      chunks: [
        {
          t: "p",
          text: "These are the words that describe getting a peptide from a sealed powder vial into a usable solution and keeping it stable.",
        },
        {
          t: "table",
          table: {
            columns: ["Term", "Definition"],
            rows: [
              ["Reconstitution", "Dissolving a freeze-dried peptide powder in a liquid diluent to produce a solution that can be measured and drawn into a syringe."],
              ["Lyophilization (freeze-drying)", "A preservation method that removes water by freezing the material and then lowering pressure so the ice sublimates, leaving a dry, shelf-stable cake of peptide."],
              ["Diluent", "The liquid used to dissolve the powder. Bacteriostatic water is the most common choice for multi-draw research vials."],
              ["Bacteriostatic water (BAC water)", "Sterile water containing roughly 0.9% benzyl alcohol as a preservative. The preservative inhibits microbial growth, so a reconstituted vial can be stored refrigerated for about 28 days."],
              ["Sterile water", "Water free of microorganisms but with no preservative. Without benzyl alcohol it offers no ongoing protection, so reconstituted material is typically used within 24–48 hours."],
              ["Vial", "The small sealed glass container holding the lyophilized powder, closed with a rubber stopper and an aluminum crimp cap that the needle pierces."],
              ["Concentration", "The resulting mass-per-volume of the solution (mg/mL), fixed by how much diluent was added."],
            ],
          },
        },
        {
          t: "p",
          text: "**Reconstitution, step by step.** The standard sequence used across the protocol pages on this site, expressed as a general procedure rather than a usage instruction:",
        },
        {
          t: "steps",
          steps: [
            "Allow the chilled vial of lyophilized powder to reach room temperature, and wipe both rubber stoppers with an alcohol swab.",
            "Draw the planned volume of diluent into a syringe — the volume you choose sets the final concentration.",
            "Insert the needle at an angle and let the diluent run slowly down the inner glass wall rather than blasting directly onto the powder.",
            "Do not shake. Swirl gently and let the cake dissolve on its own; vigorous agitation can shear and degrade the peptide.",
            "Once the solution is clear, label it with the date and store it refrigerated, away from light.",
          ],
        },
        {
          t: "callout",
          title: "Why \"swirl, don't shake.\"",
          body: "Peptides are fragile chains held together by peptide bonds. Foaming and aggressive shaking introduce mechanical stress and air-liquid interfaces that can denature the molecule and lower potency before the vial is ever used.",
        },
      ],
    },
    {
      id: "sec-5",
      heading: "Dose & Protocol Terms",
      chunks: [
        {
          t: "table",
          table: {
            columns: ["Term", "Definition"],
            rows: [
              ["Dose / dosage", "The specific amount of peptide accounted for per administration in a study design, stated in mg, mcg or IU."],
              ["Titration", "Adjusting an amount incrementally — usually starting low and stepping up gradually — to model a tolerance or response curve."],
              ["Loading dose", "A larger initial amount used to reach a target level quickly, followed by smaller maintenance amounts."],
              ["Cycle", "A defined protocol window, often measured in weeks, with distinct \"on\" and \"off\" phases."],
              ["Blend", "A single vial in which two or more peptides are pre-mixed and lyophilized together, such as a CJC-1295 and Ipamorelin combination."],
              ["Stack", "A protocol that uses two or more **separate** vials dosed in coordination, rather than one pre-mixed vial."],
              ["Half-life", "The time for half of a compound to be cleared or to lose biological activity. Short half-lives imply more frequent dosing in a study design."],
              ["Bioavailability", "The fraction of an administered amount that reaches systemic circulation in an active form."],
            ],
          },
        },
      ],
    },
    {
      id: "sec-6",
      heading: "Administration Routes",
      chunks: [
        {
          t: "table",
          table: {
            columns: ["Abbreviation", "Route", "Notes"],
            rows: [
              ["SubQ / SC", "Subcutaneous", "Into the fatty tissue just beneath the skin; the most common route referenced for peptide research."],
              ["IM", "Intramuscular", "Directly into muscle tissue."],
              ["IV", "Intravenous", "Directly into a vein; rarely used in peptide protocols."],
            ],
          },
        },
      ],
    },
    {
      id: "sec-7",
      heading: "Biology & Receptor Terms",
      chunks: [
        {
          t: "table",
          table: {
            columns: ["Term", "Definition"],
            rows: [
              ["Amino acid", "The building block of peptides and proteins; 20 standard amino acids in a defined sequence give each peptide its identity."],
              ["Peptide", "A short chain of amino acids — generally 2 to 50 — joined by peptide bonds."],
              ["Peptide bond", "The covalent amide link that connects the carboxyl group of one amino acid to the amino group of the next."],
              ["Anabolic", "Describing metabolic processes that build larger molecules from smaller ones, such as muscle protein synthesis."],
              ["Anterior pituitary", "The front lobe of the pituitary gland, the source of growth hormone among other hormones."],
              ["Secretagogue", "A substance that triggers the release of another. A growth-hormone secretagogue prompts the pituitary to release its own GH."],
              ["GH (growth hormone)", "A 191-amino-acid hormone from the anterior pituitary involved in growth and cellular regeneration."],
              ["GHRH", "Growth-hormone-releasing hormone, a hypothalamic signal that tells the pituitary to release GH. Sermorelin, Tesamorelin and CJC-1295 are synthetic analogues."],
              ["GHRP", "Growth-hormone-releasing peptide, a class that triggers GH release via the ghrelin receptor (GHS-R1a). Ipamorelin is a selective example."],
              ["IGF-1", "Insulin-like growth factor 1, produced largely by the liver, which carries out many of GH's downstream anabolic effects."],
              ["GLP-1", "Glucagon-like peptide-1, an incretin hormone tied to glucose handling, insulin release and appetite signalling."],
              ["DAC", "Drug Affinity Complex, a modification that lets a peptide bind albumin in the blood and so extends its half-life from minutes to days."],
              ["Bioidentical", "Structurally identical to a naturally occurring molecule, as recombinant somatropin is to pituitary GH."],
            ],
          },
        },
      ],
    },
    {
      id: "sec-8",
      heading: "Quality, Purity & Compliance Terms",
      chunks: [
        {
          t: "table",
          table: {
            columns: ["Term", "Definition"],
            rows: [
              ["Certificate of Analysis (COA)", "A laboratory report documenting a specific batch's test results — identity, purity, and sometimes endotoxin or sterility data."],
              ["HPLC", "High-performance liquid chromatography, the analytical method used to quantify a peptide's purity as a percentage."],
              ["Mass spectrometry (MS)", "An analytical technique that confirms a peptide's identity by measuring its molecular mass."],
              ["Potency", "Biological activity per unit of weight, influenced by purity and by correct storage and handling."],
              ["Somatropin / HGH 191AA", "Recombinant human growth hormone carrying the full natural 191-amino-acid sequence."],
              ["WADA", "The World Anti-Doping Agency, which maintains the Prohibited List for competitive sport; many of these compounds appear on it."],
            ],
          },
        },
      ],
    },
    {
      id: "sec-9",
      heading: "Safety & Research Framing",
      chunks: [
        {
          t: "p",
          text: "Every compound named in this glossary is an investigational research chemical. The terms above describe how such materials are measured, stored and characterized in a laboratory setting — they are not endorsements, protocols or dosing recommendations. None of these substances carry approval for human or veterinary use, and the literature surrounding them is confined to in-vitro and pre-clinical work.",
        },
      ],
    },
  ],
  references: [
    {
      cite: "U.S. Pharmacopeia. Benzyl Alcohol as an antimicrobial preservative in bacteriostatic water for injection. National Library of Medicine, DailyMed.",
      href: "https://dailymed.nlm.nih.gov/dailymed/",
      label: "dailymed.nlm.nih.gov",
    },
    {
      cite: "Raun K, et al. Ipamorelin, the first selective growth hormone secretagogue.",
      journal: "European Journal of Endocrinology (1998).",
      href: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
      label: "pubmed.ncbi.nlm.nih.gov/9849822",
    },
    {
      cite: "Sigalos JT, Pastuszak AW. The safety and efficacy of growth hormone secretagogues.",
      journal: "Sexual Medicine Reviews (2018).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5632578/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC5632578",
    },
    {
      cite: "Müller TD, et al. Glucagon-like peptide 1 (GLP-1).",
      journal: "Molecular Metabolism (2019).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6812410/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC6812410",
    },
    {
      cite: "Wang Z, et al. Lyophilization of peptide and protein formulations: principles and stability.",
      journal: "Journal of Pharmaceutical Sciences (2000).",
      href: "https://pubmed.ncbi.nlm.nih.gov/10861578/",
      label: "pubmed.ncbi.nlm.nih.gov/10861578",
    },
  ],
  related: [
    { label: "Bacteriostatic Water — Reconstitution Guide", href: "/single-peptide-dosages/bac-water" },
    { label: "Ipamorelin — 5 mg Dosing Protocol", href: "/single-peptide-dosages/ipamorelin-5mg" },
    { label: "What Is CJC-1295?", href: "/learn/cjc-1295" },
    { label: "Reconstitution Calculator", href: "/calculator" },
  ],
};
