# Using the GRC Engineering Club Design System

This folder is a **self-contained brand kit + skill**. It works in three ways:

1. **In Claude projects** (you're here now) — it powers the Design System tab, provides reference cards, and is the source of truth when an agent designs for the Club.
2. **As an Agent Skill in Claude Code** — you can copy the whole folder into your codebase's `.claude/skills/grc-engineering-club-design/` directory, and `SKILL.md` will be auto-loaded by Claude Code when you ask for design work.
3. **Published to your team** — you can share this project's URL so contributors can browse cards, download assets, or duplicate the project as a starting point.

---

## 1) Use it in Claude Code with `grcengclub/` repo

### One-time setup

From the root of the `grcengclub/` repo:

```bash
# Create the skills directory Claude Code looks in
mkdir -p .claude/skills/grc-engineering-club-design

# Copy this entire project into that folder
# (use the "Download project" button in the top-right of Claude, unzip, then:)
cp -R <unzipped-design-system>/* .claude/skills/grc-engineering-club-design/
```

Structure it expects:

```
grcengclub/
├── .claude/
│   └── skills/
│       └── grc-engineering-club-design/
│           ├── SKILL.md              ← manifest, auto-loaded
│           ├── README.md             ← brand rules
│           ├── colors_and_type.css   ← drop-in tokens
│           ├── fonts/                ← vendored Inter woff2
│           ├── assets/               ← logo, brand mark, merch
│           ├── preview/              ← reference cards
│           ├── slides/               ← deck templates
│           └── ui_kits/              ← website + certplatform recreations
└── src/
    └── ...
```

### Using it in a Claude Code session

Once the skill is in `.claude/skills/`, Claude Code will surface it when you ask for anything design-related. Invoke it explicitly with:

```
Use the grc-engineering-club-design skill to …
```

Good example prompts:

- *"Use the grc-engineering-club-design skill to build a new landing page for a partnership with Wiz."*
- *"Use the design skill to draft 8 Academy promo slides for social  - 1:1 square, all in-brand."*
- *"Use the skill to audit this new marketing component — is it on-brand? Suggest fixes."*
- *"Using the skill, extend the `ContentCard` component in `src/components/` to add a 'featured' variant  - follow the brand rules."*

### How it works in Claude Code

- Claude Code reads `SKILL.md` when invoked → knows the rules.
- It reads `README.md` for voice/visual/iconography deep context.
- It pulls tokens from `colors_and_type.css` or the CSS vars already in your `src/index.css`.
- It cross-references `ui_kits/website/` components against `src/components/` to keep new work consistent.
- For decks or social, it outputs new HTML files that reference `assets/logo.jpeg`, `assets/brand-mark-orange.jpg`, etc.

---

## 2) Publish the design system to your club

There are three levels of "publish" — pick based on who needs access and whether you want them to self-serve.

### Level 1 — Share a read-only link (simplest)

1. In the top-right of this project, click **Share → Anyone with the link**.
2. Paste the URL into:
   - Patreon posts for members
   - Club community chat
   - Internal Notion / Docs as "brand reference"

Everyone who opens the link sees the Design System tab with every card, the UI kits, and the deck templates. They can **duplicate** the project into their own workspace and start a new design using it as a template.

### Level 2 — Export a downloadable brand kit ZIP

Use the download button in the sidebar (or ask me to prep one) to export the whole folder. This is the format to send to:

- Agencies, freelancers, contractors who need the brand system but don't use Claude
- Conference organizers who need your logo + colors for a sponsor page
- Merch partners (Printful already has your stuff, but for new vendors)

They get: `README.md` (the brand bible), `colors_and_type.css`, `fonts/`, `assets/`, plus the preview HTMLs and slide templates as self-contained files.

### Level 3 — Host it publicly as a brand site

Drop the whole folder into an `/brand` subdirectory of your main site (static, no build required — it's just HTML + CSS + the compiled React bundles from `unpkg`). Then link to `https://grcengclub.com/brand/` from your footer.

A good copy block for your site:

> **Brand kit.** Building something with us — a meetup, a co-branded asset, a club presentation? Everything you need is in our brand kit. Colors, fonts, logos, the voice. Use it.

### Level 4 — Publish as an Agent Skill for your community

The `SKILL.md` at the root is already Claude-Code-compatible. Members who run Claude Code against their own repos can drop the folder into `.claude/skills/` and get the same brand-consistent design output you do.

This is the highest-leverage move if you want members' GRC engineering content (blog posts, talks, portfolio pages, conference decks) to **look like it's part of the Club**.

Add this to your onboarding doc:

> **Design anything for the Club.** Install the `grc-engineering-club-design` skill: download it from `[link]`, drop it in your `.claude/skills/` folder, and Claude will output brand-consistent slides, landing pages, or posts whenever you ask.

---

## What's inside — quick reference

| Path | What it is |
|---|---|
| `SKILL.md` | Agent skill manifest. What Claude Code reads first. |
| `README.md` | Brand bible: voice, palette, type, layout, iconography, caveats. |
| `colors_and_type.css` | CSS custom properties + semantic element rules. Drop-in include. |
| `fonts/inter-{400..900}.woff2`, `fonts/jetbrains-mono-{400,500}.woff2` | Vendored Inter and JetBrains Mono, no Google Fonts dependency. The system uses Inter 400/500 only. |
| `assets/logo.jpeg` | Square wordmark logo. Nav + favicon usage. |
| `assets/brand-mark-orange.jpg` | Expressive orange brand mark. Hero/cover usage. |
| `assets/leadership/` | Team headshots. |
| `assets/merch/` | Product shots for Run GRC tees, hoodies, mugs, etc. |
| `preview/*.html` | Reference cards — palette, type, components. |
| `slides/index.html` | 12 slide templates in a `<deck-stage>` shell. |
| `ui_kits/website/` | Marketing-site recreation (Home, Academy, Stories, Join, FAQ). |
| `ui_kits/certplatform/` | Academy cert-platform recreation (Dashboard, Course, Lesson, Labs, Exam). |

---

## Keeping it fresh

When the brand evolves:

1. Update `README.md` first (the rules).
2. Update `colors_and_type.css` tokens to match.
3. Update one card in `preview/` if a token meaningfully changed.
4. Re-register the card via the Design System tab so reviewers see a diff.

When a new surface ships (e.g. a member portal, a docs site, a CLI that's public):

1. Add `ui_kits/<surface>/{README.md, index.html, Components.jsx, Pages.jsx}`.
2. Register its `index.html` as a card.
3. Update the README index table.
