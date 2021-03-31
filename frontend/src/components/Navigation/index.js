// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import UploadSongModal from '../UploadSongModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div id='top-right'>
        <UploadSongModal />
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div>
          <LoginFormModal />
          <SignupFormModal />
        </div>
      </>
    );
  }

  return (
    <div className="navbuttons cont">
        <NavLink className="logo" exact to="/">
          <span className="btn red"> 8 bit beats </span>
        </NavLink>
        <SearchBar />
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
