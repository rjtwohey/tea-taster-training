import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { SplashScreen } from "@capacitor/splash-screen";

jest.mock("@capacitor/splash-screen");

describe("<App />", () => {
  beforeEach(() => (SplashScreen.hide = jest.fn()));

  describe("initialization", () => {
    it("should hide the splash screen", () => {
      const { container } = render(<App />);
      expect(container).toBeDefined();
      expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
