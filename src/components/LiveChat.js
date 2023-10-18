import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generateRandomName, generateRandomString } from '../utils/baseHelper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector(store => store.chat.messages);
  
  useEffect(()=>{
   const i = setInterval(()=>{
      // api pooling
     dispatch(addMessage({
      name: generateRandomName(),
      message: generateRandomString(30),
     }))
    },1500);
    return ()=> clearInterval(i)
  },[]);

  return (
    <>
      <div className='border-[1px] border-black h-[500px] overflow-scroll flex flex-col-reverse rounded-md'>
        {chatMessage?.map((item ,index)=>(
          <ChatMessage key={index} name={item?.name} message={item?.message}/>
        ))}
      </div>
      <form className='w-full flex flex-wrap p-2' 
        onSubmit={(e)=> {
          e.preventDefault();
          dispatch(addMessage({
            name:"Ankur Singh",
            message:liveMessage,
          }))
          setLiveMessage("")
        }}
        >
        <input type="text"  
          className=' w-[80%] rounded-md border-[1px] text-sm px-2 py-2' 
          placeholder='Enter your comment'
          value={liveMessage}
          onChange={(e)=> setLiveMessage(e.target.value)}
        />
        <button className='rounded-lg bg-gray-100 text-sm font-semibold p-2'>Submit</button>
      </form>
    </>
  )
}

export default LiveChat