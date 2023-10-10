import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
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
      <Link to={"/watch?v="+ item?.contentDetails?.upload?.videoId }>
        <RelatedVideo key={item?.id} item={item}/>
      </Link>
    ))}
    </>
  );
};

export default RelatedVideos;