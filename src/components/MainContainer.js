import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ButtonsList from "./ButtonsList";

const MainContainer = ()=>{
  const isMenuOpen  = useSelector(store=> store.app.isMenuOpen);
  const isDark = useSelector(store => store.app.isDark)
  return(
    <div className={isMenuOpen === true ? `${ `${isDark ? "dark" : ""} col-span-10 p-2`}` : `${isDark ? "dark" : ""} col-span-12 p-2}`}>
    <ButtonsList/>
    <Outlet/>
    </div>
  )
}
export default MainContainer;