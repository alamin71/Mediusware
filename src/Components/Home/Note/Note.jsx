import React, { useState, useEffect, useRef } from "react";
import BannerCarouselImage1 from "../../assets/Images/BannerCarouselImage1.png";
import carouselLogo1 from "../../assets/Images/carouselLogo1.png";
import CarouselIcon1 from "../../assets/Images/CarouselIcon1.png";
import CarouselIcon2 from "../../assets/Images/CarouselIcon2.png";
import CarouselIcon3 from "../../assets/Images/CarouselIcon3.png";
import CarouselIcon4 from "../../assets/Images/CarouselIcon4.png";
import CarouselIcon5 from "../../assets/Images/CarouselIcon5.png";
import { Link } from "react-router-dom";

const TeamworkBannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total slides in the carousel
  const carouselRef = useRef(null);
  const isManualChange = useRef(false);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    isManualChange.current = true;
  };

  // Auto-scroll to next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualChange.current) {
        nextSlide();
      }
      isManualChange.current = false; // Reset after manual change
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to the current slide
  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.scrollWidth / totalSlides;
    carousel.scrollTo({
      left: scrollAmount * currentSlide,
      behavior: "smooth",
    });
  }, [currentSlide]);

  return (
    <>
      <div className="overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${totalSlides * 100}%`,
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {/* Slide-1 */}
          <div
            className="w-full h-full flex flex-col bg-[#095f3d] p-4 items-center"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {/* Content of Slide 1 */}
            <div className="flex flex-col lg:flex-row lg:gap-6 gap-2">
              <div className="flex flex-col justify-center lg:w-3/5 lg:pl-8">
                <div className="mb-3">
                  <img src={carouselLogo1} alt="img" />
                </div>
                <p className="text-lg lg:text-xl mb-6 text-white">
                  Revolutionizing Real Estate with Eco Connect: A Mediusware
                  Success Story
                </p>
                <div className="flex gap-3 mb-4">
                  <Link to="/projects">
                    <button className="font-semibold bg-white text-[#012E54] py-2 px-4 rounded-lg">
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
                  {/* Icons with descriptions */}
                  <div className="flex items-center gap-4 rounded-xl p-2 bg-[#0C7A4E]">
                    <img src={CarouselIcon1} alt="icon" />
                    <span className="text-base lg:text-lg text-white">
                      Reduces energy consumption by up to 30%
                    </span>
                  </div>
                  {/* Add other icons similarly */}
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

          {/* Similar structure for Slide-2, Slide-3, ... */}
          <div
            className="w-full h-full flex flex-col bg-[#fcca5b] p-4 items-center"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {/* Content of Slide 2 */}
          </div>

          <div
            className="w-full h-full flex flex-col bg-[#181818] p-4 items-center"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {/* Content of Slide 3 */}
          </div>

          <div
            className="w-full h-full flex flex-col bg-[#f7eeff] p-4 items-center"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {/* Content of Slide 4 */}
          </div>

          <div
            className="w-full h-full flex flex-col bg-[#c09bff] p-4 items-center"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {/* Content of Slide 5 */}
          </div>
        </div>

        {/* Next and Previous Buttons */}
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? totalSlides - 1 : prev - 1
              )
            }
            className="text-white bg-gray-700 p-2 rounded-full ml-2"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="text-white bg-gray-700 p-2 rounded-full mr-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamworkBannerCarousel;
