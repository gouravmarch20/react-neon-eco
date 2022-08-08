import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import { getSpeceficProductDetail } from '../../helpers/'
import Rating from '@mui/material/Rating'

export const ProductDetail = () => {
  const navigate = useNavigate()

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
        <>
          <h1 className='align-center heading'>{product}</h1>
          <button className='ctn-btn mt-1' onClick={() => navigate(-1)}>
            Go back
          </button>
        </>
      ) : (
        <>
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
                  Rating :
                  {/* <p className='card-rating'>
                  {' '} */}
                  <Rating
                    className='card-rating'
                    value={product.rating || 2}
                    readOnly={true}
                    precision={0.5}
                  />
                  {/* </p> */}
                </h4>
              </div>
              <div className='a__product__details-2'>
                <h4>
                  Brand : <span className='text-danger'> {product.brand} </span>
                </h4>
              </div>
              <div className='a__product__details-2'>
                <h4>
                  Category :{' '}
                  <span className='text-info'>{product.categoryName}</span>
                </h4>
              </div>
              <div className='a__product__details-3'>
                <h4 className='mt-1'>
                  <span className='text-md mb-1 text-grey-700'> Price : </span>

                  <span className='card-price'>{product.price}</span>
                </h4>
                <h4 className='mt-1 text-grey-700'>
                  <span className='text-md mb-1 text-grey-700'> Mrp : </span>
                  <span className='card-price-mrp'>
                    <s> {product.priceMrp}</s>
                  </span>{' '}
                </h4>

                <div className='a__product__details-3__action  mt-1  '>
                  <h4 className='text-md mb-1 text-grey-700'>Description </h4>
                  <p className='text-grey-400'>{product.description}</p>
                </div>
              </div>
            </section>
          </div>
          <div>
            <button
              className='ctn-btn btn-lg mt-1 '
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </>
      )}
    </div>
  )
}
