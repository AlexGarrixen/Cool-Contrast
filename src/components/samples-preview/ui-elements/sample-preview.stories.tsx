import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";

import { bgVar, fgVar } from "../utils";

import { Sample1 } from "./sample-1";
import { Sample2 } from "./sample-2";
import { Sample3 } from "./sample-3";
import { Sample4 } from "./sample-4";
import { Sample5 } from "./sample-5";
import { Sample6 } from "./sample-6";
import { Sample7 } from "./sample-7";
import { Sample8 } from "./sample-8";
import { Sample9 } from "./sample-9";
import { Sample11 } from "./sample-11";
import { Sample12 } from "./sample-12";
import { Sample13 } from "./sample-13";

export default {
  title: "Samples Previews",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        className={css({ maxW: "96" })}
        style={{
          [bgVar as string]: "80 48 229",
          [fgVar as string]: "255 255 255",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

type Story = StoryObj;

export const Sample_1: Story = {
  name: "Sample 1",
  render: () => <Sample1 />,
};

export const Sample_2: Story = {
  name: "Sample 2",
  render: () => <Sample2 />,
};

export const Sample_3: Story = {
  name: "Sample 3",
  render: () => <Sample3 />,
};

export const Sample_4: Story = {
  name: "Sample 4",
  render: () => <Sample4 />,
};

export const Sample_5: Story = {
  name: "Sample 5",
  render: () => <Sample5 />,
};

export const Sample_6: Story = {
  name: "Sample 6",
  render: () => <Sample6 />,
};

export const Sample_7: Story = {
  name: "Sample 7",
  render: () => <Sample7 />,
};

export const Sample_8: Story = {
  name: "Sample 8",
  render: () => <Sample8 />,
};

export const Sample_9: Story = {
  name: "Sample 9",
  render: () => <Sample9 />,
};

export const Sample_11: Story = {
  name: "Sample 11",
  render: () => <Sample11 />,
};

export const Sample_12: Story = {
  name: "Sample 12",
  render: () => <Sample12 />,
};

export const Sample_13: Story = {
  name: "Sample 13",
  render: () => <Sample13 />,
};
