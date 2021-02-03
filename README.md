# matching-error

## Usage

```js
try {
  something()
} catch (error) {
  if (matchingError(error, {errorName: "CustomError", reThrow: true})) {
    // Handle error
  }
}
```
