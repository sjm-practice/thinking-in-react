import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = React.createClass({
  render() {
    return (
      <div>Hello React World!</div>
    );
  },
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById("app")
);
