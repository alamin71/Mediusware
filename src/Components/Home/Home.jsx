import React from "react";

import BannerSection from "../Banner/BannerSection";
import CompanyLocation from "../CompanyLocation/CompanyLocation";
import React_Assignment from "../React_Assignment";
// import TeamworkBannerCarousel from "../TeamworkBannerCarousel/TeamworkBannerCarousel";
// import Test from "../TEST/Test";
import CarouselBanner from "../Test/CarouselBanner";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <div className="container mx-auto w-full">
      <BannerSection />
      <React_Assignment />
      <CarouselBanner />
      {/* <TeamworkBannerCarousel /> */}
      <ContactForm />
      <CompanyLocation />
      {/* <Test /> */}
    </div>
  );
};

export default Home;
