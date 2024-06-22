import type { StoryObj, Meta } from "@storybook/react";

import { bgVar, fgVar } from "../utils";

import { Tours } from "./tours";

export default {
  title: "Landing Page / Tours",
} satisfies Meta<typeof Tours>;

type Story = StoryObj<typeof Tours>;

export const Preview: Story = {
  render: () => (
    <div style={{ [bgVar as string]: "38 24 147", [fgVar as string]: "219 255 94" }}>
      <Tours />
    </div>
  ),
};
