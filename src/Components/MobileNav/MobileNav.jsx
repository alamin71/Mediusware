import React, { useState } from "react";

const MobileNav = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    { title: "Company" },
    { title: "Services" },
    { title: "Hire Developers" },
    { title: "Industries" },
    { title: "Portfolio" },
    { title: "Academy" },
  ];

  return (
    <div className="w-full bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center"></div>

      <div className="mt-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center py-2 cursor-pointer"
            >
              <span>{item.title}</span>
              <span>
                {openIndex === index ? (
                  <svg
                    className="w-4 h-4 transform rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 15l-7-7-7 7"
                    />
                  </svg>
                )}
              </span>
            </div>
            {openIndex === index && (
              <div className="ml-4 py-2">
                {/* Dropdown content goes here */}
                <p className="text-sm">Dropdown content for {item.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        {/* <button className="bg-blue-700 px-4 py-2 rounded text-white flex items-center justify-center space-x-2">
          <span>START FREE TRIAL</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button> */}
        {/* <NavLink to="/startFree"> */}
        <button className="btn bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-8 mt-1 mb-1 hover:bg-blue-600 border-none transition">
          Start Free Trial <img src={SendBtn} alt="SendBtn" className="" />
        </button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default MobileNav;
