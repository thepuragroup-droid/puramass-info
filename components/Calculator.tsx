"use client";

import { useMemo, useState } from "react";

type DoseUnit = "mcg" | "mg";

function fmt(n: number, digits = 1) {
  if (!isFinite(n)) return "—";
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });
}

export function Calculator() {
  const [pepMg, setPepMg] = useState("10");
  const [bacMl, setBacMl] = useState("2");
  const [dose, setDose] = useState("250");
  const [doseUnit, setDoseUnit] = useState<DoseUnit>("mcg");
  const [syringe, setSyringe] = useState("100");

  const result = useMemo(() => {
    const peptide = parseFloat(pepMg);
    const water = parseFloat(bacMl);
    const doseVal = parseFloat(dose);
    const syr = parseFloat(syringe);

    if (!(peptide > 0) || !(water > 0) || !(doseVal > 0)) {
      return { ok: false as const };
    }

    const concMcgPerMl = (peptide / water) * 1000;
    const concMgPerMl = peptide / water;
    const doseMcg = doseUnit === "mg" ? doseVal * 1000 : doseVal;
    const volumeMl = doseMcg / concMcgPerMl;
    const units = volumeMl * 100;
    const dosesPerVial = (peptide * 1000) / doseMcg;

    let warn = "";
    if (units > syr) {
      warn = `That draw (${fmt(units)} units) exceeds your ${syr}-unit syringe. Add more BAC water or split the dose.`;
    }

    return {
      ok: true as const,
      units,
      volumeMl,
      concMcgPerMl,
      concMgPerMl,
      dosesPerVial,
      warn,
    };
  }, [pepMg, bacMl, dose, doseUnit, syringe]);

  const fieldCls =
    "w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40";
  const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/70";

  return (
    <div className="rounded-card border border-white/10 bg-white/[0.04] p-5 shadow-card backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Peptide in vial (mg)</label>
          <input
            type="number"
            step="any"
            min={0}
            value={pepMg}
            onChange={(e) => setPepMg(e.target.value)}
            className={fieldCls}
          />
        </div>
        <div>
          <label className={labelCls}>BAC water (mL)</label>
          <input
            type="number"
            step="any"
            min={0}
            value={bacMl}
            onChange={(e) => setBacMl(e.target.value)}
            className={fieldCls}
          />
        </div>
        <div>
          <label className={labelCls}>Desired dose</label>
          <div className="flex gap-2">
            <input
              type="number"
              step="any"
              min={0}
              value={dose}
              onChange={(e) => setDose(e.target.value)}
              className={`${fieldCls} min-w-0 flex-1`}
            />
            <select
              value={doseUnit}
              onChange={(e) => setDoseUnit(e.target.value as DoseUnit)}
              className={`${fieldCls} w-auto flex-none`}
              aria-label="Dose unit"
            >
              <option value="mcg">mcg</option>
              <option value="mg">mg</option>
            </select>
          </div>
        </div>
        <div>
          <label className={labelCls}>Syringe size</label>
          <select
            value={syringe}
            onChange={(e) => setSyringe(e.target.value)}
            className={fieldCls}
            aria-label="Syringe size"
          >
            <option value="100">1 mL — 100u</option>
            <option value="50">0.5 mL — 50u</option>
            <option value="30">0.3 mL — 30u</option>
          </select>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-gradient-to-br from-brand to-navy p-5 ring-1 ring-white/10">
        {result.ok ? (
          <>
            <div className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/70">
              Draw to
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-4xl font-bold text-white">{fmt(result.units)}</span>
              <span className="text-base text-white/80">units</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-lightblue">
              Draw to <b className="text-white">{fmt(result.units)} units</b> on a U-100 insulin
              syringe ({fmt(result.volumeMl, 3)} mL). Concentration:{" "}
              <b className="text-white">{fmt(result.concMcgPerMl)} mcg/mL</b> (
              {fmt(result.concMgPerMl, 2)} mg/mL). Approx.{" "}
              <b className="text-white">{fmt(result.dosesPerVial, 0)}</b> doses per vial.
            </p>
            {result.warn && (
              <p className="mt-2.5 text-[0.82rem] font-semibold text-[#ffd2d8]">{result.warn}</p>
            )}
          </>
        ) : (
          <p className="text-sm text-lightblue">
            Enter a peptide amount, water volume, and dose (all greater than zero) to see your
            draw volume.
          </p>
        )}
      </div>
    </div>
  );
}
