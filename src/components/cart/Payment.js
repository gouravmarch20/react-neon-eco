import React from 'react'

const Payment = () => {
  return (
    <>
      {' '}
      <div className='payment'>
        <div className='payment__details'>
          <h2>Price Detail</h2>
          <p>
            No of items - <span> &nbsp; 5 </span>
          </p>
        </div>
        <div className='payment__checkbox'>
          <p>
            Total Mrp : &nbsp;
            <span>
              {' '}
              <del className='text-danger'> 500 </del>
            </span>
          </p>
          <p>
            Special Discount - <span className='text-danger'> &nbsp; 30</span>
          </p>
          <p>
            Final Payment - <span> &nbsp; 470</span>
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
