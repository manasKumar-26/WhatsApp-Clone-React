import React from "react";
import "../sideBar.css";
import { Avatar } from "@material-ui/core";
function SidebarChat(props) {
  return (
    <div className="sidebar_Chat">
      <Avatar
        src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
        alt="room_logo"
      />
      <div className="chatInfo">
        <h2>Our React Group</h2>
        <p>{props?.lastmessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
