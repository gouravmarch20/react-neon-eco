import React from 'react'

const Product = () => {
  return (
    <>
      {' '}
      <div className='products__listing'>
        <section className='product__wish'>
          <img
            src='./images/advantage-book.jpg'
            alt='ws'
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>

          <div>
            <button className='buyLater__btn__green buyLater__btn'>
              Move to Cart
            </button>
            <button className='buyLater__btn'>Remove</button>
          </div>
        </section>
        <section className='product__wish'>
          <img
            src='./images/advantage-book.jpg'
            alt='ws'
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>

          <div>
            <button className='buyLater__btn__green buyLater__btn'>
              Move to Cart
            </button>
            <button className='buyLater__btn'>Remove</button>
          </div>
        </section>

        <section className='product__wish'>
          <img
            src='./images/advantage-book.jpg'
            alt=''
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>
          <div>
            <button className='buyLater__btn__green buyLater__btn'>
              Move to Cart
            </button>
            <button className='buyLater__btn'>Remove</button>
          </div>
        </section>
        <section className='product__wish'>
          <img
            src='./images/advantage-book.jpg'
            alt=''
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>
          <div>
            <button className='buyLater__btn__green buyLater__btn'>
              Move to Cart
            </button>
            <button className='buyLater__btn'>Remove</button>
          </div>
        </section>
        <section className='product__wish'>
          <img
            src='./images/advantage-book.jpg'
            alt=''
            className='product__image'
          />
          <p className='product__name'>Link Ocean</p>
          <div className='product__rating'>5 star</div>
          <span className='product__price'>523</span>
          <div>
            <button className='buyLater__btn__green buyLater__btn'>
              Move to Cart
            </button>
            <button className='buyLater__btn'>Remove</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Product
