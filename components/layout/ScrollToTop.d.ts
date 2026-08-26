import * as React from "react";

/** Fixed back-to-top affordance, fading in past `threshold` px of scroll. */
export interface ScrollToTopProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** px of scroll before it appears. Default 400. */
  threshold?: number;
  /** Path to `assets/icons/scroll-top.svg`. */
  iconSrc?: string;
}
export declare function ScrollToTop(props: ScrollToTopProps): JSX.Element;
