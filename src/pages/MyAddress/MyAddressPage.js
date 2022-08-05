import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUser } from '../../context/UserContext'
import { MyTabThree } from '../MyProfile/MyTabThree'

import { Link } from 'react-router-dom'
import { AddAddressModal } from './AddAddressModal'
import { AddressCard } from './AddressCard'
export const MyAddressPage = () => {
  const {
    authState: { userInfo, token, isLoggedIn }
  } = useAuth()
  const [toogleAddressModal, setToogleAddressModal] = useState(false)
  const {
    userState: { address, defaultAddress },
    userDispatch
  } = useUser()
  return (
    <div className=' '>
      {token && isLoggedIn ? (
        <>
          <MyTabThree />

          <div>
            <button
              onClick={() => setToogleAddressModal(!toogleAddressModal)}
              className='btn btn mini-ctn-btn'
            >
              Add Address
            </button>

            {toogleAddressModal && (
              <AddAddressModal
                onClose={() => {
                  setToogleAddressModal(false)
                }}
                onAddClick
              />
            )}
            <AddressCard defaultAddress={defaultAddress} />
          </div>
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
