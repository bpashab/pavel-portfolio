# Pavel Basha — Portfolio

Static personal portfolio built with Astro and TypeScript. Project content is stored separately from presentation so new case studies can be added without changing page components.

## Local development

Requirements:

- Node.js `22.23.4` or newer
- npm (included with Node.js)

If you use `nvm`, the required version is already recorded in `.nvmrc`:

```bash
nvm install
nvm use
npm install
npm run dev
```

Open `http://localhost:4321`.

## Add a project

1. Add a screenshot to `public/images/projects/`.
2. Add one object to `src/data/projects.ts`.
3. Add its English copy to `src/data/projectTranslations.ts`.
4. Run `npm run build`.

The project card and its full detail page are generated automatically.

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.23.4` or newer

The project is fully static and does not require a Cloudflare adapter or runtime environment variables.

## Language routing

- `/uk/` contains the Ukrainian site.
- `/en/` contains the English site.
- The language control preserves the current page and remembers the visitor’s choice in a cookie.
- `functions/index.ts` uses Cloudflare’s country metadata at `/`: visitors from Ukraine go to `/uk/`; all other countries go to `/en/`.
- Outside Cloudflare, the root page falls back to the saved preference or browser language.
