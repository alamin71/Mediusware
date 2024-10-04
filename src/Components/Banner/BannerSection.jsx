import React, { useEffect, useState } from 'react';

const BannerSection = () => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('bannerData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure banner data
  const { headline, subHeadline, image, style } = bannerData;

  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: style.backgroundColor, padding: '20px' }}>
      <div style={{ flex: 1, color: style.textColor, fontFamily: style.font }}>
        <h1>{headline}</h1>
        <p>{subHeadline}</p>
        
      </div>
      <div style={{ flex: 1 }}>
        <img src={image.src} alt={image.alt} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default BannerSection;
