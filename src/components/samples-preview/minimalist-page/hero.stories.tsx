import type { StoryObj, Meta } from "@storybook/react";

import { Hero } from "./hero";

export default {
  title: "Page Preview / Hero",
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Preview: Story = {
  render: () => <Hero />,
};
