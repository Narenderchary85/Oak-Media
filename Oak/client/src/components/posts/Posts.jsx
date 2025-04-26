// import React, { useState } from 'react';
// import profileimg from '../../assets/profileimg.avif';
// import { AiFillLike, AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";
// import { PiShareFat } from "react-icons/pi";
// import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
// import axios from 'axios';
// import { allposts } from '../../storeReducx/actionReudcer';
// import { motion } from 'framer-motion';

// const Posts = () => {
//     const posts = useSelector(state => state.posts.allposts);
//     const users = useSelector(state => state.users.allusers);
//     const usersId = localStorage.getItem('userId');
//     const filteredPosts = posts.filter(post => post.userId !== usersId);
//     const dispatch = useDispatch();
//     const [hoveredPost, setHoveredPost] = useState(null);
//     const [savedPosts, setSavedPosts] = useState([]);

//     const formatTimeAgo = (timestamp) => {
//         return moment(timestamp).fromNow();
//     };

//     const handleLike = async (postId) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.post(
//                 `http://localhost:1000/post/likePost/${postId}`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             dispatch(allposts());
//         } catch (error) {
//             console.error("Error liking post:", error.response?.data || error.message);
//         }
//     };

//     const handleSavePost = (postId) => {
//         if (savedPosts.includes(postId)) {
//             setSavedPosts(savedPosts.filter(id => id !== postId));
//         } else {
//             setSavedPosts([...savedPosts, postId]);
//         }
//     };

//     const handleShare = async (postId) => {
//         try {
//             if (navigator.share) {
//                 await navigator.share({
//                     title: 'Check out this post',
//                     text: 'I found this interesting post you might like',
//                     url: `http://localhost:3000/post/${postId}`,
//                 });
//             } else {
//                 navigator.clipboard.writeText(`http://localhost:3000/post/${postId}`);
//                 alert('Link copied to clipboard!');
//             }
//         } catch (error) {
//             console.error('Error sharing:', error);
//         }
//     };

//     return (
//         <div className='flex flex-col space-y-6 pb-6'>
//             {filteredPosts.map((post) => {
//                 const postUser = users.find(user => user._id.toString() === post.userId);
//                 const isLiked = post.likes.includes(usersId);
//                 const isSaved = savedPosts.includes(post._id);

//                 return (
//                     <motion.div
//                         key={post._id}
//                         className='w-full max-w-2xl bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100'
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.3 }}
//                         whileHover={{ scale: 1.01 }}
//                         onMouseEnter={() => setHoveredPost(post._id)}
//                         onMouseLeave={() => setHoveredPost(null)}
//                     >
//                         {/* Post Header */}
//                         <div className='flex items-center p-4'>
//                             <img
//                                 src={postUser && postUser.profilePicture ? `http://localhost:1000${postUser.profilePicture}` : profileimg}
//                                 alt="User Profile"
//                                 className='w-12 h-12 rounded-full object-cover border-2 border-blue-100 cursor-pointer'
//                             />
//                             <div className='ml-3 flex-1'>
//                                 <div className='flex items-center'>
//                                     <h3 className='text-md font-semibold text-gray-800'>{post.username}</h3>
//                                     <span className='text-xs text-gray-500 ml-2'>{formatTimeAgo(post.createdAt)}</span>
//                                 </div>
//                                 <p className='text-sm text-gray-500'>{postUser?.desc || 'No description'}</p>
//                             </div>
//                             <button 
//                                 className='text-gray-400 hover:text-gray-600'
//                                 onClick={() => handleSavePost(post._id)}
//                             >
//                                 {isSaved ? (
//                                     <FaBookmark className='text-yellow-500 text-xl' />
//                                 ) : (
//                                     <FaRegBookmark className='text-xl' />
//                                 )}
//                             </button>
//                         </div>

//                         {/* Post Content */}
//                         <div className='px-4 pb-2'>
//                             <p className='text-gray-800 mb-4'>{post.desc}</p>
//                         </div>

//                         {/* Post Image */}
//                         {post.image && (
//                             <div className='w-full bg-gray-50 flex justify-center'>
//                                 <img
//                                     src={`http://localhost:1000${post.image}`}
//                                     alt="Post Image"
//                                     className='max-h-96 w-auto object-contain'
//                                 />
//                             </div>
//                         )}

//                         {/* Post Stats */}
//                         <div className='px-4 py-2 border-t border-gray-100 flex justify-between text-sm text-gray-500'>
//                             <div className='flex items-center'>
//                                 <div className='flex items-center -space-x-2'>
//                                     <div className='w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs'>
//                                         👍
//                                     </div>
//                                     <div className='w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs'>
//                                         ❤️
//                                     </div>
//                                 </div>
//                                 <span className='ml-2'>{post.likes.length} likes</span>
//                             </div>
//                             <div>
//                                 <span>{post.comments?.length || 0} comments</span>
//                             </div>
//                         </div>

//                         {/* Post Actions */}
//                         <div className='px-4 py-2 border-t border-gray-100 grid grid-cols-3'>
//                             <motion.button
//                                 className={`flex items-center justify-center space-x-2 py-2 rounded-lg ${isLiked ? 'text-blue-500' : 'text-gray-600'} font-medium`}
//                                 onClick={() => handleLike(post._id)}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 {isLiked ? (
//                                     <motion.div
//                                         initial={{ scale: 1 }}
//                                         animate={{ scale: [1, 1.2, 1] }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <AiFillLike className='text-xl' />
//                                     </motion.div>
//                                 ) : (
//                                     <AiOutlineLike className='text-xl' />
//                                 )}
//                                 <span>Like</span>
//                             </motion.button>

//                             <button className='flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium'>
//                                 <AiOutlineComment className='text-xl' />
//                                 <span>Comment</span>
//                             </button>

//                             <motion.button
//                                 className='flex items-center justify-center space-x-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium'
//                                 onClick={() => handleShare(post._id)}
//                                 whileHover={{ scale: 1.05 }}
//                             >
//                                 <PiShareFat className='text-xl' />
//                                 <span>Share</span>
//                             </motion.button>
//                         </div>
//                     </motion.div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Posts;

import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { allposts } from '../../storeReducx/actionReudcer';
import PostCard from './PostCard'; // <-- new modular component

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.allposts);
    const users = useSelector(state => state.users.allusers);
    const usersId = localStorage.getItem('userId');
    const [savedPosts, setSavedPosts] = useState([]);
    const [hoveredPost, setHoveredPost] = useState(null);

    const filteredPosts = posts
    .filter(post => post.userId !== usersId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); 
  

    const formatTimeAgo = (timestamp) => moment(timestamp).fromNow();

    const handleLike = useCallback(async (postId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                `http://localhost:1000/post/likePost/${postId}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            dispatch(allposts());
        } catch (error) {
            console.error("Error liking post:", error.response?.data || error.message);
        }
    }, [dispatch]);

    const handleSavePost = useCallback((postId) => {
        setSavedPosts(prev =>
            prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
        );
    }, []);

    const handleShare = useCallback(async (postId) => {
        const url = `http://localhost:3000/post/${postId}`;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Check out this post',
                    text: 'Interesting content you might like!',
                    url,
                });
            } else {
                await navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    }, []);

    return (
        <div className='flex flex-col space-y-6 pb-6'>
            {filteredPosts.map(post => {
                const postUser = users.find(user => user._id === post.userId);
                const isLiked = post.likes.includes(usersId);
                const isSaved = savedPosts.includes(post._id);

                return (
                    <PostCard
                        key={post._id}
                        post={post}
                        postUser={postUser}
                        isLiked={isLiked}
                        isSaved={isSaved}
                        hoveredPost={hoveredPost}
                        setHoveredPost={setHoveredPost}
                        formatTimeAgo={formatTimeAgo}
                        handleLike={handleLike}
                        handleSavePost={handleSavePost}
                        handleShare={handleShare}
                    />
                );
            })}
        </div>
    );
};

export default Posts;
