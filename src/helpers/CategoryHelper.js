import axios from 'axios'
// todo: optimeisw dis hit
export const getCategoryDeatail = async () => {
  const { data: categories } = await axios.get('/api/categories')
  return categories
}
