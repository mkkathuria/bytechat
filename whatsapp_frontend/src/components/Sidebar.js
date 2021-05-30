import { Avatar, IconButton } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import Axios from "../axios";
import { useEffect } from "react";
import Pusher from "pusher-js";


/* IconButton icon pr button ke effect lgane ke liye hain */

/* ye wale icons hain jaise donutlargeicon */
function Sidebar() {
  const [allrooms, setAllrooms] = useState([]);
  
  useEffect(() => {
    const pusher = new Pusher("7e1c9fc88e785ac03390", {
       cluster: "ap2",
     });
 
     const channel = pusher.subscribe("messages");
     channel.bind("inserted",  async (data) => {
       //alert(JSON.stringify(data));
       const temprooms = await Axios.get("/api/allrooms");
       setAllrooms(temprooms.data);
       

     });
 
     return ()=>{
       channel.unbind_all();
       channel.unsubscribe();
     }
   });

  useEffect(() => {
    (async () => {
      const temprooms = await Axios.get("/api/allrooms");
      //console.log(temprooms.data, "tjis is temprooms");
      setAllrooms(temprooms.data);
    })();
  }, []);
  const createchat = async () => {
    const friendname = prompt("Please Enter Your New Friend's Name");

    if (friendname) {
      ///
      const roomll = await Axios.post("/api/newroom", {
        name: friendname,
      });
    }
  };
 console.log(allrooms);
 // console.log(allrooms, "   this is all rooms");
  return (
    <div className="sidebar border">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search ">
        <div className="sidebar_searchContainer ">
          <SearchIcon />
          <input type="text" placeholder="Search or start new chat"></input>
        </div>
      </div>
      <div className="add_new_chat" onClick={createchat}>
        <h2>Add New Chat</h2>
      </div>
      <div className="sidebar_chats border">
        {allrooms.map((room) => {
        //  console.log(room._id,"initial room id");
          return (
            <SidebarChat
              key={room._id}
              id={room._id}
              name={room.room_name}
            ></SidebarChat>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
