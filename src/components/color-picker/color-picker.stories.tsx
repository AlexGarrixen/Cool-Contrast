import type { StoryObj, Meta } from "@storybook/react";

import { useState } from "react";
import { css } from "@root/styled-system/css";

import { ColorPicker } from "./color-picker";

export default {
  title: "Components/Color Picker",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ p: "4" })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ColorPicker>;

type Story = StoryObj<typeof ColorPicker>;

export const Preview: Story = {
  name: "Default",
  args: {
    sourceColor: "#655FC8",
  },
  render: (args) => <ColorPicker {...args} />,
};

export const Controlled: Story = {
  name: "Controlled",
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("#655FC8");

    return (
      <>
        <p className={css({ mt: "4" })}>Value: {value}</p>
        <ColorPicker sourceColor={value} onChange={setValue} />
      </>
    );
  },
};
