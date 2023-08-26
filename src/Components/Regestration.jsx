import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const nav = useNavigate();
  return (
    <div>
      <div className="formlogin2">
        <form className="formlogin1">
          <label htmlFor="name">Name</label>
          <br />
          <input className='input-regestration' type="text" id="name" />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className='input-regestration' type="password" id="password" />
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input className='input-regestration' type="password" id="confirmPassword" />
          <br />
          <br />
          
          <button onClick={()=>nav('/')} className="btnform" type="submit">
            Submit
          </button>
          <br /> <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;