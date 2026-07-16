import type { Guide } from "./types";

export const beginnersGuide: Guide = {
  slug: "beginners-guide",
  crumb: "Beginner's Guide to Peptides",
  eyebrow: "Foundations",
  title: "Beginner's Guide to Peptides",
  lead: "A ground-up reference for anyone new to handling research peptides — what these compounds are, how a freeze-dried vial is turned into a measured solution, and how a milligram figure becomes the right number of marks on an insulin syringe.",
  pills: [
    { label: "Reference", red: true },
    { label: "Reconstitution" },
    { label: "Dose Math" },
    { label: "Storage" },
  ],
  disclaimer:
    "The peptides described here are investigational compounds supplied strictly for in-vitro and laboratory research. They are not approved for human or veterinary use, and nothing on this page is medical advice, a dosing instruction, or a recommendation to administer any compound. Every figure describes how materials are handled and measured in research settings only.",
  sections: [
    {
      id: "sec-1",
      heading: "What a Peptide Actually Is",
      chunks: [
        {
          t: "p",
          text: "A peptide is a short chain of amino acids — the very same building blocks that link together into proteins. What separates the two is mostly length: a chain of roughly 2 to 50 amino acids is called a peptide, while anything longer is generally classed as a protein. Well-known molecules land on both sides of that boundary. Oxytocin is a 9-amino-acid peptide, insulin runs to 51 residues, and human growth hormone reaches 191. The shorter and more defined a sequence is, the more cleanly researchers can isolate what one specific molecule does.",
        },
        {
          t: "p",
          text: "Most research peptides work by binding a particular receptor, much the way a key fits a single lock. Once bound, the receptor shifts shape and sets off a downstream signal — and that signal is the biological effect under study. Because each compound is tuned to its own receptor, each also carries a characteristic dose range and half-life. That is precisely why there is no universal \"peptide dose\": every compound has to be considered on its own terms.",
        },
      ],
    },
    {
      id: "sec-2",
      heading: "Why Compounds Arrive as a Powder",
      chunks: [
        {
          t: "p",
          text: "Research peptides almost always ship freeze-dried, or lyophilized — a dry, often cotton-like or glassy pellet resting at the bottom of a sealed glass vial. In that dehydrated form the molecule stays stable for long periods, which is what makes shipping and shelf storage practical in the first place. The catch is that a dry pellet can't be measured into doses. Before anything can be drawn up, that powder has to be dissolved back into a liquid of known strength — a step called reconstitution.",
        },
      ],
    },
    {
      id: "sec-3",
      heading: "The Supplies You Need",
      chunks: [
        {
          t: "p",
          text: "Handling a vial cleanly takes a small, consistent kit. Using the same supplies and the same routine each time is what keeps the dose math honest.",
        },
        {
          t: "list",
          items: [
            "The lyophilized peptide vial.",
            "Bacteriostatic water (usually sold in a 10–30 mL multi-dose vial).",
            "U-100 insulin syringes, 1 mL or 0.5 mL barrel, typically 29–31 gauge.",
            "A larger syringe or needle for drawing diluent, if your insulin syringes are too small to fill efficiently.",
            "Alcohol swabs for wiping both rubber stoppers before every puncture.",
            "A sharps container for safe disposal.",
            "Refrigerator space held around 2–8 °C.",
          ],
        },
        {
          t: "callout",
          title: "Bacteriostatic vs. sterile water",
          body: "Bacteriostatic water carries 0.9% benzyl alcohol, a preservative that holds back microbial growth and lets a reconstituted vial be punctured repeatedly over roughly 25–30 days. Plain sterile water has no preservative, so a vial mixed with it is only considered usable for about 24–48 hours. For any multi-dose work, bacteriostatic water is the standard diluent.",
        },
      ],
    },
    {
      id: "sec-4",
      heading: "The Units You Will Be Converting Between",
      chunks: [
        {
          t: "p",
          text: "Almost every dosing mistake a beginner makes comes back to a units mix-up. There are only a handful of relationships to commit to memory, but they need to be rock solid.",
        },
        {
          t: "table",
          table: {
            columns: ["From", "To", "Relationship", "Note"],
            rows: [
              ["1 milligram (mg)", "micrograms (mcg)", "1 mg = 1,000 mcg", "The classic 1,000× trap"],
              ["1 mL", "insulin units (U-100)", "1 mL = 100 units", "Each unit = 0.01 mL"],
              ['1 "tick" on a U-100 syringe', "volume", "1 unit = 0.01 mL", "Smallest reliable mark"],
              ["1 mg HGH", "international units (IU)", "≈ 3 IU per mg", "Only applies to growth hormone"],
            ],
            caption:
              'Insulin-syringe "units" measure volume, not how much peptide you are taking. The amount of compound inside a unit depends entirely on how concentrated the solution is.',
          },
        },
      ],
    },
    {
      id: "sec-5",
      heading: "Reconstitution, Step by Step",
      chunks: [
        {
          t: "p",
          text: "The procedure below stays the same no matter which compound is in the vial. Only the volume of water — and the resulting concentration — changes.",
        },
        {
          t: "steps",
          steps: [
            "Let both the sealed peptide vial and the bacteriostatic water come to room temperature, then wipe each rubber stopper with an alcohol swab.",
            "Draw your chosen volume of bacteriostatic water into a syringe. Choose the volume deliberately — it sets the concentration (see the next section).",
            "Insert the needle and inject the water slowly down the inside glass wall of the vial so it runs onto the powder rather than blasting straight into the pellet. This limits foaming and protects the molecule.",
            "Set the vial down and let it rest, then swirl or gently roll it until the powder fully dissolves — usually anywhere from one to ten minutes. Never shake; agitation can shear delicate peptides.",
            "Confirm the solution is clear and colourless with no floating particles, then label the vial with the concentration (mg/mL) and the date you mixed it.",
            "Refrigerate straight away, and use a fresh sterile syringe for every draw afterward.",
          ],
        },
      ],
    },
    {
      id: "sec-6",
      heading: "Choosing a Concentration",
      chunks: [
        {
          t: "p",
          text: "The volume of water you add is a decision, and it dictates how many syringe units a given dose works out to. The formula is straightforward: concentration equals the milligrams in the vial divided by the millilitres of water added. More water gives a more dilute, lower-strength solution where each dose spans more units on the syringe; less water gives a stronger solution where the same dose sits in fewer units.",
        },
        {
          t: "p",
          text: "The table shows what a single 5 mg vial looks like at three common fills, so you can see how the same powder produces very different dose-to-unit math.",
        },
        {
          t: "table",
          table: {
            columns: ["Water Added", "Concentration", "Per Unit (0.01 mL)", "250 mcg Dose"],
            rows: [
              ["1 mL", "5 mg/mL (5,000 mcg/mL)", "50 mcg", "5 units (0.05 mL)"],
              ["2 mL", "2.5 mg/mL (2,500 mcg/mL)", "25 mcg", "10 units (0.10 mL)"],
              ["2.5 mL", "2 mg/mL (2,000 mcg/mL)", "20 mcg", "12.5 units (0.125 mL)"],
            ],
            caption:
              "Same 5 mg vial, three fills. A more dilute solution spreads a dose across more units, which makes small amounts easier to measure accurately.",
          },
        },
        {
          t: "callout",
          title: "Worked example",
          body: "Take a 5 mg vial reconstituted with 2 mL of bacteriostatic water — that is 2.5 mg/mL. To draw a 250 mcg dose, first convert: 250 mcg = 0.25 mg. Then divide the dose by the concentration: 0.25 mg ÷ 2.5 mg/mL = 0.10 mL, which is 10 units on a U-100 syringe. Pick a concentration that lands your usual dose on a clean, easy-to-read number of units.",
        },
      ],
    },
    {
      id: "sec-7",
      heading: "How Peptides Are Administered",
      chunks: [
        {
          t: "p",
          text: "Route matters because it changes how — and whether — a compound reaches circulation. Three routes turn up most often in the research literature.",
        },
        {
          t: "table",
          table: {
            columns: ["Route", "Abbrev.", "Typical Use", "Notes"],
            rows: [
              ["Subcutaneous", "SubQ / SC", "The default for most peptides", "Into the fat layer; abdomen, thigh or upper arm"],
              ["Intramuscular", "IM", "A handful of compounds (e.g. HCG)", "Deeper injection, generally faster absorption"],
              ["Oral", "PO", "Limited; most peptides degrade in the gut", "Exceptions include oral semaglutide and MK-677"],
            ],
            caption:
              "Most peptides are studied subcutaneously because they are broken down before absorption when swallowed.",
          },
        },
      ],
    },
    {
      id: "sec-8",
      heading: "Storage & Handling",
      chunks: [
        {
          t: "p",
          text: "A peptide's stability hinges on whether it is still dry or already in solution, so the two states have to be treated differently.",
        },
        {
          t: "table",
          table: {
            columns: ["State", "Ideal", "Acceptable", "Avoid"],
            rows: [
              ["Lyophilized (dry)", "2–8 °C; months to years", "Room temperature for weeks", "Sunlight, heat above 25 °C, humidity"],
              ["Reconstituted (liquid)", "2–8 °C, refrigerated", "Used within ~25–30 days", "Freezing, which can destroy potency"],
            ],
            caption:
              "Once a vial is mixed, mark the date on it. Never freeze a reconstituted solution, and keep both forms out of direct light.",
          },
        },
      ],
    },
    {
      id: "sec-9",
      heading: "The Major Categories",
      chunks: [
        {
          t: "p",
          text: "Research peptides are usually grouped by the system they act on. Browsing by category is an easy way to get oriented before drilling into any one compound's protocol.",
        },
        {
          t: "list",
          items: [
            "**Tissue repair & recovery:** [BPC-157](/learn/bpc-157), [TB-500](/learn/tb-500).",
            "**Growth-hormone secretagogues:** [Ipamorelin](/learn/ipamorelin), [CJC-1295](/learn/cjc-1295), [Sermorelin](/learn/sermorelin), [Tesamorelin](/learn/tesamorelin).",
            "**Metabolic & body-composition:** [Tirzepatide](/learn/tirzepatide), [Retatrutide](/learn/retatrutide), [Cagrilintide](/learn/cagrilintide), [AOD-9604](/learn/aod-9604).",
            "**Cosmetic & anti-aging:** [GHK-Cu](/learn/ghk-cu), [Melanotan II](/learn/melanotan-2), [Epithalon](/learn/epithalon).",
            "**Hormonal & neurological:** [HCG](/learn/hcg), [PT-141](/learn/pt-141), [Oxytocin](/learn/oxytocin), [Selank](/learn/selank), [Semax](/learn/semax).",
          ],
        },
      ],
    },
    {
      id: "sec-10",
      heading: "Common Beginner Mistakes",
      chunks: [
        {
          t: "list",
          items: [
            "Confusing milligrams with micrograms — a 1,000-fold error and the single most dangerous slip in dose math.",
            'Reading syringe "units" as if they were a dose. A unit is a fixed volume; its dose content depends on your concentration.',
            "Shaking a reconstituted vial instead of swirling it gently.",
            "Freezing a liquid solution, which can wreck potency.",
            "Squirting diluent straight onto the powder pellet rather than running it down the glass wall.",
            "Using plain sterile water for a vial meant to last weeks, instead of preservative-containing bacteriostatic water.",
            "Forgetting to label the vial with its concentration and mix date, then losing track of the math entirely.",
          ],
        },
      ],
    },
  ],
  references: [
    {
      cite: "Wang L, et al. Therapeutic peptides: current applications and future directions.",
      journal: "Signal Transduction and Targeted Therapy (2022).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8800257/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC8800257",
    },
    {
      cite: "Lau JL, Dunn MK. Therapeutic peptides: historical perspectives, current development trends, and future directions.",
      journal: "Bioorganic & Medicinal Chemistry (2018).",
      href: "https://pubmed.ncbi.nlm.nih.gov/28720325/",
      label: "pubmed.ncbi.nlm.nih.gov/28720325",
    },
    {
      cite: "Otvos L Jr, Wade JD. Current challenges in peptide-based drug discovery.",
      journal: "Frontiers in Chemistry (2014).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4215633/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC4215633",
    },
    {
      cite: "Meyer BK, et al. Antimicrobial preservative use in parenteral products: benzyl alcohol and beyond.",
      journal: "Journal of Pharmaceutical Sciences (2007).",
      href: "https://pubmed.ncbi.nlm.nih.gov/17518356/",
      label: "pubmed.ncbi.nlm.nih.gov/17518356",
    },
  ],
  related: [
    { label: "Bacteriostatic Water — Reconstitution Reference", href: "/single-peptide-dosages/bac-water" },
    { label: "BPC-157 10 mg — Dosing Protocol", href: "/single-peptide-dosages/bpc-157-10mg" },
    { label: "Ipamorelin 5 mg — Dosing Protocol", href: "/single-peptide-dosages/ipamorelin-5mg" },
    { label: "Browse the Compound Library", href: "/learn" },
  ],
};
