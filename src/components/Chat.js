import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import Message from './Message';
import SendMessage from './SendMessage.';
const Chat = () => {
  const [messages, setmessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querysnapshot) => {
      let messages = [];
      querysnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setmessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="chat">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {/* send messagess */}
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
      </div>
    </>
  );
};

export default Chat;
