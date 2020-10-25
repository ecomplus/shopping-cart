export default item => {
  // fix item final price with customizations additions
  // @TODO handle gift wrap
  if (Array.isArray(item.customizations)) {
    item.customizations.forEach(customization => {
      if (customization.add_to_price) {
        const { type, addition } = customization.add_to_price
        item.final_price += type === 'percentage'
          ? item.price * addition / 100
          : addition
      }
    })
  }
  return item
}
