import React from 'react'
import bgimg from '../../assets/de_bg_image.png';
import profileimg from '../../assets/profileimg.avif';
import { FaVideo } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { CgEventbrite } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";
import { PiTagChevronFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import { PiGridNineLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { PiOctagonThin } from "react-icons/pi";

const ProfileMiddle = () => {
  return (
    <div className='overflow-y-auto whitespace-nowrap lg:h-230 custom-scroll'>
        <div className=' w-150 h-70  ml-6 lg:ml-5 mt-9  lg:w-250 lg:h-110 bg-coustom-gray rounded-[15px] relative'>
        <img src={bgimg} alt="" className='w-140 h-50 ml-3  lg:w-250 lg:h-70 rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
        <div className='w-130 h-50 ml-10 top-30 lg:w-220 lg:h-60 bg-white absolute lg:top-40 lg:left-10 rounded-[15px]'>
        <div className='w-80 h-30 ml-45 mt-3 lg:w-130 lg:h-25 lg:ml-70 mt-3 flex relative'>
            <div className='text-[23px] mt-2 font-[500] lg:text-[30px] lg:font-[500]'>Burger cafe</div>
            <div className='w-30 h-10 bg-gray-300 ml-10 rounded-[10px] lg:ml-10 flex mt-3 text-orange-500 cursor-pointer
             justify-center items-center text-[18px] font-[500]'>Edit profile</div>
              <div className='hidden lg:block w-30 h-10 bg-gray-300 rounded-[10px] lg:ml-10 flex mt-3 text-orange-500
             justify-center items-center text-[18px] font-[500] cursor-pointer'>View profile</div>
              <div className='lg:w-130 lg:h-30 absolute lg:ml-70 top-15 right-0'>
                <div className='text-[23px] font-[400] text-gray-500'>Senior Full Stack Developer</div>
                <div className='flex mt-5'>
                  <div className='text-[20px] lg:text-[25px] font-[600]'>0</div>
                  <div className='text-[20px] lg:text-[25px] font-[400] ml-2 text-gray-500'>posts</div>
                  <div className='text-[20px] lg:text-[25px] font-[600] ml-5 lg:ml-7 '>0</div>
                  <div className='text-[20px] lg:text-[25px] font-[400] ml-2 text-gray-500'>Followers</div>
                  <div className='text-[20px] lg:text-[20px] lg:text-[25px] font-[600] ml-5 lg:ml-7'>0</div>
                  <div className='text-[20px] lg:text-[25px] font-[400] ml-2 text-gray-500'>Following</div>
                </div>
              </div>
          </div>
          <div className='flex justify-center items-center w-20 h-20 bottom-6 left-12
           lg:w-25 lg:h-25 bg-gray-200 rounded-full text-[50px] text-gray-500 font-[500] 
          absolute lg:top-32 lg:left-23 border-3 border-gray-300'>
            <div className='mb-3 mr-1'>+</div>
          </div>
        </div>
        <div className='absolute w-35 h-35 top-15 left-15 lg:w-52 lg:h-50 rounded-full lg:top-20 lg:left-30 border-5 border-white'>
          <img src={profileimg} alt="" className='w-35 h-33  lg:w-52 lg:h-50 rounded-full'/>
        </div>
       </div>
             <div className='w-full lg:w-250 mt-17 h-45 bg-white border-2 border-gray-200 rounded-[20px] lg:mt-0 relative flex sticky lg:ml-9'>
               <img src={profileimg} alt=""  className='w-20 h-20 rounded-full top-5 left-4 absolute'/>
               <input type="text" className='border-none w-90 focus:outline-none absolute top-5 
               left-30 lg:w-180 h-20 bg-gray-200 rounded-[20px] p-4' placeholder='Post'/>
               <div className='flex w-25 h-10 rounded-[10px] left-2 bg-red-200 justify-center items-center absolute top-28 lg:left-30 cursor-pointer'>
                 <FaVideo className='text-red-500 mr-2'/>  Video
               </div>
               <div className='flex w-25 h-10 rounded-[10px] bg-green-200 justify-center items-center absolute top-28 left-28 lg:left-60 cursor-pointer'>
                 <MdPhotoSizeSelectActual className='text-green-500 mr-2'/> Photos
               </div>
               <div className='flex w-25 h-10 rounded-[10px] bg-blue-200 justify-center items-center absolute top-28 left-54 lg:left-90 cursor-pointer'>
                 <CgEventbrite className='text-blue-500 mr-2'/> Events
               </div>
               <div className='flex w-40 lg:w-45 h-10 rounded-[10px] bg-orange-200 justify-center items-center absolute top-28 left-80 lg:left-120 cursor-pointer'>
                 <GrAnnounce className='text-orange-500 mr-2'/> Announcements
               </div>
               <div className='flex w-25 h-10 rounded-[10px] bg-purple-200 justify-center items-center absolute top-28 left-122 lg:left-170 cursor-pointer'>
                 <PiTagChevronFill className='text-purple-500 mr-2'/> Tag
               </div>
               <div className='absolute top-7 right-10 w-17 h-17 rounded-full bg-orange-500 flex justify-center items-center cursor-pointer'>
                 <IoSend className='w-8 h-8 text-white ml-1'/></div>
             </div>
             <hr className='w-146 mt-5 ml-5 lg:w-250 text-gray-400 lg:ml-10 lg:mt-8'/>
             <div className='w-148 lg:w-250 lg:h-auto bg-white rounded-[20px] lg:ml-9 lg:mt-8 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 p-4'>
                <div className='col-span-2 p-3 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <PiGridNineLight className='w-8 h-8 text-orange-500'/>
                        <div className='text-[20px] ml-2 font-[500] text-gray-600'>Posts</div>
                    </div>
                    <div className='flex items-center'>
                        <CiBookmark className='w-7 h-7 text-orange-500'/>
                        <div className='text-[20px] ml-2 font-[500] text-gray-600'>Saved</div>
                    </div>
                    <div className='flex items-center'>
                        <PiOctagonThin className='w-7 h-7 text-orange-500'/>
                        <div className='text-[20px] ml-2 font-[500] text-gray-600'>Tagged</div>
                    </div>
                </div>

                <div className='border-2 border-gray-300 h-140 lg:w-full bg-white mt-5 rounded-[20px] relative p-5'>
                    <img src={profileimg} alt="" className='w-15 h-15 rounded-full absolute top-5 left-6'/>
                    <div className='text-[22px] font-[500] mt-7 ml-20 flex'>
                        Jack Zack 
                        <div className='text-[15px] font-[400] mt-1 ml-5'>.1 hr ago</div>
                    </div>
                    <div className='text-[18px] font-[400] mt-1 ml-20'>Description</div>
                    <div>
                        <img src={profileimg} alt="" className='w-full lg:w-99 lg:h-95 mt-5 rounded-[20px]'/>
                    </div>
                </div>

                <div className='border-2 border-gray-300 h-140 lg:w-full bg-white mt-5 rounded-[20px] relative p-5'>
                    <img src={profileimg} alt="" className='w-15 h-15 rounded-full absolute top-5 left-6'/>
                    <div className='text-[22px] font-[500] mt-7 ml-20 flex'>
                        Jack Zack 
                        <div className='text-[15px] font-[400] mt-1 ml-5'>.1 hr ago</div>
                    </div>
                    <div className='text-[18px] font-[400] mt-1 ml-20'>Description</div>
                    <div>
                        <img src={profileimg} alt="" className='w-full lg:w-99 lg:h-95 mt-5 rounded-[20px]'/>
                    </div>
                </div>
                <div className='border-2 border-gray-300 h-140 lg:w-full bg-white mt-5 rounded-[20px] relative p-5'>
                    <img src={profileimg} alt="" className='w-15 h-15 rounded-full absolute top-5 left-6'/>
                    <div className='text-[22px] font-[500] mt-7 ml-20 flex'>
                        Jack Zack 
                        <div className='text-[15px] font-[400] mt-1 ml-5'>.1 hr ago</div>
                    </div>
                    <div className='text-[18px] font-[400] mt-1 ml-20'>Description</div>
                    <div>
                        <img src={profileimg} alt="" className='w-full lg:w-99 lg:h-95 mt-5 rounded-[20px]'/>
                    </div>
                </div>
                <div className='border-2 border-gray-300 h-140 lg:w-full bg-white mt-5 rounded-[20px] relative p-5'>
                    <img src={profileimg} alt="" className='w-15 h-15 rounded-full absolute top-5 left-6'/>
                    <div className='text-[22px] font-[500] mt-7 ml-20 flex'>
                        Jack Zack 
                        <div className='text-[15px] font-[400] mt-1 ml-5'>.1 hr ago</div>
                    </div>
                    <div className='text-[18px] font-[400] mt-1 ml-20'>Description</div>
                    <div>
                        <img src={profileimg} alt="" className='w-full lg:w-99 lg:h-95 mt-5 rounded-[20px]'/>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ProfileMiddle
