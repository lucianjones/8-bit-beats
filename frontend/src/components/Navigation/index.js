// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import UploadSongModal from '../UploadSongModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  
  function demo(e) {
      e.preventDefault();
      return dispatch(sessionActions.login({ credential: 'demo@aa.io',
                                             password: 'password'
                                            }))

  };

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
          <button className='btn yellow' id='demo' onClick={demo}>Demo User</button>
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
