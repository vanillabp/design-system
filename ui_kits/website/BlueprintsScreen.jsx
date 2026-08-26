const { Container, Section, Card, Eyebrow } = window.VanillaBPDesignSystem_b629c7;

const BLUEPRINTS = [
  { title: "Standalone", body: "A (micro-)service hosting one use case. Backend only — bring your own frontend.", tags: ["Spring Boot & JPA", "Spring Boot & MongoDB"] },
  { title: "Standalone leveraging Business Cockpit", body: "One workflow module integrating into the Business Cockpit UI for user tasks and workflows.", tags: ["Spring Boot & JPA, React", "Spring Boot & MongoDB"] },
  { title: "Workflow Module", body: "An independent workflow module hosted next to others in one service.", tags: ["Coming soon"] },
  { title: "Host for workflow modules", body: "A service acting as a runtime environment hosting independent workflow modules.", tags: ["Coming soon"] },
  { title: "Workflow Module + Business Cockpit", body: "An independent module hosted beside others, integrating into the Business Cockpit.", tags: ["Coming soon"] },
  { title: "Host + Business Cockpit", body: "A runtime environment for independent modules, integrating into the Business Cockpit.", tags: ["Coming soon"] },
];

function Tag({ children }) {
  return (
    <span style={{
      fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
      background: "var(--surface-accent)", color: "var(--on-accent)",
      padding: "var(--space-1) var(--space-3)", borderRadius: "var(--radius-pill)",
    }}>{children}</span>
  );
}

function BlueprintsScreen() {
  return (
    <>
      <Container>
        <div style={{ padding: "var(--space-12) 0 var(--space-8)" }}>
          <div style={{ marginBottom: "var(--space-4)" }}><Eyebrow marker="start">Blueprints</Eyebrow></div>
          <h1 style={{ fontSize: "var(--text-h1)", margin: "0 0 var(--space-5)" }}>Choose the best matching blueprint</h1>
          <p style={{ fontSize: "1.1875rem", color: "var(--text-muted)", margin: 0 }}>
            Blueprints are provided as Maven archetypes, so you get started without a lengthy setup.
            Most have variants for the technologies you already use.
          </p>
        </div>
      </Container>

      <Section tone="subtle" eyebrow="The catalogue" marker="end" title="Six starting points">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {BLUEPRINTS.map((b) => (
            <Card key={b.title} title={b.title}>
              <p style={{ margin: "0 0 var(--space-4)" }}>{b.body}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {b.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { BlueprintsScreen, Tag });
