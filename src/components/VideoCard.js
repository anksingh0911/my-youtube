import React from 'react'

const VideoCard = ({info})=> {
  console.log(info, 'info')
  const {snippet, statistics} = info;
  const { title, channelTitle, thumbnails} = snippet;

  return (
    <div className='col-span-3 p-1'>
      <div className='p-2 bg-white h-full shadow-lg rounded-md'>
      <img src={thumbnails?.high?.url} className="rounded-lg" alt="Thumbnail_Image"/>
      <div className='py-2'>
        <ul>
          <li className='font-bold text-md line-clamp-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.likeCount}</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default VideoCard