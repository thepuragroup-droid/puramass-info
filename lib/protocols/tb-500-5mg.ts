import type { Protocol } from "./types";

export const tb5005mg: Protocol = {
  slug: "tb-500-5mg",
  crumb: "TB-500 5 mg",
  title: "TB-500 (5 mg Vial) Dosage Protocol",
  lead: "A reference breakdown of how a 5 mg TB-500 research vial is reconstituted and measured, expressed in insulin-syringe units for laboratory work, with a clear line between the vial arithmetic and what the published thymosin beta-4 literature can actually support.",
  pills: [
    { label: "Thymosin β4 Fragment", red: true },
    { label: "Ac-LKKTETQ" },
    { label: "Daily Dosing" },
    { label: "Lyophilized" },
  ],
  chartTitle: "TB-500 5 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → 1.67 mg/mL" },
    { label: "Typical Daily Range", value: "500 mcg – 1000 mcg" },
    { label: "Per 500 mcg (0.5 mg)", value: "≈ 30 units (0.30 mL)" },
    { label: "Storage (lyophilized)", value: "−20 °C, sealed, dark" },
  ],
  disclaimer:
    "TB-500 is an unapproved research compound. The FDA reports no identified human exposure data for the fragment, and the dosing table on this page is a calculation schedule, not a regimen validated in human trials. Nothing here is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "TB-500 is a synthetic peptide identified in analytical work as **Ac-LKKTETQ** — an N-terminally acetylated seven-residue sequence matching residues 17–23 of thymosin beta-4 (Tβ4), a naturally occurring 43-amino-acid actin-binding protein. It is a fragment, not the full-length protein, and the two should not be treated as interchangeable. The figures below are compiled strictly for laboratory and educational reference.",
        "For a 5 mg vial, adding **3.0 mL of bacteriostatic water** yields **1.67 mg/mL** (≈1,667 mcg/mL). At that fill, every 0.01 mL drawn on a U-100 insulin syringe is 1 unit and holds about 16.7 mcg, so a 500 mcg measurement lands at 30 units. The relatively large diluent volume keeps every step in the schedule at 30 units or more, where syringe graduations are easiest to read accurately.",
      ],
    },
    {
      id: "sec-2",
      heading: "Standard (Gradual) Titration Schedule",
      type: "table",
      intro:
        "The gradual schedule steps the daily amount up every few weeks, moving from 500 mcg to 1,000 mcg over a 12-week window with once-daily subcutaneous administration.",
      table: {
        columns: ["Phase", "Daily Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–2", "500 mcg (0.5 mg)", "30 units", "0.30 mL", "Once daily"],
          ["Weeks 3–4", "600 mcg (0.6 mg)", "36 units", "0.36 mL", "Once daily"],
          ["Weeks 5–8", "750 mcg (0.75 mg)", "45 units", "0.45 mL", "Once daily"],
          ["Weeks 9–12", "1000 mcg (1 mg)", "60 units", "0.60 mL", "Once daily"],
        ],
        caption:
          "Units assume a 1.67 mg/mL fill (3 mL BAC water). One 5 mg vial covers 10 days at 500 mcg and 5 days at 1,000 mcg.",
      },
      note: "This is a calculation schedule for measurement work. No human trial of the Ac-LKKTETQ fragment has established these amounts.",
    },
    {
      id: "sec-3",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Let the sealed vial and the bacteriostatic water reach room temperature, then wipe both stoppers with an alcohol swab.",
        "Draw 3.0 mL of bacteriostatic water and run it slowly down the inside wall of the vial rather than onto the powder, which helps avoid foaming.",
        "Swirl or roll the vial gently until the powder has fully dissolved. Do not shake.",
        "Label the vial with the compound, concentration (1.67 mg/mL), preparation date and lot number.",
        "Refrigerate at 2–8 °C, protected from light, and use a fresh sterile syringe for every draw.",
      ],
    },
    {
      id: "sec-4",
      heading: "Vial Calculation Guide",
      type: "list",
      intro:
        "5 mg ÷ 3.0 mL = 1.6667 mg/mL. The conversions below are pure arithmetic and are independent of any biological claim.",
      items: [
        "**1 unit (0.01 mL):** ≈ 16.7 mcg",
        "**30 units (0.30 mL):** ≈ 500 mcg",
        "**36 units (0.36 mL):** ≈ 600 mcg",
        "**45 units (0.45 mL):** ≈ 750 mcg",
        "**60 units (0.60 mL):** ≈ 1,000 mcg",
        "**U-100 \"units\" are volume markings** — 1 unit is 0.01 mL, not an international unit of TB-500 activity.",
      ],
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      intro:
        "Totals follow the titration table above. An 8-week run uses ≈36.4 mg of material; the full 12-week run uses ≈64.4 mg.",
      items: [
        "**TB-500 vials (5 mg):** 8 vials for 8 weeks; 13 vials for 12 weeks.",
        "**Insulin syringes (U-100, 1 mL):** 7 per week — 56 for 8 weeks, 84 for 12 weeks.",
        "**Bacteriostatic water (10 mL):** each bottle reliably yields three 3 mL fills — 3 bottles for 8 vials, 5 bottles for 13 vials.",
        "**Alcohol swabs:** two per day (stopper and site) — 112 for 8 weeks, 168 for 12 weeks; two 100-count boxes cover either run.",
      ],
    },
    {
      id: "sec-6",
      heading: "Protocol Overview",
      type: "list",
      items: [
        "**Research area:** actin regulation, cell migration, angiogenesis and wound-repair signalling associated with thymosin beta-4.",
        "**Schedule:** once-daily subcutaneous administration over 8–12 weeks.",
        "**Dose band:** 500–1,000 mcg daily, increased roughly every two to four weeks.",
        "**Fill:** 5 mg lyophilized, reconstituted to 1.67 mg/mL with 3 mL diluent.",
        "**Storage:** −20 °C dry; 2–8 °C once reconstituted, not refrozen.",
      ],
    },
    {
      id: "sec-7",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials at **−20 °C**, protected from light. Once reconstituted, refrigerate at **2–8 °C** and avoid freezing or repeated temperature swings. Neither the fragment literature nor typical supplier documentation establishes a universal post-reconstitution shelf life, so follow the batch-specific documentation rather than assuming a fixed discard date.",
      ],
    },
    {
      id: "sec-8",
      heading: "Fragment vs. Full-Length Thymosin Beta-4",
      type: "prose",
      paragraphs: [
        "The LKKTETQ sequence sits inside the central actin-binding region of thymosin beta-4, the part of the protein most associated with cell migration, angiogenesis, matrix metalloproteinase expression and wound closure in experimental models. Preclinical work has tested both full-length Tβ4 and the LKKTETQ peptide in dermal wound models, including diabetic and aged mice.",
        "Identity still matters. A 2024 metabolism study found that in a fibroblast scratch assay, significant wound-closure activity came from one of TB-500's metabolites rather than from the parent fragment itself. Results from full-length Tβ4, unacetylated LKKTETQ, acetylated Ac-LKKTETQ and its metabolites should not be merged into a single claim.",
      ],
    },
    {
      id: "sec-9",
      heading: "What the Human Evidence Does and Doesn't Show",
      type: "list",
      items: [
        "**Phase 1 IV studies** of full-length and recombinant thymosin beta-4 in healthy volunteers used different molecules, routes and dose units — they do not validate a subcutaneous fragment protocol.",
        "**Ophthalmic trials** of 0.1% Tβ4 eye drops gave mixed results: a small severe dry-eye study reported improvements, while a larger trial missed both primary endpoints.",
        "**Preclinical findings** on wound repair, migration and angiogenesis come from cell and animal models and do not establish efficacy or safety in people.",
        "**The FDA** states it has not identified human exposure data for the TB-500 fragment and has flagged potential immunogenicity concerns from aggregation and peptide-related impurities.",
      ],
    },
    {
      id: "sec-10",
      heading: "How TB-500 Is Thought to Work",
      type: "prose",
      paragraphs: [
        "Full-length thymosin beta-4 binds monomeric G-actin and helps balance actin sequestration against filament assembly — a lever on how cells move, change shape and differentiate. Reviews link these cytoskeletal effects to tissue repair, new vessel formation and organ-specific experimental models. The LKKTETQ fragment is studied as the active region responsible for much of that migration and repair signalling, though how closely the isolated acetylated fragment reproduces the parent protein's activity is still an open question.",
      ],
    },
    {
      id: "sec-11",
      heading: "Safety & Regulatory Notes",
      type: "list",
      items: [
        "**Human safety gap:** no identified human exposure data for the fragment, per the FDA.",
        "**Formulation gap:** tolerability seen with full-length Tβ4 in IV or eye-drop form cannot be transferred to a subcutaneous fragment vial.",
        "**Sport:** the 2026 WADA Prohibited List names thymosin beta-4 and TB-500 among prohibited growth-factor modulators.",
        "**Batch identity:** a supplier certificate of analysis documents a specific lot; it does not make the material an approved drug.",
      ],
    },
    {
      id: "sec-12",
      heading: "Injection/Handling Technique (Reference Only)",
      type: "list",
      items: [
        "Clean the vial stopper and the site with alcohol swabs and let both dry.",
        "Read the U-100 marking at eye level and confirm the matching mL value against the table before administering.",
        "Follow a standard subcutaneous procedure for site selection, needle angle and rotation (abdomen, thighs, upper arms).",
        "Use a new sterile syringe every time and dispose of it in an approved sharps container.",
        "Record date, time, lot, concentration, volume and syringe units for each draw.",
      ],
    },
    {
      id: "sec-13",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Esposito S, et al. Synthesis and characterization of the N-terminal acetylated 17–23 fragment of thymosin beta 4 identified in TB-500.",
          journal: "Drug Testing and Analysis (2012).",
          href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
          label: "pubmed.ncbi.nlm.nih.gov/22962027",
        },
        {
          cite: "Ho EN, et al. Detection of N-acetylated LKKTETQ and its metabolites after TB-500 administration in horses.",
          journal: "Journal of Chromatography A (2012).",
          href: "https://pubmed.ncbi.nlm.nih.gov/23084823/",
          label: "pubmed.ncbi.nlm.nih.gov/23084823",
        },
        {
          cite: "Rahaman KA, et al. TB-500 metabolism and wound-healing activity of the parent fragment and its metabolites.",
          journal: "Journal of Chromatography B (2024).",
          href: "https://pubmed.ncbi.nlm.nih.gov/38382158/",
          label: "pubmed.ncbi.nlm.nih.gov/38382158",
        },
        {
          cite: "Sosne G, et al. Biological activities of thymosin beta4 defined by active sites in short peptide sequences.",
          journal: "FASEB Journal (2010).",
          href: "https://pubmed.ncbi.nlm.nih.gov/20179146/",
          label: "pubmed.ncbi.nlm.nih.gov/20179146",
        },
        {
          cite: "Philp D, et al. Thymosin beta4 and its central actin-binding domain promote MMP expression in wound-repair models.",
          journal: "Journal of Cellular Physiology (2006).",
          href: "https://pubmed.ncbi.nlm.nih.gov/16607611/",
          label: "pubmed.ncbi.nlm.nih.gov/16607611",
        },
        {
          cite: "Malinda KM, et al. Thymosin beta4 accelerates wound healing.",
          journal: "Journal of Investigative Dermatology (1999).",
          href: "https://pubmed.ncbi.nlm.nih.gov/10469335/",
          label: "pubmed.ncbi.nlm.nih.gov/10469335",
        },
        {
          cite: "Philp D, et al. Thymosin beta4 and a synthetic peptide containing its actin-binding domain promote dermal wound repair in diabetic and aged mice.",
          journal: "Wound Repair and Regeneration (2003).",
          href: "https://pubmed.ncbi.nlm.nih.gov/12581423/",
          label: "pubmed.ncbi.nlm.nih.gov/12581423",
        },
        {
          cite: "Goldstein AL, et al. Thymosin beta4: a multi-functional regenerative peptide.",
          journal: "Expert Opinion on Biological Therapy (2012).",
          href: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
          label: "pubmed.ncbi.nlm.nih.gov/22074294",
        },
        {
          cite: "Wang X, et al. Phase 1 study of intravenous recombinant human thymosin beta4 in healthy volunteers.",
          journal: "Journal of Cellular and Molecular Medicine (2021).",
          href: "https://pubmed.ncbi.nlm.nih.gov/34346165/",
          label: "pubmed.ncbi.nlm.nih.gov/34346165",
        },
        {
          cite: "Ruff D, et al. Single- and multiple-dose IV thymosin beta4 in healthy volunteers.",
          journal: "Annals of the New York Academy of Sciences (2010).",
          href: "https://pubmed.ncbi.nlm.nih.gov/20536472/",
          label: "pubmed.ncbi.nlm.nih.gov/20536472",
        },
        {
          cite: "Sosne G, et al. Thymosin beta4 ophthalmic solution for severe dry eye: a randomized trial.",
          journal: "Cornea (2015).",
          href: "https://pubmed.ncbi.nlm.nih.gov/25826322/",
          label: "pubmed.ncbi.nlm.nih.gov/25826322",
        },
        {
          cite: "Sosne G, Ousler GW. Thymosin beta4 ophthalmic solution in a controlled adverse environment dry-eye trial.",
          journal: "Clinical Ophthalmology (2015).",
          href: "https://pubmed.ncbi.nlm.nih.gov/26056426/",
          label: "pubmed.ncbi.nlm.nih.gov/26056426",
        },
        {
          cite: "Certain bulk drug substances for use in compounding that may present significant safety risks — thymosin beta-4 fragment (LKKTETQ).",
          journal: "U.S. Food and Drug Administration.",
          href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
          label: "fda.gov — compounding safety risks",
        },
        {
          cite: "World Anti-Doping Code: 2026 Prohibited List.",
          journal: "World Anti-Doping Agency.",
          href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
          label: "wada-ama.org — 2026 Prohibited List",
        },
      ],
    },
    {
      id: "sec-14",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "TB-500 — 10 mg Vial", href: "/single-peptide-dosages/tb-500-10mg" },
        { label: "BPC-157 — 10 mg Vial", href: "/single-peptide-dosages/bpc-157-10mg" },
        {
          label: "Wolverine Blend (BPC-157 + TB-500)",
          href: "/peptide-blend-dosages/bpc-157-tb-500-20mg",
        },
        { label: "GLOW Blend (70 mg)", href: "/peptide-blend-dosages/glow-70mg" },
      ],
    },
  ],
};
