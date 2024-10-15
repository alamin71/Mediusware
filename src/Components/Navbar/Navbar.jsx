import React, { useState } from "react";
import logo from "../../assets/Images/Logo.png";
import SendBtn from "../../assets/Images/SendBtn.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // state to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // toggle menu open/close state
  };

  const links = (
    <>
      {/* Dropdown - Company */}
      <li className="relative group">
        <Link className="relative flex items-center group px-3">
          <span className="py-3 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
            Company
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6 w-6 text-black transition ease-in-out duration-300 group-hover:text-customGreen"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Dropdown Menu */}
        <ul
          className={`absolute ${
            menuOpen
              ? "ml-[178px] -top-2 pt-1 bg-gray-100 overflow-y-visible md:ml-0"
              : ""
          } hidden group-hover:grid bg-white rounded-lg text-black shadow-lg mt-3 py-6 w-svw grid-cols-1 md:grid-cols-5 gap-4 p-4`}
        >
          <div>
            <h2 className="text-customGreen">About</h2>
            <Link to="/company">
              <li className="py-2 hover:bg-gray-100">Who we are</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Our Team</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Blog</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Leadership and Vision</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Development</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Women Empowerment</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Career</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">CSR</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Model</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Delivery Models</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Engagement Model</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">
                Development Methodology
              </li>
            </Link>
          </div>
        </ul>
      </li>

      {/* Dropdown - Services */}
      <li className="relative group">
        <Link className="relative flex items-center group px-4">
          <span className="py-3 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
            Services
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6 w-6 text-black transition ease-in-out duration-300 group-hover:text-customGreen"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Dropdown Menu */}
        <ul
          className={`absolute ${
            menuOpen ? "ml-[180px] -top-3 pt-1 overflow-y-visible md:ml-0" : ""
          } hidden group-hover:grid bg-white rounded-lg text-black shadow-lg mt-3 py-6 w-svw grid-cols-1 md:grid-cols-5 gap-4 p-4`}
        >
          <div>
            <h2 className="text-customGreen">About</h2>
            <Link to="/service">
              <li className="py-2 hover:bg-gray-100">Service</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Our Team</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Blog</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Leadership and Vision</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Development</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Women Empowerment</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Career</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">CSR</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Model</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Delivery Models</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Engagement Model</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">
                Development Methodology
              </li>
            </Link>
          </div>
        </ul>
      </li>

      {/* Dropdown - Hire Developers */}
      <li className="relative group">
        <Link className="relative flex items-center group px-4">
          <span className="py-3 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
            Hire Developers
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6 w-6 text-black transition ease-in-out duration-300 group-hover:text-customGreen"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Dropdown Menu */}
        <ul
          className={`absolute ${
            menuOpen
              ? "ml-[178px] -top-3 bg-gray-100 pt-1 overflow-y-visible md:ml-0"
              : ""
          } hidden group-hover:grid bg-white rounded-lg text-black shadow-lg mt-3 py-6 w-svw grid-cols-1 md:grid-cols-5 gap-4 p-4`}
        >
          <div>
            <h2 className="text-customGreen">About</h2>
            <Link to="/hireDev">
              <li className="py-2 hover:bg-gray-100">Hire Developer</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Our Team</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Blog</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Leadership and Vision</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Development</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Women Empowerment</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Career</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">CSR</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Model</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Delivery Models</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Engagement Model</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">
                Development Methodology
              </li>
            </Link>
          </div>
        </ul>
      </li>
      {/* Dropdown - Industries */}
      <li className="relative group">
        <Link className="relative flex items-center group px-4">
          <span className="py-3 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
            Industries
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6 w-6 text-black transition ease-in-out duration-300 group-hover:text-customGreen"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* Dropdown Menu */}
        <ul
          className={`absolute ${
            menuOpen ? "ml-[180px] -top-2 pt-1 overflow-y-auto md:ml-0" : ""
          } hidden group-hover:grid bg-white rounded-lg text-black shadow-lg mt-3 py-6 w-svw grid-cols-1 md:grid-cols-4 gap-4 p-4`}
        >
          <div>
            <h2 className="text-customGreen">About</h2>
            <Link to="/industries">
              <li className="py-2 hover:bg-gray-100">Industries</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Our Team</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Blog</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Leadership and Vision</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Development</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Women Empowerment</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Career</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">CSR</li>
            </Link>
          </div>
          <div>
            <h2 className="text-customGreen">Development</h2>
            <Link>
              <li className="py-2 hover:bg-gray-100">Women Empowerment</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">Career</li>
            </Link>
            <Link>
              <li className="py-2 hover:bg-gray-100">CSR</li>
            </Link>
          </div>
        </ul>
      </li>
    </>
  );

  const links2 = (
    <>
      <li className="px-4 py-3">
        <NavLink to="/portfolio">
          <span className="relative content-center text-black hover:text-customGreen transition ease-in-out duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-width after:duration-300">
            Portfolio
          </span>
        </NavLink>
      </li>
      <li className="px-3 py-3">
        <NavLink to="/academy">
          <span className="relative text-black hover:text-customGreen transition ease-in-out duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-width after:duration-300">
            Academy
          </span>
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="flex justify-between  items-center px-3 py-3 bg-white w-full shadow-2xl">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="content-center hidden md:flex">
        <ul className="flex flex-col md:flex-row">
          {links}
          {links2}
        </ul>
      </div>

      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {menuOpen ? (
            <AiOutlineClose className="text-black" />
          ) : (
            <AiOutlineMenu className="text-customGreen" />
          )}
        </button>
      </div>

      <div className="hidden md:flex">
        <NavLink to="/startFree">
          <button className="btn bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-8 mt-1 mb-1 hover:bg-blue-600 border-none transition">
            Start Free Trial <img src={SendBtn} alt="SendBtn" className="" />
          </button>
        </NavLink>
      </div>

      {menuOpen && (
        <>
          <div className="absolute top-[70px] left-0 pt-1 pb-5  bg-white rounded-md shadow-md md:hidden">
            <ul className="flex flex-col pr-72 pl-3">
              {links}
              {links2}
            </ul>
            {/* <MobileNav /> */}
          </div>
          <div className="absolute mb-[-740px] ml-2">
            <NavLink to="/startFree">
              <button className="btn bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-6 items-center mt-1 mb-1 hover:bg-blue-600 border-none transition">
                Start Free Trial{" "}
                <img src={SendBtn} alt="SendBtn" className="" />
              </button>
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
