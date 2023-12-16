import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import * as Icons from "@/components/icons";

export default {
  title: "Primitives/Icons",
  tags: ["autodocs"],
} satisfies Meta<typeof Icons>;

type Story = StoryObj<typeof Icons>;

export const Collection: Story = {
  render: () => (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(32px, 32px))",
        gap: "4",
        color: "text-primary",
      })}
    >
      <Icons.CheckFill />
      <Icons.CloseFill />
      <Icons.EmojiVeryHappyFill />
      <Icons.HappyFill />
      <Icons.SettingsFill />
      <Icons.UnhappyFill />
      <Icons.GithubFill />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      className={css({
        display: "flex",
        gap: "8",
        color: "text-primary",
      })}
    >
      <div className={stack()}>
        <Icons.CheckFill className={css({ fontSize: "icon-20" })} />
        <span>20x20</span>
      </div>
      <div className={stack()}>
        <Icons.CheckFill className={css({ fontSize: "icon-24" })} />
        <span>24x24</span>
      </div>
      <div className={stack()}>
        <Icons.CheckFill className={css({ fontSize: "icon-32" })} />
        <span>32x32</span>
      </div>
    </div>
  ),
};
