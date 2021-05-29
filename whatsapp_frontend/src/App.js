import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Pusher from "pusher-js";
// eslint-disable-next-line
import axios from "./axios";

function App() {
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
        <div className="app_body border">
          <Sidebar></Sidebar>
          <Route path="/room/:room_id" component={Chat}></Route>
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
