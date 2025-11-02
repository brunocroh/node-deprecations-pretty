# util.print()

## Description

Since `util.print()` is deprecated (DEP0026) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `util.print()` with `console.log()`.
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with destructured imports and namespace imports.
- The codemod should remove `util.print` from import statements if no other util methods are used.

## Additional Information

Note that `util.print()` was removed in Node.js v12.0.0. This was an unmaintained legacy API that was exposed to userland by accident. Unlike `console.log()`, `util.print()` did not add a newline at the end, but `console.log()` is the standard replacement.

Developers should use `console.log()` for most use cases. If writing without a newline is specifically needed, use `process.stdout.write()`.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const util = require("node:util");

util.print("Hello World");
```

**After:**

```js
console.log("Hello World");
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { print } = require("node:util");

print("Output");
```

**After:**

```js
console.log("Output");
```

### Example 3: ESM import

**Before:**

```js
import util from "node:util";

util.print("Message");
```

**After:**

```js
console.log("Message");
```

### Example 4: ESM named import

**Before:**

```js
import { print } from "node:util";

print("Text");
```

**After:**

```js
console.log("Text");
```

### Example 5: Multiple arguments

**Before:**

```js
const util = require("node:util");

util.print("Name:", name, "Age:", age);
```

**After:**

```js
console.log("Name:", name, "Age:", age);
```

### Example 6: Without newline requirement

**Before:**

```js
const util = require("node:util");

util.print("Loading");
util.print(".");
util.print(".");
util.print(".");
```

**After:**

```js
// If you need to avoid newlines, use process.stdout.write
process.stdout.write("Loading");
process.stdout.write(".");
process.stdout.write(".");
process.stdout.write(".");
```

### Example 7: With other util methods

**Before:**

```js
const util = require("node:util");

util.print("Starting");
const formatted = util.format("Status: %s", "OK");
```

**After:**

```js
const util = require("node:util");

console.log("Starting");
const formatted = util.format("Status: %s", "OK");
```

### Example 8: In loop

**Before:**

```js
const util = require("node:util");

for (let i = 0; i < 5; i++) {
  util.print(i);
}
```

**After:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Example 9: Aliased import

**Before:**

```js
const { print: output } = require("node:util");

output("Result");
```

**After:**

```js
const output = console.log;

output("Result");
```

### Example 10: Mixed with console

**Before:**

```js
const util = require("node:util");

util.print("Step 1");
console.log("Step 2");
util.print("Step 3");
```

**After:**

```js
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

## Refs

- [DEP0026: `util.print()`](https://nodejs.org/api/deprecations.html#dep0026)
- [util.print() removal node#25377](https://github.com/nodejs/node/pull/25377)
