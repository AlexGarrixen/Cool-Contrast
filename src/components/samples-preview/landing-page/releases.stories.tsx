import type { StoryObj, Meta } from "@storybook/react";

import { bgVar, fgVar } from "../utils";

import { Releases } from "./releases";

export default {
  title: "Landing Page / Releases",
} satisfies Meta<typeof Releases>;

type Story = StoryObj<typeof Releases>;

export const Preview: Story = {
  render: () => (
    <div style={{ [bgVar as string]: "38 24 147", [fgVar as string]: "219 255 94" }}>
      <Releases />
    </div>
  ),
};
