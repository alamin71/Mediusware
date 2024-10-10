import React from "react";
import logo from "../../assets/Images/Logo.png";
import navDownIcon from "../../assets/Images/navDownIcon.png";
import SendBtn from "../../assets/Images/SendBtn.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
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
    <div className="navbar w-full bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/startFree">
          <a className="btn bg-customSubmitBtnBg text-white text-sm p-3 rounded-lg px-8 mt-4 mb-4 hover:bg-blue-600 transition">
            Start Free Trial{" "}
            <img src={SendBtn} alt="SendBtn" className="ml-2" />
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
