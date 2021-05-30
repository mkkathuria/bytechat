import { Avatar, IconButton, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
import Axios from "../axios";
import { useParams } from "react-router";
import Pusher from "pusher-js";

function Chat() {
  

  const [input, setInput] = useState("");
  const { room_id } = useParams();
  //console.log(room_id,"     room id");
  const [allmessages, setAllmessages] = useState([]);
  const sendmsg = async (e) => {
    e.preventDefault();

    await Axios.post("/api/messages/new", {
      name: "mukul",
      message: input,
      timestamp: "dflskjl",
      received: false,
      room_id: room_id,
    });

    setInput("");
  };

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000000));
  }, []);
  // // setSeed(Math.floor(Math.random()*1000000));
  useEffect(() => {
    (async () => {
      const msgeeees = await Axios.get(`/api/messages/room/${room_id}`);
      setAllmessages(msgeeees.data);
    })();
  }, [room_id]);

  useEffect(() => {
    const pusher = new Pusher("7e1c9fc88e785ac03390", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("updated",  async (newMessage) => {
      // alert(JSON.stringify(newMessage));
       const msgeeees = await Axios.get(`/api/messages/room/${room_id}`);
       setAllmessages(msgeeees.data);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [allmessages,room_id]);
  console.log(allmessages, " this is all msges");
  return (
    <div className="chat border">
      <div className="chat_header border">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
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
        {allmessages.map((msg) => (
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
