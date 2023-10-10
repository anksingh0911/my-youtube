import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState();
  const searchCache = useSelector((store) => store?.search);
  
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
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + searchInput);
    const apiResp = await data.json();
    setSearchSuggestion(apiResp[1]);
    dispatch(
      cacheResult({
        [searchInput]: apiResp[1],
      })
    );
  };


  return (
    <div className="grid grid-flow-col shadow-md flex-wrap p-3 items-center justify-between">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => handleToggleMenu()}
          className="w-[30px] cursor-pointer"
          alt="hamburger_menu"
          src="/hamburger.png"
        />
        <img className="w-[100px] ml-4" alt="logo" src="/logo.png" />
      </div>
      <div className=" col-span-10">
        <div className="relative flex justify-center">
          <input
            className="w-1/2 border border-gray-400 px-2 py-2 rounded-l-full "
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="bg-gray-300 text-black-700 px-3 py-2 rounded-r-full">
            <AiOutlineSearch />
          </button>
          {searchInput && (
            <div className="absolute mt-11 w-[50%] bg-white shadow-md py-2 rounded-md">
              <ul>
                {searchSuggestion?.map((item) => (
                  <li className="flex px-2 items-center text-md font-semibold border-b-[1px] py-2 hover:bg-gray-100">
                    <AiOutlineSearch className="mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <AiOutlineUser className="w-8 h-8" />
      </div>
    </div>
  );
};
export default Header;
