import axios from 'axios'
import toast from 'react-hot-toast'

const headers = {
  authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
}

export const getWishlist = async wishlistDispatch => {
  try {
    const response = await axios.get('/api/user/wishlist', { headers })
    const { data, status } = response
    if (status === 200) {
      wishlistDispatch({
        type: 'GET_ALL_WISHLIST_PRODUCTS',
        payload: data.wishlist
      })
    }
  } catch (error) {
    console.warn(error.message)
  }
}
export const addToWishlist = async (product, wishlistDispatch) => {
  const toastId = toast.loading('Adding item to wishlist...')
  try {
    const response = await axios.post(
      '/api/user/wishlist',
      { product },
      { headers }
    )
    const { data, status } = response
    if (status === 201) {
      toast.success('Item added to wishlist.', {
        id: toastId
      })
      wishlistDispatch({
        type: 'ADD_WISHLIST_PRODUCT',
        payload: data.wishlist
      })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
  }
}
export const deleteFromWishlist = async (productId, wishlistDispatch) => {
  const toastId = toast.loading('Deleting item from wishlist...')
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers
    })
    const { status, data } = response

    if (status === 200) {
      toast.success('Item deleted from wishlist.', {
        id: toastId
      })
      wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: data.wishlist })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
    console.warn(error)
  }
}
