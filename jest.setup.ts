import "@testing-library/jest-dom";

global.ResizeObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}));

jest.mock("@uidotdev/usehooks", () => ({
  __esModule: true,
  useCopyToClipboard: jest.fn(() => ["", jest.fn()]),
}));
