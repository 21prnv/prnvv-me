# prnv — portfolio (Vite)

Personal portfolio for Pranav Patil. **Vite + React + TypeScript + Tailwind CSS**, designed to deploy on **Cloudflare Pages**. Design inspired by [kree8.studio](https://www.kree8.studio/).

## Stack
- Vite 5 · React 18 · TypeScript
- Tailwind CSS 3 (custom kree8-style palette + Phudu / Inter / Caveat fonts)
- Framer Motion for scroll reveals
- lucide-react icons

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy to Cloudflare Pages

**Option A — Git integration (recommended)**
1. Push this folder to a GitHub repo.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Output directory: `dist`.

**Option B — Wrangler CLI (direct upload)**
```bash
npx wrangler login
npm run deploy     # builds then runs: wrangler pages deploy dist
```

`public/_redirects` handles SPA routing. Edit all content in [`src/data/resume.ts`](src/data/resume.ts).
