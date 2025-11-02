# os.tmpDir()

## Description

Since `os.tmpDir()` is deprecated (DEP0022) and has reached End-of-Life status in Node.js v14.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `os.tmpDir()` with `os.tmpdir()`.
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with destructured imports and namespace imports.
- The codemod should preserve the context in which the method is called.

## Additional Information

Note that `os.tmpDir()` was removed in Node.js v14.0.0. The method was deprecated because it used inconsistent casing (capital 'D') compared to other Node.js APIs. The replacement `os.tmpdir()` (lowercase 'd') follows the standard Node.js naming convention.

Both methods return the operating system's default directory for temporary files, but `tmpdir()` is the correct and supported API.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const os = require("node:os");

const tempDir = os.tmpDir();
console.log(tempDir);
```

**After:**

```js
const os = require("node:os");

const tempDir = os.tmpdir();
console.log(tempDir);
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { tmpDir } = require("node:os");

const temp = tmpDir();
```

**After:**

```js
const { tmpdir } = require("node:os");

const temp = tmpdir();
```

### Example 3: ESM import

**Before:**

```js
import os from "node:os";

const temporaryDirectory = os.tmpDir();
```

**After:**

```js
import os from "node:os";

const temporaryDirectory = os.tmpdir();
```

### Example 4: ESM named import

**Before:**

```js
import { tmpDir } from "node:os";

const tempPath = tmpDir();
```

**After:**

```js
import { tmpdir } from "node:os";

const tempPath = tmpdir();
```

### Example 5: In path construction

**Before:**

```js
const os = require("node:os");
const path = require("node:path");

const tempFile = path.join(os.tmpDir(), "myfile.txt");
```

**After:**

```js
const os = require("node:os");
const path = require("node:path");

const tempFile = path.join(os.tmpdir(), "myfile.txt");
```

### Example 6: In a function

**Before:**

```js
const os = require("node:os");
const fs = require("node:fs");

function createTempFile(filename) {
  const tempDir = os.tmpDir();
  const filePath = `${tempDir}/${filename}`;
  fs.writeFileSync(filePath, "data");
  return filePath;
}
```

**After:**

```js
const os = require("node:os");
const fs = require("node:fs");

function createTempFile(filename) {
  const tempDir = os.tmpdir();
  const filePath = `${tempDir}/${filename}`;
  fs.writeFileSync(filePath, "data");
  return filePath;
}
```

### Example 7: Multiple calls

**Before:**

```js
const os = require("node:os");

const temp1 = os.tmpDir();
const temp2 = os.tmpDir();
console.log(temp1 === temp2);
```

**After:**

```js
const os = require("node:os");

const temp1 = os.tmpdir();
const temp2 = os.tmpdir();
console.log(temp1 === temp2);
```

### Example 8: In template literal

**Before:**

```js
const os = require("node:os");

const logPath = `${os.tmpDir()}/app.log`;
```

**After:**

```js
const os = require("node:os");

const logPath = `${os.tmpdir()}/app.log`;
```

### Example 9: As function argument

**Before:**

```js
const os = require("node:os");
const fs = require("node:fs");

fs.mkdirSync(os.tmpDir() + "/myapp", { recursive: true });
```

**After:**

```js
const os = require("node:os");
const fs = require("node:fs");

fs.mkdirSync(os.tmpdir() + "/myapp", { recursive: true });
```

### Example 10: Aliased import

**Before:**

```js
const { tmpDir: getTempDir } = require("node:os");

const directory = getTempDir();
```

**After:**

```js
const { tmpdir: getTempDir } = require("node:os");

const directory = getTempDir();
```

## Refs

- [DEP0022: `os.tmpDir()`](https://nodejs.org/api/deprecations.html#dep0022)
- [os.tmpDir() removal node#31169](https://github.com/nodejs/node/pull/31169)
