import * as React from "react";

/**
 * A section hung on the BPMN spine: its marker sits in a 20px rail on the left
 * and a hairline connects it to the next section. Use `start` on the first,
 * `task` on the body, `end` + `last` on the closing one.
 */
export interface SectionSpineProps extends React.HTMLAttributes<HTMLDivElement> {
  marker?: "start" | "task" | "end";
  eyebrow?: React.ReactNode;
  /** Last section: no eyebrow rule below it, no trailing gap. */
  last?: boolean;
  /** px. Sizes the glyph AND the rail column together. 20 on a page, 32-40 at slide scale. */
  markerSize?: number;
  /** Space below this section. Defaults to `--space-12` — see the note in the source. */
  gap?: string;
  children?: React.ReactNode;
}
export declare function SectionSpine(props: SectionSpineProps): JSX.Element;
