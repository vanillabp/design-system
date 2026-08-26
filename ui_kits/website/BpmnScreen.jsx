const { Container, Section, ContentBlock, Input, TextArea, Button, Eyebrow } = window.VanillaBPDesignSystem_b629c7;

function BpmnScreen() {
  return (
    <>
      <Container>
        <div style={{ padding: "var(--space-12) 0 var(--space-8)" }}>
          <div style={{ marginBottom: "var(--space-4)" }}><Eyebrow marker="start">Business Process Model and Notation</Eyebrow></div>
          <h1 style={{ fontSize: "var(--text-h1)", margin: "0 0 var(--space-5)" }}>About BPMN</h1>
          <p style={{ fontSize: "1.1875rem", color: "var(--text-muted)", margin: 0 }}>
            A graphical representation for specifying business processes in XML, including semantic
            information. A BPMN engine runs those processes and acts as a state engine.
          </p>
        </div>
      </Container>

      <Section tone="subtle" eyebrow="What it is" marker="task" title="Only tasks need implementing — the engine handles the flow">
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          <p style={{ color: "var(--text-muted)" }}>This dramatically reduces the amount of code you write. BPMN was developed by the Object Management Group and is now an ISO standard. To build your own models, try <a href="https://camunda.com/de/download/modeler/">Camunda's modeler</a>.</p>
          <div style={{ background: "var(--surface-accent)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)" }}>
            <img src="../../assets/illustrations/loan-approval-process.png" alt="A loan approval BPMN process" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-md)" }} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Contact" marker="end" title="Do you have any question? Feel free to reach out.">
        <form style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "var(--space-5)", alignItems: "start", maxWidth: 900 }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <Input label="Name" placeholder="Your Name" />
            <Input label="Email" type="email" placeholder="Your Email" />
          </div>
          <div style={{ display: "grid", gap: "var(--space-4)", justifyItems: "start" }}>
            <TextArea label="Message" rows={5} placeholder="Tell us everything" style={{ width: "100%" }} />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Section>
    </>
  );
}

Object.assign(window, { BpmnScreen });
