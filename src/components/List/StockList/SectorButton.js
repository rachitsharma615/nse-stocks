import React from "react";
import PropTypes from "prop-types";

const SectorButton = ({ handleClick, active, label }) => (
  <button
    className={`skillbutton ${active[label] ? "skillbutton-active" : ""}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

SectorButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired
};

export default SectorButton;
