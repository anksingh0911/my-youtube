import React from 'react';
import {BiDislike, BiLike} from "react-icons/bi";

const Comment = ({data}) => {
  return (
    <div className='p-2 grid grid-cols-12 border-b-[1px]'>
      <img 
        className='w-[40px] h-[40px] mx-auto rounded-full col-span-1' 
        src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} 
        alt='profileImage'
      />
      <div className='px-2 col-span-11'>
        <h6 className='text-black font-semibold text-md'>{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h6>
        <p className='text-black text-sm'>{data?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
        <div className='flex items-center'>
          <div className='flex items-center mr-2 text-sm'>
            <BiLike className='mr-1 w-[35px] h-[35px] p-2 rounded-full hover:cursor-pointer hover:shadow-md hover:bg-gray-200'/> {data?.snippet?.topLevelComment?.snippet?.likeCount}
          </div>
          <div className='flex items-center mr-2 text-sm'>
            <BiDislike className='mr-1 w-[35px] h-[35px] p-2 rounded-full hover:cursor-pointer hover:shadow-md hover:bg-gray-200'/> {data?.snippet?.topLevelComment?.snippet?.dislikeCount}
          </div>
          <button className='px-3 h-[25px] text-xs rounded-full border-[1px] hover:shadow-md hover:bg-gray-200'>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;