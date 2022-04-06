import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'

const Payment = () => {
  const { cartState, cartDispatch } = useCart()
  const [value, setValue] = useState({ price: 0, priceMrp: 0 })
  const [discountPrice, setDiscountPrice] = useState(0)
  const { cart, cartError, totalProductInCart } = cartState

  useEffect(() => {
    let priceDetail = cart.reduce(
      (acc, curr) => ({
        ...acc,
        price: curr.qty * (curr.price + acc.price),
        priceMrp: curr.qty * (curr.priceMrp + acc.priceMrp)
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
          <h2 className='m-tb-1'>Price Detail</h2>
          <p className='m-tb-1'>
            No of items - <span> &nbsp; {totalProductInCart} </span>
          </p>
        </div>
        <div className='payment__checkbox'>
          <p className='m-tb-1'>
            Total Mrp : &nbsp;
            <span>
              {' '}
              <del className='text-danger'> {value.priceMrp}</del>
            </span>
          </p>
          <p className='m-tb-1'>
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
