# Module.createRequireFromPath()

## Description

Since `Module.createRequireFromPath()` is deprecated (DEP0130) and has reached End-of-Life status in Node.js v16.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `Module.createRequireFromPath()` with `Module.createRequire()`.
- The codemod should handle both `module.createRequireFromPath()` and `Module.createRequireFromPath()` patterns.
- The codemod should work with CommonJS and ESM imports.
- The codemod should preserve function arguments and context.

## Additional Information

Note that `Module.createRequireFromPath()` was removed in Node.js v16.0.0. The method was deprecated because `Module.createRequire()` provides the same functionality with a more appropriate name. Both methods create a require function that resolves modules relative to a given path.

The replacement `Module.createRequire()` accepts either a filename string or a URL object, making it more flexible than the deprecated method.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const { createRequireFromPath } = require("node:module");

const require = createRequireFromPath(__filename);
const myModule = require("./my-module");
```

**After:**

```js
const { createRequire } = require("node:module");

const require = createRequire(__filename);
const myModule = require("./my-module");
```

### Example 2: Using Module namespace

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

### Example 4: ESM with import.meta.url

**Before:**

```js
import { createRequireFromPath } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequireFromPath(fileURLToPath(import.meta.url));
const config = require("./config.json");
```

**After:**

```js
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const config = require("./config.json");
```

### Example 5: Creating require for specific path

**Before:**

```js
const { createRequireFromPath } = require("node:module");
const path = require("node:path");

const projectRoot = path.join(__dirname, "..", "..");
const requireFromRoot = createRequireFromPath(path.join(projectRoot, "package.json"));
```

**After:**

```js
const { createRequire } = require("node:module");
const path = require("node:path");

const projectRoot = path.join(__dirname, "..", "..");
const requireFromRoot = createRequire(path.join(projectRoot, "package.json"));
```

### Example 6: In a utility function

**Before:**

```js
const { createRequireFromPath } = require("node:module");

function createCustomRequire(basePath) {
  return createRequireFromPath(basePath);
}

const myRequire = createCustomRequire(__filename);
```

**After:**

```js
const { createRequire } = require("node:module");

function createCustomRequire(basePath) {
  return createRequire(basePath);
}

const myRequire = createCustomRequire(__filename);
```

### Example 7: Multiple requires from different paths

**Before:**

```js
const Module = require("node:module");
const path = require("node:path");

const requireA = Module.createRequireFromPath(path.join(__dirname, "dir-a", "index.js"));
const requireB = Module.createRequireFromPath(path.join(__dirname, "dir-b", "index.js"));

const moduleA = requireA("./module");
const moduleB = requireB("./module");
```

**After:**

```js
const Module = require("node:module");
const path = require("node:path");

const requireA = Module.createRequire(path.join(__dirname, "dir-a", "index.js"));
const requireB = Module.createRequire(path.join(__dirname, "dir-b", "index.js"));

const moduleA = requireA("./module");
const moduleB = requireB("./module");
```

### Example 8: ESM with URL object

**Before:**

```js
import { createRequireFromPath } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequireFromPath(pathToFileURL(__filename).href);
```

**After:**

```js
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(pathToFileURL(__filename));
```

### Example 9: Resolving from package.json location

**Before:**

```js
const { createRequireFromPath } = require("node:module");
const path = require("node:path");

const packageJsonPath = path.resolve(__dirname, "package.json");
const requireFromPackage = createRequireFromPath(packageJsonPath);
const dep = requireFromPackage("some-dependency");
```

**After:**

```js
const { createRequire } = require("node:module");
const path = require("node:path");

const packageJsonPath = path.resolve(__dirname, "package.json");
const requireFromPackage = createRequire(packageJsonPath);
const dep = requireFromPackage("some-dependency");
```

### Example 10: Dynamic path creation

**Before:**

```js
const Module = require("node:module");

function requireRelativeTo(modulePath, targetPath) {
  const customRequire = Module.createRequireFromPath(modulePath);
  return customRequire(targetPath);
}

const data = requireRelativeTo(__filename, "./data.json");
```

**After:**

```js
const Module = require("node:module");

function requireRelativeTo(modulePath, targetPath) {
  const customRequire = Module.createRequire(modulePath);
  return customRequire(targetPath);
}

const data = requireRelativeTo(__filename, "./data.json");
```

## Refs

- [DEP0130: `Module.createRequireFromPath()`](https://nodejs.org/api/deprecations.html#dep0130)
- [Module.createRequireFromPath removal node#32564](https://github.com/nodejs/node/pull/32564)
