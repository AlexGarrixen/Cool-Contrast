import type { StoryObj, Meta } from "@storybook/react";

import { MinimalistPage } from "./minimalist-page";

export default {
  title: "Page Preview / Page",
} satisfies Meta<typeof MinimalistPage>;

type Story = StoryObj<typeof MinimalistPage>;

export const Preview: Story = {
  render: () => <MinimalistPage />,
};
