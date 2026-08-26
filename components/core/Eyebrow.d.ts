import * as React from "react";

/**
 * The small uppercase label that opens a section. Optionally paired with a BPMN
 * section marker on the same line.
 */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Draws a BPMN glyph before the label. Only for content that really is a sequence. */
  marker?: "start" | "task" | "end";
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
