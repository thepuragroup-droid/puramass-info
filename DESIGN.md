# Peptide Information Website — Design & Build Spec

> Reference document for building the Next.js peptide reconstitution & dosing
> reference site. This is the single source of truth for visual identity,
> content architecture, component behavior, and calculator logic.

---

## 1. Product Overview

An **independent, educational reference library** for peptide reconstitution
and dosing protocols, compiled from peer-reviewed literature and primary
sources. It is **not** a store and **not** medical advice.

**Positioning:** scientific credibility, medical professionalism, modern
simplicity. Should feel like a blend of **modern healthcare platforms,
premium SaaS products, and biotechnology companies** — trustworthy and
evidence-based, never commercial or "bro-science."

**Mandatory framing:** every page carries a research-use disclaimer —
"For laboratory & in-vitro research use only — not for human or veterinary
use." Compounds are described as investigational, not approved for human use.

---

## 2. Content Architecture / Sitemap

```
/                                   Home
/single-peptide-dosages/            Index of single-peptide protocols
  /single-peptide-dosages/[slug]    e.g. retatrutide-10mg, tirzepatide-10mg,
                                    bpc-157-10mg, tb-500-10mg, mots-c-10mg,
                                    ghk-cu-50mg, semax-10mg, selank-10mg
/peptide-blend-dosages/             Index of blend protocols
  /peptide-blend-dosages/[slug]     e.g. bpc-157-tb-500-20mg (Wolverine),
                                    glow-70mg, klow-80mg,
                                    cjc-1295-no-dac-ipamorelin-10mg
/guides/beginners-guide             Beginner's guide
/guides/reconstitution-guide        Reconstitution guide
/guides/syringe-measurement-guide   Syringe & measurement
/guides/storage-guide               Storage guide
/guides/dosage-chart                Master dosage chart
/guides/glossary                    Glossary
/guides/faq                         FAQ
/learn/                             Compound library (index + entries)
/calculator                        Reconstitution calculator (interactive)
/legal/privacy-policy
/legal/terms-conditions
/legal/shipping-payments
/legal/refund-returns
/legal/disclaimer
/legal/cookie-policy
/legal/accessibility
```

**Primary nav:** Home · Single Peptides (dropdown) · Blends (dropdown) ·
Learn (dropdown) · Calculator · FAQ, plus a "Dose Calculator" CTA button.

**Footer:** brand + tagline, Protocols column, Learn column, newsletter
signup, full research-use disclaimer, © line, legal links.

---

## 3. Design Philosophy

Convey **scientific credibility, medical professionalism, and modern
simplicity**. Prioritize clarity, readability, and confidence. Use generous
whitespace and a restrained palette to make complex health info easy to
understand.

**Keywords:** Professional · Clinical · Scientific · Modern · Minimal ·
Premium · Trustworthy · Clean · Accessible · Data-driven.

**Avoid:** flashy visuals, excessive gradients, over-saturated colors. Every
element should feel purposeful and refined.

---

## 4. Color Palette (Design Tokens)

### Primary
| Purpose        | Name         | Hex       |
| -------------- | ------------ | --------- |
| Primary Brand  | Medical Blue | `#2563EB` |
| Primary Hover  | Deep Blue    | `#1D4ED8` |
| Heading Color  | Navy         | `#1E3A8A` |

### Secondary
| Purpose               | Hex       |
| --------------------- | --------- |
| Light Blue Background | `#DBEAFE` |
| Accent Blue           | `#60A5FA` |
| White                 | `#FFFFFF` |

### Neutral
| Purpose         | Hex       |
| --------------- | --------- |
| Primary Text    | `#0F172A` |
| Secondary Text  | `#334155` |
| Muted Text      | `#64748B` |
| Borders         | `#CBD5E1` |
| Background Gray | `#F8FAFC` |

### Status (use sparingly, for meaning not decoration)
| Purpose | Hex       |
| ------- | --------- |
| Success | `#10B981` |
| Warning | `#F59E0B` |
| Error   | `#EF4444` |

### Suggested CSS variables
```css
:root {
  --brand: #2563EB;
  --brand-hover: #1D4ED8;
  --heading: #1E3A8A;
  --bg-light-blue: #DBEAFE;
  --accent: #60A5FA;
  --text: #0F172A;
  --text-secondary: #334155;
  --text-muted: #64748B;
  --border: #CBD5E1;
  --bg-gray: #F8FAFC;
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
}
```

---

## 5. Typography

- **Font:** Inter (primary), Manrope (alternative). Load via `next/font`.
- Large, bold headings with generous spacing.
- Body line-height **1.6–1.8**.
- Hierarchy through **size and weight**, not color variation.
- No serif or decorative fonts.

Suggested scale (rem): h1 3.0 / h2 2.0 / h3 1.5 / body 1.0 / small 0.875.

---

## 6. Layout

- 12-column responsive grid.
- Max content width **1280px** (`.wrap`); a narrower reading width (~720px)
  for prose (`.wrap.narrow`).
- Generous whitespace; consistent alignment and spacing.
- Soft visual separation between sections (background shifts, light dividers)
  rather than heavy borders.
- Alternating section backgrounds: white ↔ `--bg-gray` / `--bg-light-blue`.

---

## 7. Components

### Cards
- 16px border radius, soft shadow, light border, comfortable padding.
- Smooth hover elevation + subtle scale on hover.

### Buttons
- **Primary:** brand blue, high contrast, rounded, hover → `--brand-hover`.
- **Secondary:** outlined, subtle hover fill.
- **Text:** understated, for nav/supporting actions.

### Search
- Rounded input, soft border, search icon, clear placeholder.
- Autocomplete support; strong focus ring in primary blue.

### Badges
- Soft background, subtle contrast. Labels: Experimental · Research Only ·
  Popular · Clinical · New.

### Information Panels (callouts)
- Contextual callouts with a subtle colored accent, visually lightweight.
- Types: Clinical Notes · Research Summary · Safety Information · Best Practices.

### Data Tables
- Minimal borders, optional alternating row backgrounds, strong label
  hierarchy, comfortable spacing, responsive (scroll/stack on mobile).

---

## 8. Icons

Simple outline icons, thin stroke, rounded edges, consistent sizing
(recommend **lucide-react**). Themes: DNA · Molecule · Microscope · Heart ·
Brain · Shield · Flask · Laboratory · Clock · Book · Pill.

---

## 9. Imagery

**Use:** molecular structures, lab environments, scientific illustrations,
cellular imagery, medical diagrams, minimal biotech graphics.

**Avoid:** bodybuilding imagery, overly-happy patient stock photos, fitness
influencers, loud promo graphics, medical clichés.

---

## 10. Motion & Interaction

Subtle and purposeful: smooth page transitions, soft fade-ins, gentle hover
elevation, light scaling on interactive elements, smooth color transitions,
responsive button feedback. Motion enhances usability, never distracts.
Respect `prefers-reduced-motion`.

---

## 11. Reconstitution Calculator (interactive)

Route: `/calculator`. Pure client-side math, no backend.

### Inputs
| Field                     | Type            | Default |
| ------------------------- | --------------- | ------- |
| Peptide in vial (mg)      | number ≥ 0      | 10      |
| Bacteriostatic water (mL) | number ≥ 0      | 2       |
| Desired dose + unit       | number + select | 250 mcg |
| Dose unit                 | mcg \| mg       | mcg     |
| Syringe size              | 100 \| 50 \| 30 units | 100 (1 mL) |

### Outputs
- **Units to draw** on a U-100 syringe (headline).
- Volume in mL.
- Concentration in mcg/mL and mg/mL.
- Approximate doses per vial.
- Warning line (e.g. draw exceeds selected syringe capacity).

### Formulas
```
concentration_mg_per_mL  = peptide_mg / water_mL
concentration_mcg_per_mL = concentration_mg_per_mL * 1000
dose_mcg                 = (unit == "mg") ? dose * 1000 : dose
volume_mL                = dose_mcg / concentration_mcg_per_mL
units_U100               = volume_mL * 100
doses_per_vial           = (peptide_mg * 1000) / dose_mcg
```

### Worked example
10 mg vial + 2 mL water → 5 mg/mL = 5000 mcg/mL. For 250 mcg:
250 ÷ 5000 = 0.05 mL = **5 units**. Vial holds 10,000 ÷ 250 = **40 doses**.

### Edge cases
- Water or peptide = 0 → show guidance instead of Infinity/NaN.
- `units_U100 > syringe` → warning: split dose or add more water.
- Round units to 1 decimal; concentration to sensible precision.

---

## 12. Recommended Tech Stack

- **Next.js (App Router)** + TypeScript.
- **Tailwind CSS** with the tokens above mapped into `tailwind.config`.
- **next/font** for Inter/Manrope.
- **lucide-react** for icons.
- Content as MDX or typed data files (protocols/guides are structured data).
- Calculator as a client component (`"use client"`).
- Static generation (SSG) for all content pages; strong SEO metadata.

---

## 13. Content Data Model (protocols)

Each single-peptide / blend page should render from a typed record, e.g.:

```ts
type Protocol = {
  slug: string;
  name: string;              // "BPC-157"
  category: "single" | "blend";
  vialSizeMg: number;        // e.g. 10
  badges: Badge[];           // ["Research Only", "Popular"]
  summary: string;
  reconstitution: { waterMl: number; concentration: string };
  dosing: { min: string; typical: string; frequency: string };
  notes: string[];           // clinical notes, safety, best practices
  references: { label: string; url: string }[];
};
```

This keeps every protocol page consistent and lets the Master Dosage Chart
and Calculator share the same source data.
