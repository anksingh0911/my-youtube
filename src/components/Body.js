import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

const Body = ()=>{
  return(
    <div className='grid grid-cols-12'>
      <Sidebar/>
      {/* <MainContainer/> */}
      <Outlet/>
    </div>
  )
}
export default Body;
