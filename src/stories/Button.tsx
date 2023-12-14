import { css } from "@root/styled-system/css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={css({ bg: "bg-primary-solid", color: "white" })} type="button" {...props}>
      {label}
    </button>
  );
}
