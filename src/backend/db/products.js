import { v4 as uuid } from 'uuid'

/**
 * Product Database can be added here.
 * */
// TODO: PRODUCT DETAIL , SPECFIACAITION  , FAQ detail

export const products = [
  {
    _id: uuid(),
    title: 'arihant reasoning',
    brand: 'arihant',
    price: 1211,
    priceMrp: 1530,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kbcjpu80/book/1/0/3/a-new-approach-to-reasoning-verbal-non-verbal-original-imafspq636zdqwea.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'Classmate octane',
    brand: 'classmate',
    price: 711,
    priceMrp: 830,
    categoryName: 'copy',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kksmikw0/diary-notebook/v/6/u/navneet-youva-soft-bound-long-book-feminine-series-17x27-cm-original-imagy2cyaavhrbda.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'Reynolds  .45',
    brand: 'Reynolds',
    price: 233,
    priceMrp: 530,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc: 'https://rukminim1.flixcart.com/image/416/416/ktuewsw0/pen/n/0/9/2083295-reynolds-original-imag73htv9xkh4ud.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'link ocean',
    brand: 'link',
    price: 399,
    priceMrp: 400,
    categoryName: 'pen',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: false,
    imageSrc: './assets/pen/link.webp'
  },
  {
    _id: uuid(),
    title: 'atomic habits',
    brand: 'pi-pack',
    price: 499,
    priceMrp: 500,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'subconscious ',
    brand: 'pi-pack',
    price: 499,
    priceMrp: 500,
    categoryName: 'book',
    inStock: 12,
    featured: true,
    rating: 4.6,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/ki214sw0-0/book/n/w/g/the-power-of-your-subconscious-mind-original-imafxxvxsgzgd7gq.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'pratical notebook',
    brand: 'classmate',
    price: 399,
    priceMrp: 500,
    categoryName: 'copy',
    inStock: 12,
    featured: false,
    rating: 3,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/khf63680/diary-notebook/r/4/b/classmate-02001283qqdm-original-imafxft8gg5ab5vf.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'math class 10',
    brand: 'ncert',
    price: 300,
    priceMrp: 500,
    categoryName: 'book',
    inStock: 12,
    featured: false,
    rating: 4,
    noOfItemInCart: 1,

    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/regionalbooks/n/n/n/ncert-mathematics-books-set-class-6-to-10-english-medium-original-imaftk93xf2upfbg.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'luxor notebook A4',
    brand: 'luxor',
    price: 799,
    priceMrp: 1500,
    categoryName: 'copy',
    inStock: 12,
    featured: false,
    rating: 3,
    noOfItemInCart: 1,
    cashOnDelivery: true,
    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/k4a7c7k0/diary-notebook/h/y/z/luxor-9000028346-original-imafn7shggzmhws7.jpeg?q=70'
  },
  {
    _id: uuid(),
    title: 'classmate diary',
    brand: 'classmate',
    price: 699,
    priceMrp: 800,
    categoryName: 'copy',
    inStock: 12,
    featured: true,
    rating: 3,
    cashOnDelivery: true,
    noOfItemInCart: 1,

    assuredProuduct: true,
    imageSrc:
      'https://rukminim1.flixcart.com/image/416/416/jynat8w0/diary-notebook/h/j/g/classmate-2001235-original-imafgu2fhd94ujfe.jpeg?q=70'
  }
]
