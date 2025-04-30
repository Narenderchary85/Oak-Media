// import React from 'react';
// import { PiChatCircleFill } from "react-icons/pi";
// import proimg from '../assets/pro-img.avif';
// import {Link} from 'react-router';

// const RightSection = () => {
//   return (
//     <div className="w-150 mt-3 h-full  lg:w-500 md:w-0 lg:ml-10 mt-15 mr-10 lg:h-full rounded-[20px] relative">
//       <div className='w-130 h-130 bg-white rounded-[20px] relative  border-2 border-gray-200'>
//         <input type="text" placeholder='Search Chat' className='border-none focus:outline-none focus:ring-2 focus:ring-orange-400 
//         rounded-[17px] bg-gray-200 w-125 h-15 mt-3 ml-2 pl-15 text-lg font-[400] object-cover '/>
//         <div className='absolute top-5 left-5'><PiChatCircleFill className='w-10 h-10 text-orange-500'/></div>
//         <Link to='/mychat'>
//         <div className='flex h-25 w-122 ml-4 mt-5 relative bg-gray-100 rounded-[15px]'> 
//             <img src={proimg} alt="" className='h-30 w-30 lg:w-20 lg:h-20 rounded-full ml-4 mt-2'/>
//             <div className='mt-5 ml-5 text-[27px] font-[500] lg:text-lg lg:font-bold lg:mt-4 lg:-3'>King</div>
//             <div className='top-15 left-39 text-[20px] lg:text-lg lg:font-light absolute lg:top-11 lg:left-29'>Full Stack dveloper</div>
//         </div>
//         </Link>
//       </div>
      // <div className='text-[25px] font-[500] text-gray-600 ml-5 mt-5'>Suggested Friends</div>
      // <div>
      //   <div className='w-130 h-35 bg-white rounded-[20px] ml-1 mt-5 flex relative  border-2 border-gray-200'> 
      //       <img src={proimg} alt="" className='h-30 w-30 lg:w-25 lg:h-25 rounded-full ml-4 mt-4'/>
      //       <div className='mt-5 ml-5 text-[27px] font-[500] lg:text-[25px]  lg:mt-4 lg:'>King</div>
      //       <div className='top-15 left-39 text-[37px] lg:text-lg lg:font-light absolute lg:top-15 lg:left-34'>Full Stack dveloper</div>
      //       <div className='w-27 h-15 text-[22px] lg:w-35 lg:h-15 flex justify-center items-center rounded-[30px] top-8 right-10 hover:bg-orange-50 hover:border-3
      //       font-bold lg:text-[23px] text-orange-500 absolute lg:top-5 lg:right-5 bg-white cursor-pointer border-2 border-orange-500' >Link</div>
      //   </div>
      // </div>
//     </div>
//   )
// }

// export default RightSection

import React ,{useState}from 'react';
import { FiSearch, FiMoreVertical } from 'react-icons/fi';
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs';
import { RiChatSmile2Line } from 'react-icons/ri';
import proimg from '../assets/pro-img.avif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCheck } from 'react-icons/fa';

const RightSection = () => {
  // Mock chat data
  const chats = [
    { id: 1, name: 'King', lastMessage: 'Hey, how are you doing?', time: '10:30 AM', unread: 2, isOnline: true, role: 'Full Stack Developer' },
    { id: 2, name: 'Sarah', lastMessage: 'Meeting at 3pm', time: '9:45 AM', unread: 0, isOnline: false, role: 'UX Designer' },
    { id: 3, name: 'Mike', lastMessage: 'Please review the PR', time: 'Yesterday', unread: 5, isOnline: true, role: 'Backend Engineer' },
    { id: 4, name: 'Emma', lastMessage: 'Thanks for the help!', time: 'Yesterday', unread: 0, isOnline: false, role: 'Product Manager' },
    { id: 5, name: 'David', lastMessage: 'Let me know when you\'re free', time: 'Monday', unread: 0, isOnline: true, role: 'Mobile Developer' },
  ];

  // Mock suggested friends

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
      // You would typically make an API call here
    }
  };

  return (
    <div className='bg-custom-gray lg:w-270 mr-20 relative'>
    <div className="w-full lg:w-full mr-10 ml-10 h-150 mt-10 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mr-4">
      {/* Chat Header */}
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

      {/* Search Bar */}
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

      {/* Chat List */}
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