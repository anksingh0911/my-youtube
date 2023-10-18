import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
  return(
    <div className="col-span-12 p-2">
    <ButtonsList/>
    <VideoContainer/>
    </div>
  )
}
export default MainContainer;