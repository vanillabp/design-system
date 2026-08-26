import * as React from "react";

/** Multi-line field. Same shell as Input, vertically resizable. */
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export declare function TextArea(props: TextAreaProps): JSX.Element;
