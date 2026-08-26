One-line: the 1200px page gutter — wrap every top-level section in one so columns line up across the page.

```jsx
<Container><Section>…</Section></Container>
```

`width: 100%` and `box-sizing: border-box` are load-bearing — do not remove them as tidiness. As a direct child of a column flex container (the ordinary sticky-footer app shell), `margin: 0 auto` becomes a cross-axis auto margin, which disables stretch and makes the box shrink-to-fit: 254px instead of 924px. Inside a `Section` it sits in normal block flow and is unaffected, which is what makes the bug look per-page.
