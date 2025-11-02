# Module.createRequireFromPath()

## Description

Since `Module.createRequireFromPath()` is deprecated (DEP0130) and has reached End-of-Life status in Node.js v16.0.0, we should provide a codemod to replace it.

- The codemod should replace `Module.createRequireFromPath()` with `Module.createRequire()`.
- The codemod should handle both CommonJS and ESM import patterns.
- The codemod should preserve the functionality while using the new API.
- The codemod should handle destructured imports from the `module` module.

## Additional Information

Note that `Module.createRequireFromPath()` was removed in Node.js v16.0.0. Use `module.createRequire()` instead. Both functions serve the same purpose: creating a `require` function that can be used to load modules relative to a given file path. The API was renamed to better reflect its purpose.

The migration is straightforward as `createRequire()` works identically to `createRequireFromPath()` - it takes a filename or URL and returns a require function.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const { createRequireFromPath } = require("node:module");

const myRequire = createRequireFromPath("/path/to/file.js");
const lodash = myRequire("lodash");
```

**After:**

```js
const { createRequire } = require("node:module");

const myRequire = createRequire("/path/to/file.js");
const lodash = myRequire("lodash");
```

### Example 2: Using Module.createRequireFromPath

**Before:**

```js
const Module = require("node:module");

const customRequire = Module.createRequireFromPath(__filename);
```

**After:**

```js
const Module = require("node:module");

const customRequire = Module.createRequire(__filename);
```

### Example 3: ESM import

**Before:**

```js
import { createRequireFromPath } from "node:module";

const require = createRequireFromPath(import.meta.url);
const packageJson = require("./package.json");
```

**After:**

```js
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");
```

### Example 4: Creating require in ESM module

**Before:**

```js
import { createRequireFromPath } from "node:module";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const require = createRequireFromPath(__filename);
```

**After:**

```js
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const require = createRequire(__filename);
```

### Example 5: With import.meta.url directly

**Before:**

```js
import { createRequireFromPath } from "node:module";

const require = createRequireFromPath(import.meta.url);
const config = require("./config.json");
```

**After:**

```js
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const config = require("./config.json");
```

### Example 6: Using default import

**Before:**

```js
import module from "node:module";

const myRequire = module.createRequireFromPath("/some/path/file.js");
```

**After:**

```js
import module from "node:module";

const myRequire = module.createRequire("/some/path/file.js");
```

### Example 7: In a utility function

**Before:**

```js
const { createRequireFromPath } = require("node:module");

function loadModuleFromPath(moduleName, basePath) {
  const customRequire = createRequireFromPath(basePath);
  return customRequire(moduleName);
}
```

**After:**

```js
const { createRequire } = require("node:module");

function loadModuleFromPath(moduleName, basePath) {
  const customRequire = createRequire(basePath);
  return customRequire(moduleName);
}
```

### Example 8: Loading package.json in ESM

**Before:**

```js
import { createRequireFromPath } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequireFromPath(import.meta.url);
const pkg = require(join(__dirname, "package.json"));
```

**After:**

```js
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const pkg = require(join(__dirname, "package.json"));
```

### Example 9: Multiple usages

**Before:**

```js
const { createRequireFromPath } = require("node:module");

const require1 = createRequireFromPath("/path/one/file.js");
const require2 = createRequireFromPath("/path/two/file.js");

const module1 = require1("module-a");
const module2 = require2("module-b");
```

**After:**

```js
const { createRequire } = require("node:module");

const require1 = createRequire("/path/one/file.js");
const require2 = createRequire("/path/two/file.js");

const module1 = require1("module-a");
const module2 = require2("module-b");
```

### Example 10: Dynamic path

**Before:**

```js
import { createRequireFromPath } from "node:module";

function createRequireForFile(filepath) {
  return createRequireFromPath(filepath);
}

const dynamicRequire = createRequireForFile("/some/dynamic/path.js");
```

**After:**

```js
import { createRequire } from "node:module";

function createRequireForFile(filepath) {
  return createRequire(filepath);
}

const dynamicRequire = createRequireForFile("/some/dynamic/path.js");
```

## Important points

- The functionality is identical between `createRequireFromPath()` and `createRequire()`
- This is purely a naming change - the API signature remains the same
- Both accept a filename or URL and return a require function
- Commonly used in ESM modules to load CommonJS modules or JSON files
- Can accept file paths or `import.meta.url` in ESM contexts

## Refs

- [DEP0130: `Module.createRequireFromPath()`](https://nodejs.org/api/deprecations.html#dep0130)
- [Remove Module.createRequireFromPath() node#37201](https://github.com/nodejs/node/pull/37201)
- [Automated migration available](https://github.com/nodejs/userland-migrations/tree/main/recipes/create-require-from-path)
