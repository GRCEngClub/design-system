# Website UI Kit — GRC Engineering Club

Recreates the marketing site (grcengclub.com) as a single click-thru prototype: Home, Academy, Member wins, Pricing, FAQ.

The kit mirrors production as of **2026-11-01**, after the unslop pass. **Production source is the source of truth**: `grcengclub/src/pages/Home.tsx`, `src/components/{Navbar,CTAButton,ContentCard,SectionHeading,StoryCard,PipelineRun}.tsx` and `src/index.css`. When the kit and production disagree, fix the kit.

## Files

- `index.html` — shell: Tailwind CDN with the brand token config (same hexes as `src/index.css`), React + Babel, Lucide; routes between 5 screens with a shared sticky nav
- `Components.jsx` — `Icon`, `Tag`, `Navbar`, `CTAButton`, `SectionHeading`, `ContentCard`, `StoryCard`, `Footer`
- `PipelineRun.jsx` — the hero's product view, ported line for line from `src/components/PipelineRun.tsx`
- `HomePage.jsx` — Home: hero with the pipeline run, flagship project, Academy, definition, what members get, what's inside, member wins, YouTube, final CTA
- `Pages.jsx` — Academy (credential picker + seven domains), Member wins grid, Pricing (annual / monthly + how it works), FAQ accordion

## Conventions used

- Graphite ramp with a faint warm tint: page `#111110`, alt section `#161514`, card `#1C1B19`, raised surface / hairline / chip `#2B2925`. Sections alternate page / alt.
- Three text roles: `#EFE9DE` primary, `#AAA398` secondary, `#8A847A` meta. Orange `#E8650A` is the primary button fill and one figure per screen; orange text on dark is `#FF8533`.
- Card recipe: `bg-brand-gray border border-brand-gray-light rounded-xl p-6 hover:border-brand-text-dim/40 transition-colors duration-150`.
- Buttons: primary = orange fill + dark text, no shadow; secondary = hairline, raised on hover. Press `scale-[0.98]`.
- Type: Inter 400/500 only, hierarchy by size and color; eyebrows are `font-mono text-xs text-brand-text-dim` in sentence case. Control IDs and codes (`AC-2`, `D4`, `CGE-P`) are 11px mono tags in a 4px-radius raised chip (`Tag`).
- Icons: Lucide, 16 to 20px, stroke 1.5, in the text-role color. No wells, no orange icons.
- Left out of the kit: the member globe, upcoming events and Patreon sections, and the sticky mobile CTA.
