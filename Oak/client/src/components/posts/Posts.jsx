import React from 'react';
import profileimg from '../../assets/profileimg.avif';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import { allposts } from '../../storeReducx/actionReudcer';

const Posts = () => {
    const posts = useSelector(state => state.posts.allposts);
    const users = useSelector(state => state.users.allusers);
    const usersId=localStorage.getItem('userId');
    const filteredPosts = posts.filter(post => post.userId !== usersId);
    const dispatch=useDispatch()

    const formatTimeAgo = (timestamp) => {
        return moment(timestamp).fromNow();
    };

    const handleLike = async (postId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `http://localhost:1000/post/likePost/${postId}`,
                {}, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            dispatch(allposts())
        } catch (error) {
            console.error("Error liking post:", error.response?.data || error.message);
        }
    };
    

    return (
        <div className='flex flex-col'>
            {filteredPosts.map((post) => {
                const postUser = users.find(user => user._id.toString() === post.userId);
                const isLiked =post.likes.includes(usersId)
                console.log(isLiked)

                return (
                    <div 
                        key={post._id} 
                        className='w-150 h-190 lg:w-220 lg:h-200 bg-white mt-7 rounded-[20px] relative border-2 border-gray-200'
                    >
                        <img 
                            src={postUser && postUser.profilePicture ? `http://localhost:1000${postUser.profilePicture}` : profileimg} 
                            alt="User Profile" 
                            className='w-20 h-20 rounded-full top-5 left-6 absolute cursor-pointer'
                        />
                        <div className='text-[22px] font-[500] mt-7 ml-35 flex'>
                            {post.username}
                            <div className='text-[15px] font-[400] text-gray-500 mt-1 ml-5'>
                                {formatTimeAgo(post.createdAt)}
                            </div>
                        </div>
                        <div className='text-[18px] font-[400] mt-1 ml-35'>{post.desc}</div>
                        <div>
                            <img 
                                src={post.image ? `http://localhost:1000${post.image}` : profileimg} 
                                alt="Post Image" 
                                className='w-135 lg:w-200 lg:h-155 mt-7 ml-9 rounded-[20px]'
                            />
                        </div>
                        <div className='flex'>
                            <div className='w-40 h-8 mt-3 ml-12 cursor-pointer flex items-center' onClick={()=>handleLike(post._id)}>
                                <AiOutlineLike className={`w-8 h-8 ${post.likes.includes(usersId)? 'text-blue-500' : ''}`}/>
                                <div className='text-[20px] font-[400] text-gray-700 ml-2'>{post.likes.length} Likes</div>
                            </div>
                            <div className='w-40 h-8 mt-4 ml-10 cursor-pointer flex items-center'>
                                <FaRegCommentAlt className='w-7 h-7'/>
                                <div className='text-[20px] font-[400] text-gray-700 ml-2'>100 Likes</div>
                            </div>
                            <div className='w-40 h-8 mt-4 ml-10 cursor-pointer flex items-center'>
                                <PiShareFat className='w-7 h-7'/>
                                <div className='text-[20px] font-[400] text-gray-700 ml-2'>100 Likes</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;
