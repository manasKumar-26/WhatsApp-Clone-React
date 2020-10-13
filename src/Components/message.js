import React from "react";
import "../chat.css";
function message(props) {
  const { message, user } = props;
  return (
    <p
      className={`chat_message ${
        message.email === user.email && "chat_reciver"
      }`}
    >
      <span className="chat_name">{message.name}</span>
      {message.message}
      <span className="chat_timeStamp">
        {message.timestamp.substring(0, 10)}
      </span>
    </p>
  );
}

export default message;
