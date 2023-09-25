import React,{useEffect, useState} from 'react'
import { YOUTUBE_URL } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos]= useState();

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='grid grid-cols-12'>
      {videos?.map((video)=> <VideoCard className="p-2" key={video?.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer