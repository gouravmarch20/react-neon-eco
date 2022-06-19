export const updateAddress = async (
  _id,
  updateAddress,
  address,
  userDispatch
) => {
  try {
    const tempAddress = address.map(_address =>
      _address._id !== _id ? _address : updateAddress
    )
    userDispatch({ type: 'UPDATE_ADDRESS', payload: tempAddress })
  } catch (error) {
    console.warn(error)
  }
}
export const deleteAddress = async (_id, address, userDispatch) => {
  try {
    const tempAddress = address.filter(_address => _address._id !== _id)
    userDispatch({ type: 'DELETE_ADDRESS', payload: tempAddress })
  } catch (error) {
    console.warn(error)
  }
}
export const addAddress = async () => {
  try {
  } catch (error) {
    console.warn(error)
  }
}
//TODO:
export const addOrder = async (order, userDispatch) => {
  try {
    userDispatch({ type: 'ADD_ORDER', payload: order })
  } catch (error) {
    console.warn(error)
  }
}
