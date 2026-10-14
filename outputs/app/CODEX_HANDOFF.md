# INDEPTH Continuation Handoff for Codex

## 1. Project Location & Quick Start

- **Project Path**: `C:\Users\DELL\Documents\Codex\2026-10-14\you-are-a-senior-software-architect`
- **Shell**: PowerShell
- **Start Command**:
  ```powershell
  cd "C:\Users\DELL\Documents\Codex\2026-10-14\you-are-a-senior-software-architect"
  npm run dev
  ```
- **Local Dev Server**: `http://localhost:3000`

---

## 2. Ready-to-Paste Codex Continuation Prompt

```markdown
You are a senior software architect continuing work on the INDEPTH learning platform at:
C:\Users\DELL\Documents\Codex\2026-10-14\you-are-a-senior-software-architect

Read `outputs/CODEX_HANDOFF.md` and `outputs/ANTIGRAVITY_HANDOFF.md` before making any modifications.
Preserve the existing architecture, dark aesthetic (#0B1020, gold #C8A45D, sky #4DA8DA, paper #F5F5F5), TypeScript strictness, factual caution, and accessibility (WCAG 2.1/2.2).

Do NOT rebuild from scratch. Content data must stay separate from presentation components.
Continue from the listed next steps in `outputs/CODEX_HANDOFF.md`.
```

---

## 3. Product & Technical Baseline

- **Framework**: Next.js 16 (App Router) with TypeScript & Tailwind CSS.
- **UI & Graphics**: Framer Motion, Lucide icons, Three.js, React Three Fiber (`@react-three/fiber`), Radix Slot primitives.
- **Color System**:
  - Background / Ink: `#0B1020`
  - Gold: `#C8A45D`
  - Sky: `#4DA8DA`
  - Foreground / Paper: `#F5F5F5`
  - Muted: `#A9B2C3`
- **Core Principle**: Focused, calm, distraction-free knowledge platform built around evidence-aware, connected learning journeys.
- **Out of Scope**: Do NOT add authentication, external databases, CMS, AI chatbot wrappers, quizzes, comments, or heavy UI frameworks.

---

## 4. Current State & Completed Architecture

### Existing Routes

- `/` — Homepage featuring the hero, value pillars, and a dedicated **Prehistoric Life Featured Journey** card alongside topic discovery cards.
- `/about` — Platform philosophy and editorial principles.
- `/roadmap` — Version progression and deliberate product milestones.
- `/topics` — Topic directory with status badges (e.g. `3 Journeys` on Prehistoric Life).
- `/topics/prehistoric-life` — Ice Age journey discovery hub with editorial cards for each animal.
- `/topic/[slug]` — Dynamic fallback route for upcoming topics.
- `/topic/prehistoric-life/smilodon` — Journey for _Smilodon fatalis_.
- `/topic/prehistoric-life/woolly-mammoth` — Journey for _Mammuthus primigenius_.
- `/topic/prehistoric-life/dire-wolf` — Journey for _Aenocyon dirus_.
- `not-found` — Minimal 404 page with return navigation.

### Key Components & Modules

- `lib/topics.ts`: Topic definitions, Lucide icons (`Footprints` for prehistoric life), and topic badge annotations (`badge: "3 Journeys"`).
- `lib/prehistoric-life/types.ts`: TypeScript content schema (`PrehistoricAnimal`, `RangeRegion`, `AnimalFact`, `Source`, `JourneyImage`).
- `lib/prehistoric-life/animals.ts`: Content data for the three researched species with verified fossil localities, isotopic dietary context, and scientific citations.
- `components/prehistoric-life/globe/animal-range-globe.tsx`:
  - 1:1 proportional pointer dragging with clamped vertical pitch ($-0.65$ to $+0.65$ rad).
  - Keyboard accessibility: `ArrowLeft`/`ArrowRight` (rotate longitude), `ArrowUp`/`ArrowDown` (tilt latitude), `Space`/`Enter` (pause/resume), `Home` (reset).
  - Floating toolbar with Play/Pause, Rotate West/East, and Reset orientation buttons.
  - Interactive fossil locality buttons: clicking smooth-glides the 3D sphere to coordinates, pauses auto-rotation, and displays a locality callout card with `aria-live` announcements.
  - Museum-grade celestial/terrestrial cartographic graticules (equator, $30^\circ$/$60^\circ$ parallels, meridians) and soft atmospheric rim glow.
  - Zero CLS (`h-[25rem] sm:h-[30rem]`) with fallback when WebGL is unavailable.
- `components/prehistoric-life/journey-navigation.tsx`: Reusable bottom-of-page navigation that links the learner to the other Ice Age species in the collection.
- `components/sections/topics-section.tsx`: Homepage showcase highlighting Prehistoric Life with a 3-chapter visual teaser and direct links.

---

## 5. Verification Commands & Windows Gotchas

Run all validation checks before committing changes:

```powershell
# 1. Type check
npx tsc --noEmit

# 2. Lint check (ESLint 9)
npm run lint

# 3. Code formatting
npm run format:check
# To auto-fix: npm run format

# 4. Production build
npx next build --webpack
```

> **Note on Windows Builds**:
> When running `npm run build` on Windows sandbox environments, Turbopack's PostCSS child process IPC can occasionally report `TurbopackInternalError: node process exited before we could connect to it`.
> Running `npx next build --webpack` compiles in-process reliably and prerenders all 19 static routes cleanly.

---

## 6. Scientific Research & Content Guardrails

1. **Keep claims tied to sources**: Every fact in `lib/prehistoric-life/animals.ts` must reference reliable authorities (e.g. U.S. National Park Service, Smithsonian Institution, Natural History Museum London, PeerJ, PNAS).
2. **Retain factual uncertainty**: Never make unwarranted claims about unpreserved features (e.g., exact coat color/pattern, fixed pack structure, singular extinction trigger). Retain the dedicated `uncertain` bullet points and cautious language ("current evidence suggests").
3. **Range markers are evidence areas**: The 3D globe coordinates and discs represent broad fossil-supported geographic occurrences, NOT contiguous sovereign borders or complete species range envelopes.
4. **Captioned editorial art**: Visual assets must have clear captions explicitly noting they are artist reconstructions informed by fossils, not direct photographs.

---

## 7. Concrete Next Steps for Codex

Choose from the following prioritized enhancements:

### Option A: Add a 4th Prehistoric Life Journey

- Add a new record to `lib/prehistoric-life/animals.ts` using the `PrehistoricAnimal` schema:
  - Suggested candidate: **Woolly Rhinoceros** (_Coelodonta antiquitatis_) or **Giant Ground Sloth** (_Megalonyx jeffersonii_).
  - Include verified fossil localities (latitude/longitude), radiocarbon timeline, diet isotopes, known facts, uncertainties, and primary citations.
  - Provide an editorial illustration in `public/prehistoric-life/` with a descriptive, cautious caption.
  - Because `generateStaticParams` and dynamic routes are driven by `prehistoricAnimals`, adding the record automatically creates `/topic/prehistoric-life/[slug]` and updates all cards and navigation!

### Option B: Ice Age Species Comparison Matrix

- Build a reusable comparison view/modal (`components/prehistoric-life/species-comparator.tsx`) on `/topics/prehistoric-life`:
  - Compare temporal overlap, geographic reach (latitude spans), dietary guild (apex predator vs. steppe grazer), and key fossil localities side-by-side.
  - Maintain the calm, dark INDEPTH styling.

### Option C: Deepen the Next Core Topic

- Scaffold the next foundational chapter (e.g., `/topics/space` or `/topics/history`) following the same modular content pattern:
  - Create typed models under `lib/[topic]/types.ts` and `lib/[topic]/data.ts`.
  - Build clean evidence-led journey pages without generic placeholder text.
