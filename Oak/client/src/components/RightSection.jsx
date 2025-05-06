import React ,{useState}from 'react';
import { FiSearch, FiMoreVertical } from 'react-icons/fi';
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs';
import { RiChatSmile2Line } from 'react-icons/ri';
import proimg from '../assets/pro-img.avif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCheck } from 'react-icons/fa';

const RightSection = () => {

  const chats = [
    { id: 1, name: 'King', lastMessage: 'Hey, how are you doing?', time: '10:30 AM', unread: 2, isOnline: true, role: 'Full Stack Developer' },
    { id: 2, name: 'Sarah', lastMessage: 'Meeting at 3pm', time: '9:45 AM', unread: 0, isOnline: false, role: 'UX Designer' },
    { id: 3, name: 'Mike', lastMessage: 'Please review the PR', time: 'Yesterday', unread: 5, isOnline: true, role: 'Backend Engineer' },
    { id: 4, name: 'Emma', lastMessage: 'Thanks for the help!', time: 'Yesterday', unread: 0, isOnline: false, role: 'Product Manager' },
    { id: 5, name: 'David', lastMessage: 'Let me know when you\'re free', time: 'Monday', unread: 0, isOnline: true, role: 'Mobile Developer' },
  ];


  const suggestedFriends = [
    { id: 1, name: 'Alex Johnson', role: 'Senior Developer at TechCorp', mutualConnections: 4 },
    { id: 2, name: 'Sarah Miller', role: 'UX Designer at DesignHub', mutualConnections: 2 },
    { id: 3, name: 'James Wilson', role: 'Product Manager at InnovateCo', mutualConnections: 5 },
    { id: 4, name: 'Emma Davis', role: 'Data Scientist at AnalyticsPro', mutualConnections: 3 },
  ];

  const [connected, setConnected] = useState([]);

  const handleConnect = (id) => {
    if (connected.includes(id)) {
      setConnected(connected.filter(connId => connId !== id));
    } else {
      setConnected([...connected, id]);
    }
  };

  return (
    <div className='bg-custom-gray lg:w-270 mr-20 relative'>
    <div className="w-full lg:w-full mr-10 ml-10 h-150 mt-10 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mr-4">
      <div className="bg-blue-50 p-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <RiChatSmile2Line className="text-blue-500 text-2xl mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
        </div>
        <div className="flex space-x-3">
          <BsFilter className="text-gray-600 text-xl cursor-pointer" />
          <BsThreeDotsVertical className="text-gray-600 text-xl cursor-pointer" />
        </div>
      </div>

      <div className="p-3 border-b border-gray-100">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100%-120px)]">
        {chats.map((chat) => (
          <Link 
            to={`/mychat/${chat.id}`} 
            key={chat.id} 
            className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="relative mr-3">
              <img 
                src={proimg} 
                alt={chat.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold text-gray-800 truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">{chat.role}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
    <div className="flex items-center justify-between px-4 py-3 ml-10 mt-10">
        <h3 className="text-lg font-semibold text-gray-800">People you may know</h3>
        <button className="text-blue-500 text-sm font-medium">See all</button>
      </div>

      <div className="space-y-3 px-2 ml-10">
        {suggestedFriends.map((friend) => (
          <motion.div
            key={friend.id}
            className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-start space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                <img 
                  src={proimg} 
                  alt={friend.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 truncate">{friend.name}</h4>
                <p className="text-xs text-gray-500 truncate">{friend.role}</p>
                <p className="text-xs text-blue-500 mt-1">
                  {friend.mutualConnections} mutual connection{friend.mutualConnections !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-center">
              <motion.button
                className={`flex items-center justify-center w-full py-1.5 rounded-full text-sm font-medium ${
                  connected.includes(friend.id)
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
                onClick={() => handleConnect(friend.id)}
                whileTap={{ scale: 0.95 }}
              >
                {connected.includes(friend.id) ? (
                  <>
                    <FaCheck className="mr-1" />
                    Pending
                  </>
                ) : (
                  <>
                    <FaUserPlus className="mr-1" />
                    Connect
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;