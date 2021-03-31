// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div>
        <button onClick={openMenu} id="profile-button">
          <img id='coin' src='https://8bitbeats.s3.us-east-2.amazonaws.com/coin.png' />
        </button>
        {showMenu && (
          <ul dir='rtl' className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button id='logout' className="btn red" onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
