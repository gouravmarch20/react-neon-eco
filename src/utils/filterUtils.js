export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type])
  return [...new Set(unique)]
}
export const getSortedProducts = (data, filterState) => {
  const { sortBy } = filterState
  if (sortBy === null) {
    return data
  }
  if (sortBy === 'PRICE_HIGH_TO_LOW') {
    return [...data].sort((a, b) => b.price - a.price)
  }
  if (sortBy === 'PRICE_LOW_TO_HIGH') {
    return [...data].sort((a, b) => a.price - b.price)
  }
  return data
}
export const getFilteredProducts = (data, filterState) => {
  let tempFilterProducts = [...data]
  const { rating, categories, maxPrice } = filterState

  if (rating) {
    tempFilterProducts = data.filter(item => item.rating >= rating)
  }
  if (maxPrice) {
    tempFilterProducts = tempFilterProducts.filter(
      item => item.price <= maxPrice
    )
  }
  
  if (categories.length !== 0) {
    tempFilterProducts = tempFilterProducts.filter(item =>
      categories.includes(item.categoryName)
    )
  }
  return tempFilterProducts
}

