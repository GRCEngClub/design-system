---
name: grc-engineering-club-design
description: Use this skill to generate well-branded interfaces and assets for GRC Engineering Club, either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the website, Academy, slides, social, and merch concepts.
user-invocable: true
---

Read the `README.md` file within this skill first; it is the design guide (direction, content rules, color, type, spacing, component recipes, surfaces, a ship checklist). Then explore the other files:

- `colors_and_type.css` — drop-in CSS variables (`--grc-orange`, `--grc-dark`, `--grc-gray`, `--fg-1`, `--fg-3`, …), type rules (`h1`, `h2`, `.eyebrow` which is now mono meta, `.lede`) and shared classes (`.meta`, `.tag`, `.btn`, `.card`). References `./fonts/` for local Inter and JetBrains Mono.
- `fonts/` — vendored Inter (400–900 kept for legacy, the system uses 400/500) and JetBrains Mono 400/500 as woff2. No Google Fonts dependency.
- `assets/` — the logo, orange brand mark (covers only), leadership headshots, and merch product shots. Copy these into your artifact; do not recreate them.
- `preview/` — one reference card per rule: palette, text roles, type scale, meta and control-ID tags, depth, buttons, cards, stats, nav, icons. Open any of these to see the system applied.
- `slides/` — **12 dark slide templates** (Title, Section, Problem, Approach, Stat, Quote, Certification, Roadmap, Code, Comparison, Pillars, Closer) on `<deck-stage>` at 1920×1080. Copy + adapt for new decks.
- `slides/pptx/` — **white-background PowerPoint twin** of those 12 templates (`.pptx` + `.potx` + the pptxgenjs builder). Use it for projectors, print, and anything handed to partners as a .pptx. Light tokens live in `colors_and_type.css` under `.grc-light`.
- `ui_kits/website/` — marketing-site mirror (Home, Academy, Stories, Join, FAQ) as JSX components, synced to production on 2026-11-01.
- `ui_kits/certplatform/` — Academy mirror (Dashboard, Course, Lesson player, Labs, Exam readiness), synced the same day.
- `PUBLISHING.md` — how to install as a Claude Code skill against the `grcengclub/` repo, and how to publish to the club.

If creating visual artifacts (slides, mocks, throwaway prototypes, landing pages, social images, etc), **copy assets out of `assets/` and reference them with relative paths**. Build static HTML files for the user to view. Import `colors_and_type.css` for the vendored fonts and tokens, and use Lucide icons via CDN.

If working on production code, the Tailwind tokens already exist in each app (`src/index.css` for the website, `cert-platform/frontend/tailwind.config.js` for the Academy); use the component recipes in `README.md` and never reintroduce `font-bold` and heavier, `uppercase tracking-*`, `transition-all`, orange glows, washes or gradients.

### Core brand rules — do not violate

Revised 2026-11-01 after the unslop pass (method by Damir Sokolovsky, @heydamir). The chrome is quiet; the richness lives in one or two moments per screen.

- **One accent color only: orange `#E8650A`, used rarely.** It marks the primary action, a selection, or the one figure that matters, and covers a few percent of the screen. No hue gradients, no gradient text, no orange glows, no orange washes behind sections. Icons, eyebrows and body links are not orange by default.
- **One graphite ramp with a faint warm tint, dark mode on the web.** Page `#111110`, alt section `#161514`, cards `#1C1B19`, raised surface and hairline `#2B2925`. Three text roles: primary `#EFE9DE`, secondary `#AAA398`, meta `#8A847A`. Sections alternate page / alt for rhythm. Depth comes from surface steps and hairlines, never from shadows. Slides, print, and handouts may use the white variant (`.grc-light`: page `#FFFFFF`, alt `#F5F5F5`, border `#E5E5E5`, body `#525252`, small orange text `#C45200`).
- **Typography is Inter at 400 and 500, 600 for rare emphasis.** Hierarchy comes from size and color, not weight. Hero headlines 56 to 68px at 500 with `-0.03em` tracking; section headings 30 to 40px at 500. Sentence case everywhere. No uppercase tracked labels: eyebrows and meta are small mono text (`font-mono text-xs`) in the meta color. Figures use `tabular-nums`. No italic for emphasis.
- **Signature detail: control-ID tags.** Short mono tags (`AC-2`, `CM-6`, `D4`) at 11px in a 4px-radius raised chip are how the brand labels things. Use them where a control, domain, or code is named, and nowhere else.
- **Iconography is Lucide line icons** at 16 to 20px, stroke 1.5, in the secondary or meta text color. No circular tinted wells, no orange icons as decoration. **No emoji, ever.**
- **Buttons.** Primary: orange fill with dark text (`text-brand-dark`, 5.6:1), no shadow. Secondary: raised surface with a hairline. 44 to 48px tall in heroes, 32 to 36 in navigation. Press scales to 0.98. One primary and at most one secondary action per screen section.
- **Card recipe:** `bg-brand-gray` + `border border-brand-gray-light` + `rounded-xl` + `p-6`, hover is a quiet border or surface step (`hover:border-brand-text-dim/40`). Nested radii: inner = outer minus padding. Text pills use `rounded-md`; only avatars and status dots are circles.
- **Motion:** `transition-colors` (or a named property list) at 150ms, one ease-out curve, one short fade-and-rise on load at most. Never `transition-all`, `hover:scale`, pulsing, or floating.
- **Visuals:** each screen gets one moment built from the product itself, like the homepage's pipeline run or the Academy's seven-domain path. No blobs, orbs, grids or glows.
- **Voice is builder-energy:** direct, imperative, second-person. "Stop scrolling, start engineering." "From checkbox GRC to engineered systems." Headlines say what the Club does for whom. No exclamation marks in interface text, no trailing periods on labels or buttons, no hype words. Never vendor-speak.

If the user invokes this skill without any other guidance, ask them what they want to build or design (deck, landing page, social, Academy surface, merch concept?), ask a few scoping questions (audience, length, variants desired, tone tweaks), and act as an expert designer who outputs HTML artifacts — or production code — depending on the need.
