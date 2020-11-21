import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => (
  <>
    {success && (
      <div data-testid="component-congrats" className="alert alert-success">
        <span data-testid="congrats-message">
          My man! You guessed the secret word!
        </span>
      </div>
    )}
  </>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
