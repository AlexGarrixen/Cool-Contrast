import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";

import { Sample1 } from "./sample-1";
import { bgVar, fgVar } from "./utils";

export default {
  title: "Samples Previews",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        className={css({ maxW: "96" })}
        style={{ [bgVar as string]: "#5030E5", [fgVar as string]: "#fff" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

type Story = StoryObj;

export const Preview: Story = {
  name: "Sample 1",
  render: () => <Sample1 />,
};
