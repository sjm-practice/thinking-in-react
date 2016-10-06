import React from "react";

import SearchBar from "./SearchBar";
import "../main.css";

const FilterableProductTable = () => {
  return (
    <div className="jumbotron col-sm-12 text-center filterable-product-table">
      <SearchBar />
    </div>
  );
};

export default FilterableProductTable;
