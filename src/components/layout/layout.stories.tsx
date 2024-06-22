import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";

import { Layout } from "./layout";

export default {
  title: "Components / Layout",
  tags: ["autodocs"],
} satisfies Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Preview: Story = {
  name: "Default Preview",
  args: {
    header: <>header</>,
    content: <>content</>,
  },
  render: (args) => (
    <div className={css({ "& aside": { borderColor: "border-primary" } })}>
      <Layout {...args} />
    </div>
  ),
};
