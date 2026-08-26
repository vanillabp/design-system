import React from "react";
import { Container } from "./Container.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";

/* Alternating --bg / --bg-subtle. Section rhythm is --space-12 on mobile,
   --space-16 from md. Two-column layouts go 5/7 or 7/5, never 6/6 — the
   dead-even split with a centred gutter is what makes a page feel mechanical.
   DESIGN.md 3, 7. */

export function Section({ tone = "default", eyebrow, marker, title, children, split, style, ...rest }) {
  const body = (
    <>
      {(eyebrow || title) && (
        <header style={{ marginBottom: "var(--space-6)" }}>
          {eyebrow && <div style={{ marginBottom: "var(--space-4)" }}><Eyebrow marker={marker}>{eyebrow}</Eyebrow></div>}
          {title && <h2 style={{ maxWidth: "var(--measure)", textWrap: "balance" }}>{title}</h2>}
        </header>
      )}
      {split ? (
        <div style={{
          display: "grid", gap: "var(--space-8)",
          gridTemplateColumns: split === "5/7" ? "5fr 7fr" : "7fr 5fr",
          alignItems: "center",
        }}>{children}</div>
      ) : children}
    </>
  );

  return (
    <section style={{
      background: tone === "subtle" ? "var(--bg-subtle)" : tone === "sunken" ? "var(--bg-sunken)" : "var(--bg)",
      color: "var(--text-color)",
      padding: "var(--space-12) 0",
      ...style,
    }} {...rest}>
      <Container>{body}</Container>
    </section>
  );
}
