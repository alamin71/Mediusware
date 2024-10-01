import React, { useRef } from "react";

import { FaGooglePlay } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const React_Assignment = () => {
  const fileInputRef = useRef(null);

  // Function to trigger file input click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      console.log("Selected file:", file);
      // You can add further logic to upload the file here
    }
  };

  return (
    <div className="container mx-auto md:px-32 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Drop Us a <span className="text-customGreen">Line</span>
      </h1>
      <form className="bg-customFormShadowBg shadow-md rounded-lg p-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name*</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Phone Number <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Company Name <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter Your Company Name"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">
            Services You Need (You can choose multiple)
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Mobile Development",
              "Web Development",
              "SQA Solution",
              "Web UX/UI Design",
              "API Integration",
              "Mobile UX/UI Design",
              "Software Development",
              "Custom Service",
            ].map((service) => (
              <button
                key={service}
                type="button"
                className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-cusTomBtnHoverClr hover:text-customBtnTextClr hover:font-semibold text-black focus:bg-green-500 focus:text-white transition"
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">
            Your Budget <span className="text-gray-400">(Optional)</span>
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Less than $500",
              "$500 - $1,000",
              "$1,001 - $1,500",
              "$1,500 - $2,000",
            ].map((budget) => (
              <button
                key={budget}
                type="button"
                className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-cusTomBtnHoverClr hover:text-customBtnTextClr hover:font-semibold text-black focus:bg-green-500 focus:text-white transition"
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">
            Deep Details About Your Query{" "}
            <span className="text-gray-400">(Optional)</span>
          </label>
          <textarea
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Tell us more about your query"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-gray-500 text-sm">
            Add Attachments <span className="text-gray-400">(Optional)</span>
          </label>
          <div className="flex items-center space-x-2 border rounded-lg p-2">
            <input
              type="text"
              placeholder="(a brief, idea, branding guideline, old design,...)"
              className="w-full text-gray-400 bg-transparent outline-none"
              disabled
            />
            <div>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="application/pdf, image/*" // Optionally restrict file types
              />

              {/* Button to trigger file input */}
              <button
                className="min-w-44 bg-customGreen text-white px-4 py-2 rounded-lg text-sm"
                onClick={handleButtonClick}
              >
                <GrAttachment className="inline-block w-4 h-4 mr-2" />
                Add File (5MB)
              </button>
            </div>
          </div>
        </div>
      </form>
      <button
        type="submit"
        className=" bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-8 mt-4 mb-4 hover:bg-blue-600 transition"
      >
        Send Inquiry <FaGooglePlay className="inline-block" />
      </button>
    </div>
  );
};

export default React_Assignment;
