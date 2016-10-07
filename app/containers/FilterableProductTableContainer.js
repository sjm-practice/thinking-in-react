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

  handleSetInStock(inStockOnly) {
    this.setState({
      inStockOnly,
    });
  }

  handleSetFilter(filterText) {
    this.setState({
      filterText,
    });
  }

  render() {
    return (
      <FilterableProductTable
        products={PRODUCTS}
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onSetFilter={filterText => this.handleSetFilter(filterText)}
        onSetInStock={inStockOnly => this.handleSetInStock(inStockOnly)}
      />
    );
  }
}

export default FilterableProductTableContainer;

