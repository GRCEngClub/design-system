# GRC Engineering Club — Design System

> **Portable reference.** This single file contains everything an LLM (or a human) needs to design on-brand for the GRC Engineering Club — brand rules, tokens, typography, components, iconography, and content conventions — without needing to browse the rest of this repo. Paste it into a project's context, or hand it to any other LLM as a system/reference document. (Note: this repo does not currently ship a `SKILL.md` manifest, so dropping this file into `.claude/skills/` will not auto-load it as a Claude Code skill — see [`PUBLISHING.md`](PUBLISHING.md) for that setup.)
>
> Source repo: this design system backs [grcengclub.com](https://grcengclub.com), the [claude-grc-engineering](https://github.com/GRCEngClub/claude-grc-engineering) docs, Academy surfaces, slide decks, and merch.

---

## 1. Brand identity in one paragraph

GRC Engineering Club is **builder-energy, not vendor-energy**. One accent color (orange), dark-mode-only, Inter in heavy weights for display type, Lucide line icons, zero emoji. Gradients are restricted to approved single-hue exceptions: the orange-to-orange-light ramp (progress bars, avatar fills), its transparent fade (`.card.featured`), and the orange/gray conic-gradient used for donut progress — never a second hue, never decorative. The voice is direct, imperative, second-person: *"Stop scrolling, start engineering."* *"From checkbox GRC to engineered systems."*

### Core rules — do not violate

1. **One accent color only: orange `#E8650A`.** No bluish-purple gradients, no multi-color palettes. Orange lives on CTAs, link text, eyebrows, icons, and accent spans like `<span class="text-brand-orange">Club</span>`.
2. **Dark mode only.** Page `#0D0D0D`, alt section `#1A1A1A`, cards `#2A2A2A`. Sections alternate page/alt background for vertical rhythm.
3. **Typography is Inter, heavy weights for display** (800/900). Display headlines use tight tracking (`-0.02em`). Eyebrows are UPPERCASE orange with wide tracking.
4. **Iconography is Lucide line icons** at default stroke width. When emphasized, icons sit in a `rounded-full` orange/10 circular well. **No emoji, ever.**
5. **Card recipe:** `background: #2A2A2A` + `border: 1px solid #3A3A3A` + `border-radius: 12px` (`rounded-xl`) + `padding: 24px` + `hover:border-orange/50`. No drop shadows on cards — shadows are reserved for primary CTAs (warm orange glow).
6. **Voice is builder-energy:** direct, imperative, second-person. Never vendor-speak, never corporate-safe.

---

## 2. Design tokens

Drop this CSS in as-is, or read off the values below if working outside CSS (React Native, Figma, another framework, etc).

### 2.1 Color

```css
:root {
  /* Brand */
  --grc-orange:        #E8650A;   /* primary brand — CTAs, links, eyebrows, icons */
  --grc-orange-light:  #FF8533;   /* hover state, accents */
  --grc-orange-dark:   #C45200;   /* pressed state, deeper accent */

  /* Neutral surface scale (dark-first) */
  --grc-dark:          #0D0D0D;   /* page background */
  --grc-dark-alt:      #1A1A1A;   /* alternating section bg */
  --grc-gray:          #2A2A2A;   /* card surface */
  --grc-gray-light:    #3A3A3A;   /* card border, dividers */

  /* Foreground / text */
  --grc-text:          #F5F5F5;   /* default text on dark */
  --grc-text-muted:    #A0A0A0;   /* secondary / body copy */
  --grc-white:         #FFFFFF;   /* high-emphasis text, button labels */

  /* Semantic foreground tokens */
  --fg-1: var(--grc-white);       /* hi-emphasis headings */
  --fg-2: var(--grc-text);        /* body text */
  --fg-3: var(--grc-text-muted);  /* muted / secondary text */
  --fg-accent: var(--grc-orange); /* links, eyebrows, accents */

  /* Semantic surface tokens */
  --bg-page:    var(--grc-dark);
  --bg-section: var(--grc-dark-alt);
  --bg-card:    var(--grc-gray);
  --bg-tint:    color-mix(in oklch, var(--grc-orange) 10%, transparent);

  /* Borders */
  --border-default: var(--grc-gray-light);
  --border-accent:  var(--grc-orange);
  --border-subtle:  color-mix(in oklch, var(--grc-gray-light) 50%, transparent);
}
```

Common derived opacities used throughout the UI kits (not raw tokens, but consistent conventions):
- `rgba(232,101,10,.10)` — icon well / chip background (orange/10)
- `rgba(232,101,10,.12)` — active nav item / "up next" card background
- `rgba(232,101,10,.20)` — stronger chip background (orange/20)
- `rgba(232,101,10,.25)` → `.35` on hover — CTA glow shadow
- `rgba(232,101,10,.5)` — card hover border

### 2.2 Radii

```css
:root {
  --radius-sm:   6px;     /* small chips, pill labels */
  --radius-md:   8px;     /* buttons (rounded-lg) */
  --radius-lg:   12px;    /* cards (rounded-xl) */
  --radius-pill: 9999px;  /* chips, icon wells, avatars, progress bars */
}
```

### 2.3 Shadows

Soft black for elevation, warm orange glow reserved for primary CTAs only. **Cards never get drop shadows** — only a border-color change on hover.

```css
:root {
  --shadow-card:       0 4px 12px rgba(0, 0, 0, 0.3);  /* defined in tokens but NOT applied to cards — reserved for other elevated surfaces (e.g. modals, dropdowns) if needed; cards use border-color only */
  --shadow-cta:        0 8px 24px rgba(232, 101, 10, 0.25);
  --shadow-cta-hover:  0 12px 32px rgba(232, 101, 10, 0.35);
}
```

### 2.4 Spacing scale (Tailwind-aligned, px)

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;    /* card padding */
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;   /* section vertical padding (py-20) */
  --space-24: 96px;
}
```

### 2.5 Typography

**Font family:** `'Inter', system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` for all UI text. Monospace (`ui-monospace, "SF Mono", Menlo, Consolas, monospace`) for code, kbd, and label/meta micro-text.

Inter is vendored locally as `.woff2` (weights 400/500/600/700/800/900) — no Google Fonts dependency required, though a Google Fonts `@import` is included as a fallback.

**Type scale (px @ 16px base):**

```css
:root {
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;
  --text-5xl: 48px;
  --text-6xl: 60px;
  --text-7xl: 72px;
}
```

**Weights:** 400 regular, 500 medium, 600 semibold, 700 bold, 800 extrabold, 900 black. Display type (h1, hero headlines) favors 900 (black); h2 favors 800 (extrabold); h3/h4 and nav/labels favor 700/600.

**Line heights:** tight `1.1` (display), snug `1.25` (h2/h3), normal `1.5`, relaxed `1.65` (body copy, ledes).

**Tracking:** tight `-0.02em` (all display headings), normal `0`, wider `0.05em`, widest `0.1em` (eyebrows, uppercase micro-labels use `0.08em`–`0.15em`).

**Semantic type rules:**

| Element | Weight | Size | Notes |
|---|---|---|---|
| `.h-display` / hero `h1` | 900 (black) | `clamp(40px, 6vw, 72px)` | line-height 1.1, tracking -0.02em |
| `h1` | 900 (black) | `clamp(32px, 4.5vw, 60px)` | line-height 1.1, tracking -0.02em |
| `h2` | 800 (extrabold) | `clamp(28px, 3.5vw, 48px)` | line-height 1.25, tracking -0.02em |
| `h3` | 700 (bold) | 20px | line-height 1.25 |
| `h4` | 700 (bold) | 18px | |
| `.eyebrow` | 700 (bold) | 12px | uppercase, letter-spacing 0.05em, color `--fg-accent` |
| `.lede` | 400 | `clamp(18px, 1.75vw, 24px)` | line-height 1.65, color `--fg-3` |
| body / `p` | 400 | 16px | line-height 1.65, color `--fg-3` |
| `small` | 400 | 14px | color `--fg-3` |
| `code`/`kbd`/`pre` | mono | 0.95em | orange/10 background, orange text, `--radius-sm` |

Full `@font-face` + semantic CSS block lives in [`colors_and_type.css`](colors_and_type.css) — copy that file directly into a new project's token system rather than hand-retyping it.

---

## 3. Iconography

- **Lucide line icons only**, default stroke width, loaded via `<script src="https://unpkg.com/lucide@1.28.0">` + `lucide.createIcons()` (or the React wrapper pattern below). Pin an explicit version — `@latest` is a mutable tag, so a copy-pasted `<script>` tag can silently start executing different code later. Check [npmjs.com/package/lucide](https://www.npmjs.com/package/lucide) for the current version before adopting. For production use, prefer vendoring the file locally or adding a `<script>` `integrity` (SRI) hash.
- **No emoji, ever**, anywhere in product UI, marketing copy, or slides.
- When an icon needs emphasis, wrap it in a circular "well": `border-radius: 9999px`, background `rgba(232,101,10,.10)`, color `--fg-accent` (orange). Standard well sizes: 36px (sm), 48px (default), 60px (lg) — icon glyph sized to ~50% of the well.
- Common icon vocabulary used across the product: `shield`, `zap`, `cloud`, `users`, `flask-conical`, `book-open`, `graduation-cap`, `mic`, `layout-dashboard`, `clipboard-check`, `check-circle-2`, `flame`, `award`, `message-circle`, `arrow-right`, `play`, `clock`, `hammer`, `file-check-2`, `git-branch`.

React wrapper pattern:

```jsx
function Icon({ name, size = 20, ...rest }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex' }} {...rest}></i>;
}
```

The `[name]` dependency array keeps `createIcons()` (a DOM-scanning pass) from rerunning on every render — it only reruns when the icon actually changes. For larger React apps, prefer the official [`lucide-react`](https://lucide.dev/guide/packages/lucide-react) package over this DOM-replacement approach.

---

## 4. Component patterns

All components below use the raw hex/rgba values from §2.1 directly (as the production JSX does) or the CSS custom properties (as the HTML preview cards do) — both are equivalent and interchangeable.

### 4.1 Buttons

Three variants (primary, secondary, ghost), three sizes. Primary is always solid orange with a glow shadow; secondary is an orange outline that fills solid on hover; ghost is a low-emphasis neutral fill (see below).

```css
.btn            { display:inline-flex; align-items:center; justify-content:center; gap:6px;
                   font-weight:700; border-radius:8px; cursor:pointer; transition: all 200ms ease; border:0; }
.btn.primary    { background:#E8650A; color:#0D0D0D; box-shadow: 0 8px 24px rgba(232,101,10,.25); }
.btn.primary:hover   { background:#FF8533; box-shadow: 0 12px 32px rgba(232,101,10,.35); }
.btn.secondary  { background:transparent; color:#E8650A; border:2px solid #E8650A; }
.btn.secondary:hover { background:#E8650A; color:#0D0D0D; }

.btn.lg { padding:14px 28px; font-size:16px; }
.btn.md { padding:12px 24px; font-size:15px; }  /* default */
.btn.sm { padding:8px 16px;  font-size:13px; }
```

A third **ghost** variant appears in product surfaces (cert platform): `background: #2A2A2A; color: #F5F5F5; border: 1px solid #3A3A3A;` — used for secondary in-app actions where an orange outline would be too loud.

### 4.2 Cards

```css
.card {
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 300ms ease;
}
.card:hover { border-color: rgba(232,101,10,.5); }

/* Featured / highlighted variant — "Most Popular", "Recommended" */
.card.featured {
  background: linear-gradient(180deg, rgba(232,101,10,.10), transparent);
  border-color: #E8650A;
}
```

No drop shadows on cards, ever — elevation is communicated with a border-color shift only.

### 4.3 Chips / pills / eyebrow badges

```css
.chip {
  display: inline-flex; align-items: center; gap: 6px;
  font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: .05em;
  color: #E8650A; background: rgba(232,101,10,.10);
  padding: 6px 12px; border-radius: 9999px;
}
.chip.outline { background: transparent; border: 1px solid #E8650A; }
.chip.solid   { background: #E8650A; color: #fff; }
```

### 4.4 Navigation bar

Sticky, translucent, blurred, orange active-state on the current link, primary CTA button on the right.

```css
.nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(13,13,13,.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(58,58,58,.5);
  height: 64px;
}
```

Nav link color: `--fg-3` (muted) by default, `--fg-accent` (orange) when active, transition `color 200ms`. Logo is 40×40 (marketing) or 36×36 (product), `border-radius: 8px`, `object-fit: cover`.

Product surfaces (Academy/cert platform) use a **tab-style** nav instead of the marketing dropdown menu: each item is a pill button, `background: rgba(232,101,10,.12)` + orange text when active, transparent + muted text when inactive.

### 4.5 FAQ / accordion

Row: `background: var(--bg-card)`, `border: 1px solid var(--border-default)`, `border-radius: 12px`, `padding: 12px 14px`, hover → `background: rgba(58,58,58,.5)`. Chevron is orange (`--fg-accent`) and rotates 180° when open. Answer text: `--fg-3`, 12px, line-height 1.6.

### 4.6 Stat tiles

Grid of cards, centered content, big orange number, small uppercase muted label:

```css
.stat { background: var(--bg-card); border: 1px solid var(--border-default); border-radius: 12px; padding: 16px; text-align: center; }
.stat .num { color: var(--fg-accent); font-weight: 900; font-size: 28px; letter-spacing: -.02em; }
.stat .lbl { color: var(--fg-3); font-size: 11px; text-transform: uppercase; letter-spacing: .06em; font-weight: 600; margin-top: 6px; }
```

### 4.7 Story / testimonial card

Quote icon (orange), italic quote in `--fg-2`, divider, then bold name + muted title/role.

### 4.8 Progress bar / donut

Linear bar: track `background: #2A2A2A`, fill `linear-gradient(90deg, #E8650A, #FF8533)`, `border-radius: 9999px`, height 4px (sm) or 8px (default).

Circular/donut progress (used on the Academy dashboard): `conic-gradient(#E8650A 0% <pct>%, #3A3A3A <pct>% 100%)` ring with a solid `#2A2A2A` inner circle showing the percentage.

### 4.9 Footer

`background: #1A1A1A`, top border `rgba(58,58,58,.3)`, 4-column grid (brand blurb + 3 link columns), uppercase muted column headings (`letter-spacing: .08em`), copyright line at 11px.

---

## 5. Layout conventions

- **Max content width:** 1280px, centered (`margin: 0 auto`), with 24px horizontal gutters.
- **Section rhythm:** alternate `--bg-page` (`#0D0D0D`) and `--bg-section` (`#1A1A1A`) section-by-section down the page for visual separation without borders.
- **Section vertical padding:** `--space-20` (80px) is the default for marketing sections (`py-20`).
- **Grids:** 2, 3, or 4 columns depending on content density (content tiles are commonly a 2×2 or 3×2 grid; stat tiles are a 4-column row; leadership/merch grids run 4–5 columns).

---

## 6. Copywriting / voice

- **Direct, imperative, second-person.** Talk *to* the reader, tell them what to do.
- Signature lines: *"Stop scrolling, start engineering."* · *"From checkbox GRC to engineered systems."*
- **Never vendor-speak.** No "leverage synergies," no soft corporate hedging. This is a builders' club, not a SaaS landing page.
- Eyebrows and section labels are terse, UPPERCASE, and orange (e.g. "YOUR PATH", "UP NEXT", "CHAPTER 01").
- Numbers/stats are used generously and boldly (salary figures, member counts, pass rates) — they carry credibility, so give them visual weight (900-weight orange numerals).

---

## 7. Assets

| Asset | Usage |
|---|---|
| `assets/logo.jpeg` | Square wordmark logo. Nav + favicon usage. 40×40 (marketing nav) / 36×36 (product nav), `border-radius: 8px`. |
| `assets/brand-mark-orange.jpg` | Expressive glowing-orange iconography on near-black (shield, gears, gavel, code-tags, clipboards). The most visually "expressive" the brand ever gets. Use sparingly — hero/cover/about only. |
| `assets/leadership/*.jpeg,png` | Team headshots, square crop, `border-radius: 12px`, 1:1 aspect ratio. |
| `assets/merch/*.jpg` | Product photography (Run GRC tees, hoodies, mugs, "Engineered, Not Documented" apparel). Square crop, white background bleed is acceptable since photos are pre-shot on white. |
| `fonts/inter-{400,500,600,700,800,900}.woff2` | Vendored Inter — no Google Fonts dependency required. |

**Licensing note:** code, CSS tokens, and slide/UI-kit source are MIT-licensed. Brand assets (logo, wordmark, orange brand mark, leadership headshots, merch photography) are **not** MIT-licensed — they belong to the individuals and the Club and should not be reused outside Club-representing work without permission.

---

## 8. Reusable surfaces built on this system

These aren't just references — they're existing implementations to copy from or extend when building something new.

### 8.1 Marketing site (`ui_kits/website/`)

Recreates grcengclub.com: Home, Academy, Member Stories, Join, FAQ, as a single click-through React prototype.

- **Shared components:** `ReviewBanner` (rotating testimonial strip, solid `#f97316` background — a documented one-off exception, not the `--grc-orange` token; treat as a bug to fix upstream rather than a pattern to copy), `Navbar`, `CTAButton`, `SectionHeading` (centered eyebrow + h2 + subtitle), `ContentCard`, `StoryCard`, `Footer`, `Icon`.
- **Conventions:** two alternating background tones per section (`#0D0D0D` / `#1A1A1A`); cards `#2A2A2A` bg / `#3A3A3A` border, hover → `rgba(232,101,10,.5)` border; all icons Lucide, wrapped in orange `bg-orange/10` wells when emphasized; CTAs always solid orange with the glow shadow; display headings Inter Black 900, tracking-tight.

### 8.2 Cert platform / Academy (`ui_kits/certplatform/`)

Recreates the authenticated product experience for the CGE-P certification: Dashboard, Course outline, Lesson player, Labs, Exam readiness.

- **Shared components:** `AcademyNav` (product-style sticky tab bar, not the marketing dropdown), `AcademyButton` (primary/secondary/ghost), `Chip`, `Avatar` (gradient-fill circular initials), `Progress` (linear + conic-gradient donut), `Dashboard`.
- **Conventions:** same dark/orange tokens as marketing; progress visuals use the orange→orange-light gradient; every route change re-runs `lucide.createIcons()`.
- **Provenance note:** this kit is a brand-consistent *proposal*, not a 1:1 recreation of production code — swap components for real source as it becomes available.

### 8.3 Slide decks (`slides/`)

12 brand-ready templates: Title, Section, Problem, Approach, Stat, Quote, Certification, Roadmap, Code, Comparison, Pillars, Closer. Built on a custom `<deck-stage>` web component authored at a fixed 1920×1080 canvas, auto-scaled to fit the viewport, with keyboard nav, speaker notes, and print-to-PDF support (one slide per page).

Shared slide primitives: `slideRoot()` (72px/96px padding container), `Eyebrow`, `FootChrome` (logo + club name + page counter footer), `Pill`. Copy a slide file, swap the content, keep the tokens and chrome.

---

## 9. Quickstart — dropping this system into a new project

1. Copy `colors_and_type.css` into the new project's token system (or transcribe §2 above if CSS custom properties aren't available in that stack).
2. Copy `fonts/` to static assets and point `@font-face` at the relative path.
3. Use `preview/*.html` as a visual regression baseline while building new components — each file is a small, dependency-free reference card for one token or component category (colors, type, spacing, buttons, cards, nav, FAQ, stats, icons, shadows).
4. For slide decks, copy a file from `slides/`, swap the content, keep the tokens and `<deck-stage>` chrome.
5. Follow the "Core rules — do not violate" in §1 above as hard constraints — they're brand law, not suggestions.

---

## 10. Full repo map (for deeper reference)

```text
grcengclub-design-system/
├── DESIGN.md                    ← this file — portable, self-contained system reference
├── README.md                    ← brand bible (source for this file) + leadership roster
├── PUBLISHING.md                ← how to install as a Claude Code skill / publish to the Club
├── colors_and_type.css          ← drop-in CSS tokens + semantic element rules
├── fonts/                       ← vendored Inter woff2 (400–900)
├── assets/                      ← logo, orange brand mark, leadership headshots, merch shots
├── preview/                     ← 19 self-contained reference cards (colors, type, components)
├── slides/                      ← 12 slide templates + <deck-stage> web component
└── ui_kits/
    ├── website/                 ← marketing-site recreation (Home, Academy, Stories, Join, FAQ)
    └── certplatform/            ← Academy product recreation (Dashboard, Course, Lesson, Labs, Exam)
```
