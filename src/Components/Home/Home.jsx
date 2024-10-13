import React from "react";

import BannerSection from "../Banner/BannerSection";
import CompanyLocation from "../CompanyLocation/CompanyLocation";
import React_Assignment from "../React_Assignment";
// import TopBar from "../TopBar/TopBar";

const Home = () => {
  return (
    <div className="container mx-auto w-full">
      {/* <TopBar /> */}
      <BannerSection />
      <React_Assignment />
      <CompanyLocation />
    </div>
  );
};

export default Home;
