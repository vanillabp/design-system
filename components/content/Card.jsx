import React from "react";

/* --bg on --bg-subtle sections and vice versa, 1px --border, --radius-lg,
   --space-6 padding, --shadow-1. Illustrations sit on a --surface-accent plate
   at --radius-lg — images floating directly on white read as clip-art.
   DESIGN.md 7. */

export function Card({ tone = "default", image, imageAlt = "", imageHeight = 120, title, eyebrowText, children, style, ...rest }) {
  return (
    <div style={{
      background: tone === "accent" ? "var(--surface-accent)" : tone === "subtle" ? "var(--bg-subtle)" : "var(--bg)",
      color: tone === "accent" ? "var(--on-accent)" : undefined,
      // A --border hairline is invisible on vanilla, so accent carries none.
      border: tone === "accent" ? "1px solid transparent" : "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      boxShadow: "var(--shadow-1)",
      display: "grid", gap: "var(--space-4)", alignContent: "start",
      ...style,
    }} {...rest}>
      {image && (
        <div style={{
          background: "var(--surface-accent)", borderRadius: "var(--radius-lg)",
          padding: "var(--space-5)", display: "grid", placeItems: "center",
        }}>
          <img src={image} alt={imageAlt} style={{ maxWidth: "100%", maxHeight: imageHeight, width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
        </div>
      )}
      {eyebrowText && (
        <div style={{
          fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)",
          letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
          color: "var(--accent-text)",
        }}>{eyebrowText}</div>
      )}
      {title && <h3>{title}</h3>}
      {/* --text-muted is tuned for --bg (5.32:1); on vanilla it drops to ~3.9:1,
          so an accent card keeps the full-contrast --on-accent instead. */}
      {children && <div style={{ color: tone === "accent" ? "inherit" : "var(--text-muted)" }}>{children}</div>}
    </div>
  );
}
