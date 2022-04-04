import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'

const Payment = () => {
  const { cartState, cartDispatch } = useCart()
  const [value, setValue] = useState({ price: 0, priceMrp: 0 })
  const [discountPrice, setDiscountPrice] = useState(0)
  const { cart, cartError, totalProductInCart } = cartState

  useEffect(() => {
    console.log('first')
    let priceDetail = cart.reduce(
      (acc, curr) => ({
        ...acc,
        price: curr.price + acc.price,
        priceMrp: curr.priceMrp + acc.priceMrp
      }),
      {
        price: 0,
        priceMrp: 0
      }
    )
    let discountPrice = priceDetail.priceMrp - priceDetail.price
    setValue(priceDetail)
    setDiscountPrice(discountPrice)
  }, [cartState])

  return (
    <>
      {' '}
      <div className='payment'>
        <div className='payment__details'>
          <h2>Price Detail</h2>
          <p>
            No of items - <span> &nbsp; {totalProductInCart} </span>
          </p>
        </div>
        <div className='payment__checkbox'>
          <p>
            Total Mrp : &nbsp;
            <span>
              {' '}
              <del className='text-danger'> {value.priceMrp}</del>
            </span>
          </p>
          <p>
            Special Discount -{' '}
            <span className='text-info'> &nbsp; {discountPrice}</span>
          </p>
          <p>
            Final Payment - <span> &nbsp; {value.price}</span>
          </p>
        </div>
        <div className='payment__button'>
          <button className='pay__now'>Pay now</button>
        </div>
      </div>
    </>
  )
}

export default Payment
