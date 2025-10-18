import React from "react";

import NavBar from "./NavBar";
import { Outlet, Route, Routes } from "react-router";
import Footer from "./Footer";

const BodyLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BodyLayout;
