## Description

Since `util.log()` is deprecated (DEP0059) and has reached End-of-Life status, we should provide a codemod to replace it.

- The codemod should replace all instances of `util.log()` with appropriate alternatives based on context.
- The codemod should update import/require statements to replace `node:util` with logging alternatives when `log` is the only util function being used.
- If the `node:util` import is destructured and only contains `log`, it should be replaced with a console-based alternative.
- If there are other util functions being used, the codemod should remove the `log` import and replace usage with console methods.

## Additional Information

Note that `util.log()` was removed in Node.js v23.0.0. The function was deprecated because it was an unmaintained legacy API that was exposed to userland by accident. Instead of `util.log()`, developers should use third-party logging libraries or `console.log(new Date().toLocaleString(), message)` for similar functionality.

The `util.log()` function would output a timestamped message to stdout, but this pattern is better handled by proper logging solutions or explicit console logging with timestamps.

## Examples

### Case 1: Simple util.log replacement

**Before:**

```js
const util = require("node:util");

util.log("Hello world");
```

**After:**

```js
console.log(new Date().toLocaleString(), "Hello world");
```

### Case 2: Destructured import with only log

**Before:**

```js
const { log } = require("node:util");

log("Application started");
log("Processing request");
```

**After:**

```js
console.log(new Date().toLocaleString(), "Application started");
console.log(new Date().toLocaleString(), "Processing request");
```

### Case 3: ESM import

**Before:**

```js
import { log } from "node:util";

log("Server listening on port 3000");
```

**After:**

```js
console.log(new Date().toLocaleString(), "Server listening on port 3000");
```

### Case 4: ESM namespace import

**Before:**

```js
import * as util from "node:util";

util.log("Debug message");
```

**After:**

```js
console.log(new Date().toLocaleString(), "Debug message");
```

### Case 5: Mixed usage with other util functions

**Before:**

```js
const { log, inspect } = require("node:util");

log("Starting application");
const formatted = inspect({ foo: "bar" });
console.log(formatted);
```

**After:**

```js
const { inspect } = require("node:util");

console.log(new Date().toLocaleString(), "Starting application");
const formatted = inspect({ foo: "bar" });
console.log(formatted);
```

### Case 6: Multiple arguments handling

**Before:**

```js
const util = require("node:util");

util.log("User:", "john", "logged in");
```

**After:**

```js
console.log(new Date().toLocaleString(), "User:", "john", "logged in");
```

### Case 7: In conditional statements

**Before:**

```js
import { log } from "node:util";

if (process.env.NODE_ENV === "development") {
  log("Development mode enabled");
}
```

**After:**

```js
if (process.env.NODE_ENV === "development") {
  console.log(new Date().toLocaleString(), "Development mode enabled");
}
```

### Case 8: With string interpolation

**Before:**

```js
const { log } = require("node:util");

const port = 3000;
log(`Server started on port ${port}`);
```

**After:**

```js
const port = 3000;
console.log(new Date().toLocaleString(), `Server started on port ${port}`);
```

### Case 9: In functions and callbacks

**Before:**

```js
const util = require("node:util");

function startServer() {
  util.log("Starting server...");
  return new Promise((resolve) => {
    setTimeout(() => {
      util.log("Server ready");
      resolve();
    }, 1000);
  });
}
```

**After:**

```js
function startServer() {
  console.log(new Date().toLocaleString(), "Starting server...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(new Date().toLocaleString(), "Server ready");
      resolve();
    }, 1000);
  });
}
```

### Case 10: Alternative with third-party logger comment

**Before:**

```js
const { log, format } = require("node:util");

log("Application error occurred");
```

**After:**

```js
const { format } = require("node:util");

// Consider using a third-party logging library like winston, pino, or bunyan for production applications
console.log(new Date().toLocaleString(), "Application error occurred");
```

## Refs

- [DEP0059: `util.log()`](https://nodejs.org/api/deprecations.html#dep0059-utillog)
- [util: move deprecated utils to eol node#52744](https://github.com/nodejs/node/pull/52744)
