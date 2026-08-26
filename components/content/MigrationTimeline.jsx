import React from "react";

/* Three phases of a Camunda 7 → 8 migration, side by side. Each phase is a
   column headed by a 2px rule; the active one takes --accent-graphic, the rest
   --border. Engine labels are vanilla pills. No cards — the rule is the edge,
   which keeps it consistent with the section spine. */

function EngineTag({ children }) {
  return (
    <span style={{
      fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
      padding: "2px var(--space-2)", borderRadius: "var(--radius-pill)",
      background: "var(--surface-accent)", color: "var(--on-accent)",
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

export function MigrationTimeline({ phases = [], style, ...rest }) {
  return (
    <div style={{
      display: "grid", gap: "var(--space-5)",
      gridTemplateColumns: `repeat(${Math.max(phases.length, 1)}, 1fr)`,
      ...style,
    }} {...rest}>
      {phases.map((p) => (
        <div key={p.title} style={{
          display: "grid", gap: "var(--space-3)", alignContent: "start",
          paddingTop: "var(--space-5)",
          borderTop: "2px solid " + (p.active ? "var(--accent-graphic)" : "var(--border)"),
        }}>
          {p.engines && p.engines.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
              {p.engines.map((e) => <EngineTag key={e}>{e}</EngineTag>)}
            </div>
          )}
          <h3 style={{ letterSpacing: 0 }}>{p.title}</h3>
          <p style={{ margin: 0, fontSize: "var(--text-small)", color: "var(--text-muted)" }}>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
