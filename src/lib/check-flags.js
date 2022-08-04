export default (item, newItem) => {
    // check flags
    const itemFlags = item.flags ? item.flags : false
    const newItemFlags = newItem.flags ? newItem.flags : false
    if (!itemFlags && !newItemFlags) {
      return true
    } else if (!itemFlags && newItemFlags || itemFlags && !newItemFlags) {
      return false
    } else {
      return itemFlags.every(flag => newItemFlags.includes(flag))
    }
  }
  