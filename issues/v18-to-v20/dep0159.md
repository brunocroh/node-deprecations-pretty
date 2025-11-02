# ERR_INVALID_CALLBACK error code

## Description

Since the `ERR_INVALID_CALLBACK` error code is deprecated (DEP0159) and has reached End-of-Life status in Node.js v18.0.0, we should provide a codemod to replace it.

- The codemod should replace references to `ERR_INVALID_CALLBACK` with `ERR_INVALID_ARG_TYPE`.
- The codemod should handle error code checks in catch blocks and error handling.
- The codemod should update error message expectations in tests.
- The codemod should handle both string comparisons and property access patterns.

## Additional Information

Note that the `ERR_INVALID_CALLBACK` error code was removed in Node.js v18.0.0. This error code was deprecated because it added more confusion to the errors used for value type validation. Instead, Node.js now uses the more general `ERR_INVALID_ARG_TYPE` error code for callback validation errors.

When a callback is not a function, Node.js will now throw an `ERR_INVALID_ARG_TYPE` error instead of `ERR_INVALID_CALLBACK`.

## Examples

### Example 1: Error code comparison in catch block

**Before:**

```js
try {
  fs.readFile("file.txt", "invalid-callback");
} catch (err) {
  if (err.code === "ERR_INVALID_CALLBACK") {
    console.error("Invalid callback provided");
  }
}
```

**After:**

```js
try {
  fs.readFile("file.txt", "invalid-callback");
} catch (err) {
  if (err.code === "ERR_INVALID_ARG_TYPE") {
    console.error("Invalid callback provided");
  }
}
```

### Example 2: Error code check in conditional

**Before:**

```js
function handleError(error) {
  if (error.code === "ERR_INVALID_CALLBACK") {
    return "Please provide a valid callback function";
  }
  return error.message;
}
```

**After:**

```js
function handleError(error) {
  if (error.code === "ERR_INVALID_ARG_TYPE") {
    return "Please provide a valid callback function";
  }
  return error.message;
}
```

### Example 3: Test assertion with error code

**Before:**

```js
const assert = require("node:assert");

assert.throws(
  () => fs.readFile("file.txt", 123),
  { code: "ERR_INVALID_CALLBACK" }
);
```

**After:**

```js
const assert = require("node:assert");

assert.throws(
  () => fs.readFile("file.txt", 123),
  { code: "ERR_INVALID_ARG_TYPE" }
);
```

### Example 4: Switch statement with error codes

**Before:**

```js
switch (error.code) {
  case "ERR_INVALID_CALLBACK":
    console.log("Invalid callback");
    break;
  case "ENOENT":
    console.log("File not found");
    break;
}
```

**After:**

```js
switch (error.code) {
  case "ERR_INVALID_ARG_TYPE":
    console.log("Invalid callback");
    break;
  case "ENOENT":
    console.log("File not found");
    break;
}
```

### Example 5: Error matching in test

**Before:**

```js
it("should throw ERR_INVALID_CALLBACK", () => {
  expect(() => {
    someFunction(null);
  }).toThrow("ERR_INVALID_CALLBACK");
});
```

**After:**

```js
it("should throw ERR_INVALID_ARG_TYPE", () => {
  expect(() => {
    someFunction(null);
  }).toThrow("ERR_INVALID_ARG_TYPE");
});
```

### Example 6: String includes check

**Before:**

```js
if (err.toString().includes("ERR_INVALID_CALLBACK")) {
  // Handle callback error
}
```

**After:**

```js
if (err.toString().includes("ERR_INVALID_ARG_TYPE")) {
  // Handle callback error
}
```

### Example 7: Multiple error code checks

**Before:**

```js
const isCallbackError = 
  err.code === "ERR_INVALID_CALLBACK" || 
  err.code === "ERR_INVALID_ARG_TYPE";
```

**After:**

```js
const isCallbackError = 
  err.code === "ERR_INVALID_ARG_TYPE";
```

## Refs

- [DEP0159: `ERR_INVALID_CALLBACK`](https://nodejs.org/api/deprecations.html#dep0159)
- [ERR_INVALID_CALLBACK removal node#41678](https://github.com/nodejs/node/pull/41678)
