import React from "react";

/* Pill, --space-3/--space-5 padding, --text-small at 700, tracking 0.01em.
   No gradient, no transform on hover. DESIGN.md 7. */

const base = {
  display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
  font: "inherit", fontSize: "var(--text-small)", fontWeight: "var(--weight-bold)",
  letterSpacing: "var(--tracking-button)", padding: "var(--space-3) var(--space-5)",
  borderRadius: "var(--radius-pill)", border: "1px solid transparent",
  cursor: "pointer", textDecoration: "none", lineHeight: 1.2,
  transition: "background-color var(--duration-fast) var(--ease), box-shadow var(--duration-fast) var(--ease)",
};

const sizes = {
  sm: { fontSize: "var(--text-eyebrow)", padding: "var(--space-2) var(--space-4)" },
  md: {},
  lg: { fontSize: "var(--text-body)", padding: "var(--space-4) var(--space-6)" },
};

export function Button({ variant = "primary", size = "md", href, disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const primary = variant === "primary";

  const skin = primary
    ? {
        background: hover && !disabled ? "var(--fill-primary-hover)" : "var(--fill-primary)",
        color: "var(--on-primary)",
        borderColor: "var(--fill-primary-edge)",
        boxShadow: hover && !disabled ? "var(--shadow-1)" : "none",
      }
    : {
        background: hover && !disabled ? "var(--bg-subtle)" : "transparent",
        color: "var(--text-color)",
        borderColor: "var(--border-strong)",
      };

  const props = {
    style: { ...base, ...sizes[size], ...skin, opacity: disabled ? 0.45 : 1, pointerEvents: disabled ? "none" : undefined, ...style },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    ...rest,
  };

  return href ? <a href={href} {...props}>{children}</a>
              : <button type="button" disabled={disabled} {...props}>{children}</button>;
}
