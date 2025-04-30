// import React, { useState } from 'react';
// import {Link, Navigate} from 'react-router';
// import { SiLoop } from "react-icons/si";
// import { BsPeopleFill } from "react-icons/bs";
// import { RiNotification2Fill, RiSettings5Fill } from "react-icons/ri";
// import { SiLoopback } from "react-icons/si";
// import { IoSearchCircleSharp } from "react-icons/io5";
// import { FiMenu } from "react-icons/fi"; 

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const handlerLogout=(prop)=>{
//     if(prop===false){
//       localStorage.removeItem("token")
//       console.log("logout successfully")
//       return <Navigate to='/sign'/>
//     }
//   }

//   return (
//     <div>
//       <div className="flex w-[98%] h-20 bg-white ml-3 mt-3 rounded-[20px] absolute top-0 items-center justify-between px-5">
//         <Link to='/'></Link>
//         <div className='flex'>
//           <SiLoop className="w-15 h-15 text-orange-500 animate-pulse " />
//           <div className="hidden lg:block text-4xl font-bold bg-gradient-to-r from-orange-400 
//                           to-red-500 bg-clip-text text-transparent justify-inline mt-4 ml-1
//           ">ak-Media</div>
//         </div>
//         <div className="relative flex items-center mr-12">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             className="w-100 pl-15 lg:ml-0 lg:mr-5 lg:w-220 h-14 border-none rounded-[15px] text-[20px] 
//             focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-200 object-cover"
//           />
//           <IoSearchCircleSharp className="w-10 h-10 text-orange-500 absolute left-3 lg:left-3" />
//         </div>
//         <div className="hidden lg:flex space-x-10">
//           <Link to='/mylinks'>
//             <div className="flex flex-col items-center cursor-pointer">
//               <BsPeopleFill className="w-9 h-9 text-orange-500" />
//               <div className="text-[17px] text-gray-500 font-[400]">My Links</div>
//             </div>
//           </Link>
//           <Link to='/notifications'>
//             <div className="flex flex-col items-center cursor-pointer">
//               <RiNotification2Fill className="w-9 h-9 text-orange-500" />
//               <div className="text-[17px] text-gray-500 font-[400]">Notifications</div>
//             </div>
//           </Link>
//           <div className="flex flex-col items-center cursor-pointer">
//             <RiSettings5Fill className="w-9 h-9 text-orange-500" />
//             <div className="text-[17px] text-gray-500 font-[400]">Settings</div>
//           </div>
//           <div className="flex flex-col items-center cursor-pointer" onClick={()=>handlerLogout(false)}>
//             <SiLoopback className="w-9 h-9 text-orange-500" />
//             <div className="text-[17px] text-gray-500 font-[400]" >Logout</div>
//           </div>
//         </div>
//         <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           <FiMenu className="w-8 h-8 text-gray-600 cursor-pointer" />
//         </button>
//       </div>
//       {menuOpen && (
//         <div className="absolute top-20 right-5 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
//           <div className="flex flex-col space-y-3">
//             <Link to='/mylinks'>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <BsPeopleFill className="w-6 h-6" />
//               <span>My Links</span>
//             </div>
//             </Link>
//             <Link to='/notifications'>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <RiNotification2Fill className="w-6 h-6" />
//               <span>Notifications</span>
//             </div>
//             </Link>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <RiSettings5Fill className="w-6 h-6" />
//               <span>Settings</span>
//             </div>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <SiLoopback className="w-6 h-6" />
//               <span>Create</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;

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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200"
                />
                <IoSearchCircleSharp className="absolute left-3 top-2.5 h-5 w-5 text-sky-400" />
              </div>

              {/* Navigation Links */}
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

          {/* Mobile menu button */}
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

      {/* Mobile Menu */}
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