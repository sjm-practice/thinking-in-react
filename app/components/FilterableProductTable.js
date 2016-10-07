import React, { PropTypes } from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "../main.css";

const FilterableProductTable = (props) => {
  return (
    <div className="col-sm-12 filterable-product-table">
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
};

FilterableProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default FilterableProductTable;
