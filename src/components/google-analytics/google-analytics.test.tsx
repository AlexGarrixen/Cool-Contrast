import { describe, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { GoogleAnalytics } from "../google-analytics";

describe("Contrast Level", () => {
  it("Correct rendering and unmount", () => {
    const screen = render(<GoogleAnalytics />);

    expect(() => screen.unmount()).not.toThrow();
  });

  it("Should render the Google Analytics script tags", () => {
    const screen = render(<GoogleAnalytics />);

    const scriptOfLoad = screen.getByTestId("gtag-load");
    const initScript = screen.getByTestId("gtag-init");

    expect(scriptOfLoad).toBeInTheDocument();
    expect(initScript).toBeInTheDocument();
  });
});
