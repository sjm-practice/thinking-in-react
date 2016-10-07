import React, { PropTypes } from "react";

import SearchBarContainer from "../containers/SearchBarContainer";
import ProductTable from "./ProductTable";
import "../main.css";

const FilterableProductTable = (props) => {
  return (
    <div className="col-sm-12 filterable-product-table">
      <SearchBarContainer
        filterText={props.filterText}
        inStockOnly={props.inStockOnly}
        onSetFilter={props.onSetFilter}
        onSetInStock={props.onSetInStock}
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
  onSetFilter: PropTypes.func.isRequired,
  onSetInStock: PropTypes.func.isRequired,
};

export default FilterableProductTable;
