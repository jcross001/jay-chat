import { useContext, useEffect, useRef } from "react";
import { AuthCtx } from "../context/AuthCtx";
import { ChatCtx } from "../context/ChatCtx";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthCtx);
  const { data } = useContext(ChatCtx);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behaviour: "smooth"});
  }, [message]);

  return (
    <div ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
