import React,{useState, useEffect} from 'react';
import { COMMENTS_LIST } from '../utils/constants';
import Comment from './Comment';

const CommentsList = ({videoId}) => {
  const [commentData, setCommentData]= useState();

  useEffect(()=>{
    getCommentList();
  },[]);
  
  const getCommentList = async()=>{
    const data = await fetch(COMMENTS_LIST+videoId);
    const resp = await data.json();
    setCommentData(resp?.items)
  }
  return commentData?.length > 0 ? (
    <>
      <h4 className='my-4 text-lg font-semibold text-gray-500'>Comments ({commentData?.length})</h4>
      {commentData?.map((item)=>(
        <Comment key={item?.id} data={item}/>
      ))}
    </>
  ): '';
};

export default CommentsList;