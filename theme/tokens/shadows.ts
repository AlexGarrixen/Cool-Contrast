import { defineTokens } from "@pandacss/dev";

export default defineTokens.shadows({
  xs: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  sm: { value: ["0px 1px 2px 0px rgba(0, 0, 0, 0.06)", "0px 1px 3px 0px rgba(0, 0, 0, 0.10)"] },
  md: { value: ["0px 2px 4px -2px rgba(0, 0, 0, 0.06)", "0px 4px 8px -2px rgba(0, 0, 0, 0.10)"] },
  lg: { value: ["0px 4px 6px -2px rgba(0, 0, 0, 0.03)", "0px 12px 16px -4px rgba(0, 0, 0, 0.08)"] },
  xl: { value: ["0px 8px 8px -4px rgba(0, 0, 0, 0.03)", "0px 20px 24px -4px rgba(0, 0, 0, 0.08)"] },
  "2xl": { value: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)" },
  "3xl": { value: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)" },
});
