import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("Renders properly", () => {
    const { getByTestId } = render(
      <Checkbox checked={true} onChange={console.log} />
    );
    const checkbox = getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
