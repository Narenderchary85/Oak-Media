import React, { useState } from 'react';
import { FaVideo, FaImage } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { PiTagChevronFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import profileimg from '../../assets/profileimg.avif';
import { useDispatch, useSelector } from 'react-redux';
import { popPost, uploadPost } from '../../storeReducx/actionReudcer';

const PostFrame = () => {
    const open = useSelector(state => state.posts.open);
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [post, setPost] = useState({
        desc: '',
        image: ''
    });
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.users.user);

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
            desc: '',
            image: '',
        });
        setFile(null);
    };

    return (
        <div className='w-full bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-100'>
            <div className='flex items-start space-x-3 mb-4'>
                {user.map((use) => (
                    <div key={use._id} className='flex-shrink-0'>
                        <img 
                            src={use.profilePicture ? `http://localhost:1000${use.profilePicture}` : profileimg} 
                            alt="Profile" 
                            className='w-12 h-12 rounded-full border-2 border-blue-100 object-cover'
                        />
                    </div>
                ))}
                
                <div className='flex-1'>
                    <textarea 
                        className='w-full bg-gray-50 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none'
                        placeholder="What's on your mind?"
                        rows="2"
                        name='desc'
                        value={post.desc}
                        onChange={(e) => setPost({
                            ...post,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>
            </div>

            {file && (
                <div className="mb-4 w-full flex justify-center">
                    <img 
                        src={typeof file === "string" ? file : URL.createObjectURL(file)} 
                        alt="Uploaded Preview" 
                        className="max-w-full max-h-80 object-contain rounded-lg border border-gray-200" 
                    />
                </div>
            )}       

            <div className='flex items-center justify-between border-t border-gray-100 pt-3'>
                <div className='flex space-x-2'>
                    <button 
                        className='flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-600 font-medium text-sm'
                        onClick={() => dispatch(popPost(true))}
                    >
                        <FaVideo className='text-red-500 text-lg' />
                        <span>Video</span>
                    </button>
                    <label className='flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-600 font-medium text-sm cursor-pointer'>
                        <FaImage className='text-green-500 text-lg' />
                        <span>Photo</span>
                        <input 
                            type="file" 
                            className='hidden' 
                            onChange={handleFile}
                            accept="image/*"
                        />
                    </label>

                    <button className='flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-600 font-medium text-sm'>
                        <MdEvent className='text-blue-500 text-lg' />
                        <span>Event</span>
                    </button>

                    <button className='flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-orange-50 text-gray-600 font-medium text-sm'>
                        <IoMdNotifications className='text-orange-500 text-lg' />
                        <span>Announce</span>
                    </button>

                    <button className='flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-purple-50 text-gray-600 font-medium text-sm'>
                        <PiTagChevronFill className='text-purple-500 text-lg' />
                        <span>Tag</span>
                    </button>
                </div>

                <button 
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${post.desc || file ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'} transition-colors duration-200`}
                    onClick={submitHandler}
                    disabled={!post.desc && !file}
                >
                    <IoSend className='text-white text-xl' />
                </button>
            </div>
        </div>
    );
};

export default PostFrame;