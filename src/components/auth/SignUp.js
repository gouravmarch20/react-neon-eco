import React from 'react'
import './css/SignUp.css'
const SignUp = () => {
  return (
    <div className='signup'>
      <h2 className='subheading'>
        SignUp - <span>Create an account</span>
      </h2>
      <div className='signup__form'>
        <div>
          <label htmlFor='username'>User Name</label>
          <input type='text' name='' id='' />
        </div>
        <div>
          <label htmlFor='email' className='email-label'>
            Email
          </label>
          <input type='email' name='' id='' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='' id='' />
        </div>
        <div>
          <label htmlFor='cPassword'>Confirm Password</label>
          <input type='password' name='' id='' />
        </div>

        <button type='submit' className='signup__button'>
          SignUp
        </button>
        <div>
          Already signed up go to
          <a href='./signIn.html' className='signin__button'>
            Signin
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
