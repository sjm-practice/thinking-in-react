import React, {
  PropTypes,
} from "react";

const ProductTable = (props) => {
  const rows = [];
  const lastCategory = null;
  props.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<p key={product.category}>{product.category}</p>);
    }
    rows.push(<p key={product.name}>{product.name}</p>);
  });

  return (
    <div>
      {rows}
    </div>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ProductTable;
