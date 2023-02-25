import React from 'react';
import { auth } from '../firebase';

const Message = ({ message }) => {
  const messageclass =
    message.uid === auth.currentUser.uid ? 'message' : 'messageright';
  return (
    <div className={messageclass}>
      <div className="message_box">
        <p className="message_box_p">{message.name}</p>
        <p className="message_box_smallp">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
