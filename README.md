# Business Atlas

A frontend-only design prototype for an Indian business encyclopedia. Built with Next.js App Router, React, TypeScript, Tailwind CSS, Lucide, and Recharts. No backend, authentication, financial APIs, or AI features.

## Run locally

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local server on port 3000. Routes: `/`, `/companies`, and `/companies/adani-ports`.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Prototype behavior

- Local company search, sector/industry/market-cap/exchange filters, and useful empty states.
- Concise business-area explanations and a visible five-step cargo journey with expandable revenue details.
- Scannable risk bullets, anchored section navigation, and persistent light/dark themes.
- Responsive mobile navigation, charts, and directory.
- Optional illustrative financial charts with tooltips and revenue/profit/margin selection.

Adani Ports is the only complete **qualitative prototype**. All other companies are UI examples. Financial metric cards reproduce user-provided screenshot values for FY2025–26, prominently labeled unverified. They are not independently verified company results. Optional chart samples use arbitrary units and are not company data. Company information requires document-level source verification before publication. Corporate website access was blocked during development, so no unverified external source link is exposed.

The port artwork is a custom, locally bundled SVG. No external assets or fonts are required. Design tokens and responsive rules are in `app/globals.css`; reusable interactive components are in `components`; local example data is in `lib/data.ts`.

This prototype is for visual review, not investment advice. Nothing has been deployed.
