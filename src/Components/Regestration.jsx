import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { MyContext } from './Context';
import { useDispatch,  } from 'react-redux';
import {  registrationSuccess } from '../Redux/AuthSlice';

const Registration = () => {
  // const { signup,setSignup } = useContext(MyContext);
  const dispatch = useDispatch();
  const mynav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    // setSignup([...signup, { name:username, email:email, password:password }]);
    // console.log(signup);
    dispatch(registrationSuccess({name:username, email, password}))
    mynav('/login');

  };

  return (
    <div>
      <div className="formlogin2">
        <form className="formlogin1" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input className='input-regestration' type="text" id="username" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input className='input-regestration' type="text" id="email" />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className='input-regestration' type="password" id="password" />
          <br />
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
