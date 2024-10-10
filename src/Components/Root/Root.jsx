import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <div>
        <Header />
        <div className="pt-36">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Root;
