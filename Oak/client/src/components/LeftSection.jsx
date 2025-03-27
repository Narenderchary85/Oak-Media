import React from 'react';
import bgImage from '../assets/de_bg_image.png';
import profileimg from '../assets/profileimg.avif';
import proimg from '../assets/pro-img.avif';
import {Link} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {  toggleFollowUser } from '../storeReducx/actionReudcer.js';

const LeftSection = () => {
    const user=useSelector(state=>state.users.user);
    const allusers=useSelector(state=>state.users.allusers);
    const dispatch=useDispatch();
    const token=localStorage.getItem('token');

  return (
    <div className="w-full justify-center lg:w-250 h-200 lg:ml-8 mt-5 ">
      <Link to='/profile'>
      {
          Array.isArray(user)  && user.length>0 ?(
          user.map((use)=>(
            <div key={use._id} className="md:w-80 sm:ml-5 h-95 rounded-[20px] bg-white mt-10 relative border-2 border-gray-200">  
            <img src={bgImage} alt="background image" className=' w-200 lg:w-80 h-30 rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
            <img src={use.profilePicture ? `http://localhost:1000${use.profilePicture}` : profileimg} className='w-40 h-40 top-12 left-50 lg:w-35 lg:h-35 rounded-full 
            object-cover absolute lg:top-12 lg:left-21 md:top-12 md:left-21' alt={profileimg} />
            <div className='justify-center mt-25 ml-59 text-xl font-custom-fw lg:mt-20 lg:ml-27 md:mt-22 md:ml-27 '>{use.username}</div>
            <div className='justify-center ml-42  font-custom-fww lg:mt-2 lg:ml-10 md:mt-2 md:ml-10'>{use.desc}</div>
            <div className='relative'>
              <hr className='w-140 ml-5 lg:w-70 lg:ml-5 lg:mt-3 bg-orange-500 md:w-70 md:ml-5 md:mt-2 '/>
              <div className='mt-1 ml-35 lg:mt-2 text-lg lg:ml-15 lg:w-10 md:ml-15 md:w-10'>{Array.isArray(use.following) ? use.following.length : 0}</div>
              <div className='mt-1 ml-30 text-lg font-[500]t lg:ml-10 w-20 md:ml-10 text-orange-700'>following</div>
              <hr className="w-0.5 h-15 ml-75 bg-gray-400 lg:ml-37 mt-0 mb-2 absolute top-3 md:ml-37" />
              <div className='absolute top-2 left-110 text-lg lg:left-50 md:left-50'>{Array.isArray(use.followers) ? use.followers.length : 0}</div>
              <div className='absolute top-10 left-105 text-lg font-[500] lg:left-48 md:left-48 text-orange-700'>follower</div>
              <hr className='w-140 ml-5 mt-5 lg:w-70 lg:ml-5 lg:mt-2 bg-gray-300 md:w-70 md:ml-5 md:mt-2'/>
            </div>
          </div>
          )) 
        ):(<></>)
      }
      </Link>
      <div className='mt-5 text-[25px] ml-7 font-[500]'>Requests you have got</div>
      <div className=" lg:w-80 sm:ml-5 h-80 rounded-[20px] bg-white mt-6  relative pt-2 border-2 border-gray-200">
        {
          allusers.length > 0 ?(
            allusers.map((all)=>(
              <div className='flex h-30 w-142 ml-4 lg:w-75 lg:h-20 lg:ml-2 mt-5 relative' key={all._id}> 
              <img src={ all.profilePicture ? `http://localhost:1000${all.profilePicture}`  :proimg } alt="" className='h-30 w-30 lg:w-20 lg:h-20 rounded-full ml-4'/>
              <div className='mt-5 ml-5 text-[27px] font-[500] lg:text-lg lg:font-bold lg:mt-4 lg:-3'>{all.username}</div>
              <div className='top-15 left-39 text-[20px] lg:text-lg lg:font-light absolute lg:top-11 lg:left-28'>{all.desc}r</div>
              {
                user.map((use)=>(
                  <div className='w-27 h-15 text-[22px] lg:w-18 lg:h-10 flex justify-center items-center rounded-[20px] top-5
               right-10 hover:bg-orange-50 hover:border-3 font-bold lg:text-[16px] text-orange-500 absolute lg:top-2 
               lg:right-5 bg-white cursor-pointer border-2 border-orange-500 bottom-3' key={use._id} onClick={() => dispatch(toggleFollowUser(all._id, token, use.following?.includes(all._id)) )}>
                {use.following.includes(all._id)? 'UnLink':'Link'}
               </div>
                ))
              }
            </div>
            ))
          ):(<></>)
        }
      </div>
    </div>
  )
}

export default LeftSection

