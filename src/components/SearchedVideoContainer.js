import React, {useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCHED_VIDEOS_LIST } from '../utils/constants'
import SearchVideoItem from './SearchVideoItem'

const SearchedVideoContainer = () => {
  const [searchParams]= useSearchParams();
  const [videosData, setVideosData] = useState()
  const query = searchParams.get("search_query");

  useEffect(()=>{
    getVideo()
  },[query]);

  const getVideo = async()=>{
    const data = await fetch(YOUTUBE_SEARCHED_VIDEOS_LIST+query);
    const jsonData =  await data.json();
    setVideosData(jsonData?.items)
  }
  return (
    <div>
      {videosData?.map((video) => (
        <Link key={video?.id?.videoId} to={"/watch?v="+video?.id?.videoId} className='flex flex-wrap'>
          <SearchVideoItem data={video}/>
        </Link>
      ))}
    </div>
  )
}

export default SearchedVideoContainer