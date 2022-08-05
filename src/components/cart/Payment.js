import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { addOrder, emptyCart } from '../../helpers'
import './css/payment.css'
import { useUser } from '../../context/UserContext'
const Payment = () => {
  const navigate = useNavigate()

  const { cartState, cartDispatch } = useCart()
  const {
    userState: { defaultAddress },
    userDispatch
  } = useUser()
  const [value, setValue] = useState({
    price: 0,
    priceMrp: 0,
    totalItemsInCart: 0
  })
  const {
    authState: { userInfo, token }
  } = useAuth()
  const [discountPrice, setDiscountPrice] = useState(0)
  const { cart } = cartState
  const loadScript = async src => {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const proceedToPay = () => {
    razorpayCheckout()
  }

  const razorpayCheckout = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load, check you connection')
      return
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: value.price * 100,
      currency: 'INR',
      name: 'rail-com',
      description: 'Thankyou for shopping with us',
      image: 'https://trixoon.com/icons/code.svg',
      theme: { color: '#2563eb' },
      handler: function (response) {
        const orderId = uuid()
        const orderData = {
          orderId,
          products: [...cart],
          amount: value.price,
          paymentId: response.razorpay_payment_id,
          name: defaultAddress?.name,
          mobileNo: defaultAddress?.mobileNo,
          delivery: ` ${defaultAddress?.street} ${defaultAddress?.city},${defaultAddress?.state}, ${defaultAddress?.zipCode}`
        }

        addOrder(orderData, userDispatch)
        emptyCart(cart, token, cartDispatch)
        navigate('/my-order', { state: orderData })
      },
      prefill: {
        name: userInfo.firstName,
        email: 'gaurav@tmail.com',
        contact: '8899889899'
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
  useEffect(() => {
    let priceDetail = cart.reduce(
      (acc, curr) => ({
        ...acc,
        price: curr.qty * (curr.price + acc.price),
        priceMrp: curr.qty * (curr.priceMrp + acc.priceMrp),
        totalItemsInCart: curr.qty + acc.totalItemsInCart
      }),
      {
        price: 0,
        priceMrp: 0,
        totalItemsInCart: 0
      }
    )
    let discountPrice = priceDetail.priceMrp - priceDetail.price
    setValue(prev => ({
      ...prev,
      priceMrp: priceDetail.priceMrp,
      price: priceDetail.price,
      totalItemsInCart: priceDetail.totalItemsInCart
    }))
    setDiscountPrice(discountPrice)
  }, [cartState])

  return (
    <>
      {' '}
      <div className='payment-wrapper'>
        <div>
          <h2 className='payment-heading'>Price Detail</h2>
          <p className='payment-item'>
            No of items - <span> &nbsp; {value?.totalItemsInCart} </span>
          </p>
        </div>


        <div className='payment-details'>
          <p className='payment-mrp '>
            Total Mrp : &nbsp;
            <span>
              {' '}
              <del className='payment-mrp'> {value.priceMrp}</del>
            </span>
          </p>
          <p className='payment-discount'>
            Special Discount -{' '}
            <span className='payment-discount'> &nbsp; {discountPrice}</span>
          </p>
          <p className='payment-final'>
            Final Payment - <span> &nbsp; {value.price}</span>
          </p>
        </div>


        <div className=''>
          <button className='ctn-btn-pay  ' onClick={proceedToPay}>
            Pay now
          </button>
        </div>
      </div>
    </>
  )
}

export default Payment
