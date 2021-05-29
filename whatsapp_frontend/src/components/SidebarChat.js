import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarChat.css";

function SidebarChat({ key,id, name }) {
  const [seed, setSeed] = useState("");
  // console.log(id, "        sidebarchat");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000000));
  }, []);
  // // setSeed(Math.floor(Math.random()*1000000));

  return (
    <Link to={`/room/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="sidebarChat ">
      
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>This is the last message </p>
        </div>
        {/* {console.log(seed)} */}
      </div>
    </Link>
  );
}

export default SidebarChat;
