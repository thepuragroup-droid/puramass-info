"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Check, Copy, FlaskConical, Syringe, Target } from "lucide-react";

type DoseUnit = "mcg" | "mg";
type SyringeSize = 30 | 50 | 100;

/* ---------- syringe geometry (SVG viewBox 0 0 560 132) ---------- */
const X0 = 68; // barrel interior, left edge (0 units)
const BARREL_W = 364; // interior width (0 → max units)
const ROD_END = 532; // fixed thumb-pad side of the plunger rod

/** Mark granularity + tick layout for each U-100 barrel. */
const SYRINGES: Record<
  SyringeSize,
  { mark: number; major: number; ml: string; hint: string }
> = {
  30: {
    mark: 0.5,
    major: 5,
    ml: "0.3 mL",
    hint: "30-unit (0.3 mL): marks every ½ unit. The most precise choice for small draws.",
  },
  50: {
    mark: 1,
    major: 10,
    ml: "0.5 mL",
    hint: "50-unit (0.5 mL): marks every 1 unit. A good middle ground for mid-range draws.",
  },
  100: {
    mark: 2,
    major: 10,
    ml: "1 mL",
    hint: "100-unit (1 mL): marks every 2 units. Fits the largest draws, but is the least precise for very small ones.",
  },
};

const FREQ_LABELS: Record<string, string> = {
  "14": "twice daily",
  "7": "once daily",
  "3.5": "every other day",
  "3": "3× per week",
  "2": "2× per week",
  "1": "once weekly",
};

/* ---------- formatting helpers ---------- */
function trim(n: number, dp: number): string {
  if (!isFinite(n)) return "—";
  return parseFloat(n.toFixed(dp)).toLocaleString(undefined, {
    maximumFractionDigits: dp,
  });
}

function fmtMcg(n: number): string {
  if (!isFinite(n)) return "—";
  return `${trim(n, n < 10 ? 1 : 0)} mcg`;
}

function fmtDuration(days: number | null): string {
  if (days == null || !isFinite(days) || days <= 0) return "—";
  if (days < 14) {
    const d = Math.round(days);
    return `${d} day${d === 1 ? "" : "s"}`;
  }
  const weeks = days / 7;
  if (weeks < 12) return `${trim(weeks, weeks < 3 ? 1 : 0)} weeks`;
  const months = days / 30.4;
  return `${trim(months, months < 3 ? 1 : 0)} months`;
}

function signedPct(pct: number): string {
  if (!isFinite(pct)) return "";
  const rounded = Math.round(pct);
  if (rounded === 0) return "on target";
  return rounded > 0 ? `+${rounded}% vs target` : `−${Math.abs(rounded)}% vs target`;
}

/* ---------- inline tooltip ---------- */
function Tip({ label, children }: { label: string; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={wrapRef} className="group relative ml-1 inline-flex align-middle">
      <button
        type="button"
        aria-label={label}
        aria-describedby={id}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-4 w-4 items-center justify-center rounded-full border border-line bg-white text-[0.6rem] font-bold leading-none text-ink-muted transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        ?
      </button>
      <span
        role="tooltip"
        id={id}
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-lg border border-line bg-navy px-3 py-2 text-left text-xs font-normal normal-case leading-relaxed tracking-normal text-white shadow-card transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </span>
    </span>
  );
}

export function Calculator() {
  const [pep, setPep] = useState("10");
  const [water, setWater] = useState("2");
  const [dose, setDose] = useState("250");
  const [doseUnit, setDoseUnit] = useState<DoseUnit>("mcg");
  const [freq, setFreq] = useState("");
  const [syringe, setSyringe] = useState<SyringeSize>(100);
  const [copied, setCopied] = useState(false);

  const m = useMemo(() => {
    const peptideMg = parseFloat(pep);
    const waterMl = parseFloat(water);
    const doseRaw = parseFloat(dose);
    const doseMcg = doseUnit === "mg" ? doseRaw * 1000 : doseRaw;
    const cfg = SYRINGES[syringe];

    const reconOk = peptideMg > 0 && waterMl > 0;
    const doseOk = doseRaw > 0;

    const concMgMl = reconOk ? peptideMg / waterMl : NaN;
    const concMcgMl = concMgMl * 1000;
    const perUnitMcg = concMcgMl * 0.01; // 1 unit = 0.01 mL
    const perTenMcg = concMcgMl * 0.1;

    const volumeMl = doseMcg / concMcgMl;
    const units = volumeMl * 100;
    const dosesPerVial = Math.floor((peptideMg * 1000) / doseMcg);

    const freqNum = parseFloat(freq);
    const durationDays =
      doseOk && reconOk && freqNum > 0 ? (dosesPerVial / freqNum) * 7 : null;

    const overflow = doseOk && reconOk && units > syringe;

    // nearest measurable mark on the selected barrel
    const markUnits = Math.round(units / cfg.mark) * cfg.mark;
    const markDoseMcg = (markUnits / 100) * concMcgMl;
    const markPct = ((markDoseMcg - doseMcg) / doseMcg) * 100;
    const onMark = Math.abs(units - markUnits) < 1e-6;

    // smallest barrel that fits the draw → best precision
    const fits = ([30, 50, 100] as SyringeSize[]).filter((b) => units <= b);
    const best = fits.length ? fits[0] : null;
    const recommend = best && best !== syringe ? best : null;

    const fillFrac = isFinite(units)
      ? Math.max(0, Math.min(1, units / syringe))
      : 0;

    return {
      reconOk,
      doseOk,
      ok: reconOk && doseOk,
      peptideMg,
      waterMl,
      doseMcg,
      concMgMl,
      concMcgMl,
      perUnitMcg,
      perTenMcg,
      volumeMl,
      units,
      dosesPerVial,
      durationDays,
      overflow,
      markUnits,
      markDoseMcg,
      markPct,
      onMark,
      recommend,
      fillFrac,
      cfg,
    };
  }, [pep, water, dose, doseUnit, freq, syringe]);

  useEffect(() => {
    setCopied(false);
  }, [pep, water, dose, doseUnit, freq, syringe]);

  const ticks = useMemo(() => {
    const cfg = SYRINGES[syringe];
    const steps = Math.round(syringe / cfg.mark);
    const perMajor = Math.round(cfg.major / cfg.mark);
    const out: { x: number; u: number; major: boolean }[] = [];
    for (let i = 0; i <= steps; i++) {
      const u = i * cfg.mark;
      out.push({ x: X0 + (i / steps) * BARREL_W, u, major: i % perMajor === 0 });
    }
    return out;
  }, [syringe]);

  const offset = m.fillFrac * BARREL_W; // plunger seal / arrow x-shift

  const validation = !m.reconOk
    ? "Enter a peptide amount and water volume greater than zero."
    : !m.doseOk
      ? "Enter a target dose greater than zero."
      : "";

  const statusText = m.ok
    ? `Calculated draw: ${trim(m.units, 2)} units, ${trim(m.volumeMl, 3)} mL, ${m.dosesPerVial} full doses per vial.`
    : validation;

  function applyRecommend() {
    if (m.recommend) setSyringe(m.recommend);
  }

  async function copySummary() {
    const cfg = SYRINGES[syringe];
    const lines = [
      "Peptide Reconstitution & Dosing Summary",
      "----------------------------------------",
      `Vial: ${trim(m.peptideMg, 4)} mg peptide + ${trim(m.waterMl, 4)} mL bacteriostatic water`,
      `Concentration: ${trim(m.concMgMl, 2)} mg/mL (${trim(m.concMcgMl, 0)} mcg/mL)`,
      `Per 1 unit (0.01 mL): ${trim(m.perUnitMcg, 1)} mcg · Per 10 units (0.1 mL): ${trim(m.perTenMcg, 1)} mcg`,
      "",
      `Target dose: ${trim(m.doseMcg, 2)} mcg`,
      `Draw: ${trim(m.units, 2)} units on a ${syringe}-unit U-100 syringe (${cfg.ml}), ${trim(m.volumeMl, 3)} mL`,
      `Nearest mark: ${trim(m.markUnits, 2)} units = ${trim(m.markDoseMcg, 1)} mcg (${signedPct(m.markPct)})`,
      `Doses per vial: ${m.dosesPerVial}`,
      freq ? `Vial lasts: ~${fmtDuration(m.durationDays)} at ${FREQ_LABELS[freq]}` : null,
      "",
      "For research & educational use only. Always verify calculations independently.",
    ].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  /* ---------- shared class fragments ---------- */
  const card =
    "rounded-card border border-line/70 bg-white p-5 shadow-card sm:p-6";
  const cardH2 = "mb-1 flex items-center gap-2.5 text-xl font-bold text-navy";
  const stepBadge =
    "flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand text-sm font-bold text-white";
  const hint = "mb-4 text-sm text-ink-muted";
  const fieldLabel = "mb-1.5 block text-sm font-semibold text-ink";
  const inputWrap =
    "flex items-stretch overflow-hidden rounded-lg border border-line bg-white transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20";
  const inputCls =
    "min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-ink outline-none";
  const unitCls =
    "flex select-none items-center border-l border-line bg-surface px-3 text-sm font-medium text-ink-muted";
  const chipRow = "mt-2 flex flex-wrap gap-2";

  function chipCls(active: boolean) {
    return `rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
      active
        ? "border-brand bg-lightblue/60 text-brand-hover"
        : "border-line bg-white text-ink-soft hover:border-brand hover:text-brand"
    }`;
  }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2">
        {/* STEP 1 · RECONSTITUTION */}
        <div className={card}>
          <h2 className={cardH2}>
            <span className={stepBadge}>1</span>
            <FlaskConical className="h-5 w-5 text-brand" aria-hidden="true" />
            Reconstitution
          </h2>
          <p className={hint}>
            Enter the peptide amount in the vial and the volume of bacteriostatic
            water you plan to add.
          </p>

          <div className="mb-4">
            <label htmlFor="r-pep" className={fieldLabel}>
              Peptide in vial
              <Tip label="About vial amount">
                The total peptide printed on the vial label (e.g., 5 mg, 10 mg).
                Water never changes this total — only how diluted it is.
              </Tip>
            </label>
            <div className={inputWrap}>
              <input
                id="r-pep"
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={pep}
                onChange={(e) => setPep(e.target.value)}
                aria-invalid={!m.reconOk}
                className={inputCls}
              />
              <span className={unitCls}>mg</span>
            </div>
          </div>

          <div>
            <label htmlFor="r-water" className={fieldLabel}>
              Bacteriostatic water added
              <Tip label="About bacteriostatic water">
                Sterile water with 0.9% benzyl alcohol, so a mixed vial stays
                usable for weeks. More water = a larger, easier-to-measure draw
                per dose; the peptide per dose stays the same.
              </Tip>
            </label>
            <div className={inputWrap}>
              <input
                id="r-water"
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={water}
                onChange={(e) => setWater(e.target.value)}
                aria-invalid={!m.reconOk}
                className={inputCls}
              />
              <span className={unitCls}>mL</span>
            </div>
            <div className={chipRow} aria-label="Common water volumes">
              {["1", "2", "3", "5"].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setWater(v)}
                  className={chipCls(water === v)}
                >
                  {v} mL
                </button>
              ))}
            </div>
          </div>

          <dl className="mt-5 space-y-0 rounded-xl border border-line/70 bg-surface p-4">
            <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
              <dt className="text-sm text-ink-soft">
                Concentration
                <Tip label="About concentration">
                  How much peptide each mL of solution contains after mixing.
                  Every syringe number below comes from this.
                </Tip>
              </dt>
              <dd className="text-2xl font-bold text-brand">
                {m.reconOk ? `${trim(m.concMgMl, 2)} mg/mL` : "—"}
              </dd>
            </div>
            <div className="flex items-center justify-between border-b border-line/60 py-2.5">
              <dt className="text-sm text-ink-soft">Per 1 unit (0.01 mL)</dt>
              <dd className="font-semibold text-ink">
                {m.reconOk ? fmtMcg(m.perUnitMcg) : "—"}
              </dd>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <dt className="text-sm text-ink-soft">Per 10 units (0.1 mL)</dt>
              <dd className="font-semibold text-ink">
                {m.reconOk ? fmtMcg(m.perTenMcg) : "—"}
              </dd>
            </div>
          </dl>
        </div>

        {/* STEP 2 · DOSE */}
        <div className={card}>
          <h2 className={cardH2}>
            <span className={stepBadge}>2</span>
            <Syringe className="h-5 w-5 text-brand" aria-hidden="true" />
            Your Dose
          </h2>
          <p className={hint}>
            Enter the dose from your protocol and pick the insulin syringe
            you&apos;re using.
          </p>

          <div className="mb-4">
            <label htmlFor="d-dose" className={fieldLabel}>
              Target dose per injection
              <Tip label="About target dose">
                The amount for a single injection from your protocol. 1 mg =
                1000 mcg.
              </Tip>
            </label>
            <div className={inputWrap}>
              <input
                id="d-dose"
                type="number"
                inputMode="decimal"
                min={0}
                step="any"
                value={dose}
                onChange={(e) => setDose(e.target.value)}
                aria-invalid={!m.doseOk}
                className={inputCls}
              />
              <select
                value={doseUnit}
                onChange={(e) => setDoseUnit(e.target.value as DoseUnit)}
                aria-label="Dose unit"
                className="cursor-pointer border-l border-line bg-surface px-2 text-sm font-medium text-ink-muted outline-none"
              >
                <option value="mcg">mcg</option>
                <option value="mg">mg</option>
              </select>
            </div>
            <div className={chipRow} aria-label="Common doses">
              {[
                { v: "100", u: "mcg" as DoseUnit, label: "100 mcg" },
                { v: "250", u: "mcg" as DoseUnit, label: "250 mcg" },
                { v: "500", u: "mcg" as DoseUnit, label: "500 mcg" },
                { v: "1", u: "mg" as DoseUnit, label: "1 mg" },
              ].map((c) => (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => {
                    setDose(c.v);
                    setDoseUnit(c.u);
                  }}
                  className={chipCls(dose === c.v && doseUnit === c.u)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="d-freq" className={fieldLabel}>
              Injection frequency{" "}
              <span className="font-normal text-ink-muted">(optional)</span>
              <Tip label="About frequency">
                Used only to estimate how long one vial lasts. It doesn&apos;t
                change the draw.
              </Tip>
            </label>
            <div className={inputWrap}>
              <select
                id="d-freq"
                value={freq}
                onChange={(e) => setFreq(e.target.value)}
                className="w-full cursor-pointer bg-transparent px-3 py-2.5 text-sm text-ink outline-none"
              >
                <option value="">— not set —</option>
                <option value="14">Twice daily</option>
                <option value="7">Once daily</option>
                <option value="3.5">Every other day</option>
                <option value="3">3× per week</option>
                <option value="2">2× per week</option>
                <option value="1">Once weekly</option>
              </select>
            </div>
          </div>

          <div>
            <span id="d-syrlabel" className={fieldLabel}>
              Syringe size
              <Tip label="Why syringe size matters">
                All three are U-100 insulin syringes (100 units = 1 mL) — the
                same dose is the same unit number on each. Smaller barrels have
                finer, easier-to-read marks, so match the barrel to your draw.
              </Tip>
            </span>
            <div
              role="group"
              aria-labelledby="d-syrlabel"
              className="grid grid-cols-3 gap-2"
            >
              {([30, 50, 100] as SyringeSize[]).map((s) => {
                const active = syringe === s;
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSyringe(s)}
                    className={`flex flex-col items-center rounded-lg border px-2 py-2.5 transition-colors ${
                      active
                        ? "border-brand bg-brand text-white shadow-sm"
                        : "border-line bg-white text-ink-soft hover:border-brand hover:text-brand"
                    }`}
                  >
                    <span className="text-lg font-bold leading-none">{s}</span>
                    <span
                      className={`mt-1 text-[0.68rem] ${active ? "text-white/80" : "text-ink-muted"}`}
                    >
                      unit · {SYRINGES[s].ml}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-ink-muted">{m.cfg.hint}</p>
          </div>
        </div>
      </div>

      {validation && (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm font-medium text-ink-soft"
        >
          {validation}
        </p>
      )}

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {statusText}
      </p>

      {/* RESULTS */}
      <div className="mt-6 rounded-card border border-line/70 bg-gradient-to-br from-lightblue/40 to-surface p-5 shadow-card sm:p-7">
        <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-navy">
          <Target className="h-5 w-5 text-brand" aria-hidden="true" />
          Your Draw
        </h2>

        <div className="grid gap-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-center">
          <div className="rounded-xl border border-line/70 bg-white p-5 text-center">
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-muted">
              Draw to
              <Tip label="About syringe units">
                Insulin-syringe units on the U-100 scale: 100 units = 1 mL, so 1
                unit = 0.01 mL. Fill until the plunger seal sits on this line.
              </Tip>
            </div>
            <div className="mt-1 flex items-baseline justify-center gap-1.5">
              <span className="text-5xl font-bold text-brand">
                {m.ok ? trim(m.units, 2) : "—"}
              </span>
              <span className="text-base text-ink-soft">units</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Stat k="Volume" v={m.ok ? `${trim(m.volumeMl, 3)} mL` : "—"} />
            <Stat
              k="Doses per vial"
              tip="Full doses only — total peptide in the vial divided by your dose, rounded down."
              v={m.ok ? String(m.dosesPerVial) : "—"}
            />
            <Stat k="Vial lasts" v={fmtDuration(m.durationDays)} />
          </div>
        </div>

        {/* to-scale syringe */}
        <div
          className="mt-6 overflow-x-auto rounded-xl border border-line/70 bg-white p-3"
          role="region"
          aria-label="Syringe draw scale"
          tabIndex={0}
        >
          <svg
            viewBox="0 0 560 132"
            className="h-auto w-full min-w-[460px]"
            role="img"
            aria-label={
              m.ok
                ? `Syringe filled to ${trim(m.units, 2)} units on a ${syringe}-unit barrel`
                : "Empty syringe"
            }
          >
            <defs>
              {/* cylindrical glass barrel */}
              <linearGradient id="pdcGlass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f3f6fa" />
                <stop offset="0.22" stopColor="#ffffff" />
                <stop offset="0.55" stopColor="#e4e9f0" />
                <stop offset="1" stopColor="#c4cedb" />
              </linearGradient>
              {/* cylindrical liquid */}
              <linearGradient id="pdcLiq" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6aa5f2" />
                <stop offset="0.22" stopColor="#8fbcf9" />
                <stop offset="0.55" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#1e40af" />
              </linearGradient>
              {/* brushed metal (needle, hub, flange, thumb) */}
              <linearGradient id="pdcMetal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#eef2f7" />
                <stop offset="0.32" stopColor="#c1cad7" />
                <stop offset="0.5" stopColor="#f6f9fc" />
                <stop offset="0.72" stopColor="#9dabbb" />
                <stop offset="1" stopColor="#7d8a9b" />
              </linearGradient>
              {/* plunger rod (plastic cylinder) */}
              <linearGradient id="pdcRod" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f1f4f8" />
                <stop offset="0.3" stopColor="#ffffff" />
                <stop offset="0.55" stopColor="#dbe2ea" />
                <stop offset="1" stopColor="#b4bfcd" />
              </linearGradient>
              {/* rubber piston */}
              <linearGradient id="pdcStopper" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3a55ac" />
                <stop offset="0.28" stopColor="#284394" />
                <stop offset="0.6" stopColor="#20356f" />
                <stop offset="1" stopColor="#152650" />
              </linearGradient>
              <radialGradient id="pdcGround" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#1e293b" stopOpacity="0.2" />
                <stop offset="1" stopColor="#1e293b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* soft ground shadow */}
            <ellipse cx="272" cy="97" rx="264" ry="8" fill="url(#pdcGround)" />

            {/* needle */}
            <path
              d="M2 62 L12 59.6 L34 59.6 L34 64.4 L12 64.4 Z"
              fill="url(#pdcMetal)"
            />
            <line
              x1="12"
              y1="60.5"
              x2="33"
              y2="60.5"
              stroke="#ffffff"
              strokeOpacity="0.6"
              strokeWidth="0.8"
            />
            {/* hub */}
            <path
              d="M34 53 L60 49 L60 75 L34 71 Z"
              fill="url(#pdcMetal)"
              stroke="#aeb9c6"
              strokeWidth="0.6"
            />
            <line
              x1="35"
              y1="55"
              x2="58"
              y2="51.5"
              stroke="#ffffff"
              strokeOpacity="0.55"
              strokeWidth="0.8"
            />

            {/* glass barrel body */}
            <rect x="60" y="39" width="380" height="46" rx="10" fill="url(#pdcGlass)" />

            {/* liquid */}
            <rect
              x={X0}
              y="41"
              width={BARREL_W}
              height="42"
              fill="url(#pdcLiq)"
              fillOpacity="0.92"
              style={{
                transformBox: "fill-box",
                transformOrigin: "left",
                transform: `scaleX(${m.fillFrac})`,
              }}
            />

            {/* tube sheen: top highlight + bottom shadow across glass and liquid */}
            <rect x="64" y="42.5" width="372" height="5" rx="2.5" fill="#ffffff" opacity="0.5" />
            <rect x="64" y="77" width="372" height="4" rx="2" fill="#334155" opacity="0.14" />

            {/* ticks */}
            <g>
              {ticks.map((t, i) => (
                <g key={i}>
                  <line
                    x1={t.x}
                    x2={t.x}
                    y1="41"
                    y2={t.major ? 59 : 51}
                    stroke={t.major ? "#5b6b7f" : "#9aa8b8"}
                    strokeWidth={t.major ? 1.4 : 1}
                  />
                  {t.major && (
                    <text
                      x={t.x}
                      y="100"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="11"
                    >
                      {t.u}
                    </text>
                  )}
                </g>
              ))}
            </g>

            {/* barrel outline + inner edge highlight */}
            <rect
              x="60"
              y="39"
              width="380"
              height="46"
              rx="10"
              fill="none"
              stroke="#b7c2d0"
              strokeWidth="1.4"
            />
            <rect
              x="61.5"
              y="40.5"
              width="377"
              height="43"
              rx="8.5"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.6"
              strokeWidth="1"
            />

            {/* finger flange */}
            <rect
              x="438"
              y="24"
              width="8"
              height="76"
              rx="3"
              fill="url(#pdcMetal)"
              stroke="#aeb9c6"
              strokeWidth="0.5"
            />
            <rect x="439.5" y="25.5" width="1.6" height="73" rx="0.8" fill="#ffffff" opacity="0.5" />

            {/* plunger rod (horizontal cylinder) */}
            <rect
              x={82 + offset}
              y="55"
              width={Math.max(ROD_END - (82 + offset), 2)}
              height="14"
              rx="4"
              fill="url(#pdcRod)"
              stroke="#b7c2d0"
              strokeWidth="0.5"
            />
            <rect
              x={82 + offset}
              y="57.4"
              width={Math.max(ROD_END - (82 + offset), 2)}
              height="2.2"
              rx="1.1"
              fill="#ffffff"
              opacity="0.6"
            />

            {/* rubber piston */}
            <g style={{ transform: `translateX(${offset}px)` }}>
              <rect x={X0 - 1} y="40.5" width="14" height="43" rx="4" fill="url(#pdcStopper)" />
              <rect x={X0 - 1} y="49" width="14" height="2" fill="#0f1e45" opacity="0.5" />
              <rect x={X0 - 1} y="73" width="14" height="2" fill="#0f1e45" opacity="0.5" />
              <rect x={X0} y="42.5" width="3.4" height="39" rx="1.7" fill="#8ea3dd" opacity="0.6" />
            </g>

            {/* thumb rest */}
            <rect
              x="531"
              y="31"
              width="11"
              height="62"
              rx="4"
              fill="url(#pdcMetal)"
              stroke="#aeb9c6"
              strokeWidth="0.5"
            />
            <rect x="532.5" y="33" width="2" height="58" rx="1" fill="#ffffff" opacity="0.5" />

            {/* draw arrow */}
            {m.ok && (
              <path
                d="M68 25 l7 10 h-14 Z"
                fill="#2563eb"
                style={{ transform: `translateX(${offset}px)` }}
              />
            )}

            <text
              x="250"
              y="127"
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="10"
              letterSpacing="1.5"
            >
              UNITS · U-100 SCALE
            </text>
          </svg>
        </div>

        {/* guidance */}
        {m.ok && (
          <div className="mt-4 space-y-2 text-sm">
            <p className={m.onMark ? "text-success" : "text-ink-soft"}>
              {m.onMark ? "Exact: " : "Nearest mark: "}
              <strong className="text-ink">
                {trim(m.markUnits, 2)} units = {trim(m.markDoseMcg, 1)} mcg
              </strong>{" "}
              ({signedPct(m.markPct)}).
            </p>
            {m.overflow && (
              <p className="font-medium text-error">
                This draw is larger than the {syringe}-unit syringe holds. Add
                more bacteriostatic water, split the dose, or use a larger
                barrel.
              </p>
            )}
            {m.recommend && (
              <p>
                <button
                  type="button"
                  onClick={applyRecommend}
                  className="btn-ghost inline-flex items-center gap-1"
                >
                  Better fit: {m.recommend}-unit syringe (
                  {SYRINGES[m.recommend].mark === 0.5
                    ? "½-unit"
                    : `${SYRINGES[m.recommend].mark}-unit`}{" "}
                  marks) →
                </button>
              </p>
            )}
          </div>
        )}

        <div className="mt-6 border-t border-line/60 pt-5">
          <button
            type="button"
            onClick={copySummary}
            disabled={!m.ok}
            className="btn btn-light disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-success" aria-hidden="true" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy protocol summary
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ k, v, tip }: { k: string; v: string; tip?: string }) {
  return (
    <div className="rounded-xl border border-line/70 bg-white p-3 text-center">
      <div className="text-[0.68rem] font-semibold uppercase tracking-wide text-ink-muted">
        {k}
        {tip && <Tip label={`About ${k.toLowerCase()}`}>{tip}</Tip>}
      </div>
      <div className="mt-1 text-lg font-bold text-navy">{v}</div>
    </div>
  );
}
