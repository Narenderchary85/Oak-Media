import React from 'react';
import { SiLoop } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { MdNotificationsActive } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import {Link} from 'react-router'

const SideBar = () => {
  return (
    <div className='hidden lg:block border-2 border-gray-200 lg:w-85 lg:h-200 bg-white ml-5 mt-8 rounded-[15px]'>
    <Link to='/'><SiLoop className="w-20 h-20 text-orange-500 mt-5 ml-9" /></Link>
    <Link to='/'>
    <div className='flex w-70 h-15 rounded-[10px] items-center 
    mt-13 ml-8 cursor-pointer bg-gray-200 hover:scale-110  transition-transform duration-300 ease-in-out'>
        <GoHomeFill className='w-10 h-10 text-orange-400 ml-2'/>
        <div className='font-custom-fww ml-6'>Home</div>
    </div>
    </Link>
    <Link>
    <div className='flex  w-70 h-15 rounded-[10px] items-center
     mt-13 ml-8 bg-gray-200 cursor-pointer hover:scale-110  transition-transform duration-300'>
        <FiSearch className='w-10 h-10 text-orange-400 ml-2 '/>
        <div className='font-custom-fww ml-6'>Search</div>
    </div>
    </Link>
    <Link to='/mylinks'>
    <div className='flex  w-70 h-15 rounded-[10px] items-center
     mt-13 ml-8 bg-gray-200 cursor-pointer hover:scale-110  transition-transform duration-300' >
        <IoPeopleSharp className='w-10 h-10 text-orange-400 ml-2 '/>
        <div className='font-custom-fww ml-6'>My Links</div>
    </div>
    </Link>
    <Link to='/notifications'>
    <div className='flex  w-70 h-15 rounded-[10px] items-center
     mt-13 ml-8 bg-gray-200 cursor-pointer hover:scale-110  transition-transform duration-300'>
        <MdNotificationsActive className='w-10 h-10 text-orange-400 ml-2  '/>
        <div className='font-custom-fww ml-6'>Notifications</div>
    </div>
    </Link>
    <Link to='/notifications'>
    <div className='flex  w-70 h-15 rounded-[10px] items-center
    hover:scale-110  transition-transform duration-300 mt-13 ml-8 bg-gray-200 cursor-pointer'>
        <TbMessageCircleFilled className='w-10 h-10 text-orange-400 ml-2  '/>
        <div className='font-custom-fww ml-6'>Messages</div>
    </div>
    </Link>
</div>
  )
}

export default SideBar
