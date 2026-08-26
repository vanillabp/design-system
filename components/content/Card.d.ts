import * as React from "react";

/**
 * The standard content card. Any illustration inside sits on a vanilla plate —
 * images floating directly on the page background read as clip-art.
 *
 * @startingPoint section="Content" subtitle="Card with a vanilla illustration plate" viewport="700x400"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * `subtle` when the card sits on a `--bg` section, `default` on
   * `--bg-subtle` — the fill inverts against its surroundings. `accent` is the
   * one box on a slide that IS the answer: vanilla fill, `--on-accent` text,
   * no hairline. One accent card per slide.
   */
  tone?: "default" | "subtle" | "accent";
  /** Illustration source — rendered on a `--surface-accent` plate. */
  image?: string;
  imageAlt?: string;
  /** px cap on the plate image so square marks don't fill the column. Default 120. */
  imageHeight?: number;
  title?: React.ReactNode;
  eyebrowText?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
