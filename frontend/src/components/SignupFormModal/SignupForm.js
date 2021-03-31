// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit} className='signup-form'>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className='signup-label'>
        Email
        <input
          className="inpt-yellow signup-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className='signup-label'>
        Username
        <input
          className="inpt-yellow signup-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className='signup-label'>
        Password
        <input
          className="inpt-yellow signup-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className='signup-label'>
        Confirm Password
        <input
          className="inpt-yellow signup-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn green signup-button">Sign Up</button>
    </form>
  );
}

export default SignupForm;
