export const discontInPercent = (price, priceMrp) => {
  return Math.floor(((priceMrp - price) * 100) / priceMrp
)
}
