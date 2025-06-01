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

    </div>
  );
};

export default MiddleNot;