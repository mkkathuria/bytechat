import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Chat() {
  return (
    <div className="chat border">
      <div className="chat_header border">
        <Avatar />
        <div className="chat_headerInfo border">
          <h3>
            Friend's Name
          </h3>
          <p>
            Last Seen
          </p>
        </div>
        <div className="chat_headerRight border">
        <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        

      </div>
    </div>
  );
}

export default Chat;
