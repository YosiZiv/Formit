import React from "react";
import "./messages.css";
const Messages = ({ messages, color = "#000000" }) => {
  const mapMessages = Object.entries(messages).map((message) => (
    <p key={message[0]}>{message[1]}</p>
  ));
  return (
    <div style={{ color }} className='message-container'>
      {mapMessages}
    </div>
  );
};

export default Messages;
