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

    </div>
  )
}

export default EditProfile
