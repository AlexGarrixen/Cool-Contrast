import type { Preview } from "@storybook/react";

import React from "react";

import { dmSans } from "../src/styles/fonts";
import { css } from "../styled-system/css";
import "../src/styles/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${dmSans.className} ${css({
          color: "text-primary",
          textStyle: "body-base",
        })}`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
