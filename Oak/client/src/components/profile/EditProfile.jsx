import React, { useState } from 'react';
import profileimg from '../../assets/profileimg.avif';
import bgImage from '../../assets/de_bg_image.png';
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { openEdit } from '../../storeReducx/actionReudcer';

const EditProfile = () => {
    const [file,setFile]=useState(null);
    const token=localStorage.getItem('token');
    const dispatch=useDispatch();
    const user=useSelector(state=>state.users.user)

    const handlerChange=(e)=>{
        const selectedFile=e.target.files[0];
        setFile(selectedFile)
    }

    const submitHandler = async () => {
        if (!file) {
            console.error("No file selected");
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append("profilePicture", file); 
    
            const response = await axios.put(
                "http://localhost:1000/auth/update-profile",
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",  
                    }
                }
            );
    
            console.log("Response:", response.data);
        } catch (err) {
            console.error("Error:", err.response?.data || err.message);
        }
    };
    

  return (
    <div className='bg-white border-2 border-gray-200 w-115 h-210 mt-9 ml-6 rounded-[20px] relative'>
        {
            user.map((use)=>(
                <div  className="w-115 h-95 rounded-[20px] bg-white mt-0 relative">  
                <img src={bgImage} alt="background image" className=' w-200 p-2 lg:w-115 h-40 rounded-tl-[15px] rounded-tr-[15px] object-cover'/>
                <img src={use.profilePicture ? `http://localhost:1000${use.profilePicture}` : profileimg} className='w-40 h-40 top-12 left-50 lg:w-45 lg:h-45 rounded-full 
                      object-cover absolute lg:top-12 lg:left-33' alt={profileimg} />
                <div className='w-10 h-10 rounded-full bg-custom-gray flex justify-center items-center mt-2 border-1 border-orange-200 ml-70 object-cover absolute'>
                    <MdEdit className='w-7 h-7 text-orange-500 cursor-pointer'/>
                    <input type="file" className='absolute w-full h-full opacity-0 cursor-pointer' onChange={handlerChange}/>
                </div>
                </div>
            ))
        }
        <div className='flex flex-col absolute top-60'>
            <div className='ml-5 mt-2'>
                <label className='text-[20px] font-[500]'>Username</label>
                <input type="text" className='w-100 h-15 border-2 text-[25px] p-3 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-[10px] mt-2'/>
            </div>
            <div className='ml-5 mt-3'>
                <label className='text-[20px] font-[500]'>Firstname</label>
                <input type="text" className='w-100 h-15 border-2 text-[25px] border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-[10px] mt-2'/>
            </div>
            <div className='ml-5 mt-3'>
                <label className='text-[20px] font-[500]'>Lastname</label>
                <input type="text" className='w-100 h-15 border-2 text-[25px] border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-[10px] mt-2'/>
            </div>
            <div className='ml-5 mt-3'>
                <label className='text-[20px] font-[500]'>Description</label>
                <input type="text" className='w-100 h-15 border-2 text-[25px] border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-[10px] mt-2'/>
            </div>
        </div>
        <div className='w-30 h-10 bg-orange-500 rounded-[10px] flex justify-center items-center text-white text-[20px] 
                        font-[500] cursor-pointer absolute top-180 left-20' onClick={submitHandler}>
            Save
        </div>
        <div className='w-30 h-10 bg-orange-500 rounded-[10px] flex justify-center items-center text-white text-[20px] 
                        font-[500] cursor-pointer absolute top-180 left-60' onClick={()=>dispatch(openEdit(false))}>
            exit
        </div>
    </div>
  )
}

export default EditProfile
