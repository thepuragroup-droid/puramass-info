import type { Protocol } from "./types";

export const cjc1295NoDacIpamorelin10mg: Protocol = {
  slug: "cjc-1295-no-dac-ipamorelin-10mg",
  crumb: "CJC-1295 (No DAC) + Ipamorelin 10 mg",
  title: "CJC-1295 No DAC (Mod GRF 1-29) + Ipamorelin (10 mg Blend) Dosage Protocol",
  lead: "A reference breakdown of how a 10 mg blend of CJC-1295 without DAC (also called Mod GRF 1-29) and Ipamorelin — 5 mg of each — is reconstituted and measured on a U-100 insulin syringe. This is the short-acting, no-DAC version of CJC-1295, not the long-acting CJC-1295 with DAC.",
  pills: [
    { label: "No DAC (Mod GRF 1-29)", red: true },
    { label: "GHRH + GHRP Blend" },
    { label: "Growth Hormone Research" },
    { label: "Lyophilized" },
  ],
  chartTitle: "CJC-1295 No DAC + Ipamorelin 10 mg — Quick Chart",
  chart: [
    { label: "Reconstitution", value: "3.0 mL BAC water → 3.33 mg/mL total (1.67 mg/mL each)" },
    { label: "1 unit (0.01 mL)", value: "≈ 16.7 mcg of each peptide (33.3 mcg total)" },
    { label: "Reference range", value: "100–300 mcg each, once daily (6–18 units)" },
    { label: "Storage (reconstituted)", value: "2–8 °C, protected from light" },
  ],
  disclaimer:
    "CJC-1295 (with or without DAC) and Ipamorelin are investigational compounds that are not approved for human or veterinary use. The schedule on this page is a community-reported calculation, not a validated protocol for the blend. Nothing on this page is medical advice or a usage instruction.",
  sections: [
    {
      id: "sec-1",
      heading: "Dosing & Reconstitution Overview",
      type: "prose",
      paragraphs: [
        "This blend fixes **5 mg CJC-1295 without DAC** and **5 mg Ipamorelin** in a single 10 mg vial. CJC-1295 No DAC — also sold as **Mod GRF 1-29** or tetrasubstituted GRF(1-29) — is a modified 29-amino-acid fragment of growth-hormone-releasing hormone (GHRH). Ipamorelin is a pentapeptide growth-hormone secretagogue (GHRP class) that acts on the ghrelin receptor. The pairing combines a GHRH-receptor signal with a ghrelin-receptor signal.",
        "Adding **3.0 mL of bacteriostatic water** gives **3.33 mg/mL** of total peptide, or **1.67 mg/mL of each**. One U-100 unit (0.01 mL) therefore holds about **33.3 mcg total — 16.7 mcg of CJC-1295 No DAC plus 16.7 mcg of Ipamorelin**. Every dose below is stated per peptide, so 100 mcg of each is 6 units.",
      ],
    },
    {
      id: "sec-2",
      heading: "No DAC vs. With DAC — Why the Name Matters",
      type: "table",
      intro:
        "Both compounds are sold as \"CJC-1295\", but the Drug Affinity Complex (DAC) changes how long the peptide lasts and how it is dosed. This page covers only the no-DAC version.",
      table: {
        columns: ["", "CJC-1295 No DAC (this blend)", "CJC-1295 with DAC"],
        rows: [
          ["Other names", "Mod GRF 1-29, modified GRF(1-29)", "CJC-1295 DAC"],
          ["Structure", "Tetrasubstituted GHRH(1-29)", "Same peptide plus a lysine-linked maleimide that binds albumin"],
          ["Duration", "Short-acting — minutes to hours", "Half-life of roughly 6–8 days in human studies"],
          ["GH pattern", "Short pulse after each dose", "Sustained elevation of GH and IGF-1"],
          ["Typical schedule", "Daily (often paired with a GHRP)", "Once or twice weekly"],
        ],
        caption:
          "The published human CJC-1295 trials (Teichman 2006 and related work) studied the DAC version. Their long half-life and sustained GH/IGF-1 results do not apply to the no-DAC peptide in this vial.",
      },
    },
    {
      id: "sec-3",
      heading: "Gradual Titration Schedule",
      type: "table",
      intro:
        "The community-reported schedule raises the dose every two weeks before holding at 250–300 mcg of each peptide. Units are calculated at 1.67 mg/mL per peptide.",
      table: {
        columns: ["Period", "Dose (each peptide)", "Total per Dose", "Units (U-100)", "Volume", "Frequency"],
        rows: [
          ["Weeks 1–2", "100 mcg", "200 mcg", "6 units", "0.06 mL", "Once daily"],
          ["Weeks 3–4", "150 mcg", "300 mcg", "9 units", "0.09 mL", "Once daily"],
          ["Weeks 5–6", "200 mcg", "400 mcg", "12 units", "0.12 mL", "Once daily"],
          ["Weeks 7–12", "250–300 mcg", "500–600 mcg", "15–18 units", "0.15–0.18 mL", "Once daily"],
        ],
        caption:
          "Typically given before bed or on waking. All doses fit on a 0.3 mL (30-unit) syringe, which is easier to read at these small volumes.",
      },
      note: "This schedule is a calculation record of a community-reported protocol. No controlled study has tested this blend at these doses.",
    },
    {
      id: "sec-4",
      heading: "Reconstitution Steps",
      type: "steps",
      steps: [
        "Wipe the vial stopper and the bacteriostatic water stopper with separate alcohol swabs.",
        "Draw 3.0 mL of bacteriostatic water with a sterile syringe.",
        "Inject it slowly down the inside wall of the vial — not onto the powder — to avoid foaming.",
        "Swirl or roll gently until fully dissolved. Do not shake.",
        "Label the vial with the concentration (3.33 mg/mL total, 1.67 mg/mL each) and date, then refrigerate at 2–8 °C, protected from light.",
      ],
    },
    {
      id: "sec-5",
      heading: "Supplies Needed",
      type: "list",
      intro:
        "Totals follow the schedule above. The 16-week figures assume the weeks 7–12 dose continues through weeks 13–16. Each vial holds 10 mg (5 mg of each peptide).",
      items: [
        "**Blend vials (10 mg):** 8 weeks uses ~20–21 mg → **3 vials**; 12 weeks ~34–38 mg → **4 vials**; 16 weeks ~48–55 mg → **5 vials at 250 mcg, 6 at 300 mcg**.",
        "**Insulin syringes (U-100, 0.3 mL / 30-unit):** one per day — 56 for 8 weeks, 84 for 12 weeks, 112 for 16 weeks.",
        "**Bacteriostatic water (10 mL):** 3.0 mL per vial — 1 bottle for 3 vials, 2 bottles for 4–6 vials.",
        "**Alcohol swabs:** two per day — 112, 168 or 224 swabs; two 100-count boxes cover 8 or 12 weeks, three cover 16 weeks.",
      ],
    },
    {
      id: "sec-6",
      heading: "Storage Instructions",
      type: "prose",
      paragraphs: [
        "Keep sealed lyophilized vials frozen at **−20 °C** in dry, dark conditions. After reconstitution, refrigerate at **2–8 °C**, protected from light, and avoid freeze-thaw cycles. Let a frozen vial reach room temperature before opening to limit condensation, and follow the product's use-by guidance once mixed.",
      ],
    },
    {
      id: "sec-7",
      heading: "How the Blend Is Thought to Work",
      type: "prose",
      paragraphs: [
        "**CJC-1295 No DAC** binds the GHRH receptor on the pituitary and triggers a growth-hormone pulse. Without the DAC albumin-binding group it clears quickly, so its effect follows each dose rather than building up over days. **Ipamorelin** is a selective growth-hormone secretagogue: it acts on the ghrelin (GHS) receptor and, in early studies, released GH without raising ACTH, cortisol or prolactin. Human pharmacokinetic work reported a half-life of roughly 2 hours, with the GH response peaking about 40 minutes after a dose.",
        "GHRH-receptor and ghrelin-receptor agonists act on complementary pathways, which is why the two classes are paired in research. That pairing rationale comes from the broader secretagogue literature — it has not been tested for this specific blend.",
      ],
    },
    {
      id: "sec-8",
      heading: "Reported Benefits & Side Effects",
      type: "benefits",
      groups: [
        {
          subheading: "Findings in published research",
          items: [
            "Ipamorelin released GH selectively, without ACTH or cortisol elevation, in early pharmacology studies.",
            "GHRH analogues increase GH and IGF-1 — but the sustained human results come from CJC-1295 with DAC, not the no-DAC peptide.",
            "GHRH and ghrelin-receptor agonists are described as complementary in secretagogue reviews.",
          ],
        },
        {
          subheading: "Side effects and cautions",
          items: [
            "Reported transient effects include flushing, headache and injection-site reactions.",
            "Some users report increased appetite, water retention or tingling.",
            "The blend itself has no controlled human safety study, and the evidence for CJC-1295 No DAC alone is limited.",
          ],
        },
      ],
    },
    {
      id: "sec-9",
      heading: "Injection Technique (Reference Only)",
      type: "steps",
      steps: [
        "Check the syringe scale first: 100 units = 1 mL, and one unit = 0.01 mL (≈ 16.7 mcg of each peptide at this concentration).",
        "Clean the vial stopper and the chosen site with separate alcohol swabs and let both air-dry.",
        "Pinch a skinfold and insert the needle at 45–90° into subcutaneous tissue. Do not aspirate; inject slowly and steadily.",
        "Rotate sites (abdomen, thighs, upper arms) to avoid lipohypertrophy, and log each dose and site.",
        "Dispose of the syringe in a sharps container and return the vial to refrigerated, dark storage.",
      ],
    },
    {
      id: "sec-10",
      heading: "References",
      type: "references",
      refs: [
        {
          cite: "Teichman SL, et al. Prolonged stimulation of growth hormone and IGF-I secretion by CJC-1295, a long-acting analog of GHRH, in healthy adults. (Studied CJC-1295 with DAC.)",
          journal: "J. Clin. Endocrinol. Metab. (2006).",
          href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
          label: "pubmed.ncbi.nlm.nih.gov/16352683",
        },
        {
          cite: "Alba M, et al. Once-daily administration of CJC-1295, a long-acting GHRH analog, normalizes growth in the GHRH knockout mouse. (Studied CJC-1295 with DAC.)",
          journal: "Am. J. Physiol. Endocrinol. Metab. (2006).",
          href: "https://pubmed.ncbi.nlm.nih.gov/16822960/",
          label: "pubmed.ncbi.nlm.nih.gov/16822960",
        },
        {
          cite: "Raun K, et al. Ipamorelin, the first selective growth hormone secretagogue.",
          journal: "Eur. J. Endocrinol. (1998).",
          href: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
          label: "pubmed.ncbi.nlm.nih.gov/9849822",
        },
        {
          cite: "Beyond the androgen receptor: the role of growth hormone secretagogues in the modern management of body composition.",
          journal: "PubMed Central.",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7108996/",
          label: "pmc.ncbi.nlm.nih.gov/articles/PMC7108996",
        },
        {
          cite: "Gobburu JV, et al. Pharmacokinetic-pharmacodynamic modeling of ipamorelin, a growth hormone releasing peptide, in human volunteers.",
          journal: "Pharm. Res. (1999).",
          href: "https://pubmed.ncbi.nlm.nih.gov/10923144/",
          label: "pubmed.ncbi.nlm.nih.gov/10923144",
        },
        {
          cite: "Vaccine administration — subcutaneous route (angle, site, no aspiration).",
          journal: "U.S. Centers for Disease Control and Prevention.",
          href: "https://www.cdc.gov/vaccines/hcp/administration/during.html",
          label: "cdc.gov — vaccine administration",
        },
        {
          cite: "Vaccine administration — subcutaneous injection technique.",
          journal: "U.S. Centers for Disease Control and Prevention.",
          href: "https://www.cdc.gov/vaccines/hcp/admin/downloads/YCTS-VaxAdmin-Subcut-injection.pdf",
          label: "cdc.gov — subcutaneous injection",
        },
        {
          cite: "Best practices for injections and related procedures.",
          journal: "NCBI Bookshelf (WHO).",
          href: "https://www.ncbi.nlm.nih.gov/books/NBK138495/",
          label: "ncbi.nlm.nih.gov/books/NBK138495",
        },
        {
          cite: "Growth hormone secretagogues: history and clinical applications.",
          journal: "Frontiers in Endocrinology (2019).",
          href: "https://www.frontiersin.org/articles/10.3389/fendo.2019.00155/full",
          label: "frontiersin.org — fendo.2019.00155",
        },
      ],
    },
    {
      id: "sec-11",
      heading: "Related Protocols",
      type: "related",
      links: [
        { label: "CJC-1295 with DAC — 5 mg Vial", href: "/single-peptide-dosages/cjc-1295-dac-5mg" },
        { label: "Ipamorelin — 5 mg Vial", href: "/single-peptide-dosages/ipamorelin-5mg" },
        { label: "KLOW — 80 mg Blend", href: "/peptide-blend-dosages/klow-80mg" },
        { label: "Reconstitution Guide", href: "/guides/reconstitution-guide" },
      ],
    },
  ],
};
