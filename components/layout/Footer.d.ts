import * as React from "react";

export interface FooterColumn { title: string; links: { label: string; href: string }[] }

/** The site footer on `--bg-subtle`: compact lockup and strapline left, link columns right. */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  /** Colophon line under the hairline — licence, copyright, credits. */
  note?: React.ReactNode;
  logoBase?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
