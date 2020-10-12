import React from "react";
import "../chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MicIcon from "@material-ui/icons/MicOutlined";
function Chat(props) {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="char_header_title">
          <h3>Room Name</h3>
          <p>Last seen Fri,04 Sept 2020 18:00:16 GMT</p>
        </div>
        <div className="chat_header_icons">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_header_body">
        <p className="chat_message">
          <span className="chat_name">Manas</span>
          This is a dummy message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_reciver">
          <span className="chat_name">Manas</span>
          This is a dummy message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_reciver">
          <span className="chat_name">Manas</span>
          This is a dummy message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Manas</span>
          This is a dummy message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_reciver">
          <span className="chat_name">Manas</span>
          This is a dummy message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
