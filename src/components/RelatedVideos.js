import React, {useState, useEffect} from 'react';
import { YOUTUBE_RELATED_VIDEO } from '../utils/constants';
import RelatedVideo from './RelatedVideo';

const RelatedVideos = ({id}) => {
  const [relatedVideos, setRelatedVideos] = useState();
  useEffect(()=>{
    getRelatedVideos()
  },[id])

  const getRelatedVideos = async()=>{
    const relVideos = await fetch(YOUTUBE_RELATED_VIDEO + id);
    const data = await relVideos.json()
    setRelatedVideos(data)
  }

  return  !relatedVideos ? null :(
    <>
    {relatedVideos?.items?.map((item)=>(
      <RelatedVideo key={item?.id} item={item}/>
    ))}
    </>
  );
};

export default RelatedVideos;