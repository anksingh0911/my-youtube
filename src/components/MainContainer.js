import React from "react";
import { Outlet } from "react-router-dom";
import ButtonsList from "./ButtonsList";

const MainContainer = ()=>{
  return(
    <div className="col-span-10 p-2">
    <ButtonsList/>
    <Outlet/>
    </div>
  )
}
export default MainContainer;