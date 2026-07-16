import type { Guide } from "./types";

export const storageGuide: Guide = {
  slug: "storage-guide",
  crumb: "Peptide Storage Guide",
  eyebrow: "Handling & Stability",
  title: "Peptide Storage Guide",
  lead: "How temperature, light, moisture and preservatives determine the stability of research peptides — tracing a compound from the sealed lyophilized vial through to the reconstituted solution, with concrete numbers for refrigeration, freezing and shelf life.",
  pills: [
    { label: "Lyophilized vs Reconstituted", red: true },
    { label: "Cold Chain" },
    { label: "Shelf Life" },
  ],
  disclaimer:
    "The compounds discussed here are investigational and supplied strictly for in-vitro and laboratory research. They are not approved for human or veterinary use, and nothing on this page is medical advice or a dosing instruction. The storage guidance exists only to preserve sample integrity in a research context.",
  sections: [
    {
      id: "sec-1",
      heading: "Why Storage Matters",
      chunks: [
        {
          t: "p",
          text: "Peptides are short chains of amino acids linked by bonds that are vulnerable to heat, water, oxygen and light. Once those bonds break or the chain misfolds, the molecule stops behaving the way the literature describes — and the change cannot be reversed. That makes storage the single biggest variable in keeping a research compound usable. Because the rules shift sharply depending on whether a peptide is still a sealed dry powder or has been dissolved into solution, this guide treats the two states separately throughout.",
        },
      ],
    },
    {
      id: "sec-2",
      heading: "Lyophilized Powder Storage",
      chunks: [
        {
          t: "p",
          text: "Lyophilization (freeze-drying) strips nearly all of the water out of a peptide, which is why the sealed dry vial is by far its most stable form. With water largely gone, the chemical reactions that degrade a peptide slow dramatically, and a powder held cold and sealed can stay intact for years. The table below sets out the practical temperature bands and the shelf life to expect at each.",
        },
        {
          t: "table",
          table: {
            columns: ["Condition", "Temperature", "Approx. Shelf Life", "Use Case"],
            rows: [
              ["Long-term freezer", "−20 °C (−4 °F)", "2–3+ years", "Extended storage of unopened vials"],
              ["Refrigerator (ideal)", "2–8 °C (36–46 °F)", "12–24 months", "Default for stock you will use within a year or two"],
              ["Room temperature", "15–25 °C (59–77 °F)", "Days to a few months", "Short holding period or transit only"],
              ["Elevated / hot", "Above 25 °C (77 °F)", "Not recommended", "Accelerates degradation; avoid"],
            ],
          },
        },
        {
          t: "callout",
          title: "The refrigerator is the practical default.",
          body: "A standard 2–8 °C fridge keeps powder stable for a year or more and sidesteps the freeze-thaw cycling that repeated freezer access can introduce. Save the −20 °C freezer for vials you do not expect to open for a long time.",
        },
      ],
    },
    {
      id: "sec-3",
      heading: "Reconstituted Solution Storage",
      chunks: [
        {
          t: "p",
          text: "The instant a peptide dissolves, water re-enters the picture and the stability clock speeds up enormously. A reconstituted vial should go straight into the refrigerator at 2–8 °C (36–46 °F) and stay there. How long it remains usable comes down almost entirely to the diluent you reconstituted it with.",
        },
        {
          t: "table",
          table: {
            columns: ["Reconstituted With", "Storage", "Approx. Usable Window", "Notes"],
            rows: [
              ["Bacteriostatic water (0.9% benzyl alcohol)", "2–8 °C refrigerated", "25–30 days", "Preservative suppresses microbial growth; suits multi-draw vials"],
              ["Sterile water (no preservative)", "2–8 °C refrigerated", "24–48 hours", "No antimicrobial protection; single-session use"],
            ],
          },
        },
        {
          t: "callout",
          title: "Never freeze a reconstituted peptide.",
          body: "Freezing forms ice crystals that physically shear peptide bonds and denature the molecule. That damage is permanent and thawing does not undo it. Once a peptide is in solution, refrigerate it — never put it in the freezer.",
        },
      ],
    },
    {
      id: "sec-4",
      heading: "Bacteriostatic vs Sterile Water",
      chunks: [
        {
          t: "p",
          text: "The diluent is not a minor detail; it sets the entire shelf life of the dissolved peptide. The two common choices behave very differently.",
        },
        {
          t: "table",
          table: {
            columns: ["Property", "Bacteriostatic Water", "Sterile Water"],
            rows: [
              ["Preservative", "0.9% benzyl alcohol", "None"],
              ["Multi-draw suitable", "Yes", "No"],
              ["Unopened storage", "Room temperature, 15–25 °C", "Room temperature"],
              ["After first puncture", "Use within ~28 days", "Use entire vial within 24–48 hours"],
              ["Best for", "Protocols drawn over several weeks", "Single-session work"],
            ],
          },
        },
        {
          t: "p",
          text: "For almost all multi-draw research handling, bacteriostatic water is the standard pick because its benzyl alcohol content holds back microbial contamination across repeated punctures. See the [bacteriostatic water reference](/single-peptide-dosages/bac-water) for the reconstitution volume math.",
        },
      ],
    },
    {
      id: "sec-5",
      heading: "Protecting From Light, Heat & Moisture",
      chunks: [
        {
          t: "p",
          text: "Temperature is the headline variable, but three other exposures quietly degrade peptides and are easy to keep in check.",
        },
        {
          t: "list",
          items: [
            "**Light.** Keep vials in the dark. A refrigerator interior already provides this; for room-temperature storage, leave vials in their box or an opaque container.",
            "**Heat.** Anything sustained above 25 °C accelerates breakdown. Keep vials away from windows, appliances and other heat sources.",
            "**Moisture & air.** Leave the aluminum crimp cap and rubber stopper fully intact until you reconstitute. An undisturbed seal shields the powder from humidity and oxidative degradation.",
          ],
        },
      ],
    },
    {
      id: "sec-6",
      heading: "Reconstitution Best Practices",
      chunks: [
        {
          t: "p",
          text: "Careful handling at the moment of reconstitution protects both sterility and shelf life. Work through these steps in order.",
        },
        {
          t: "steps",
          steps: [
            "If the powder was frozen, let the sealed vial reach room temperature before adding any diluent. Reconstituting cold-shocked powder risks uneven dissolution.",
            "Swab the rubber stopper of both the peptide vial and the water vial with an alcohol wipe and let it dry.",
            "Draw the calculated volume of bacteriostatic water and add it slowly, letting it run down the inner wall of the vial rather than jetting straight onto the powder.",
            "Do not shake. Swirl gently, or let the vial sit, until the powder dissolves fully into a clear solution.",
            "Label the vial with the reconstitution date and the volume of water added so you can track the 25–30 day window.",
            "Store the vial upright in the refrigerator to minimize contact between the solution and the stopper.",
            "Swab the stopper with alcohol again before every subsequent draw.",
          ],
        },
      ],
    },
    {
      id: "sec-7",
      heading: "Transit & Travel Handling",
      chunks: [
        {
          t: "p",
          text: "Peptides are most exposed to temperature swings while on the move. The goal in transit is to stay cold without freezing a reconstituted solution.",
        },
        {
          t: "list",
          items: [
            "**Short trips (under ~4 hours).** An insulated bag with an ice pack works, but wrap the pack in cloth so a reconstituted vial never sits directly against a frozen surface.",
            "**Longer transport.** Use a hard-sided insulated container with gel packs, and place a barrier between the packs and the vials to buffer against freezing.",
            "**Air travel.** Keep peptides in carry-on luggage. Cargo holds can reach temperature extremes in both directions that the cabin will not.",
          ],
        },
        {
          t: "callout",
          title: "Ship dry when you can.",
          body: "Dry lyophilized powder tolerates a few hours at room temperature far better than a reconstituted solution does. When travel is unavoidable, it is generally safer to ship or carry the peptide dry and reconstitute on arrival.",
        },
      ],
    },
    {
      id: "sec-8",
      heading: "Signs of Degradation",
      chunks: [
        {
          t: "p",
          text: "Inspect every vial before use. The warning signs differ between the dry and dissolved states.",
        },
        {
          t: "table",
          table: {
            columns: ["State", "Warning Signs", "Likely Cause"],
            rows: [
              ["Lyophilized powder", "Yellowing or browning of the powder", "Heat or oxidative damage"],
              ["Lyophilized powder", "Liquid droplets or visible moisture before reconstitution", "Compromised seal / humidity ingress"],
              ["Lyophilized powder", "Broken crimp cap or loose rubber stopper", "Loss of seal integrity"],
              ["Reconstituted solution", "Cloudiness, turbidity or visible particles", "Precipitation or contamination"],
              ["Reconstituted solution", "Yellow, brown or pink discoloration", "Chemical degradation"],
              ["Reconstituted solution", "Foul or off odor", "Microbial growth"],
            ],
          },
        },
        {
          t: "callout",
          title: "When in doubt, discard.",
          body: "A reconstituted vial should be retired after its 25–30 day window regardless of how it looks, and any vial showing the signs above should be discarded at once. Appearance is a last-line check, not a license to stretch shelf life.",
        },
      ],
    },
    {
      id: "sec-9",
      heading: "Quick Reference Summary",
      chunks: [
        {
          t: "table",
          table: {
            columns: ["Scenario", "Store At", "Shelf Life"],
            rows: [
              ["Powder — long term", "−20 °C freezer", "2–3+ years"],
              ["Powder — in use", "2–8 °C fridge", "12–24 months"],
              ["Powder — transit only", "15–25 °C", "Days to weeks"],
              ["Solution — bacteriostatic water", "2–8 °C fridge", "25–30 days"],
              ["Solution — sterile water", "2–8 °C fridge", "24–48 hours"],
            ],
          },
        },
      ],
    },
  ],
  references: [
    {
      cite: "Manning MC, et al. Stability of protein pharmaceuticals: an update.",
      journal: "Pharmaceutical Research (2010).",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2866513/",
      label: "pmc.ncbi.nlm.nih.gov/articles/PMC2866513",
    },
    {
      cite: "Wang W. Lyophilization and development of solid protein pharmaceuticals.",
      journal: "International Journal of Pharmaceutics (2000).",
      href: "https://pubmed.ncbi.nlm.nih.gov/10884630/",
      label: "pubmed.ncbi.nlm.nih.gov/10884630",
    },
    {
      cite: "Bummer PM, Koppenol S. Chemical and physical considerations in protein and peptide stability.",
      href: "https://pubmed.ncbi.nlm.nih.gov/10947986/",
      label: "pubmed.ncbi.nlm.nih.gov/10947986",
    },
  ],
  related: [
    { label: "Bacteriostatic Water & Reconstitution", href: "/single-peptide-dosages/bac-water" },
    { label: "Ipamorelin — 5 mg Dosing Protocol", href: "/single-peptide-dosages/ipamorelin-5mg" },
    { label: "What Is BPC-157?", href: "/learn/bpc-157" },
  ],
};
