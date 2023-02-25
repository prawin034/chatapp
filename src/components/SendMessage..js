import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../firebase';
const SendMessage = ({ scroll }) => {
  const [input, setinput] = useState('');

  const onsubmit = async (event) => {
    event.preventDefault();

    if (input === '') {
      alert('PLEASE ENTER MESSAGE');
      return;
    }

    const { uid, displayName } = auth.currentUser;

    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setinput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <form onSubmit={onsubmit} className="form">
      <input
        value={input}
        onChange={(e) => setinput(e.target.value)}
        type="text"
        placeholder="Message"
        className="form_input"
      />
      <button className="form_btn" type="submit">
        SEND
      </button>
    </form>
  );
};

export default SendMessage;
