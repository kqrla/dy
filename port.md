# port: running the project locally

## prerequisites

- node.js 18 or later
- npm 9 or later

## installation

```bash
git clone <repo-url>
cd project
npm install
```

## environment setup

copy the example env file and fill in values:

```bash
cp .env.example .env
```

the `.env` file needs:

- `VITE_SUPABASE_URL` - your supabase project url
- `VITE_SUPABASE_ANON_KEY` - your supabase anon key

these are only needed if you connect to a supabase backend. the site works without them for static content.

## development server

```bash
npm run dev
```

opens at `http://localhost:4321` by default. astro hot-reloads on file changes.

## building

```bash
npm run build
```

outputs static html to `dist/`. astro builds every `.astro` page in `src/pages/` into its own html file.

## preview the build

```bash
npm run preview
```

serves the built site locally so you can verify the production output.

## deployment

the project builds to static html. deploy it anywhere that serves files:

- vercel (adapter included in astro config)
- netlify
- cloudflare pages
- any static host

the `astro.config.mjs` currently uses the `@astrojs/vercel` adapter. change it if deploying elsewhere.
