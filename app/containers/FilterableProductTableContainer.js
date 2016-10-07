import React, { Component } from "react";

import PRODUCTS from "../data/products";
import FilterableProductTable from "../components/FilterableProductTable";

class FilterableProductTableContainer extends Component {
  render() {
    return (
      <FilterableProductTable
        products={PRODUCTS}
      />
    );
  }
}

export default FilterableProductTableContainer;

