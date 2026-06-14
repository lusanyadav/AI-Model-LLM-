import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#1F1F1E] h-full w-[20%] flex flex-col items-center'>
      {/* create new chat section */}
      <div className='w-[95%] border flex flex-row justify-between items-center mt-3 py-1 rounded-xl hover:cursor-pointer transition-all duration-200 border-white'>
        <img src="public/blacklogo.png" alt="logo" className='text-2xl w-[50px] h-[30px] bg-white rounded-[50%] object-cover' />
        <i className="fa-solid fa-pen-to-square mr-2 text-xl text-white"></i>
      </div>

      {/* old chat history */}
      <div className='w-[95%] mt-5 h-[80%]'>
        <div className='text-white w-full mt-1 rounded-xl hover:bg-[#000000] py-2 flex flex-row text-sm items-center hover:cursor-pointer transition-all duration-200'>
          <span className='ml-3'>
            old chat history
          </span>
        </div>
        <div className='text-white w-full mt-1 rounded-xl hover:bg-[#000000] py-2 flex flex-row text-sm items-center hover:cursor-pointer transition-all duration-200'>
          <span className='ml-3'>
            Kaise ho dosto
          </span>
        </div>
        <div className='text-white w-full mt-1 rounded-xl hover:bg-[#000000] py-2 flex flex-row text-sm items-center hover:cursor-pointer transition-all duration-200'>
          <span className='ml-3'>
            wow, so wonderful
          </span>
        </div>
      </div>

      <div className='border-t border-white hover:bg-[#000000] cursor-pointer transition-all duration-200 h-[10%] w-full flex flex-row items-center justify-between'>
        <span className='text-white text-sm ml-5 font-bold'>Lusan Yadav</span>
        <span className='text-white text-sm mr-5 font-bold'>Linkedin</span>
      </div>
      
    </div>
  )
}

export default Sidebar
