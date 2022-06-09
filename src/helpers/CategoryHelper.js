import axios from 'axios'
export const getCategoryDeatail = async () => {
  const { data: categories } = await axios.get('/api/categories')
  return categories
}
