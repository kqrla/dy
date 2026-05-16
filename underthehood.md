# under the hood: how the system is structured

## architecture

the site is a static astro application. astro compiles `.astro` components into html at build time. there is no client-side javascript framework (no react, no vue). the only client js is the theme/background toggle in the base layout.

## data flow

1. `src/data/cards.ts` defines all card data (titles, descriptions, links, icons, accent colors)
2. pages import card data and render it through the `GuideCard` component
3. the home page (`src/pages/index.astro`) groups cards into sections with subheadings
4. the guides index (`src/pages/guides/index.astro`) renders component cards
5. individual guide pages are standalone `.astro` files with their own content

## key abstractions

### base layout (`src/layouts/BaseLayout.astro`)

every page inherits from this. it provides:
- the site header with navigation and brand wordmark
- the footer
- theme toggle (dark/light) with localstorage persistence
- background pattern toggle (dots, grid, lined, solid) with localstorage persistence
- keyboard shortcuts: `d` for theme, `g` for background
- cross-tab sync via the `storage` event
- font awesome icon library
- google fonts (ibm plex mono, caveat)

### guide card (`src/components/GuideCard.astro`)

a reusable card component that takes props: title, description, href, accent, icon. renders as an `<a>` tag with a colored icon area and text content. the accent prop controls which pastel color the icon background uses.

### note component (`src/components/Note.astro`)

inline callout boxes with variants: try, care, info. used for tips, warnings, and suggestions within guide pages.

### card data (`src/data/cards.ts`)

two data structures:
- `homeSections`: grouped sections for the home page, each with a heading, hint, and array of cards
- `componentCards`: flat list for the guides index page

the `homeCards` export is a flattened version of `homeSections` for backward compatibility.

## why things are organized this way

- pages are standalone files, not dynamically routed. this makes the build output predictable and every url maps to a real file
- card data lives in a separate data file, not inline in pages, so it can be reused and the pages stay readable
- the base layout handles all global concerns (theme, nav, footer) so individual pages only worry about content
- font awesome icons are used instead of emoji because they render consistently across operating systems (emoji vary between apple, google, microsoft, etc.)
- the sticky/entry pattern in book lists puts the tool name in a highlighted sticky note on the right and the description in plain text on the left, matching the visual language of the original guides page
