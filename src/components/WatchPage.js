import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { getNumber } from '../utils/baseHelper';
import { GOOGLE_API_KEY } from '../utils/constants';
import {PiShareFatThin} from 'react-icons/pi';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi'
import CommentsList from './CommentsList';
import RelatedVideos from './RelatedVideos';
import LiveChat from './LiveChat';

function WatchPage() {
  const [ searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoDetail, setVideoDetail] = useState();
  const [channelInfo, setChannelInfo]=useState();

  useEffect(()=>{
    dispatch(closeMenu())
    getVideo()
  },[]);

  useEffect(()=>{
    if(videoDetail?.snippet?.channelId){
      getChannel()
    }
  },[videoDetail])
  
  const videoId = searchParams.get("v");
  const getVideo = async()=>{
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+searchParams.get("v")+ "&key="+ GOOGLE_API_KEY);
    const jsonData = await data.json();
    setVideoDetail(jsonData.items[0]);
  }

  const getChannel = async()=>{
    const data =  await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+videoDetail?.snippet?.channelId+"&key="+ GOOGLE_API_KEY);
    const channelInfo = await data.json();
    setChannelInfo(channelInfo.items[0])
  }
  
  return !videoDetail ? null :  (
    <div className='grid grid-cols-12 col-span-12 p-2'>
      <div className='rounded-lg col-span-8 overflow-hidden'>
        <ReactPlayer 
          url={"https://www.youtube.com/watch?v="+videoId} 
          width={"100%"}
          height="500px"
          className="mb-4"
          controls
        />
        <h3 className='text-gray-600 font-bold text-2xl mt-4'>{videoDetail?.snippet?.title}</h3>
        <div className='flex flex-wrap justify-between items-center py-2 my-2'>
          <div className='flex'>
            <img 
              src={channelInfo?.snippet?.thumbnails?.default?.url} 
              className="p-2 mr-1 w-[50px] h-[50px] rounded-full shadow-lg"
              alt='channelImage'
            />
            <div className='ml-2'>
              <h4 className='text-gray-600 font-semibold text-lg'>{channelInfo?.snippet?.title}</h4>
              <p className='text-sm text-gray-500'> {channelInfo && getNumber(channelInfo?.statistics?.subscriberCount)} subscribers</p>
            </div>
          </div>
          
          <div className='flex'>
            <button className='bg-white ml-2 shadow-md text-black border-[1px] flex items-center rounded-full px-3 py-2 text-sm'>
              Subscribe
            </button>
            <button className='flex ml-2 items-center bg-white shadow-md text-black border-[1px] rounded-l-full px-3 py-2 text-sm border-r-[1px]'>
              <AiOutlineLike className='mr-1'/>{videoDetail && getNumber(videoDetail?.statistics?.likeCount)}
            </button>
            <button className='flex items-center bg-white shadow-md text-black border-[1px] rounded-r-full px-3 py-2 text-sm'>
              <AiOutlineDislike/>
            </button>
            <button className='flex ml-2 items-center bg-white shadow-md text-black border-[1px] rounded-full px-3 py-2 text-sm'>
              <PiShareFatThin className='mr-1'/> Share
            </button>
            <button className='flex ml-2 items-center bg-white shadow-md text-black border-[1px] rounded-full px-3 py-2 text-sm'>
              <HiDownload className='mr-1'/> Download
            </button>
          </div>
        </div>
        <div className='border-[1px] shadow-md p-2 rounded-lg text-md line-clamp-3 leading-5'>
          {videoDetail?.snippet?.description}
        </div>
        <div className='m-3'>
          <CommentsList videoId={videoId}/>
        </div>
      </div>
      <div className='col-span-4 px-2'>
        <LiveChat/>
        <RelatedVideos id={videoDetail?.snippet?.channelId}/>
      </div>
    </div>
  )
}

export default WatchPage;