# Cert Platform UI Kit — GRC Eng Academy

Recreates the Academy (cert.grcengclub.com) surface: the authenticated product experience a member uses to work through the CGE-P certification.

The kit mirrors production as of **2026-11-01**, after the unslop pass. **Production source is the source of truth**: `cert-platform/frontend/src/pages/learner/Dashboard.tsx`, `src/components/NavBar.tsx`, `src/pages/public/LandingPage.tsx` and `tailwind.config.js`. When the kit and production disagree, fix the kit.

## Screens

- **Dashboard** — 1:1 port of production: course crumb with a mono tag, "43% to the exam" with the orange percent, the progress panel (ring + three stat tiles), the primary course card with the seven-domain list, the other courses, and the right rail (certifications, CPE, labs, tools).
- **Course outline** — three domains expanded with lessons, flat progress bars, done / now / todo states. A brand-consistent proposal on the Dashboard recipe.
- **Lesson player** — 16:9 frame with flat controls, about + resources cards, sidebar with domain progress, up next and discussion. Proposal.
- **Labs** — card grid with domain tags, tool tags, lock states, time estimates. Proposal.
- **Exam readiness** — per-domain readiness rows with flat bars, mock-exam card (disabled), capstone card. Proposal.

## Files

- `index.html` — shell: Tailwind CDN with the brand token config (same hexes as `tailwind.config.js`), React + Babel, Lucide; client-side routing (localStorage-persisted)
- `Components.jsx` — `AcademyNav`, `AcademyButton`, `Tag` (`Chip` is an alias), `Avatar`, `Progress`, `StatTile`, `ProgressRing`, `DomainRows`, `Dashboard`, `Icon`
- `Pages.jsx` — `CourseOutline`, `LessonPlayer`, `LabsPage`, `ExamPage`

## Conventions

- Same graphite ramp and three text roles as the website kit (`../../colors_and_type.css`); orange is the primary button, the headline percent and the current step.
- Nav is the product bar from `NavBar.tsx`: 56px, 32px tabs, the active tab is a raised surface step, not an orange tint.
- Progress is flat: 4px bars on the raised track, orange for the course the hero is about, the meta color for everything else. The only gradient is the conic progress ring, which production keeps.
- Domain and control codes (`D4`, `CGE-P`) are 11px mono tags; done is an emerald check, in progress is an orange dot.
- Lucide icons at 16px, stroke 1.5, in the text-role color, rendered via `lucide.createIcons()` on every route change.
