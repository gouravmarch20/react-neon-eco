import { ImageAspectRatioOutlined } from '@mui/icons-material'
import { v4 as uuid } from 'uuid'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
// TODO: flashdeal, office , stationary , mobiletoday category
// export const categories = [
//   {
//     _id: uuid(),
//     category: 'pen',
//     subCategory: ['ballpen', 'inkpen', 'gelpen'],
//     color: ['red', 'blue', 'black', 'green', 'other'],
//     brand: ['link', 'cello', 'nataraj']
//   },
//   {
//     _id: uuid(),
//     category: 'notebook',
//     subCategory: [
//       'plain',
//       'lined',
//       'spiral',
//       'rough',
//       'pratical',
//       'math',
//       'english'
//     ],
//     color: ['red', 'blue', 'green', 'other'],
//     brand: ['classmate', 'navneet']
//   }
// ]

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Pen',
    description:
      'literature in the form of prose, especially novels, that describes imaginary events and people',
    imgUrl:
      'https://www.reynolds-pens.com/wp-content/uploads/2021/08/Reynolds-Home-Page-Marketing-Stats-Box-2.webp'
  },

  {
    _id: uuid(),
    categoryName: 'Book',
    description:
      'Non-fiction is writing that gives information or describes real events, rather than telling a story.',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/A1neM65XRaL.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Notebook',
    description:
      'Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.',
    imgUrl: './assets/category-pick/copy.webp'
  }
]
