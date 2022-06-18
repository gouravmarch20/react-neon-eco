import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

export const MyOrderPage = () => {
  // TODO: NOTE IN NOTES --> even in refresh it data no disaprer
  const { state } = useLocation()

  const {
    authState: { userInfo, token, isLoggedIn }
  } = useAuth()
  const {
    userState: { orders },
    userDispatch
  } = useUser()
  return (
    <div className=' '>
      {token && isLoggedIn ? (
        <>
          <div>
            <button>Myprofile</button>

            <Link to='/my-address'>
              <button>Address</button>
            </Link>
            <Link to='/my-order'>
              <button>Order</button>
            </Link>
          </div>
          {orders && orders.length !== 0 ? (
            <>
              <h3>Order summary</h3>
              {/* <div className='summary-container'>
                <h3 className='summary-header'>Order confirmed</h3>
                <div className='summary-main'>
                  <p>
                    Order id : <span>{orderId}</span>
                  </p>
                  <p>
                    {' '}
                    Payment Id : : <span>{paymentId}</span>
                  </p>
                  <p className='txt-sm'>
                    Total Amount : <span>₹ {amount}</span>
                  </p>{' '}
                  <p>order will</p>
                </div>
              </div> */}
            </>
          ) : (
            <h2>no order added</h2>
          )}
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
