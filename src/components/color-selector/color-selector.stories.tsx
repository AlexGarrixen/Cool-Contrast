import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";

import { ColorSelector } from "./color-selector";

export default {
  title: "Components/Color Selector",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ p: "4" })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ColorSelector>;

type Story = StoryObj<typeof ColorSelector>;

export const Preview: Story = {
  name: "Default",
  args: {
    value: "#655FC8",
  },
  render: (args) => <ColorSelector />,
};
