import { defineSlotRecipe } from "@pandacss/dev";

export default defineSlotRecipe({
  className: "input-group",
  slots: ["root", "startContent", "endContent"],
  base: {
    root: {
      display: "flex",
      "& > input": {
        flex: 1,
        outline: "none",
        border: "none!",
        width: "100%",
      },
    },
    startContent: { display: "inline-flex", alignItems: "center" },
    endContent: { display: "inline-flex", alignItems: "center" },
  },
  variants: {
    variant: {
      outline: {
        root: {
          border: "1px solid",
          borderColor: "border-primary",
        },
      },
    },
    size: {
      sm: {
        root: {
          rounded: "md",
        },
        startContent: {
          height: "8",
        },
        endContent: {
          height: "8",
        },
      },
      md: {
        root: {
          rounded: "lg",
        },
        startContent: {
          height: "10",
        },
        endContent: {
          height: "10",
        },
      },
    },
  },
  compoundVariants: [
    {
      size: "md",
      css: {
        startContent: { pl: "4" },
        endContent: { pr: "4" },
      },
    },
    {
      size: "sm",
      css: {
        startContent: { pl: "3" },
        endContent: { pr: "3" },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});
