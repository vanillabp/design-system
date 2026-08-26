One-line: the side-by-side migration phases, used to show that moving from Camunda 7 to 8 has no cut-over.

```jsx
<MigrationTimeline phases={[
  { title: "Today", engines: ["Camunda 7"], body: "Existing processes keep running exactly as they are." },
  { title: "In parallel", engines: ["Camunda 7", "Camunda 8"], active: true, body: "New instances start on 8; work in flight finishes on 7." },
  { title: "When you are ready", engines: ["Camunda 8"], body: "The last instance drains and the old adapter leaves the POM." },
]} />
```

Mark at most one phase `active` — it is the "you are here", not a highlight. The phases are columns, not steps with arrows; the copy carries the direction.
