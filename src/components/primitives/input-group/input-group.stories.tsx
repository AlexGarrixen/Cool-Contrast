import type { StoryObj, Meta } from "@storybook/react";

import { stack } from "@root/styled-system/patterns";
import { css } from "@root/styled-system/css";

import { CheckFill } from "@/components/icons";
import { Input } from "@/components/primitives/input";

import { InputGroup } from "./input-group";

export default {
  title: "Primitives/InputGroup",
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

type Story = StoryObj<typeof InputGroup>;

export const Preview: Story = {
  name: "Default Preview",
  render: () => (
    <InputGroup endContent={<CheckFill />} startContent={<CheckFill />}>
      <Input placeholder="test@gmail.com" />
    </InputGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className={stack({ gap: "3", direction: "row", flexWrap: "wrap", alignItems: "start" })}>
      <InputGroup size="sm" startContent={<CheckFill className={css({ fontSize: "icon-20" })} />}>
        <Input placeholder="test@gmail.com" size="sm" />
      </InputGroup>
      <InputGroup endContent={<CheckFill className={css({ fontSize: "icon-20" })} />}>
        <Input placeholder="test@gmail.com" />
      </InputGroup>
    </div>
  ),
};
