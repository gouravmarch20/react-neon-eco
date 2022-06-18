import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUser } from '../../context/UserContext'

import { Link } from 'react-router-dom'
import { AddAddressModal } from './AddAddressModal'
import { AddressCard } from './AddressCard'
export const MyAddressPage = () => {
  const {
    authState: { userInfo, token, isLoggedIn }
  } = useAuth()
  const [toogleAddressModal, setToogleAddressModal] = useState(false)
  const {
    userState: { address },
    userDispatch
  } = useUser()
  return (
    <div className=' '>
      {token && isLoggedIn ? (
        <>
          <div>
            <Link to='/my-profile'>
              {' '}
              <button>Myprofile</button>
            </Link>
            <Link to='/my-address'>
              <button>Address</button>
            </Link>
          </div>

          <div>
            <button onClick={() => setToogleAddressModal(!toogleAddressModal)}>
              add address
            </button>

            {toogleAddressModal && (
              <AddAddressModal
                onClose={() => {
                  setToogleAddressModal(false)
                }}
                onAddClick
              />
            )}
            <AddressCard/>
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
