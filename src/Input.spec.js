import React from "react";
import { render } from "@testing-library/react";
import { checkProps } from "../test/testUtils";
import Input from "./Input";

describe("Component rendering", () => {
  it("renders the Input component", () => {
    const { getByRole } = render(<Input secretWord="jawn" />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("properly renders props", () => {
    checkProps(Input, { secretWord: "party" });
  });
});
