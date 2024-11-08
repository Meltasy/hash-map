module.exports.createNode = function({ key, value }, next) {
    return {
      key: key,
      value: value,
      next: next = null
    }
  }