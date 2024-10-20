import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// slide-1
import BannerCarouselImage1 from "../../assets/Images/BannerCarouselImage1.png";
import carouselLogo1 from "../../assets/Images/carouselLogo1.png";
import CarouselIcon1 from "../../assets/Images/CarouselIcon1.png";
import CarouselIcon2 from "../../assets/Images/CarouselIcon2.png";
import CarouselIcon3 from "../../assets/Images/CarouselIcon3.png";
import CarouselIcon4 from "../../assets/Images/CarouselIcon4.png";
// slide-2
import BannerCarouselImage2 from "../../assets/Images/BannerCarouselImage2.png";
import Slide2Logo from "../../assets/Images/Slide2Logo.png";
import Slide2Icon1 from "../../assets/Images/Slide2Icon1.png";
import Slide2Icon2 from "../../assets/Images/Slide2Icon2.png";
import Slide2Icon3 from "../../assets/Images/Slide2Icon3.png";
// import CarouselIcon4 from "../../assets/Images/CarouselIcon4.png";

//slide-4
import BannerCarouselImage4 from "../../assets/Images/BannerCarouselImage4.png";
import Slide4Logo from "../../assets/Images/Slide4Logo.png";
import Slide4Icon1 from "../../assets/Images/Slide4Icon1.png";
import Slide4Icon2 from "../../assets/Images/Slide4Icon2.png";
import Slide4Icon3 from "../../assets/Images/Slide4Icon3.png";

// slide-6
import BannerCarouselImage6 from "../../assets/Images/BannerCarouselImage6.png";
import Slide6Logo from "../../assets/Images/Slide6Logo.png";
import Slide6Icon1 from "../../assets/Images/Slide6Icon1.png";
import Slide6Icon2 from "../../assets/Images/Slide6Icon2.png";
import Slide6Icon3 from "../../assets/Images/Slide6Icon3.png";

import BannerCarouselImage5 from "../../assets/Images/BannerCarouselImage5.png";

import Slide3Logo from "../../assets/Images/Slide3Logo.png";

import Slide5Logo from "../../assets/Images/Slide5Logo.png";

const CarouselBanner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);

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

      // Get the position of the section relative to the viewport
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;

        // Set sticky state when the section reaches the sticky position (e.g., 10vh)
        if (sectionTop <= window.innerHeight * 0.1) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
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
        <section ref={sectionRef} className="relative h-[500vh]">
          <div className="sticky top-[10vh] flex h-screen items-center overflow-hidden">
            <div
              className={`flex gap-4 transition-transform duration-300 ease-out ${
                isSticky ? "" : "transform-none" // Slides will only move when sticky
              }`}
              style={{ transform: isSticky ? calculateTransform() : "none" }}
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
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#fcca5b]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={Slide2Logo} alt="img" />
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
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#D29712]">
                        <img src={Slide2Icon1} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          96% Customer Satisfaction Rate
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#D29712]">
                        <img src={Slide2Icon2} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          70% Increase in Conversion Rates
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#D29712]">
                        <img src={Slide2Icon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Over 100,000 Active Users
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#D29712]">
                        <img src={CarouselIcon4} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Operational in 80+ Countries{" "}
                        </span>
                      </div>
                      {/* Other Icons */}
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
                    <img
                      src={BannerCarouselImage2}
                      alt="BannerCarouselImage1"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#181818]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={Slide3Logo} alt="img" />
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
                        <button className="py-2 px-4 font-semibold  text-white">
                          View Portfolio
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 overflow-hidden">
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#333333]">
                        <img src={CarouselIcon1} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#333333]">
                        <img src={CarouselIcon2} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#333333]">
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
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#f7eeff]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={Slide4Logo} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-black">
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
                        <button className="py-2 px-4 font-semibold  text-[#434343]">
                          View Portfolio
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 overflow-hidden">
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#EAD2FF]">
                        <img src={Slide4Icon1} alt="icon" />
                        <span className="text-base lg:text-lg  text-[#8D11FE]">
                          96% Customer Satisfaction Rate
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#EAD2FF]">
                        <img src={Slide4Icon2} alt="icon" />
                        <span className="text-base lg:text-lg  text-[#8D11FE]">
                          70% Increase in Conversion Rates
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#EAD2FF]">
                        <img src={Slide4Icon3} alt="icon" />
                        <span className="text-base lg:text-lg  text-[#8D11FE]">
                          Over 100,000 Active Users
                        </span>
                      </div>
                      {/* Other Icons */}
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
                    <img
                      src={BannerCarouselImage4}
                      alt="BannerCarouselImage1"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Slide 5 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#c09bff]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={Slide5Logo} alt="img" />
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
                        <button className="py-2 px-4 font-semibold  text-[#434343]">
                          View Portfolio
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 overflow-hidden">
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#7527BC]">
                        <img src={Slide2Icon1} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          96% Customer Satisfaction Rate
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#7527BC]">
                        <img src={Slide2Icon2} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          70% Increase in Conversion Rates
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#7527BC]">
                        <img src={Slide2Icon3} alt="icon" />
                        <span className="text-base lg:text-lg text-white">
                          Over 100,000 Active Users{" "}
                        </span>
                      </div>
                      {/* Other Icons */}
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
                    <img
                      src={BannerCarouselImage5}
                      alt="BannerCarouselImage1"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Slide 6 */}
              <div className="group relative h-[82vh] w-[75vw] overflow-hidden rounded-lg bg-[#fae99f]">
                <div className="w-full h-full flex flex-col lg:flex-row lg:gap-6 gap-2 p-4 items-center">
                  <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                    <div className="mb-3">
                      <img src={Slide6Logo} alt="img" />
                    </div>
                    <p className="text-lg lg:text-xl mb-6 text-[#272727]">
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
                        <button className="py-2 px-4 font-semibold  text-[#434343]">
                          View Portfolio
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-4 overflow-hidden">
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#FFDE51]">
                        <img src={Slide6Icon1} alt="icon" />
                        <span className="text-base lg:text-lg text-[#2B839D]">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#FFDE51]">
                        <img src={Slide6Icon2} alt="icon" />
                        <span className="text-base lg:text-lg text-[#2B839D]">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 rounded-xl p-2 bg-[#FFDE51]">
                        <img src={Slide6Icon3} alt="icon" />
                        <span className="text-base lg:text-lg text-[#2B839D]">
                          Reduces energy consumption by up to 30%
                        </span>
                      </div>
                      {/* Other Icons */}
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:w-2/5 lg:pr-3">
                    <img
                      src={BannerCarouselImage6}
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
