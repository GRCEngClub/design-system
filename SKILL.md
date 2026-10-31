---
name: grc-engineering-club-design
description: Use this skill to generate well-branded interfaces and assets for GRC Engineering Club, either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the website, Academy, slides, social, and merch concepts.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — drop-in CSS variables (`--grc-orange`, `--grc-dark`, `--grc-gray`, `--fg-1`, `--fg-3`, …) and semantic type rules (`h1`, `h2`, `.eyebrow`, `.lede`, etc). References `./fonts/` for local Inter.
- `fonts/` — vendored Inter woff2 files (weights 400, 500, 600, 700, 800, 900). No Google Fonts dependency.
- `assets/` — the logo, orange brand mark, leadership headshots, and merch product shots. Copy these into your artifact; do not recreate them.
- `preview/` — reference cards for colors, type, spacing, components, and iconography. Open any of these to see the system applied.
- `slides/` — **12 brand-ready slide templates** (Title, Section, Problem, Approach, Stat, Quote, Certification, Roadmap, Code, Comparison, Pillars, Closer). Built on `<deck-stage>` at 1920×1080. Copy + adapt for new decks.
- `ui_kits/website/` — full marketing-site recreation (Home, Academy, Stories, Join, FAQ) as JSX components.
- `ui_kits/certplatform/` — Academy cert-platform recreation (Dashboard, Course, Lesson player, Labs, Exam readiness).
- `PUBLISHING.md` — how to install as a Claude Code skill against the `grcengclub/` repo, and how to publish to the club.

If creating visual artifacts (slides, mocks, throwaway prototypes, landing pages, social images, etc), **copy assets out of `assets/` and reference them with relative paths**. Build static HTML files for the user to view. Use Inter from Google Fonts and Lucide icons via CDN — both are already referenced in `colors_and_type.css` / the UI kit.

If working on production code, copy the tokens from `colors_and_type.css` into the target project's own token system and read the rules in `README.md` to become an expert in designing with this brand.

### Core brand rules — do not violate

- **One accent color only: orange `#E8650A`.** No bluish-purple gradients. No multi-color palettes. Orange lives on CTAs, link text, eyebrows, icons, and accent spans like `<span class="text-brand-orange">Club</span>`.
- **Dark mode only.** Page `#0D0D0D`, alt section `#1A1A1A`, cards `#2A2A2A`. Sections alternate page / alt for vertical rhythm.
- **Typography is Inter, heavy weights for display** (800/900). Display headlines use `tracking-tight`. Eyebrows are UPPERCASE orange with wide tracking.
- **Iconography is Lucide line icons** at default stroke. When emphasized, they sit in a `rounded-full bg-orange/10 text-orange` circular well. **No emoji, ever.**
- **Card recipe:** `bg-[#2A2A2A]` + `border border-[#3A3A3A]` + `rounded-xl` + `p-6` + `hover:border-orange/50`. No drop shadows on cards; shadows only on primary CTAs (a warm orange glow).
- **Voice is builder-energy:** direct, imperative, second-person. "Stop scrolling, start engineering." "From checkbox GRC to engineered systems." "Not just a book club. A movement." Never vendor-speak.

If the user invokes this skill without any other guidance, ask them what they want to build or design (deck, landing page, social, Academy surface, merch concept?), ask a few scoping questions (audience, length, variants desired, tone tweaks), and act as an expert designer who outputs HTML artifacts — or production code — depending on the need.
