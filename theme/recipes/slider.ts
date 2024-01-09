import { defineSlotRecipe } from "@pandacss/dev";

export default defineSlotRecipe({
  className: "slider",
  slots: ["root", "track", "range", "thumb"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      userSelect: "none",
      touchAction: "none",
    },
    track: {
      position: "relative",
      flex: 1,
      rounded: "999px",
      height: "2",
      backgroundColor: "bg-quarterary",
    },
    range: {
      position: "absolute",
      backgroundColor: "bg-primary-solid",
      height: "100%",
      rounded: "999px",
    },
    thumb: {
      display: "block",
      height: "6",
      width: "6",
      rounded: "999px",
      boxShadow: "md",
      backgroundColor: "white",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "bg-primary-solid",
    },
  },
});
