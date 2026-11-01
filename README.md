# GRC Engineering Club — Design System

The brand and design system behind [grcengclub.com](https://grcengclub.com), the [claude-grc-engineering](https://github.com/GRCEngClub/claude-grc-engineering) docs, Academy surfaces, slide decks, and merch.

One graphite ramp with a faint warm tint, one orange used rarely, Inter at 400/500 with JetBrains Mono for figures and control-ID tags, Lucide line icons, one real moment per screen, and a voice that says **builder**, not vendor. Rewritten on 2026-11-01 after an [unslop](https://github.com/heydamir/unslop) pass (Damir Sokolovsky, CC BY 4.0). Read [BRAND.md](BRAND.md) for the full guide, and browse the live kit at [grcengclub.github.io/design-system](https://grcengclub.github.io/design-system/).

---

## What's in this repo

| Folder | What it is |
|---|---|
| [`colors_and_type.css`](colors_and_type.css) | Drop-in CSS variables (`--grc-orange`, `--grc-dark`, `--grc-gray`, `--grc-text-dim`, `--fg-1`, …), type rules and shared classes (`.meta`, `.tag`, `.btn`, `.card`). References local Inter and JetBrains Mono. |
| [`fonts/`](fonts) | Vendored Inter (400–900) and JetBrains Mono (400, 500) `woff2`. The system uses Inter 400/500 only. No Google Fonts dependency. |
| [`assets/`](assets) | Logo, orange brand mark, leadership headshots, merch product shots. Copy from here; do not recreate. |
| [`preview/`](preview) | Reference cards for colors, type, spacing, components, and iconography. Open any in a browser to see the system applied. |
| [`slides/`](slides) | 12 dark slide templates (Title, Section, Problem, Approach, Stat, Quote, Certification, Roadmap, Code, Comparison, Pillars, Closer) on `<deck-stage>` at 1920×1080. [Present them in the browser](https://grcengclub.github.io/design-system/slides/). |
| [`slides/pptx/`](slides/pptx) | The white-background PowerPoint twin: [`.pptx`](slides/pptx/GRC-Engineering-Club_Slides-Light.pptx) and [`.potx`](slides/pptx/GRC-Engineering-Club_Slides-Light.potx) plus the pptxgenjs builder. For projectors, print and anything handed to a venue or sponsor. |
| [`ui_kits/website/`](ui_kits/website) | Marketing-site mirror (Home, Academy, Stories, Join, FAQ) as JSX components, synced to production 2026-11-01. |
| [`ui_kits/certplatform/`](ui_kits/certplatform) | Academy mirror (Dashboard, Course, Lesson player, Labs, Exam readiness), synced the same day. |
| [`BRAND.md`](BRAND.md) | The design guide: direction, voice, color, type, spacing, component recipes, surfaces, ship checklist. |
| [`SKILL.md`](SKILL.md) | Claude Code / Claude Agent SDK skill manifest for this repo. |
| [`source_decks/`](source_decks) | Original Academy `.pptx` decks (reference content). |
| [`PUBLISHING.md`](PUBLISHING.md) | How to install as a Claude Code skill and how to publish to the Club. |

---

## Core brand rules — do not violate

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

---

## Quickstart — dropping tokens into a new project

1. Copy `colors_and_type.css` into your project's token system.
2. Copy `fonts/` to your static assets and reference `@font-face` via the relative path in `colors_and_type.css`.
3. Use `preview/` as a visual regression baseline while you build.
4. For slide decks, copy a file from `slides/`, swap the content, keep the tokens. For PowerPoint, start from `slides/pptx/GRC-Engineering-Club_Slides-Light.potx`.

---

## Leadership team

The humans behind the Club. These are the people shaping what ships.

| | Name | Role | Links |
|---|---|---|---|
| <img src="assets/leadership/aj.jpeg" width="80" /> | **AJ Yawn** | Executive Chairman & Founder | [LinkedIn](https://www.linkedin.com/in/ajyawn/) · [GitHub @ajy0127](https://github.com/ajy0127) |
| <img src="assets/leadership/abdie.jpeg" width="80" /> | **Abdie Mohamed** | President | [LinkedIn](https://www.linkedin.com/in/abdie-mohamed-3a8684140/) |
| <img src="assets/leadership/james.jpeg" width="80" /> | **James Tabron, CISSP** | Vice President | [LinkedIn](https://www.linkedin.com/in/jamestabron/) |
| <img src="assets/leadership/ashley.jpeg" width="80" /> | **Ashley Pearce** | Head of Career Ops | [LinkedIn](https://www.linkedin.com/in/ashley-pearce/) · [GitHub @ashpearce](https://github.com/ashpearce) |
| <img src="assets/leadership/zinet.png" width="80" /> | **Zinet Kemal, M.S.c** | Head of Membership | [LinkedIn](https://www.linkedin.com/in/zinetkemal/) |
| <img src="assets/leadership/jr.jpeg" width="80" /> | **James "JR" Robinson** | Creative Director | [LinkedIn](https://www.linkedin.com/in/james-tr-robinson/) |
| <img src="assets/leadership/ethan.jpeg" width="80" /> | **Ethan Troy** | Head of AI Research | [LinkedIn](https://www.linkedin.com/in/ethantroy/) · [GitHub @ethanolivertroy](https://github.com/ethanolivertroy) |
| <img src="assets/leadership/omar.jpeg" width="80" /> | **Dr. Omar Sangurima, CISSP** | Podcast Lead | [LinkedIn](https://www.linkedin.com/in/dromars/) |
| <img src="assets/leadership/lauren.jpeg" width="80" /> | **Lauren Alex-Igwe (Nwegbo)** | GRC Events Lead | [LinkedIn](https://www.linkedin.com/in/lauren-alex-igwe-18a66816b/) |
| <img src="assets/leadership/nick.jpeg" width="80" /> | **Nick McLaren** | Head of Community Ops | [LinkedIn](https://www.linkedin.com/in/nmclarencys/) |

Leadership, if you're on GitHub and not listed: open a PR to add your handle.

---

## Licensing

- **Code, CSS tokens, and slide/UI-kit source** in this repo are released under the [MIT License](LICENSE).
- **Brand assets** — the GRC Engineering Club logo, wordmark, orange brand mark, leadership headshots, and merch photography in [`assets/`](assets) — are **not MIT-licensed**. They belong to the individuals and the Club. Do not reuse them outside of work that represents the GRC Engineering Club without written permission.

---

## Join the Club

Everything in this repo is used to run [grcengclub.com](https://grcengclub.com) — a paid membership community for GRC practitioners learning the engineering layer. Weekly private podcast, bi-weekly live Q&A, hands-on AWS compliance labs, mock interviews, career playbooks, and live builder sessions. Details and pricing at [grcengclub.com](https://grcengclub.com).
