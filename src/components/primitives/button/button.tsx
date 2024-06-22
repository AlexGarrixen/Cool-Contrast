import type { ButtonHTMLAttributes } from "react";

import { forwardRef } from "react";
import { button } from "@root/styled-system/recipes";

import type { RecipeVariantProps } from "@root/styled-system/css";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type RecipeProps = RecipeVariantProps<typeof button>;
type Props = RecipeProps &
  Omit<ButtonElementProps, keyof RecipeProps> & { keepColorOnDisabled?: boolean };

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size,
      variant,
      className,
      isIconOnly,
      isDisabled: isDisabledProp,
      keepColorOnDisabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = keepColorOnDisabled && isDisabledProp ? undefined : isDisabledProp;
    const classes = button({ size, variant, isIconOnly, isDisabled });

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        ref={ref}
        className={`${classes} ${className ?? ""}`}
        disabled={isDisabledProp}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
