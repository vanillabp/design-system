import * as React from "react";

/** Single-line text field with label, hint and error line. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Secondary line under the field. */
  hint?: React.ReactNode;
  /** Replaces the hint and switches it to `--accent-text`. */
  error?: React.ReactNode;
}
export declare function Input(props: InputProps): JSX.Element;
