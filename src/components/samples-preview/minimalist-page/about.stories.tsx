import type { StoryObj, Meta } from "@storybook/react";

import { About } from "./about";

export default {
  title: "Page Preview / About",
} satisfies Meta<typeof About>;

type Story = StoryObj<typeof About>;

export const Preview: Story = {
  render: () => <About />,
};
