import React from "react";
import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";

const Header = () => {
  return (
    <div className="fixed w-full">
      <TopBar />
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
