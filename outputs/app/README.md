# INDEPTH

INDEPTH is a focused foundation for a learning platform built around guided knowledge journeys.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

- `npm run dev` starts the development server.
- `npm run build` creates the production build.
- `npm run lint` checks code quality.
- `npm run format:check` verifies formatting.

## Architecture

- `app/` contains route-level UI and metadata.
- `components/` provides reusable layout, sections, cards, navigation, common, and UI primitives.
- `lib/` contains content models and shared utilities.

Topics are currently modeled in `lib/topics.ts`. This boundary keeps future CMS, API, and lesson integrations isolated from presentation components.

## Prehistoric Life

The first content-rich topic lives in `lib/prehistoric-life/animals.ts`. Its animal records separate sourced claims, range-region markers, uncertainty notes, and sources from presentation components.

The optional 3D globe is lazy-loaded and has a text-first fallback when WebGL is unavailable. Its highlighted areas are intentionally broad evidence markers, not exact prehistoric borders. Source links appear on every animal journey; the initial source set includes the U.S. National Park Service, Smithsonian Institution, Natural History Museum London, PeerJ, and PNAS.
