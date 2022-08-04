export default (item, newItem) => {
  if (!item.flags && !newItem.flags) {
    return true
  } else if (
    !item.flags ||
    !newItem.flags ||
    item.flags.length !== newItem.flags.length
  ) {
    return false
  } else {
    return item.flags.every(flag => newItem.flags.includes(flag))
  }
}
