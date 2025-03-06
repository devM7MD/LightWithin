import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CommunityChat = () => {
  const [message, setMessage] = useState('');
  const [activeChannel, setActiveChannel] = useState('general');
  const [activeChatType, setActiveChatType] = useState('channels');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Color palette matching your existing app
  const colors = {
    lightMint: "#ddffe7",
    mint: "#98d7c2",
    teal: "#167D7F",
    blue: "#29A0B1",
    darkBlue: "#0084ff", // Messenger primary blue
    lightGray: "#f0f2f5", // Messenger background
    mediumGray: "#e4e6eb" // Messenger inactive buttons
  };

  // Sample data
  const channels = [
    { id: 'general', name: 'General', unread: 0, avatar: '/api/placeholder/40/40', lastMessage: 'Dr. Chen: Welcome everyone! This is a safe space...', time: '10:30 AM' },
    { id: 'support', name: 'Support', unread: 3, avatar: '/api/placeholder/40/40', lastMessage: 'Dr. Lisa: Let me know if you need any help...', time: '11:24 AM' },
    { id: 'mindfulness', name: 'Mindfulness', unread: 0, avatar: '/api/placeholder/40/40', lastMessage: 'Sarah: The guided meditation was so helpful!', time: 'Yesterday' },
    { id: 'anxiety', name: 'Anxiety Support', unread: 7, avatar: '/api/placeholder/40/40', lastMessage: 'Taylor: I tried that breathing technique and...', time: 'Yesterday' },
    { id: 'depression', name: 'Depression Support', unread: 2, avatar: '/api/placeholder/40/40', lastMessage: 'Alex: Thank you all for being here...', time: 'Monday' },
    { id: 'success-stories', name: 'Success Stories', unread: 0, avatar: '/api/placeholder/40/40', lastMessage: 'Michael: After 3 months of practicing...', time: 'Sunday' },
  ];
  
  const users = [
    { id: 1, name: 'Sarah Johnson', status: 'online', avatar: '/api/placeholder/40/40', lastMessage: 'Thanks for the advice!', time: '2:30 PM' },
    { id: 2, name: 'Dr. Michael Chen', status: 'online', role: 'Therapist', avatar: '/api/placeholder/40/40', lastMessage: 'Feel free to schedule a session this week', time: 'Yesterday' },
    { id: 3, name: 'Alex Rivera', status: 'offline', avatar: '/api/placeholder/40/40', lastMessage: 'The body scan meditation has been helpful', time: 'Monday' },
    { id: 4, name: 'Taylor Kim', status: 'away', avatar: '/api/placeholder/40/40', lastMessage: 'I\'ve found setting reminders helps too', time: 'Sunday' },
    { id: 5, name: 'Dr. Lisa Wong', status: 'online', role: 'Counselor', avatar: '/api/placeholder/40/40', lastMessage: 'Body scan is excellent for nighttime anxiety', time: 'Last week' },
  ];
  
  const messages = [
    { id: 1, userId: 2, text: "Welcome everyone! This is a safe space to share your experiences and support each other. Remember our community guidelines: be respectful, maintain privacy, and avoid giving specific medical advice.", time: "10:30 AM", isCurrentUser: false },
    { id: 2, userId: 3, text: "Thanks Dr. Chen. I've been practicing the mindfulness techniques from last week's session and they've really been helping with my anxiety.", time: "10:32 AM", isCurrentUser: false },
    { id: 3, userId: 1, text: "That's great to hear, Alex! Which technique did you find most helpful? I've been trying the breathing exercises but I still struggle with staying consistent.", time: "10:35 AM", isCurrentUser: false },
    { id: 4, userId: 3, text: "The body scan meditation has been the most effective for me. I do it right before bed and it helps calm my racing thoughts.", time: "10:38 AM", isCurrentUser: false },
    { id: 5, userId: 5, text: "Body scan is excellent for nighttime anxiety. Sarah, for consistency, try attaching the practice to something you already do daily - like brushing your teeth or having your morning coffee.", time: "10:42 AM", isCurrentUser: false },
    { id: 6, userId: 4, text: "I've found setting reminders on my phone helps too. And starting with just 2 minutes made it feel less overwhelming for me.", time: "10:45 AM", isCurrentUser: false },
    { id: 7, userId: 0, text: "Those are great suggestions! I'll try linking it with my morning coffee routine. Thank you everyone! 🙏", time: "10:48 AM", isCurrentUser: true },
  ];
  
  const getUserById = (id) => users.find(user => user.id === id) || {
    id: 0,
    name: 'You',
    status: 'online',
    avatar: '/api/placeholder/40/40',
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, you would send this message to your backend
      console.log(`Sending message to ${activeChannel}: ${message}`);
      setMessage('');
    }
  };
  
  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-20 p-2 bg-white shadow-sm flex justify-between items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-full"
          style={{ color: colors.teal }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold" style={{ color: colors.teal }}>LightWithin</h1>
        <button className="p-2 rounded-full" style={{ color: colors.teal }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Left Sidebar */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          translateX: isMobileMenuOpen ? '0%' : '-100%'
        }}
        transition={{ duration: 0.3 }}
        className={`w-80 bg-white shadow-md flex flex-col z-10 md:relative fixed inset-y-0 left-0 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}
      >
        {/* Header with search */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold" style={{ color: colors.teal }}>Chats</h2>
            <div className="flex space-x-2">
              <button className="w-9 h-9 flex items-center justify-center rounded-full" style={{ backgroundColor: colors.lightGray }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.teal }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full py-2 px-4 pl-10 rounded-full bg-gray-100 border-none focus:ring-0"
            />
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        {/* Chat type tabs */}
        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveChatType('channels')}
            className={`flex-1 py-3 font-medium text-center ${activeChatType === 'channels' ? 'border-b-2' : ''}`}
            style={{ 
              borderColor: activeChatType === 'channels' ? colors.teal : 'transparent',
              color: activeChatType === 'channels' ? colors.teal : 'gray'
            }}
          >
            Communities
          </button>
          <button 
            onClick={() => setActiveChatType('direct')}
            className={`flex-1 py-3 font-medium text-center ${activeChatType === 'direct' ? 'border-b-2' : ''}`}
            style={{ 
              borderColor: activeChatType === 'direct' ? colors.teal : 'transparent',
              color: activeChatType === 'direct' ? colors.teal : 'gray'
            }}
          >
            Direct Messages
          </button>
        </div>
        
        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          {activeChatType === 'channels' ? (
            <div className="px-2">
              {channels.map(channel => (
                <motion.button
                  key={channel.id}
                  whileHover={{ backgroundColor: colors.lightGray }}
                  onClick={() => {
                    setActiveChannel(channel.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-lg flex items-center mb-1 ${activeChannel === channel.id ? 'bg-gray-100' : ''}`}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: colors.lightMint }}>
                      <span className="text-lg" style={{ color: colors.teal }}>#</span>
                    </div>
                    {channel.unread > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-xs text-white" style={{ backgroundColor: colors.blue }}>
                        {channel.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-semibold truncate" style={{ color: activeChannel === channel.id ? colors.teal : 'black' }}>
                        {channel.name}
                      </h4>
                      <span className="text-xs text-gray-500">{channel.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{channel.lastMessage}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="px-2">
              {users.map(user => (
                <motion.button
                  key={user.id}
                  whileHover={{ backgroundColor: colors.lightGray }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // In a real app, you would switch to the direct message chat with this user
                  }}
                  className="w-full text-left p-2 rounded-lg flex items-center mb-1"
                >
                  <div className="relative mr-3">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <span 
                      className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
                      style={{ 
                        backgroundColor: 
                          user.status === 'online' ? '#10B981' : 
                          user.status === 'away' ? '#F59E0B' : '#6B7280'
                      }}
                    ></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-semibold truncate text-gray-900">
                        {user.name}
                      </h4>
                      <span className="text-xs text-gray-500">{user.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{user.lastMessage}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col md:pt-0 pt-14">
        {/* Channel Header */}
        <div className="bg-white p-3 shadow-sm flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: colors.lightMint }}>
              <span className="text-lg" style={{ color: colors.teal }}>#</span>
            </div>
            <div>
              <h2 className="font-semibold" style={{ color: colors.teal }}>
                {channels.find(c => c.id === activeChannel)?.name}
              </h2>
              <p className="text-xs text-gray-500">
                {channels.find(c => c.id === activeChannel)?.lastMessage}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all ml-1">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-all ml-1">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          <div className="space-y-3">
            {messages.map((msg) => {
              const user = getUserById(msg.userId);
              return (
                <div 
                  key={msg.id}
                  className={`flex ${msg.isCurrentUser ? 'justify-end' : 'items-start'}`}
                >
                  {!msg.isCurrentUser && (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full mr-2 mt-1"
                    />
                  )}
                  <div className={`max-w-xs md:max-w-md ${msg.isCurrentUser ? 'order-1' : 'order-2'}`}>
                    {!msg.isCurrentUser && (
                      <p className="text-xs text-gray-500 mb-1 ml-1">{user.name}</p>
                    )}
                    <div 
                      className={`p-3 rounded-2xl ${
                        msg.isCurrentUser 
                          ? 'rounded-br-sm bg-gradient-to-r from-teal to-blue text-white' 
                          : 'rounded-bl-sm bg-gray-100 text-gray-800'
                      }`}
                      style={
                        msg.isCurrentUser 
                          ? { background: `linear-gradient(to right, ${colors.teal}, ${colors.blue})` } 
                          : {}
                      }
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-1">{msg.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Message Input */}
        <div className="p-3 bg-white border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex items-center">
            <button type="button" className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div className="flex-1 mx-2 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Aa"
                className="w-full p-3 rounded-full bg-gray-100 border-none focus:ring-0"
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="p-2 rounded-full"
              style={{ color: message.trim() ? colors.blue : colors.mediumGray }}
              disabled={!message.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;