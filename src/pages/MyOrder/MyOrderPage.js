import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { MyTabThree } from '../MyProfile/MyTabThree'
import './myOrderPage.css'
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
          <MyTabThree />

          {orders && orders.length !== 0 ? (
            <>
              <h3 className='subheading'>Your Order summary</h3>
              {orders.map((order, index) => {
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
                  <div key={index} className='address-card'>
                    <div className='order-intro'>
                      <div>
                        <p className='text-grey-500'>
                          UserName :{' '}
                          <span className='text-capitalize text-blue'>
                            {' '}
                            {name}
                          </span>
                        </p>
                      </div>
                      <p className='text-grey-500'>
                        {' '}
                        orderId :{' '}
                        <span className='text-grey-300'> {orderId}</span>{' '}
                      </p>{' '}
                    </div>
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
                          <div key={index} className='order-flex'>
                            <div className='order-product-text'>
                              <p className='text-grey-400'>
                                {' '}
                                Name :{' '}
                                <span className='text-capitalize text-grey-600'>
                                  {' '}
                                  {title}
                                </span>
                              </p>

                              <p className='text-grey-400  m-tb-2'>
                                {' '}
                                Price :{' '}
                                <span className='order-price'>
                                  {price}
                                </span>{' '}
                              </p>
                              <p className='text-grey-400 m-tb-2'>
                                No of item :
                                <span className='order-item'>
                                  {noOfItemInCart}
                                </span>
                              </p>
                            </div>

                            <div>
                              <img
                                src={imageSrc}
                                className='order-product-image'
                              ></img>
                            </div>
                          </div>
                        )
                      })}

                    <div>
                      <p className='text-grey-400 m-tb-3'>
                        PaymentId :{' '}
                        <span className='text-grey-300'> {paymentId}</span>
                      </p>
                      <p className='text-grey-400 m-tb-4 '>
                        Address :{' '}
                        <span className='text-grey-300'> {delivery}</span>
                      </p>
                    </div>
                  </div>
                )
              })}
            </>
          ) : (
            <h2 className='subheading'>no order yet</h2>
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
