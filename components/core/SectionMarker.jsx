import React from "react";

/* The one memorable device: sections are numbered with BPMN glyphs, not digits.
   A thin circle (start event) opens, rounded rectangles (tasks) carry the body,
   a thick circle (end event) closes. 2px stroke, 20px, on the eyebrow line.
   Legitimate only when the sections genuinely are a sequence. DESIGN.md 6.
   Never add 01/02/03 numbering anywhere — that is the generic version. */

export function SectionMarker({ type = "task", size = 20, color = "var(--accent-graphic)", style, ...rest }) {
  const common = { fill: "none", stroke: color };
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true"
         style={{ display: "block", flex: "none", ...style }} {...rest}>
      {type === "start" && <circle cx="10" cy="10" r="7" strokeWidth="2" {...common} />}
      {type === "end"   && <circle cx="10" cy="10" r="6.5" strokeWidth="3.5" {...common} />}
      {type === "task"  && <rect x="2.5" y="4.5" width="15" height="11" rx="3" strokeWidth="2" {...common} />}
    </svg>
  );
}
