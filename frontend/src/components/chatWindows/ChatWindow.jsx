import React from 'react'
import Navbar from './navbar/Navbar'
import ChatInput from './chat/chatInput/ChatInput'
import ChatOutput from './chat/chatOutput/ChatOutput'
const ChatWindow = () => {
  return (
    <div className='w-[80%] max-h-screen'>
          <Navbar />
          <div className='w-full h-[94%] border flex flex-col justify-between items-center'>
              <ChatOutput/>
              <ChatInput/>
          </div>
    </div>
  )
}

export default ChatWindow
