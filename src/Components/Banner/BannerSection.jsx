import React, { useEffect, useState } from "react";

const BannerSection = () => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the JSON data
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
    <div className="flex flex-col md:flex-row items-center bg-customFormShadowBg p-10">
      <div className="flex-1 text-gray-800 font-sans mb-6 md:mb-0">
        <h1 className="text-6xl font-bold mb-4">
          {headline} <span className="text-customGreen">{US}</span>
          <br />
          <span className="text-customGreen">{Today}</span>
        </h1>
        {/* <h1>{headline}</h1> */}
        <p className="text-lg mb-6">{subHeadline}</p>
      </div>
      <div className="flex-1">
        <img src={image.src} alt={image.alt} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default BannerSection;
