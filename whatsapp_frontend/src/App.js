import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter,  Route } from "react-router-dom";
// eslint-disable-next-line
import axios from "./axios";
import Login from "./login";
import {useStateValue} from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();
  // eslint-disable-next-line
 // const [msges, setMsges] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/messages/sync").then((response) => {
  //     setMsges(response.data);
  //   });
  // }, []);

 // console.log("mukulskjskfksjfs");
 

  

  return (
    <BrowserRouter>
      <div className="app borderbb">
      {!user ? (
        <Login/>
      ):
        <div className="app_body border">
          <Sidebar></Sidebar>
          <Route path="/room/:room_id" component={Chat}></Route>
         
        </div>
      }
      </div>
    </BrowserRouter>
  );
}

export default App;
