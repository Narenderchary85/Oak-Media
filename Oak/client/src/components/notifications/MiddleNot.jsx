import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBell, 
  FiMessageSquare, 
  FiUserPlus, 
  FiThumbsUp, 
  FiShare2,
  FiClock,
  FiCheck,
  FiX,
  FiHeart
} from 'react-icons/fi';
import proimg from '../../assets/pro-img.avif';

const MiddleNot = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mockNotifications = [
      {
        id: 1,
        type: 'like',
        user: 'Alex Johnson',
        role: 'Senior Developer',
        message: 'liked your post',
        time: '2 mins ago',
        read: false,
        avatar: proimg,
        postPreview: 'Your latest project update'
      },
      {
        id: 2,
        type: 'connection',
        user: 'Sarah Miller',
        role: 'UX Designer',
        message: 'wants to connect with you',
        time: '15 mins ago',
        read: false,
        avatar: proimg,
        mutualConnections: 4
      },
      {
        id: 3,
        type: 'comment',
        user: 'James Wilson',
        role: 'Product Manager',
        message: 'commented on your post: "Great work!"',
        time: '1 hour ago',
        read: true,
        avatar: proimg,
        postPreview: 'Your shared article about React'
      },
      {
        id: 4,
        type: 'mention',
        user: 'Emma Davis',
        role: 'Data Scientist',
        message: 'mentioned you in a comment',
        time: '3 hours ago',
        read: true,
        avatar: proimg,
        context: 'Team project discussion'
      },
      {
        id: 5,
        type: 'share',
        user: 'Michael Brown',
        role: 'Frontend Developer',
        message: 'shared your post',
        time: '5 hours ago',
        read: true,
        avatar: proimg,
        postPreview: 'Your tutorial on animations'
      },
      {
        id: 6,
        type: 'reaction',
        user: 'Lisa Ray',
        role: 'Backend Engineer',
        message: 'loved your post',
        time: '1 day ago',
        read: true,
        avatar: proimg,
        postPreview: 'Your conference talk video'
      }
    ];

    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.read).length);
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    setUnreadCount(prev => notifications.find(n => n.id === id && !n.read) ? prev - 1 : prev);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => 
      ({ ...notification, read: true })
    ));
    setUnreadCount(0);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    setUnreadCount(prev => notifications.find(n => n.id === id && !n.read) ? prev - 1 : prev);
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.read;
    return notification.type === activeTab;
  });

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'like': return <FiThumbsUp className="text-blue-500" />;
      case 'comment': return <FiMessageSquare className="text-blue-500" />;
      case 'connection': return <FiUserPlus className="text-blue-500" />;
      case 'mention': return <FiUserPlus className="text-blue-500" />;
      case 'share': return <FiShare2 className="text-blue-500" />;
      case 'reaction': return <FiHeart className="text-blue-500" />;
      default: return <FiBell className="text-blue-500" />;
    }
  };

  const getActionButtons = (type, id) => {
    if (type === 'connection') {
      return (
        <div className="flex space-x-2 mt-2">
          <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition">
            Accept
          </button>
          <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full hover:bg-gray-300 transition">
            Ignore
          </button>
        </div>
      );
    }
    return (
      <button 
        onClick={() => removeNotification(id)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
      >
        <FiX size={16} />
      </button>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden lg:mt-10 lg:ml-10 border border-gray-100">
      {/* Header with Instagram-like gradient */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <FiBell className="text-blue-500 text-2xl mr-3" />
            {unreadCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {unreadCount}
              </motion.span>
            )}
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
        </div>
        <button 
          onClick={markAllAsRead}
          className="text-blue-500 text-sm font-medium hover:text-blue-600 transition"
        >
          Mark all as read
        </button>
      </div>

      <div className="flex border-b border-gray-200 bg-blue-50">
        {[
          { id: 'all', label: 'All' },
          { id: 'unread', label: 'Unread' },
          { id: 'like', label: 'Likes' },
          { id: 'comment', label: 'Comments' },
          { id: 'connection', label: 'Connections' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-3 text-sm font-medium relative flex-1 text-center ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full"
                layoutId="underline"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="max-h-96 overflow-y-auto">
        <AnimatePresence>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'spring', damping: 25 }}
                className={`p-4 border-b border-gray-100 hover:bg-blue-50 transition ${!notification.read ? 'bg-blue-50' : 'bg-white'}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start">
                  <div className="relative">
                    <img 
                      src={notification.avatar} 
                      alt={notification.user}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800">{notification.user}</p>
                        <p className="text-xs text-gray-500">{notification.role}</p>
                      </div>
                      <span className="text-xs text-gray-400 flex items-center">
                        <FiClock className="mr-1" size={12} />
                        {notification.time}
                      </span>
                    </div>
                    
                    <p className="mt-1 text-sm text-gray-700">
                      {notification.message}
                    </p>
                    
                    {/* Additional context (Instagram-style) */}
                    {notification.postPreview && (
                      <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-600 border border-blue-100">
                        "{notification.postPreview}"
                      </div>
                    )}
                    
                    {notification.mutualConnections && (
                      <p className="mt-1 text-xs text-gray-500">
                        {notification.mutualConnections} mutual connections
                      </p>
                    )}
                    
                    {getActionButtons(notification.type, notification.id)}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center text-gray-500"
            >
              <FiBell className="mx-auto text-3xl text-blue-200 mb-2" />
              <p>No notifications found</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-3 bg-blue-50 border-t border-blue-100 text-center">
        <a href="#" className="text-xs text-blue-500 hover:underline">
          Notification Settings
        </a>
        
      </div>
    </div>
  );
};

export default MiddleNot;