import type { StoryObj, Meta } from "@storybook/react";

import { Navbar } from "./navbar";

export default {
  title: "Page Preview / Navbar",
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Preview: Story = {
  render: () => <Navbar />,
};
