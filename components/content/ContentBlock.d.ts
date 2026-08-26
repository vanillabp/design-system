import * as React from "react";

/**
 * Prose plus illustration in an asymmetric two-column block — the page's main
 * repeating unit. Alternate `reverse` down the page.
 *
 * @startingPoint section="Content" subtitle="Prose + illustration, 7/5" viewport="1100x480"
 */
export interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  marker?: "start" | "task" | "end";
  title?: React.ReactNode;
  /** Illustration source; rendered on a vanilla plate. Omit for a text-only block. */
  image?: string;
  imageAlt?: string;
  /** Puts the illustration first (5/7 instead of 7/5). */
  reverse?: boolean;
  /** A single primary action. Two actions in one block is a hero, not a block. */
  action?: { label: string; href?: string; onClick?: () => void };
  children?: React.ReactNode;
}
export declare function ContentBlock(props: ContentBlockProps): JSX.Element;
