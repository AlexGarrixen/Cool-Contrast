import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { Input } from "./input";

export default {
  title: "Primitives/Input",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ p: "4" })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Preview: Story = {
  name: "Default Preview",
  args: {
    placeholder: "test@gmail.com",
    value: "",
  },
  render: (args) => <Input {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <div className={stack({ gap: "3", direction: "row", flexWrap: "wrap" })}>
      <Input placeholder="test@gmail.com" size="sm" />
      <Input placeholder="test@gmail.com" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Input disabled placeholder="test@gmail.com" />,
};
