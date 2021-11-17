import React from "react";
import PropTypes from "prop-types";

const SearchButton = ({ btntext, handleClick, buttonStyle }) => {
  return (
    <button className={`btn btn-primary ${buttonStyle}`} onClick={handleClick}>
      {btntext}
    </button>
  );
};

SearchButton.propTypes = {
  btntext: PropTypes.string,
  handleClick: PropTypes.func,
  buttonStyle: PropTypes.string,
};

SearchButton.defaultProps = {
  btntext: "",
  handleClick: () => {},
  buttonStyle: "",
};

export default SearchButton;
