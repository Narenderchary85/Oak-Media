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
