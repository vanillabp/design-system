import * as React from "react";

/**
 * A full-width page band with the standard vertical rhythm, optional eyebrow +
 * heading, and an optional asymmetric two-column split.
 *
 * @startingPoint section="Layout" subtitle="Alternating page band, 7/5 split" viewport="1200x520"
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Alternate `default` and `subtle` down the page. */
  tone?: "default" | "subtle" | "sunken";
  eyebrow?: React.ReactNode;
  /** Draws a BPMN glyph beside the eyebrow. */
  marker?: "start" | "task" | "end";
  title?: React.ReactNode;
  /** Two-column grid. Never 6/6. */
  split?: "7/5" | "5/7";
  children?: React.ReactNode;
}
export declare function Section(props: SectionProps): JSX.Element;
