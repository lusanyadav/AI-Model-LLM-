import React, { useContext } from 'react'
import { ScaleLoader } from 'react-spinners'
import { MyContext } from '../../../../context/MyContext'

const ChatOutput = () => {
  const {waitLoader, setWaitLoader} = useContext(MyContext);
  return (
    <div className='w-[80%] h-[88%] overflow-x-auto overflow-y-auto'>
      
      {waitLoader &&
        <div className='flex flex-row justify-center items-center h-full'>
          <ScaleLoader color='#fff'></ScaleLoader>
        </div>
      }
    </div>
  )
}

export default ChatOutput
