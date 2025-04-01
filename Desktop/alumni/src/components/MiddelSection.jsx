import React from 'react';
import profileimg from '../assets/profileimg.avif';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import PostFrame from './posts/PostFrame';
import Posts from './posts/Posts';

const MiddelSection = () => {
  return (
    <div className="w-full lg:w-800 h-full bg-custom-gray lg:ml-10 mt-15 rounded-[20px] md:w-400  sm:top-0">
      <div className='w-full lg:w-220 h-40 bg-white mt-15 rounded-[20px] lg:mt-0 relative mb-1  border-2 border-gray-200'>
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
      <>
        <PostFrame/>
      </>
      <Posts/>
    </div>
  )
}

export default MiddelSection
