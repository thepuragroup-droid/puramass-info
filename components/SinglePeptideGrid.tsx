"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { protocolSlugs } from "@/lib/protocols";
import type { CompoundCard } from "@/lib/singlePeptides";

const available = new Set(protocolSlugs);

export function SinglePeptideGrid({ compounds }: { compounds: CompoundCard[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return compounds;
    return compounds.filter(
      (c) => c.search.includes(q) || c.name.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q),
    );
  }, [query, compounds]);

  return (
    <>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter compounds…"
          aria-label="Filter compounds"
          className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-ink-muted">No compounds match “{query}”.</p>
      ) : (
        <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.name} className="card flex flex-col">
              <div className="card-top" />
              <div className="card-body flex flex-1 flex-col">
                <span className="tag">{c.tag}</span>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {c.variants.map((v) => {
                    const isLive = available.has(v.slug);
                    return (
                      <Link
                        key={v.slug}
                        href={`/single-peptide-dosages/${v.slug}`}
                        className={`pill ${isLive ? "" : "opacity-60"}`}
                        title={isLive ? undefined : "Protocol page coming soon"}
                      >
                        {v.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
