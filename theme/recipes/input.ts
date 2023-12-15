import { defineRecipe } from "@pandacss/dev";

export default defineRecipe({
  className: "input",
  base: {
    color: "text-primary",
    "&::placeholder": {
      color: "text-placeholder",
    },
    "&::-webkit-input-placeholder": {
      color: "text-placeholder",
    },
  },
  variants: {
    size: {
      sm: {
        height: "8",
        px: "3",
        textStyle: "body-sm",
        rounded: "md",
      },
      md: {
        height: "10",
        px: "4",
        textStyle: "body-base",
        rounded: "lg",
      },
    },
    variant: {
      outline: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border-primary",
        backgroundColor: "transparent",
      },
    },
    fullWidth: {
      true: { width: "100%" },
    },
    disabled: {
      true: {
        color: "text-disabled!",
        borderColor: "border-disabled!",
        backgroundColor: "bg-disabled_subtle!",
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
