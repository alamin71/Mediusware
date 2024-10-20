import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BannerCarouselImage1 from "../../assets/Images/BannerCarouselImage1.png";
import carouselLogo1 from "../../assets/Images/carouselLogo1.png";
import CarouselIcon1 from "../../assets/Images/CarouselIcon1.png";
import CarouselIcon2 from "../../assets/Images/CarouselIcon2.png";
import CarouselIcon3 from "../../assets/Images/CarouselIcon3.png";

const CarouselBanner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      // Detect scroll direction
      if (position > prevScrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollPosition(position);
      setPrevScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  const calculateTransform = () => {
    const slideWidth = 75; // Each slide's width in vw
    const numSlides = 6; // Number of slides
    const maxScroll = window.innerHeight * numSlides; // Max scroll height based on slides
    const percentage = Math.min(scrollPosition / maxScroll, 1); // Scroll percentage

    const transformValue = `translateX(-${
      percentage * (numSlides - 1) * slideWidth
    }vw)`;

    return transformValue;
  };

  return (
    <>
      <div className="rounded hidden xl:block">
        <div className="lg:mt-10 flex justify-center">
          <div className="max-w-[1000px]">
            <h3 className="text-xl lg:text-3xl xl:text-4xl font-semibold text-center text-black">
              Shaping Tomorrow: Leading Digital Change with New Ideas and
              Teamwork
            </h3>
          </div>
        </div>
      </div>
      <div>
        <section className="relative h-[500vh]">
          <div className="sticky top-[10vh] flex h-screen items-center overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-out"
              style={{ transform: calculateTransform() }}
            >
              {/* Slide 1 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#095f3d]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={carouselLogo1} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-white">
                      Revolutionizing Real Estate with Eco Connect: A Mediusware
                      <br /> Success Story
                    </p>
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
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                        <img src={CarouselIcon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
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
              </div>
              {/* Slide 2 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#65db41]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={carouselLogo1} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-white">
                      Revolutionizing Real Estate with Eco Connect: A Mediusware
                      <br /> Success Story
                    </p>
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
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                        <img src={CarouselIcon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
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
              </div>
              {/* Slide 3 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#43eea9]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={carouselLogo1} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-white">
                      Revolutionizing Real Estate with Eco Connect: A Mediusware
                      <br /> Success Story
                    </p>
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
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                        <img src={CarouselIcon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
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
              </div>
              {/* Slide 4 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#0f3b2a]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={carouselLogo1} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-white">
                      Revolutionizing Real Estate with Eco Connect: A Mediusware
                      <br /> Success Story
                    </p>
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
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                        <img src={CarouselIcon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
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
              </div>
              {/* Slide 5 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#8ee9c4]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={carouselLogo1} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-white">
                      Revolutionizing Real Estate with Eco Connect: A Mediusware
                      <br /> Success Story
                    </p>
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
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                        <img src={CarouselIcon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
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
              </div>
              {/* Slide 6 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#e93a3a]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={carouselLogo1} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-white">
                      Revolutionizing Real Estate with Eco Connect: A Mediusware
                      <br /> Success Story
                    </p>
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
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                        <img src={CarouselIcon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarouselBanner;
