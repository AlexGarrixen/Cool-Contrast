import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    cursor: "pointer",
    _disabled: {
      bgColor: "bg-disabled !important",
      color: "text-disabled !important",
      borderColor: "border-disabled !important",
      cursor: "not-allowed",
    },
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
        borderColor: "border-secondary",
        borderStyle: "solid",
        backgroundColor: "transparent",
        color: "text-secondary",
      },
      solid: {
        backgroundColor: "bg-primary-solid",
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%)",
        color: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)",
        borderImageSlice: 1,
      },
      "solid-white": {
        borderWidth: "1px",
        borderColor: "border-secondary",
        borderStyle: "solid",
        backgroundColor: "bg-primary",
        color: "text-secondary",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.07)",
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
