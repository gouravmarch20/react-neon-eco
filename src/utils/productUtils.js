export const discontInPercent = (price, priceMrp) => {
  return Math.ceil(((priceMrp - price) * 100) / priceMrp
)
}
