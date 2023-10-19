
import { Provider } from 'react-redux';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SearchedVideoContainer from './components/SearchedVideoContainer';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';
import store from './utils/store';

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
  return (
    
      <div>
        <Header/>
        <Body/>
      </div>
      
  );
}

export default App;
