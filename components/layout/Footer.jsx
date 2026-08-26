import React from "react";
import { Container } from "./Container.jsx";
import { Logo } from "../core/Logo.jsx";

/* --bg-subtle. Warm neutrals only — the old site's cool #F1F2F3 is retired. */

export function Footer({ columns = [], note, logoBase = "assets/logo", style, ...rest }) {
  return (
    <footer style={{
      background: "var(--bg-subtle)", borderTop: "1px solid var(--border)",
      padding: "var(--space-10) 0 var(--space-8)", color: "var(--text-color)", ...style,
    }} {...rest}>
      <Container>
        <div style={{ display: "grid", gap: "var(--space-8)", gridTemplateColumns: "5fr 7fr", alignItems: "start" }}>
          <div>
            <Logo variant="compact" size={44} src={logoBase + "/vanillabp-logo-compact"} />
            <p style={{ fontSize: "var(--text-small)", color: "var(--text-muted)", marginTop: "var(--space-4)", maxWidth: "34ch" }}>
              An independent API for business processing engines kept simple, plain and without frills.
            </p>
          </div>
          <div style={{ display: "grid", gap: "var(--space-6)", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
            {columns.map((col) => (
              <div key={col.title}>
                <div style={{
                  fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)",
                  letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
                  color: "var(--accent-text)", marginBottom: "var(--space-3)",
                }}>{col.title}</div>
                <ul style={{ display: "grid", gap: "var(--space-2)", listStyle: "none", margin: 0, padding: 0 }}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} style={{ fontSize: "var(--text-small)", color: "var(--text-color)", textDecoration: "none" }}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {note && (
          <p style={{
            marginTop: "var(--space-8)", paddingTop: "var(--space-5)",
            borderTop: "1px solid var(--border)", fontSize: "var(--text-small)",
            color: "var(--text-subtle)", maxWidth: "none",
          }}>{note}</p>
        )}
      </Container>
    </footer>
  );
}
