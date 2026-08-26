import React from "react";

/* The mark is background-independent by construction: the brown BPMN glyph sits
   inside the vanilla popsicle body, 8.35:1 against any surface. Geometry copied
   verbatim from favicon.svg — never redraw it. DESIGN.md 5.
   The full and compact lockups are outline SVGs whose wordmark inherits
   currentColor; pass `src` pointing at your copy of assets/logo/. */

let uid = 0;

export function Logo({ variant = "mark", tone = "auto", size, src, label = "VanillaBP", style, ...rest }) {
  const cid = React.useMemo(() => "vbp-body-" + ++uid, []);

  if (variant === "mark") {
    const s = size || 48; // minimum size for the mark is 48px — DESIGN.md 5.3
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label={label} width={s} height={s} style={{ display: "block", ...style }} {...rest}>
      <defs><clipPath id={cid}><path d="M 69.06 66.62 A 58.94 58.94 0 0 1 186.94 66.62 L 186.94 163.26 A 19.65 19.65 0 0 1 167.29 182.91 L 88.71 182.91 A 19.65 19.65 0 0 1 69.06 163.26 Z" /></clipPath></defs>
      <rect x="108.82" y="158.87" width="38.36" height="89.45" rx="19.18" fill="#BF9000" />
      <path d="M 69.06 66.62 A 58.94 58.94 0 0 1 186.94 66.62 L 186.94 163.26 A 19.65 19.65 0 0 1 167.29 182.91 L 88.71 182.91 A 19.65 19.65 0 0 1 69.06 163.26 Z" fill="#FFE699" />
      <g clipPath={`url(#${cid})`} fill="none" stroke="#663300" strokeWidth="13.27">
        <circle cx="69.05" cy="82.83" r="29.82" />
        <path d="M 98.87 82.83 L 117.33 82.83" />
        <path d="M 157.15 82.83 L 117.33 62.92 L 117.33 102.73 Z" fill="#663300" stroke="none" />
        <rect x="157.12" y="31.61" width="75.01" height="102.19" rx="12.50" />
      </g>
    </svg>
    );
  }

  // Full lockup minimum width 234px; compact 130px. Below 234px the two strap
  // lines are decoration, so swap assets rather than scaling the full one down.
  const full = variant === "full";
  const height = size || (full ? 138 : 52);
  // currentColor only resolves when the SVG is INLINED. Loaded as an <img> it
  // falls back to black, so the explicit light/dark files are the default here.
  // Inline vanillabp-logo-currentcolor.svg directly if you can — DESIGN.md 5.1.
  const stem = "vanillabp-logo" + (full ? "" : "-compact");
  const base = src ? src.replace(/-(light|dark)\.svg$/, "") : "assets/logo/" + stem;
  const imgStyle = { display: "block", height, width: "auto", ...style };

  // "auto" follows the PAGE's colour scheme through a <picture> media source.
  if (tone === "auto") {
    return (
      <picture>
        <source srcSet={base + "-dark.svg"} media="(prefers-color-scheme: dark)" />
        <img src={base + "-light.svg"} alt={label} style={imgStyle} {...rest} />
      </picture>
    );
  }
  return <img src={base + "-" + tone + ".svg"} alt={label} style={imgStyle} {...rest} />;
}
