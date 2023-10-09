import { createContext, useContext, useReducer } from "react";
import { AuthCtx } from "./AuthCtx";

export const ChatCtx = createContext();

export const ChatCtxProvider = ({ children }) => {
  const { currentUser } = useContext(AuthCtx);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatCtx.Provider value={{ data:state, dispatch }}>{children}</ChatCtx.Provider>
  );
};
