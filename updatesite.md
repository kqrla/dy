# how to update the site

this file explains exactly how to add new cards, pages, and sections to the site.

---

## adding a new card to an existing section

### 1. open `src/data/cards.ts`

find the section you want to add to. sections are defined in `homeSections`, `componentCards`, or `pkmCards`.

### 2. add a card object

each card has five fields:

```ts
{
  title: 'card title',           // shown as the heading
  description: 'short blurb',    // shown below the title
  href: '/guides/page-name',     // where the card links to
  accent: 'p1',                  // color: p1, p2, p3, p4, or p5
  icon: 'fa-solid fa-icon-name', // font awesome icon class
}
```

### 3. choose an accent color

- `p1` = warm peach
- `p2` = soft coral
- `p3` = mint
- `p4` = sky blue
- `p5` = lavender

rotate through them so adjacent cards don't share the same color.

### 4. choose an icon

browse font awesome 6 free solid icons: https://fontawesome.com/icons

use the class name format: `fa-solid fa-icon-name`

examples:
- `fa-solid fa-brain` (brain icon)
- `fa-solid fa-bolt` (lightning bolt)
- `fa-solid fa-book` (book)
- `fa-solid fa-microchip` (chip)

### 5. save and rebuild

```bash
npm run build
```

the card will appear on whichever page uses that data array.

---

## adding a new section to the home page

### 1. open `src/data/cards.ts`

### 2. add a new object to the `homeSections` array

```ts
{
  heading: 'section title',
  hint: 'short description under the heading',
  cards: [
    // add card objects here (see above for format)
  ],
},
```

### 3. save and rebuild

the home page (`src/pages/index.astro`) automatically renders all sections from `homeSections`.

---

## adding a new guide page

### 1. create the page file

create `src/pages/guides/your-page-name.astro`:

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import Note from "../../components/Note.astro";
const title = "your page name — the dysfunctional executives";
---
<BaseLayout {title}>
  <article class="container">
    <h1>your page name</h1>
    <p>intro paragraph here.</p>

    <h2>section heading</h2>
    <ul>
      <li>item one</li>
      <li>item two</li>
    </ul>

    <Note variant="try">a tip for the reader.</Note>

    <div class="callout">pro tip: closing thought here.</div>
  </article>
</BaseLayout>
```

### 2. add a card that links to it

in `src/data/cards.ts`, add a card to the appropriate section with:

```ts
href: '/guides/your-page-name',
```

### 3. save and rebuild

---

## adding a new pkm page

same as adding a guide page, but:

1. create the file at `src/pages/pkm/your-page-name.astro`
2. add a card to `pkmCards` in `cards.ts` with `href: '/pkm/your-page-name'`
3. the pkm index page (`src/pages/pkm/index.astro`) automatically renders all cards from `pkmCards`

---

## adding interactive checkboxes

to add clickable checklist items (like the soldering bench notes or second brain setup checklist):

### 1. use the note component with variant "bench"

```astro
<Note variant="bench" label="your checklist title">
  <ul>
    <li>first item to check off</li>
    <li>second item to check off</li>
    <li>third item to check off</li>
  </ul>
</Note>
```

### 2. how it works

the base layout includes javascript that listens for clicks on list items inside `.note` elements. clicking a list item toggles the `data-done` attribute, which applies a strikethrough and checkmark style.

you don't need to add any javascript yourself. just use the `<Note>` component with a `<ul>` inside it.

### 3. customizing the label

the `label` prop sets the heading text. if you omit it, the default for `bench` variant is "bench notes".

---

## adding a table

use standard html tables. they're styled automatically by `global.css`:

```astro
<table>
  <thead>
    <tr>
      <th>column 1</th>
      <th>column 2</th>
      <th>column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>row 1, cell 1</td>
      <td>row 1, cell 2</td>
      <td>row 1, cell 3</td>
    </tr>
    <tr>
      <td>row 2, cell 1</td>
      <td>row 2, cell 2</td>
      <td>row 2, cell 3</td>
    </tr>
  </tbody>
</table>
```

even rows get a subtle tinted background. no extra classes needed.

---

## adding an svg diagram

wrap svgs in a `.diagram` div for consistent styling (border, background, padding):

```astro
<div class="diagram" aria-label="description of the diagram">
  <svg viewBox="0 0 600 200" width="100%" height="auto" style="max-width: 100%; margin: 20px 0;">
    <!-- your svg content here -->
  </svg>
</div>
```

use `currentColor` for stroke and fill so diagrams adapt to dark/light mode.

---

## adding annotations (highlights & underlines)

annotations let you mark up text with colored highlights and styled underlines. see `/guides/annotations` for the full reference.

### highlights

wrap text in a span with one of these classes:

```astro
<span class="hl">butter highlight (default)</span>
<span class="hl-pink">pink highlight (critical)</span>
<span class="hl-mint">mint highlight (confirmed)</span>
<span class="hl-blue">blue highlight (definition/term)</span>
<span class="hl-oat">oat highlight (subtle)</span>
```

### underlines

```astro
<span class="ul-solid">solid underline (strong emphasis)</span>
<span class="ul-dashed">dashed underline (tentative)</span>
<span class="ul-dotted">dotted underline (subtle note)</span>
<span class="ul-wavy">wavy pink underline (error/needs attention)</span>
<span class="ul-wavy-blue">wavy blue underline (unverified)</span>
<span class="ul-wavy-mint">wavy mint underline (confirmed/working)</span>
```

### combining highlights and underlines

you can combine classes for layered meaning:

```astro
<span class="hl ul-solid">critical key term</span>
<span class="hl-pink ul-wavy">flagged for review</span>
<span class="hl-mint ul-wavy-mint">verified solution</span>
```

### conventions

- `hl` (butter): general emphasis, the most common highlight
- `hl-pink`: critical, urgent, or warning-level
- `hl-mint`: correct, confirmed, or done
- `hl-blue`: terms, definitions, or first appearances
- `hl-oat`: subtle, low-priority emphasis
- `ul-solid`: key terms, strong emphasis
- `ul-dashed`: tentative, approximate, or uncertain
- `ul-dotted`: subtle, footnote-level emphasis
- `ul-wavy`: error, problem, or needs attention
- `ul-wavy-blue`: question, unverified, or check this
- `ul-wavy-mint`: good, working, or confirmed

---

## text styles

control emphasis with text style classes:

```astro
<span class="bold-1">medium weight bold</span>
<span class="bold-2">heavy weight bold</span>
<span class="italic">italicized text</span>
<span class="bold-italic">bold and italic</span>
```

---

## links with arrows

use the `link-annotated` class to add a superscript arrow next to links, signaling they go to another page or external resource:

```astro
<a href="https://example.com" class="link-annotated">read more</a>
```

renders as: read more ↗

---

## tooltips

use the tooltip component to add hover-triggered explanations. great for acronyms, terms, or clarifications:

```astro
<Tooltip text="PKM" tip="personal knowledge management: a system for capturing and organizing ideas" />
```

the tooltip appears when hovering over the text.

---

## code blocks

inline code uses the `<code>` tag and renders in catppuccin dark theme:

```astro
this is <code>inline code</code> in your text.
```

wrap blocks in `<pre><code>` for multi-line code:

```astro
<pre><code>function example() {
  return 'code block in catppuccin dark';
}</code></pre>
```

---

## blockquotes

use `<blockquote>` for important statements, attributions, or quoted material:

```astro
<blockquote>
  <p>the best way to predict the future is to invent it.</p>
  <p>— alan kay</p>
</blockquote>
```

---

## chips (inline pastel tags)

use chips for inline visual labels, categories, or tags:

```astro
<span class="chip">tag</span>
<span class="chip-pink">urgent</span>
<span class="chip-mint">complete</span>
<span class="chip-blue">reference</span>
<span class="chip-oat">subtle</span>
```

---

## custom list icons

replace default bullets with icons. add `data-icon` attribute to list items and wrap the list in `class="list-custom"`:

```astro
<ul class="list-custom">
  <li data-icon="✓">completed task</li>
  <li data-icon="→">follow-up action</li>
  <li data-icon="★">favorite resource</li>
  <li data-icon="?">unanswered question</li>
  <li data-icon="⚡">high priority</li>
</ul>
```

you can use any unicode character, lucide icon, or font awesome icon as the data-icon value.

---

## collapsible sections

create accordion-style sections that expand on click:

```astro
<button class="collapsible" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')">
  section title
</button>
<div class="collapsible-content">
  <p>content goes here. hidden by default, shows on click.</p>
</div>
```

the `.collapsible` button toggles the `aria-expanded` attribute, and `.collapsible-content` is the hidden/shown div.

---

## table variants

tables support multiple style modes. use class modifiers:

- default: standard table with alternating row backgrounds
- `.compact` - smaller padding, denser layout
- `.themed-header` - colored background on header row
- `.col-lines` - vertical lines between columns
- `.row-lines` - horizontal lines between all rows (removes alternating backgrounds)
- `.all-lines` - complete grid with all lines
- combine classes: `class="compact col-lines"` for compact grid

```astro
<!-- compact themed table with all lines -->
<table class="compact themed-header all-lines">
  <thead>
    <tr>
      <th>column 1</th>
      <th>column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>data</td>
    </tr>
  </tbody>
</table>
```

---

## writing rules

- everything in lowercase, including proper nouns
- no em dashes
- clear, direct, human language
- no emojis in user-facing text (use font awesome icons instead)
