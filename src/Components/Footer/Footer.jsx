import React from "react";
import logo from "../../assets/Images/Logo.png";
import footerImg1 from "../../assets/Images/footerImg1.png";
// import footerImg2 from "../../assets/Images/footerImg2.png";
// import footerImg3 from "../../assets/Images/footerImg3.png";
import footerImg4 from "../../assets/Images/footerImg4.png";
import footerImg5 from "../../assets/Images/footerImg5.png";
import footerImg6 from "../../assets/Images/footerImg6.png";
import footerImg7 from "../../assets/Images/footerImg7.png";
import footerImg8 from "../../assets/Images/footerImg8.png";
import footerImg10 from "../../assets/Images/footerImg10.png";
import americanImg from "../../assets/Images/american_flag.png";
import BangladeshImg from "../../assets/Images/Bangladesh_Flag.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer bg-base-200 text-base-content p-10 border-b-2 border-dotted border-gray-500">
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Service</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Technology</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Hire Developers</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Hire Developers</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer bg-base-200 text-base-content p-10 border-b-2 border-dotted border-gray-500">
        <aside>
          <img src={logo} alt="logo" />
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-500">
              <FaFacebook className="w-9 h-9" />
            </a>
            <a href="#" className="text-blue-500">
              <FaTwitter className="w-9 h-9" />
            </a>
            <a href="#" className="text-blue-500">
              <FaLinkedin className="w-9 h-9" />
            </a>
            <a href="#" className="text-blue-500">
              <FaYoutube className="w-9 h-9" />
            </a>
          </div>
        </aside>
        <div className="flag">
          <img src={americanImg} alt="footerImg1" className="w-full h-28" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Headquarter</h1>
          <p className="mb-4 flex items-center text-base">
            <FaLocationDot className="inline-block mr-3 w-7 h-7" />
            Mount Pleasant, SC, USA
          </p>
          <p className="mb-4 flex items-center text-base">
            <FaPhoneAlt className="inline-block mr-2" /> +1 (843) 212-6898
          </p>
          <p className="mb-4 flex items-center text-base">
            <FaEnvelope className="inline-block mr-2" /> sales@mediusware.io
          </p>
        </div>
        <div className="flag2">
          <img
            src={BangladeshImg}
            alt="BangladeshImg"
            className="w-full h-28"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Bangladesh Office</h1>
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
      </div>

      {/* new section */}
      <section class="justify-between bg-base-200 py-5 border-b-2 border-dotted border-gray-500 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-10 gap-3 ml-2 mr-2">
          <div>
            <img
              src={footerImg1}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg10}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg7}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg5}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg10}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg5}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg10}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg10}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg5}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
          <div>
            <img
              src={footerImg1}
              alt="footerImg1"
              className="w-28 h-32 mx-2 my-2"
            />
          </div>
        </div>
      </section>
      <div className="bg-base-200 text-center py-5">
        © 2024 Mediusware. All Rights Reserved
        <h1></h1>
      </div>
    </footer>
  );
};

export default Footer;
