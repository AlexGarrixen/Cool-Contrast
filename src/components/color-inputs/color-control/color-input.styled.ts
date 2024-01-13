import { css } from "@root/styled-system/css";

export default {
  root: css({ display: "flex", alignItems: "center", gap: "1", flex: 1 }),

  icon: css({ fontSize: "icon-24" }),

  input: css({
    textStyle: "display-md",
    fontWeight: "500",
    width: "100%",
    "&:focus": {
      outlineColor: "text-primary",
    },
  }),
};
