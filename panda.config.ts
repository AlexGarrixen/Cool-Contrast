import { defineConfig } from "@pandacss/dev";

import tokens from "./theme/tokens";
import semanticTokens from "./theme/semantic-tokens";
import textStyles from "./theme/text-styles";
import breakpoints from "./theme/breakpoints";
import { recipes, slotRecipes } from "./theme/recipes";

export default defineConfig({
  preflight: true,
  gitignore: true,
  include: [
    "src/**/*.{tsx,ts,jsx}",
    "src/components/**/*.{ts,tsx,js,jsx}",
    "src/app/**/*.{ts,tsx,js,jsx}",
  ],
  jsxFramework: "react",
  jsxFactory: "panda",
  outdir: "styled-system",
  exclude: [],
  presets: [],
  theme: {
    tokens,
    semanticTokens,
    textStyles,
    breakpoints,
    recipes,
    slotRecipes,
  },
});
