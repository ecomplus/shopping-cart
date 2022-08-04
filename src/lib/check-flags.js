export default (item, newItem) => {
  if (!item.flags && !newItem.flags) {
    return true
  }
  if (
    !item.flags ||
    !newItem.flags ||
    item.flags.length !== newItem.flags.length
  ) {
    return false
  }
  return item.flags.every(flag => newItem.flags.includes(flag))
}
