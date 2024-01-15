import type { StoryObj, Meta } from "@storybook/react";

import { Tours } from "./tours";

export default {
  title: "Page Preview / Tours",
} satisfies Meta<typeof Tours>;

type Story = StoryObj<typeof Tours>;

export const Preview: Story = {
  render: () => <Tours />,
};
