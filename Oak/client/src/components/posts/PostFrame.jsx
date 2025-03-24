import React, { useState } from 'react';
import { FaVideo } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { CgEventbrite } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";
import { PiTagChevronFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import profileimg from '../../assets/profileimg.avif';
import { useDispatch, useSelector } from 'react-redux';
import { popPost, uploadPost } from '../../storeReducx/actionReudcer';

const PostFrame = () => {
    const open = useSelector(state => state.posts.open);
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [post,setPost]=useState({
        desc:'',
        image:''
    })
    const token=localStorage.getItem('token');
    const user=useSelector(state=>state.users.user)

    const handleFile = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
          setFile(URL.createObjectURL(selectedFile));  
          setPost({
              ...post,
              image: selectedFile, 
          });
      }
  };
  

    const submitHandler = () => {
      if (!post.desc && !file) {
          alert("Please enter a description or upload an image.");
          return;
      }
      const postData = {
          desc: post.desc,
          image: post.image,  
      };
      dispatch(uploadPost(token, postData));
      setPost({
          desc: ' ',
          image: '',
      });
      setFile(null);
  };


    return (
        <div className='h-auto w-full rounded-[20px] bg-white mt-5 lg:mt-0'>
            <div className='w-full lg:w-220 mt-5 h-45 bg-white rounded-[20px] lg:mt-5 relative flex sticky 
             border-2 border-gray-200' onClick={()=>dispatch(popPost(true))}>
             {
              user.map((use)=>(
                <img src={use.profilePicture ? `http://localhost:1000${use.profilePicture}` : profileimg} alt=""  className='w-20 h-20 rounded-full top-5 left-4 absolute'/>
              ))
             }
              <input type="text" className='border-none w-90 focus:outline-none focus:ring-2 focus:ring-orange-400 absolute top-5 
              left-30 lg:w-160 h-20 bg-gray-200 rounded-[20px] p-4' placeholder='Post' name='desc' onChange={(e)=>setPost({
                ...post,
                [e.target.name]:e.target.value
              })}/>
              <div className='flex w-25 h-10 rounded-[10px] left-2 bg-red-200 justify-center items-center absolute top-28 lg:left-15 cursor-pointer'>
                <FaVideo className='text-red-500 mr-2'/>  Video
              </div>
              <div className='flex w-25 h-10 rounded-[10px] bg-green-200 justify-center items-center absolute top-28 left-28 lg:left-45 cursor-pointer'>
                <MdPhotoSizeSelectActual className='text-green-500 mr-2 cursor-pointer'/> <div className='cursor-pointer'>Photos</div>
                <input type="file" className='absolute w-full h-full opacity-0 cursor-pointer' onChange={handleFile}/>
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
              <div className='absolute top-7 right-10 w-17 h-17 rounded-full bg-orange-500 flex 
                                justify-center items-center cursor-pointer' onClick={()=>submitHandler()}>
                <IoSend className='w-8 h-8 text-white ml-1'/></div>
            </div>
            {file && (
                <div className="mt-5 w-full flex justify-center pb-5">
                    <img 
                        src={typeof file === "string" ? file : URL.createObjectURL(file)} 
                        alt="Uploaded Preview" 
                        className="max-w-full max-h-[400px] object-contain rounded-[20px]" 
                        name="image"
                        onChange={(e)=>setPost({
                            ...post,
                            image:e.target.value
                        })}
                    />
                </div>
            )}
        </div>
    );
};

export default PostFrame;
