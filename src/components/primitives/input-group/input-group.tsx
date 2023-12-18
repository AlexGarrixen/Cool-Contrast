import type { HTMLAttributes, ReactNode } from "react";

import { forwardRef } from "react";
import { type RecipeVariantProps } from "@root/styled-system/css";
import { inputGroup } from "@root/styled-system/recipes";

type RecipeProps = RecipeVariantProps<typeof inputGroup>;
type DivElementProps = HTMLAttributes<HTMLElement>;
type Props = { startContent?: ReactNode; endContent?: ReactNode } & Omit<
  DivElementProps,
  keyof RecipeProps
> &
  RecipeProps;

export const InputGroup = forwardRef<HTMLDivElement, Props>(function (
  { size, variant, className, startContent, endContent, children, ...props },
  ref,
) {
  const classes = inputGroup({ size, variant });

  return (
    <div ref={ref} className={`${classes.root} ${className ?? ""}`} {...props}>
      {startContent ? <div className={classes.startContent}>{startContent}</div> : null}
      {children}
      {endContent ? <div className={classes.endContent}>{endContent}</div> : null}
    </div>
  );
});

InputGroup.displayName = "InputGroup";
