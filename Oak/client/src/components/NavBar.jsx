import React, { useState } from 'react';
import {Link, Navigate} from 'react-router';
import { SiLoop } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { RiNotification2Fill, RiSettings5Fill } from "react-icons/ri";
import { SiLoopback } from "react-icons/si";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi"; 

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handlerLogout=(prop)=>{
    if(prop===false){
      localStorage.removeItem("token")
      console.log("logout successfully")
      return <Navigate to='/sign'/>
    }
  }

  return (
    <div>
      <div className="flex w-[98%] h-20 bg-white ml-3 mt-3 rounded-[20px] absolute top-0 items-center justify-between px-5">
        <Link to='/'></Link>
        <div className='flex'>
          <SiLoop className="w-15 h-15 text-orange-500" />
          <div className="hidden lg:block text-4xl font-bold bg-gradient-to-r from-orange-400 
                          to-red-500 bg-clip-text text-transparent justify-inline mt-4 ml-1
          ">ak-Media</div>
        </div>
        <div className="relative flex items-center mr-12">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-100 pl-15 lg:ml-0 lg:mr-5 lg:w-220 h-14 border-none rounded-[15px] text-[20px] 
            focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-200 object-cover"
          />
          <IoSearchCircleSharp className="w-10 h-10 text-orange-500 absolute left-3 lg:left-3" />
        </div>
        <div className="hidden lg:flex space-x-10">
          <Link to='/mylinks'>
            <div className="flex flex-col items-center cursor-pointer">
              <BsPeopleFill className="w-9 h-9 text-orange-500" />
              <div className="text-[17px] text-gray-500 font-[400]">My Links</div>
            </div>
          </Link>
          <Link to='/notifications'>
            <div className="flex flex-col items-center cursor-pointer">
              <RiNotification2Fill className="w-9 h-9 text-orange-500" />
              <div className="text-[17px] text-gray-500 font-[400]">Notifications</div>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer">
            <RiSettings5Fill className="w-9 h-9 text-orange-500" />
            <div className="text-[17px] text-gray-500 font-[400]">Settings</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={()=>handlerLogout(false)}>
            <SiLoopback className="w-9 h-9 text-orange-500" />
            <div className="text-[17px] text-gray-500 font-[400]" >Logout</div>
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
