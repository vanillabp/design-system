import React from "react";

/* Appears past 400px. Uses the site's own scroll-top glyph from assets/icons. */

export function ScrollToTop({ threshold = 400, iconSrc = "assets/icons/scroll-top.svg", style, ...rest }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <button type="button" aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", right: "var(--space-5)", bottom: "var(--space-5)",
        width: 44, height: 44, display: "grid", placeItems: "center",
        borderRadius: "var(--radius-pill)", border: "1px solid var(--border-strong)",
        background: "var(--bg)", color: "var(--text-color)", cursor: "pointer",
        boxShadow: "var(--shadow-1)",
        opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none",
        transition: "opacity var(--duration) var(--ease)",
        ...style,
      }} {...rest}>
      <img src={iconSrc} alt="" width="16" height="16" />
    </button>
  );
}
