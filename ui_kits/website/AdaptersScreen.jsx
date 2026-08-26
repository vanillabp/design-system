const { Container, Section, Card, CodeBlock, Code, Eyebrow } = window.VanillaBPDesignSystem_b629c7;

function AdaptersScreen() {
  return (
    <>
      <Container>
        <div style={{ padding: "var(--space-12) 0 var(--space-8)" }}>
          <div style={{ marginBottom: "var(--space-4)" }}><Eyebrow marker="start">Adapters</Eyebrow></div>
          <h1 style={{ fontSize: "var(--text-h1)", margin: "0 0 var(--space-5)" }}>Available Adapters</h1>
          <p style={{ fontSize: "1.1875rem", color: "var(--text-muted)", margin: 0 }}>
            VanillaBP provides an aspect-oriented service provider interface (SPI) for workflow systems.
            Vendors supply adapters that hide the details of the specific engine's API.
          </p>
        </div>
      </Container>

      <Section tone="subtle" eyebrow="Supported engines" marker="task" title="Two adapters today, more on the road">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
          <Card eyebrowText="Adapter" title="Camunda Platform 7" imageHeight={88} image="../../assets/logos-third-party/camunda-7.png">
            Seamless integration with the mature workflow engine. <a href="https://github.com/camunda-community-hub/vanillabp-camunda7-adapter/">GitHub</a>
          </Card>
          <Card eyebrowText="Adapter" title="Camunda Platform 8" imageHeight={88} image="../../assets/logos-third-party/camunda-8.png">
            Modern cloud-native workflow capabilities. <a href="https://github.com/camunda-community-hub/vanillabp-camunda8-adapter/">GitHub</a>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Key benefits" marker="task" title="What the SPI buys you">
        <ul style={{ display: "grid", gap: "var(--space-3)", margin: 0, padding: 0, listStyle: "none", maxWidth: "var(--measure)" }}>
          {["Decouples business code from workflow system APIs.",
            "Reduces code complexity and improves maintainability.",
            "Enables easy migration between different workflow systems.",
            "Focuses on business aspects rather than technical implementation details."].map((t) => (
            <li key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", color: "var(--text-muted)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "none", marginTop: 4 }}><rect x="2.5" y="4.5" width="15" height="11" rx="3" fill="none" stroke="var(--accent-graphic)" strokeWidth="2"/></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="subtle" eyebrow="Implementation example" marker="end" title="A fragment of a loan approval workflow">
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          <div style={{ background: "var(--surface-accent)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)" }}>
            <img src="../../assets/illustrations/loan-approval-process.png" alt="Loan approval BPMN process" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-md)" }} />
          </div>
          <CodeBlock filename="LoanApprovalWorkflow.java" language="java">
            <Code kind="annotation">@Service</Code>{"\n"}
            <Code kind="annotation">@WorkflowService</Code>{"(workflowAggregateClass = LoanApproval."}<Code kind="keyword">class</Code>{")\n"}
            <Code kind="annotation">@Transactional</Code>{"(noRollbackFor = TaskException."}<Code kind="keyword">class</Code>{")\n"}
            <Code kind="keyword">public class</Code>{" LoanApprovalWorkflow {\n\n    "}
            <Code kind="annotation">@Autowired</Code>{"\n    "}
            <Code kind="keyword">private</Code>{" LoanApprovalRepository loanApprovals;\n\n    "}
            <Code kind="annotation">@WorkflowTask</Code>{"\n    "}
            <Code kind="keyword">public void</Code>{" assessRisk("}<Code kind="keyword">final</Code>{" LoanApproval loanApproval) {\n        loanApproval.setRisk("}<Code kind="string">"LOW"</Code>{");\n    }\n}"}
          </CodeBlock>
        </div>
      </Section>
    </>
  );
}

Object.assign(window, { AdaptersScreen });
