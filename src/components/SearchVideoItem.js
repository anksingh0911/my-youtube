import React from 'react'

const SearchVideoItem = ({data}) => {
   return (
    <div className='grid grid-cols-12 w-full mb-2 mt-1 p-2 shadow-sm rounded-md border-[1px]'>
      <div className='col-span-2'>
        <img className='w-full rounded-md' src={data?.snippet?.thumbnails?.medium?.url} alt='Thumbnail'/>
      </div>
      <div className='col-span-10 px-2'>
        <p className='font-semibold text-md text-gray-500'>{data?.snippet?.title}</p>
        <p className='text-sm text-gray-500'>{data?.snippet?.channelTitle}</p>
      </div>
    </div>
  )
}
export default SearchVideoItem