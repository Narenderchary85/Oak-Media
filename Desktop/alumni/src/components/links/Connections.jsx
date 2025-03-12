import React from 'react';
import bgImage from '../../assets/de_bg_image.png';
import profileimg from '../../assets/profileimg.avif';

const Connections = () => {
  return (
    <div className='w-full h-auto lg:w-265 lg:h-230 mt-30 lg:mt-15 lg:absolute lg:left-100 
    rounded-[20px] lg:ml-5 overflow-y-auto whitespace-nowrap lg:h-230 custom-scroll'>
      <div className='w-full h-auto lg:w-265 lg:h-117 rounded-[20px] bg-white border-2 border-gray-300 relative '>
        <div className='w-full h-12 lg:w-265 lg:h-12 ml-5 mt-2 text-[25px] font-[400] text-gray-500 '>
            <div>People you know from Hyderabad</div>    
            <div className='absolute right-5 top-4 text-[20px] font-[400] text-gray-500'>Show more</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:w-258 lg:h-auto mt-2'>
                  <div className="lg:ml-5 h-95 rounded-[20px] bg-white mt-5 lg:mt-0 relative border-2 border-gray-200">  
                    <img src={bgImage} alt="background image" className=' w-200 lg:w-80 h-30 rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                    <img src={profileimg} className='w-40 sm:left-0 h-40 top-12 left-50 lg:w-35 lg:h-35 rounded-full 
                    object-cover absolute lg:top-12 lg:left-21 md:top-12 md:left-21' alt="" />
                    <div className='justify-center mt-25 ml-59 text-xl font-custom-fw lg:mt-20 lg:ml-27 md:mt-22 md:ml-27 '>Burger</div>
                    <div className='justify-center ml-42  font-custom-fww lg:mt-2 lg:ml-10 md:mt-2 md:ml-10'>Senior Full Stack dveloper</div>
                    <div className='flex justify-center items-center lg:w-70 ml-5 mt-5 hover:bg-orange-50 hover:border-3  
                    transition-transform duration-300    rounded-full lg:h-15 bg-white border-2 border-orange-500 text-[20px]
                     font-[500] text-orange-500'>
                        Link</div>
                  </div>
                  <div className="md:w-80 sm:ml-5 h-95 rounded-[20px] bg-white lg:mt-0 mt-5 relative border-2 border-gray-200">  
                    <img src={bgImage} alt="background image" className=' w-200 lg:w-80 h-30 rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                    <img src={profileimg} className='w-40 h-40 top-12 left-50 lg:w-35 lg:h-35 rounded-full 
                    object-cover absolute lg:top-12 lg:left-21 md:top-12 md:left-21' alt="" />
                    <div className='justify-center mt-25 ml-59 text-xl font-custom-fw lg:mt-20 lg:ml-27 md:mt-22 md:ml-27 '>Burger</div>
                    <div className='justify-center ml-42  font-custom-fww lg:mt-2 lg:ml-10 md:mt-2 md:ml-10'>Senior Full Stack dveloper</div>
                    <div className='flex justify-center items-center lg:w-70 ml-5 mt-5  hover:bg-orange-50 hover:border-3  
                    transition-transform duration-300 
                     rounded-full lg:h-15 bg-white border-2 border-orange-500 text-[20px] font-[500] text-orange-500'>
                        Link</div>
                  </div>
                  <div className="md:w-80 sm:ml-5 h-95 rounded-[20px] bg-white lg:mt-0 mt-5 relative border-2 border-gray-200">  
                    <img src={bgImage} alt="background image" className=' w-200 lg:w-80 h-30 rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                    <img src={profileimg} className='w-40 h-40 top-12 left-50 lg:w-35 lg:h-35 rounded-full 
                    object-cover absolute lg:top-12 lg:left-21 md:top-12 md:left-21' alt="" />
                    <div className='justify-center mt-25 ml-59 text-xl font-custom-fw lg:mt-20 lg:ml-27 md:mt-22 md:ml-27 '>Burger</div>
                    <div className='justify-center ml-42  font-custom-fww lg:mt-2 lg:ml-10 md:mt-2 md:ml-10'>Senior Full Stack dveloper</div>
                    <div className='flex justify-center items-center lg:w-70 ml-5 mt-5  hover:bg-orange-50 hover:border-3  
                    transition-transform duration-300 rounded-full lg:h-15 bg-white border-2 border-orange-500 text-[20px] 
                    font-[500] text-orange-500 cursor-pointer'>
                        Link</div>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Connections
