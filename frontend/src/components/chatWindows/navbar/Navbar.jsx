import React from 'react'
import Button from '../../button/Button'

const Navbar = () => {
  return (
    <div className='h-[6%] bg-[#000000] flex flex-row justify-between items-center px-30 border-b border-white'>
      <Button value="Linkedin" redirectLink="https://www.linkedin.com/in/lusanyadav/" />
      <Button value="Leetcode" redirectLink="https://leetcode.com/u/lusanyadav/"/>
      <Button value="Geeksforgeeks" redirectLink="https://www.geeksforgeeks.org/profile/lusany5dnw?tab=activity"/>
      <Button value="GitHub" redirectLink="https://github.com/lusanyadav"/>
    </div>
  )
}

export default Navbar
