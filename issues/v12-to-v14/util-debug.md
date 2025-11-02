# util.debug()

## Description

Since `util.debug()` is deprecated (DEP0028) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `util.debug()` with `console.error()`.
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with destructured imports and namespace imports.
- The codemod should remove `util.debug` from import statements if no other util methods are used.

## Additional Information

Note that `util.debug()` was removed in Node.js v12.0.0. This was an unmaintained legacy API that was exposed to userland by accident. The method functioned similarly to `console.error()` and should be replaced with standard console methods.

`console.error()` provides the same functionality and is the standard way to write to stderr.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const util = require("node:util");

util.debug("Debug message");
```

**After:**

```js
console.error("Debug message");
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { debug } = require("node:util");

debug("Error occurred");
```

**After:**

```js
console.error("Error occurred");
```

### Example 3: ESM import

**Before:**

```js
import util from "node:util";

util.debug("Something went wrong");
```

**After:**

```js
console.error("Something went wrong");
```

### Example 4: ESM named import

**Before:**

```js
import { debug } from "node:util";

debug("Debugging info");
```

**After:**

```js
console.error("Debugging info");
```

### Example 5: Multiple arguments

**Before:**

```js
const util = require("node:util");

util.debug("User:", username, "logged in");
```

**After:**

```js
console.error("User:", username, "logged in");
```

### Example 6: In conditional

**Before:**

```js
const util = require("node:util");

if (process.env.DEBUG) {
  util.debug("Debug mode enabled");
}
```

**After:**

```js
if (process.env.DEBUG) {
  console.error("Debug mode enabled");
}
```

### Example 7: With other util methods

**Before:**

```js
const util = require("node:util");

util.debug("Starting");
const formatted = util.format("Hello %s", "World");
```

**After:**

```js
const util = require("node:util");

console.error("Starting");
const formatted = util.format("Hello %s", "World");
```

### Example 8: In error handling

**Before:**

```js
const util = require("node:util");

try {
  riskyOperation();
} catch (err) {
  util.debug("Error:", err.message);
}
```

**After:**

```js
try {
  riskyOperation();
} catch (err) {
  console.error("Error:", err.message);
}
```

### Example 9: Aliased import

**Before:**

```js
const { debug: logDebug } = require("node:util");

logDebug("Custom debug logger");
```

**After:**

```js
const logDebug = console.error;

logDebug("Custom debug logger");
```

### Example 10: Multiple calls

**Before:**

```js
const util = require("node:util");

util.debug("Step 1");
util.debug("Step 2");
util.debug("Step 3");
```

**After:**

```js
console.error("Step 1");
console.error("Step 2");
console.error("Step 3");
```

## Refs

- [DEP0028: `util.debug()`](https://nodejs.org/api/deprecations.html#dep0028)
- [util.debug() removal node#25377](https://github.com/nodejs/node/pull/25377)
