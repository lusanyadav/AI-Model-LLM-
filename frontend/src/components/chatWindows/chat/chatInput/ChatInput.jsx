import React, { useContext } from 'react'
import { MyContext } from '../../../../context/MyContext'

const ChatInput = () => {
  const { reply, setReply, prompt, setPrompt, currThreadID, setCurrThreadID, waitLoader, setWaitLoader } = useContext(MyContext);
  const getReply = async () => {
    setWaitLoader(true);
    if (prompt == "" || prompt.size == 0) {
      alert("Enter valid message..!");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: prompt,
        threadID: currThreadID
      })
    };

    try {
      const response = await fetch("http://localhost:8080/api/chat", options);
      const res = await response.json()
      console.log(res.geminiResponse)
      setReply(res.geminiResponse)
    } catch (error) {
      console.log(error);
    }
    setWaitLoader(false);
  }
  return (
    <div className='bg-[#1F1F1E] rounded-2xl w-[80%]  mb-8 h-[8%]'>
      <div className='flex flex-row justify-between w-full h-full items-center px-5'>
        <i className="fa-solid fa-headset text-xl text-white"></i>
        <input
          type="text"
          name="meesage" id="message" placeholder='Ask anything...'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" ? getReply() : ""}
          autoComplete='off'
          className='w-[91%] h-[80%] outline-none text-white text-md leading-20 placeholder-white' />
        <i
          onClick={getReply}
          className="fa-solid fa-paper-plane text-xl text-white hover:cursor-pointer transition-all duration-200"></i>
      </div>
      <div className='flex flex-row justify-center items-center mt-1'>
        <p className='text-sm text-white'>This is an AI model and can make mistakes. Please double-check responses.</p>
      </div>
    </div>
  )
}

export default ChatInput
