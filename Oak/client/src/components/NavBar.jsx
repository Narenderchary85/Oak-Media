import React, { useState } from 'react';
import {Link} from 'react-router';
import { SiLoop } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { RiNotification2Fill, RiSettings5Fill } from "react-icons/ri";
import { SiLoopback } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex w-[98%] h-20 bg-white ml-3 mt-3 rounded-[20px] absolute top-0 items-center justify-between px-5">
        <Link to='/'><SiLoop className="w-15 h-15 text-orange-500" /></Link>
        <div className="relative flex items-center">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-100 pl-15 lg:ml-50 lg:w-220 h-14 border-none rounded-[15px] text-[20px] focus:outline-none bg-gray-200 object-cover"
          />
          <IoSearchCircleSharp className="w-10 h-10 text-orange-500 absolute left-3 lg:left-52" />
        </div>
        <div className="hidden lg:flex space-x-10">
          <Link to='/mylinks'>
            <div className="flex flex-col items-center cursor-pointer">
              <BsPeopleFill className="w-7 h-7" />
              <div className="text-[17px] font-bold">My Links</div>
            </div>
          </Link>
          <Link to='/notifications'>
            <div className="flex flex-col items-center cursor-pointer">
              <RiNotification2Fill className="w-7 h-7" />
              <div className="text-[17px] font-bold">Notifications</div>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer">
            <RiSettings5Fill className="w-7 h-7" />
            <div className="text-[17px] font-bold">Settings</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <SiLoopback className="w-7 h-7" />
            <div className="text-[17px] font-bold">Create</div>
          </div>
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu className="w-8 h-8 text-gray-600 cursor-pointer" />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-20 right-5 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
          <div className="flex flex-col space-y-3">
            <Link to='/mylinks'>
            <div className="flex items-center space-x-2 cursor-pointer">
              <BsPeopleFill className="w-6 h-6" />
              <span>My Links</span>
            </div>
            </Link>
            <Link to='/notifications'>
            <div className="flex items-center space-x-2 cursor-pointer">
              <RiNotification2Fill className="w-6 h-6" />
              <span>Notifications</span>
            </div>
            </Link>
            <div className="flex items-center space-x-2 cursor-pointer">
              <RiSettings5Fill className="w-6 h-6" />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <SiLoopback className="w-6 h-6" />
              <span>Create</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
