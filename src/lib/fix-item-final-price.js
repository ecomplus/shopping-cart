export default item => {
  // fix item final price with customizations additions
  // @TODO handle gift wrap
  item.final_price = item.price
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
  return item
}
