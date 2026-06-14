import React from 'react'
import Sidebar from './components/sidebars/Sidebar'
import ChatWindow from './components/chatWindows/ChatWindow'
import { MyContext } from './context/MyContext'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [prompt, setPrompt] = useState("")
  const [reply, setReply] = useState(null)
  const [currThreadID, setCurrThreadID] = useState(uuidv4());
  const [waitLoader, setWaitLoader] = useState(false);
  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadID, setCurrThreadID,
    waitLoader, setWaitLoader
  }
  return (
    <div className='flex flex-row w-screen h-screen'>
      <MyContext.Provider value={providerValues}>
        <Sidebar />
        <ChatWindow/>
      </MyContext.Provider>
    </div>
  )
}

export default App
