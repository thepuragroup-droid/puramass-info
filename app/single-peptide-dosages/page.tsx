import type { Metadata } from "next";
import Link from "next/link";
import { SinglePeptideGrid } from "@/components/SinglePeptideGrid";
import { singlePeptides } from "@/lib/singlePeptides";

export const metadata: Metadata = {
  title: "Single-Peptide Dosage Protocols",
  description:
    "Per-compound, per-vial reconstitution math and titration schedules — each expressed in U-100 insulin-syringe units and backed by primary-source citations.",
};

export default function SinglePeptidesIndex() {
  return (
    <>
      <nav className="crumb" aria-label="Breadcrumb">
        <div className="wrap py-3 text-sm">
          <Link href="/">Home</Link>
          <span className="sep" aria-hidden="true">/</span>
          <span className="text-ink-soft">Single-Peptide Dosages</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-lightblue/40 to-white py-14">
        <div className="wrap">
          <h1>Single-Peptide Dosage Protocols</h1>
          <p className="lead mt-4 max-w-2xl">
            Per-compound, per-vial reconstitution math and titration schedules — each expressed in
            U-100 insulin-syringe units and backed by primary-source citations.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="wrap">
          <SinglePeptideGrid compounds={singlePeptides} />
        </div>
      </section>
    </>
  );
}
