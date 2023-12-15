import type { StoryObj, Meta } from "@storybook/react";

import * as Slider from "@radix-ui/react-slider";
import { css } from "@root/styled-system/css";
import { slider } from "@root/styled-system/recipes";

export default {
  title: "Primitives/Slider",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ p: "4" })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof Slider>;

export const Preview: Story = {
  name: "Default Preview",
  render: () => {
    const classes = slider();

    return (
      <form>
        <Slider.Root className={classes.root} defaultValue={[50]} max={100} step={1}>
          <Slider.Track className={classes.track}>
            <Slider.Range className={classes.range} />
          </Slider.Track>
          <Slider.Thumb aria-label="thumb" className={classes.thumb} />
        </Slider.Root>
      </form>
    );
  },
};
