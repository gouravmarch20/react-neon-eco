import React from 'react'
import './css/SignIn.css'
const SignIn = () => {
  return (
    <div className='signin'>
    <h2 className='subheading'>SignIn</h2>
    <div className='signin__form'>
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

      <button type='submit' className='signup__button'>
        SignIn
      </button>
      <div>
        To create account
        <a href='./signUp.html' className='signin__button'>
          Signup
        </a>
      </div>
    </div>
  </div>
  )
}

export default SignIn
