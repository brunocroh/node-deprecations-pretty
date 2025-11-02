# util.puts()

## Description

Since `util.puts()` is deprecated (DEP0027) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `util.puts()` with `console.log()`.
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with destructured imports and namespace imports.
- The codemod should remove `util.puts` from import statements if no other util methods are used.

## Additional Information

Note that `util.puts()` was removed in Node.js v12.0.0. This was an unmaintained legacy API that was exposed to userland by accident. The method functioned identically to `console.log()` and should be replaced with the standard console method.

`console.log()` provides the same functionality and is the standard way to write output to stdout with a newline.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const util = require("node:util");

util.puts("Hello World");
```

**After:**

```js
console.log("Hello World");
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { puts } = require("node:util");

puts("Message");
```

**After:**

```js
console.log("Message");
```

### Example 3: ESM import

**Before:**

```js
import util from "node:util";

util.puts("Output");
```

**After:**

```js
console.log("Output");
```

### Example 4: ESM named import

**Before:**

```js
import { puts } from "node:util";

puts("Text");
```

**After:**

```js
console.log("Text");
```

### Example 5: Multiple arguments

**Before:**

```js
const util = require("node:util");

util.puts("User:", username, "Status:", status);
```

**After:**

```js
console.log("User:", username, "Status:", status);
```

### Example 6: In function

**Before:**

```js
const util = require("node:util");

function logMessage(msg) {
  util.puts(msg);
}
```

**After:**

```js
function logMessage(msg) {
  console.log(msg);
}
```

### Example 7: With other util methods

**Before:**

```js
const util = require("node:util");

util.puts("Server started");
const inspected = util.inspect({ port: 3000 });
```

**After:**

```js
const util = require("node:util");

console.log("Server started");
const inspected = util.inspect({ port: 3000 });
```

### Example 8: In conditional

**Before:**

```js
const util = require("node:util");

if (verbose) {
  util.puts("Verbose mode enabled");
}
```

**After:**

```js
if (verbose) {
  console.log("Verbose mode enabled");
}
```

### Example 9: Aliased import

**Before:**

```js
const { puts: log } = require("node:util");

log("Application started");
```

**After:**

```js
const log = console.log;

log("Application started");
```

### Example 10: Multiple calls

**Before:**

```js
const util = require("node:util");

util.puts("Line 1");
util.puts("Line 2");
util.puts("Line 3");
```

**After:**

```js
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");
```

## Refs

- [DEP0027: `util.puts()`](https://nodejs.org/api/deprecations.html#dep0027)
- [util.puts() removal node#25377](https://github.com/nodejs/node/pull/25377)
