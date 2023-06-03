import PropTypes from "prop-types";
import { getTypes } from "../services/pokemon";
import { useEffect, useState } from "react";
const SelectSearchType = ({ sendValue }) => {
  const [selectValue, setSelectValue] = useState("");
  const [types, setTypes] = useState([]);

  const getFetchData = async () => {
    try {
      const response = await getTypes();
      setTypes(response.data.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (selectValue) {
      sendValue(selectValue);
    }
  }, [selectValue]);

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        className="form-select"
        aria-label="Select"
      >
        <option value="" hidden>
          Seleccione Tipo
        </option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </>
  );
};

SelectSearchType.propTypes = {
  sendValue: PropTypes.func,
};

export default SelectSearchType;
