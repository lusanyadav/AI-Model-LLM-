import React from 'react'
import Sidebar from './components/sidebars/Sidebar'
import ChatWindow from './components/chatWindows/ChatWindow'
import { MyContext } from './context/MyContext'

const App = () => {
  const providerValues = {}
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
