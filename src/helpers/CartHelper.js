import axios from 'axios'
import toast from 'react-hot-toast'

export const getCart = async (token, cartDispatch) => {
  try {
    const response = await axios.get('/api/user/cart', {
      headers: { authorization: token }
    })
    const { data, status } = response

    if (status === 200) {
      cartDispatch({
        type: 'GET_CART',
        payload: data.cart
      })
    }
  } catch (error) {
    console.warn(error.message)
  }
}
export const addToCart = async (product, token, cartDispatch) => {
  const toastId = toast.loading('Adding item to cart...')
  try {
    const response = await axios.post(
      '/api/user/cart',
      { product },
      { headers: { authorization: token } }
    )
    const { data, status } = response
    if (status === 201) {
      toast.success('Item added to cart.', {
        id: toastId
      })
      cartDispatch({
        type: 'ADD_CART_PRODUCT',
        payload: data.cart
      })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
  }
}
export const deleteFromCart = async (productId, token, cartDispatch) => {
  const toastId = toast.loading('Deleting item from cart...')
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token }
    })
    const { status, data } = response
    if (status === 200) {
      cartDispatch({ type: 'REMOVE_FROM_CART', payload: data.cart })
      toast.success('Item deleted from cart.', {
        id: toastId
      })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
  }
}
// FIXME: LATER DO
export const emptyCart = async (cart, token, cartDispatch) => {
  const removeOneByOne = async productId =>
    await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token }
    })
  try {
    cart.forEach(cartItem => {
      removeOneByOne(cartItem._id)
    })

    cartDispatch({
      type: 'EMPTY_CART',
      payload: []
    })
  } catch (error) {
    console.warn(error)
  }
}
export const updateQuantity = async (productId, token, toDo, cartDispatch) => {
  const toastId = toast.loading('Updating quantity...')
  try {
    // TODO: NOTE THIS
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: `${toDo}`
        }
      },
      { headers: { authorization: token } }
    )
    const { data, status } = response

    if (status === 200) {
      toast.success('Quantity updated.', {
        id: toastId
      })
      cartDispatch({
        type: 'INCREMENT_DECREMENT__QUANTITY',
        payload: data.cart
      })
    }
  } catch (error) {
    toast.error('Some error occured. Try Again.', {
      id: toastId
    })
  }
}
