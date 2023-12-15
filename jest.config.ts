import type { Config } from "jest";

import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  coverageReporters: ["lcov", "text"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/styled-system/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/styled-system/"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default createJestConfig(customJestConfig);
