# Cert Platform UI Kit — GRC Eng Academy

Recreates the Academy (certplatform) surface: the authenticated product experience a member uses to work through the CGE-P certification.

> **Note on provenance:** The `certplatform/` subdirectory of the codebase was not available at the time this kit was built (only the public marketing site was mounted). This kit is a **brand-consistent proposal** built on the same system as the marketing site — treat it as a hi-fi target, not a 1:1 recreation. Swap individual components for the real source once the codebase is remounted.

## Screens

- **Dashboard** — Hero ("you're 32% of the way to CGE-P"), progress ring, chapters grid, recent activity, "Up next" card.
- **Course outline** — All 7 chapters, expanded with lessons, per-chapter progress bars, current-lesson highlight.
- **Lesson player** — 16:9 video area, scrubber, "About this lesson" + Resources, sidebar with chapter progress + next up + discussion.
- **Labs** — Card grid of hands-on labs with chapter chips, tags, lock states, time estimates.
- **Exam readiness** — Per-domain readiness bars, mock-exam card (gated), capstone submission card.

## Files

- `index.html` — shell with client-side routing (localStorage-persisted)
- `Components.jsx` — `AcademyNav`, `AcademyButton`, `Chip`, `Avatar`, `Progress`, `Dashboard`, `Icon`
- `Pages.jsx` — `CourseOutline`, `LessonPlayer`, `LabsPage`, `ExamPage`

## Conventions

- Same dark/orange tokens as the marketing site (`../../colors_and_type.css`)
- Navbar adopts a product-style sticky top bar with tab-style nav items instead of the marketing-site dropdown menus
- Progress visualizations use orange → orange-light linear-gradient fills; circular progress uses a `conic-gradient` donut
- All icons are Lucide, pulled from CDN and rendered via `lucide.createIcons()` on every route change
