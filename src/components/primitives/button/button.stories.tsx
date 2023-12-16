import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";
import { stack } from "@root/styled-system/patterns";

import { Button } from "./button";

export default {
  title: "Primitives/Button",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ p: "4" })}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Preview: Story = {
  name: "Default Preview",
  args: {
    children: "Sample Text",
  },
  render: (args) => <Button {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <div className={stack({ gap: "3", direction: "row", flexWrap: "wrap" })}>
      <Button size="sm">Small</Button>
      <Button>Medium</Button>
    </div>
  ),
};

export const RecipeVariantProps: Story = {
  render: () => (
    <div className={stack({ gap: "3", direction: "row", flexWrap: "wrap" })}>
      <Button>Outline</Button>
      <Button variant="solid">Solid</Button>
      <div className={css({ backgroundColor: "bg-primary-solid", p: "2" })}>
        <Button variant="solid-white">Solid White</Button>
      </div>
    </div>
  ),
};

export const OnlyIcon: Story = {
  render: () => (
    <div className={stack({ gap: "3", direction: "row", flexWrap: "wrap" })}>
      <Button isIconOnly size="sm">
        <svg height="20" viewBox="0 0 24 24" width="20">
          <g fill="none" fillRule="nonzero">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
            <path
              d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18ZM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2-9.82L9 6.847V8.82l10-1.667V5.18Z"
              fill="#09244BFF"
            />
          </g>
        </svg>
      </Button>
      <Button isIconOnly>
        <svg height="24" viewBox="0 0 24 24" width="24">
          <g fill="none" fillRule="nonzero">
            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
            <path
              d="M21 5.18V17a4 4 0 1 1-2-3.465V9.181L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973l10-1.666A2 2 0 0 1 21 5.18ZM5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2-9.82L9 6.847V8.82l10-1.667V5.18Z"
              fill="#09244BFF"
            />
          </g>
        </svg>
      </Button>
    </div>
  ),
};
