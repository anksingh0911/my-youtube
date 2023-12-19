import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDark = useSelector((store)=>store?.app?.isDark)
  console.log(isDark)
  if (isMenuOpen === false) return null;
  
  return (
    <div
      className={
        location?.pathname === "/watch" ? `${`absolute top-18 left-0 w-[250px] p-2 shadow-md bg-white ${isDark ? "dark shadow-white": ""}`}`
          : `${`col-span-2 w-full p-2 bg-white ${isDark ? "dark shadow-white shadow-md" : "shadow-md"}`}`
      }
    >
      <ul className="mb-2">
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="/"> Home </Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to={"/results?search_query=shorts"}> Shorts </Link> 
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to={"/results?search_query=library"}>Library</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to={"/results?search_query=history"}> History</Link>
        </li>
      </ul>
      <h3 className="font-bold">Subscription</h3>
      <ul className="pl-1 mb-2">
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="/results?search_query=music">Music</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="/results?search_query=sports">Sports</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="/results?search_query=gaming">Gaming</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="/results?search_query=movies">Movies</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="/results?search_query=news">News</Link>
        </li>
      </ul>
      <h3 className="font-bold">Watch Later</h3>
      <ul className="pl-1 mb-2">
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="#">Music</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="#">Sports</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="#">Gaming</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="#">Movies</Link>
        </li>
        <li className={`${isDark ? "hover:bg-gray-600" : "hover:bg-gray-200"} p-2 text-md hover:bg-gray-200 cursor-pointer`}>
          <Link to="#">News</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
