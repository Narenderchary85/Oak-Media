// import React from 'react';
// import { SiLoop } from "react-icons/si";
// import { GoHomeFill } from "react-icons/go";
// import { MdNotificationsActive } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";
// import { TbMessageCircleFilled } from "react-icons/tb";
// import { IoPeopleSharp } from "react-icons/io5";
// import {Link} from 'react-router'

// const SideBar = () => {
//   return (
//     <div className='hidden lg:block border-2 border-gray-200 lg:w-85 lg:h-200 bg-white ml-5 mt-8 rounded-[15px]'>
//     <Link to='/'>
//     <div className='flex'>
//       <SiLoop className="w-18 h-18 text-orange-500 mt-5 ml-9" />
//       <div className="hidden lg:block text-4xl font-bold bg-gradient-to-r from-orange-400 
//                           to-red-500 bg-clip-text text-transparent justify-inline mt-12 
//           ">ak-Media</div>
//     </div></Link>
//     <Link to='/'>
//     <div className='flex w-70 h-15 rounded-[10px] items-center 
//     mt-13 ml-8 cursor-pointer bg-gray-200 hover:scale-110  transition-transform duration-300 ease-in-out'>
//         <GoHomeFill className='w-10 h-10 text-orange-400 ml-2'/>
//         <div className='font-custom-fww ml-6'>Home</div>
//     </div>
//     </Link>
//     <Link>
//     <div className='flex  w-70 h-15 rounded-[10px] items-center
//      mt-13 ml-8 bg-gray-200 cursor-pointer hover:scale-110  transition-transform duration-300'>
//         <FiSearch className='w-10 h-10 text-orange-400 ml-2 '/>
//         <div className='font-custom-fww ml-6'>Search</div>
//     </div>
//     </Link>
//     <Link to='/mylinks'>
//     <div className='flex  w-70 h-15 rounded-[10px] items-center
//      mt-13 ml-8 bg-gray-200 cursor-pointer hover:scale-110  transition-transform duration-300' >
//         <IoPeopleSharp className='w-10 h-10 text-orange-400 ml-2 '/>
//         <div className='font-custom-fww ml-6'>My Links</div>
//     </div>
//     </Link>
//     <Link to='/notifications'>
//     <div className='flex  w-70 h-15 rounded-[10px] items-center
//      mt-13 ml-8 bg-gray-200 cursor-pointer hover:scale-110  transition-transform duration-300'>
//         <MdNotificationsActive className='w-10 h-10 text-orange-400 ml-2  '/>
//         <div className='font-custom-fww ml-6'>Notifications</div>
//     </div>
//     </Link>
//     <Link to='/notifications'>
//     <div className='flex  w-70 h-15 rounded-[10px] items-center
//     hover:scale-110  transition-transform duration-300 mt-13 ml-8 bg-gray-200 cursor-pointer'>
//         <TbMessageCircleFilled className='w-10 h-10 text-orange-400 ml-2  '/>
//         <div className='font-custom-fww ml-6'>Messages</div>
//     </div>
//     </Link>
// </div>
//   )
// }

// export default SideBar

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome,
  FiSearch,
  FiUsers,
  FiBell,
  FiMessageSquare,
  FiMenu,
  FiX,
  FiUser,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SiLoop } from "react-icons/si";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: <FiHome />, label: 'Home', path: '/' },
    { id: 'search', icon: <FiSearch />, label: 'Search', path: '/search' },
    { id: 'network', icon: <FiUsers />, label: 'My Network', path: '/mylinks' },
    { id: 'notifications', icon: <FiBell />, label: 'Notifications', path: '/notifications' },
    { id: 'messages', icon: <FiMessageSquare />, label: 'Messages', path: '/messages' }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button (hidden on desktop) */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-full bg-white shadow-md text-blue-500"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.div
        initial={{ width: isOpen ? 250 : 80 }}
        animate={{ 
          width: isOpen ? 250 : 80,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full bg-white z-50 flex flex-col border-r border-gray-100 overflow-hidden`}
      >
        {/* Logo/Brand Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 text-2xl"
            >
              <SiLoop />
            </motion.div>
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                >
                  ak-Media
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button 
            onClick={toggleSidebar}
            className="hidden lg:block p-1 rounded-full hover:bg-blue-50 text-gray-500"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <Link 
              to={item.path} 
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center p-3 mx-2 rounded-lg transition-colors ${
                  activeItem === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="text-xl">
                  {React.cloneElement(item.icon, {
                    className: activeItem === item.id ? 'text-blue-500' : 'text-gray-500'
                  })}
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3 font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* User Profile & Settings */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              <FiUser />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  <div className="font-medium">Your Profile</div>
                  <div className="text-xs text-gray-500">@username</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-4 flex space-x-2"
            >
              <button className="p-2 rounded-full hover:bg-blue-50 text-gray-500">
                <FiSettings />
              </button>
              <button className="p-2 rounded-full hover:bg-blue-50 text-gray-500">
                <FiLogOut />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Mobile Menu (Drawer) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl lg:hidden"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center">
                <SiLoop className="text-blue-500 text-2xl" />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  ak-Media
                </span>
              </div>
              <button onClick={toggleMobileMenu}>
                <FiX size={24} className="text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              {navItems.map((item) => (
                <Link 
                  to={item.path} 
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center p-3 rounded-lg mb-2 ${
                      activeItem === item.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-xl">
                      {React.cloneElement(item.icon, {
                        className: activeItem === item.id ? 'text-blue-500' : 'text-gray-500'
                      })}
                    </div>
                    <span className="ml-3 font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;