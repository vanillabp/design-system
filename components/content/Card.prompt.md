One-line: a bordered, softly shadowed content card; pass `image` to get the vanilla illustration plate automatically; `imageHeight` caps it (default 120px).

```jsx
<Card eyebrowText="Adapter" title="Camunda 8" image="assets/logos-third-party/camunda-8.png" imageHeight={88}>
  Modern cloud-native workflow capabilities.
</Card>
```

`tone="accent"` is the vanilla-filled box that carries the point — one per slide or section, never two competing. Passing `image` gives you the plate variant (vanilla ground, image at `--radius-md`) automatically.

Flip `tone` so the card contrasts with its section: `--bg` cards on subtle sections, `--bg-subtle` cards on white.

Wide diagrams do not belong in a card or in the narrow side of a 7/5 split — give a BPMN process its own full-width plate.
