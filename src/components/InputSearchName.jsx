import PropTypes from "prop-types";
import { useState } from "react";

const InputSearchName = ({ sendValue }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Ingrese Nombre de Pokemon"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendValue(inputValue)}
        autoFocus
        maxLength={50}
      />
    </>
  );
};

InputSearchName.propTypes = {
  sendValue: PropTypes.func,
};

export default InputSearchName;
