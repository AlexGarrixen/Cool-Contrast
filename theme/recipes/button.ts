import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    cursor: "pointer",
  },
  variants: {
    size: {
      sm: {
        height: "8",
        textStyle: "body-sm",
        px: "3",
        rounded: "md",
      },
      md: {
        height: "10",
        textStyle: "body-base",
        px: "4",
        rounded: "lg",
      },
      lg: {
        height: "12",
        textStyle: "body-base",
        px: "6",
        rounded: "lg",
      },
    },
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "border-primary",
        borderStyle: "solid",
        backgroundColor: "transparent",
        color: "text-primary",
      },
      solid: {
        backgroundColor: "bg-primary-solid",
        color: "white",
      },
      "solid-white": {
        backgroundColor: "white",
        color: "text-primary",
      },
    },
    isIconOnly: {
      true: {
        px: "0!",
      },
    },
  },
  compoundVariants: [
    {
      isIconOnly: true,
      size: "lg",
      css: {
        width: "12!",
      },
    },
    {
      isIconOnly: true,
      size: "md",
      css: {
        width: "10!",
      },
    },
    {
      isIconOnly: true,
      size: "sm",
      css: {
        width: "8!",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
