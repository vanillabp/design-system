import * as React from "react";

/**
 * A BPMN glyph used as a section marker. The signature device of the brand —
 * spend the boldness here and keep everything else quiet.
 */
export interface SectionMarkerProps extends React.SVGAttributes<SVGElement> {
  /** start event (thin circle) · task (rounded rectangle) · end event (thick circle) */
  type?: "start" | "task" | "end";
  /** px. 20 on the eyebrow line. */
  size?: number;
  /** Defaults to `--accent-graphic`. */
  color?: string;
}
export declare function SectionMarker(props: SectionMarkerProps): JSX.Element;
