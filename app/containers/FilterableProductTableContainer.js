import React, { Component } from "react";

import PRODUCTS from "../data/products";
import FilterableProductTable from "../components/FilterableProductTable";

class FilterableProductTableContainer extends Component {
  constructor() {
    super();

    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  render() {
    return (
      <FilterableProductTable
        products={PRODUCTS}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
      />
    );
  }
}

export default FilterableProductTableContainer;

