import moduleName from '../../context/types/ProductTypes'

export const getPost = async id => {
  try {
    // dispatch({ type: START_LOADING })

    // console.log(await api.fetchPost(id));
    const { data } = await api.fetchPost(id)
    console.log(data)
    // dispatch({ type: FETCH_POST, payload: { post: data } })
  } catch (error) {
    console.log(error)
  }
}
