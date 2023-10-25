import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './Context';

const Registration = () => {
  const { setSignup, signup } = useContext(MyContext);
  const mynav = useNavigate();

  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic form validation
    const validationErrors = {};
    
    if (!username) {
      validationErrors.username = "Username is required.";
    }

    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, set the state and prevent submission
      setErrors(validationErrors);
    } else {
      // If there are no validation errors, submit the form
      setSignup([...signup, { username: username, email: email, password: password }]);
      mynav('/login');
    }
  };

  return (
    <div>
      <div className="formlogin2">
        <form className="formlogin1" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className='input-regestration'
            type="text"
            id="username"
          />
          <br />
          <p className="error-text">{errors.username}</p> {/* Display username error */}
          <br />
          <label htmlFor="email">Email</label>
          <input
            className='input-regestration'
            type="text"
            id="email"
          />
          <br />
          <p className="error-text">{errors.email}</p> {/* Display email error */}
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className='input-regestration'
            type="password"
            id="password"
          />
          <br />
          <p className="error-text">{errors.password}</p> {/* Display password error */}
          <br />
          
          <button className="btnform" type="submit">
            Register
          </button>
        
          <br /> <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;
