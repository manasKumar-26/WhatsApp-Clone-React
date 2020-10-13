import React, { useEffect, useState } from "react";
import "../chat.css";
import Message from "./message";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import MicIcon from "@material-ui/icons/MicOutlined";
import axios from "../axios";
function Chat(props) {
  const [messageInput, handleInput] = useState("");
  const user = props.user;
  useEffect(() => {
    document.getElementsByClassName(
      "chat_header_body"
    )[0].scrollTop = document.getElementsByClassName(
      "chat_header_body"
    )[0].scrollHeight;
  }, [props.messages]);
  const { messages } = props;
  const sendMessageFunc = async (e) => {
    e.preventDefault();
    if (messageInput.length <= 0) {
      return;
    }
    await axios.post("/messages/new", {
      message: messageInput,
      name: user.name,
      email: user.email,
    });
    handleInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg"
          alt="roomImg"
        />
        <div className="char_header_title">
          <h3>Our React Group</h3>
          <p>
            Last seen{" "}
            {messages[messages.length - 1].timestamp.substring(11, 19)}
          </p>
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
        {messages.map((message, index) => (
          <Message message={message} user={user} key={index} />
        ))}
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={messageInput}
            onChange={(e) => {
              handleInput(e.target.value);
            }}
          />
          <button onClick={sendMessageFunc}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
