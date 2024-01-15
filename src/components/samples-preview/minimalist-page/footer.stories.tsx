import type { StoryObj, Meta } from "@storybook/react";

import { Footer } from "./footer";

export default {
  title: "Page Preview / Footer",
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Preview: Story = {
  render: () => <Footer />,
};
