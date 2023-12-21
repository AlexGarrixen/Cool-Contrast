import { css } from "@root/styled-system/css";

export default {
  root: css({ backgroundColor: "bg-primary", rounded: "xl", shadow: "xs", flex: 1, width: "100%" }),

  header: css({
    color: "text-primary",
    py: "4",
    px: "5",
    borderBottomWidth: "1px",
    borderStyle: "solid",
    borderColor: "border-secondary",
    textAlign: "center",
    fontWeight: "bold",
  }),

  body: css({ px: "5", py: "8" }),
};
