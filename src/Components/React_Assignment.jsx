import React from "react";

import { FaGooglePlay } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";

const React_Assignment = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Drop Us a <span className="text-green-600">Line</span>
        </h2>
        <form className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
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
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md mt-1"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Company Name (Optional)
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
                  className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-green-100 hover:text-green-600  hover:font-semibold text-black focus:bg-green-500 focus:text-white transition"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">
              Your Budget (Optional)
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
                  className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-green-100 hover:text-green-600  hover:font-semibold text-black focus:bg-green-500 focus:text-white transition"
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">
              Deep Details About Your Query (Optional)
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
              <button className="min-w-44 bg-green-700 text-white px-4 py-2 rounded-lg">
                <GrAttachment className="inline-block w-5 h-5 mr-2" />
                Add File(5MB)
              </button>
            </div>
          </div>

          <button
            type="submit"
            className=" bg-blue-500 text-white p-3 rounded-md mt-6 hover:bg-blue-600 transition"
          >
            Send Inquiry <FaGooglePlay className="inline-block" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default React_Assignment;
