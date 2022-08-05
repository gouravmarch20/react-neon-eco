import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { getSpeceficProductDetail } from '../../helpers/'
import Rating from '@mui/material/Rating'

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
      {typeof product === 'string' ? (
        <h1 className='align-center heading'>{product}</h1>
      ) : (
        <div className='a__product'>
          <div className='product-detail-wrapper'>
            <img src={product.imageSrc} alt='' className='' />
          </div>
          <section className='a__product__details'>
            <div className='a__product__details-1'>
              <h2 className='subheading'>{product.title}</h2>
            </div>
            <div className='a__product__details-2'>
              <h4>
                {console.log(product.rating)}
                Rating :
                <p className='card-rating'>
                  {' '}
                  <Rating
                    value={product.rating || 2}
                    readOnly={true}
                    precision={0.5}
                  />
                </p>
              </h4>
            </div>
            <div className='a__product__details-2'>
              <h4>
                Brand : <span> {product.brand} </span>
              </h4>
            </div>
            <div className='a__product__details-2'>
              <h4>
                Category : <span>{product.categoryName}</span>
              </h4>
            </div>
            <div className='a__product__details-3'>
              <h4 className='card-price'>
                <span className='card-price'>Price : {product.price}</span>
              </h4>
              <h4>
                Mrp :<span className='card-price-mrp'>{product.priceMrp}</span>{' '}
              </h4>

              <div className='a__product__details-3__action'>
                {/* <input type='number' value='1' id='' />
              <button>+</button>

              <button>-</button> */}
                <h4>Description </h4>
                <button className='a__product__details-3__action__add__to__cart'>
                  {product.description}
                </button>
              </div>
            </div>
            {/* <div className='a__product__details-4'>{product.description}</div> */}
            {/* <button className='a__product__details-4__sumit__review'>
            Sumit Review
          </button> */}
          </section>
        </div>
      )}
    </div>
  )
}
