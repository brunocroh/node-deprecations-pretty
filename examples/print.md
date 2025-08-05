## Description

Since `util.print()` is deprecated (DEP0026) and has reached End-of-Life status, we should provide a codemod to replace it.

- The codemod should replace all instances of `util.print()` with `console.log()`.
- The codemod should update import/require statements to replace `node:util` with `node:console` when `print` is the only util function being used.
- If the `node:util` import is destructured and only contains `print`, it should be replaced with `node:console` destructured import.
- If there are other util functions being used, the codemod should add a separate `node:console` import and keep the existing `node:util` import.

## Additional Information

Note that `util.print()` was removed in Node.js v12.0.0 and replaced with `console.log()`. The functionality is identical, but `console.log()` is the standard way to output text to stdout. `util.print()` was deprecated because it was redundant with the more widely used `console.log()` API.

## Examples

### Case 1: Destructured import with only print

**Before:**

```js
const { print } = require("node:util");

print("Hello world");
```

**After:**

```js
console.log("Hello world");
```

### Case 2: Namespace import

**Before:**

```js
const util = require("node:util");

util.print("Hello world");
```

**After:**

```js
console.log("Hello world");
```

### Case 3: Mixed usage with other util functions

**After**

```js
const { inspect } = require("node:util");

console.log("Hello world");
const formatted = inspect({ foo: "bar" });
console.log(formatted);
```

### Case 4: ESM import

**Before:**

```js
import { print } from "node:util";

print("Hello world");
```

**After:**

```js
console.log("Hello world");
```

### Case 5: ESM namespace import

**Before:**

```js
import \* as util from 'node:util';

util.print('Hello world');
```

**After:**

```js
console.log("Hello world");
```

### Case 6: Multiple arguments handling

**Before:**

```js
const { print } = require("node:util");

print("Hello", "world", 123);
```

**After:**

```js
console.log("Hello", "world", 123);
```

## Refs

- [DEP0026: `util.print()`](https://nodejs.org/api/deprecations.html#dep0026-utilprint)
