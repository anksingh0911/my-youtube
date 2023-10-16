import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex flex-wrap items-center'>
      <img className='w-[40px] h-[40px] rounded-[50%] mx-2' src={'/logo.png'} alt="thumbnail"/>
      <span className='text-sm font-semibold'>{name}</span>
      <span className='text-sm px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage