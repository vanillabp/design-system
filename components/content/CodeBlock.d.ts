import * as React from "react";

/**
 * A sunken code panel with an optional filename / language strip.
 *
 * @startingPoint section="Content" subtitle="Java snippet in the brand syntax palette" viewport="700x360"
 */
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  filename?: string;
  language?: string;
  /** Wrap long lines instead of scrolling. Use for shell commands, not Java. */
  wrap?: boolean;
  children?: React.ReactNode;
}
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;

/** Wraps one syntax role inside a CodeBlock. */
export interface CodeProps {
  kind: "annotation" | "keyword" | "comment" | "string";
  children?: React.ReactNode;
}
export declare function Code(props: CodeProps): JSX.Element;
