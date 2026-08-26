import React from "react";

/* The hero's runtime toggle: pill segments, one pressed. The pressed segment
   takes the primary fill and its edge, so it matches Button exactly. */

export function EngineSwitch({ options = [], value, onChange, label = "Workflow engine", style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  return (
    <div role="group" aria-label={label} style={{ display: "flex", gap: "var(--space-2)", ...style }} {...rest}>
      {options.map((opt) => {
        const on = opt === value;
        return (
          <button key={opt} type="button" aria-pressed={on}
            onClick={() => onChange && onChange(opt)}
            onMouseEnter={() => setHover(opt)} onMouseLeave={() => setHover(null)}
            style={{
              font: "inherit", fontSize: "var(--text-small)", lineHeight: 1.2,
              fontWeight: on ? "var(--weight-bold)" : "var(--weight-regular)",
              padding: "var(--space-2) var(--space-4)",
              borderRadius: "var(--radius-pill)",
              border: "1px solid " + (on ? "var(--fill-primary-edge)" : "var(--border-strong)"),
              background: on ? "var(--fill-primary)" : hover === opt ? "var(--bg-subtle)" : "transparent",
              color: on ? "var(--on-primary)" : "var(--text-color)",
              cursor: "pointer",
              transition: "background-color var(--duration-fast) var(--ease)",
            }}>{opt}</button>
        );
      })}
    </div>
  );
}
