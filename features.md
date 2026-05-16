# features

## home page

the landing page groups content into four sections with subheadings:

- **thinking better**: concepts like polymath, multipotentialite, interdisciplinary thinking, interwingularity, associativity, adhd & pattern recognition
- **memory**: retentive memory, knowledge networks, second brain, digital gardens
- **knowledge management**: tools, techniques, graphic organizers, sketchnotes
- **electronics**: circuit symbols, power, resistors, capacitors, diodes, transistors, 555 timer, microcontrollers

each section renders cards that link to guide pages.

## guide pages

individual pages covering electronics fundamentals, thinking concepts, and methods. each page is a standalone `.astro` file with its own content, examples, and notes.

### concepts

covers cross-disciplinary thinking: polymath, multipotentialite, interdisciplinary thinking, interwingularity, knowledge networks, associativity, retentive memory, adhd & pattern recognition. uses font awesome icons for consistent rendering across platforms.

### tools

lists software tools organized by category (diagramming, pkm, task management, mind mapping, writing, spaced repetition, focus). each tool has its name in a sticky note highlight on the right and its description in plain text on the left.

### techniques

learning methods with tabular explanations: feynman technique, socratic method, gamification, spaced repetition, active recall vs passive review, interleaving. each technique includes a comparison or step-by-step table.

### sketchnotes

visual note-taking concepts with inline svg diagrams showing examples of containers, connectors, icons, radiating layouts, and flow structures.

## theme system

- dark/light mode toggle persisted in localstorage
- four background patterns: dots, grid, lined, solid
- keyboard shortcuts: `d` for theme, `g` for background
- cross-tab sync via storage events
- theme-color meta tag updates to match current mode

## navigation

- header with brand wordmark and four nav links: concepts, sketchnotes, techniques, tools
- footer with site attribution
- consistent layout across all pages via the base layout component
