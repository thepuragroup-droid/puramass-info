import Link from "next/link";
import { ArrowRight, FlaskConical, Syringe, BookOpen } from "lucide-react";
import { Calculator } from "@/components/Calculator";

type CardData = {
  tag?: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};

const featured: CardData[] = [
  {
    tag: "Blend",
    title: "BPC-157 + TB-500 — 20 mg",
    body: "The “Wolverine” regenerative pairing. Full reconstitution math and a phased recovery schedule.",
    href: "/peptide-blend-dosages/bpc-157-tb-500-20mg",
    cta: "View Protocol",
  },
  {
    tag: "Single Peptide",
    title: "Retatrutide — 10 mg",
    body: "Triple-agonist metabolic research compound. Gradual and advanced titration tables included.",
    href: "/single-peptide-dosages/retatrutide-10mg",
    cta: "View Protocol",
  },
  {
    tag: "Blend",
    title: "CJC-1295 (No DAC) + Ipamorelin",
    body: "The classic GHRH/GHRP growth-hormone research pairing at a 10 mg total fill.",
    href: "/peptide-blend-dosages/cjc-1295-no-dac-ipamorelin-10mg",
    cta: "View Protocol",
  },
];

const guides: (CardData & { icon: React.ComponentType<{ className?: string }> })[] = [
  {
    icon: BookOpen,
    title: "Beginner's Guide to Peptides",
    body: "What lyophilized peptides are, the vocabulary, and how research dosing is expressed.",
    href: "/guides/beginners-guide",
    cta: "Read Guide",
  },
  {
    icon: FlaskConical,
    title: "How to Reconstitute Peptides",
    body: "Mixing lyophilized powder with bacteriostatic water without degrading the compound.",
    href: "/guides/reconstitution-guide",
    cta: "Read Guide",
  },
  {
    icon: Syringe,
    title: "Syringe & Measurement Guide",
    body: "Reading U-100 insulin syringes and converting between mcg, mg, mL and units.",
    href: "/guides/syringe-measurement-guide",
    cta: "Read Guide",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO + CALCULATOR: the product leads */}
      <section className="border-b border-line/60 bg-gradient-to-b from-lightblue/50 via-white to-white">
        <div className="wrap pb-14 pt-12 sm:pb-20 sm:pt-16">
          <div className="max-w-3xl animate-fade-up">
            <h1>
              Peptide reconstitution math,
              <br className="hidden sm:block" /> measured to the syringe line.
            </h1>
            <p className="lead mt-5 max-w-2xl">
              Enter the peptide in your vial, the bacteriostatic water you add and your target
              dose. aminocalculator returns the exact draw in U-100 insulin-syringe units and
              shows it on a to-scale syringe.
            </p>
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link
                href="/calculator#how-to-use-the-peptide-calculator"
                className="btn-ghost inline-flex items-center gap-1"
              >
                How the math works <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/single-peptide-dosages" className="btn-ghost inline-flex items-center gap-1">
                Browse dosing protocols <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <Calculator />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 sm:py-20">
        <div className="wrap">
          <h2>Most-referenced dosing protocols</h2>
          <p className="lead mt-3 max-w-2xl">
            Reconstitution math and titration schedules per vial, with every draw already
            converted to syringe units.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((c) => (
              <ProtocolCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2>Built from primary sources, not guesswork</h2>
            <p className="lead mt-4">
              Every protocol is assembled from peer-reviewed academic literature, clinical-trial
              registries and manufacturer specifications — then cross-checked for reconstitution
              accuracy.
            </p>
            <ul className="list-check mt-6">
              <li>Citations to PubMed, trial registries and primary literature on every page</li>
              <li>Reconstitution math shown step-by-step in insulin-syringe units</li>
              <li>
                Storage, handling and stability parameters for lyophilized and reconstituted
                material
              </li>
            </ul>
            <Link href="/guides/beginners-guide" className="btn btn-navy mt-8">
              Start With the Basics
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="callout callout-tip">
              <strong>Transparent</strong>
              <p>No dosing recommendations for humans — only the laboratory math and the research record.</p>
            </div>
            <div className="callout">
              <strong>Consistent</strong>
              <p>Identical section structure across every compound so you always know where to look.</p>
            </div>
            <div className="callout callout-warn">
              <strong>Honest</strong>
              <p>Side-effect and risk data are reported alongside the benefits found in the literature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENTIAL GUIDES */}
      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <div>
            <h2>Foundations before you calculate</h2>
            <p className="lead mt-4">
              The calculator does the arithmetic. These guides cover what the numbers mean and
              how to handle the vial they describe.
            </p>
          </div>
          <ul className="divide-y divide-line/70 border-y border-line/70">
            {guides.map(({ icon: Icon, ...c }) => (
              <li key={c.title}>
                <Link
                  href={c.href}
                  className="group flex items-start gap-4 py-6 transition-colors hover:bg-surface sm:px-3"
                >
                  <Icon className="mt-1 h-5 w-5 flex-none text-brand" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold text-navy group-hover:text-brand">
                      {c.title}
                    </span>
                    <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink-soft">
                      {c.body}
                    </span>
                  </span>
                  <ArrowRight
                    className="mt-1.5 h-4 w-4 flex-none text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function ProtocolCard({ tag, title, body, href, cta }: CardData) {
  return (
    <div className="card flex flex-col">
      <div className="card-body flex flex-1 flex-col">
        {tag && <span className="tag">{tag}</span>}
        <h3>{title}</h3>
        <p className="flex-1">{body}</p>
        <Link href={href} className="btn-ghost inline-flex items-center gap-1">
          {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
