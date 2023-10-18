import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex flex-wrap items-center mb-2'>
      <img className='w-[30px] h-[30px] rounded-[50%] mx-2' src="https://yt3.ggpht.com/ytc/APkrFKYAws2Wt-nQp5pNYkVsiGydbXUfzT7_jN2pYtcl3R-eT54QOqh7KJ4sG1-PWD6B=s48-c-k-c0x00ffffff-no-rj" alt="thumbnail"/>
      <span className='text-sm font-semibold'>{name}</span>
      <span className='text-sm px-2'>{message}</span>
    </div>
  )
}

export default ChatMessage