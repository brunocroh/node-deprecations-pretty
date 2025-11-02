# util.types.isWebAssemblyCompiledModule

## Description

Since `util.types.isWebAssemblyCompiledModule` is deprecated (DEP0177) and has reached End-of-Life status in Node.js v20.12.0, we should provide a codemod to replace it.

- The codemod should replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`.
- The codemod should handle both CommonJS and ESM import patterns.
- The codemod should preserve the logical context in which the function is used.
- The codemod should handle destructured imports from `util.types`.

## Additional Information

Note that `util.types.isWebAssemblyCompiledModule()` was removed in Node.js v20.12.0. The function was deprecated because it was a specialized type-checking utility that can be replaced with the standard `instanceof` operator. Instead of `util.types.isWebAssemblyCompiledModule(value)`, developers should use `value instanceof WebAssembly.Module`.

The `instanceof` operator provides the same functionality and is a more idiomatic JavaScript approach for type checking.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const util = require("node:util");

if (util.types.isWebAssemblyCompiledModule(value)) {
  console.log("It's a WebAssembly module");
}
```

**After:**

```js
if (value instanceof WebAssembly.Module) {
  console.log("It's a WebAssembly module");
}
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { types } = require("node:util");

const result = types.isWebAssemblyCompiledModule(module);
```

**After:**

```js
const result = module instanceof WebAssembly.Module;
```

### Example 3: Direct destructured function import

**Before:**

```js
const { isWebAssemblyCompiledModule } = require("node:util").types;

if (isWebAssemblyCompiledModule(compiledModule)) {
  // do something
}
```

**After:**

```js
if (compiledModule instanceof WebAssembly.Module) {
  // do something
}
```

### Example 4: ESM import

**Before:**

```js
import util from "node:util";

const isModule = util.types.isWebAssemblyCompiledModule(value);
```

**After:**

```js
const isModule = value instanceof WebAssembly.Module;
```

### Example 5: ESM named import

**Before:**

```js
import { types } from "node:util";

if (types.isWebAssemblyCompiledModule(obj)) {
  return true;
}
```

**After:**

```js
if (obj instanceof WebAssembly.Module) {
  return true;
}
```

### Example 6: In conditional expression

**Before:**

```js
const util = require("node:util");

const check = util.types.isWebAssemblyCompiledModule(data) ? "module" : "not module";
```

**After:**

```js
const check = data instanceof WebAssembly.Module ? "module" : "not module";
```

### Example 7: In function return statement

**Before:**

```js
const { types } = require("node:util");

function isWasmModule(value) {
  return types.isWebAssemblyCompiledModule(value);
}
```

**After:**

```js
function isWasmModule(value) {
  return value instanceof WebAssembly.Module;
}
```

### Example 8: Negated condition

**Before:**

```js
const util = require("node:util");

if (!util.types.isWebAssemblyCompiledModule(value)) {
  throw new Error("Not a WebAssembly module");
}
```

**After:**

```js
if (!(value instanceof WebAssembly.Module)) {
  throw new Error("Not a WebAssembly module");
}
```

## Refs

- [DEP0177: `util.types.isWebAssemblyCompiledModule`](https://nodejs.org/api/deprecations.html#dep0177)
- [util.types.isWebAssemblyCompiledModule removal node#51442](https://github.com/nodejs/node/pull/51442)
