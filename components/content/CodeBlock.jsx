import React from "react";

/* --bg-sunken, --radius-md, --space-5 padding, 1px --border, --text-code.
   Syntax colours stay in the brown/amber family plus one cool tone for strings.
   DESIGN.md 7. */

const TOKEN = {
  annotation: { color: "var(--code-annotation)" },
  keyword:    { fontWeight: "var(--weight-bold)" },
  comment:    { color: "var(--code-comment)", fontStyle: "italic" },
  string:     { color: "var(--code-string)" },
};

export function CodeBlock({ children, filename, language, wrap = false, style, ...rest }) {
  return (
    <div style={{
      border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
      overflow: "hidden", background: "var(--bg-sunken)", ...style,
    }} {...rest}>
      {(filename || language) && (
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: "var(--space-3)", padding: "var(--space-3) var(--space-5)",
          borderBottom: "1px solid var(--border)", background: "var(--bg-subtle)",
          fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)",
          letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
          color: "var(--accent-text)",
        }}>
          <span>{filename}</span><span>{language}</span>
        </div>
      )}
      <pre style={{
        margin: 0, padding: "var(--space-5)", overflowX: "auto",
        fontFamily: "var(--font-mono)", fontSize: "var(--text-code)",
        lineHeight: "var(--leading-body)", color: "var(--text-color)",
        whiteSpace: wrap ? "pre-wrap" : "pre",
        overflowWrap: wrap ? "anywhere" : undefined,
      }}><code>{children}</code></pre>
    </div>
  );
}

/** Inline span for one syntax role. Keeps callers out of raw hex values. */
export function Code({ kind, children }) {
  return <span style={TOKEN[kind] || undefined}>{children}</span>;
}
