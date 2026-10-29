import Link from "next/link";

/** Hexagonal residue, filled to a measured line: amino acid + dose. */
export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.5 21.5h27v6.3L20 35.6 6.5 27.8z" fill="#2563EB" />
      <path
        d="M20 4.4 33.5 12.2v15.6L20 35.6 6.5 27.8V12.2z"
        stroke="#1E3A8A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M12 21.5h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="aminocalculator home">
      <BrandMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-extrabold tracking-[-0.02em]">
          <span className={light ? "text-white" : "text-navy"}>amino</span>
          <span className={light ? "text-accent" : "text-brand"}>calculator</span>
        </span>
        <small
          className={`mt-1 text-[0.68rem] font-medium ${light ? "text-white/70" : "text-ink-muted"}`}
        >
          Peptide reconstitution &amp; dosing math
        </small>
      </span>
    </Link>
  );
}
