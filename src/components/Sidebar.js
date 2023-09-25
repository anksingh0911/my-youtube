import React  from "react";
import { useSelector } from "react-redux";

const Sidebar = ()=>{
  const isMenuOpen  = useSelector(store=> store.app.isMenuOpen);
  if(isMenuOpen === false) return null;

  return(
    <div className="col-span-1 p-2 shadow-md bg-white">
      <ul className="pl-1 mb-2">
      <li>Home</li>
      <li>Shorts </li>
      <li>Library</li>
      <li>History</li>
    </ul>
    <h3 className="font-bold">Subscription</h3>
    <ul className="pl-1 mb-2">
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
      <li>News</li>
    </ul>
    <h3 className="font-bold">Watch Later</h3>
    <ul className="pl-1 mb-2">
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
      <li>News</li>
    </ul>
    <h3 className="font-bold">More from You tube</h3>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
      <li>News</li>
    </ul>
    </div>
  )
}
export default Sidebar;