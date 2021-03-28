// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
    <div className="navbuttons nes-container is-rounded">
        <NavLink className="logo nes-btn is-error" exact to="/">
          <span className="is-error"> 8 bit beats </span>
        </NavLink>
        <SearchBar />
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
