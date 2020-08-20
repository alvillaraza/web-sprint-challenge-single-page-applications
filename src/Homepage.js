import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <Link to={"/pizza"}>
        <p>Customize Your Pizza Here!</p>
      </Link>
    </>
  );
};
export default Homepage;
