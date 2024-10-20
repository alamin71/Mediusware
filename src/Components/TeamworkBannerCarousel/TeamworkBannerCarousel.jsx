import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerCarouselImage1 from "../../assets/Images/BannerCarouselImage1.png";
import carouselLogo1 from "../../assets/Images/carouselLogo1.png";
import CarouselIcon1 from "../../assets/Images/CarouselIcon1.png";
import CarouselIcon2 from "../../assets/Images/CarouselIcon2.png";
import CarouselIcon3 from "../../assets/Images/CarouselIcon3.png";
import CarouselIcon4 from "../../assets/Images/CarouselIcon4.png";
import CarouselIcon5 from "../../assets/Images/CarouselIcon5.png";
import BannerCarouselImage2 from "../../assets/Images/BannerCarouselImage2.png";

const TeamworkBannerCarousel = () => {
  const sliderRef = useRef(null);
  const totalSlides = 5;

  // Scroll event handler with threshold
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 200; // Adjust this value to determine when scrolling should start affecting the slider
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop - threshold) / scrollHeight;

    const newSlideIndex = Math.floor(scrollPercentage * totalSlides);

    // Only move the slides when the user has scrolled past the threshold
    if (
      scrollTop > threshold &&
      sliderRef.current &&
      newSlideIndex >= 0 &&
      newSlideIndex < totalSlides
    ) {
      sliderRef.current.slickGoTo(newSlideIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Slider settings
  const settings = {
    speed: 900,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Navbar Spacer */}
      <div className="h-16"></div> {/* Assuming your navbar height is 64px */}
      <div className="sticky top-[118px] z-50">
        {" "}
        {/* Sticky slider below navbar */}
        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div className="w-full h-full flex flex-col bg-[#095f3d] md:flex-row lg:gap-6 gap-2 p-4 items-center">
            {/* Slide content */}
            <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
              <div className="mb-3">
                <img src={carouselLogo1} alt="img" />
              </div>
              <p className="text-lg lg:text-xl mb-6 text-white">
                Revolutionizing Real Estate with Eco Connect: A Mediusware{" "}
                <br /> Success Story
              </p>
              {/* Buttons */}
              <div className="flex gap-3 mb-4">
                <Link to="/projects">
                  <button className="font-semibold bg-gradient-to-r bg-white text-[#012E54] py-2 px-4 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-[#007ba8]">
                    View Case Study
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="py-2 px-4 font-semibold text-white">
                    View Portfolio
                  </button>
                </Link>
              </div>
              {/* Icons */}
              <div className="flex flex-wrap gap-4 overflow-hidden">
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon1} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Reduces energy consumption by up to 30%
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon2} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    75% improvement in operational efficiency
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon3} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Over 10,000 businesses optimizing with GreenifyAI
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon4} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Active in 50+ countries
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon5} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Real-time energy monitoring across all facilities
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
              <img
                src={BannerCarouselImage1}
                alt="BannerCarouselImage1"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          {/* Slide 1 */}
          <div className="w-full h-full flex flex-col bg-[#095f3d] md:flex-row lg:gap-6 gap-2 p-4 items-center">
            {/* Slide content */}
            <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
              <div className="mb-3">
                <img src={carouselLogo1} alt="img" />
              </div>
              <p className="text-lg lg:text-xl mb-6 text-white">
                Revolutionizing Real Estate with Eco Connect: A Mediusware{" "}
                <br /> Success Story
              </p>
              {/* Buttons */}
              <div className="flex gap-3 mb-4">
                <Link to="/projects">
                  <button className="font-semibold bg-gradient-to-r bg-white text-[#012E54] py-2 px-4 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-[#007ba8]">
                    View Case Study
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="py-2 px-4 font-semibold text-white">
                    View Portfolio
                  </button>
                </Link>
              </div>
              {/* Icons */}
              <div className="flex flex-wrap gap-4 overflow-hidden">
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon1} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Reduces energy consumption by up to 30%
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon2} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    75% improvement in operational efficiency
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon3} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Over 10,000 businesses optimizing with GreenifyAI
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon4} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Active in 50+ countries
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon5} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Real-time energy monitoring across all facilities
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
              <img
                src={BannerCarouselImage1}
                alt="BannerCarouselImage1"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          {/* Slide 1 */}
          <div className="w-full h-full flex flex-col bg-[#34c78c] md:flex-row lg:gap-6 gap-2 p-4 items-center">
            {/* Slide content */}
            <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
              <div className="mb-3">
                <img src={carouselLogo1} alt="img" />
              </div>
              <p className="text-lg lg:text-xl mb-6 text-white">
                Revolutionizing Real Estate with Eco Connect: A Mediusware{" "}
                <br /> Success Story
              </p>
              {/* Buttons */}
              <div className="flex gap-3 mb-4">
                <Link to="/projects">
                  <button className="font-semibold bg-gradient-to-r bg-white text-[#012E54] py-2 px-4 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-[#007ba8]">
                    View Case Study
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="py-2 px-4 font-semibold text-white">
                    View Portfolio
                  </button>
                </Link>
              </div>
              {/* Icons */}
              <div className="flex flex-wrap gap-4 overflow-hidden">
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon1} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Reduces energy consumption by up to 30%
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon2} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    75% improvement in operational efficiency
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon3} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Over 10,000 businesses optimizing with GreenifyAI
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon4} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Active in 50+ countries
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon5} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Real-time energy monitoring across all facilities
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
              <img
                src={BannerCarouselImage1}
                alt="BannerCarouselImage1"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          {/* Slide 1 */}
          <div className="w-full h-full flex flex-col bg-[#77b329] md:flex-row lg:gap-6 gap-2 p-4 items-center">
            {/* Slide content */}
            <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
              <div className="mb-3">
                <img src={carouselLogo1} alt="img" />
              </div>
              <p className="text-lg lg:text-xl mb-6 text-white">
                Revolutionizing Real Estate with Eco Connect: A Mediusware{" "}
                <br /> Success Story
              </p>
              {/* Buttons */}
              <div className="flex gap-3 mb-4">
                <Link to="/projects">
                  <button className="font-semibold bg-gradient-to-r bg-white text-[#012E54] py-2 px-4 rounded-lg transition-shadow duration-300 hover:shadow-lg hover:shadow-[#007ba8]">
                    View Case Study
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="py-2 px-4 font-semibold text-white">
                    View Portfolio
                  </button>
                </Link>
              </div>
              {/* Icons */}
              <div className="flex flex-wrap gap-4 overflow-hidden">
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon1} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Reduces energy consumption by up to 30%
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon2} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    75% improvement in operational efficiency
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon3} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Over 10,000 businesses optimizing with GreenifyAI
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon4} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Active in 50+ countries
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                  <img src={CarouselIcon5} alt="icon" />
                  <span className="text-base lg:text-lg text-white">
                    Real-time energy monitoring across all facilities
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
              <img
                src={BannerCarouselImage1}
                alt="BannerCarouselImage1"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </Slider>
      </div>
      {/* Next Section after the slider */}
      {/* <div className="h-screen bg-gray-200"> */}
      {/* Content of the next section */}
      {/* </div> */}
    </>
  );
};

export default TeamworkBannerCarousel;
