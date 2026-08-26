One-line: pill-shaped action button — use `primary` for the single main action on a view and `secondary` for everything beside it.

```jsx
<Button href="/adapters">See the adapters</Button>
<Button variant="secondary" href="https://github.com/vanillabp" target="_blank" rel="noreferrer">Read the source</Button>
```

Props extend `AnchorHTMLAttributes`, not `HTMLAttributes`, so `target` and `rel` typecheck on the `href` form — an external link needs both and TypeScript rejected them otherwise.

Sizes `sm | md | lg`. Hover darkens the fill and adds `--shadow-1` — never a transform or a gradient. Never use gold (`#BF9000`) as a button fill: no label colour reaches 4.5:1 on it.
