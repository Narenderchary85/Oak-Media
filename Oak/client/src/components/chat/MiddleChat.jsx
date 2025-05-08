import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, 
  FiImage, 
  FiMic, 
  FiSmile,
  FiPaperclip,
  FiVideo,
  FiMoreHorizontal,
  FiChevronDown,
  FiCheck,
  FiClock
} from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { BsThreeDotsVertical, BsArrowLeft } from 'react-icons/bs';

const MiddleChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Hey there! How are you doing?', time: '10:30 AM', status: 'read' },
    { id: 2, sender: 'other', text: "I'm good! Working on that project we discussed.", time: '10:32 AM', status: 'read' },
    { id: 3, sender: 'user', text: 'Need any help with the implementation?', time: '10:33 AM', status: 'read' },
    { id: 4, sender: 'other', text: 'Actually yes, could you review the API integration?', time: '10:35 AM', status: 'read' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [activeChat, setActiveChat] = useState({
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior Developer at TechCorp',
    status: 'online',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  });
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Mock chat list
  const chatList = [
    { id: 1, name: 'Alex Johnson', lastMessage: 'Could you review the API integration?', time: '10:35 AM', unread: 0, status: 'online', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Sarah Miller', lastMessage: 'Meeting at 3pm tomorrow', time: '9:45 AM', unread: 2, status: 'offline', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'James Wilson', lastMessage: 'Please check the latest design', time: 'Yesterday', unread: 0, status: 'online', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Simulate reply after 1-3 seconds
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const reply = {
          id: messages.length + 2,
          sender: 'other',
          text: getRandomReply(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'read'
        };
        setMessages(prev => [...prev, reply]);
        setIsTyping(false);
      }, 1500);
    }, Math.random() * 2000 + 1000);
  };

  const getRandomReply = () => {
    const replies = [
      "Sounds good!",
      "I'll get back to you on that.",
      "Thanks for letting me know.",
      "Can we discuss this tomorrow?",
      "I appreciate your help!",
      "Let me check and confirm."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex h-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 lg:w-full"
    >

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center">
            <button className="lg:hidden mr-2 p-1 rounded-full hover:bg-gray-100">
              <BsArrowLeft className="text-gray-600" />
            </button>
            <div className="relative mr-3">
              <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover" />
              {activeChat.status === 'online' && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h3 className="font-medium">{activeChat.name}</h3>
              <p className="text-xs text-gray-500">{activeChat.role}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-blue-50 text-gray-600">
              <FiVideo className="text-blue-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-50 text-gray-600">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-blue-50">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: message.sender === 'user' ? 10 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm'}`}
              >
                <p>{message.text}</p>
                <div className={`flex items-center justify-end mt-1 text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                  <span>{message.time}</span>
                  {message.sender === 'user' && (
                    <span className="ml-1">
                      {message.status === 'read' ? (
                        <FiCheck className="inline" />
                      ) : (
                        <FiClock className="inline" />
                      )}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex mb-4 justify-start"
            >
              <div className="bg-white px-4 py-2 rounded-lg rounded-tl-none shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-blue-50 text-gray-600 mr-2"
              onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
            >
              <FiPaperclip />
            </button>
            
            <AnimatePresence>
              {showAttachmentMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-16 left-4 bg-white shadow-lg rounded-lg p-2 flex space-x-2"
                >
                  <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500">
                    <FiImage />
                  </button>
                  <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500">
                    <FiMic />
                  </button>
                  <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500">
                    <FiVideo />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex-1 relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="w-full border border-gray-200 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
                rows={1}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-blue-50 text-gray-500">
                <FiSmile />
              </button>
            </div>

            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className={`ml-2 p-2 rounded-full ${!newMessage.trim() ? 'text-gray-400' : 'text-blue-500 hover:bg-blue-50'}`}
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MiddleChat;