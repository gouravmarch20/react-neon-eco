import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUser } from '../../context/UserContext'
import { MyTabThree } from './MyTabThree'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'
import './myProfile.css'
export const MyProfile = () => {
  let location = useLocation()
  const [currentLocation, setCurrentLocation] = useState('')
  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location])
  const {
    authState: { userInfo, token, isLoggedIn }
  } = useAuth()
  return (
    <div className=' '>
      {token && isLoggedIn ? (
        <>
          <MyTabThree />
          <div className='align-center'>
            <div className='  my-profile'>
              <p className='my-profile-content'>
                FirstName - <span>{userInfo?.user?.firstName} </span>
              </p>
              <p className='my-profile-content'>
                {' '}
                LastName - {userInfo?.user?.lastName}
              </p>
              <p className='my-profile-content'>
                Email - {userInfo?.user?.email}
              </p>
            </div>
          </div>{' '}
        </>
      ) : (
        <div className='auth-login'>
          <h2 className='login-message-heading4'>Please login first </h2>
          <br />
          <div className='login-cta'>
            <Link to='/signin'>
              <button className='ctn-btn'>Login Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
// lastName , firstName ,email
