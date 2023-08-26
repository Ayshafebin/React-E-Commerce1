import React from 'react';
import './Shoe.css';
import { FaWordpress } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const nav = useNavigate();


  return (
    <div className="login-page">
      <div className="login-container">
        <div className="fawordpress">
          <FaWordpress />
        </div>
        <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="username">Username or Email Address</label>
              <input type="text" id="username" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field" />
            </div>
            <div className="form-group remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button onClick={()=>nav('/')} type="submit" className="login-button">Login</button>
          </fieldset>
        </form>
        <div className="centered-link">
          <Link to='/reset'>
          Lost your password?          </Link>
        </div>
        <div className="centered-link">
          <Link to='/regestration'>
          New user? Please login          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
