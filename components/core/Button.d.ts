import * as React from "react";

/**
 * The primary action control. Amber fill with a brown label (6.28:1); the 1px
 * edge is structural, not decoration — amber alone is 1.64:1 against white and
 * would fail WCAG 1.4.11.
 *
 * @startingPoint section="Core" subtitle="Pill buttons — primary and secondary" viewport="700x180"
 */
export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLElement> {
  /** primary = amber fill · secondary = transparent with a gold hairline */
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  /** Renders an `<a>` instead of a `<button>`. */
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
