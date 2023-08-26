import React from 'react'
import Navbar1 from './Navbar'

const Reset = () => {
  return (
    <div>
        <Navbar1/>
        <div>
            <div className='reset-div'>
                <p className='reset-para'>Lost your password? Please enter your username or email <br /> address. You will receive a link to create a new password via <br /> email.</p>
                <input className='reset-input' type="email" placeholder='Username or email' />
            </div>
        </div>
    </div>
  )
}

export default Reset