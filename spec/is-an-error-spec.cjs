const CustomError = require("./support/custom-error.cjs")
const matchingError = require("../index.cjs")

let customError

try {
  throw new CustomError("test1 test2 test3")
} catch (error) {
  customError = error
}

describe("matchingError", () => {
  it("returns true when matching the error class name", () => {
    expect(matchingError(customError, {errorName: "CustomError"})).toEqual(true)
  })

  it("returns false when not matching the error class name", () => {
    expect(matchingError(customError, {errorName: "UnknownError"})).toEqual(false)
  })

  it("returns true when matching the beginning of error message", () => {
    expect(matchingError(customError, {startsWith: "test1 test2"})).toEqual(true)
  })

  it("returns false when not matching the beginning of error message", () => {
    expect(matchingError(customError, {startsWith: "test5"})).toEqual(false)
  })

  it("returns true when matching the error message", () => {
    expect(matchingError(customError, {startsWith: "test1 test2"})).toEqual(true)
  })

  it("returns false when not matching the error message", () => {
    expect(matchingError(customError, {startsWith: "test5"})).toEqual(false)
  })

  it("fails when encountering an unknown argument", () => {
    expect(() => matchingError(customError, {unknownArgument: "Hello"})).toThrow(new Error("Unknown argument: unknownArgument"))
  })
})
