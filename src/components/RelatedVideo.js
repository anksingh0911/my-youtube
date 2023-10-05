import React from 'react';
import moment from 'moment';

const RelatedVideo = ({item}) => {
  return (
    <div className='grid grid-cols-12 border-b-[1px] p-2'>
        <div className='col-span-3'>
          <img className='w-full rounded-md' src={item?.snippet?.thumbnails?.default?.url} alt="Thumbnail"/>
        </div>
        <div className='col-span-9 px-2'>
          <p className='font-semibold text-sm line-clamp-2'>{item?.snippet?.title}</p>
          <p className='text-xs'>{item?.snippet?.channelTitle}</p>
          <p className='text-xs'>{moment(item?.snippet?.publishedAt).fromNow()}</p>
        </div>
      </div>
  );
};

export default RelatedVideo;