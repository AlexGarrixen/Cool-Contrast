import type { ButtonHTMLAttributes } from "react";

import { forwardRef } from "react";
import { button } from "@root/styled-system/recipes";

import type { RecipeVariantProps } from "@root/styled-system/css";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type RecipeProps = RecipeVariantProps<typeof button>;
type Props = RecipeProps & Omit<ButtonElementProps, keyof RecipeProps>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, size, variant, className, isIconOnly, ...props }, ref) => {
    const classes = button({ size, variant, isIconOnly });

    return (
      // eslint-disable-next-line react/button-has-type
      <button ref={ref} className={`${classes} ${className ?? ""}`} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
