import axios from 'axios'
const headers = {
  authorization:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4MTAyMWNjNC00YjFkLTQyOGItYjJmMC0wNjhkYTQ4YTk4MzQiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.45ynQ6aZhoM1zsNwIKCYR_IATaszKn0ssvnPPQkKL8E'
}

export const getCart = async cartDispatch => {
  try {
    const response = await axios.get('/api/user/wishlist', { headers })
    const { data, status } = { ...response }
    if (status === 200) {
      cartDispatch({
        type: '',
        payload: data.wishlist
      })
    }
  } catch (error) {
    console.warn(error.message)
  }
}
export const addToCart = async (product, cartDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/cart',
      { product },
      { headers }
    )
    const { data, status } = response
    if (status === 201) {
      cartDispatch({
        type: 'ADD_CART_PRODUCT',
        payload: data.cart
      })
    }
  } catch (error) {
    console.warn(error)
  }
}
export const deleteFromCart = async (productId, cartDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers
    })
    const { status, data } = response

    if (status === 200) {
      cartDispatch({ type: 'REMOVE_FROM_CART', payload: data.cart })
    }
  } catch (error) {
    console.warn(error)
  }
}



export const updateQuantity = async (productId, toDo, cartDispatch) => {
  const response = await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: `${toDo}`
      }
    },
    { headers }
  )
  const { data, status } = response

  if (status === 200) {
    cartDispatch({ type: 'INCREMENT_DECREMENT__QUANTITY', payload: data.cart })
  }
}
