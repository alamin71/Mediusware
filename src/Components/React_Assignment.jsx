import React, { useRef, useState } from "react";
import SendBtn from "../assets/Images/SendBtn.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { GrAttachment } from "react-icons/gr";

const React_Assignment = () => {
  const fileInputRef = useRef(null);
  const [fileError, setFileError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  // Function to trigger file input click
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent form submission or reset when clicking this button
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");

    if (file) {
      // Validate file size
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size should Max 5MB. Please choose a smaller file.");
        fileInputRef.current.value = null;
      } else {
        console.log("Selected file:", file);
      }
    }
  };

  const validateForm = (e) => {
    const form = e.target;

    const nameInput = form.name;
    const emailInput = form.email;

    // Resetting custom error messages
    nameInput.setCustomValidity("");
    emailInput.setCustomValidity("");

    let isValid = true;

    // Validating name
    if (!nameInput.value.trim()) {
      nameInput.setCustomValidity("Please input your name.");
      nameInput.reportValidity();
      isValid = false;
    }

    // Validating email
    if (!emailInput.value.trim()) {
      emailInput.setCustomValidity("Please input your email.");
      emailInput.reportValidity();
      isValid = false;
    }

    setIsFormValid(isValid);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    validateForm({ target: form });

    if (!isFormValid) return;

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const company = formData.get("company");
    const inQuery = formData.get("inQuery");

    console.log({
      name,
      email,
      phoneNumber,
      company,
      inQuery,
      selectedServices,
      selectedBudget,
    });

    form.reset(); // Resets the form fields
    setFileError(""); // Clear file error message
    setSelectedServices([]); // Reset selected services
    setSelectedBudget(""); // Reset selected budget
  };

  const handleInputChange = (e) => {
    const form = e.currentTarget.form;
    validateForm({ target: form });
  };

  // Function to handle service selection
  const toggleService = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service]
    );
  };

  // Function to handle budget selection
  const selectBudget = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <>
      <div className="container flex flex-col md:flex-row mx-auto md:px-32 py-8">
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-6">
            Drop Us a <span className="text-customGreen">Line</span>
          </h1>
          <form onSubmit={handleSubmitForm} noValidate>
            <div className="bg-customFormShadowBg shadow-md rounded-lg p-6 max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Name*</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md mt-1"
                    placeholder="Enter Your Name"
                    required
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email*</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md mt-1"
                    placeholder="Enter Your Email"
                    required
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Phone Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md mt-1"
                    placeholder="Enter Your Phone Number"
                    name="phoneNumber"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Company Name{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md mt-1"
                    placeholder="Enter Your Company Name"
                    name="company"
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
                      className={`px-3 py-1 border rounded-md ${
                        selectedServices.includes(service)
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-black"
                      } hover:bg-cusTomBtnHoverClr hover:text-customBtnTextClr  hover:border-blue-500 transition`}
                      onClick={() => toggleService(service)}
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
                      className={`px-3 py-1 border rounded-md ${
                        selectedBudget === budget
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-black"
                      } hover:bg-cusTomBtnHoverClr hover:text-customBtnTextClr  hover:border-blue-500 transition`}
                      onClick={() => selectBudget(budget)}
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
                  name="inQuery"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-gray-500 text-sm">
                  Add Attachments{" "}
                  <span className="text-gray-400">(Optional)</span>
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
                      // accept="application/pdf, image/*"
                    />

                    {/* Button to trigger file input */}
                    <button
                      className={`min-w-44 bg-customGreen text-white px-4 py-2 rounded-lg text-sm ${
                        !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={handleButtonClick}
                      disabled={!isFormValid} // Disable the button if the form is not valid
                    >
                      <GrAttachment className="inline-block w-4 h-4 mr-2" />
                      Add File (5MB)
                    </button>
                  </div>
                </div>
                {fileError && (
                  <p className="text-red-500 text-sm">{fileError}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className=" bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-8 mt-4 mb-4 hover:bg-blue-600  transition"
            >
              Send Inquiry{" "}
              <img src={SendBtn} alt="SendBtn" className="ml-2 inline-block" />
            </button>
          </form>
        </div>
        {/*.............. 
        Contact Details Section
         .............*/}
        <div className="w-full md:w-1/3 p-4 text-black">
          <h2 className="text-3xl font-bold mb-6">
            Contact <span className="text-customGreen">Details</span>
          </h2>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="mb-3">
              <strong>Address</strong>
            </p>
            <p className="mb-4 flex items-center text-base">
              <FaLocationDot className="inline-block mr-3 w-7 h-7" />
              24/1, Taj Mahal Road, Shiya Masjid mor, Ring Road, Mohammadpur,
              Dhaka
            </p>
            <p className="mb-4 flex items-center text-base">
              <FaPhoneAlt className="inline-block mr-2" /> +8801750020408
            </p>
            <p className="mb-4 flex items-center text-base">
              <FaEnvelope className="inline-block mr-2" /> career@mediusware.com
            </p>
            <p className="mb-4 flex items-center text-base">
              <FaClock className="inline-block mr-2" />
              Monday to Friday: 12 PM - 9 PM
            </p>
          </div>
          <h2 className="text-3xl font-bold mt-16">
            Follow <span className="text-customGreen">Up</span>
          </h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500">
              <FaFacebook className="w-11 h-11" />
            </a>
            <a href="#" className="text-blue-500">
              <FaTwitter className="w-11 h-11" />
            </a>
            <a href="#" className="text-blue-500">
              <FaLinkedin className="w-11 h-11" />
            </a>
            <a href="#" className="text-blue-500">
              <FaInstagram className="w-11 h-11" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default React_Assignment;
