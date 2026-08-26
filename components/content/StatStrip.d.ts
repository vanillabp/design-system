import * as React from "react";

export interface Stat { value: string; label: string }

/** Proof points under a hero — a large figure and one line of context each. */
export interface StatStripProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Three is the designed case. */
  stats?: Stat[];
}
export declare function StatStrip(props: StatStripProps): JSX.Element;
