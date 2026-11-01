# GRC Engineering Club — Design Guide

The brand home for **GRC Engineering Club**, the membership community and Training Academy for GRC engineers: practitioners who replace spreadsheet compliance with code.

> _"From checkbox GRC to engineered systems."_
> _"Stop scrolling, start engineering."_

This guide is the source of truth for the website (grcengclub.com), the Academy (cert.grcengclub.com), decks, social and print. It was rewritten on 2026-11-01 when both products went through an [unslop](https://github.com/heydamir/unslop) pass (method by Damir Sokolovsky, @heydamir, CC BY 4.0). The stance in one sentence: **the chrome is quiet and the richness lives in one moment per screen.** Orange is a signal, not a wallpaper. Type is calm. The product itself is the visual.

Production code is the living reference. When this guide and the code disagree, the code shipped later and this guide needs the fix:

- Website: `src/index.css` (tokens), `src/pages/Home.tsx`, `src/components/PipelineRun.tsx`, `CTAButton.tsx`, `SectionHeading.tsx`, `ContentCard.tsx`, `Navbar.tsx`
- Academy: `cert-platform/frontend/tailwind.config.js`, `src/pages/public/LandingPage.tsx`, `src/pages/learner/Dashboard.tsx`, `src/components/NavBar.tsx`

---

## Index — what's in this folder

```
README.md                 ← you are here, the guide
SKILL.md                  ← agent skill manifest with the core rules
PUBLISHING.md             ← how to install as a Claude Code skill and publish to the club
colors_and_type.css       ← CSS variables, type rules, shared classes (.meta, .tag, .btn, .card)

fonts/                    ← vendored Inter 400–900 and JetBrains Mono 400/500 (woff2)

assets/
  logo.jpeg               ← square wordmark logo (favicon + nav)
  brand-mark-orange.jpg   ← orange neon iconography, covers only
  leadership/             ← team headshots
  merch/                  ← product shots

preview/                  ← one card per rule: palette, type, meta and tags, depth, components
slides/                   ← 12 dark HTML slide templates on <deck-stage> at 1920×1080
  pptx/                   ← the white-background PowerPoint twin (.pptx + .potx + builder)
ui_kits/
  website/                ← marketing site mirror (Home, Academy, Stories, Join, FAQ)
  certplatform/           ← Academy mirror (Dashboard, Course, Lesson, Labs, Exam)
source_decks/             ← raw .pptx inputs kept for content reference only
```

---

## Direction

Every design decision below comes from these five lines. Write them again for a new surface before you start, and keep them.

- **Product.** A community and training academy for GRC engineers, and the people becoming one, who replace spreadsheet compliance with code.
- **Character.** Exact, hands-on, a little blunt.
- **World.** The pipeline and the terminal: control IDs, Terraform plans, evidence buckets, a dark ops room late at night.
- **Moments.** One per screen, built from the product. The homepage hero's pipeline run. The dashboard's seven-domain path. A slide's single large figure. A real chart. Never a blob, orb, glow or grid.
- **Signature.** Control-ID tags: short mono text like `AC-2`, `CM-6`, `D4` in a small raised chip. Used wherever a control, domain, step or code is named, and nowhere else.

The template check: if you swapped our name for another product's, would the screen still fit? If yes, push the copy, the moment and the signature harder.

---

## Content

### Voice

Builder energy. Direct, confident, second person, addressed to a peer who is ready to put in reps. It rejects vendor speak and never shouts.

- **You, not we.** "Pick your path. Start building today."
- **Short imperatives and plain declarations.** "Ready to build?" "The work works."
- **Engineer vocabulary because it is the job.** Ship, build, deploy, reps, crew, evidence, pipeline, control. Jargon like OSCAL, cATO, Terraform, OPA/Rego is named, not shown off.
- **The villain is checkbox GRC.** The hero is automation, infrastructure as code and engineering rigor.
- **Headlines say what the product does for whom**, in plain words that could not fit another product. Use facts already on the page, never invented ones.

### Casing and punctuation

- **Sentence case everywhere.** Headlines, section titles, card titles, labels, buttons, nav. "What members get", "Member wins", "Join the Club". Acronyms and product names keep their capitals: GRC, CGE-P, OSCAL, NIST, Training Academy, GRC Engineering Club, Claude Code.
- **No trailing period** on a heading, label, button or caption. Only paragraphs of several sentences keep their periods.
- **No exclamation marks** in interface text. Member quotes stay verbatim.
- **No hype words.** Supercharge, seamless, unlock, magic, revolutionize, game-changing, AI-powered on everything.
- **Changes say what they compare to.** "+12% vs last month", never "+12%!!"
- **Prefer a comma or colon to a dash.** No em dashes in interface copy.
- **Brand name** is always "GRC Engineering Club". The Club, the Academy.

### Numbers

Proof points, never decoration: `60` questions, `72%` to pass, `$70` a year, `62` chapters. One number format per screen, tabular figures, and at most one figure in orange per screen (the one that matters).

Claims that cannot be checked get removed or made specific. Mock data looks real: plausible names, plausible control IDs, never `[X]` or `123,456`.

---

## Color

### Dark (web, Academy, HTML decks)

One graphite ramp with a faint warm tint, so orange sits in it naturally. Backgrounds never read as orange or brown.

| Role | Token | Hex |
|---|---|---|
| Page | `brand-dark` / `--grc-dark` | `#111110` |
| Alt section | `brand-dark-alt` / `--grc-dark-alt` | `#161514` |
| Card | `brand-gray` / `--grc-gray` | `#1C1B19` |
| Raised surface, hairline, chip | `brand-gray-light` / `--grc-gray-light` | `#2B2925` |
| Primary text | `brand-text` / `--grc-text` | `#EFE9DE` |
| Secondary text | `brand-text-muted` / `--grc-text-muted` | `#AAA398` |
| Meta text, icons | `brand-text-dim` / `--grc-text-dim` | `#8A847A` |
| Accent | `brand-orange` / `--grc-orange` | `#E8650A` |
| Orange text on dark, hover | `brand-orange-light` | `#FF8533` |
| Positive | | `#4CC38A` |
| Negative | | `#E5484D` |

Sections alternate page and alt for vertical rhythm. Pure white is not used; the primary text color is the brightest thing on a dark screen.

### Light (slides for projectors, print, handouts)

| Role | Hex |
|---|---|
| Page | `#FFFFFF` |
| Alt section, cards on white | `#F5F5F5` |
| Border, hairline | `#E5E5E5` |
| Chip | `#EFEFEF` |
| Headings, primary text | `#171717` |
| Body | `#525252` |
| Meta | `#737373` |
| Orange for figures and buttons | `#E8650A` |
| Small orange text | `#C45200` |

Tokens live in `colors_and_type.css` under `.grc-light`.

### How the accent is used

Orange covers a few percent of the screen: the primary button, the active or selected state, the current step in a path, the one figure that matters. It is not the default color for icons, eyebrows, borders, body links in bulk, or headline words. Text on orange is the page color (`#111110`), which reaches 5.6:1. Small orange text on dark uses `#FF8533`, on white `#C45200`.

### What is gone

No hue gradients, gradient text, colored glows, orange washes behind sections, orange-tinted icon wells, orange borders as decoration, pulsing dots, or backdrop blur. Depth comes from surface steps and hairlines. A floating menu may carry a soft neutral shadow and nothing else does.

---

## Type

**Inter** for the interface, **JetBrains Mono** for figures, meta and tags. Both are vendored in `fonts/`.

- **Weights 400 and 500.** 600 for rare emphasis. Never 700, 800 or 900. Hierarchy comes from size and color, not weight.
- **Sentence case.** No uppercase tracked labels anywhere. What used to be an eyebrow is now 12px mono in the meta color.
- **Tracking.** 0 under 16px, `-0.02em` from 40px, `-0.03em` from 56px. Small text never gets negative tracking.
- **No italic for emphasis.** Quotes are set roman with curly quote marks.
- **Figures** use `tabular-nums` and one format per screen.

| Use | Size / line | Weight | Color |
|---|---|---|---|
| Meta, counts, tags | 11–12 / 16, mono | 400 | meta |
| Captions, secondary | 13–14 / 20 | 400 | secondary |
| Body, nav items | 14–15 / 20–22 | 400–500 | primary or secondary |
| Hero subhead | 18 / 28, max 36rem wide | 400 | secondary |
| Card title | 16 / 22 | 500 | primary |
| Card figure | 28–32 / 1, tabular | 500 | primary |
| Page or section title | 30–40 / 1.12 | 500 | primary |
| Hero headline | 56–68 desktop, 40 mobile / 1.04 | 500 | primary |
| Slide title | 54–60 | 500 | primary |

In PowerPoint, where 500 is not available, titles are Inter Regular at the larger size and mono is Consolas.

---

## Spacing and layout

- **4px grid.** Margins, paddings, gaps and heights are multiples of 4. No `mt-[13px]`.
- **Same thing, same size.** Rows in a list share one height and gap; sibling cards share one padding.
- **Space shows grouping.** Inside a group 2–8, between groups 12–24, between sections 80–112 on marketing pages, 32–64 in the app.
- **Containers.** Marketing `max-w-7xl` with `px-4 sm:px-6 lg:px-8`. App content capped around 1440–1600 with page padding 24–32.
- **Navigation.** 56–64px bar, rows 32–36 tall with 2–4 between, logo plus the existing links plus one button. Log in is a quiet text link. Active item is a surface step, not orange text.
- **Hero.** 96–128px from the nav to the headline on desktop, 48–64 on mobile. Composed as one screen: headline, one primary and at most one secondary action, the product view rising from the bottom edge. Price and sign-in are quiet text beside the actions, never a third button.
- **Sections keep their order.** Alternate page and alt backgrounds. Long headlines align left; the subtitle sits under the title, not centered under a left title.
- **Mobile.** Everything stacks in reading order, headline drops to 40px, dense previews simplify rather than shrink, nothing under 11px.

### Radius

| Element | Radius |
|---|---|
| Tag, chip, keycap | 4–6 |
| Button, input, row | 8–10 |
| Card | 12–16 |
| Window, panel | 14–20 |

Nested radius: inner = outer minus the padding between them, never below 4. Only avatars and status dots are circles; text pills are gone.

---

## Components

Recipes as they ship in production Tailwind. The CSS twin for HTML artifacts is in `colors_and_type.css` (`.btn`, `.card`, `.tag`, `.meta`).

**Primary button**
`inline-flex h-11 items-center rounded-[10px] bg-brand-orange px-5 font-medium text-brand-dark hover:bg-brand-orange-light transition-colors active:scale-[0.98]`

**Secondary button**
`inline-flex h-11 items-center rounded-[10px] border border-brand-gray-light bg-brand-gray-light/60 px-5 font-medium text-brand-text hover:bg-brand-gray-light transition-colors`

**Quiet link**
`inline-flex items-center gap-1.5 font-medium text-brand-orange-light hover:text-brand-orange` with a 16px arrow icon.

**Meta label (the old eyebrow)**
`font-mono text-xs text-brand-text-dim`, sentence case, 16px below it to the heading.

**Control-ID tag**
`inline-flex h-5 items-center rounded px-1.5 font-mono text-[11px] bg-brand-gray-light text-brand-text-muted`

**Card**
`bg-brand-gray rounded-xl p-6 border border-brand-gray-light hover:border-brand-text-dim/40 transition-colors duration-150`. Icon at 20px stroke 1.5 in `text-brand-text-muted`, title 16/500, body 14 secondary.

**Section heading**
Title 30–40px at 500 with `tracking-tight`; subtitle 17px secondary, max 34rem. Centered only for one or two short lines.

**Stat**
Label in meta, figure 28–32px at 500 tabular, change line in secondary with its comparison. No sparklines or mini bars inside a stat.

**Progress**
Flat 4px bar on the raised surface with an orange fill for the primary path and a meta-colored fill for everything else. A conic ring is fine for the one primary percent.

**Path or checklist row**
36px rows separated by hairlines: a 16px state circle (done = filled green with a check, current = orange ring with a dot, todo = hairline ring), a tag, the title, and a right-aligned mono duration.

**Table**
Mono 11px header in meta, 36px rows, hairline between rows, numbers right-aligned and tabular, status as a 6px dot plus a word.

**Product view window**
Card surface, hairline, 16px top radius, a 44px title bar with three neutral dots and a mono title, panes split by hairlines. See `PipelineRun.tsx`.

**Icons**
Lucide, 16–20px, stroke 1.5, in the secondary or meta color. Same box width in every row, 8–10px gap to the label. No wells, no orange icons as decoration, never emoji.

**Motion**
`transition-colors` or a named property list at 150ms, one ease-out curve, press scale 0.98, at most one short fade-and-rise on load. Never `transition-all`, `hover:scale` on cards, pulsing or floating.

---

## Surfaces

### Website and Academy

Dark palette, the recipes above, one moment per page. The homepage moment is a pipeline run showing controls tested tonight with evidence paths. The Academy landing moment is the three-credential chooser. The dashboard moment is the learner's path drawn as domains with the current one marked. New pages get one moment of their own, built from what the page promises, or none.

### Slides

`slides/` holds 12 dark templates on `<deck-stage>` (Title, Section, Problem, Approach, Stat, Quote, Certification, Roadmap, Code, Comparison, Pillars, Closer). Each slide carries one bright element: the stat figure, the highlighted row, the code block's tags. Titles at 54–60px weight 500, meta in mono, step numbers as tags, no pills.

`slides/pptx/` is the white-background twin for projectors, print and anything handed to partners as a .pptx. Same layouts, light palette, Inter Regular and Consolas. `npm install && npm run build` regenerates the .pptx and .potx. Install Inter on the presenting machine or PowerPoint falls back to Arial.

### Social and print

Same palette and type. The brand mark (`assets/brand-mark-orange.jpg`) is the most expressive the brand gets and belongs on covers only. Photography is warm and grounded: real members, real rooms, studio merch on neutral grounds.

---

## Checklist before you ship

- [ ] Direction written in five lines and every choice follows it
- [ ] Every spacing value on the 4px grid, equal things equal
- [ ] One graphite ramp, three text roles, orange on a few percent of the screen
- [ ] No gradients, glows, colored shadows, washes, wells or blobs
- [ ] Inter 400/500, sentence case, no uppercase tracked labels, no italic, tabular figures
- [ ] Icons one set, one size, one stroke, text-role color, no emoji
- [ ] Headline says what we do for whom; no exclamation marks; no trailing periods on short strings; no unverified claims
- [ ] One primary and at most one secondary action per hero
- [ ] One moment built from the product, never a placeholder or filler image
- [ ] Nested radii add up, pills only for avatars and dots
- [ ] Motion is a color change at 150ms; nothing loops
- [ ] Template check passed

---

## How to use this system

1. **HTML artifacts** (mocks, social, one-off pages): import `colors_and_type.css`, use `.btn`, `.card`, `.tag`, `.meta`, copy assets out of `assets/`, Lucide via CDN.
2. **Production code**: use the Tailwind tokens already in each app and the recipes above. Do not reintroduce `font-bold` and up, `uppercase tracking-*`, `transition-all`, `shadow-brand-orange`, `bg-brand-orange/10`, or `bg-gradient-*`.
3. **Decks**: start from `slides/` for dark, `slides/pptx/` for light.
4. **Reference**: `preview/` has one card per rule; `ui_kits/` mirror production as of 2026-11-01.

## Caveats

- `ui_kits/` are mirrors, not the source. When production moves, the kits lag until someone re-syncs them.
- PowerPoint cannot select weight 500; titles there are Regular at size. Mono in PowerPoint is Consolas.
- Light mode is for slides, print and handouts only. The website and Academy stay dark.
- `source_decks/` are the original Academy .pptx files, kept as content inputs. They do not follow this guide.
