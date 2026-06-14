import React from 'react'

const ChatInput = () => {
  return (
    <div className='bg-red-300 rounded-2xl w-[80%]  mb-8 h-[8%]'>
      <div className='flex flex-row justify-center w-full h-full items-center'>
        <input type="text" name="meesage" id="message" placeholder='Ask anything...' className='w-[85%] h-[80%] outline-none text-lg leading-20'/>
      </div>
      <div className='flex flex-row justify-center items-center mt-1'>
        <p className='text-sm'>Claude is AI and can make mistakes. Please double-check responses.</p>
      </div>
    </div>
  )
}

export default ChatInput
