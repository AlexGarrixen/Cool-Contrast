import type { StoryObj, Meta } from "@storybook/react";

import { bgVar, fgVar } from "../utils";

import { LandingPage } from "./landing-page";

export default {
  title: "Landing Page / Full Preview",
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof LandingPage>;

export const Preview: Story = {
  render: () => (
    <div style={{ [bgVar as string]: "38 24 147", [fgVar as string]: "219 255 94" }}>
      <LandingPage />,
    </div>
  ),
};
