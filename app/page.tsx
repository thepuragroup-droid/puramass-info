import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Syringe,
  BookOpen,
  ShieldCheck,
  ScrollText,
  Layers,
} from "lucide-react";
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
    tag: "Guide",
    icon: BookOpen,
    title: "Beginner's Guide to Peptides",
    body: "What lyophilized peptides are, the vocabulary, and how research dosing is expressed.",
    href: "/guides/beginners-guide",
    cta: "Read Guide",
  },
  {
    tag: "Guide",
    icon: FlaskConical,
    title: "How to Reconstitute Peptides",
    body: "Mixing lyophilized powder with bacteriostatic water without degrading the compound.",
    href: "/guides/reconstitution-guide",
    cta: "Read Guide",
  },
  {
    tag: "Guide",
    icon: Syringe,
    title: "Syringe & Measurement Guide",
    body: "Reading U-100 insulin syringes and converting between mcg, mg, mL and units.",
    href: "/guides/syringe-measurement-guide",
    cta: "Read Guide",
  },
];

const explore: (CardData & { icon: React.ComponentType<{ className?: string }> })[] = [
  {
    icon: Layers,
    title: "Single-Peptide Dosages",
    body: "Per-compound, per-vial reconstitution and titration protocols.",
    href: "/single-peptide-dosages",
    cta: "Browse Singles",
  },
  {
    icon: FlaskConical,
    title: "Peptide Blends",
    body: "Multi-compound research vials with combined dosing math.",
    href: "/peptide-blend-dosages",
    cta: "Browse Blends",
  },
  {
    icon: BookOpen,
    title: "Compound Library",
    body: "Mechanism, background and research summaries for each peptide.",
    href: "/learn",
    cta: "Open Library",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lightblue/50 via-white to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(60rem 30rem at 70% -10%, rgba(96,165,250,0.18), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="wrap relative py-20 sm:py-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="eyebrow">Research Protocol Library</span>
            <h1>
              Precise peptide dosing,
              <br />
              grounded in the literature.
            </h1>
            <p className="lead mt-5 max-w-xl">
              Reconstitution math, titration schedules, storage parameters and mechanism notes
              for the most-studied research compounds — written from peer-reviewed sources, not
              message boards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/single-peptide-dosages" className="btn btn-primary">
                Browse Protocols
              </Link>
              <Link href="/calculator" className="btn btn-light">
                Open Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 sm:py-20">
        <div className="wrap">
          <span className="eyebrow">Featured Protocols</span>
          <h2>Most-referenced dosing guides</h2>
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
            <span className="eyebrow">Why These Guides</span>
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
        <div className="wrap">
          <span className="eyebrow">Essential Guides</span>
          <h2>Foundations before you calculate</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {guides.map(({ icon: Icon, ...c }) => (
              <div key={c.title} className="card">
                <div className="card-top" />
                <div className="card-body">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lightblue text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <Link href={c.href} className="btn-ghost inline-flex items-center gap-1">
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-accent">Interactive Tool</span>
            <h2 className="text-white">Reconstitution Calculator</h2>
            <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-lightblue">
              Enter the peptide amount in the vial, how much bacteriostatic water you're adding,
              and your target research dose. The calculator returns the exact volume to draw — in
              insulin-syringe units — plus the concentration and doses per vial.
            </p>
            <Link href="/calculator" className="btn btn-primary mt-8">
              Open Full Calculator
            </Link>
          </div>
          <Calculator />
        </div>
      </section>

      {/* EXPLORE */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="wrap text-center">
          <span className="eyebrow">Ready to explore more</span>
          <h2>Where do you want to start?</h2>
          <div className="mt-8 grid gap-6 text-left md:grid-cols-3">
            {explore.map(({ icon: Icon, ...c }) => (
              <div key={c.title} className="card">
                <div className="card-top" />
                <div className="card-body">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lightblue text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <Link href={c.href} className="btn-ghost inline-flex items-center gap-1">
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProtocolCard({ tag, title, body, href, cta }: CardData) {
  return (
    <div className="card flex flex-col">
      <div className="card-top" />
      <div className="card-body flex flex-1 flex-col">
        {tag && <span className="tag">{tag}</span>}
        <h3>{title}</h3>
        <p className="flex-1">{body}</p>
        <Link href={href} className="btn-ghost inline-flex items-center gap-1">
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
