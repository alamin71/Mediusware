import React from "react";
import logo from "../../assets/Images/Logo.png";
import SendBtn from "../../assets/Images/SendBtn.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="relative group">
        <NavLink to="/company" className="relative flex items-center group">
          <span className="pb-1 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
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
        </NavLink>

        {/* Dropdown Menu */}
        <ul className="absolute hidden group-hover:grid bg-white shadow-lg mt-7 w-96 grid-cols-3 gap-4 p-4 ">
          <div>
            <li className="px-4 py-2 hover:bg-gray-100 w-96">
              <a href="#">Who we are</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 w-96">
              <a href="#">Our Team</a>
            </li>
          </div>
          <div>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">Women Empowerment</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">Career</a>
            </li>
          </div>
          <div>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">Our Vision</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">Contact Us</a>
            </li>
          </div>
        </ul>
      </li>

      <li>
        <NavLink to="/service" className="relative flex items-center group">
          <span className="pb-1 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
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
        </NavLink>
      </li>
      <li>
        <NavLink to="/hireDev" className="relative flex items-center group">
          <span className="pb-1 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
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
        </NavLink>
      </li>
      <li>
        <NavLink to="/industries" className="relative flex items-center group">
          <span className="pb-1 text-black transition ease-in-out duration-300 group-hover:text-customGreen relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-all after:duration-300 group-hover:after:w-full">
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
        </NavLink>
      </li>
    </>
  );
  const links2 = (
    <>
      <li>
        <NavLink to="/portfolio">
          <a className="relative pb-1 text-black hover:text-customGreen transition ease-in-out duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-width after:duration-300">
            Portfolio
          </a>
        </NavLink>
      </li>
      <li>
        <NavLink to="academy">
          <a className="relative pb-1 text-black hover:text-customGreen transition ease-in-out duration-300 hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-customGreen after:transition-width after:duration-300">
            Academy
          </a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white  z-30 transition-all duration-1000 ease-linear w-full shadow-2xl">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow"
        >
          {links}
          {links2}
        </ul>
      </div>
      <div className="navbar navbar-end lg:navbar-start">
        <Link to="/">
          <img src={logo} alt="logo" className="relative" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* large device */}
          {links}
          {links2}
        </ul>
      </div>

      <div className="navbar-end">
        <NavLink to="/startFree">
          <a className="btn bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-8 mt-1 mb-1 hover:bg-blue-600 border-none transition">
            Start Free Trial{" "}
            <img src={SendBtn} alt="SendBtn" className="ml-2" />
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
