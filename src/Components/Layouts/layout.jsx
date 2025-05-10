import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../Navbar/Nav";


function layout() {
  return (
    <React.Fragment>
      <Nav />
      <main><Outlet /></main>
    </React.Fragment>
  );
}

export default layout;
