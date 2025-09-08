import React from 'react';
import profileimg from '../../assets/profileimg.avif';
import { AiFillLike, AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { motion } from 'framer-motion';

const PostCard = ({
    post,
    postUser,
    isLiked,
    isSaved,
    setHoveredPost,
    formatTimeAgo,
    handleLike,
    handleSavePost,
    handleShare
}) => {
    return (
        <motion.div
            className='w-full max-w-2xl bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.01 }}
            onMouseEnter={() => setHoveredPost(post._id)}
            onMouseLeave={() => setHoveredPost(null)}
        >
            <div className='flex items-center p-4'>
                <img
                    src={postUser?.profilePicture ? `http://localhost:1000${postUser.profilePicture}` : profileimg}
                    alt="User"
                    className='w-12 h-12 rounded-full object-cover border-2 border-blue-100'
                />
                <div className='ml-3 flex-1'>
                    <div className='flex items-center'>
                        <h3 className='text-md font-semibold text-gray-800'>{post.username}</h3>
                        <span className='text-xs text-gray-500 ml-2'>{formatTimeAgo(post.createdAt)}</span>
                    </div>
                    <p className='text-sm text-gray-500'>{postUser?.desc || 'No description'}</p>
                </div>
                <button
                    className='text-gray-400 hover:text-gray-600'
                    onClick={() => handleSavePost(post._id)}
                >
                    {isSaved ? <FaBookmark className='text-yellow-500 text-xl' /> : <FaRegBookmark className='text-xl' />}
                </button>
            </div>

            <div className='px-4 pb-2'>
                <p className='text-gray-800 mb-4'>{post.desc}</p>
            </div>

            {post.image && (
                <div className='w-full bg-gray-50 flex justify-center'>
                    <img
                        src={`http://localhost:1000${post.image}`}
                        alt="Post"
                        className='max-h-96 w-auto object-contain'
                    />
                </div>
            )}

            <div className='px-4 py-2 border-t border-gray-100 flex justify-between text-sm text-gray-500'>
                <div className='flex items-center'>
                    <div className='flex items-center -space-x-2'>
                        <div className='w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs'>👍</div>
                        <div className='w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs'>❤️</div>
                    </div>
                    <span className='ml-2'>{post.likes.length} likes</span>
                </div>
                <div>
                    <span>{post.comments?.length || 0} comments</span>
                </div>
            </div>

            <div className='px-4 py-2 border-t border-gray-100 grid grid-cols-3'>
                <motion.button
                    className={`flex items-center justify-center space-x-2 py-2 rounded-lg ${isLiked ? 'text-blue-500' : 'text-gray-600'} font-medium`}
                    onClick={() => handleLike(post._id)}
                    whileTap={{ scale: 0.95 }}
                >
                    {isLiked ? (
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <AiFillLike className='text-xl' />
                        </motion.div>
                    ) : (
                        <AiOutlineLike className='text-xl' />
                    )}
                    <span>Like</span>
                </motion.button>

                <button className='flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium'>
                    <AiOutlineComment className='text-xl' />
                    <span>Comment</span>
                </button>

                <motion.button
                    className='flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium'
                    onClick={() => handleShare(post._id)}
                    whileHover={{ scale: 1.05 }}
                >
                    <PiShareFat className='text-xl' />
                    <span>Share</span>
                </motion.button>
            </div>
        </motion.div>
    );
    
};

export default PostCard;
