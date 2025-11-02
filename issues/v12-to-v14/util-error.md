# util.error()

## Description

Since `util.error()` is deprecated (DEP0029) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `util.error()` with `console.error()`.
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with destructured imports and namespace imports.
- The codemod should remove `util.error` from import statements if no other util methods are used.

## Additional Information

Note that `util.error()` was removed in Node.js v12.0.0. This was an unmaintained legacy API that was exposed to userland by accident. The method functioned identically to `console.error()` and should be replaced with the standard console method.

`console.error()` provides the same functionality and is the standard way to write error messages to stderr.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const util = require("node:util");

util.error("Error message");
```

**After:**

```js
console.error("Error message");
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { error } = require("node:util");

error("Something went wrong");
```

**After:**

```js
console.error("Something went wrong");
```

### Example 3: ESM import

**Before:**

```js
import util from "node:util";

util.error("Fatal error");
```

**After:**

```js
console.error("Fatal error");
```

### Example 4: ESM named import

**Before:**

```js
import { error } from "node:util";

error("Error occurred");
```

**After:**

```js
console.error("Error occurred");
```

### Example 5: Multiple arguments

**Before:**

```js
const util = require("node:util");

util.error("Connection failed:", host, port);
```

**After:**

```js
console.error("Connection failed:", host, port);
```

### Example 6: In error handling

**Before:**

```js
const util = require("node:util");

process.on("uncaughtException", (err) => {
  util.error("Uncaught exception:", err);
  process.exit(1);
});
```

**After:**

```js
process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});
```

### Example 7: With other util methods

**Before:**

```js
const util = require("node:util");

util.error("Error occurred");
const inspected = util.inspect(obj);
```

**After:**

```js
const util = require("node:util");

console.error("Error occurred");
const inspected = util.inspect(obj);
```

### Example 8: In try-catch

**Before:**

```js
const util = require("node:util");

try {
  dangerousOperation();
} catch (err) {
  util.error("Operation failed:", err.message);
  throw err;
}
```

**After:**

```js
try {
  dangerousOperation();
} catch (err) {
  console.error("Operation failed:", err.message);
  throw err;
}
```

### Example 9: Aliased import

**Before:**

```js
const { error: logError } = require("node:util");

logError("Critical error");
```

**After:**

```js
const logError = console.error;

logError("Critical error");
```

### Example 10: Multiple error calls

**Before:**

```js
const util = require("node:util");

util.error("Error 1");
util.error("Error 2");
util.error("Error 3");
```

**After:**

```js
console.error("Error 1");
console.error("Error 2");
console.error("Error 3");
```

## Refs

- [DEP0029: `util.error()`](https://nodejs.org/api/deprecations.html#dep0029)
- [util.error() removal node#25377](https://github.com/nodejs/node/pull/25377)
