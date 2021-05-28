import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
// eslint-disable-next-line
import axios from "./axios";

function App() {
  // eslint-disable-next-line
  const [msges, setMsges] = useState([]);

  useEffect(() => {
    axios.get("/api/messages/sync").then((response) => {
      setMsges(response.data);
    });
  }, []);

  console.log("mukulskjskfksjfs");

  useEffect(() => {
    const pusher = new Pusher("7e1c9fc88e785ac03390", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
     // alert(JSON.stringify(newMessage));
      setMsges([...msges, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [msges]);

  console.log(msges);

  return (
    <div className="app borderbb">
      <div className="app_body border">
        <Sidebar></Sidebar>
        <Chat msges={msges}> </Chat>
      </div>
    </div>
  );
}

export default App;
