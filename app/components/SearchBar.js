import React, { PropTypes } from "react";

const SearchBar = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
        />
        {" "}
        Only show products in stock
      </p>
    </form>
  );
};

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
};

export default SearchBar;
