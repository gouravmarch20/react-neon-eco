import React from 'react'
import './ProductDetail.css'
export const ProductDetail = () => {
  return (
    <div>
      <div className='a__product'>
        <div>
          <img
            className='a__product__image'
            src='./images/classmate.jpg'
            alt=''
          />
        </div>
        <section className='a__product__details'>
          <div className='a__product__details-1'>
            <h2>Name</h2>
            <p>Subheading</p>
          </div>
          <div className='a__product__details-2'>
            <h4>Rating : 4 star</h4>
          </div>
          <div className='a__product__details-3'>
            <h4>Price : 66</h4>
            <div className='a__product__details-3__action'>
              <input type='number' value='1' id='' />
              <button>+</button>

              <button>-</button>
              <button className='a__product__details-3__action__add__to__cart'>
                Add to cart
              </button>
            </div>
          </div>
          <div className='a__product__details-4'>
            <p>
              Description : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate provident nostrum in reiciendis earum, libero
              culpa, recusandae similique sint sit dicta maxime.
            </p>
          </div>
          <button className='a__product__details-4__sumit__review'>
            Sumit Review
          </button>
        </section>
      </div>
      <div className='a__product__review'>
        <h2>User reviews</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
          nihil eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
          nihil eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex
          nihil eligendi.
        </p>
      </div>
    </div>
  )
}

