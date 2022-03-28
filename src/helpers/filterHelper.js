export const priceAfterDiscount = () => {}
export const getSortedProducts = () => {}
export const getFilteredProducts = () => {}
export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type])
  return [...new Set(unique)]
}
