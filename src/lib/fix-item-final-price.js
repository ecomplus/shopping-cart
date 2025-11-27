export default item => {
  // preset final price
  let multiplier = 1
  let finalPrice = 0
  if (item.kit_product && item.kit_product.base_price && item.kit_product.price) {
    multiplier = item.kit_product.price / item.kit_product.base_price
    finalPrice = multiplier * item.price
  }
  item.final_price = item.kit_product && item.kit_product.price && item.kit_product.pack_quantity
    // set final price from kit
    ? finalPrice
      ? finalPrice
      : item.kit_product.price / item.kit_product.pack_quantity
    : item.price

  // fix item final price with customizations additions
  if (Array.isArray(item.customizations)) {
    item.customizations.forEach(customization => {
      if (customization.add_to_price) {
        const { type, addition } = customization.add_to_price
        item.final_price += type === 'fixed'
          ? addition
          : item.price * addition / 100
      }
    })
  }

  // @TODO handle gift wrap
  return item
}
