import React, { useState } from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ title, onClick }) => {
  const [counter, setCounter] = useState(0);

  if (counter === 3) {
    throw new Error("Crashed!!!!");
  }

  return (
    <>
      <button
        type="button"
        class="button"
        onClick={() => {
          onClick();
          setCounter(3);
        }}
      >
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
