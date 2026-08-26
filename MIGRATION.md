# Updating vanillabp/design-system from the Claude Design project

State as of 2026-08-26. The repo currently holds nine files at the root; this
project restructures it into a design system a consumer can link with one
stylesheet.

**Taking this into the repo:** copy everything except `MIGRATION.md`,
`CLAUDE.md`, `github.md`, `thumbnail.html`, `export/`, and the three generated
files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`). Those
are tooling for this project, not repo content. `LICENSE` in the repo is
untouched.

## What happens to the nine existing files

| Repo file today | In this package | Note |
|---|---|---|
| `DESIGN.md` | `guidelines/DESIGN.md` | **Moved** into `guidelines/`, §12.6–12.8 appended, and §12.2c's open question now resolved. Everything else is byte-identical to what is in the repo now. |
| `tokens.css` | `tokens/*.css` + `styles.css` | **Split.** `styles.css` is the new entry point and contains nothing but `@import` lines. Safe to delete `tokens.css`: nothing loads it. A `grep` finds only prose references — in `DESIGN.md`, `PRODUCT.md`, `readme.md` and `hero.html`'s comment — which should be reworded to say `styles.css` (the entry point) or `tokens/` (where values live). The two copies in this project are already fixed; **`PRODUCT.md` and the repo-root `DESIGN.md` are yours to update.** `readme.md`'s mention is provenance ("came from here") and stays correct as-is. |
| `hero.html` | `hero.html` | **Updated** — see below. |
| `favicon.svg`, `favicon.ico` | `assets/logo/` | Moved, unchanged. |
| `vanillabp-logo-currentcolor.svg` | `assets/logo/` | Moved, unchanged. |
| `vanillabp-logo-compact.svg` | `assets/logo/` | Moved, **one coordinate changed** — approved, see below. |
| `NOTICE` | `NOTICE` | Unchanged. |

## The compact lockup's wordmark moves — approved 2026-08-26

`vanillabp-logo-compact.svg`: the wordmark group moves from `translate(641.47,
624.57)` to `translate(641.47, 513.28)`, the full lockup's value. §12.2c left
this open; it has since been approved, so it is applied to the canonical asset
and to everything derived from it.

Two reasons, and the second is why it belongs in the asset rather than in one
component: the header cross-fade needs it, because both lockups share the logo's
coordinate system and only align pixel-for-pixel at equal height once the
compact wordmark is raised — and `y=513.28` also centres the wordmark on the
mark-plus-stick (centre ≈ 518), which is better for the standalone lockup on its
own terms. Minimum sizes (§5.3) are unaffected: the geometry moved, not the
proportions.

Derived files `vanillabp-logo-{light,dark}.svg` and
`vanillabp-logo-compact-{light,dark}.svg` are new: `currentColor` only resolves
when an SVG is inlined, and loaded through `<img>` it falls back to black
(§12.4). They are the same geometry with the fill substituted.

## hero.html

Two changes, both from §12.2c:

- The header collapse is driven by one custom property, `--collapse` (0→1),
  written by a rAF-throttled scroll handler. The two-threshold handler is gone.
  It flapped in practice: shrinking the header moves the scroll position, which
  re-evaluates the threshold. Hysteresis narrows the unstable band but does not
  remove it.
- The bar is `position: fixed` behind a constant-height spacer, not `sticky`. A
  sticky header is in the document flow, so collapsing it pulls the page up
  while the reader scrolls; their scroll and the rising content add together.

Also: hairline as a pseudo-element faded with `opacity` (a `calc()` percentage
inside `color-mix()` is not accepted by every engine and silently resolved to
fully transparent), compact lockup at 58px not 52px (52 × 2.2456 = 117px, under
the 130px minimum of §5.3), nav links at 700, header at 75% opacity.

## New in this project

- **`styles.css`** — the entry point. Imports only.
- **`tokens/`** — `colors`, `typography`, `spacing`, `shape`, `motion`, `fonts`,
  `base`, and `deck.css`. `deck.css` is inert until something opts in with
  `data-scale="deck"`; it lifts type and spacing to 1920×1080 proportions so a
  deck does not re-invent a `:root { font-size }` hack.
- **`components/`** — 20 components in `core/`, `layout/`, `content/`, `forms/`,
  each with a `.d.ts` props contract and a `.prompt.md`. Plain React, no
  dependencies, styled entirely through the custom properties.
- **`guidelines/`** — `DESIGN.md`, `DECK-VOCABULARY.md` (the layout system
  restated at slide scale) and 28 specimen cards.
- **`assets/`** — Carlito (4 TTFs, OFL), the logo set, three icon SVGs, the
  illustrations, and the Camunda and Phactum marks.
- **`ui_kits/website/`** — a click-through recreation of the site, built on the
  components. Its README maps each screen to its sources.
- **`readme.md`** — the design guide: content fundamentals, visual foundations,
  iconography, logo rules, substitutions, index.
- **`SKILL.md`** — Agent Skills wrapper, so the folder can be dropped into
  Claude Code as a skill.

## Known gaps

- **JetBrains Mono is a CDN link, not vendored.** §2.1 requires the licence file
  be vendored. Needs the woff2 build and `OFL.txt`.
- **Carlito is vendored as TTF**, ~650KB per face. woff2 builds would be better.
- **No Lucide or Tabler binaries.** §7 names them; nothing was available to
  vendor, so only the three real icon SVGs are included.
- **`--collapse` in `Header.jsx` and `hero.html` are two implementations of one
  behaviour.** They agree today. If one changes, change both.

## Downstream

The landing page v2 vendors `components/**` as copies, not as a dependency.
There is no package boundary, so a change here does not reach the website until
someone copies it over — and a fix made there is lost on the next copy unless it
is handed back. Every browser global in a component is `window.`-qualified
because Create React App's ESLint config turns bare globals into a CI build
failure (§12.8).
