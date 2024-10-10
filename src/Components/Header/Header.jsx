import React from "react";
import Navbar from "../Navbar/Navbar";
import TopBar from "../TopBar/TopBar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <TopBar />
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
