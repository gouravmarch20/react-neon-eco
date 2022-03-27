import React, { useState } from 'react'
import './css/SignUp.css'
const SignUp = () => {
  const [newUserName, setNewUserName] = useState('')
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserPassword, setNewUserPassword] = useState('')
  const [newUserConformPassword, setNewUserConformPassword] = useState('')

  const signupUser = (event) => {
    event.preventDefault()
    

  }
  return (
    <div className='signup'>
      <h2 className='subheading'>
        SignUp - <span>Create an account</span>
      </h2>
      <div className='signup__form'>
        <form onSubmit={signupUser}>
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
        </form>
      </div>
    </div>
  )
}

export default SignUp
