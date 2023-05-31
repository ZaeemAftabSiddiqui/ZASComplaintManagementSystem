import React from "react";
import { NavLink } from "react-router-dom";
const Errorpage = () => {
  return (
    <>
      <div className="container justify-items-center ">
        <h1>404 page not found</h1>
        <NavLink to="/">Back to home page</NavLink>
      </div>
    </>
  );
};

export default Errorpage;
