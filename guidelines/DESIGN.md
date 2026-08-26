# VanillaBP Design System

Single source of truth for the VanillaBP web presence. Every colour, size and
spacing value used in the product must come from the token files under
`tokens/`, reached through the single `styles.css` entry point. If a value is not
in this document, it does not exist.

**Brand promise:** *"[va·nil·la] … simple, plain, no frills."* The design must
honour this literally. Decoration is off-brand. All personality is carried by the
logo and the amber palette; everything else stays quiet and disciplined.

---

## 1. Colour

### 1.1 Brand constants (do not alter)

Extracted from the official logo. Canonical.

| Token | Hex | HSL | Origin |
|---|---|---|---|
| `--brand-brown` | `#663300` | `30 100% 20%` | BPMN glyph and wordmark |
| `--brand-vanilla` | `#FFE699` | `45 100% 80%` | Popsicle body |
| `--brand-gold` | `#BF9000` | `45 100% 37%` | Popsicle stick |
| `--brand-amber` | `#FFC000` | `45 100% 50%` | Parent of vanilla and gold |

`vanilla`, `gold` and `amber` all sit on hue 45 at 100 % saturation. Any new warm
tone must also sit on hue 45 — no hue 41, no hue 38. Brown (hue 30) is the only
other hue in the system.

### 1.2 Colour roles: headings are brown, gold is graphic

**The previous site is not broken.** Its body text and H1 run at 10.25:1, and its
tan H2 (`#CB8649`) was tuned to land on the WCAG 3:1 large-text threshold —
measured 2.98:1, within rounding of a deliberate target. The gold `#DDA838`
appears only in illustrations, which carry no text-contrast requirement. Treat
the existing implementation as competent work, not as debt.

What it lacks is **margin**. `#CB8649` holds only while three conditions all
apply: bold, ≥ 18.66 px, pure white background. It drops below threshold on a
tinted section (2.88:1 on `#FFFBF0`) and fails outright at normal weight, where
4.5:1 is required. With a fourth and fifth subpage and a dark mode arriving,
a token sitting exactly on a threshold is a wager, not a decision.

**Resolution — adopted:**

> Headings use `--text` (brown). Gold and amber are graphic colours: fills,
> borders, icons, rules, illustrations, eyebrow labels. They never carry body
> text.

This is not a restriction on gold — it is what lets gold stay *bright*. Freed
from any legibility burden, `--brand-gold` and `--brand-amber` can be used at
full saturation wherever they read as graphics. The alternative considered
(darkening the tan to `#A3652E`, 4.71:1) would have locked the brand's warm tone
permanently into a muted, desaturated register.

The logo settles it: the wordmark is brown, not tan.

Where a gold-toned *word* is genuinely needed — an eyebrow, a link — use
`--accent-text` (`#806000`, 5.85:1): hue 45, pushed dark enough to be legible at
any size on any surface in the system.

### 1.3 Semantic tokens — light

| Token | Value | Contrast on `--bg` | Use |
|---|---|---|---|
| `--bg` | `#FFFFFF` | — | Page |
| `--bg-subtle` | `#FFFBF0` | — | Alternating sections, footer |
| `--bg-sunken` | `#FDF4E0` | — | Code blocks, inset panels |
| `--surface-accent` | `#FFE699` | — | Buttons, tags, illustration plates |
| `--border` | `#F0DFB8` | — | Hairlines, card edges |
| `--border-strong` | `#BF9000` | — | Focus rings, active states |
| `--text` | `#663300` | 10.30:1 | Body **and all headings** |
| `--text-muted` | `#975E26` | 5.32:1 | Secondary prose, captions |
| `--text-subtle` | `#A36629` | 4.68:1 | Metadata. Floor value. |
| `--accent-text` | `#806000` | 5.85:1 | Eyebrows, links, gold-toned text |
| `--accent-graphic` | `#BF9000` | n/a | Rules, bullets, icons, strokes |
| `--accent-graphic-bright` | `#FFC000` | n/a | Illustration fills only |

The footer's cool `#F1F2F3` is retired. Warm neutrals only — one cool grey in a
warm palette is the most visible incoherence on the current site.

### 1.4 Semantic tokens — dark

Dark mode inverts the *roles*, not the palette. No new brand colours.

| Token | Value | Contrast on `--bg` | Use |
|---|---|---|---|
| `--bg` | `#181106` | — | Page. Warm near-black (hue 35), never `#000`. |
| `--bg-subtle` | `#211608` | — | Alternating sections |
| `--bg-sunken` | `#100B04` | — | Code blocks |
| `--surface-accent` | `#663300` | — | Tags and plates — brown becomes the fill |
| `--border` | `#3A2A10` | — | Hairlines |
| `--border-strong` | `#FFC000` | — | Focus rings |
| `--text` | `#FFF8EB` | 17.72:1 | Body and headings |
| `--text-muted` | `#C9BFB0` | 10.31:1 | Secondary prose |
| `--accent-text` | `#FFC000` | 11.40:1 | Eyebrows, links |
| `--on-accent` | `#FFE699` | 8.35:1 on brown | Text on `--surface-accent` |

**Dark-mode logo rule.** The wordmark must not stay brown — brown on black is
2.04:1, the failure visible in slide 3 of the source deck. The popsicle mark is
unchanged in every case: a brown glyph inside a vanilla body is 8.35:1 and legible
against any background. Only the wordmark's colour changes, and which value it
takes depends on how the logo is delivered:

| Delivery | Dark wordmark | Why |
|---|---|---|
| `vanillabp-logo-dark.svg` as a standalone file | `#FFE699` | A fixed graphic with no access to page context. Brand vanilla is the safe constant. |
| Inlined via `vanillabp-logo-currentcolor.svg` | `var(--text-color)` (`#FFF8EB`) | The wordmark *is* text. Set in the page's own text colour it reads as integrated rather than pasted on. |

Prefer the second wherever inlining is possible. The two values differ only
slightly (`#FFE699` against `#FFF8EB`), and the difference is deliberate: a
standalone asset cannot know its surroundings, an inlined one can.

**Dark text must be near-neutral.** Warm greys carry their hue much further at
large areas than at small ones. `#F5E7CC` — `hsl(40 67% 88%)` — measures a fine
15.4:1 but reads as 1970s beige once it covers whole paragraphs. `#FFF8EB` is
`hsl(39 100% 96%)`: still warm at a glance, near-neutral in bulk, 17.72:1. Keep
saturation low above roughly 90 % lightness.

Buttons do *not* flip: amber fill with a brown label works in both modes
(6.28:1), and the only difference is the edge border, which the dark page does
not need. Tags and plates do flip — vanilla on light, brown on dark.

---

## 2. Typography

### 2.1 Licensing constraint

Every face used in the product must be **SIL OFL 1.1 or equally permissive**, with
the licence file vendored into the repo. No Adobe Fonts subscription, no Monotype
seat, no `fonts.google.com` hotlink as a substitute for a licence check.

**Calibri is prohibited.** It is Microsoft-licensed via Office and Windows only.
The source logo deck is set in Calibri, so this needs active avoidance rather than
neglect — see §10.

**Carlito** (Łukasz Dziedzic) is metric-compatible with Calibri and OFL-licensed.
It is the correct substitute anywhere Calibri metrics must be reproduced, and is
already in use on the current site — a deliberate choice by its author to match
the logo wordmark, and the one piece of documented design intent recovered from
the existing implementation.

*Verify each licence against the `OFL.txt` in the upstream repository before
shipping, not against a font-aggregator listing.*

### 2.2 Faces

**Decided: Carlito is the primary face**, for both the logo wordmark and the site.
This is a single-family system.

| Role | Family | Licence | Rationale |
|---|---|---|---|
| Display + body | **Carlito** 400/700 | OFL 1.1 *(verify)* | Metric-compatible with the wordmark's original Calibri. Headings and logo are the same face, so the lockup and the page are typographically continuous. A plain default suits a brand whose tagline is *no frills*. |
| Mono | **JetBrains Mono** 400/500 | OFL 1.1 *(verify)* | The site is mostly Java. Carlito has no monospace; this is a functional role, not a competing display face. |

Rejected alternatives, recorded so they are not relitigated: Outfit (geometric
display face) and Source Sans 3 (body). Both were viable, but neither matches the
wordmark, and a second family buys contrast the brand does not want.

### 2.2.1 The four-weight constraint

Carlito ships **only** Regular 400, Bold 700, and their italics. There is no 600
and no variable axis. Every weight in this system is therefore 400 or 700 — no
exceptions, and no synthetic faux-bold (`font-weight: 600` renders as either 400
or a browser-synthesised smear).

Consequences, all already applied to §2.3:

- Headings, eyebrows, buttons and active nav links are **700** (`--weight-bold`).
- Body, captions and metadata are **400** (`--weight-regular`).
- Because 700 is heavy at small sizes, small bold text compensates with letter
  spacing rather than weight: eyebrows get `0.08em`, buttons `0.01em`.
- Emphasis inside body copy uses italic, not a mid weight.

Carlito's other weakness: its metrics were tuned for ClearType at small sizes in
Office, so on high-DPI displays it reads slightly soft. Counter this with
`-webkit-font-smoothing: antialiased` and by not setting body copy below 16 px.

**700 is the ceiling, including for the display line.** There is no 800 or 900, so
a headline cannot be made heavier than it already is — only larger or tighter.
`--text-display` and `--tracking-display` were pushed one step for exactly this
reason. If a genuinely heavy headline is ever required, that means adding a second
family for display only, which reverses the single-family decision above; decide
it deliberately rather than by drifting.

### 2.3 Scale

Fluid, 1.25 ratio, clamped. The current site jumps ~48 px → ~32 px with nothing
between, part of why it reads as blunt.

| Token | Size | Line height | Weight |
|---|---|---|---|
| `--text-display` | `clamp(2.75rem, 5.5vw, 4.5rem)` | 1.05 | 700 |
| `--text-h1` | `clamp(2rem, 3.5vw, 2.75rem)` | 1.15 | 700 |
| `--text-h2` | `clamp(1.5rem, 2.2vw, 1.875rem)` | 1.25 | 700 |
| `--text-h3` | `1.25rem` | 1.35 | 700 |
| `--text-body` | `1.0625rem` | 1.65 | 400 |
| `--text-small` | `0.9375rem` | 1.55 | 400 |
| `--text-eyebrow` | `0.75rem` | 1.4 | 700, tracking `0.08em`, uppercase |
| `--text-code` | `0.875rem` | 1.6 | 400 |

Display tracking `-0.025em`. Body tracking `0`. Never letterspace body text.

Because headings are now brown like the body, hierarchy rests on size and weight
alone. That is normal good typography, but it means the scale must be respected
strictly — a heading that is only slightly larger than its body text will read as
an accident.

### 2.4 Measure

Prose columns cap at **68ch**. The current site runs body text the full viewport
width, giving ~120-character lines on a desktop monitor — the second-biggest
cause of the blunt impression, after spacing.

---

## 3. Space

4 px base. Only these steps.

`--space-1` 4px · `--space-2` 8px · `--space-3` 12px · `--space-4` 16px ·
`--space-5` 24px · `--space-6` 32px · `--space-8` 48px · `--space-10` 64px ·
`--space-12` 96px · `--space-16` 144px

Section rhythm: `--space-12` between sections on mobile, `--space-16` from `md`.
Related elements never further apart than `--space-5`.

The current site uses arbitrary gaps up to ~200 px, so blocks float with no
evident relationship. Vertical space must encode grouping, not merely separate.

---

## 4. Shape and depth

Radii derive from the logo: a circle and two rounded rectangles at roughly a
0.28 corner ratio.

`--radius-sm` 6px · `--radius-md` 12px · `--radius-lg` 20px · `--radius-pill` 999px

Buttons use `--radius-pill`. Cards `--radius-lg`. Code blocks `--radius-md`.

Two elevation levels only:

```
--shadow-1: 0 1px 2px rgb(102 51 0 / 0.06), 0 2px 8px rgb(102 51 0 / 0.05);
--shadow-2: 0 2px 4px rgb(102 51 0 / 0.07), 0 8px 24px rgb(102 51 0 / 0.07);
```

Never a grey or black shadow — shadows in a warm palette are brown-tinted. In
dark mode shadows are replaced by `--border` hairlines; shadow on near-black is
invisible and only muddies edges.

---

## 5. Logo

The mark is background-independent by construction: the brown BPMN glyph sits
inside the vanilla popsicle body, and brown-on-vanilla is 8.35:1 against any
surface. Only the wordmark's colour changes between modes (§1.4).

### 5.1 Files

| File | Use |
|---|---|
| `logo/vanillabp-mark.svg` | Mark alone — avatar, favicon, app icon, compact nav |
| `logo/vanillabp-logo.svg` | Full lockup, light surfaces |
| `logo/vanillabp-logo-dark.svg` | Full lockup, dark surfaces |
| `logo/vanillabp-logo-adaptive.svg` | Full lockup, switches on `prefers-color-scheme` |
| `logo/vanillabp-logo-currentcolor.svg` | Full lockup, wordmark inherits `currentColor` — **preferred for inline use on a website** |
| `logo/vanillabp-logo-compact.svg` | Mark plus wordmark, no strap lines. Scrolled headers and any slot under 234 px. Its wordmark sits at the full lockup's `y=513.28`, so the two lockups are interchangeable at equal height — see §12.2c. |

All four are outline-only: no `<text>`, no font reference, no external asset. They
render identically everywhere regardless of which webfonts load.

**The adaptive file follows the operating system, not the page.** Its media query
reads `prefers-color-scheme`, which has no knowledge of the background it is
actually sitting on. On a light-only page viewed by someone whose OS is in dark
mode, the wordmark turns vanilla on white — 1.23:1, effectively invisible. Use
the adaptive file only where the surrounding page also switches on
`prefers-color-scheme`. Otherwise pick the explicit light or dark file.

### 5.2 How it is built

Reconstructed from the source PowerPoint's shape geometry, verified pixel-wise
against the original render (mean deviation 2/255; differences are antialiasing
only). Two things changed in translation, both deliberate:

- **The wordmark is Carlito, converted to outlines.** The source was Calibri,
  which is not licensed for this use. Carlito is metric-compatible, so the
  letterforms and spacing are unchanged.
- **The background-coloured masking rectangles are gone.** The original clipped
  the BPMN glyph by painting three slide-coloured rectangles over the parts that
  overflow the popsicle — which is why the source deck needs a separate slide per
  background. The SVG uses a `clip-path` on the popsicle silhouette instead. Same
  result, no background dependency.

The overflow is the design idea and must be preserved: the sequence
`start event → arrow → task` is *larger* than the popsicle and is cropped by it.
The ring is bisected by the left edge; the task rectangle runs off the right.

### 5.3 Clear space and minimum size

Clear space on all sides is the width of the stick. Nothing enters it.

| Context | Minimum width | Asset |
|---|---|---|
| Full lockup | **234 px** | `vanillabp-logo*.svg` |
| Compact lockup | 130 px | `vanillabp-logo-compact.svg` |
| Mark | 48 px | `vanillabp-mark.svg` |

The 234 px figure is measured, not estimated. The third line is set at 11 pt in a
lockup 3248 units wide, so its type is 4.7 % of the total width; reaching a
legible 11 px therefore needs 11 / 0.047 = 234 px. An earlier draft of this
document claimed 180 px, which was wishful. Below 234 px the strap lines are
decoration, so use the compact lockup — do not scale the full one down and hope.

### 5.4 Favicon

`favicon.ico` carries 16, 24, 32, 48, 64, 128 and 256 px, each **rendered natively
from `favicon.svg` at its target size** rather than downscaled from one bitmap.
Downscaling is what made the previous favicon soft. `favicon.svg` ships alongside
it for browsers that prefer a vector icon.

The full mark is used, stick included, height-fitted with 3 % padding. Dropping
the stick was tested: it buys 37 % more linear size for the glyph, but the
silhouette stops reading as a popsicle and becomes a rounded rectangle with a bow
tie in it. Size is not worth the identity.

**Stroke weight is optically compensated at small sizes**, because a hairline
stroke dissolves into antialiasing:

| Target | Glyph stroke |
|---|---|
| 16 px | 1.25x |
| 24 px | 1.20x |
| 32 px | 1.05x |
| 48 px and above | 1.0x |

Multipliers were chosen by rendering 1.0-2.0 and inspecting at 8x. Above roughly
1.5x the ring and the arrowhead merge into one blob, which is worse than a thin
stroke. At 16 px the sequence is legible as *something* but not readable as
start event, arrow and task; that is a limit of 16 pixels, not a fixable defect.

### 5.5 Prohibited

Do not recolour the mark, add effects, outline it, place it on a busy photo,
stretch it non-uniformly, rotate it, or set the wordmark in any face other than
Carlito. Do not reintroduce background-coloured masks.

---

## 6. Signature: BPMN section markers

The one memorable device. The site documents a BPMN abstraction, so section
markers are BPMN glyphs rather than numbers — a thin circle (start event) for the
opening section, rounded rectangles (tasks) for the body, a thick circle (end
event) for the last. Drawn in `--accent-graphic`, 2 px stroke, 20 px, on the
eyebrow line.

Legitimate only because the sections genuinely are a sequence the reader moves
through. Not for unordered content. Do not add `01 / 02 / 03` numbering anywhere —
that is the generic version of this idea.

BPMN is an OMG specification; drawing its shapes carries no licence obligation.

Spend the boldness here. Everything else stays quiet.

---

## 7. Components

**Button.** Pill, `--space-3` / `--space-5` padding, `--text-small` at 700,
tracking `0.01em`. Focus: 2 px `--border-strong` ring at 2 px offset. No gradient,
no border on the primary, no transform on hover.

- Primary: `--fill-primary` fill (brand amber), `--on-primary` label (logo brown),
  1 px `--fill-primary-edge`. Hover `--fill-primary-hover`, plus `--shadow-1`.
- Secondary: transparent fill, 1 px `--border-strong`, `--text` label.

**Why amber and not vanilla.** `--surface-accent` (`#FFE699`) carries a legible
brown label at 8.35:1, but the *fill* is only 1.23:1 against a white page — the
button barely reads as a button, and the whole hero reads flat. Text contrast was
never the problem; shape contrast was. Amber is the same hue at full chroma and
carries brown at 6.28:1 while looking considerably more alive.

**Why not the logo gold.** `#BF9000` is a mid-tone and therefore the worst case:
it separates from white acceptably (2.91:1) but can carry no legible label at all —
brown on it 3.53:1, white 2.91:1, vanilla 2.36:1, every option below the 4.5:1 a
button label needs.

**The border is not decoration.** Amber against white is 1.64:1, so the button's
boundary fails WCAG 1.4.11 (3:1 for UI component edges) if the fill is the only
thing defining it. `--fill-primary-edge` (`#806000`, 5.85:1 against white, 3.56:1
against the amber) fixes that without dulling the fill. On dark surfaces the fill
already separates at 11.40:1, so the edge is set to `transparent` there —
one exception to "no border on the primary", and it earns it.

**Card.** `--bg` on `--bg-subtle` sections and vice versa, 1 px `--border`,
`--radius-lg`, `--space-6` padding, `--shadow-1`. Illustrations sit on a
`--surface-accent` plate at `--radius-lg` — the current site's images float
directly on white, which is why they read as clip-art.

**Nav.** Sticky, `--bg` at 88 % opacity with `backdrop-filter: blur(12px)`, 1 px
`--border` bottom edge appearing only after scroll. Logo lockup left, links right
at `--text-small` 400 in `--text`, active link 700 with a 2 px `--accent-graphic`
underline.

The header has two states. Expanded it carries the full lockup at 138 px (84 px
below 48rem) and the link row is **bottom-aligned to the logo's bottom edge**, so
the two elements read as one block. Scrolled it swaps to the compact lockup at
52 px and the links centre. The links need `line-height: 1`; inheriting the 1.65
body leading puts the text in the middle of a tall line box and it reads as
misaligned even when the box is correct.

Scroll state uses two thresholds — shrink past 72 px, grow back under 24 px.
A single trigger point flaps, because the shrink itself moves the scroll position.

With five subpages coming this needs a mobile disclosure — the horizontal row
will not survive.

**Code block.** `--bg-sunken`, `--radius-md`, `--space-5` padding, 1 px
`--border`, `--text-code`. Syntax colours stay in the brown/amber family plus one
cool tone for strings. The current block mixes an olive `#808021` with blues and
greys belonging to no palette.

**Section.** Alternating `--bg` / `--bg-subtle`. Two-column layouts go 5/7 or
7/5, never 6/6 — the dead-even split with a centred gutter is the main reason the
page feels mechanical. Text column capped at 68ch regardless.

**Icons.** Lucide (ISC) or Tabler (MIT). One set only, never mixed. 1.5 px
stroke to match the BPMN markers. Third-party product logos (Camunda) are not
icons — see §9.

---

## 8. Motion

`--ease: cubic-bezier(0.2, 0, 0.2, 1)` · `--duration-fast: 120ms` ·
`--duration: 200ms`

Hover and focus transitions only, plus one scroll-reveal on section entry
(opacity and 8 px rise), staggered 60 ms. Nothing else. All motion inside
`@media (prefers-reduced-motion: no-preference)`.

---

## 9. Licensing and third-party marks

- **Fonts:** OFL 1.1 or equivalent only. Vendor the licence file. Calibri is
  prohibited (§2.1).
- **Icons:** ISC or MIT (Lucide, Tabler). Vendor the licence.
- **Camunda logos** appear on the adapters page. These are third-party
  trademarks. Naming a supported platform is normally permissible nominative use,
  but Camunda publishes brand guidelines governing size, clear space and
  recolouring. Review them and do not restyle the marks into the VanillaBP
  palette. *Not legal advice — confirm with qualified counsel if in doubt.*
- **Phactum logo** in the footer: used with the owner's permission.
- Every asset added to the repo carries its licence in the commit.

---

## 10. Known debt

- ~~The logo has no vector source.~~ **Done** — see §5. Four outline-only SVGs,
  Carlito wordmark, no font or background dependency.
- ~~The favicon needs to be recovered and re-tokenised.~~ **Done** — see §5.4.
  Rebuilt from the SVG at native resolution per size, on the canonical hex values.
- **The source PowerPoint remains the only editable original.** If the mark ever
  needs a real change, it happens in the SVG from now on; the deck is a historical
  record, not a working file.
- The `[va·nil·la]` tagline inside the logo lockup is gold on white (2.91:1).
  Acceptable within a reproduced graphic, but it must not appear as live text at
  small sizes.

---

## 11. Quality floor

Non-negotiable, not re-litigated per component:

- Body text ≥ 4.5:1, large text and meaningful UI graphics ≥ 3:1, verified rather
  than assumed. No token may sit within 0.1 of its threshold.
- Visible keyboard focus on every interactive element.
- Responsive to 360 px.
- `prefers-reduced-motion` respected.
- `prefers-color-scheme` drives the dark palette. A manual override may be added
  later but must not be required.

---

## 12. Additions from the Claude Design work (2026-08-07)

Recorded here so they are not mistaken for undocumented drift. Everything below
resolves to existing tokens; no new colour, size or radius was introduced.

### 12.1 The spine — §6 taken to its conclusion

The section markers are now joined by a 2px `--border` hairline running from
each marker to the next, so the page reads as one BPMN sequence rather than a
stack of bands. `SectionSpine` implements it.

This is a real change in emphasis. §6 placed markers on the eyebrow line of
otherwise independent sections; the spine makes the sequence structural. The
consequence, stated plainly: **on a spined page, card borders and alternating
band tones are both redundant and must not be used.** Three edge systems
competing on one page is exactly the incoherence §1.3 retired the cool grey for.
Pages that are not sequences keep the plain `Section` with alternating tones.

Spined sections sit **`--space-12` apart, not `--space-16`**. §3's rhythm assumes
nothing else marks the boundary; here the rule does, so the full gap
double-counts the separation and the page scans longer than it reads.

### 12.2 Audience: the page now leads with the proposition

The hero was written engineer-to-engineer, with a code panel as the primary
visual. For architects planning a Camunda 7→8 migration and the people
approving it, the code is proof, not the pitch. The headline states the benefit
("Your business code should outlive your workflow engine"), the code moves to
the second section, and three verifiable figures sit under the hero.

The display line runs at `clamp(3rem, 7vw, 5.75rem)` — above `--text-display`.
This is the pressure §2.2.1 predicted: 700 is the weight ceiling, so a headline
can only be made larger or tighter, never heavier. Tracking goes to `-0.03em`.
If more headline presence is ever needed than this, the answer is a second
display family, which reverses the single-family decision — decide it
deliberately.

### 12.2b Open: header transparency

§7 specifies `--bg` at 88% with a 12px backdrop blur. In practice 88% is opaque
enough that the blur is barely perceptible, and the header reads as a solid bar.
The implementation currently runs at 75%, which is legible but lets body text
show through more than is comfortable. **Neither value is settled** — the right
one can only be judged against real content scrolling behind it, which the site
does not have yet. Revisit when the version 2 copy lands.

### 12.2c The header collapse is scroll-driven, not threshold-driven

§7 specifies two scroll thresholds — shrink past 72px, grow back under 24px —
and explains that a single trigger point flaps "because the shrink itself moves
the scroll position". The diagnosis is right; the remedy is not sufficient.
Hysteresis narrows the unstable band but does not remove it, and in the
implementation the header still oscillated several times a second around the
trigger. It also forces the lockup swap to be a hard cut, and the
`align-items` change from `flex-end` to `center` is not animatable at all.

**Resolution — adopted (revised 2026-08-13):** the header state is one CSS
custom property, **`--collapse`** (0 = expanded, 1 = collapsed), and every
header property is a `calc()` of it. The state is a continuous function *of* the
scroll offset rather than a decision made *about* it, so there is no state to
flip and no feedback loop to close.

`--collapse` is set by a small **rAF-throttled JS scroll handler**
(`--collapse = clamp(scrollY / 96, 0, 1)`), not by a CSS scroll-timeline. An
earlier version used `animation-timeline: scroll()`; it ran on the compositor in
Chrome and Safari but **Firefox did not apply it at all — the header just stayed
expanded**. A plain scroll handler behaves identically in every browser, and
because it drives a *continuous* value (not a threshold) it does not reintroduce
the flap. This is the one place JS earns its place back: the goal was never
"no JS", it was "no threshold".

Consequences:

- **The cross-fade has no blank frame.** Both lockups share the logo's
  coordinate system, so at equal height their mark *and* wordmark sit
  pixel-identically — but only once the compact wordmark is raised to match: in
  the inline `hero.html` compact SVG the wordmark group is moved from
  `y=624.57` to `y=513.28` (the full lockup's value). The compact lockup then
  lies **underneath at full opacity**, and only the full lockup on top fades
  (`opacity: clamp(0, 1 - --collapse*1.5, 1)`). So the mark and wordmark stay
  solid the whole way (the compact carries them) and **only the two strap lines
  fade** — no blank moment, and no half-opacity shimmer where two copies of the
  wordmark would otherwise overlap. The full is fully faded by `--collapse ≈
  0.67`, while the lockup is still ≥274px wide, so the strap lines never linger
  below their 234px legibility floor (§5.3).
- **The header is `position: fixed` behind a constant-height spacer, not
  `sticky`.** A sticky header is in the document flow, so collapsing it by up to
  104px pulls the whole page up *while the reader is scrolling*: their scroll
  and the rising content add together, which reads as hopping, and the browser
  must relay out the entire document every frame. With cold caches right after
  a reload that cost is plainly visible; once warm it looks smooth — which is
  why the stutter appears to "go away" after scrolling back and forth a few
  times, and why it is easy to misdiagnose as a flap. A fixed header reserves
  its expanded height once and never touches the flow again, so collapsing
  repaints the bar and nothing else. **Do not convert it back to `sticky`.**
- The link row is **bottom-aligned throughout**. The old switch to `center`
  produced a visible jump at exactly the moment the header was already moving.
- The collapsed lockup height is **58px, not 52px**. 52 × 2.2456 = 117px wide,
  which is below the 130px compact minimum §5.3 sets. 58px yields exactly 130px.
  The reference `hero.html` shipped 52 and was out of spec; it is now 58.
- **Reduced-motion users keep the header expanded and static.** The scroll
  handler is not attached when `prefers-reduced-motion: reduce`, so `--collapse`
  stays 0. The two-threshold handler and its flapping are gone entirely.
- The compact lockup is always in the DOM, overlaid and `aria-hidden` so
  assistive tech is not read the wordmark twice.
- **The slot's width and height are both explicit `calc()`s of `--collapse`;
  neither is derived from the SVGs' intrinsic size.** When the width depended on
  the images having decoded, the flex row relaid out on every frame of the first
  scroll and the nav wrapped to a second line and back.
- **The hairline is a pseudo-element faded with `opacity`, not a
  `border-bottom-color` faded through `color-mix()`.** A `calc()` percentage
  inside `color-mix()` is not accepted by every engine and fell back silently to
  fully transparent, so the collapsed header had no bottom edge at all. Opacity
  always interpolates.
- **All nav links are 700.** With the weight ceiling at 700 (§2.2.1) the active
  link cannot go heavier, so it is marked by the 2px `--accent-graphic`
  underline alone.

**Resolved 2026-08-26 — approved by the brand owner.** The compact lockup's
wordmark moves to `y=513.28`, the full lockup's value, in the **canonical asset**
`logo/vanillabp-logo-compact.svg` and in every file derived from it, not just in
the inline copy in `hero.html`. Two reasons, and the second is why it is a
reasonable change to the asset rather than a hack for one component:

- The cross-fade needs it. Both lockups share the logo's coordinate system, so
  at equal height the mark and the wordmark only sit pixel-identically once the
  compact wordmark is raised; otherwise the two are visibly offset mid-fade.
- `y=513.28` also centres the wordmark on the mark-plus-stick (centre ≈ 518),
  which is better for the standalone lockup on its own terms.

The two lockups now agree by construction, so nothing has to be kept in sync by
hand. `§5.3`'s minimum sizes are unaffected — the geometry moved, not the
proportions.

**This project's `Header` component** (`components/layout/Header.jsx`) does not
inline the two lockups; it cross-fades two separate `<img>`/`<picture>` assets,
overlapping at the same height and bottom edge. Because the reposition now lives
in the assets themselves, the component gets the aligned fade for free — which
is the point of fixing it at the source rather than in the markup.

### 12.3 Proof points must be verifiable

`StatStrip` shows a figure and one line of context. The rule attached to it:
every figure must be checkable against a repository. "2 engines" and "6
blueprints" are countable; anything that is not gets dropped rather than
estimated. A stat nobody can verify is decoration wearing a number's clothes.

### 12.4 The logo is scheme-aware by default

`currentColor` only resolves when an SVG is **inlined**. Loaded through
`<img>` — which is what a component does — it falls back to black, and the
lockup silently ships a black wordmark. `Logo` therefore defaults to
`tone="auto"` and serves the light or dark file through a `<picture>` media
source. §5.1's preference for the `currentcolor` file still holds wherever you
can genuinely inline it.

### 12.5 The hero proves the claim instead of asserting it (2026-08-13)

The reference hero's engine toggle used to change a text label and nothing
else, so the page *asserted* "swap the engine, not your business code" without
demonstrating it. It now demonstrates it. This is the deliberate answer to the
brief "the system is a little boring": the fix was not more decoration — banned
by the brand — but finally **spending the boldness §6 budgeted for** on the
product's own claim, told with the product's own device.

Switching Camunda 7 ⇄ Camunda 8 in the hero now:

- leaves the business-code panel (`@WorkflowService … LoanApproval`)
  byte-for-byte identical — that stillness *is* the proof. The panel is drawn
  as the BPMN sequence it already is: start event → task → end event (§6), so
  the signature carries the hero rather than shrinking to one eyebrow glyph;
- slides a single marker to the chosen engine and re-points the flow, so the
  "swap" is a visible movement, not a state the reader has to decode;
- changes **exactly one dependency line** — the `pom.xml` `<artifactId>` — which
  flashes once (`--surface-accent` fading to transparent) to say *this, and only
  this, is what moved*.

Rules this establishes, so it is not mistaken for drift:

- **No token was added.** Every colour, size, radius, easing and duration
  resolves to a token under `tokens/`. A "kick" that needs a new colour is
  off-brand by construction; this one needed none.
- **One authored motion moment.** The marker slide, the dependency flash and a
  short "unchanged" pulse are the *only* new motion, and all of it lives inside
  `prefers-reduced-motion: no-preference`. Reduced-motion users get the same
  state change with no movement. Do not scatter more.
- **The proof pattern is reusable but not generic.** A live before/after belongs
  only where the product's value *is* the invariance (business code unchanged
  across engines). It is not a template to drop onto unrelated sections; that
  would be the `01 / 02 / 03` mistake of §6 in interactive form.
- The engine buttons are now the control *and* the diagram's terminus, so the
  duplicate toggle in the panel head was removed — one control, not two.

Browser-surface defaults were themed to the palette in the same pass
(`::selection` → `--surface-accent` / `--on-accent`; `caret-color` →
`--accent-graphic`; the code panel's scrollbar to `--border-strong`). These are
page-level polish that every surface should inherit, not new system primitives.

**Still open (not a defect introduced here):** the desktop nav's horizontal link
row overflows by a few pixels at 360 px, exactly the failure §7 predicted for
"five subpages coming". The mobile disclosure it calls for is the correct fix and
is deferred to that work, not patched locally here.

### 12.6 Release red — the one hue outside the palette (2026-08-26)

§1.1 states that hue 45 and hue 30 are the only hues in the system. **Release red
is a deliberate, single exception, and it is bounded by its meaning rather than
by taste.** VanillaBP 2.0 needed a mark that says *new in this version* and that
cannot be mistaken for amber — and inside a two-hue warm palette there is no
warm tone left that reads as "new" rather than as "brand".

```css
--fill-release:       #A3231A;  /* 6.09:1 with white text */
--fill-release-hover: #8A1D15;
--on-release:         #FFFFFF;
```

Dark mode lifts the fill to `#C42C21` / `#D8362A`: `#A3231A` on `#181106` is
only 2.4:1 and would read as a dark patch rather than a mark. White text still
clears 4.5:1 on the lifted value.

The constraints that keep it from spreading:

- **It is not a semantic danger colour.** This system has no error state, and
  introducing red as "error" would retroactively make every release badge look
  like a warning. Form errors are carried by `--accent-text` plus the message
  (§7, Input).
- **It is not a highlight.** Emphasis is amber, or size, or italic — never red.
- **Restraint is the whole point.** Two or three uses per surface. A page where
  five things are red says nothing is new. On the landing page it appears in
  exactly three places: the badge beside the hero headline, the "Quarkus is
  available as of 2.0" note, and the "New in 2" badges on the features page.
- It is dark enough to carry white text at 6.09:1, so it needs no second
  variant for text-on-fill — one fill, one hover, one label colour.

### 12.7 Slides need the layout vocabulary restated (2026-08-26)

A deck built with this system came out visibly weaker than the website. The
cause is structural, not decorative: the page's rhythm comes from `Section`,
`SectionSpine` and `Eyebrow`, and **a slide is one band, not a scroll of
bands** — so a deck falls back on plain boxes and loses the vocabulary
entirely. `guidelines/DECK-VOCABULARY.md` restates it at 1920×1080: band
alternation across slides rather than down a scroll, the spine turned
horizontal for a sequence, eyebrow sizes, card variants, stat and code scales,
and the minimum sizes. It introduces no colour, font or radius.

### 12.8 Browser globals are `window.`-qualified (2026-08-26)

Every browser global in a component is written `window.scrollY`,
`window.addEventListener`, `window.matchMedia`, `window.requestAnimationFrame`.
Create React App's `react-app` ESLint config rejects bare globals via
`no-restricted-globals` and turns that into a **build failure on CI**. Because
consumers vendor these components as copies rather than as a dependency, the
unqualified form breaks every consumer's build individually — so the
qualification belongs here, once, not in each project.
