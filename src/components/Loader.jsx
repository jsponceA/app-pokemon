import React from "react";
import PropTypes from "prop-types";

const Loader = ({ size }) => {
  return (
    <>
      <div
        className="spinner-border text-secondary"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">Cargando...</span>
      </div>
    </>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};

Loader.defaultProps = {
  size: "3rem",
};

export default Loader;
