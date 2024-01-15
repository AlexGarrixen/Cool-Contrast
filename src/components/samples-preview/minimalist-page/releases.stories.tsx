import type { StoryObj, Meta } from "@storybook/react";

import { Layout } from "@/components/layout";

import { Releases } from "./releases";

export default {
  title: "Page Preview / Releases",
} satisfies Meta<typeof Releases>;

type Story = StoryObj<typeof Releases>;

export const Preview: Story = {
  render: () => <Layout content={<Releases />} />,
};
