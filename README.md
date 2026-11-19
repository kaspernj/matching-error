# matching-error

This README-only change verifies that documentation edits do not select the test build.

## Usage

```js
const matchingError = require("matching-error")

try {
  something()
} catch (error) {
  if (matchingError(error, {errorName: "CustomError", reThrow: true})) {
    // Handle error
  }
}
```
