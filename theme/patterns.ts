import { definePattern } from "@pandacss/dev";

const container = definePattern({
  transform(props) {
    return {
      maxW: "breakpoint-xl",
      mx: "auto",
      px: { base: "4", md: "6" },
      ...props,
    };
  },
});

export default {
  container,
};
