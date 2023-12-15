import { defineTokens } from "@pandacss/dev";

import spacing from "./spacing";

export default defineTokens.sizes({
  ...spacing,
  32: { value: "8rem" },
  40: { value: "10rem" },
  48: { value: "12rem" },
  56: { value: "14rem" },
  64: { value: "16rem" },
  80: { value: "20rem" },
  96: { value: "24rem" },
  120: { value: "30rem" },
  140: { value: "35rem" },
  160: { value: "40rem" },
  180: { value: "45rem" },
  192: { value: "48rem" },
  256: { value: "64rem" },
  320: { value: "80rem" },
  360: { value: "90rem" },
  400: { value: "100rem" },
});
