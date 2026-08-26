import * as React from "react";

/**
 * Segmented pill control for picking one option from a small set — named for
 * its origin as the hero's Camunda 7 / Camunda 8 runtime toggle.
 */
export interface EngineSwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  /** Accessible group label. */
  label?: string;
}
export declare function EngineSwitch(props: EngineSwitchProps): JSX.Element;
