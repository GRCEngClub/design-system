# Contributing

This is the Club's brand kit. If you're a member and you've made something you think should live here, open a PR.

## What we want

- **New slide templates.** Add to `slides/` as a self-contained `<deck-stage>` block, register it in `slides/index.html`, follow the existing pattern.
- **New UI kit surfaces.** Add `ui_kits/<surface>/{README.md, index.html, Components.jsx, Pages.jsx}`. Must follow the brand rules in [BRAND.md](BRAND.md).
- **Social templates.** LinkedIn carousel page, Twitter/X card, YouTube thumbnail, conference poster — static HTML preferred.
- **Brand-bible corrections.** Spotted a rule that's outdated, wrong, or ambiguous? Fix it in [BRAND.md](BRAND.md) and the relevant preview card.

## Rules that can't bend

Before you open a PR, check your work against:

- One accent color: orange `#E8650A`. No other hues.
- Dark mode only. No light-mode surfaces.
- Inter is the only font. Heavy weights for display.
- Lucide icons only. No emoji, no other icon libraries.
- The card recipe: `bg-brand-gray rounded-xl border-brand-gray-light hover:border-brand-orange/50`.
- The voice is builder-energy. Direct, imperative, second-person. No vendor-speak, no fear-mongering, no em dashes in club copy.

If your addition breaks one of these, the PR won't merge — even if it looks great on its own.

## How to propose a change

1. Fork the repo.
2. Branch off `main` with a descriptive name — e.g. `slides/threat-model-layout`, `social/linkedin-carousel`, `brand/fix-hover-state-rule`.
3. Make the change. Keep the diff scoped — one slide or one component per PR is ideal.
4. Open a PR against `main`. Describe what you made, where it's meant to be used, and why it follows the rules.
5. Tag a maintainer for review.

## Review turnaround

Maintainers aim for a first response within a week. Design questions go faster than brand-rule changes — those need wider buy-in.

## Questions

If you're not sure whether an idea fits before you build it, ask in the Club community chat first. Saves you time, saves us a rejected PR.
