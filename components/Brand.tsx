import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <svg
        className="h-9 w-9 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="14" y="2" width="12" height="9" rx="2" fill="#2563EB" />
        <path d="M13 11h14v19a7 7 0 0 1-7 7 7 7 0 0 1-7-7V11z" fill="#1E3A8A" />
        <path d="M13 22h14v8a7 7 0 0 1-7 7 7 7 0 0 1-7-7v-8z" fill="#60A5FA" />
        <circle cx="20" cy="29" r="2" fill="#fff" />
      </svg>
      <span className={`flex flex-col leading-none ${light ? "text-white" : "text-navy"}`}>
        <span className="text-[1.05rem] font-bold tracking-tight">Peptide Dosage</span>
        <small className={`text-[0.68rem] font-medium ${light ? "text-white/70" : "text-ink-muted"}`}>
          Research Protocol Library
        </small>
      </span>
    </Link>
  );
}
