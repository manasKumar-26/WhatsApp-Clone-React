import React from "react";
import "../sideBar.css";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
function sideBar(props) {
  const { message } = props.lastmessage;
  const user = props.user;
  return (
    <div className="sidebar">
      <div className="side_header">
        <div className="side_left">
          <Avatar src={`${user.dp}`} />
        </div>
        <div className="side_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="side_chats">
        <SidebarChat lastmessage={message} />
      </div>
    </div>
  );
}

export default sideBar;
