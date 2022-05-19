import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    //expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
//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