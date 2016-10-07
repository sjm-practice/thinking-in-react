import React, { PropTypes } from "react";

const SearchBar = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={props.onFilterChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={props.onInStockChange}
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
  onFilterChange: PropTypes.func.isRequired,
  onInStockChange: PropTypes.func.isRequired,
};

export default SearchBar;
