# require('.') resolved outside directory

## Description

Since using `require('.')` to resolve outside the package directory is deprecated (DEP0019) and has reached End-of-Life status in Node.js v12.0.0, we should provide guidance for proper module resolution.

- The codemod should detect `require('.')` patterns that resolve outside the current directory.
- The codemod should suggest using explicit relative paths or package names.
- The codemod should ensure proper `main` field in package.json.
- The codemod should handle both CommonJS and ESM contexts.

## Additional Information

Note that this behavior was removed in Node.js v12.0.0. Previously, in certain edge cases, `require('.')` could resolve to modules outside the intended package directory, which was confusing and error-prone.

The proper way to require the current directory is to ensure the package.json has a correct `main` field, or use explicit relative paths like `require('./')` or `require('./index')`.

## Examples

### Example 1: Explicit index file

**Before:**

```js
// In some edge cases, this might resolve outside directory
const module = require(".");
```

**After:**

```js
// Explicitly require the index file
const module = require("./index");
```

### Example 2: Using package.json main

**Before:**

```js
// Ambiguous resolution
const pkg = require(".");
```

**After:**

```js
// Ensure package.json has proper main field
// package.json: { "main": "index.js" }
const pkg = require("./");
```

### Example 3: Relative path from subdirectory

**Before:**

```js
// From subdirectory, requiring parent
const parent = require(".");
```

**After:**

```js
// Use explicit relative path
const parent = require("../");
```

### Example 4: ESM import

**Before:**

```js
import module from ".";
```

**After:**

```js
import module from "./index.js";
```

### Example 5: Package.json configuration

**Before:**

```json
{
  "name": "my-package"
}
```

**After:**

```json
{
  "name": "my-package",
  "main": "index.js",
  "exports": {
    ".": "./index.js"
  }
}
```

### Example 6: Named export from directory

**Before:**

```js
const { helper } = require(".");
```

**After:**

```js
const { helper } = require("./index.js");
```

### Example 7: Dynamic require

**Before:**

```js
function loadModule(path) {
  return require(path || ".");
}
```

**After:**

```js
function loadModule(path) {
  return require(path || "./index.js");
}
```

### Example 8: In subdirectory requiring root

**Before:**

```js
// In src/utils/helper.js
const config = require(".");  // Ambiguous
```

**After:**

```js
// In src/utils/helper.js
const config = require("../../");  // Clear path to root
// Or use package name if it's an internal module
const config = require("my-package");
```

## Refs

- [DEP0019: `require('.')` resolved outside directory](https://nodejs.org/api/deprecations.html#dep0019)
- [require('.') resolution fix node#26973](https://github.com/nodejs/node/pull/26973)
