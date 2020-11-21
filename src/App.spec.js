import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Component rendering", () => {
  it("renders the parent Jotto component", () => {
    const { getByText } = render(<App />);
    expect(getByText("Dat Jotto Jawn")).toBeInTheDocument();
  });
});
