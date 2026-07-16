import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RichText } from "@/components/RichText";
import type { Protocol, Section } from "@/lib/protocols/types";

type Parent = { label: string; href: string };

export function ProtocolArticle({
  protocol,
  parent,
  eyebrow,
}: {
  protocol: Protocol;
  parent: Parent;
  eyebrow: string;
}) {
  const p = protocol;
  return (
    <>
      <nav className="crumb">
        <div className="wrap py-3 text-sm">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href={parent.href}>{parent.label}</Link>
          <span className="sep">/</span>
          <span className="text-ink-soft">{p.crumb}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-10">
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{p.title}</h1>
          <p className="lead mt-4 max-w-3xl">{p.lead}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.pills.map((pill) => (
              <span key={pill.label} className={`pill ${pill.red ? "pill-red" : ""}`}>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="wrap protocol">
          {/* TOC */}
          <aside className="toc">
            <h4>On This Page</h4>
            <ol>
              {p.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Content */}
          <div className="content">
            <div className="dose-chart mb-8">
              <h3>{p.chartTitle}</h3>
              <div className="rows">
                {p.chart.map((row) => (
                  <div key={row.label} className="row">
                    <b>{row.label}</b>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {p.sections.map((s) => (
              <SectionBlock key={s.id} section={s} disclaimer={p.disclaimer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionBlock({ section, disclaimer }: { section: Section; disclaimer: string }) {
  const heading = <h2 id={section.id}>{section.heading}</h2>;

  switch (section.type) {
    case "prose":
      return (
        <>
          {heading}
          {section.paragraphs.map((para, i) => (
            <p key={i}>
              <RichText text={para} />
            </p>
          ))}
        </>
      );

    case "table":
      return (
        <>
          {heading}
          {section.intro && <p>{section.intro}</p>}
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {section.table.columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {section.table.caption && <p className="table-caption">{section.table.caption}</p>}
          {section.note && (
            <div className="callout">
              <strong>Note</strong>
              <p>{section.note}</p>
            </div>
          )}
        </>
      );

    case "steps":
      return (
        <>
          {heading}
          {section.intro && <p>{section.intro}</p>}
          <ol className="steps">
            {section.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </>
      );

    case "list":
      return (
        <>
          {heading}
          {section.intro && <p>{section.intro}</p>}
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </>
      );

    case "benefits":
      return (
        <>
          {heading}
          {section.groups.map((g) => (
            <div key={g.subheading}>
              <h3>{g.subheading}</h3>
              <ul>
                {g.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );

    case "references":
      return (
        <>
          <div className="disclaimer-box">
            <strong>Research-use note.</strong> {disclaimer}
          </div>
          {heading}
          <div className="refs">
            <ol>
              {section.refs.map((r, i) => (
                <li key={i}>
                  {r.cite} <em>{r.journal}</em>{" "}
                  <a href={r.href} target="_blank" rel="noopener noreferrer">
                    {r.label}
                    <ExternalLink className="ml-0.5 inline h-3 w-3 align-baseline" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </>
      );

    case "related":
      return (
        <>
          {heading}
          <div className="related">
            {section.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </>
      );

    default:
      return null;
  }
}
