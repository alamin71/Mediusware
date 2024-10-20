import React from "react";

import BannerSection from "../Banner/BannerSection";
import CompanyLocation from "../CompanyLocation/CompanyLocation";
import React_Assignment from "../React_Assignment";
// import TeamworkBannerCarousel from "../TeamworkBannerCarousel/TeamworkBannerCarousel";
// import Test from "../TEST/Test";
import CarouselBanner from "../Test/CarouselBanner";

const Home = () => {
  return (
    <div className="container mx-auto w-full">
      <BannerSection />
      <React_Assignment />
      <CarouselBanner />
      {/* <TeamworkBannerCarousel /> */}
      <CompanyLocation />
      {/* <Test /> */}
    </div>
  );
};

export default Home;
