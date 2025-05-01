import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBell, 
  FiMessageSquare, 
  FiUserPlus, 
  FiThumbsUp, 
  FiShare2,
  FiClock,
  FiCheck
} from 'react-icons/fi';
import proimg from '../../assets/pro-img.avif';

const MiddleNot = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

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
        avatar: proimg
      },
      {
        id: 2,
        type: 'connection',
        user: 'Sarah Miller',
        role: 'UX Designer',
        message: 'wants to connect with you',
        time: '15 mins ago',
        read: false,
        avatar: proimg
      },
      {
        id: 3,
        type: 'comment',
        user: 'James Wilson',
        role: 'Product Manager',
        message: 'commented on your post: "Great work!"',
        time: '1 hour ago',
        read: true,
        avatar: proimg
      },
      {
        id: 4,
        type: 'mention',
        user: 'Emma Davis',
        role: 'Data Scientist',
        message: 'mentioned you in a comment',
        time: '3 hours ago',
        read: true,
        avatar: proimg
      },
      {
        id: 5,
        type: 'share',
        user: 'Michael Brown',
        role: 'Frontend Developer',
        message: 'shared your post',
        time: '5 hours ago',
        read: true,
        avatar: proimg
      }
    ];

    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.read).length);
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    setUnreadCount(unreadCount - 1);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => 
      ({ ...notification, read: true })
    ));
    setUnreadCount(0);
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.read;
    return notification.type === activeTab;
  });

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'like': return <FiThumbsUp className="text-blue-500" />;
      case 'comment': return <FiMessageSquare className="text-green-500" />;
      case 'connection': return <FiUserPlus className="text-purple-500" />;
      case 'mention': return <FiUserPlus className="text-yellow-500" />;
      case 'share': return <FiShare2 className="text-red-500" />;
      default: return <FiBell className="text-gray-500" />;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden lg:mt-10 lg:ml-10">
      <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center">
          <FiBell className="text-blue-500 text-2xl mr-3" />
          <h1 className="text-xl font-semibold">Notifications</h1>
          {unreadCount > 0 && (
            <span className="ml-3 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
              {unreadCount} new
            </span>
          )}
        </div>
        <button 
          onClick={markAllAsRead}
          className="text-blue-500 text-sm hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="flex border-b border-gray-200">
        {[
          { id: 'all', label: 'All' },
          { id: 'unread', label: 'Unread' },
          { id: 'like', label: 'Likes' },
          { id: 'comment', label: 'Comments' },
          { id: 'connection', label: 'Connections' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-3 text-sm font-medium relative ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </div>

      <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
        <AnimatePresence>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  backgroundColor: notification.read ? 'rgba(255,255,255,1)' : 'rgba(240,248,255,1)'
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ backgroundColor: 'rgba(240,248,255,1)' }}
                className={`p-4 flex items-start ${!notification.read ? 'bg-blue-50' : ''}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="relative mr-4">
                  <img 
                    src={notification.avatar} 
                    alt={notification.user} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  {!notification.read && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800">{notification.user}</h3>
                    <span className="text-xs text-gray-500 flex items-center">
                      <FiClock className="mr-1" /> {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">{notification.user}</span> {notification.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{notification.role}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                </motion.button>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <FiBell className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-2">No notifications</h3>
              <p className="text-gray-500">When you get notifications, they'll appear here</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-gray-200 text-center">
        <button className="text-blue-500 text-sm hover:underline">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default MiddleNot;