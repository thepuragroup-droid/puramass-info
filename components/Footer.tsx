import Link from "next/link";
import { Brand } from "./Brand";

const protocols = [
  { label: "Single-Peptide Dosages", href: "/single-peptide-dosages" },
  { label: "Peptide Blend Dosages", href: "/peptide-blend-dosages" },
  { label: "Master Dosage Chart", href: "/guides/dosage-chart" },
  { label: "Reconstitution Calculator", href: "/calculator" },
  { label: "Compound Library", href: "/learn" },
];

const learn = [
  { label: "Beginner's Guide", href: "/guides/beginners-guide" },
  { label: "Reconstitution", href: "/guides/reconstitution-guide" },
  { label: "Syringe & Measurement", href: "/guides/syringe-measurement-guide" },
  { label: "Storage Guide", href: "/guides/storage-guide" },
  { label: "Glossary", href: "/guides/glossary" },
  // { label: "FAQ", href: "/guides/faq" }, // hidden for now
];

const legal = [
  { label: "Privacy", href: "/legal/privacy-policy" },
  { label: "Terms", href: "/legal/terms-conditions" },
  { label: "Shipping", href: "/legal/shipping-payments" },
  { label: "Refunds", href: "/legal/refund-returns" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Cookies", href: "/legal/cookie-policy" },
  { label: "Accessibility", href: "/legal/accessibility" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-surface">
      <div className="wrap py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm text-ink-muted leading-relaxed">
              An independent peptide reconstitution calculator and reference library of
              research dosing protocols, compiled from peer-reviewed literature and primary
              sources.
            </p>
          </div>

          <FooterCol title="Protocols" links={protocols} />
          <FooterCol title="Learn" links={learn} />

          <div>
            <h2 className="text-sm font-bold tracking-normal text-navy">The calculator</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Vial amount, water volume and target dose in; the exact draw in U-100 syringe
              units out, drawn to scale.
            </p>
            <Link href="/calculator" className="btn btn-primary mt-4">
              Open Calculator
            </Link>
          </div>
        </div>

        <p className="mt-12 rounded-xl border border-line/70 bg-white p-4 text-xs leading-relaxed text-ink-muted">
          <strong className="text-ink-soft">Research-use disclaimer:</strong> All content on
          this site is provided strictly for educational and laboratory in-vitro research
          purposes. The compounds referenced are not approved for human or veterinary use, and
          nothing here constitutes medical advice or usage instructions. Statements have not been
          evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any
          disease.
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-line/60 pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 aminocalculator. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-bold tracking-normal text-navy">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-muted hover:text-brand">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
