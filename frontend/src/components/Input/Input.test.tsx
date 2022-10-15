import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input component", () => {
  it("Renders properly", () => {
    const { getByTestId } = render(<Input value="" onChange={console.log} />);
    const input = getByTestId("input");
    expect(input).toBeInTheDocument();
  });
});
