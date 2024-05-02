import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 text-slate-800 p-4 mx-4">
      <div className="container flex justify-between items-center">
        <ul className="hidden md:flex space-x-7">
          <li>
            <NavLink
              to="/"
              activeClassName="border-b-2 border-white"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="border-b-2 border-white"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeClassName="border-b-2 border-white"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="border-b-2 border-white"
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="menu w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <button className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 bottom-0 bg-slate-900 w-64 py-6 px-4"
          >
            <button onClick={toggleMenu} className="text-white ml-3 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <ul className="flex flex-col ml-4 space-y-8 mt-6 text-xl text-white">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  activeClassName="border-b-2 border-white"
                  className="hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={toggleMenu}
                  activeClassName="border-b-2 border-white"
                  className="hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={toggleMenu}
                  activeClassName="border-b-2 border-white"
                  className="hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={toggleMenu}
                  activeClassName="border-b-2 border-white"
                  className="hover:text-gray-300 transition duration-300 ease-in-out"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

          </motion.div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
