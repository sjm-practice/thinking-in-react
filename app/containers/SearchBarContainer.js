import React, { Component, PropTypes } from "react";

import SearchBar from "../components/SearchBar";

class SearchBarContainer extends Component {

  handleFilterChange(event) {
    console.log("filter:", event.target.value);
    this.props.onSetFilter(event.target.value);
  }

  handleInStockChange(event) {
    console.log("checked:", event.target.checked);
    this.props.onSetInStock(event.target.checked);
  }

  render() {
    return (
      <SearchBar
        filterText={this.props.filterText}
        inStockOnly={this.props.inStockOnly}
        onFilterChange={event => this.handleFilterChange(event)}
        onInStockChange={event => this.handleInStockChange(event)}
      />
    );
  }
}

SearchBarContainer.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  onSetFilter: PropTypes.func.isRequired,
  onSetInStock: PropTypes.func.isRequired,
};

export default SearchBarContainer;
