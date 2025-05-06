import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiLoop } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { RiNotification2Fill, RiSettings5Fill } from "react-icons/ri";
import { SiLoopback } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("logout successfully");
    navigate('/sign');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <SiLoop className="w-8 h-8 text-sky-500 animate-spin-slow" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                ak-Media
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                />
                <IoSearchCircleSharp className="absolute left-3 top-2.5 h-5 w-5 text-sky-400" />
              </div>

              <Link 
                to="/mylinks" 
                className="group flex flex-col items-center px-2 py-1 rounded-md hover:bg-sky-50 transition-colors duration-200"
              >
                <BsPeopleFill className="h-6 w-6 text-sky-500 group-hover:text-sky-600 transition-colors duration-200" />
                <span className="text-sm text-gray-600 group-hover:text-sky-700 transition-colors duration-200">My Links</span>
              </Link>

              <Link 
                to="/notifications" 
                className="group flex flex-col items-center px-2 py-1 rounded-md hover:bg-sky-50 transition-colors duration-200"
              >
                <RiNotification2Fill className="h-6 w-6 text-sky-500 group-hover:text-sky-600 transition-colors duration-200" />
                <span className="text-sm text-gray-600 group-hover:text-sky-700 transition-colors duration-200">Notifications</span>
              </Link>

              <Link
              to="/announcement"
              className="group flex flex-col items-center px-2 py-1 rounded-md hover:bg-sky-50 transition-colors duration-200"
            >
              <IoMdNotifications className="h-6 w-6 text-sky-500 group-hover:text-sky-600 transition-colors duration-200" />
              <span className="text-sm text-gray-600 group-hover:text-sky-700 transition-colors duration-200">Announcements</span>
            </Link>

              <Link 
                to="/settings" 
                className="group flex flex-col items-center px-2 py-1 rounded-md hover:bg-sky-50 transition-colors duration-200"
              >
                <RiSettings5Fill className="h-6 w-6 text-sky-500 group-hover:text-sky-600 transition-colors duration-200" />
                <span className="text-sm text-gray-600 group-hover:text-sky-700 transition-colors duration-200">Settings</span>
              </Link>

              <button 
                onClick={handleLogout}
                className="group flex flex-col items-center px-2 py-1 rounded-md hover:bg-sky-50 transition-colors duration-200"
              >
                <SiLoopback className="h-6 w-6 text-sky-500 group-hover:text-sky-600 transition-colors duration-200" />
                <span className="text-sm text-gray-600 group-hover:text-sky-700 transition-colors duration-200">Logout</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-sky-500 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 transition-all duration-200"
            >
              {menuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-lg mx-4 mt-2 overflow-hidden animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              />
              <IoSearchCircleSharp className="absolute left-3 top-2.5 h-5 w-5 text-sky-400" />
            </div>

            <Link
              to="/mylinks"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <BsPeopleFill className="mr-3 h-5 w-5 text-sky-500" />
              My Links
            </Link>

            <Link
              to="/notifications"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <RiNotification2Fill className="mr-3 h-5 w-5 text-sky-500" />
              Notifications
            </Link>

            <Link
              to="/announcement"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <RiSettings5Fill className="mr-3 h-5 w-5 text-sky-500" />
              Announcements
            </Link>

            <Link
              to="/settings"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <RiSettings5Fill className="mr-3 h-5 w-5 text-sky-500" />
              Settings
            </Link>

            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-colors duration-200"
            >
              <SiLoopback className="mr-3 h-5 w-5 text-sky-500" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;