import React from "react";

import PRODUCTS from "../data/products";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "../main.css";

const FilterableProductTable = () => {
  return (
    <div className="col-sm-12 filterable-product-table">
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
};

export default FilterableProductTable;
