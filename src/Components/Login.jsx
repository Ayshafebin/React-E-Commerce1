import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Shoe.css";
import { FaWordpress } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyContext } from "./Context";

const Login = () => {
  const { signup, setLogin, setUsername } = useContext(MyContext);
  const mynav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "admin@gmail.com" && password === "admin") {
      mynav("/admin");
    } else {
      const filterd = signup.filter((value) => value.email === email);


      
      if (filterd.length !== 0) {
        if (filterd[0].password === password) {
          mynav("/");
          setLogin(true);

          setUsername(filterd[0].username);
        } else {
          alert("Password not valid");
        }
      } else {
        alert("User not found");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="fawordpress">
          <FaWordpress />
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="username"> Email Address</label>
              <input type="text" id="email" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field" />
            </div>
            <div className="form-group remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="login-button">
              Submit
            </button>
          </fieldset>
        </form>
        <div className="centered-link">
          <Link to="/reset">forgot password?</Link>
        </div>
        <div className="centered-link">
          <Link to="/regestration">New user? Please login</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
