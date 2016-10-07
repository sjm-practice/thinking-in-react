import React, { PropTypes } from "react";

import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  const rows = [];
  let lastCategory = null;
  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1 ||
      (!product.stocked && props.inStockOnly)) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
};

export default ProductTable;
