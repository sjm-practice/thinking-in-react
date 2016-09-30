import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        Main component.
        {this.props.children}
      </div>
    );
  }
}

export default Main;
