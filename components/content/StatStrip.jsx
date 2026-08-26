import React from "react";

/* Proof points under a hero: a large number and one line of context. Sits on a
   2px --accent-graphic rule, which is the only decoration it gets.

   The figure reads --text-stat rather than a literal, so it scales with the
   deck scope (DECK-VOCABULARY 6 wants 96-140px at slide scale). */

export function StatStrip({ stats = [], style, ...rest }) {
  return (
    <div style={{
      display: "grid", gap: "var(--space-8)",
      gridTemplateColumns: `repeat(${Math.max(stats.length, 1)}, 1fr)`,
      paddingTop: "var(--space-6)", borderTop: "2px solid var(--accent-graphic)",
      ...style,
    }} {...rest}>
      {stats.map((s) => (
        <div key={s.label} style={{ display: "grid", gap: "var(--space-2)" }}>
          <div style={{
            fontSize: "var(--text-stat)", fontWeight: "var(--weight-bold)",
            letterSpacing: "var(--tracking-display)", lineHeight: 1, color: "var(--text-color)",
          }}>{s.value}</div>
          <div style={{ fontSize: "var(--text-small)", color: "var(--text-muted)", maxWidth: "26ch" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
