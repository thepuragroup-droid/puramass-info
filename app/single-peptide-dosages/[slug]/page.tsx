import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProtocolArticle } from "@/components/ProtocolArticle";
import { getProtocol, protocolSlugs } from "@/lib/protocols";

export const dynamicParams = false;

export function generateStaticParams() {
  return protocolSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProtocol(params.slug);
  if (!p) return {};
  return {
    title: `${p.crumb} Dosage Protocol`,
    description: p.lead,
  };
}

export default function ProtocolPage({ params }: { params: { slug: string } }) {
  const p = getProtocol(params.slug);
  if (!p) notFound();

  return (
    <ProtocolArticle
      protocol={p}
      parent={{ label: "Single-Peptide Dosages", href: "/single-peptide-dosages" }}
      eyebrow="Single-Peptide Protocol"
    />
  );
}
