import { slider as sliderRecipe } from "@root/styled-system/recipes";
import { css } from "@root/styled-system/css";

export default {
  header: css({ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "5" }),

  headerLabel: css({ fontWeight: "bold" }),

  input: css({ width: "16", textAlign: "center" }),

  slider: sliderRecipe(),
};
