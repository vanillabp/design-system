import React from "react";
import { SectionMarker } from "../core/SectionMarker.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";

/* The BPMN section markers, joined into a literal spine: a hairline runs from
   each marker to the next, so the page reads as one sequence rather than a
   stack of unrelated bands. This is the §6 device taken to its conclusion —
   the rule carries the grouping that card borders would otherwise have to.
   Legitimate only when the sections really are a sequence.

   Spacing is --space-12, one step below the --space-16 section rhythm of
   DESIGN.md 3: the rule already carries the separation, so the full gap
   double-counts it and makes the page scan longer than it reads.

   markerSize drives both the glyph and the rail column, so the line stays
   centred under the marker at any size. 20px on a page; DECK-VOCABULARY 3 asks
   for 32-40px at slide scale, which is what the prop exists for — do not
   override the glyph with a CSS rule from outside. */

export function SectionSpine({ marker = "task", markerSize = 20, eyebrow, last = false, gap = "var(--space-12)", children, style, ...rest }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `${markerSize}px 1fr`, columnGap: "var(--space-6)", ...style }} {...rest}>
      <div style={{ display: "grid", gridTemplateRows: "auto 1fr", justifyItems: "center" }}>
        <SectionMarker type={marker} size={markerSize} />
        {!last && <div style={{ width: 2, background: "color-mix(in srgb, var(--accent-graphic) 40%, transparent)", marginTop: "var(--space-2)" }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : gap }}>
        {eyebrow && <div style={{ marginTop: -3, marginBottom: "var(--space-5)" }}><Eyebrow>{eyebrow}</Eyebrow></div>}
        {children}
      </div>
    </div>
  );
}
