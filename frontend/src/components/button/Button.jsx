import React from 'react'

const Button = ({ value, redirectLink }) => {
  const handleRedirectLink = () => {
    window.open(redirectLink, '_blank')
  }
  return (
    <div onClick={handleRedirectLink} className=' border px-3 py-1 rounded-xl hover:cursor-pointer transition-all duration-200 hover:border-white'>
      <span className='text-white'>{value}</span>
    </div>
  )
}

export default Button;
