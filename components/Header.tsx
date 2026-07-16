"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { mainNav } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50">
      {/* Research-use topbar */}
      <div className="bg-navy px-4 py-2 text-center text-[0.72rem] font-medium tracking-wide text-white/85">
        For laboratory &amp; in-vitro research use only — not for human or veterinary use
      </div>

      <header className="border-b border-line/70 bg-white/90 backdrop-blur">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <Brand />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand"
                      : "text-ink-soft hover:text-brand"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full min-w-56 translate-y-1 rounded-2xl border border-line/70 bg-white p-2 opacity-0 shadow-card transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/calculator" className="btn btn-primary hidden sm:inline-flex">
              Dose Calculator
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="border-t border-line/70 bg-white lg:hidden">
            <div className="wrap flex flex-col py-3">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-line/40 last:border-0">
                  {item.children ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-navy"
                        onClick={() =>
                          setExpanded((e) => (e === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expanded === item.label && (
                        <div className="pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 pl-3 text-sm text-ink-soft hover:text-brand"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm font-semibold text-navy hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/calculator"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-4"
              >
                Dose Calculator
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
