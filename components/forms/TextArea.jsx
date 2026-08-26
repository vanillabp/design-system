import React from "react";

export function TextArea({ label, id, hint, error, rows = 5, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const auto = React.useId();
  const fid = id || auto;
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", ...style }}>
      {label && (
        <label htmlFor={fid} style={{ fontSize: "var(--text-small)", fontWeight: "var(--weight-bold)", color: "var(--text-color)" }}>{label}</label>
      )}
      <textarea id={fid} rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...{
        font: "inherit", fontSize: "var(--text-body)", width: "100%",
        padding: "var(--space-3) var(--space-4)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid " + (focus ? "var(--border-strong)" : "var(--border)"),
        background: "var(--bg-subtle)", color: "var(--text-color)",
        outline: "none",
        transition: "border-color var(--duration-fast) var(--ease)",
      }, resize: "vertical", lineHeight: "var(--leading-body)" }} {...rest} />
      {(hint || error) && (
        <span style={{ fontSize: "var(--text-small)", color: error ? "var(--accent-text)" : "var(--text-subtle)" }}>{error || hint}</span>
      )}
    </div>
  );
}
