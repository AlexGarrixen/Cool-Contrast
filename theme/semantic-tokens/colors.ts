import { defineSemanticTokens } from "@pandacss/dev";

export default defineSemanticTokens.colors({
  "bg-primary": { value: "{colors.white}" },
  "bg-primary-solid": { value: "{colors.neutral.950}" },
  "bg-secondary": { value: "{colors.neutral.50}" },
  "bg-tertiary": { value: "{colors.neutral.100}" },
  "text-primary": { value: "{colors.neutral.900}" },
  "text-secondary": { value: "{colors.neutral.700}" },
  "text-error": { value: "colors.error.600" },
  "text-warning": { value: "colors.warning.600" },
  "text-success": { value: "colors.success.600" },
  "fg-primary": { value: "{colors.neutral.900}" },
  "fg-secondary": { value: "{colors.neutral.700}" },
  "fg-error": { value: "colors.error.600" },
  "fg-warning": { value: "colors.warning.600" },
  "fg-success": { value: "colors.success.600" },
  "border-primary": { value: "{colors.neutral.300}" },
  "border-secondary": { value: "{colors.neutral.200}" },
  "border-tertiary": { value: "{colors.neutral.100}" },
});
