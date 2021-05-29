import { Avatar, IconButton } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

/* IconButton icon pr button ke effect lgane ke liye hain */

/* ye wale icons hain jaise donutlargeicon */
function Sidebar() {
 
   const createchat= ()=>{
     const friendname = prompt("Please Enter Your New Friend's Name");

     if(friendname){
       ///
     }
   }


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
          <input  type="text" placeholder="Search or start new chat"></input>
        </div>
      </div>
      <div className="add_new_chat" onClick={createchat}>
        <h2 >Add New Chat</h2>
      </div>
      <div className="sidebar_chats border">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>



      </div>
      
    </div>
  );
}

export default Sidebar;
