import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthCtx } from '../context/AuthCtx';
import { auth } from '../firebase';

const Navbar = () => {
  const {currentUser} = useContext(AuthCtx);
  return (
    <div className="navbar">
      <span className="logo">Jay Chat</span>
      <div className="user">
        <img
          src={currentUser.photoURL}
          alt=""
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default Navbar;