import React from 'react';
import proimg from '../../assets/pro-img.avif';

const MiddleNot = () => {
  return (
    <div className="w-full lg:w-800 h-auto bg-custom-gray lg:ml-10 mt-15 rounded-[20px] md:w-400  sm:top-0">
      <div className='w-full lg:w-220 h-20 flex justify-center items-center bg-white mt-15 rounded-[20px] lg:mt-0 relative mb-1 border-2 border-gray-200'>
            <div className='w-20 h-10 border-3  border-orange-500 flex justify-center items-center rounded-[20px] bg-white text-[25px] font-[400]'>Job</div>
            <div className='w-30 h-10 border-3 lg:ml-10 border-orange-500 flex justify-center items-center rounded-[20px] bg-white text-[20px] font-[400]'>My Posts</div>
            <div className='w-25 h-10 border-3 lg:ml-10 border-orange-500 flex justify-center items-center rounded-[20px] bg-white text-[20px] font-[400]'>Mentions</div>
      </div>
      <div className='w-full lg:w-220 h-auto bg-white mt-15 rounded-[20px] lg:mt-0 relative lg:mt-5 border-2 lg:h-230 border-gray-200' >
            <div className='w-130 h-35 bg-white rounded-[20px] ml-1 mt-5 flex relative lg:w-210'> 
                <img src={proimg} alt="" className='h-30 w-30 lg:w-25 lg:h-25 rounded-full ml-4 mt-4'/>
                <div className='mt-5 ml-5 text-[27px] font-[500] lg:text-[25px]  lg:mt-4 lg:'>King</div>
                <div className='top-15 left-39 text-[37px] lg:text-lg lg:font-light absolute lg:top-15 lg:left-34'>Full Stack dveloper</div>
                <div className='w-25 h-12 text-[25px] lg:w-10 lg:h-10 rounded-full flex justify-center items-center rounded-[10px] top-5 right-10
                    font-bold lg:text-[20px] text-white absolute lg:top-5 lg:right-5 bg-orange-500 cursor-pointer' >...</div>
            </div>
      </div>
    </div>
  )
}

export default MiddleNot
