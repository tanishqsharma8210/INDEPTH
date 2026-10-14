# INDEPTH Continuation Handoff

## Project location

`C:\Users\DELL\Documents\Codex\2026-10-14\you-are-a-senior-software-architect`

## Start command

```powershell
cd "C:\Users\DELL\Documents\Codex\2026-10-14\you-are-a-senior-software-architect"
npm install
npm run dev
```

Open `http://localhost:3000` after the development server starts.

## Ready-to-paste continuation prompt

```markdown
Continue the INDEPTH learning-platform project in this workspace. Read `outputs/ANTIGRAVITY_HANDOFF.md` before making changes and preserve the existing architecture, visual system, factual caution, accessibility, and TypeScript quality.

Do not rebuild the project from scratch. Inspect the existing routes, components, and content model first. Continue from the listed next steps, keeping every change modular, responsive, production-ready, and consistent with the premium dark INDEPTH interface.
```

## Product and technical baseline

- Next.js 16 App Router with TypeScript and Tailwind CSS.
- Uses Framer Motion, Lucide icons, shadcn-style UI primitives, React Three Fiber, and Three.js.
- Core palette: background `#0B1020`, gold `#C8A45D`, sky `#4DA8DA`, foreground `#F5F5F5`, muted text `#A9B2C3`.
- The shared layout provides the navbar, theme toggle, footer, SEO metadata, responsive navigation, and a Dark Reader hydration safeguard.
- Do not add authentication, a database, CMS, AI features, quizzes, comments, profiles, or backend services unless the product requirements change.

## Existing routes

- `/` — landing page
- `/about` — project intent and principles
- `/roadmap` — current and future direction
- `/topics` — topic discovery
- `/topics/prehistoric-life` — Ice Age journey discovery
- `/topic/[slug]` — generic topic placeholder route
- `/topic/prehistoric-life/smilodon`
- `/topic/prehistoric-life/woolly-mammoth`
- `/topic/prehistoric-life/dire-wolf`
- `not-found` — 404 route

## Prehistoric Life architecture

- `lib/prehistoric-life/types.ts` contains the typed content schema.
- `lib/prehistoric-life/animals.ts` contains the three researched animal records, source links, range markers, visual metadata, evidence notes, and content sections.
- `components/prehistoric-life/animal-hero.tsx` is the visual hero shared by all animal journeys.
- `components/prehistoric-life/fact-grid.tsx`, `evidence-list.tsx`, `range-summary.tsx`, and `source-list.tsx` are reusable content blocks.
- `components/prehistoric-life/range-and-world.tsx` lazy-loads the interactive range globe.
- `components/prehistoric-life/globe/animal-range-globe.tsx` contains the lightweight React Three Fiber globe and accessible fallback behaviour.
- `app/topic/prehistoric-life/[animal]/page.tsx` renders reusable learning journeys from the data model.

## Completed content work

- Added evidence-aware journeys for `Smilodon fatalis`, `Mammuthus primigenius`, and `Aenocyon dirus`.
- Each journey now includes habitat, diet, physical traits, adaptation, behaviour limits, fossil evidence, scientific significance, extinction context, supported regions, known facts, uncertainties, sources, and visual captions.
- Factual uncertainty is deliberately retained: no unsupported claims about coat colour, fixed pack behaviour, precise prehistoric borders, or singular extinction causes.
- The topic discovery page now uses image-led cards.
- The journey hero and evidence section use original visual reconstructions with explanatory captions.

## Generated image assets

All final assets are already inside the project and are referenced through `next/image`:

- `public/prehistoric-life/smilodon-journey.png`
- `public/prehistoric-life/woolly-mammoth-journey.png`
- `public/prehistoric-life/dire-wolf-journey.png`

They were generated as premium natural-history editorial reconstructions. Each caption clearly distinguishes the illustration from direct fossil evidence.

## Research guardrails

- Keep scientific claims tied to the source list in `lib/prehistoric-life/animals.ts`.
- Prefer museums, universities, government science institutions, peer-reviewed work, and recognised palaeontology collections.
- When evidence is incomplete or debated, use language such as “current evidence suggests” and retain a dedicated uncertainty statement.
- Treat range markers as broad fossil-supported evidence areas, not exact borders or continuous distributions.

## Validation status

- `npx tsc --noEmit` passed cleanly with 0 type errors.
- `npm run lint` (ESLint 9) passed with 0 errors and 0 warnings across all app, components, and lib files.
- `npm run format:check` passed with 100% Prettier compliance.
- Production build succeeded and prerendered all 19 static routes (`/`, `/about`, `/roadmap`, `/topics`, `/topics/prehistoric-life`, 9 topic routes, and 3 animal journey pages).
- Dynamic globe lazy-loading skeleton height aligns with the interactive container (`h-[25rem] sm:h-[30rem]`) with zero cumulative layout shift (CLS).

## Recently completed enhancements

1. **Enhanced Range Globe (`components/prehistoric-life/globe/animal-range-globe.tsx`)**:
   - Fixed pointer drag delta accumulation for smooth, direct 1:1 planetary rotation and latitude tilt clamping.
   - Full keyboard accessibility: Arrow keys rotate and tilt, Space/Enter toggles rotation pause, Home resets view.
   - Added accessible floating control bar with Play/Pause, Rotate East/West, and Reset orientation buttons.
   - Added interactive fossil locality buttons: clicking a region smoothly rotates the globe to center on that latitude/longitude with a callout card and polite screen-reader announcements.
   - Added cartographic graticules (equator, parallels at 30°/60°, and meridians) and atmospheric rim lighting.
   - Preserved lazy loading, reduced-motion preferences, keyboard accessibility, pause-on-interaction, and non-WebGL fallback.

2. **Connected Journey Navigation (`components/prehistoric-life/journey-navigation.tsx`)**:
   - Embedded at the end of every animal journey page (`app/topic/prehistoric-life/[animal]/page.tsx`), providing continuous learning paths to the remaining prehistoric species in the collection.

3. **Homepage Featured Journey Showcase (`components/sections/topics-section.tsx`)**:
   - Elevated Prehistoric Life into a prominent editorial showcase card on the homepage, previewing Smilodon, the Woolly mammoth, and the Dire wolf with direct journey links.
   - Added topic badges (`badge?: string`) and updated Prehistoric Life icon to `Footprints` in `lib/topics.ts`.

## Practical next steps

1. Start development server (`npm run dev`) and explore the interactive globe, keyboard controls, and journey navigation at `http://localhost:3000`.
2. To expand prehistoric content, add new animal records strictly through the typed `PrehistoricAnimal` model in `lib/prehistoric-life/animals.ts`.
3. Add original illustrations only when each has an educational purpose and factual caption.
4. Expand other topics (`science`, `history`, `space`) using the proven architecture established by Prehistoric Life.

## Important working conventions

- Use `next/image` for local image assets.
- Keep content data separate from rendering components.
- Keep the interface minimal, premium, spacious, dark-first, and responsive.
- Do not use Bootstrap, jQuery, inline styles, lorem ipsum, or heavy libraries.
- Do not add unverified prehistoric facts or remove factual caveats.
