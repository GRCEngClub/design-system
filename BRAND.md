# GRC Engineering Club — Design System

The brand home for **GRC Engineering Club**, the leading membership community for GRC engineers — practitioners building automated, scalable governance, risk, and compliance systems instead of running checklists in spreadsheets.

> _"Not just a book club. A movement."_
> _"From checkbox GRC to engineered systems."_

The Club is a Patreon-monetized community founded by AJ Yawn. The marketing site, the Academy (CGE-P certification, launching April 2026), the merch store, member directory, leadership pages, and admin dashboards all live in one React + Vite + Tailwind app. The brand is **engineered, dark-mode, orange-on-near-black**, with bold sans display type and a confident, builder-energy voice.

This design system gives agents (and humans) what they need to design **decks, the website, the Academy, social content, and merch concepts** in-brand.

---

## Sources used to build this system

- **Codebase:** mounted as `grcengclub/` (read-only). Primary files referenced:
  - `grcengclub/grcengclub/src/index.css` — `@theme` color + font tokens
  - `grcengclub/grcengclub/src/pages/Home.tsx`, `Academy.tsx`, `Join.tsx`
  - `grcengclub/grcengclub/src/components/*` — Navbar, Footer, CTAButton, ContentCard, StoryCard, FAQAccordion, SectionHeading, StickyCTA, ReviewBanner
  - `grcengclub/grcengclub/src/content/*.json` — stories, faq, highlights
  - `grcengclub/grcengclub/PRD.md` — product brief and brand intent
  - `grcengclub/grcengclub/public/llms.txt` — public positioning summary
- **Uploaded brand mark:** `uploads/t3-chat-generated-image-1772977386763.jpg` → copied to `assets/brand-mark-orange.jpg` (the glowing-orange iconography image).
- **Live site for reference:** https://grcengclub.com
- **Patreon:** https://www.patreon.com/cw/GRCEngineeringClub
- **YouTube:** https://www.youtube.com/@grcengineeringclub

---

## Index — what's in this folder

```
README.md                 ← you are here
SKILL.md                  ← agent skill manifest (cross-compat with Claude Code Skills)
PUBLISHING.md             ← how to use in Claude Code + how to publish to the club
colors_and_type.css       ← CSS variables, semantic type rules

fonts/                    ← vendored Inter (woff2, weights 400–900) — no Google Fonts dependency

assets/
  brand-mark-orange.jpg   ← glowing orange brand iconography
  logo.jpeg               ← square wordmark logo (favicon + nav)
  leadership/             ← team headshots
  merch/                  ← Run GRC tees, hoodies, mugs, anti-checkbox, automation manifesto

ui_kits/
  website/                ← Marketing site (grcengclub.com) — Home, Academy, Stories, Join, FAQ
  certplatform/           ← Academy / cert platform — Dashboard, Course, Lesson, Labs, Exam

slides/                   ← 12 brand-ready slide templates in a <deck-stage> shell
  index.html
  Slides.jsx
  deck-stage.js

source_decks/             ← Raw .pptx source decks from the Academy (kept for reference)

preview/                  ← Design system tab cards (palette, type specimens, components, icons)
  *.html
```

**See `PUBLISHING.md`** for installing this kit in Claude Code with the `grcengclub/` repo, and for four different ways to publish the design system to your club.

---

## CONTENT FUNDAMENTALS

The voice is **builder-energy**: direct, confident, action-oriented, addressed to a peer who is ready to put in reps. It rejects vendor speak. It reads like a senior practitioner handing you a roadmap.

### Voice & tone

- **You vs we.** Almost always second person ("you"). Members are addressed as peers ("Pick your path. Start building today.").
- **Direct and imperative.** Headlines are short commands or declarations: _"Stop scrolling, start engineering."_ / _"Be Ready When It Drops."_ / _"Ready to Build?"_
- **Engineer / builder vocabulary.** "ship", "build", "deploy", "reps", "the work works", "crew", "movement", "engineered systems", "not a checkbox."
- **Anti-establishment edge against "checkbox GRC."** The villain is manual spreadsheet compliance. The hero is automation, infrastructure-as-code, and engineering rigor.
- **Plain language over jargon.** When jargon shows up (OSCAL, cATO, Terraform, OPA/Rego), it's named because it's the actual job — not to sound smart.

### Casing & punctuation

- **Headlines:** Title Case for page H1/H2 (`What Members Get`, `The Exam`, `Member Wins`).
- **Eyebrows / chips / labels:** UPPERCASE with wide tracking, in orange (`MOST POPULAR`, `LAUNCHING APRIL 2026`, `SHORT`, `FULL EPISODE`).
- **Body:** sentence case, no Oxford comma enforced, em-dashes used freely (often as `—` or as `  - ` with double-spaces in source content).
- **Brand name:** "GRC Engineering Club" — always with that exact capitalization. The nav abbreviates the wordmark visually, never in copy.
- **Acronyms:** GRC, CGE-P, IaC, OSCAL, FedRAMP, NIST, AWS — always uppercase.

### Examples (lifted from the codebase)

- Hero: _"GRC Engineering **Club**. Not just a book club. **A movement.** From checkbox GRC to engineered systems."_
- Final CTA: _"Ready to Build? Clear path forward and a crew to build it with. Stop scrolling, start engineering."_
- Member quote callout: _"THE WORK WORKS. Put in the reps, stay consistent, and the results show up — I'm living proof."_ (member shouting in caps, brand quotes them as-is)
- Academy positioning: _"The first certification built **by GRC engineers, for GRC engineers.**"_

### Emoji & special characters

- **No emoji.** None in the codebase. The brand uses orange iconography (Lucide line icons) instead.
- Unicode glyphs occasionally used inline: `✓` for feature checks, `→` / `&rarr;` for "next" cues, `&bull;` for non-member bullet lists. Otherwise icons are Lucide React.

### Numbers & stats

Used as proof points, often standalone in orange bold: `60` questions, `72%` passing, `$330K` highest verified salary, `424+ members`, `70,000+ LinkedIn reach`. Stats are credibility, never decoration.

---

## VISUAL FOUNDATIONS

### Palette

- **Brand orange `#E8650A`** — the entire identity hinges on this single warm orange. It's used for: headline accents (the word "Club" in `<span class="text-brand-orange">`), all primary CTAs, link colors, eyebrow chips, icon strokes, focus rings, dividers, and the orange `bg-orange-500` global review banner at the top of every page.
  - Light variant `#FF8533` for hover.
  - Dark variant `#C45200` for pressed/deeper accents.
- **Near-black neutrals:** `#0D0D0D` (page) / `#1A1A1A` (alt section) / `#2A2A2A` (cards) / `#3A3A3A` (borders). The site _alternates_ between page-dark and dark-alt across vertical sections — that rhythm is core to the layout system.
- **Foreground:** `#F5F5F5` for body text, `#A0A0A0` for muted/secondary, pure white only for hi-emphasis headings.
- **No gradient palette.** A single subtle radial-ish gradient is used in two places only: hero overlays (`bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent`) and the highlighted pricing tier. There are NO bluish-purple gradients, no rainbow tints, no multi-stop gradients.

### Typography

- **One family: Inter**, weights 400 / 500 / 600 / 700 / 800 / 900.
  - Display H1: `font-black` (900), `tracking-tight`, sizes up to `text-7xl` (72px).
  - Section H2: `font-extrabold` (800), `tracking-tight`, up to `text-5xl`.
  - Body: 400, leading-relaxed, muted gray.
  - Eyebrows / chips / footer headings: `font-bold` (700), `uppercase`, `tracking-wider`, `text-xs`.
- The display weights are deliberately heavy — this is "build something" type, not editorial type.

### Spacing & layout

- **Container:** `max-w-7xl` (~1280px) with horizontal padding `px-4 sm:px-6 lg:px-8`.
- **Vertical section rhythm:** `py-20 md:py-28` for content sections, `py-24 md:py-32 lg:py-40` for hero. Cards use `p-6` to `p-8`.
- **Grid defaults:** 1 → 2 → 3 → 4 columns at `sm` / `md` / `lg`. Card gap: `gap-6` to `gap-8`.
- Sections **alternate** `bg-brand-dark` and `bg-brand-dark-alt` for vertical rhythm — never use color stripes or borders to separate.

### Backgrounds

- **No images as full-bleed backgrounds.** Backgrounds are flat dark surfaces.
- The hero is the one exception: a faint orange diagonal gradient overlay at 10% opacity, fading to transparent.
- **No textures, no patterns, no hand-drawn illustrations.** When imagery appears, it's photographic (member photos, merch product shots, YouTube thumbnails).

### Imagery vibe

- **Photography is warm but grounded:** member headshots are natural, often lifestyle. Merch shots are clean studio on neutral backgrounds — heavily black + orange product palette.
- **The brand mark itself (`brand-mark-orange.jpg`) uses a glowing orange neon-line treatment** of GRC iconography (shield, gears, gavel, code-tags `</>`, clipboards) on near-black. Treat that as the most "expressive" the brand gets visually — use sparingly for hero / about / cover treatments, not on every page.

### Borders, cards & shadows

- **Card pattern (universal):** `bg-brand-gray rounded-xl p-6 border border-brand-gray-light hover:border-brand-orange/50 transition-all duration-300`. That's the recipe — dark surface, 12px radius, subtle gray border that shifts orange on hover.
- **No drop shadows on cards.** The visual containment comes from background contrast + thin border.
- **Shadows used only on CTAs:** `shadow-lg hover:shadow-brand-orange/25` — a warm orange glow, never neutral.
- **Highlighted/featured tier:** `bg-gradient-to-b from-brand-orange/10 to-transparent` with `border-brand-orange` (the orange-tint card is reserved for "Most Popular" or "Recommended" callouts, not normal cards).

### Corner radii

- Buttons: `rounded-lg` (8px).
- Cards: `rounded-xl` (12px).
- Chips / eyebrow pills / circular icon wells: `rounded-full`.
- Logo: `rounded-lg` (the JPEG mark is treated as a square asset with a rounded mask).

### Hover & press states

- **Hover:** primary CTA shifts `bg-brand-orange` → `bg-brand-orange-light` plus an orange glow shadow. Secondary CTA (orange outline) fills with orange. Cards shift their border from `brand-gray-light` to `brand-orange/50`. Links go orange → orange-light. Icons + thumbnail overlays fade in with `opacity-0 → opacity-100`.
- **Press / active:** no explicit shrink or scale transform in the codebase — the brand relies on color shift only. (We can add `active:scale-[0.98]` as a sanctioned extension in new work.)
- **Transitions:** `transition-all duration-200` for buttons, `duration-300` for cards. Easing is the Tailwind default (`cubic-bezier(0.4, 0, 0.2, 1)`).

### Animation

- **Restrained.** A `ReviewBanner` cross-fades member quotes every 6 seconds. The `StickyCTA` slides in on scroll past 600px. Mobile menu toggle is instant. Accordion expands with a 300ms `max-height` transition.
- **No bounces, no parallax, no Lottie, no 3D.** When in doubt, fade or color-shift.

### Transparency & blur

- **Sticky nav:** `bg-brand-dark/95 backdrop-blur-md` — nearly opaque with a hint of blur, the only blur usage in the system.
- **Tinted overlays:** `bg-brand-orange/10` for orange-tinted backgrounds (eyebrow chip backgrounds, hero overlay, highlighted card).
- **Border opacity:** `border-brand-gray-light/50` and `border-brand-orange/50` are common.

### Layout fixed elements

- **Sticky top nav** with the orange review banner above it.
- **StickyCTA**: floating "Join the Club" button bottom-right on desktop (after 600px scroll), full-width bottom bar on mobile.

### Iconography (preview — full section in ICONOGRAPHY)

- Lucide React, default stroke weight, ~20-32px sizes, color = orange or muted gray. No filled icons unless they're checkmarks.

---

## ICONOGRAPHY

### What the codebase uses

- **Lucide React** is the icon system, period. Imported per-component (e.g. `import { Mic, MessageCircle, ArrowRight, Shield, Zap, Target } from 'lucide-react'`).
- **Stroke style:** default Lucide (1.5px stroke, rounded line caps, outline). Sizes used in source: `14`, `16`, `18`, `20`, `22`, `24`, `28`, `32`.
- **Color rule:** icons are either `text-brand-orange` (when they're decorative/branded) or `text-brand-text-muted` (when they're functional UI like the chevron in nav dropdowns). They never use red/green/blue.
- **Common icons in the wild:** `Mic`, `MessageCircle`, `FlaskConical`, `Users`, `BookOpen`, `MonitorPlay`, `ArrowRight`, `Zap`, `Target`, `TrendingUp`, `Shield`, `ExternalLink`, `Quote`, `Check`, `ChevronDown`, `Menu`, `X`, `Play`, `GraduationCap`, `Cloud`, `Cog`, `Wrench`, `BarChart3`, `ClipboardCheck`, `Lock`, `Hammer`, `Award`, `Clock`, `FileCheck`, `GitPullRequest`, `RefreshCw`.

### Icon containers

When an icon needs emphasis, it sits inside an **orange-tinted circular well**:
```html
<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange">
  <Icon size={24} />
</div>
```
Sizes: `w-10 h-10` (small), `w-12 h-12` (medium), `w-14 h-14` (large). Always `rounded-full`, always `bg-brand-orange/10`, always `text-brand-orange`.

### Usage in this design system

- **Use Lucide via CDN** for HTML artifacts:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="shield"></i>
  <script>lucide.createIcons();</script>
  ```
- Or copy the SVG inline from https://lucide.dev when only one or two icons are needed.

### Other "icon" forms

- **Logo (`assets/logo.jpeg`)** is a JPEG square wordmark. Used as the favicon and the nav-bar mark. It sits at `w-10 h-10` with `rounded-lg`.
- **Brand mark (`assets/brand-mark-orange.jpg`)** — orange neon iconography over black. Use for hero / cover / about treatments.
- **Unicode chars used inline:** `✓` (`&#10003;`) for feature checks (in lieu of a Lucide Check), `→` (`&rarr;`) for "next" cues, `•` for non-member bullets. Ampersand-rarrs in JSX are used because they read cleaner inline than importing an icon for a glyph.
- **No emoji. No flag/medal/lightbulb/rocket emoji. None.** If you reach for an emoji, replace it with a Lucide line icon in an orange well.

---

## How to use this system

1. **Import `colors_and_type.css`** in any HTML you build for GRC Engineering Club work.
2. **Use Inter from Google Fonts** (already imported in the CSS).
3. **Use Lucide line icons** at default stroke weight, colored orange or muted gray.
4. **Compose with the card recipe** above; favor alternating `bg-brand-dark` / `bg-brand-dark-alt` sections for vertical rhythm.
5. **Reach for the UI kit** in `ui_kits/website/` for component patterns. Reach for `slides/` when building decks.
6. **CTAs should always be the primary orange button.** "Join the Club" is the universal call to action.

---

## Caveats / known gaps

- **Inter is vendored locally** under `fonts/` (weights 400–900 as .woff2) AND still referenced from Google Fonts as a fallback. Offline bundles work out of the box.
- **No icon font is bundled in-repo.** Lucide is pulled at runtime from CDN. The design system follows the same pattern.
- **The brand has no formal pressed-state spec.** The design system permits `active:scale-[0.98]` as a graceful extension where motion is appropriate.
- **No light-mode tokens.** The brand is dark-mode only; light variants would need to be authored if a light-mode product surface emerges.
- **Cert platform UI kit is a brand-consistent proposal**, not a 1:1 recreation — the `certplatform/` subdir of the codebase wasn't mounted at build time. Swap individual components in once the real source is available.
- **Source decks in `source_decks/`** are the original Academy .pptx files (Calibri + Office theme). They're the **content** source for the new templates in `slides/` — not the visual source.
