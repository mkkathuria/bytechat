import { Avatar, IconButton, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
import Axios from "../axios";


function Chat(props) {
  const msges = props.msges;
  const [input, setInput] = useState("");

  const sendmsg = async (e) => {
    e.preventDefault();

    await Axios.post("/api/messages/new", {
      name: "mukul",
      message: input,
      timestamp: "dflskjl",
      received: false,
    });

    setInput("");
  };

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
        {msges.map((msg) => (
          <p className={`chat_message ${!msg.received && "chat_send"}`}>
            <span className="chat_name">{msg.name}</span>
            {msg.message}
            <span className="chat_timestamp ">{msg.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Write a msg"
          />
          <button onClick={sendmsg} type="submit">
            {" "}
            Send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
