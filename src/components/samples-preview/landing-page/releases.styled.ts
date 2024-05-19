import { css } from "@root/styled-system/css";

export const classes = {
  sectionTop: css({
    display: { md: "flex" },
    gap: "8",
    mb: { base: "12", md: "16" },
  }),

  heading: css({
    textStyle: { base: "display-md", sm: "display-lg", md: "display-xl" },
    w: { md: "6/12" },
    fontWeight: "bold",
    mb: { base: "4", md: "0" },
    "& span": {
      display: "block",
    },
  }),

  wrapperDesc: css({
    w: { md: "6/12" },
  }),

  desc: css({ textStyle: "body-lg", mb: "8" }),

  sectionReleases: css({
    display: { md: "flex" },
    gap: "8",
  }),

  mainReleaseWrapper: css({
    w: { md: "6/12" },
    pr: "4%",
  }),

  mainReleaseImg: css({
    aspectRatio: "square",
    "& > img": {
      w: "full",
      h: "full",
      objectFit: "cover",
      rounded: "xl",
    },
  }),

  mainReleaseContent: css({
    display: "flex",
    flexDirection: "column",
    gap: "4",

    "& > div:first-child": {
      display: "flex",
      justifyContent: "space-between",
      mt: "6",
    },
  }),

  mainReleaseTitle: css({
    textStyle: "display-sm",
    truncate: true,
    fontWeight: "bold",
  }),

  mainReleaseProgress: css({
    h: "2",
    w: "100%",
    position: "relative",
    "& span": {
      display: "block",
      h: "100%",
      top: 0,
      w: "60%",
    },
  }),

  mainReleaseTime: css({
    display: "flex",
    justifyContent: "space-between",
  }),

  releasesList: css({
    mt: { base: "10", md: "0" },
    w: { md: "6/12" },
    display: "grid",
    gap: "8",
    gridAutoRows: "max-content",
  }),

  compactRelease: css({
    display: "grid",
    gridTemplateColumns: "64px 1fr auto",
    h: "max-content",
    alignItems: "center",
  }),

  compactReleaseImg: css({
    aspectRatio: "square",
    "& > img": {
      rounded: "lg",
      w: "100%",
      h: "100%",
      objectFit: "cover",
    },
  }),

  compactReleaseContent: css({
    overflow: "hidden",
    px: "6",
    "& > *": {
      truncate: true,
    },
  }),

  compactReleaseTitle: css({
    textStyle: "display-xs",
    fontWeight: "bold",
  }),

  compactReleaseActions: css({
    display: "flex",
    gap: "4",
  }),
};
