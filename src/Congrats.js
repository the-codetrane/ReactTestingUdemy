import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => (
  <div data-testid="component-congrats">
    {success && <span data-testid="congrats-message"></span>}
  </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
