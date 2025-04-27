import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiBookmark } from 'react-icons/fi';
import {PiTagChevronFill} from 'react-icons/pi';
import { RiSettings4Line } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getPostOfUser, openEdit } from '../../storeReducx/actionReudcer';
import moment from 'moment';
import PostFrame from '../posts/PostFrame';

const ProfileMiddle = () => {
  const user = useSelector(state => state.users.user);
  const posts = useSelector(state => state.posts.userposts);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    dispatch(getPostOfUser(token));
  }, [dispatch, token]);

  const formatTimeAgo = (timestamp) => {
    return moment(timestamp).fromNow();
  };

  const tabs = [
    { id: 'posts', icon: <FiGrid />, label: 'POSTS' },
    { id: 'saved', icon: <FiBookmark />, label: 'SAVED' },
    { id: 'tagged', icon: <PiTagChevronFill />, label: 'TAGGED' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto pb-20"
    >
      {/* Profile Header */}
      {user.length > 0 && user.map((use) => (
        <div key={use._id} className="px-4 lg:px-0">
          {/* Profile Info Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start py-6">
            {/* Profile Picture */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-white shadow-md overflow-hidden mb-4 lg:mb-0 lg:mr-10"
            >
              <img 
                src={use.profilePicture ? `http://localhost:1000${use.profilePicture}` : profileimg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Profile Details */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center mb-4">
                <h1 className="text-2xl font-light mb-2 lg:mb-0 lg:mr-6">{use.username}</h1>
                <div className="flex space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-1 rounded-md text-sm font-medium ${isFollowing ? 'bg-gray-100 text-black' : 'bg-blue-500 text-white'}`}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1 rounded-md text-sm font-medium bg-gray-100"
                    onClick={() => dispatch(openEdit(true))}
                  >
                    Edit Profile
                  </motion.button>
                  <button className="p-2 rounded-md bg-gray-100">
                    <RiSettings4Line />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between lg:justify-start lg:space-x-10 mb-4">
                <div className="text-center lg:text-left">
                  <span className="font-semibold">{use.numposts > 0 ? use.numposts : 0}</span> posts
                </div>
                <div className="text-center lg:text-left">
                  <span className="font-semibold">{use.followers > 0 ? use.followers : 0}</span> followers
                </div>
                <div className="text-center lg:text-left">
                  <span className="font-semibold">{use.following > 0 ? use.following : 0}</span> following
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <h2 className="font-semibold">{use.username}</h2>
                <p className="text-gray-800">{use.desc || 'No bio yet'}</p>
              </div>
            </div>
          </div>

          {/* Stories Highlights */}
          <div className="flex space-x-4 py-4 border-y border-gray-200 mb-6 overflow-x-auto">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-1 flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <IoMdAdd className="text-xl" />
                </div>
                <span className="text-xs">New</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Post Frame */}
      <div className="px-4 lg:px-0">
        <PostFrame />
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200">
        <div className="flex justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center justify-center py-4 px-6 relative ${activeTab === tab.id ? 'text-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-xl mr-2">{tab.icon}</span>
              <span className="text-xs tracking-wider">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.div 
              key={post._id}
              whileHover={{ opacity: 0.9 }}
              className="aspect-square relative bg-gray-100"
            >
              <img 
                src={post.image ? `http://localhost:1000${post.image}` : profileimg} 
                alt="Post" 
                className="w-full h-full object-cover"
              />
              {/* Post Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                <div className="flex items-center text-white font-semibold mr-4">
                  <span className="text-lg mr-1">❤️</span>
                  <span>{post.likes?.length || 0}</span>
                </div>
                <div className="flex items-center text-white font-semibold">
                  <span className="text-lg mr-1">💬</span>
                  <span>{post.comments?.length || 0}</span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 py-20 text-center text-gray-500">
            No posts yet
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileMiddle;