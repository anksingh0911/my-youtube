import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {createBrowserRouter } from 'react-router-dom';
import './App.css';
import {darkTheme} from "./utils/appSlice"
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SearchedVideoContainer from './components/SearchedVideoContainer';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';

export const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    { 
      path:"/",
      element:<MainContainer/>,
      children:[
        {
          path: "/",
          element:<VideoContainer/>
        },
        {
          path: "results",
          element:<SearchedVideoContainer/>
        }
      ]
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      console.log(window.matchMedia('(prefers-color-scheme: dark)').matches, "hello")
      dispatch(darkTheme())
    }
  },[]);
   
  return (
    
      <div>
        <Header/>
        <Body/>
      </div>
      
  );
}

export default App;
