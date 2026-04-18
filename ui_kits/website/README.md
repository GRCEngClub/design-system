# Website UI Kit — GRC Engineering Club

Recreates the marketing site (grcengclub.com) as a single click-thru prototype: Home, Academy, Member Stories, Join, FAQ.

## Files

- `index.html` — main app, routes between 5 screens with a shared sticky nav
- `Components.jsx` — `ReviewBanner`, `Navbar`, `CTAButton`, `SectionHeading`, `ContentCard`, `StoryCard`, `Footer`, `Icon` (Lucide wrapper)
- `HomePage.jsx` — Home: hero, "What is GRC Engineering", 4 benefits, 6 content pillars, member wins, final CTA
- `Pages.jsx` — Academy (CGE-P), Stories grid, Join (2 tiers + how it works), FAQ accordion

## Conventions used

- Two background tones alternating per section: `#0D0D0D` (page) and `#1A1A1A` (alt section)
- Cards: `#2A2A2A` background, `#3A3A3A` border, hover → `rgba(232,101,10,.5)` border
- All icons from Lucide (CDN), wrapped in orange `bg-orange/10` circular wells when emphasized
- CTAs are always orange primary with a soft orange glow shadow
- Display headings: Inter Black 900, tracking-tight
