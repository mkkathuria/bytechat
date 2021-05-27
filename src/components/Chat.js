import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  return (
    <div className="chat border">
      <div className="chat_header border">
        <Avatar />
        <div className="chat_headerInfo border">
          <h3>Friend's Name</h3>
          <p>Last Seen</p>
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

      <div className="chat_body">
        <p className="chat_message ">
          <span className="chat_namer">mukul</span>
          this is a msgfdfdsjfhfjhsjkfhdsjkfhasdjf Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis reprehenderit numquam eaque a qm!
          <span className="chat_timestamp ">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_send">
          <span className="chat_name">mukul</span>
          this is a msgfdfdsjfhfm!
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_send">
          <span className="chat_name">mukul</span>
          this is a msgftyf
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

      </div>
      <div className="chat_footer">
      <EmojiEmotionsIcon/>
      <form >
        <input type="text" placeholder="Write a msg" />
        <button type="submit"> Send</button>
      </form>
      <MicIcon/>


      </div>
    </div>
  );
}

export default Chat;
