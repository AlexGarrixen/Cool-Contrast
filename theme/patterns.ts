import { definePattern } from "@pandacss/dev";

const container = definePattern({
  transform(props) {
    return {
      maxW: "breakpoint-2xl",
      mx: "auto",
      px: { base: "4", md: "6" },
      ...props,
    };
  },
});

export default {
  container,
};
