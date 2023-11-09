import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { toggleMenu, darkTheme } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";


const Header = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState();
  const [showSuggestion, setShowSuggestion] = useState(false)
  const searchCache = useSelector((store) => store?.search);
  const isDark = useSelector((store)=> store?.app?.isDark)
  
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  
  

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSearchSuggestion(searchCache[searchInput]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS+searchInput);
    const apiResp = await data.json();
    setSearchSuggestion(apiResp[1]);
    dispatch(
      cacheResult({
        [searchInput]: apiResp[1],
      })
    );
  };


  return (
    <div className={`grid grid-flow-col shadow-md flex-wrap p-3 items-center justify-between ${isDark ? "dark shadow-white shadow-inner" : 'light'}`}>
      <div className="flex items-center col-span-1">
        <img
          onClick={() => handleToggleMenu()}
          className="w-[30px] cursor-pointer"
          alt="hamburger_menu"
          src="/hamburger.png"
        />
        <Link to='/'>
          <img className="w-[100px] ml-4" alt="logo" src={isDark ? "/logo_dark.png": "/logo.png"} />
        </Link>
      </div>
      <div className=" col-span-10">
        <div className="relative flex justify-center">
          <input
            className={`w-1/2 border border-gray-400 px-2 py-2 rounded-l-full ${isDark ? "dark": ""}`}
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={(e)=> setShowSuggestion(true)}
            onKeyDown={(e)=>{
              if(e.keyCode=== 13){
                window.location.href="/results?search_query="+searchInput;
              }
            }}
          />
          <button className={`bg-gray-300 border-[1px] text-black-700 px-3 py-2 rounded-r-full ${isDark ? "dark": ""}`}>
            <AiOutlineSearch />
          </button>
          {searchSuggestion && showSuggestion &&  (
            <div className={`absolute mt-11 w-[50%] bg-white shadow-md py-2 rounded-md ${isDark ? "dark": ""}`}>
              <ul>
                {searchSuggestion?.map((item,index) => (
                  <li className="w-full" 
                  onClick={()=>(
                    setSearchInput(item),
                    setShowSuggestion(false)
                    )}>
                    <Link key={index} className="flex px-2 items-center text-md font-semibold border-b-[1px] py-2 hover:bg-gray-100" to={"/results?search_query="+item}><AiOutlineSearch className="mr-2" />{item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-between">
        <button className="bg-transparent text-lg" onClick={()=> dispatch(darkTheme())}>
          {isDark === true ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </button>
        <AiOutlineUser className="w-8 h-8" />
      </div>
    </div>
  );
};
export default Header;
