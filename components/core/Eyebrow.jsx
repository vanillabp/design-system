import React from "react";
import { SectionMarker } from "./SectionMarker.jsx";

/* 12px, 700, uppercase, 0.08em tracking, --accent-text. Small bold text
   compensates with letter spacing rather than weight — there is no 600. */

export function Eyebrow({ children, marker, style, ...rest }) {
  const label = (
    <span style={{
      fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
      color: "var(--accent-text)", lineHeight: 1.4,
    }}>{children}</span>
  );

  if (!marker) return <span style={style} {...rest}>{label}</span>;

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", ...style }} {...rest}>
      <SectionMarker type={marker} />
      {label}
    </span>
  );
}
