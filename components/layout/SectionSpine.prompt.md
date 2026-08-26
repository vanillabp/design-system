One-line: joins the BPMN section markers into a continuous rule down the page — the homepage's structural device.

```jsx
<SectionSpine marker="task" eyebrow="The problem">
  <h2>Every BPMN engine has its own API</h2>
</SectionSpine>
<SectionSpine marker="end" eyebrow="Get started" last>…</SectionSpine>
```

Only for pages whose sections genuinely are a sequence the reader moves through. On such a page the spine replaces card borders entirely — do not use both. Alternating band tones also fight it; keep the background flat behind a spine. Sections sit `--space-12` apart rather than the usual `--space-16`, because the rule is already doing the separating.

On a slide, pass `markerSize={36}` (DECK-VOCABULARY §3 asks for 32-40px) — it sizes the glyph and the rail column together so the line stays centred. Never resize the marker with an outside CSS rule.
