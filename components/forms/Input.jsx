import React from "react";

/* Warm sunken field, gold hairline on focus. The old site's rgb(241,242,243)
   grey fill is retired along with the rest of the cool neutrals. */

export function Input({ label, id, hint, error, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const auto = React.useId();
  const fid = id || auto;
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", ...style }}>
      {label && (
        <label htmlFor={fid} style={{ fontSize: "var(--text-small)", fontWeight: "var(--weight-bold)", color: "var(--text-color)" }}>{label}</label>
      )}
      <input id={fid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
        font: "inherit", fontSize: "var(--text-body)", width: "100%",
        padding: "var(--space-3) var(--space-4)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid " + (focus ? "var(--border-strong)" : "var(--border)"),
        background: "var(--bg-subtle)", color: "var(--text-color)",
        outline: "none",
        transition: "border-color var(--duration-fast) var(--ease)",
      }} {...rest} />
      {(hint || error) && (
        <span style={{ fontSize: "var(--text-small)", color: error ? "var(--accent-text)" : "var(--text-subtle)" }}>{error || hint}</span>
      )}
    </div>
  );
}
