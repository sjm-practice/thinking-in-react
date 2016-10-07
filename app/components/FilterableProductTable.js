import React, { PropTypes } from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "../main.css";

const FilterableProductTable = (props) => {
  return (
    <div className="col-sm-12 filterable-product-table">
      <SearchBar
        filterText={props.filterText}
        inStockOnly={props.inStockOnly}
      />
      <ProductTable
        products={props.products}
        filterText={props.filterText}
        inStockOnly={props.inStockOnly}
      />
    </div>
  );
};

FilterableProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
};

export default FilterableProductTable;
