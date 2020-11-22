import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord, onSubmit }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <input
        className="mb-2 mx-sm-3"
        type="text"
        onChange={(e) => setCurrentGuess(e.target.value)}
        placeholder="enter a guess"
        value={currentGuess}
      />
      <button
        className="btn btn-primary mb-2"
        onClick={(e) => {
          e.preventDefault();
          setCurrentGuess("");
        }}
      >
        Submit
      </button>
    </form>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
