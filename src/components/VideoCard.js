import React from 'react'
import { useSelector } from 'react-redux';
import { getNumber } from '../utils/baseHelper';

const VideoCard = ({info})=> {
  const {snippet, statistics} = info;
  const { title, channelTitle, thumbnails} = snippet;
  const isDark = useSelector((store)=>store?.app.isDark)
  
  return (
    <div className='p-1 h-full'>
      <div className={`${isDark ? "dark" : ''} p-2 bg-white h-full shadow-lg rounded-md`}>
      <img src={thumbnails?.high?.url} className="rounded-lg" alt="Thumbnail_Image"/>
      <div className='py-2'>
        <ul>
          <li className='font-semibold text-md line-clamp-2'>{title}</li>
          <li className='text-[0.8rem]'>{channelTitle}</li>
          <li className='text-[0.8rem]'>{getNumber(statistics?.likeCount)} Likes</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default VideoCard