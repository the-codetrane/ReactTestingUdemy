import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { checkProps } from "../test/testUtils";
import Input from "./Input";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Component rendering", () => {
  it("renders the Input component", () => {
    const { getByRole } = render(<Input secretWord="jawn" />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("properly renders props", () => {
    checkProps(Input, { secretWord: "party" });
  });
});

describe("State Control", () => {
  let mockCurrentGuess = jest.fn();
  const setup = (role) => {
    const { getByRole } = render(<Input secretWord="party" />);
    return getByRole(role);
  };

  beforeEach(() => {
    mockCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockCurrentGuess]);
  });

  it("updates the state when the input changes", () => {
    const input = setup("textbox");

    fireEvent.change(input, { target: { value: "jawn" } });
    expect(mockCurrentGuess).toHaveBeenCalledWith("jawn");
  });

  it("clears the input box on submit", () => {
    const submitButton = setup("button");

    fireEvent.click(submitButton);
    expect(mockCurrentGuess).toHaveBeenCalledWith("");
  });
});
