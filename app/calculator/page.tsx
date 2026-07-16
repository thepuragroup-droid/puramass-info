import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Peptide Reconstitution Calculator",
  description:
    "Enter the peptide amount, bacteriostatic water volume and target research dose to get the exact draw in U-100 insulin-syringe units, the concentration, and doses per vial.",
};

export default function CalculatorPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-lightblue/50 to-white py-14">
        <div className="wrap-narrow text-center">
          <span className="eyebrow">Interactive Tool</span>
          <h1>Peptide Reconstitution Calculator</h1>
          <p className="lead mt-4">
            Enter how much peptide is in the vial, how much bacteriostatic water you&apos;re
            adding, and your target research dose. You&apos;ll get the exact volume to draw in
            U-100 insulin-syringe units, the resulting concentration, and how many doses the vial
            holds.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="wrap-narrow">
          <div className="rounded-card bg-navy p-6 shadow-card sm:p-8">
            <Calculator />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="wrap-narrow">
          <h2>How the math works</h2>
          <p className="mt-4 text-ink-soft">
            Reconstitution is just a concentration problem. When you dissolve a lyophilized
            peptide in bacteriostatic water, the concentration is the peptide amount divided by
            the water volume:
          </p>
          <div className="callout callout-tip mt-5">
            <strong>Concentration</strong>
            <p>
              Concentration (mg/mL) = peptide in vial (mg) ÷ water added (mL). Multiply by 1000 to
              get mcg/mL.
            </p>
          </div>
          <p className="mt-5 text-ink-soft">
            To find the volume for a target dose, divide the dose by the concentration. On a U-100
            insulin syringe, every 0.01 mL equals 1 unit, so multiplying the volume in mL by 100
            gives the units to draw:
          </p>
          <div className="callout mt-5">
            <strong>Volume &amp; units</strong>
            <p>
              Volume (mL) = dose (mcg) ÷ concentration (mcg/mL) &nbsp;•&nbsp; Units (U-100) =
              volume (mL) × 100
            </p>
          </div>

          <h3 className="mt-10">Worked example</h3>
          <p className="mt-3 text-ink-soft">
            A 10 mg vial reconstituted with 2 mL of water gives 5 mg/mL, or 5000 mcg/mL. For a 250
            mcg target dose: 250 ÷ 5000 = 0.05 mL = <strong>5 units</strong>. The vial holds 10,000
            mcg ÷ 250 = <strong>40 doses</strong>.
          </p>
          <p className="mt-6">
            <Link href="/guides/reconstitution-guide" className="btn btn-navy">
              Read the full reconstitution guide →
            </Link>
          </p>

          <div className="mt-8 rounded-xl border border-line/70 bg-white p-4 text-sm text-ink-muted">
            <strong className="text-ink-soft">Research-use note.</strong> This calculator is
            provided for educational and laboratory measurement purposes only. The compounds
            referenced on this site are investigational and not approved for human or veterinary
            use. Nothing here is medical advice or a dosing recommendation.
          </div>
        </div>
      </section>
    </>
  );
}
