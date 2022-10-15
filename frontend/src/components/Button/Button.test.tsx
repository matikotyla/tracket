import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button component", () => {
  it("Renders properly", () => {
    const { getByTestId } = render(<Button text="Mock button" />);
    const button = getByTestId("button");
    expect(button).toBeInTheDocument();
  });
});
