import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => {
  return <input />;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
