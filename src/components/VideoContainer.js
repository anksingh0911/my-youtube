import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { YOUTUBE_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
  const isDark = useSelector(store=> store.app.isDark);
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
    <div className={`grid grid-cols-12`}>
      {videos?.map((video)=><Link key={video?.id} className={isMenuOpen === true ? 'col-span-6 lg:col-span-4 md:col-span-4 sm:col-span-6' : 'col-span-6 lg:col-span-3 md:col-span-4 sm:col-span-6'} to={"/watch?v="+ video?.id }><VideoCard className="p-2" key={video?.id} info={video}/></Link>)}
    </div>
  )
}
export default VideoContainer;