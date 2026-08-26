One-line: a page band — alternate `tone` down the page and use `split` for two-column content.

```jsx
<Section tone="subtle" eyebrow="Blueprints" marker="task" title="Start from a working service" split="7/5">
  <div>…prose…</div>
  <Card>…</Card>
</Section>
```

Splits are 7/5 or 5/7 only — 6/6 reads mechanical. Text columns stay capped at `--measure` (68ch) regardless of the column width.
