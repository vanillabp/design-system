import * as React from "react";

export interface MigrationPhase {
  title: string;
  body: string;
  /** Engine labels shown as vanilla pills above the title. */
  engines?: string[];
  /** Highlights this phase's rule in `--accent-graphic`. Mark at most one. */
  active?: boolean;
}

/**
 * The three-phase migration story — today, in parallel, when you are ready.
 * Columns headed by a rule rather than boxed as cards.
 */
export interface MigrationTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Three phases is the designed case; two or four still lay out. */
  phases?: MigrationPhase[];
}
export declare function MigrationTimeline(props: MigrationTimelineProps): JSX.Element;
