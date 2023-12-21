import { describe, it } from "@jest/globals";

import { colorModes } from "../utils";

describe("Color Control/Utils", () => {
  it("Should convert to rgb channels", () => {
    const channels = colorModes.rgb.converter("#fff");

    expect(channels).toMatchObject([255, 255, 255]);
  });

  it("Should convert to hsl channels", () => {
    const channels = colorModes.hsl.converter("#fff");

    expect(channels).toMatchObject([0, 0, 100]);
  });

  it("Should convert to cmyk channels", () => {
    const channels = colorModes.cmyk.converter("#fff");

    expect(channels).toMatchObject([0, 0, 0, 0]);
  });

  it("Should convert to hsv channels", () => {
    const channels = colorModes.hsv.converter("#fff");

    expect(channels).toMatchObject([0, 0, 100]);
  });

  it("Should convert to hwb channels", () => {
    const channels = colorModes.hwb.converter("#fff");

    expect(channels).toMatchObject([0, 100, 0]);
  });
});
