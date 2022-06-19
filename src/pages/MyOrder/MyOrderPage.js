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
              {orders.map(order => {
                const {
                  products,
                  paymentId,
                  orderId,
                  name,
                  mobileNo,
                  delivery,
                  amount
                } = order

                return (
                  <div>
                    <p>{paymentId}</p>
                    <p>{orderId}</p>
                    <p>{name}</p>
                    {products &&
                      products.map((product, index) => {
                        const {
                          imageSrc,
                          noOfItemInCart,
                          title,
                          price,
                          priceMrp
                        } = product

                        return (
                          <>
                            <div key={index}>
                              {priceMrp}
                              {noOfItemInCart}
                              {title}
                              {price}
                              <img
                                src={imageSrc}
                                className='product__image '
                              ></img>
                            </div>
                          </>
                        )
                      })}
                  </div>
                )
              })}
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
