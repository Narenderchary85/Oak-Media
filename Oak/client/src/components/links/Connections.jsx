import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUserPlus, FiUsers, FiSearch } from 'react-icons/fi';
import { FaUserCheck, FaUserFriends } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import profileimg from '../../assets/profileimg.avif';

const Connections = () => {
  const [activeTab, setActiveTab] = useState('suggestions');
  const [fshow,setFshow]=useState(false)
  const [connections, setConnections] = useState([
    { id: 1, name: 'Alex Johnson', role: 'Senior Developer at TechCorp', mutual: 4, connected: false },
    { id: 2, name: 'Sarah Miller', role: 'UX Designer at DesignHub', mutual: 2, connected: false },
    { id: 3, name: 'James Wilson', role: 'Product Manager at InnovateCo', mutual: 5, connected: true },
    { id: 4, name: 'Emma Davis', role: 'Data Scientist at AnalyticsPro', mutual: 3, connected: true },
    { id: 5, name: 'Michael Brown', role: 'Frontend Developer at WebSolutions', mutual: 1, connected: false },
    { id: 6, name: 'Olivia Wilson', role: 'Backend Engineer at DataSystems', mutual: 7, connected: false },
  ]);

  const [following, setFollowing] = useState([
    { id: 7, name: 'David Lee', role: 'Full Stack Developer', mutual: 8, connected: true },
    { id: 8, name: 'Sophia Chen', role: 'Product Designer', mutual: 2, connected: true },
  ]);

  const handleConnect = (id) => {
    setConnections(connections.map(conn => 
      conn.id === id ? { ...conn, connected: !conn.connected } : conn
    ));
  };

  const handleRemove = (id) => {
    setFollowing(following.filter(f => f.id !== id));
  };

  return (
    <>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto p-4 lg:p-6 lg:absolute lg:left-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Connections</h1>
        <div className="relative w-64">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search connections"
            className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'suggestions' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('suggestions')}
        >
          <FiUserPlus className="mr-2" />
          Suggestions
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center ${fshow===true ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setFshow(prev=>!prev)}
        >
          <FaUserFriends className="mr-2" />
          Following
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'mutual' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('mutual')}
        >
          <FiUsers className="mr-2" />
          Mutual Friends
        </button>
      </div>


      {activeTab === 'mutual' && (
        <div className="text-center py-10">
          <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <FiUsers className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No mutual friends yet</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            As you connect with more people, you'll see mutual friends here.
          </p>
        </div>
      )}


      {activeTab === 'suggestions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {connections.map((person) => (
            <motion.div
              key={person.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <img
                    src={profileimg}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  {person.connected && (
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <h3 className="font-semibold text-center">{person.name}</h3>
                <p className="text-sm text-gray-500 text-center mb-3">{person.role}</p>
                <p className="text-xs text-blue-500 mb-4">{person.mutual} mutual connections</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleConnect(person.id)}
                  className={`w-full py-2 rounded-lg text-sm font-medium ${
                    person.connected
                      ? 'bg-gray-100 text-gray-700'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {person.connected ? (
                    <span className="flex items-center justify-center">
                      <FaUserCheck className="mr-2" /> Connected
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FiUserPlus className="mr-2" /> Connect
                    </span>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
    {fshow && (
    <div className="space-y-4 lg:absolute lg:right-15 lg:top-20 lg:w-1/4">
              <h1 className="text-2xl font-semibold text-gray-800 mb-9">Following</h1>
          {following.map((person) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center"
            >
              <img
                src={profileimg}
                alt={person.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.role}</p>
                <p className="text-xs text-blue-500">{person.mutual} mutual connections</p>
              </div>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <HiOutlineDotsHorizontal />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRemove(person.id)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium"
                >
                  Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
    )}
    </>
  );
};

export default Connections;