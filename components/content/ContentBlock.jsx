import React from "react";
import { Button } from "../core/Button.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";

/* The site's workhorse: illustration on one side, prose and a single action on
   the other. 7/5 or 5/7, never 6/6. The illustration sits on a vanilla plate. */

export function ContentBlock({ eyebrow, marker, title, children, image, imageAlt = "",
                               reverse = false, action, style, ...rest }) {
  const text = (
    <div>
      {eyebrow && <div style={{ marginBottom: "var(--space-4)" }}><Eyebrow marker={marker}>{eyebrow}</Eyebrow></div>}
      {title && <h2 style={{ marginBottom: "var(--space-5)", textWrap: "balance" }}>{title}</h2>}
      <div style={{ color: "var(--text-muted)", maxWidth: "var(--measure)" }}>{children}</div>
      {action && <div style={{ marginTop: "var(--space-6)" }}><Button href={action.href} onClick={action.onClick}>{action.label}</Button></div>}
    </div>
  );

  const plate = image && (
    <div style={{
      background: "var(--surface-accent)", borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)", display: "grid", placeItems: "center",
    }}>
      <img src={image} alt={imageAlt} style={{ maxWidth: "100%", height: "auto", display: "block", borderRadius: "var(--radius-md)" }} />
    </div>
  );

  return (
    <div style={{
      display: "grid", gap: "var(--space-8)", alignItems: "center",
      gridTemplateColumns: image ? (reverse ? "5fr 7fr" : "7fr 5fr") : "1fr",
      ...style,
    }} {...rest}>
      {reverse && plate}
      {text}
      {!reverse && plate}
    </div>
  );
}
