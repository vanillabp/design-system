# The landing-page layout system, on slides

A deck built with this system usually looks flatter than the website, and the
reason is structural rather than decorative: the website's rhythm comes from
`Section`, `SectionSpine` and `Eyebrow`, and none of those have a slide
equivalent. A slide is one band, not a scroll of bands, so the vocabulary has to
be restated per slide. This file is that restatement.

Nothing here introduces a colour, a font or a radius. Every value is an existing
token.

---

## 1. A slide is one band, and the deck alternates

The page alternates `--bg` and `--bg-subtle` down the scroll. A deck does the
same **across** slides: a section opener on `--bg-subtle`, its content slides on
`--bg`, the next opener back on `--bg-subtle`. `--bg-sunken` is for a panel
inside a slide, never for the slide itself.

Two background colours for the whole deck. A third reads as a different template.

## 2. Every slide carries an eyebrow

The website labels each section with an uppercase eyebrow — *The problem*, *The
abstraction*, *The migration* — and the label is what makes a long page
navigable. On a slide it does the same job for the audience: it says where in the
argument they are.

```
EYEBROW           var(--text-eyebrow), var(--weight-bold),
                  letter-spacing var(--tracking-eyebrow), uppercase,
                  colour var(--accent-text)
Headline          sentence case, var(--text-color), never gold
```

At 1920×1080 the eyebrow sits at 28–32px, well above the 24px floor. Do not
shrink it to look subtle; drop it entirely if the slide does not need one.

## 3. The spine, restated for a slide

On the page, `SectionSpine` draws a 2px `--border` vertical line down the left
gutter and hangs a BPMN marker on it per section: thin circle to open, rounded
rectangle for each step, thick circle to close. That device is the brand's
signature and survives translation to a slide in two forms.

**Vertical, for a slide listing steps.** The line runs top to bottom in the left
gutter; each row hangs a marker on it. Markers are drawn at a 2px stroke in
`--accent-graphic`, 32–40px at slide scale.

**Horizontal, for a slide showing a sequence.** The same rule turns 90°: a
2px `--border` line across the slide, markers sitting on it, labels below. This
is the one addition slides need that the page does not have, because a page
scrolls and a slide does not.

Never number the markers `01 / 02 / 03`. The glyphs *are* the numbering, and the
digits are the generic version of the same idea.

## 4. Boxes

A card is `--bg` on a `--bg-subtle` slide, or `--bg-subtle` on a `--bg` slide —
the fill inverts, never a grey. Plus a 1px `--border` hairline,
`--radius-lg` (20px), `--shadow-1`, and generous padding: 32px on the page,
40–48px at slide scale.

Three variants earn their place, all on the landing page:

| Variant | Fill | For |
|---|---|---|
| Plain | `--bg` / `--bg-subtle` inverted | Most boxes. |
| Accent | `--surface-accent` (vanilla), text `--on-accent` | The one box on the slide that is the answer. One per slide. |
| Plate | `--surface-accent`, 20px padding, image inside at `--radius-md` | Diagrams and process images. An image on bare white reads as clip-art. |

A screenshot that carries its own drop shadow is the exception: put it on
`#FFFFFF` with a hairline and a small padding, so the shadow fades into white
instead of onto a coloured plate.

Nothing has a coloured left border. Nothing lifts or scales on hover.

## 5. Buttons keep their colour

`--fill-primary` amber fill with a brown `--on-primary` label and a
`--fill-primary-edge` boundary; secondary is a `--border` outline that fills with
`--bg-subtle`. Buttons do not flip in dark mode. On a slide a button is a
depiction of a UI, not a control — never put one on a slide as decoration.

## 6. Numbers

The website's `StatStrip` — a big figure over a small sentence — is the one place
a number gets to be large. On a slide: figure at 96–140px in `--text-color`,
label at 28–32px in `--text-muted`, three or four across, separated by
`--border` hairlines. Never a chart without data behind it, never a percentage
invented to fill the row.

## 7. Code on a slide

`CodeBlock` at `--radius-md` (12px) on `--bg-sunken`, JetBrains Mono, with the
syntax tokens: `--code-annotation`, `--code-comment`, `--code-string` (the
palette's one cool colour). At slide scale code sits at 26–32px, which means
roughly 12 lines and 60 columns per slide. A specimen that needs more than that
is a screenshot of an IDE, not a slide.

## 8. Release red

`--fill-release` with `--on-release` text marks *new in this version* — a badge
on the title slide, a note beside a feature that only exists in 2.0. Two or
three per deck. It is not a highlight colour and it is not an error colour.

## 9. What still does not belong

No gradients. No emoji. No icon set other than Lucide or Tabler at 1.5px stroke,
never mixed. No transitions between slides beyond the deck default, no builds
that animate for their own sake, no parallax. The brand promise is *simple,
plain, no frills*, and a deck is where that is hardest to keep.
