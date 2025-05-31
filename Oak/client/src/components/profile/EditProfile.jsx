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


    

  return (
<></>
  )
}

export default EditProfile
