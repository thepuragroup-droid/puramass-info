import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  List,
  Ruler,
  Snowflake,
  Table,
} from "lucide-react";
import { Calculator } from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Peptide Dosage & Reconstitution Calculator",
  description:
    "Free peptide reconstitution and dosage calculator. Enter the peptide amount, bacteriostatic water volume, and target research dose to get the exact draw in U-100 insulin-syringe units, the concentration, doses per vial, and a to-scale syringe.",
};

const references = [
  {
    cite: "Lau, J. L., & Dunn, M. K. (2018). Therapeutic peptides: Historical perspectives, current development trends, and future directions.",
    journal: "Bioorganic & Medicinal Chemistry, 26(10), 2700–2707.",
    href: "https://doi.org/10.1016/j.bmc.2017.06.052",
  },
  {
    cite: "Muttenthaler, M., King, G. F., Adams, D. J., & Alewood, P. F. (2021). Trends in peptide drug discovery.",
    journal: "Nature Reviews Drug Discovery, 20(4), 309–325.",
    href: "https://doi.org/10.1038/s41573-020-00135-8",
  },
  {
    cite: "Manning, M. C., Patel, K., & Borchardt, R. T. (1989). Stability of protein pharmaceuticals.",
    journal: "Pharmaceutical Research, 6(11), 903–918.",
    href: "https://doi.org/10.1023/A:1015929109894",
  },
  {
    cite: "Stroppel, L., Schultz-Fademrecht, T., Cebulla, M., Blech, M., Marhöfer, R. J., Selzer, P. M., & Garidel, P. (2023). Antimicrobial preservatives for protein and peptide formulations: An overview.",
    journal: "Pharmaceutics, 15(2), 563.",
    href: "https://doi.org/10.3390/pharmaceutics15020563",
  },
  {
    cite: "Roy, S., Jung, R., Kerwin, B. A., Randolph, T. W., & Carpenter, J. F. (2005). Effects of benzyl alcohol on aggregation of recombinant human interleukin-1-receptor antagonist in reconstituted lyophilized formulations.",
    journal: "Journal of Pharmaceutical Sciences, 94(2), 382–396.",
    href: "https://doi.org/10.1002/jps.20258",
  },
  {
    cite: "Jordan, M. A., Choksi, D., Lombard, K., & Patton, L. R. (2021). Development of guidelines for accurate measurement of small volume parenteral products using syringes.",
    journal: "Hospital Pharmacy, 56(3), 165–171.",
    href: "https://doi.org/10.1177/0018578719873869",
  },
  {
    cite: "Gnanalingham, M. G., Newland, P., & Smith, C. P. (1998). Accuracy and reproducibility of low dose insulin administration using pen-injectors and syringes.",
    journal: "Archives of Disease in Childhood, 79(1), 59–62.",
    href: "https://doi.org/10.1136/adc.79.1.59",
  },
];

const footLinks = [
  {
    label: "How to Reconstitute Peptides",
    href: "/guides/reconstitution-guide",
    Icon: BookOpen,
  },
  {
    label: "Syringe & Measurement Guide",
    href: "/guides/syringe-measurement-guide",
    Icon: Ruler,
  },
  { label: "Peptide Storage Guide", href: "/guides/storage-guide", Icon: Snowflake },
  { label: "All Dosage Protocols", href: "/single-peptide-dosages", Icon: List },
  { label: "Master Dosage Chart", href: "/guides/dosage-chart", Icon: Table },
];

export default function CalculatorPage() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <div className="wrap py-3 text-sm">
          <Link href="/">Home</Link>
          <span className="sep" aria-hidden="true">/</span>
          <span className="text-ink-soft">Dosage &amp; Reconstitution Calculator</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-lightblue/50 to-white py-12">
        <div className="wrap text-center">
          <h1>Peptide Dosage &amp; Reconstitution Calculator</h1>
          <p className="lead mx-auto mt-4 max-w-3xl">
            Plan a research peptide protocol in two steps: work out the
            reconstitution concentration after adding bacteriostatic water, then
            convert any target dose into insulin-syringe units — with a to-scale
            syringe showing exactly where to draw on a 30-, 50-, or 100-unit
            barrel. For educational and research use only.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-4 pt-8">
        <div className="wrap">
          <Calculator />
        </div>
      </section>

      {/* Article */}
      <section className="py-14">
        <div className="wrap-narrow content">
          <div className="callout callout-tip">
            <strong>In short</strong>
            <p>
              A peptide calculator converts a lyophilized peptide vial and a
              volume of bacteriostatic water into an exact reconstitution
              concentration, then calculates the syringe units needed for your
              dose. Enter the peptide amount, the water you plan to add, and your
              target dose — you get the draw volume in milliliters, the units to
              draw on an insulin syringe, and how many doses each vial holds.
            </p>
          </div>

          <h2 id="what-is-a-peptide-calculator">What Is a Peptide Calculator?</h2>
          <p>
            A peptide calculator is a tool that turns two numbers — the total
            amount of peptide in your vial and the volume of bacteriostatic water
            you add — into a precise dosage measured in insulin-syringe units.
            Peptides are short chains of amino acids linked by peptide bonds, and
            more than 80 peptide drugs have reached the market across a wide range
            of therapeutic areas since insulin was introduced almost a century ago
            (Lau &amp; Dunn, 2018; Muttenthaler et al., 2021). Because a research
            peptide vial arrives as a dry, freeze-dried powder rather than a
            ready-to-use solution, every vial must be reconstituted before any
            dose can be measured, and the concentration of that solution depends
            entirely on how much water you add.
          </p>
          <p>
            This is where a peptide dosage calculator removes the guesswork.
            Instead of working the conversion by hand each time, you enter the
            peptide amount, the water volume, and your desired dose, and the
            calculator returns the exact amount of solution to draw. The same tool
            is often called a peptide reconstitution calculator, a peptide mixing
            calculator, or a bac water calculator, because reconstitution and
            dosage calculation are two halves of one problem: first you set a
            concentration, then you convert your dose into a volume you can
            actually measure in a syringe.
          </p>

          <h2 id="how-to-use-the-peptide-calculator">
            How to Use the Peptide Calculator
          </h2>
          <p>
            The calculator above is built around a simple two-step workflow.
            Follow these steps to calculate an accurate dose:
          </p>
          <ol className="steps">
            <li>
              <strong>Enter the peptide in your vial.</strong> In the
              Reconstitution card, type the total amount of peptide printed on the
              vial label — for example, 5 mg or 10 mg. Adding water never changes
              this total; it only changes how concentrated the solution becomes.
            </li>
            <li>
              <strong>Enter the bacteriostatic water.</strong> Type the volume of
              bacteriostatic water you plan to add, in milliliters. The calculator
              instantly shows the resulting concentration in mg/mL and how much
              peptide sits in a single syringe unit.
            </li>
            <li>
              <strong>Enter your desired dose.</strong> In the Your Dose card,
              enter the dose from your research protocol and choose mcg or mg.
              Quick-select chips (100 mcg, 250 mcg, 500 mcg, 1 mg) fill common
              doses in one tap.
            </li>
            <li>
              <strong>Choose your syringe size.</strong> Select the 30-, 50-, or
              100-unit insulin syringe you are using. The on-screen syringe
              redraws to match, and the calculator recommends a smaller barrel
              when it would measure your draw more precisely.
            </li>
            <li>
              <strong>Read your draw.</strong> The results panel shows the draw
              volume in milliliters, the exact units to draw, and how many doses
              the vial holds. The visual syringe fills to the correct line, and a
              note reports the nearest measurable mark so your dose lands where the
              numbers actually are. Use the <em>Copy protocol summary</em> button
              to save the full calculation.
            </li>
          </ol>
          <p>
            Because every field updates the result in real time, you can raise or
            lower the water volume and immediately see how it moves the draw — a
            fast way to find a concentration that places your dose neatly on a
            syringe mark.
          </p>

          <h2 id="what-is-peptide-reconstitution">
            What Is Peptide Reconstitution?
          </h2>
          <p>
            Peptide reconstitution is the process of dissolving a lyophilized
            peptide powder in a liquid to create a peptide solution of known
            concentration. Manufacturers freeze-dry research peptides because
            removing water dramatically slows the chemical reactions that would
            otherwise degrade the peptide, letting the dry powder remain stable in
            storage far longer than a solution would (Manning et al., 1989). The
            trade-off is that a lyophilized peptide cannot be measured or dosed
            until it is reconstituted.
          </p>
          <p>
            To reconstitute a peptide, sterile bacteriostatic water is added
            slowly to the vial and allowed to dissolve the powder without vigorous
            shaking. Once mixed, the peptide solution should be stored cold and
            shielded from light, because reconstituted peptides are far less stable
            than their dry form and begin to degrade over days to weeks. The exact
            concentration of the finished solution — and therefore every dose you
            draw from it — is fixed the moment you decide how much water to add,
            which is precisely the number this calculator helps you plan.
          </p>

          <h2 id="how-much-bacteriostatic-water-should-you-use">
            How Much Bacteriostatic Water Should You Use?
          </h2>
          <p>
            The volume of bacteriostatic water you add does not change the total
            amount of peptide in the vial — it only changes the concentration of
            the solution. A 5 mg vial contains 5 mg of peptide whether you add 1 mL
            or 3 mL of water; more water simply spreads that same 5 mg across a
            larger volume, so each unit on the syringe carries less peptide.
          </p>
          <p>
            Bacteriostatic water is sterile water that contains 0.9% benzyl
            alcohol, a preservative that suppresses microbial growth and lets a
            vial be drawn from repeatedly over its usable life. Benzyl alcohol is
            one of the most common antimicrobial preservatives in multi-dose
            peptide and protein formulations (Stroppel et al., 2023). It is not
            entirely inert, though: under some conditions benzyl alcohol can
            promote peptide aggregation, which is one reason a reconstituted vial
            should be swirled gently rather than shaken and kept refrigerated (Roy
            et al., 2005).
          </p>
          <p>
            In practice the amount of water is a balance. More water produces a
            larger, easier-to-measure draw per dose, which improves accuracy for
            small doses. Less water produces a higher concentration and a smaller
            draw, which helps when a dose would otherwise exceed the capacity of
            your syringe. The calculator lets you test both directions in seconds
            so you can pick a concentration that fits your dose and your syringe.
          </p>

          <h2 id="understanding-concentration-mcg-mg-and-ml">
            Understanding Concentration: mcg, mg, and mL
          </h2>
          <p>
            Concentration is the amount of peptide contained in each milliliter of
            solution, usually written as mg/mL or mcg/mL. It is the single value
            that connects your vial to your syringe, and it follows directly from
            the reconstitution math: concentration equals the peptide amount
            divided by the water volume. Adding 2 mL of bacteriostatic water to a
            5 mg vial gives a concentration of 2.5 mg/mL.
          </p>
          <p>
            Two conversions make the rest of the arithmetic straightforward.
            First, 1 mg equals 1000 mcg, so doses written in micrograms and vials
            written in milligrams share one scale. Second, an insulin syringe on
            the U-100 scale holds 100 units in 1 mL, which means 1 unit equals 0.01
            mL. Once you know how many milligrams sit in each milliliter,
            converting a desired dose into a draw volume — and then into units — is
            a matter of dividing the dose by the concentration. The peptide
            calculator performs every one of these conversions automatically, but
            understanding them makes the results easy to sanity-check.
          </p>

          <h2 id="reading-the-syringe-units-draw-volume-and-barrel-size">
            Reading the Syringe: Units, Draw Volume, and Barrel Size
          </h2>
          <p>
            An insulin syringe measured on the U-100 scale holds 100 units per
            milliliter, so the number of units to draw is simply the draw volume in
            milliliters multiplied by 100. A 0.1 mL draw is 10 units; a 0.05 mL
            draw is 5 units. The calculator reports both the volume and the unit
            count, and the on-screen syringe fills to the matching line so you can
            see where the plunger should sit at the injection-ready mark.
          </p>
          <p>
            Barrel size is where accuracy is won or lost. Insulin syringes are sold
            in 30-unit (0.3 mL), 50-unit (0.5 mL), and 100-unit (1 mL) barrels, all
            on the same U-100 scale, so a given dose is the same unit number on
            every one. What differs is the spacing of the marks: a 30-unit syringe
            is graduated every half unit, a 50-unit every unit, and a 100-unit
            every two units. Finer marks make a small draw easier to hit precisely,
            which is why a 30-unit barrel is the most accurate choice for small
            doses. Studies of small-volume measurement show that percent error
            grows as the measured volume becomes a smaller fraction of the
            syringe&apos;s capacity, and that matching syringe size to the volume
            being measured meaningfully improves accuracy (Jordan et al., 2021).
            The effect is largest at tiny volumes: the relative error in a 1-unit
            draw is far greater than in a 10-unit draw (Gnanalingham et al., 1998).
            The calculator applies this principle to recommend the smallest barrel
            that comfortably fits your draw.
          </p>

          <h2 id="worked-example-reconstituting-a-5-mg-vial">
            Worked Example: Reconstituting a 5 mg Vial
          </h2>
          <p>
            Suppose you have a 5 mg vial of a research peptide such as BPC-157 and
            you add 2 mL of bacteriostatic water. The concentration is 5 mg ÷ 2 mL
            = 2.5 mg/mL, or 2500 mcg/mL. Each insulin unit (0.01 mL) therefore
            contains 25 mcg of peptide.
          </p>
          <p>
            If your protocol calls for a 250 mcg dose, the draw volume is 250 mcg ÷
            2500 mcg/mL = 0.1 mL, which is 10 units on the U-100 scale. The 5 mg
            vial holds 5000 mcg ÷ 250 mcg = 20 full doses. Reconstitute the same
            5 mg vial with 1 mL of water instead and the concentration doubles to
            5 mg/mL, so the same 250 mcg dose draws to just 5 units. Reconstitute
            with 3 mL and the concentration falls to about 1.67 mg/mL, pushing the
            same dose out to roughly 15 units. Nothing about the peptide changed —
            only the water volume — yet the number you read on the syringe moved
            substantially. This is exactly the relationship the peptide calculator
            makes visible, so you can choose a concentration that lands your dose on
            a clean, easy-to-read mark.
          </p>

          <h2 id="why-accurate-dosage-calculation-matters">
            Why Accurate Dosage Calculation Matters
          </h2>
          <p>
            Accurate reconstitution and dosage calculation keep every draw from a
            vial consistent with the last. Because research peptides such as
            BPC-157, CJC-1295, and Ipamorelin are dosed in micrograms and drawn in
            fractions of a milliliter, a small measurement slip represents a large
            percentage of the intended dose. The small-volume literature is blunt
            on this point: at the lowest volumes, syringe measurement error can be
            substantial, and technique and syringe selection are the main levers
            for controlling it (Gnanalingham et al., 1998; Jordan et al., 2021). A
            calculator that reports the exact units, shows the nearest measurable
            mark, and steers you toward the right barrel size turns an error-prone
            hand calculation into a repeatable, precise dosage — the entire point
            of measuring carefully in a research setting.
          </p>

          <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

          <h3 id="how-much-bacteriostatic-water-should-i-add-to-a-peptide-vial">
            How much bacteriostatic water should I add to a peptide vial?
          </h3>
          <p>
            There is no single correct volume — the amount of water sets the
            concentration, not the dose. Adding more bacteriostatic water gives a
            larger, easier-to-measure draw per dose; adding less gives a higher
            concentration and a smaller draw. Enter your vial size and target dose
            into the calculator and adjust the water until the draw lands on a
            convenient syringe mark. Common choices are 1 mL, 2 mL, and 3 mL.
          </p>

          <h3 id="how-do-i-calculate-a-peptide-dose-in-units">
            How do I calculate a peptide dose in units?
          </h3>
          <p>
            Divide your desired dose by the solution&apos;s concentration to get
            the draw volume in milliliters, then multiply by 100 to get units on a
            U-100 insulin syringe. For example, a 250 mcg dose from a 2.5 mg/mL
            solution is 0.1 mL, or 10 units. The peptide calculator runs this
            conversion automatically as soon as you enter the dose.
          </p>

          <h3 id="what-syringe-size-is-best-for-peptides">
            What syringe size is best for peptides?
          </h3>
          <p>
            Match the barrel to your draw. A 30-unit (0.3 mL) syringe has the
            finest marks and is the most accurate for small doses; a 50-unit
            (0.5 mL) syringe suits mid-range draws; and a 100-unit (1 mL) syringe
            fits the largest draws. All three use the same U-100 scale, so the unit
            number is identical — only the precision differs. The calculator
            recommends the smallest barrel that fits your dose.
          </p>

          <h3 id="how-long-does-a-reconstituted-peptide-vial-last">
            How long does a reconstituted peptide vial last?
          </h3>
          <p>
            Once reconstituted, a peptide solution is far less stable than the dry
            powder and should be kept refrigerated and away from light.
            Reconstituted research peptides are generally used within a few weeks,
            whereas lyophilized powder can remain stable in cold storage for many
            months. Always follow the storage guidance for your specific compound.
          </p>

          <h3 id="can-i-use-sterile-water-instead-of-bacteriostatic-water">
            Can I use sterile water instead of bacteriostatic water?
          </h3>
          <p>
            Sterile water contains no preservative, so a vial reconstituted with it
            offers no protection against microbial growth once opened and is best
            suited to single use. Bacteriostatic water contains 0.9% benzyl
            alcohol, which suppresses microbial growth and makes multi-dose use over
            a vial&apos;s life more practical (Stroppel et al., 2023). The
            calculator&apos;s math is identical for either diluent.
          </p>

          <h3 id="how-do-i-convert-mcg-to-ml">How do I convert mcg to mL?</h3>
          <p>
            You cannot convert micrograms to milliliters without knowing the
            concentration, because micrograms measure mass and milliliters measure
            volume. Once the peptide is reconstituted, divide the dose in
            micrograms by the concentration in mcg/mL to get the volume in
            milliliters. This is exactly the calculation the peptide calculator
            performs for you.
          </p>

          <div className="disclaimer-box">
            <strong>For research and educational use only.</strong> This peptide
            calculator and the information above support laboratory and educational
            reference. Research peptides are not approved for human consumption.
            Always confirm every calculation independently and consult a qualified
            professional before making decisions.
          </div>

          <h2 id="references">References</h2>
          <div className="refs">
            <ol>
              {references.map((r) => (
                <li key={r.href}>
                  {r.cite} <em>{r.journal}</em>{" "}
                  <a href={r.href} target="_blank" rel="noopener noreferrer">
                    {r.href}
                    <ExternalLink className="ml-0.5 inline h-3 w-3 align-baseline" />
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {footLinks.map(({ label, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2.5 rounded-xl border border-line/70 bg-white px-4 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-card"
              >
                <Icon className="h-4 w-4 flex-none text-brand" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
