import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import { toggleMenu } from "../utils/appSlice";

const Header = ()=>{
  const dispatch = useDispatch()
  const handleToggleMenu =()=>{
    dispatch(toggleMenu());
  }
  return(
    <div className="grid grid-flow-col shadow-md flex-wrap p-3 items-center justify-between">
      <div className="flex items-center col-span-1">
        <img 
        onClick={()=> handleToggleMenu()}
        className="w-[30px] cursor-pointer"
        alt="hamburger_menu"
        src="/hamburger.png"
        />
        <img 
          className="w-[100px] ml-4"
          alt="logo"
          src="/logo.png"
        />
      </div>
      <div className="flex col-span-10 justify-center">
        <input className="w-1/2 border border-gray-400 px-2 py-1 rounded-l-full " type="text" placeholder="Search"/>
        <button className="bg-gray-300 text-black-700 px-3 py-2 rounded-r-full">
          <AiOutlineSearch/>
        </button>
      </div>

      <div className="col-span-1">
        <AiOutlineUser className="w-8 h-8"/>
      </div>
    </div>
  )
  }
  export default Header;
