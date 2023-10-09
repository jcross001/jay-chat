import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthCtx = createContext();

export const AuthCtxProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  // Authenticate User or check if user is logged in
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthCtx.Provider value={{ currentUser }}>{children}</AuthCtx.Provider>
  );
};
