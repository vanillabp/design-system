import * as React from "react";

/**
 * The VanillaBP logo. `mark` inlines the official popsicle glyph (fixed brand
 * colours, safe on any background); `full` and `compact` load the outline
 * lockups whose wordmark inherits the surrounding text colour.
 */
export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** mark = glyph only (min 48px) · compact = mark + wordmark (min 130px) · full = lockup with strap lines (min 234px) */
  variant?: "mark" | "compact" | "full";
  /** Wordmark colour for the lockups. `auto` follows the page's colour scheme. */
  tone?: "auto" | "light" | "dark";
  /** px. Side length for `mark`, height for the lockups. */
  size?: number;
  /** Path to the lockup SVG. Defaults to `assets/logo/…` relative to the page. */
  src?: string;
  /** Accessible name. */
  label?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
