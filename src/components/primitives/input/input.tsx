import type { InputHTMLAttributes } from "react";

import { forwardRef } from "react";
import { input } from "@root/styled-system/recipes";

import type { InputVariant } from "@root/styled-system/recipes";

type InputElementProps = InputHTMLAttributes<HTMLInputElement>;
type Props = Partial<InputVariant> & Omit<InputElementProps, keyof InputVariant>;

export const Input = forwardRef<HTMLInputElement, Props>(function (
  { size, variant, fullWidth, className, disabled, ...props },
  ref,
) {
  const styles = input({ size, variant, fullWidth, disabled });
  const classname = `${styles} ${className ?? ""}`;

  return (
    <input
      ref={ref}
      aria-disabled={disabled}
      className={classname}
      disabled={disabled}
      {...props}
    />
  );
});

Input.displayName = "Input";
