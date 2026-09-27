# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
twelve lifts, open a detailed breakdown of any workout, lock lifts into
today's plan or save them for later, and track live totals for exercises,
minutes, and calories — all persisted across page reloads.

## Live Demo

_Add your deployed URL here after deploying (Vercel / Netlify / Cloudflare Pages)._

## Technologies Used

- **Next.js 14** (App Router) — routing, server components, data fetching
- **TypeScript** — type-safe components, props, and API models
- **Tailwind CSS** — utility-first styling and responsive layout
- **DaisyUI** — component classes (badges, tabs, dropdown, loading spinner) on a custom dark theme
- **React Hot Toast** — toast notifications for plan/save/remove/done actions
- **React Context API** — global state for Today's Plan and Saved lists
- **Browser localStorage** — persists the plan/saved lists across reloads

## Features

1. **Responsive workout library** — a 3-column grid on desktop that collapses to 2 and 1 columns on tablet/mobile, with search and a sort dropdown (Duration / Calories / Rating).
2. **Detailed workout pages** — two-column layout with image, category tags, key specs table, and numbered instructions, dynamically routed by workout id.
3. **Today's Plan & Saved system** — add a workout to today's plan (capped at 5 lifts) or save it for later, each with its own live navbar badge counter.
4. **My Plan dashboard** — live Exercises/Minutes/Calories summary, tabbed Today's Plan / Saved views, Mark as Done, and Remove actions.
5. **Persistent state** — plan and saved lists are stored in `localStorage`, so your progress survives a page reload.
6. **Toast feedback** — every add/remove/save/done action confirms itself with a toast notification.
7. **Graceful loading & error states** — route-level loading skeletons, a custom 404 page for unknown routes, and an automatic fallback to a mirrored API if the primary one is unreachable.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
fitlog/
├─ app/
│  ├─ layout.tsx            # Root layout: fonts, theme, Navbar/Footer, Toaster, PlanProvider
│  ├─ page.tsx               # Home page (Hero + Library)
│  ├─ loading.tsx            # Home page loading skeleton
│  ├─ not-found.tsx          # Custom 404 page
│  ├─ globals.css            # Tailwind + DaisyUI layers
│  ├─ workout/[id]/
│  │  ├─ page.tsx            # Workout detail page
│  │  └─ loading.tsx         # Detail page loading skeleton
│  └─ my-plan/
│     └─ page.tsx            # My Plan page (tabs, metrics, list)
├─ components/                # All reusable UI pieces
├─ context/
│  └─ PlanContext.tsx         # Global plan/saved state + localStorage sync
├─ lib/
│  ├─ api.ts                  # Fetch helpers (primary + fallback endpoint)
│  ├─ storage.ts              # localStorage read/write helpers
│  └─ types.ts                # Shared TypeScript types
├─ public/                    # Static assets
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.mjs
└─ tsconfig.json
```

## API

- Primary: `https://api.abcz.workers.dev/api/fitlog`
- Fallback: `https://api.api-store.workers.dev/api/fitlog`

The app automatically retries against the fallback endpoint if the primary
one fails.
# fitlog
