import * as React from "react";

/** The page gutter: 1200px max width with `--space-5` side padding. */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export declare function Container(props: ContainerProps): JSX.Element;
