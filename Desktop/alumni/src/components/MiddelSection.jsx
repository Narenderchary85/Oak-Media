import React from 'react';
import profileimg from '../assets/profileimg.avif';
import { FaVideo } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { CgEventbrite } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";
import { PiTagChevronFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const MiddelSection = () => {
  return (
    <div className="w-full lg:w-800 h-full bg-custom-gray lg:ml-10 mt-15 rounded-[20px] md:w-400  sm:top-0">
      <div className='w-full lg:w-220 h-40 bg-white mt-15 rounded-[20px] lg:mt-0 relative mb-1'>
        <div className='absolute border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
        <hr className="w-0.5 h-30 ml-40 lg:ml-40 bg-orange-200 lg:ml-48 mt-2 mb-3 absolute top-3 md:ml-37" />
        <div className='flex w-100 lg:w-168 h-30 mt-5 overflow-x-auto whitespace-nowrap absolute left-50 custom-scroll'>
        <div className="flex space-x-4">
        <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
        <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
        <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
        <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
        <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
        </div>
        </div>
      </div>
      <div className='w-full lg:w-220 mt-5 h-40 bg-white rounded-[20px] lg:mt-5 relative flex sticky'>
        <img src={profileimg} alt=""  className='w-20 h-20 rounded-full top-5 left-4 absolute'/>
        <input type="text" className='border-none w-90 focus:outline-none absolute top-5 
        left-30 lg:w-160 h-20 bg-gray-200 rounded-[20px] p-4' placeholder='Post'/>
        <div className='flex w-25 h-10 rounded-[10px] left-2 bg-red-200 justify-center items-center absolute top-28 lg:left-15 cursor-pointer'>
          <FaVideo className='text-red-500 mr-2'/>  Video
        </div>
        <div className='flex w-25 h-10 rounded-[10px] bg-green-200 justify-center items-center absolute top-28 left-28 lg:left-45 cursor-pointer'>
          <MdPhotoSizeSelectActual className='text-green-500 mr-2'/> Photos
        </div>
        <div className='flex w-25 h-10 rounded-[10px] bg-blue-200 justify-center items-center absolute top-28 left-54 lg:left-75 cursor-pointer'>
          <CgEventbrite className='text-blue-500 mr-2'/> Events
        </div>
        <div className='flex w-40 lg:w-45 h-10 rounded-[10px] bg-orange-200 justify-center items-center absolute top-28 left-80 lg:left-105 cursor-pointer'>
          <GrAnnounce className='text-orange-500 mr-2'/> Announcements
        </div>
        <div className='flex w-25 h-10 rounded-[10px] bg-purple-200 justify-center items-center absolute top-28 left-122 lg:left-155 cursor-pointer'>
          <PiTagChevronFill className='text-purple-500 mr-2'/> Tag
        </div>
        <div className='absolute top-7 right-10 w-17 h-17 rounded-full bg-orange-500 flex justify-center items-center cursor-pointer'>
          <IoSend className='w-8 h-8 text-white ml-1'/></div>
      </div>

      <div className='flex flex-col '>
          <div className='w-150 h-190  lg:w-220 lg:h-200 bg-white mt-5 rounded-[20px] relative '>
            <img src={profileimg} alt=""  className='w-20 h-20 rounded-full top-5 left-6 absolute cursor-pointer'/>
            <div className='text-[22px] font-[500] mt-7 ml-35 flex'>Jack Zack 
              <div className='text-[15px] font-[400] mt-1 ml-5'>.1 hr ago</div>
            </div>
            <div className='text-[18px] font-[400] mt-1 ml-35'>Description</div>
            <div>
              <img src={profileimg} alt="" className='w-135  lg:w-200 lg:h-155 mt-7 ml-9 rounded-[20px]'/>
            </div>
            <div className='flex'>
            <div className='w-8 h-8 mt-3 ml-12 cursor-pointer'><AiOutlineLike className='w-8 h-8 '/></div>
            <div className='w-8 h-8 mt-4 ml-20 cursor-pointer'><FaRegCommentAlt className='w-7 h-7'/></div>
            <div className='w-8 h-8 mt-4 ml-20 cursor-pointer'><PiShareFat className='w-7 h-7'/></div>
            </div>
          </div>
          <div className='w-150 h-190  lg:w-220 lg:h-200 bg-white mt-5 rounded-[20px] relative '>
            <img src={profileimg} alt=""  className='w-20 h-20 rounded-full top-5 left-6 absolute'/>
            <div className='text-[22px] font-[500] mt-7 ml-35 flex'>Jack Zack 
              <div className='text-[15px] font-[400] mt-1 ml-5'>.1 hr ago</div>
            </div>
            <div className='text-[18px] font-[400] mt-1 ml-35'>Description</div>
            <div>
              <img src={profileimg} alt="" className='w-135  lg:w-200 lg:h-155 mt-7 ml-9 rounded-[20px]'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MiddelSection
