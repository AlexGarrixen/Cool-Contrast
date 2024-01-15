import type { StoryObj, Meta } from "@storybook/react";

import { Episode } from "./episode";

export default {
  title: "Page Preview / Episode",
} satisfies Meta<typeof Episode>;

type Story = StoryObj<typeof Episode>;

export const Preview: Story = {
  render: () => <Episode />,
};
