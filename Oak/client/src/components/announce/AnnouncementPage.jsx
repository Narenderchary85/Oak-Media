import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiImage, FiClock, FiUsers, FiHeart, FiMessageSquare, FiShare2 } from 'react-icons/fi';
import { RiHashtag } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [isScheduling, setIsScheduling] = useState(false);
  const [scheduledTime, setScheduledTime] = useState('');
  const [isTagging, setIsTagging] = useState(false);
  const [tags, setTags] = useState([]);
  const fileInputRef = useRef(null);

  // Mock alumni/friends data
  const alumniList = [
    { id: 1, name: 'Alex Johnson' },
    { id: 2, name: 'Sarah Miller' },
    { id: 3, name: 'James Wilson' },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePostAnnouncement = () => {
    if (!text.trim() && !image) return;

    const newAnnouncement = {
      id: Date.now(),
      text,
      image,
      tags,
      scheduledTime: isScheduling ? scheduledTime : null,
      likes: 0,
      comments: [],
      timestamp: new Date().toISOString(),
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setText('');
    setImage(null);
    setTags([]);
    setIsScheduling(false);
  };

  const handleTagUser = (user) => {
    if (!tags.includes(user)) {
      setTags([...tags, user]);
    }
    setIsTagging(false);
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag.id !== tagToRemove.id));
  };

  const handleLike = (id) => {
    setAnnouncements(announcements.map(announcement =>
      announcement.id === id 
        ? { ...announcement, likes: announcement.likes + 1 } 
        : announcement
    ));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto p-4 bg-white rounded-xl shadow-sm lg:w-full mt-10 lg:ml-10"
    >
      {/* **Announcement Creation Box** */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
        <textarea
          placeholder="Shout something to alumni & friends..."
          className="w-full p-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* **Image Preview** */}
        {image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mt-3"
          >
            <img 
              src={image} 
              alt="Announcement Preview" 
              className="w-full h-auto rounded-lg object-cover max-h-60"
            />
            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            >
              <IoMdClose className="text-red-500" />
            </button>
          </motion.div>
        )}

        {/* **Tags Preview** */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map(tag => (
              <motion.div
                key={tag.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
              >
                @{tag.name}
                <button 
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-blue-800 hover:text-red-500"
                >
                  <IoMdClose size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* **Action Buttons** */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button 
              onClick={() => fileInputRef.current.click()}
              className="p-2 rounded-full bg-white text-blue-500 hover:bg-blue-100 transition-colors"
            >
              <FiImage size={20} />
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </button>

            <button 
              onClick={() => setIsTagging(!isTagging)}
              className="p-2 rounded-full bg-white text-blue-500 hover:bg-blue-100 transition-colors"
            >
              <FiUsers size={20} />
            </button>

            <button 
              onClick={() => setIsScheduling(!isScheduling)}
              className="p-2 rounded-full bg-white text-blue-500 hover:bg-blue-100 transition-colors"
            >
              <FiClock size={20} />
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePostAnnouncement}
            disabled={!text.trim() && !image}
            className={`px-4 py-2 rounded-lg flex items-center ${
              (!text.trim() && !image) 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <FiSend className="mr-2" />
            Post Announcement
          </motion.button>
        </div>

        {/* **Tagging Dropdown** */}
        <AnimatePresence>
          {isTagging && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 bg-white rounded-lg border border-blue-200 overflow-hidden"
            >
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search alumni..."
                  className="w-full p-2 border-b border-blue-100 focus:outline-none"
                />
                <div className="max-h-40 overflow-y-auto">
                  {alumniList.map(user => (
                    <div
                      key={user.id}
                      onClick={() => handleTagUser(user)}
                      className="p-2 hover:bg-blue-50 cursor-pointer flex items-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <FiUser className="text-blue-500" />
                      </div>
                      <span>{user.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* **Scheduling Options** */}
        <AnimatePresence>
          {isScheduling && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 bg-white rounded-lg border border-blue-200 p-3"
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Schedule Announcement
              </label>
              <input
                type="datetime-local"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* **Announcements Timeline** */}
      <div className="space-y-4">
        {announcements.length > 0 ? (
          announcements.map(announcement => (
            <motion.div
              key={announcement.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  {/* <FiUser className="text-blue-500" /> */}
                </div>
                <div>
                  <div className="font-medium">You</div>
                  <div className="text-xs text-gray-500">
                    {new Date(announcement.timestamp).toLocaleString()}
                  </div>
                </div>
              </div>

              <p className="mb-3">{announcement.text}</p>

              {announcement.image && (
                <img 
                  src={announcement.image} 
                  alt="Announcement" 
                  className="w-full h-auto rounded-lg mb-3"
                />
              )}

              {announcement.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {announcement.tags.map(tag => (
                    <span 
                      key={tag.id}
                      className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      @{tag.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                <button 
                  onClick={() => handleLike(announcement.id)}
                  className="flex items-center text-gray-500 hover:text-red-500"
                >
                  <FiHeart className="mr-1" />
                  {announcement.likes}
                </button>
                <button className="flex items-center text-gray-500 hover:text-blue-500">
                  <FiMessageSquare className="mr-1" />
                  Comment
                </button>
                <button className="flex items-center text-gray-500 hover:text-green-500">
                  <FiShare2 className="mr-1" />
                  Share
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-gray-500"
          >
            No announcements yet. Be the first to shout something!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AnnouncementPage;