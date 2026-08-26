import React from "react";

/* Four short problem statements in a 2×2 of plates. Used where the page has to
   name the pain before the solution — a pitch move, so it stays sparse: a
   heading and two lines each, never a paragraph. */

export function ProblemGrid({ items = [], columns = 2, style, ...rest }) {
  return (
    <div style={{
      display: "grid", gap: "var(--space-4)",
      gridTemplateColumns: `repeat(${columns}, 1fr)`, ...style,
    }} {...rest}>
      {items.map((it) => (
        <div key={it.title} style={{
          background: "var(--bg)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "var(--space-5)",
          boxShadow: "var(--shadow-1)", display: "grid", gap: "var(--space-2)", alignContent: "start",
        }}>
          <h3 style={{ letterSpacing: 0 }}>{it.title}</h3>
          <p style={{ margin: 0, fontSize: "var(--text-small)", color: "var(--text-muted)" }}>{it.body}</p>
        </div>
      ))}
    </div>
  );
}
