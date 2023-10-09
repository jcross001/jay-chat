import { doc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { ChatCtx } from '../context/ChatCtx';
import { db } from '../firebase';
import Message from './Message';

const Messages = () => {
  const { data } = useContext(ChatCtx);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    }
  }, [data.chatId]);
console.log(messages);
  return (
    <div className='messages'>
        {messages.map(m => (
          <Message key={m.id} message={m} />
        ))}
    </div>
  )
}

export default Messages;