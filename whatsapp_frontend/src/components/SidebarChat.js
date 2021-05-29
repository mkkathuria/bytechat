import { Avatar} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000000));
  },[]);
  // // setSeed(Math.floor(Math.random()*1000000));

  

  return (
    <div className="sidebarChat ">
      {console.log(seed)}
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      
      <div className="sidebarChat_info">
        <h2>Friend's Name</h2>
        <p>This is the last message </p>
      </div>
      {console.log(seed)}
    </div>
  );
}

export default SidebarChat;
