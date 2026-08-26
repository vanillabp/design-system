One-line: the sticky site header with the logo lockup left and the link row right.

```jsx
<Header current="/blueprints" logoBase="assets/logo" links={[
  { label: "Adapters", href: "/features" },
  { label: "Blueprints", href: "/blueprints" },
  { label: "BPMN", href: "/bpmn" },
  { label: "About", href: "/about" },
]} />
```

The collapse drives one CSS custom property, `--collapse` (0→1), via a
rAF-throttled scroll handler — not `animation-timeline: scroll()`, which
Firefox does not apply, and not the two-threshold JS in DESIGN.md §7, which
still flapped in testing. Do not "simplify" it back to either. Because
`--collapse` is continuous rather than a threshold decision, there is nothing
to flip and nothing to flap. Pass `scrolled` to freeze either state for a
specimen; reduced-motion users get `--collapse: 0`, static, automatically.

The bar is `position: fixed` behind a spacer whose height is measured with a
`ResizeObserver`, and the spacer carries `flex: none`. Both are load-bearing in
a column flex app shell: without `flex: none` the empty spacer shrinks to 0 on
any page taller than the viewport and the content slides behind the bar. The
"Layout in an app shell" specimen exists to catch exactly that.

Links need `line-height: 1` — inheriting the 1.65 body leading puts them in the middle of a tall line box and they read as misaligned. With five subpages coming, this row will need a mobile disclosure.
