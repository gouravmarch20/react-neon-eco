import { v4 as uuid } from 'uuid'

/**
 * Product Database can be added here.
 * */
// TODO: PRODUCT DETAIL , SPECFIACAITION  , FAQ detail

export const products = [
  {
    _id: uuid(),
    title: 'Classmate long',
    brand: 'classmate',
    price: 199,
    priceMrp: 500,
    categoryName: 'copy',
    inStock: 12,
    featured: true,
    rating: 4.6,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'cello pen',
    brand: 'classmate',
    price: 399,
    priceMrp: 500,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    cashOnDelivery: true,
    assuredProuduct: false,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'Classmate pen',
    brand: 'classmate',
    price: 499,
    priceMrp: 500,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'pilot ',
    brand: 'classmate',
    price: 499,
    priceMrp: 500,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'Classmate long',
    brand: 'classmate',
    price: 399,
    priceMrp: 500,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 3,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'Classmate long',
    brand: 'classmate',
    price: 300,
    priceMrp: 500,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 3,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'Classmate long',
    brand: 'classmate',
    price: 799,
    priceMrp: 1500,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 3,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  },
  {
    _id: uuid(),
    title: 'portronic',
    brand: 'invo',
    price: 3499,
    priceMrp: 5300,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 3,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: './assets/advantage-book.jpg'
  }
]
