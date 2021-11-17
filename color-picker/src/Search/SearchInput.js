import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ handleTextChange, searchTxt, placeholderTxt }) => {
  return (
    <input
      type="text"
      name="search"
      className="form-control input-sm"
      onChange={handleTextChange}
      value={searchTxt}
      placeholder={placeholderTxt}
    />
  );
};

SearchInput.propTypes = {
  searchTxt: PropTypes.string,
  placeholderTxt: PropTypes.string,
  handleTextChange: PropTypes.func,
};

SearchInput.defaultProps = {
  searchTxt: "",
  handleTextChange: () => {},
  placeholderTxt: "",
};

export default SearchInput;
