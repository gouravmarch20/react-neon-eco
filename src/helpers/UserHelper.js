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
    console.log(tempAddress)
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
export const addOrder = async order => {
  try {
    console.log(order)
  } catch (error) {
    console.warn(error)
  }
}
