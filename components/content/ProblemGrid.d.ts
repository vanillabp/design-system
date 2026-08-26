import * as React from "react";

export interface ProblemItem { title: string; body: string }

/** A compact grid of named problems — the "why this exists" block. */
export interface ProblemGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: ProblemItem[];
  /** Default 2. Four items in a 2×2 is the designed case. */
  columns?: number;
}
export declare function ProblemGrid(props: ProblemGridProps): JSX.Element;
