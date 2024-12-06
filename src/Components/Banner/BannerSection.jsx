import React, { useEffect, useState } from "react";
import LinkedinBtn from "../LinkdinBtn/LinkedinBtn";

const BannerSection = () => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching JSON data
    const fetchData = async () => {
      try {
        const response = await fetch("bannerData.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBannerData(data.bannerSection);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  const { headline, US, Today, subHeadline, image } = bannerData;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-customFormShadowBg p-10">
        <div className="flex-1 text-gray-800 font-sans mb-6 md:mb-0">
          <p class="font-bold text-[32px] leading-[44px] text-primary-1 lg:text-[60px] lg:leading-[65px] 2xl:text-[80px] 2xl:leading-[90px] 2xl:uppercase">
            {headline} <span class="text-customGreen">{US}</span>
            <br />
            <span className="text-customGreen">{Today}</span>
          </p>
          <h4 class="text-[#344054] font-medium text-base pt-4 pb-7 2xl:text-[24px]">
            {subHeadline}
          </h4>
        </div>
        <div className="flex-1">
          <img src={image.src} alt={image.alt} className="max-w-full h-auto" />
        </div>
      </div>
      <LinkedinBtn />
    </>
  );
};

export default BannerSection;
