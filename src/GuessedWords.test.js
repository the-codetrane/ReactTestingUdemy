import React from "react";
import { render, screen } from "@testing-library/react";
import { checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return render(<GuessedWords {...setupProps} />);
};

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    const { getByTestId } = setup({ guessedWords: [] });
    wrapper = getByTestId;
  });
  it("should render without error", () => {
    const component = wrapper("component-guessed-words");
    expect(component).toBeInTheDocument();
  });

  it("should render instructions to guess a word", () => {
    const component = wrapper("component-guessed-words");
    expect(component).toHaveTextContent("Please guess a word");
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "blues", letterMatchCount: 0 },
    { guessedWord: "snail", letterMatchCount: 4 },
  ];
  let wrapper;
  let arrayWrapper;
  beforeEach(() => {
    const { getAllByTestId, getByTestId } = setup({ guessedWords });
    wrapper = getByTestId;
    arrayWrapper = getAllByTestId;
  });
  it("should render without error", () => {
    const component = wrapper("component-guessed-words");
    expect(component).toBeInTheDocument();
  });
  it("renders 'guessed words' section", () => {
    const guessedWordsNode = wrapper("guessed-words");
    expect(guessedWordsNode).toBeInTheDocument();
  });
  it("correct number of guessed words", () => {
    const guessedWordsNode = arrayWrapper("guessed-word");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
