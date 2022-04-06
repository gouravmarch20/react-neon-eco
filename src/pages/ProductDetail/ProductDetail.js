import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { getSpeceficProductDetail } from '../../helpers/'
import axios from 'axios'
export const ProductDetail = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    ;(async () => {
      try {
        const data = await getSpeceficProductDetail(productId)

        setProduct(data)
      } catch (error) {
        console.warn(error.message)
      }
    })()
  }, [productId])
  
  return (
    <div>
      {typeof product === 'string' && <h1 className="align-center heading">{product}</h1>}
      {/* {product.keys(empty).length === 0} */}

      <div className='a__product'>
        <div>
          {/* !why image isssue  */}
          <img
            src='https://rukminim1.flixcart.com/image/416/416/ksoz53k0/television/c/p/h/l43m6-es-mi-original-imag6774wykv4ps8.jpeg?q=70'
            alt=''
            className='product__image card'
          />
        </div>
        <section className='a__product__details'>
          <div className='a__product__details-1'>
            <h2 className='subheading'>{product.categoryName}</h2>
            <p>{product.title}</p>
          </div>
          <div className='a__product__details-2'>
            <h4>Rating {product.rating}</h4>
          </div>
          <div className='a__product__details-2'>
            <h4>Brand {product.brand}</h4>
          </div>
          <div className='a__product__details-2'>
            <h4>Category : {product.categoryName}</h4>
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
