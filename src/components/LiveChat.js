import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generateRandomName, generateRandomString } from '../utils/baseHelper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector(store => store.chat.messages);
  
  useEffect(()=>{
   const i = setInterval(()=>{
      // api pooling
     dispatch(addMessage({
      name: generateRandomName(),
      message: generateRandomString(30),
     }))
    },1000);
    return ()=> clearInterval(i)
  },[]);

  return (
    <div className='border-[1px] border-black h-[500px] overflow-scroll flex flex-col-reverse rounded-md'>
      {chatMessage?.map((item ,index)=>(
        <ChatMessage key={index} name={item?.name} message={item?.message}/>
      ))}
    </div>
  )
}

export default LiveChat