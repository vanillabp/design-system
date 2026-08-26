const { Container, Button, Eyebrow, CodeBlock, Code, EngineSwitch,
        SectionSpine, StatStrip, MigrationTimeline, ProblemGrid } = window.VanillaBPDesignSystem_b629c7;

/* Direction A — the BPMN spine. Chosen 2026-08-07.
   Updated 2026-08-26 to match the v2 landing page (`v2/src/pages/Home.tsx` in
   the VanillaBP Landing Page project): release badge, Quarkus as a second
   supported platform, the blueprint catalogue moved to its own GitHub
   organisation, and the agent-skill route to getting started.

   ReleaseBadge lives here rather than in the design system on purpose — the
   source keeps it in `src/components/`, not `src/design-system/`. It is one
   page's ornament, not a primitive. */

const SPLIT = { display: "grid", gridTemplateColumns: "5fr 7fr", gap: "var(--space-8)", alignItems: "start" };

/* The starburst beside the hero headline. 22 spikes, clip-path, rotated -8°. */
const BURST_CLIP = (() => {
  const spikes = 22, cx = 50, cy = 50, ro = 50, ri = 41.5, out = [];
  for (let i = 0; i < spikes * 2; i += 1) {
    const r = i % 2 ? ri : ro;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    out.push(`${(cx + r * Math.cos(a)).toFixed(2)}% ${(cy + r * Math.sin(a)).toFixed(2)}%`);
  }
  return `polygon(${out.join(", ")})`;
})();

function ReleaseBadge({ onClick }) {
  const [hover, setHover] = React.useState(false);
  const small = { fontSize: "var(--text-eyebrow)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase" };
  return (
    <a href="/features-list" onClick={onClick} aria-label="Version 2.0 is released — see the features"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        flex: "none", width: 188, height: 188, display: "grid", placeItems: "center",
        textAlign: "center", textDecoration: "none",
        background: hover ? "var(--fill-release-hover)" : "var(--fill-release)",
        color: "var(--on-release)", clipPath: BURST_CLIP, transform: "rotate(-8deg)",
        transition: "background var(--duration-fast) var(--ease)",
      }}>
      <span style={{ display: "grid", gap: "var(--space-1)", padding: "var(--space-6)", lineHeight: 1.25 }}>
        <span style={small}>Released 10/2026</span>
        <span style={{ fontSize: "2.375rem", fontWeight: "var(--weight-bold)", lineHeight: 1.1 }}>2.0</span>
        <span style={{ ...small, fontWeight: "var(--weight-regular)" }}>27 new features</span>
      </span>
    </a>
  );
}

function ReleaseNote({ children, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="/features-list" onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "block", padding: "var(--space-4) var(--space-5)",
        borderRadius: "var(--radius-md)",
        background: hover ? "var(--fill-release-hover)" : "var(--fill-release)",
        color: "var(--on-release)", fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-small)", textDecoration: "none",
      }}>{children}</a>
  );
}

function PlatformCard({ name, note }) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)", background: "var(--bg)" }}>
      <div style={{ fontWeight: "var(--weight-bold)", marginBottom: "var(--space-2)" }}>{name}</div>
      <div style={{ fontSize: "var(--text-small)", color: "var(--text-subtle)" }}>{note}</div>
    </div>
  );
}

function Hero({ go }) {
  return (
    <Container>
      <div style={{ padding: "var(--space-10) 0 var(--space-12)" }}>
        <div style={{ marginBottom: "var(--space-6)" }}><Eyebrow marker="start">Change your workflow engine, without the rewrite</Eyebrow></div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", marginBottom: "var(--space-6)" }}>
          <h1 style={{
            fontSize: "clamp(3rem, 7vw, 5.75rem)", lineHeight: 0.98, letterSpacing: "-0.03em",
            margin: 0, maxWidth: "16ch", textWrap: "balance",
          }}>Your business code should outlive your workflow engine.</h1>
          <ReleaseBadge onClick={go("/features")} />
        </div>
        <p style={{ fontSize: "1.375rem", lineHeight: 1.5, color: "var(--text-muted)", margin: "0 0 var(--space-8)", maxWidth: "52ch" }}>
          VanillaBP puts one stable Java abstraction between your processes and the
          engine underneath. Migrating to another workflow engine becomes a dependency
          change — not a project.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginBottom: "var(--space-12)" }}>
          <Button size="lg" href="/blueprints" onClick={go("/blueprints")}>Get started</Button>
          <Button size="lg" variant="secondary" href="https://github.com/vanillabp">
            Read the source
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 11 11 3M11 3H5M11 3v6"/></svg>
          </Button>
        </div>
        <StatStrip stats={[
          { value: "2", label: "supported platforms: Spring Boot and Quarkus" },
          { value: "31", label: "blueprints, one repository per blueprint and platform" },
          { value: "0", label: "lines of business logic to rewrite when you switch" },
        ]} />
      </div>
    </Container>
  );
}

function HomeScreen({ go }) {
  const [engine, setEngine] = React.useState("Camunda 7");
  return (
    <>
      <Hero go={go} />
      <Container>
        <SectionSpine marker="task" eyebrow="The problem">
          <div style={{ ...SPLIT, gap: "var(--space-10)" }}>
            <div>
              <h2 style={{ marginBottom: "var(--space-5)" }}>Every BPMN engine has its own API</h2>
              <p style={{ color: "var(--text-muted)", margin: "0 0 var(--space-4)" }}>
                VanillaBP addresses <a href="/bpmn" onClick={go("/bpmn")}>BPMN</a>-based engines: you
                model the process, the engine runs it, and only the tasks need implementing. That is
                excellent for maintainable, business-focused code — right up to the point where the
                engine's API leaks into it.
              </p>
              <p style={{ color: "var(--text-muted)", margin: 0 }}>
                Then the engine's roadmap becomes your roadmap, and its end-of-life becomes your
                migration project.
              </p>
            </div>
            <ProblemGrid items={[
              { title: "Vendor lock-in", body: "Engine APIs in business classes tie your release schedule to someone else's." },
              { title: "Big-bang risk", body: "A cut-over migration means a freeze window and a rollback plan nobody wants to test." },
              { title: "Sunk knowledge", body: "Years of process expertise trapped in code written against one vendor's client." },
              { title: "Procurement pressure", body: "Licence renewals should not be the thing that decides your architecture." },
            ]} />
          </div>
        </SectionSpine>

        <SectionSpine marker="task" eyebrow="The abstraction">
          <div style={SPLIT}>
            <div>
              <h2 style={{ marginBottom: "var(--space-5)" }}>One interface, in the sense of a hexagonal architecture</h2>
              <p style={{ color: "var(--text-muted)", margin: "0 0 var(--space-5)" }}>
                Your code talks to <code>ProcessService</code> and a handful of annotations.
                The adapter talks to the engine. Switching runtime is a dependency in
                <code> pom.xml</code> and nothing else.
              </p>
              <EngineSwitch options={["Camunda 7", "Camunda 8"]} value={engine} onChange={setEngine} />
              <p style={{ marginTop: "var(--space-4)", fontSize: "var(--text-small)", color: "var(--text-subtle)" }}>
                Running on <strong style={{ color: "var(--text-color)" }}>{engine}</strong> — the code on the right is unchanged.
              </p>
            </div>
            <CodeBlock filename="LoanApprovalWorkflow.java" language="java">
              <Code kind="annotation">@Service</Code>{"\n"}
              <Code kind="annotation">@WorkflowService</Code>{"(workflowAggregateClass = LoanApproval."}<Code kind="keyword">class</Code>{")\n"}
              <Code kind="keyword">public class</Code>{" LoanApprovalWorkflow {\n\n    "}
              <Code kind="annotation">@Autowired</Code>{"\n    "}
              <Code kind="keyword">private</Code>{" ProcessService<LoanApproval> processService;\n\n    "}
              <Code kind="annotation">@WorkflowTask</Code>{"\n    "}
              <Code kind="keyword">public void</Code>{" assessRisk("}<Code kind="keyword">final</Code>{" LoanApproval loan) {\n        loan.setRisk("}<Code kind="string">"LOW"</Code>{");\n        "}
              <Code kind="comment">{"// no engine API anywhere in this class"}</Code>{"\n    }\n}"}
            </CodeBlock>
          </div>
        </SectionSpine>

        <SectionSpine marker="task" eyebrow="The migration">
          <h2 style={{ marginBottom: "var(--space-3)" }}>Move at your own pace, per process instance</h2>
          <p style={{ color: "var(--text-muted)", margin: "0 0 var(--space-8)" }}>
            No big bang, no freeze window, no procurement deadline setting your architecture.
          </p>
          <MigrationTimeline phases={[
            { title: "Today", engines: ["Camunda 7"], body: "Your existing processes keep running exactly as they are. Adopting VanillaBP changes no behaviour." },
            { title: "In parallel", engines: ["Camunda 7", "Camunda 8"], active: true, body: "Both engines run side by side. New instances start on 8; work already in flight finishes on 7." },
            { title: "When you are ready", engines: ["Camunda 8"], body: "The last instance drains and the old adapter comes out of the POM. There was never a cut-over." },
          ]} />
        </SectionSpine>

        <SectionSpine marker="task" eyebrow="Supported platforms">
          <div style={SPLIT}>
            <div>
              <h2 style={{ marginBottom: "var(--space-5)" }}>Two platforms, the same SPI</h2>
              <p style={{ color: "var(--text-muted)", margin: 0 }}>
                VanillaBP runs on Spring Boot and on Quarkus. The blueprints are published per
                platform — 29 of 30 for Spring Boot, 30 of 31 for Quarkus — so whichever stack you
                are on, there is a runnable starting point.
              </p>
            </div>
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                <PlatformCard name="Spring Boot" note="29 of 30 blueprints published" />
                <PlatformCard name="Quarkus" note="30 of 31 blueprints published" />
              </div>
              <ReleaseNote onClick={go("/features")}>
                Quarkus is available as of VanillaBP version 2.0. → See the feature
              </ReleaseNote>
            </div>
          </div>
        </SectionSpine>

        <SectionSpine marker="end" eyebrow="Get started" last>
          <div style={{ ...SPLIT, alignItems: "center", paddingBottom: "var(--space-16)" }}>
            <div>
              <h2 style={{ marginBottom: "var(--space-5)" }}>Start from a blueprint that already runs</h2>
              <p style={{ color: "var(--text-muted)", margin: "0 0 var(--space-6)" }}>
                31 blueprints live in their own GitHub organisation, each showing one aspect: how a
                workflow module is structured, how a user task is completed, how a message reaches a
                running workflow. They are available for every supported platform, and they are
                optimised for agent-driven development of your own project: install the{" "}
                <a href="https://github.com/vanillabp/skills">VanillaBP skill</a> and your coding
                agent knows which blueprints your BPMN model needs and how to combine them into an
                application.
              </p>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <Button href="/blueprints" onClick={go("/blueprints")}>Get started</Button>
                <Button variant="secondary" href="/blueprints" onClick={go("/blueprints")}>View blueprints</Button>
              </div>
            </div>
            <CodeBlock wrap filename="module-single, the base blueprint" language="shell">
              <Code kind="comment">{"# One repository per blueprint and platform:"}</Code>{"\ngit clone "}
              <Code kind="string">https://github.com/vanillabp-blueprints/module-single-springboot.git</Code>
              {"\ncd module-single-springboot\n\n"}
              <Code kind="comment">{"# Build, test and pick the engine by Maven profile:"}</Code>{"\nmvn verify -Pcamunda7"}
            </CodeBlock>
          </div>
        </SectionSpine>
      </Container>
    </>
  );
}

Object.assign(window, { HomeScreen, Hero, ReleaseBadge, ReleaseNote, PlatformCard });
