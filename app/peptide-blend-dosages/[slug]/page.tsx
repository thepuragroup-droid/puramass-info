import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProtocolArticle } from "@/components/ProtocolArticle";
import { getBlendProtocol, blendProtocolSlugs } from "@/lib/blendProtocols";

export const dynamicParams = false;

export function generateStaticParams() {
  return blendProtocolSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getBlendProtocol(params.slug);
  if (!p) return {};
  return {
    title: `${p.crumb} Dosage Protocol`,
    description: p.lead,
  };
}

export default function BlendProtocolPage({ params }: { params: { slug: string } }) {
  const p = getBlendProtocol(params.slug);
  if (!p) notFound();

  return (
    <ProtocolArticle
      protocol={p}
      parent={{ label: "Peptide Blend Dosages", href: "/peptide-blend-dosages" }}
      eyebrow="Peptide-Blend Protocol"
    />
  );
}
