# tech stack

## astro

the site is built with astro 5. astro was chosen because:

- it compiles to static html, which means fast page loads and no client-side framework overhead
- the component model (`.astro` files) keeps markup and logic co-located without requiring a full js framework
- content collections and file-based routing make it easy to add new guide pages
- the build output is just html/css/js files, deployable anywhere

tradeoff: astro's static-first approach means no server-side rendering by default. dynamic features would require an adapter or edge functions.

## vercel adapter

`@astrojs/vercel` is configured as the deploy adapter. this was chosen because vercel provides:

- zero-config deploys from git
- automatic preview deploys on branches
- edge function support if needed later

tradeoff: locks the deploy target to vercel. switching to another host requires changing the adapter in `astro.config.mjs`.

## font awesome

icons are loaded from the font awesome 6 cdn. this was chosen over emoji because:

- emoji render differently across operating systems (apple vs google vs microsoft)
- font awesome icons are consistent everywhere, similar to apple's sf symbols
- the icon set is comprehensive and well-maintained

tradeoff: adds an external cdn dependency. if the cdn goes down, icons disappear (but the site still works).

## google fonts

ibm plex mono for body text and caveat for handwritten accents. chosen because:

- ibm plex mono is highly readable at small sizes and has a technical feel
- caveat adds personality without being illegible
- both are free and well-supported

tradeoff: external dependency. if google fonts is slow or blocked, the site falls back to system fonts.

## css

all styles are in a single `global.css` file. no css-in-js, no preprocessor. chosen because:

- the site is small enough that a single file is manageable
- no build step needed for styles
- css custom properties handle theming (light/dark) without javascript
- the cascade and specificity are predictable when everything is in one file

tradeoff: as the site grows, the single file may need splitting. for now, cohesion beats modularity.

## no database

the site is fully static. all content is in `.astro` files and the `cards.ts` data file. no database, no auth, no api. chosen because:

- the content is editorial, not user-generated
- static sites are fast, cheap, and reliable
- no security surface area to worry about

tradeoff: adding user accounts, bookmarks, or comments would require a backend (supabase is the planned path).
