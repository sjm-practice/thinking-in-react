import React from "react";
import { Link } from "react-router";

import { transparentBg } from "../styles";

const Home = () => {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Hello React World!</h1>
      <p className="lead">A very simple react boilerplate.</p>
      <Link to="/samplePage">
        <button type="button" className="btn btn-lg btn-success">Sample Page</button>
      </Link>
    </div>
  );
};

export default Home;
