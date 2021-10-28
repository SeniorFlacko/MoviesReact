import React, { useState } from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ title, onClick }) => {
  return (
    <>
      <button type="button" class="button" onClick={onClick}>
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
