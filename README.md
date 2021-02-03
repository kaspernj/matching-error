# matching-error

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
