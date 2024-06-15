import { css } from "@root/styled-system/css";

export const classes = {
  dialogOverlay: css({
    bg: "black/8",
    position: "fixed",
    inset: 0,
    animation: "overlayShow 250ms cubic-bezier(0.16, 1, 0.3, 1)",
    zIndex: 10,
  }),

  dialogContent: css({
    bgColor: "white",
    rounded: "md",
    shadow: "3xl",
    position: "fixed",
    top: "50%",
    right: "12px",
    transform: "translateY(-50%)",
    width: "100vw",
    maxWidth: "430px",
    height: "calc(100vh - 24px)",
    animation: "contentShow 450ms cubic-bezier(0.16, 1, 0.3, 1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 20,
  }),

  drawerOverlay: css({ position: "fixed", inset: 9, bgColor: "black/40", zIndex: 10 }),

  drawerContent: css({
    bgColor: "white",
    display: "flex",
    flexDirection: "column",
    roundedTop: "md",
    h: "94%",
    mt: "24",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  }),

  drawerIndicator: css({
    mx: "auto",
    w: "12",
    h: "1.5",
    flexShrink: "0",
    rounded: "999px",
    bgColor: "bg-secondary",
    mt: "3",
    mb: "8",
  }),

  content: css({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    px: "6",
    pt: "6",
    pb: "1",
    gap: "12",
  }),
};
