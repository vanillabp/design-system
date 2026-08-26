import * as React from "react";

export interface HeaderLink { label: string; href: string; onClick?: (e: React.MouseEvent) => void }

/**
 * The sticky site header. Carries the full lockup at rest and swaps to the
 * compact one once scrolled — it never scales the full lockup down.
 *
 * @startingPoint section="Layout" subtitle="Sticky header, expanded and scrolled" viewport="1200x220"
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  links?: HeaderLink[];
  /** href of the current page — gets 700 weight and a 2px gold underline. */
  current?: string;
  /** Directory holding the lockup SVGs, relative to the page. */
  logoBase?: string;
  /** Force the collapsed state, disabling the scroll animation. For specimens and screenshots. */
  scrolled?: boolean;
}
export declare function Header(props: HeaderProps): JSX.Element;
