import { Fragment } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Guide, GuideChunk } from "@/lib/guides/types";

/**
 * Inline renderer supporting `**bold**` and `[label](href)` links. Internal
 * hrefs (starting with "/") use Next <Link>; everything else opens in a new tab.
 * No raw HTML is injected, so the source strings stay safe.
 */
function GuideRich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link key={i} href={href} className="font-medium text-brand hover:text-brand-hover">
                {label}
              </Link>
            );
          }
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:text-brand-hover"
            >
              {label}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

function ChunkBlock({ chunk }: { chunk: GuideChunk }) {
  switch (chunk.t) {
    case "p":
      return (
        <p>
          <GuideRich text={chunk.text} />
        </p>
      );

    case "list":
      return (
        <ul>
          {chunk.items.map((item, i) => (
            <li key={i}>
              <GuideRich text={item} />
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="steps">
          {chunk.steps.map((step, i) => (
            <li key={i}>
              <GuideRich text={step} />
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {chunk.table.columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chunk.table.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>
                        <GuideRich text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {chunk.table.caption && <p className="table-caption">{chunk.table.caption}</p>}
        </>
      );

    case "callout":
      return (
        <div className="callout">
          <strong>{chunk.title}</strong>
          <p>
            <GuideRich text={chunk.body} />
          </p>
        </div>
      );

    case "formula":
      return (
        <p className="formula">
          <GuideRich text={chunk.text} />
        </p>
      );

    default:
      return null;
  }
}

export function GuideArticle({ guide }: { guide: Guide }) {
  const g = guide;
  const toc = [
    ...g.sections.map((s) => ({ id: s.id, heading: s.heading })),
    { id: "sec-references", heading: "References" },
    { id: "sec-related", heading: "Related Pages" },
  ];

  return (
    <>
      <nav className="crumb">
        <div className="wrap py-3 text-sm">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/guides/beginners-guide">Learn</Link>
          <span className="sep">/</span>
          <span className="text-ink-soft">{g.crumb}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-10">
        <div className="wrap">
          <span className="eyebrow">{g.eyebrow}</span>
          <h1>{g.title}</h1>
          <p className="lead mt-4 max-w-3xl">{g.lead}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {g.pills.map((pill) => (
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
              {toc.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Content */}
          <div className="content">
            {g.sections.map((s) => (
              <Fragment key={s.id}>
                <h2 id={s.id}>{s.heading}</h2>
                {s.chunks.map((chunk, i) => (
                  <ChunkBlock key={i} chunk={chunk} />
                ))}
              </Fragment>
            ))}

            <div className="disclaimer-box">
              <strong>Research-use note.</strong> {g.disclaimer}
            </div>

            <h2 id="sec-references">References</h2>
            <div className="refs">
              <ol>
                {g.references.map((r, i) => (
                  <li key={i}>
                    {r.cite} {r.journal && <em>{r.journal}</em>}{" "}
                    <a href={r.href} target="_blank" rel="noopener noreferrer">
                      {r.label}
                      <ExternalLink className="ml-0.5 inline h-3 w-3 align-baseline" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <h2 id="sec-related">Related Pages</h2>
            <div className="related">
              {g.related.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
