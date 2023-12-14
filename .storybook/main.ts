import type { StorybookConfig } from "@storybook/nextjs";

import path from "path";

import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    config.resolve = {
      ...(config.resolve ?? {}),
      plugins: [
        ...(config.resolve?.plugins ?? []),
        new TsconfigPathsPlugin({
          extensions: config.resolve?.extensions,
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        }),
      ],
    };

    return config;
  },
};
export default config;
