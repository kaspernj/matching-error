const {digg} = require("@kaspernj/object-digger")

module.exports = function matchingError(error, args) {
  let match = true
  let reThrow = false

  for (const key in args) {
    const value = args[key]

    if (key == "errorName") {
      if (digg(error, "constructor", "name") != value) {
        match = false
        break
      }
    } else if (key == "startsWith") {
      if (!digg(error, "message").startsWith(value)) {
        match = false
        break
      }
    } else if (key == "reThrow") {
      reThrow = true
    } else {
      throw new Error(`Unknown argument: ${key}`)
    }
  }

  if (!match) {
    if (reThrow) {
      throw error
    }

    return false
  }

  return true
}
