import "./App.css";
import BannerSection from "./Components/Banner/BannerSection";

import CompanyLocation from "./Components/CompanyLocation/CompanyLocation";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import React_Assignment from "./Components/React_Assignment";

function App() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <React_Assignment />
      <CompanyLocation />
      <Footer />
    </>
  );
}

export default App;
