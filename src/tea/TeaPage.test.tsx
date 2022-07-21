import { render } from "@testing-library/react";
import TeaPage from "./TeaPage";

describe("<TeaPage />", () => {
  it("displays the header", () => {
    const { container } = render(<TeaPage />);
    expect(container).toHaveTextContent(/Blank/);
  });

  it("renders consistently", () => {
    const { asFragment } = render(<TeaPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
