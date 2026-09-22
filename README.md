# Ifedolapo Ajayi — Portfolio

Personal portfolio site for Ifedolapo Ajayi, Frontend Engineer. Built with Next.js (App Router) and Tailwind CSS, with light/dark theming, smooth section navigation, and a selected-works showcase.

**Live:** [ifedolapoajayi.vercel.app](https://ifedolapoajayi.vercel.app)

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) — light/dark mode with system-preference detection and persistence
- [Framer Motion](https://www.framer.com/motion/) — entrance animations
- [Vercel Analytics](https://vercel.com/analytics)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/          # App Router entry (layout, page, providers)
  components/   # Page sections (Hero, Services, SelectedWorks, ...)
  data/         # Project data (src/data/projects.js)
  lib/          # Small shared helpers
  styles/       # Global Tailwind styles
```

To edit the project list shown in "My Projects", update [`src/data/projects.js`](src/data/projects.js).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
