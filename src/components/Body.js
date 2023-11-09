import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = ()=>{
  const isDark = useSelector((store)=> store?.app?.isDark)
  return(
    <div className={`grid grid-cols-12 dark:bg-gray-800`}>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}
export default Body;
