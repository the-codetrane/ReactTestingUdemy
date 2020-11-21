import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Component rendering", () => {
  it("renders the Input component", () => {
    const { getByRole } = render(<Input />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });
});
