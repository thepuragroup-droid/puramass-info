import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blends } from "@/lib/blends";
import { blendProtocolSlugs } from "@/lib/blendProtocols";

export const metadata: Metadata = {
  title: "Peptide Blend Dosage Protocols",
  description:
    "Multi-compound research vials with combined reconstitution math — so each component's share of every draw is accounted for.",
};

const available = new Set(blendProtocolSlugs);

export default function BlendsIndex() {
  return (
    <>
      <nav className="crumb">
        <div className="wrap py-3 text-sm">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="text-ink-soft">Peptide Blend Dosages</span>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-lightblue/40 to-white py-14">
        <div className="wrap">
          <span className="eyebrow">Protocol Library</span>
          <h1>Peptide Blend Dosage Protocols</h1>
          <p className="lead mt-4 max-w-2xl">
            Multi-compound research vials with combined reconstitution math — so each
            component&apos;s share of every draw is accounted for.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blends.map((b) => {
              const isLive = available.has(b.slug);
              return (
                <div key={b.slug} className="card flex flex-col">
                  <div className="card-top" />
                  <div className="card-body flex flex-1 flex-col">
                    <span className="tag">{b.tag}</span>
                    <h3>{b.name}</h3>
                    <p className="flex-1">{b.blurb}</p>
                    <Link
                      href={`/peptide-blend-dosages/${b.slug}`}
                      className={`btn-ghost inline-flex items-center gap-1 ${
                        isLive ? "" : "opacity-60"
                      }`}
                      title={isLive ? undefined : "Protocol page coming soon"}
                    >
                      View Protocol <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
