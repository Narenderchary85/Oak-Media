// import React from 'react';
// import profileimg from '../assets/profileimg.avif';
// import { AiOutlineLike } from "react-icons/ai";
// import { FaRegCommentAlt } from "react-icons/fa";
// import { PiShareFat } from "react-icons/pi";
// import PostFrame from './posts/PostFrame';
// import Posts from './posts/Posts';

// const MiddelSection = () => {
//   return (
//     <div className="w-full lg:w-800 h-full bg-custom-gray lg:ml-10 mt-15 rounded-[20px] md:w-400  sm:top-0">
//       <div className='w-full lg:w-220 h-40 bg-white mt-15 rounded-[20px] lg:mt-0 relative mb-1  border-2 border-gray-200'>
//         <div className='absolute border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
//         <hr className="w-0.5 h-30 ml-40 lg:ml-40 bg-orange-200 lg:ml-48 mt-2 mb-3 absolute top-3 md:ml-37" />
//         <div className='flex w-100 lg:w-168 h-30 mt-5 overflow-x-auto whitespace-nowrap absolute left-50 custom-scroll'>
//         <div className="flex space-x-4">
//         <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
//         <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
//         <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
//         <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
//         <div className='ml-5 border-1 border-gray-300 rounded-full w-30 h-30 top-5 left-5'></div>
//         </div>
//         </div>
//       </div>
//       <>
//         <PostFrame/>
//       </>
//       <Posts/>
//     </div>
//   )
// }

// export default MiddelSection
import React from 'react';
import profileimg from '../assets/profileimg.avif';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegCommentAlt, FaComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import PostFrame from './posts/PostFrame';
import Posts from './posts/Posts';

const MiddleSection = () => {
  return (
    <div className="w-full lg:w-2/3 xl:w-600 bg-custom-gray lg:ml-6 mt-4 rounded-xl mt-10">
      {/* Story/Status Creation Card */}
      <div className='w-full bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-100'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-12 h-12 rounded-full border-2 border-blue-200 overflow-hidden'>
            <img 
              src={profileimg} 
              className='w-full h-full object-cover'
              alt="Profile"
            />
          </div>
          
          <input 
            type="text" 
            placeholder="What's on your mind?"
            className='flex-1 bg-gray-50 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100'
          />
        </div>
        
        <hr className='border-gray-100 my-2' />
        
        <div className='flex justify-between px-2'>
          <button className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 font-medium'>
            <AiOutlineLike className='text-blue-500 text-xl' />
            <span className='text-sm md:text-base'>Live Video</span>
          </button>
          
          <button className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 font-medium'>
            <FaRegCommentAlt className='text-green-500 text-xl' />
            <span className='text-sm md:text-base'>Photo/Video</span>
          </button>
          
          <button className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 font-medium'>
            <PiShareFat className='text-yellow-500 text-xl' />
            <span className='text-sm md:text-base'>Feeling/Activity</span>
          </button>
        </div>
      </div>

      {/* Stories Section */}
      <div className='w-full bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-100 overflow-hidden'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='text-lg font-semibold text-gray-800'>Stories</h3>
          <button className='text-blue-500 text-sm font-medium'>See All</button>
        </div>
        
        <div className='flex space-x-3 overflow-x-auto pb-2 custom-scroll'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className='flex-shrink-0 relative'>
              <div className='w-32 h-48 rounded-xl bg-gradient-to-b from-blue-100 to-blue-200 overflow-hidden'>
                {/* Story content would go here */}
              </div>
              <div className='absolute top-2 left-2 w-10 h-10 rounded-full border-4 border-blue-500 bg-white overflow-hidden'>
                <img 
                  src={profileimg} 
                  className='w-full h-full object-cover'
                  alt="Story"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Section */}
      <div className='space-y-4'>
        <PostFrame />
        <Posts />
      </div>
    </div>
  )
}

export default MiddleSection;