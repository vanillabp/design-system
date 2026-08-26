import React from "react";

/* 1200px max, --space-5 gutters. Every page-level block sits in one.

   width: 100% and border-box are load-bearing, not tidiness: `margin: 0 auto`
   becomes a CROSS-AXIS auto margin when a Container is a direct child of a column
   flex container (an app shell whose <main> is `display: flex;
   flex-direction: column` — the ordinary sticky-footer layout). Cross-axis auto
   margins disable stretch, so without an explicit width the box is shrink-to-fit:
   measured 254px instead of 924px, which made the first block of every page
   narrower than the sections below it. Inside a Section the Container sits in
   normal block flow and was unaffected, which is what made it look like a
   per-page mistake. */

export function Container({ children, style, ...rest }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        boxSizing: "border-box",
        margin: "0 auto",
        padding: "0 var(--space-5)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
