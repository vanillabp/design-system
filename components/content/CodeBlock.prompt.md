One-line: a code panel on `--bg-sunken`; wrap tokens in `<Code kind="…">` rather than picking colours by hand.

```jsx
<CodeBlock filename="LoanApprovalWorkflow.java" language="java">
  <Code kind="annotation">@WorkflowService</Code>{"\n"}
  <Code kind="keyword">public class</Code>{" LoanApprovalWorkflow { }"}
</CodeBlock>
```

Only four syntax roles exist: annotation, keyword, comment, string. Strings are the single cool tone permitted anywhere in the palette.

Java keeps its indentation, so let it scroll. Shell commands should set `wrap` — a horizontally scrolling command line is worse than a wrapped one.
