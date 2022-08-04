export default (item, newItem) => {
    // check flags
    const itemFlags = item.flags
    const newItemFlags = newItem.flags
    if (!itemFlags && !newItemFlags) {
      return true
    } else if (!itemFlags && newItemFlags || itemFlags && !newItemFlags) {
      return false
    } else {
      return itemFlags.every(flag => newItemFlags.includes(flag))
    }
  }
  