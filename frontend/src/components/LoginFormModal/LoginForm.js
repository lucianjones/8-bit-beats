// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className='login-label'>
        Username or Email
        <input
          className="inpt-yellow login-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className='login-label'>
        Password
        <input
          className="inpt-yellow login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn green login-button">Log In</button>
    </form>
  );
}

export default LoginForm;
