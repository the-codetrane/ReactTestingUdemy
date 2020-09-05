import React from "react";
import { render } from "@testing-library/react";
import { checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = {
  success: false,
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return render(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const { getByTestId } = setup({ success: false });
  const component = getByTestId("component-congrats");
  expect(component).toBeTruthy();
});

test("renders no text when 'success' prop is false", () => {
  const { getByTestId } = setup({ success: false });
  const component = getByTestId("component-congrats");
  expect(component).toHaveTextContent("");
});

test("renders congrats message with 'success' prop is true", () => {
  const { getByTestId } = setup({ success: true });
  const component = getByTestId("congrats-message");
  expect(component).toHaveTextContent("My man! You guessed the secret word!");
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  const propError = checkProps(Congrats, expectedProps);
  expect(propError).toBeUndefined();
});
