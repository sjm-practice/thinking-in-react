import React from "react";

import { transparentBg } from "../styles";
import SearchBar from "./SearchBar";

const FilterableProductTable = () => {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <SearchBar />
    </div>
  );
};

export default FilterableProductTable;
