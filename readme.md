# VanillaBP Design System

VanillaBP is an open-source, aspect-oriented **service provider interface (SPI)
for BPMN workflow engines**, written in Java and maintained under the
[vanillabp](https://github.com/vanillabp) GitHub organisation with support from
[Phactum](https://www.phactum.at). Business code is written once against the
VanillaBP abstraction; a vendor-supplied *adapter* binds it to Camunda 7,
Camunda 8, or whatever engine comes next. Swapping engines becomes a dependency
change rather than a rewrite.

The brand promise is one word from the name: *"[va·nil·la] … simple, plain, no
frills."* The design honours it literally. Decoration is off-brand. All the
personality lives in the logo and the amber palette; everything else stays quiet
and disciplined.

## Products and surfaces

| Surface | What it is | Represented here |
|---|---|---|
| **vanillabp.io** | The marketing / documentation site: home, adapters, blueprints, BPMN explainer, about | `ui_kits/website/` |
| **SPI + adapters** | Java libraries. No UI of their own; they appear on the site as code specimens | `CodeBlock` component, syntax tokens |
| **Business Cockpit** | A BPMS operations UI for microservice environments ([repo](https://github.com/vanillabp/business-cockpit)) | **Not covered** — no design source was supplied for it |

## Sources this was built from

Read only. Assume the reader may not have access; the links are recorded so they can.

- **<https://github.com/vanillabp/design-system>** — the canonical brand
  definition. `DESIGN.md` (vendored here as `guidelines/DESIGN.md`) is the
  written source of truth for every colour, size and rule below; `tokens.css`,
  `hero.html`, the logo SVGs and the favicon came from here.
- **<https://github.com/vanillabp/landing-page>** — the live site
  implementation. Product copy (`src/content/*.json`), the Carlito font
  binaries, illustrations, the Camunda and Phactum marks and the icon SVGs came
  from here.
- **<https://github.com/vanillabp/spi-for-java>** and the
  [Camunda 7](https://github.com/camunda-community-hub/vanillabp-camunda7-adapter/) /
  [Camunda 8](https://github.com/camunda-community-hub/vanillabp-camunda8-adapter/)
  adapters — referenced by the copy, not read for design.

Explore those repositories directly for anything this system leaves ambiguous —
`DESIGN.md` in particular records *why* each decision was made, including the
alternatives that were rejected, which is far more useful than the values alone.

---

## Content fundamentals

**Register: engineer to engineer.** The reader is a Java developer with a
migration problem. Copy explains a mechanism, then stops. There is no
storytelling, no "imagine a world where", no urgency.

**Voice.** Second person for the reader, third person for the product. *"Your
Java code talks to one abstraction."* *"VanillaBP solves the problem of
non-standardized BPMN engine APIs."* First person appears only in the footer
credit line — never "we believe", never "we're excited to".

**Sentence shape.** Short declaratives, often in a two-beat rhythm where the
second beat is the payoff: *"Swap your workflow engine. Not your business code."*
*"Write your business code once."* Fragments are allowed when they land the beat.

**Casing.** Sentence case everywhere except eyebrows, which are uppercase with
0.08em tracking. Product names are exact and capitalised as their owners write
them: Camunda 7, Camunda 8, Spring Boot, MongoDB, BPMN, VanillaBP (one word, two
capitals).

**Precision over enthusiasm.** Claims are qualified where they should be:
*"Quarkus is on the road"*, *"Coming soon…"*, *"Spring Boot & Angular is coming
soon"*. Unfinished work is labelled as unfinished. Nothing is oversold.

**No emoji. Ever.** Not in copy, not in headings, not in the readme, not as
bullets. Nothing in either source repository uses one.

**Buttons and links are verbs plus objects**, not slogans: *See the adapters*,
*Read the source*, *View blueprints*, *Check it out*, *Get started*, *Submit*.
Never *Learn more →* alone.

**Bullets are full sentences with terminal punctuation**, and they parallel each
other grammatically — every item in a list starts with the same part of speech.

**Contrarian, on purpose.** The copy is comfortable saying what the product is
*not*: *"a unified interface … rather than specific workflow system APIs"*,
*"no risky big-bang migrations"*. Naming the pain is how it earns trust.

---

## Visual foundations

**Colour.** Two hues. Hue 45 carries the whole warm family — vanilla `#FFE699`,
amber `#FFC000`, gold `#BF9000` — and hue 30 carries brown `#663300`, the logo
and every piece of text. There is no hue 41, no hue 38, and no cool grey: the old
site's `#F1F2F3` footer is retired, because one cool neutral in a warm palette is
the most visible incoherence available. The single exception is the code-block
string colour `#2F6F6A`, which earns its place by being the only way to
distinguish strings.

**Gold is graphic, never text.** Headings are brown like the body. Gold and amber
are fills, borders, icons, rules and illustration colours — freed from any
legibility burden, they get to stay bright. Where a gold-toned *word* is genuinely
needed (an eyebrow, a link), `--accent-text` `#806000` is the only permitted
value.

**One colour sits outside the two hues: release red.** `--fill-release`
`#A3231A` with white text marks *new in this version* — nothing else. It is not
a semantic danger colour, because this system has no error state, and it is not
a highlight. Two or three uses per surface; a page where five things are red
says nothing is new. Dark mode lifts the fill to `#C42C21`, because `#A3231A`
on `#181106` is only 2.4:1 and would read as a dark patch rather than a mark.

**Type.** A single family: **Carlito** for everything, **JetBrains Mono** for
code. Carlito is metric-compatible with the Calibri the logo wordmark was drawn
in — headings, body and logo are typographically continuous. It ships **only 400
and 700**; there is no 600 and no variable axis, so small bold text compensates
with letter spacing rather than weight, and emphasis inside prose is *italic*.
The scale is fluid on a 1.25 ratio, clamped, and prose caps at 68ch.

**Space.** A 4px base with ten steps and nothing between them. Vertical space
encodes grouping: related elements never sit further apart than 24px, sections
are 96px apart on mobile and 144px from `md`. Two-column layouts go 7/5 or 5/7 —
never 6/6, because a dead-even split with a centred gutter is what makes a page
feel mechanical.

**Backgrounds.** Flat colour only. Alternating `#FFFFFF` and `#FFFBF0` bands down
the page, `#FDF4E0` for sunken panels. **No gradients anywhere**, no full-bleed
photography, no repeating patterns, no textures, no noise, no hero images behind
text. Imagery is limited to the vendored illustrations and process diagrams, and
each one sits on a vanilla `#FFE699` plate at `--radius-lg` — an image floating
directly on white reads as clip-art.

**Imagery colour.** Warm and flat. The illustrations are line-and-flat-fill
diagrams, not photographs; there is no grain, no duotone, no cool cast, no
overlay. Third-party product logos (Camunda) are reproduced in their own colours
and are **never** recoloured into the VanillaBP palette.

**Corners and cards.** Radii derive from the logo's own ~0.28 corner ratio: 6px
small, 12px code blocks, 20px cards and plates, pill for buttons. A card is
`--bg` on a subtle section (or the reverse), a 1px `#F0DFB8` hairline, 20px
radius, 32px padding and `--shadow-1`. Nothing has a coloured left border.

**Shadow.** Two levels, both brown-tinted `rgb(102 51 0 / …)` — never grey, never
black. In dark mode both resolve to `none`; shadow on near-black is invisible and
only muddies edges, so hairlines carry the edge instead.

**Transparency and blur.** Exactly one place: the sticky header, `--bg` at 70%
with `backdrop-filter: blur(12px)`. There is no glass elsewhere, no scrim, no
protection gradient — text never sits on imagery, so none is needed.

**Motion.** `cubic-bezier(0.2, 0, 0.2, 1)` at 120ms (hover, focus) and 200ms
(layout). Hover and focus transitions plus **one** scroll-reveal on section entry
(opacity and an 8px rise, staggered 60ms). Nothing else — no parallax, no
counters, no marquees, no bounces. All of it inside
`@media (prefers-reduced-motion: no-preference)`.

**Hover, press and focus.** Primary buttons darken the fill to `#E6AD00` and gain
`--shadow-1`. Secondary buttons fill with `--bg-subtle`. Links move from
`--accent-text` to `--text-color`. **Nothing scales, lifts, or transforms** —
there is no press state beyond the browser default, deliberately. Focus is a 2px
`--border-strong` ring at 2px offset on every interactive element.

**Fixed elements.** Two, and only two: the sticky header (which swaps lockups at
two scroll thresholds — shrink past 72px, grow back under 24px, because a single
trigger flaps) and the back-to-top button past 400px.

**Dark mode.** Driven by `prefers-color-scheme`, inverting roles rather than
introducing colours. The page is warm near-black `#181106` (hue 35 — never
`#000`), text is `#FFF8EB` (near-neutral in bulk; warm greys read as 1970s beige
once they cover paragraphs). Buttons do not flip. Tags and plates do: vanilla on
light, brown on dark.

**Accessibility floor.** Body text ≥ 4.5:1, large text and meaningful UI graphics
≥ 3:1, verified rather than assumed, and no token within 0.1 of its threshold.
Responsive to 360px. Every contrast ratio in `tokens/colors.css` is annotated in
the source.

---

## Iconography

**There is no icon font and no sprite sheet.** The sources ship three standalone
SVGs, all vendored into `assets/icons/`: `github.svg`, `mail.svg` and
`scroll-top.svg`. Use them directly.

**For anything else, `DESIGN.md` §7 names the set: Lucide (ISC) or Tabler (MIT),
one set only, never mixed, at 1.5px stroke** to match the BPMN markers. No
binaries for either were present in the sources, so nothing was vendored — pull
them from the upstream package or a CDN and vendor the licence file alongside.

**BPMN glyphs are drawn, not iconified.** The section markers — thin circle
(start event), rounded rectangle (task), thick circle (end event) — are the
brand's signature device and live in the `SectionMarker` component at a 2px
stroke. BPMN is an OMG specification, so drawing its shapes carries no licence
obligation. Never replace them with `01 / 02 / 03` numbering; that is the generic
version of the same idea.

**Emoji and unicode symbols are never used as icons.** Neither source repository
contains a single one.

**Third-party marks.** The Camunda 7 and 8 logos in `assets/logos-third-party/`
are trademarks of Camunda Services GmbH, reproduced nominatively. Camunda
publishes brand guidelines governing size, clear space and recolouring — review
them, and never restyle the marks. The Phactum logo is used with the owner's
permission. *Not legal advice.*

---

## Logo

Six files in `assets/logo/`. The mark is background-independent by construction:
the brown BPMN glyph sits inside the vanilla popsicle body, 8.35:1 against any
surface. Only the wordmark's colour changes between modes.

| File | Use |
|---|---|
| `favicon.svg` / `favicon.ico` | The mark alone — tab icon, avatar, app icon. The `.ico` carries 16–256px, each rendered natively at its target size. |
| `vanillabp-logo-currentcolor.svg` | Full lockup whose wordmark inherits `currentColor` — **preferred when you can inline the SVG**. |
| `vanillabp-logo-light.svg` / `-dark.svg` | Full lockup with the wordmark fixed to brown / vanilla. Use when loading via `<img>`, where `currentColor` cannot resolve. |
| `vanillabp-logo-compact.svg` | Mark plus wordmark, no strap lines, `currentColor`. Wordmark at the full lockup's `y=513.28` so the two are interchangeable at equal height (`DESIGN.md` §12.2c, approved 2026-08-26). |
| `vanillabp-logo-compact-light.svg` / `-dark.svg` | The same, fixed-colour. |
| `vanillabp-headline.png`, `vanillabp-legacy-lockup.png` | Raster lockups from the current live site. Superseded by the SVGs; kept for reference. |

Minimum sizes are hard: full lockup **234px** wide, compact **130px**, mark
**48px**. Below 234px the strap lines are decoration — swap to the compact
lockup rather than scaling the full one down. Clear space on all sides is the
width of the popsicle stick.

Do not recolour the mark, add effects, outline it, place it on a busy photo,
stretch it non-uniformly, rotate it, or set the wordmark in any face but Carlito.

---

## Substitutions and gaps

Flag these to whoever owns the brand:

- **JetBrains Mono is not vendored.** No binary exists in either source repo, so
  `tokens/fonts.css` links it from Google Fonts. It is OFL 1.1 and therefore
  compliant, but `DESIGN.md` §2.1 requires the licence file be vendored — please
  supply the woff2 build and `OFL.txt`.
- **Carlito ships as TTF, not woff2.** The four faces were vendored verbatim from
  `landing-page/public/fonts/`; they are ~650KB each. `hero.html` in the design
  system repo expects woff2 builds — please supply them.
- **No Lucide or Tabler binaries were available.** See Iconography.
- **The Business Cockpit product has no design source here.** If it should be
  covered, point us at its repo or Figma.
- **Blueprints move to their own organisation.** <https://github.com/vanillabp-blueprints>
  is empty today; it becomes the source for the blueprint catalogue once release
  2.0 ships. The Blueprints screen and the "6 blueprints" figure must be
  re-sourced from there at that point.
- **Site copy is English only** — the `es` locale in `landing-page` is not carried forward.
- **The About page layout is unknown.** `/about` in the UI kit renders the home
  screen rather than inventing a layout.

Nothing in this system was drawn from memory. Every logo, illustration, icon and
colour value is copied from a source file.

---

## Index

**Root**

- `styles.css` — the single entry point consumers link. Imports only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper, for use in Claude Code.
- `github.md` — upstream source association and sync record.
- `thumbnail.html` — the homepage tile.
- `hero.html` — the original self-contained hero from the design-system repo, kept verbatim as a reference implementation.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `deck.css`, `base.css`

`deck.css` is the only scoped file: it does nothing until an element opts in with `data-scale="deck"`, which lifts the type and spacing scales to 1920×1080 proportions. Use it for slides instead of re-inventing a `:root { font-size }` hack per deck. `guidelines/DECK-VOCABULARY.md` is its prose counterpart.

**`guidelines/`** — `DESIGN.md` (the upstream source of truth, verbatim, plus §12 recording the decisions made in this project), `DECK-VOCABULARY.md` (how to express the page layout system on 1920×1080 slides) plus 17 specimen cards across the Colors, Type, Spacing, Shape and Brand groups.

**`assets/`** — `fonts/` (Carlito ×4 + INFO.md), `logo/` (10 files), `icons/` (3 SVGs), `illustrations/` (6), `logos-third-party/` (Camunda 7, Camunda 8, Phactum)

**Components**

| Group | Components |
|---|---|
| `components/core/` | **Button**, **Eyebrow**, **SectionMarker**, **Logo** |
| `components/layout/` | **Container**, **Section**, **SectionSpine**, **Header**, **Footer**, **ScrollToTop** |
| `components/content/` | **Card**, **CodeBlock** (+ **Code**), **ContentBlock**, **EngineSwitch**, **StatStrip**, **MigrationTimeline**, **ProblemGrid** |
| `components/forms/` | **Input**, **TextArea** |

Each has a `.d.ts` props contract and a `.prompt.md` with a usage example.

*Intentional additions.* `DESIGN.md` §7 defines Button, Card, Nav, Code block,
Section and Icons. Four components extend that list, each because a concrete
source uses it: **Logo** and **SectionMarker** wrap assets and glyphs the doc
mandates but does not componentise; **EngineSwitch** is the runtime toggle built
into `hero.html`; **Container**, **Input**, **TextArea** and **ScrollToTop** are
recreations of `landing-page/src/common/` components. Nothing here was invented
because "a design system usually has one" — there is no Toast, Avatar, Tabs,
Dialog or Tooltip, because no source defines them.

Four further components — **SectionSpine**, **StatStrip**, **MigrationTimeline**
and **ProblemGrid** — came out of the homepage design work in this project rather
than from either repository. They are recorded as decisions in
`guidelines/DESIGN.md` §12.

**UI kits**

- `ui_kits/website/` — click-through recreation of vanillabp.io. See its own README for the screen-to-source map.
