import React from "react";
import { Container } from "./Container.jsx";

/* Sticky, --bg at 75% with a 12px backdrop blur, bottom hairline appearing only
   after scroll. Expanded: full lockup at 138px with the link row BOTTOM-ALIGNED
   to the logo's baseline, so the two read as one block. Scrolled: compact
   lockup. DESIGN.md 7, 12.2c.

   The whole header state is ONE number, --collapse (0 = expanded, 1 =
   collapsed), and every property below is a calc() of it — ported verbatim
   from the upstream hero.html rework (DESIGN.md 12.2c, revised 2026-08-13).

   This replaces an earlier version of this component built on
   `animation-timeline: scroll()`. That ran on the compositor in Chrome and
   Safari, but Firefox did not apply it at all — the header just stayed
   expanded. --collapse is instead set by a small rAF-throttled scroll handler,
   which behaves identically everywhere. Because it drives a CONTINUOUS value
   rather than a threshold, it still cannot flap: there is no threshold to
   overshoot. This is the one place JS earns its place back — the goal was
   never "no JS", it was "no threshold". DESIGN.md 7's own two-threshold
   fallback flapped in practice and is not used here.

   The header is POSITION: FIXED behind a constant-height spacer, not sticky.
   This is not cosmetic. A sticky header is in the document flow, so collapsing
   it by up to 104px pulls the whole page up while the user is scrolling: their
   scroll and the rising content add together, which reads as hopping, and the
   browser has to relay out the entire document every frame. With cold caches
   after a reload that cost is visible; once warm it looks smooth, which is
   exactly why the stutter seemed to "go away" after scrolling back and forth.
   A fixed header reserves its expanded height once and never changes the flow,
   so collapsing repaints the bar and nothing else.

   The two lockups cross-fade with no blank frame: the compact one sits
   underneath at full opacity throughout (it carries the mark and wordmark),
   and only the full lockup on top fades out — so only the two strap lines
   disappear, never the wordmark itself. It is fully faded by roughly
   --collapse 0.67, well before the lockup would shrink past its 234px
   legibility floor (DESIGN.md 5.3). */

const RANGE = 96;      // px of scroll over which the header collapses
const H_FULL = 138;    // DESIGN.md 5.3 — full lockup, 234px wide minimum
const H_FULL_SM = 84;
const H_COMPACT = 58;  // 58 × 2.2456 = 130px wide, the compact minimum
const ASPECT_FULL = 3.2249;
const ASPECT_COMPACT = 2.2456;
const CSS_ID = "vbp-header-vars";

const H_PAD = 24;      // --space-5, the expanded padding block
const CSS = `
/* flex: none is load-bearing. The spacer is an empty flex item in the app's
   column layout, and an empty item with flex-shrink: 1 collapses to 0 as soon as
   the page is taller than the viewport — which is why the content ended up
   behind the fixed bar even with the height set correctly. Do not remove it as
   tidiness: the measured height alone does not fix the symptom. */
.vbp-head { flex: none; height: var(--vbp-head-h, ${H_FULL + H_PAD * 2}px); }
@media (max-width: 47.999rem) { .vbp-head { height: var(--vbp-head-h, ${H_FULL_SM + H_PAD * 2}px); } }
.vbp-nav {
  padding-top: calc(var(--space-5) - (var(--space-5) - var(--space-3)) * var(--collapse, 0));
  padding-bottom: calc(var(--space-5) - (var(--space-5) - var(--space-3)) * var(--collapse, 0));
}
/* The hairline is a pseudo-element, not a border-colour: color-mix() does not
   accept a calc() percentage in every engine, so fading --border through it
   silently produced a fully transparent edge. Opacity always interpolates. */
.vbp-nav::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -1px;
  height: 1px;
  background: var(--border);
  opacity: var(--collapse, 0);
  pointer-events: none;
}
/* BOTH height and width are explicit calc()s of --collapse, and each lockup
   carries its own aspect-ratio. Nothing here depends on the SVGs' intrinsic
   size — which is why the first scroll after a reload used to stutter: until
   the images had decoded, the slot's width was unknown, so the flex row
   relaid out every frame and the nav wrapped to a second line and back.
   Once cached it went smooth, which is what made it look intermittent. */
.vbp-slot {
  height: calc(${H_FULL}px - (${H_FULL - H_COMPACT}px) * var(--collapse, 0));
  width: calc(${(H_FULL * ASPECT_FULL).toFixed(2)}px - ${(H_FULL * ASPECT_FULL - H_COMPACT * ASPECT_COMPACT).toFixed(2)}px * var(--collapse, 0));
}
@media (max-width: 47.999rem) {
  .vbp-slot {
    height: calc(${H_FULL_SM}px - (${H_FULL_SM - H_COMPACT}px) * var(--collapse, 0));
    width: calc(${(H_FULL_SM * ASPECT_FULL).toFixed(2)}px - ${(H_FULL_SM * ASPECT_FULL - H_COMPACT * ASPECT_COMPACT).toFixed(2)}px * var(--collapse, 0));
  }
}
.vbp-lockup { position: absolute; left: 0; bottom: 0; height: 100%; }
.vbp-lockup-full { aspect-ratio: ${ASPECT_FULL}; z-index: 1; opacity: clamp(0, calc(1 - var(--collapse, 0) * 1.5), 1); }
.vbp-lockup-compact { aspect-ratio: ${ASPECT_COMPACT}; z-index: 0; }
.vbp-lockup > img { width: 100%; height: 100%; display: block; }
`;

function useHeaderStyles() {
  React.useEffect(() => {
    if (document.getElementById(CSS_ID)) return;
    const el = document.createElement("style");
    el.id = CSS_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

/* rAF-throttled: reads scrollY at most once per frame and writes one CSS
   custom property. No React state, so no re-render on scroll. */
function useSpacerHeight(ref, spacerRef) {
  React.useEffect(() => {
    const bar = ref.current;
    const spacer = spacerRef.current;
    if (!bar || !spacer || typeof ResizeObserver === "undefined") return;
    let tallest = 0;
    const measure = () => {
      const h = bar.getBoundingClientRect().height;
      if (h > tallest) {
        tallest = h;
        spacer.style.setProperty("--vbp-head-h", Math.ceil(h) + "px");
      }
    };
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    const onResize = () => {
      tallest = 0;
      spacer.style.removeProperty("--vbp-head-h");
      measure();
    };
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [ref, spacerRef]);
}

function useCollapseVar(ref, forced) {
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (forced !== undefined) {
      el.style.setProperty("--collapse", forced ? "1" : "0");
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--collapse", "0");
      return;
    }
    let ticking = false;
    const apply = () => {
      ticking = false;
      const c = Math.min(1, Math.max(0, window.scrollY / RANGE));
      el.style.setProperty("--collapse", String(c));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, forced]);
}

export function Header({ links = [], current, logoBase = "assets/logo", scrolled, style, ...rest }) {
  useHeaderStyles();
  const ref = React.useRef(null);
  const spacerRef = React.useRef(null);
  useCollapseVar(ref, scrolled);
  useSpacerHeight(ref, spacerRef);

  const stem = (variant) => logoBase + "/vanillabp-logo" + (variant === "compact" ? "-compact" : "");

  const lockup = (variant) => (
    <picture className={"vbp-lockup vbp-lockup-" + variant}>
      <source srcSet={stem(variant) + "-dark.svg"} media="(prefers-color-scheme: dark)" />
      <img
        src={stem(variant) + "-light.svg"}
        alt={variant === "full" ? "VanillaBP" : ""}
        aria-hidden={variant === "compact" ? "true" : undefined}
        decoding="sync"
        fetchpriority="high"
      />
    </picture>
  );

  return (
    <div className="vbp-head" ref={spacerRef}>
    <header
      ref={ref}
      className="vbp-nav"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 10,
        // 75%, not the 88% in DESIGN.md 7: at 88% the blur is barely
        // perceptible. Open question — see DESIGN.md 12.2b.
        background: "color-mix(in srgb, var(--bg) 75%, transparent)",
        backdropFilter: "blur(12px)",

        ...style,
      }}
      {...rest}
    >
      <Container style={{
        display: "flex", flexWrap: "wrap", gap: "var(--space-4) var(--space-5)",
        justifyContent: "space-between",
        // Bottom-aligned throughout — the old switch to `center` on scroll
        // produced a visible jump at exactly the moment the header was moving.
        alignItems: "flex-end",
      }}>
        <a href="/" aria-label="VanillaBP home" style={{ display: "block", color: "var(--text-color)" }}>
          <div className="vbp-slot" style={{ position: "relative", flex: "none" }}>
            {lockup("compact")}
            {lockup("full")}
          </div>
        </a>
        <nav>
          <ul style={{ display: "flex", gap: "var(--space-5)", listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((l) => {
              const active = l.href === current;
              return (
                <li key={l.href}>
                  <a href={l.href} aria-current={active ? "page" : undefined} onClick={l.onClick}
                     style={{
                       fontSize: "var(--text-small)", color: "var(--text-color)",
                       textDecoration: "none", lineHeight: 1,
                       // All links are bold; the active one is marked by the
                       // gold underline alone, since weight is already spent.
                       fontWeight: "var(--weight-bold)",
                       boxShadow: active ? "inset 0 -2px 0 var(--accent-graphic)" : "none",
                       paddingBottom: 2,
                     }}>{l.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
    </div>
  );
}
