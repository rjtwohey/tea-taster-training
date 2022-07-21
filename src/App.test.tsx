import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { SplashScreen } from "@capacitor/splash-screen";
import { isPlatform } from "@ionic/react";

jest.mock("@capacitor/splash-screen");
jest.mock("@ionic/react", () => {
  const actual = jest.requireActual("@ionic/react");
  return { ...actual, isPlatform: jest.fn() };
});

describe("<App />", () => {
  beforeEach(() => (SplashScreen.hide = jest.fn()));

  describe("initialization", () => {
    describe("in an Android context", () => {
      beforeEach(() => (isPlatform as any).mockImplementation(() => true));
      it("should hide the splash screen", () => {
        const { container } = render(<App />);
        expect(container).toBeDefined();
        expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
      });
    });

    describe("in an iOS context", () => {
      beforeEach(() => (isPlatform as any).mockImplementation(() => true));
      it("should hide the splash screen", () => {
        const { container } = render(<App />);
        expect(container).toBeDefined();
        expect(SplashScreen.hide).toHaveBeenCalled();
      });
    });
  });

  afterEach(() => jest.restoreAllMocks());
});
