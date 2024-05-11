import type { StoryObj, Meta } from "@storybook/react";

import { bgVar, fgVar } from "../utils";

import { Hero } from "./hero";

export default {
  title: "Landing Page / Hero",
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Preview: Story = {
  render: () => (
    <div style={{ [bgVar as string]: "38 24 147", [fgVar as string]: "219 255 94" }}>
      <Hero />
    </div>
  ),
};
