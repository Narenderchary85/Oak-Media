import React from 'react';
import { PiChatCircleFill } from "react-icons/pi";
import proimg from '../assets/pro-img.avif';
import {Link} from 'react-router';

const RightSection = () => {
  return (
    <div className="w-150 mt-3 h-full  lg:w-500 md:w-0 lg:ml-10 mt-15 mr-10 lg:h-full rounded-[20px] relative">
      <div className='w-130 h-130 bg-white rounded-[20px] relative'>
        <input type="text" placeholder='Search Chat' className='border-none focus:outline-none 
        rounded-[17px] bg-gray-200 w-125 h-15 mt-3 ml-2 pl-15 text-lg font-[400] object-cover '/>
        <div className='absolute top-5 left-5'><PiChatCircleFill className='w-10 h-10 text-orange-500'/></div>
        <Link to='/mychat'>
        <div className='flex h-25 w-122 ml-4 mt-5 relative bg-gray-100 rounded-[15px]'> 
            <img src={proimg} alt="" className='h-30 w-30 lg:w-20 lg:h-20 rounded-full ml-4 mt-2'/>
            <div className='mt-5 ml-5 text-[27px] font-[500] lg:text-lg lg:font-bold lg:mt-4 lg:-3'>King</div>
            <div className='top-15 left-39 text-[20px] lg:text-lg lg:font-light absolute lg:top-11 lg:left-29'>Full Stack dveloper</div>
        </div>
        </Link>
      </div>
      <div className='text-[25px] font-[500] text-gray-600 ml-5 mt-5'>Suggested Friends</div>
      <div>
        <div className='w-130 h-35 bg-white rounded-[20px] ml-1 mt-5 flex relative'> 
            <img src={proimg} alt="" className='h-30 w-30 lg:w-25 lg:h-25 rounded-full ml-4 mt-4'/>
            <div className='mt-5 ml-5 text-[27px] font-[500] lg:text-[25px]  lg:mt-4 lg:'>King</div>
            <div className='top-15 left-39 text-[37px] lg:text-lg lg:font-light absolute lg:top-15 lg:left-34'>Full Stack dveloper</div>
            <div className='w-25 h-12 text-[25px] lg:w-22 lg:h-12 flex justify-center items-center rounded-[10px] top-5 right-10
            font-bold lg:text-[20px] text-white absolute lg:top-5 lg:right-5 bg-orange-500 cursor-pointer' >Connect</div>
        </div>
      </div>
    </div>
  )
}

export default RightSection
