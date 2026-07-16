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
  { label: "FAQ", href: "/guides/faq" },
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm text-ink-muted leading-relaxed">
              An independent educational reference library of reconstitution and dosing
              protocols for research compounds, compiled from peer-reviewed literature and
              primary sources.
            </p>
          </div>

          <FooterCol title="Protocols" links={protocols} />
          <FooterCol title="Learn" links={learn} />

          <div>
            <h4 className="text-sm font-bold text-navy">Stay Updated</h4>
            <p className="mt-3 text-sm text-ink-muted">
              New protocols and research summaries, no spam.
            </p>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="you@lab.com"
                aria-label="Email"
                className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              <button type="button" className="btn btn-primary w-full">
                Subscribe
              </button>
            </form>
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
          <span>© 2026 Peptide Dosage Guide. All rights reserved.</span>
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
      <h4 className="text-sm font-bold text-navy">{title}</h4>
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
