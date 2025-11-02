# fs.write() and fs.writeFileSync() coercion to string

## Description

Since implicit coercion of objects in `fs.write()` and `fs.writeFileSync()` is deprecated (DEP0162) and has reached End-of-Life status in Node.js v19.0.0, we should provide a codemod to replace them.

- The codemod should convert objects with `toString()` method to primitive strings before passing to fs write functions.
- The codemod should handle `fs.write()`, `fs.writeFile()`, `fs.appendFile()`, `fs.writeFileSync()`, and `fs.appendFileSync()`.
- The codemod should detect objects being passed as the data parameter.
- The codemod should add explicit `.toString()` calls or `String()` conversion.

## Additional Information

Note that in Node.js v19.0.0, implicit coercion of objects with own `toString` property passed as the second parameter (data) in fs write operations now throws an error. This was deprecated because the implicit conversion could lead to unexpected behavior and made the code less explicit.

Instead of relying on implicit coercion, developers should explicitly convert objects to strings using `.toString()`, `String()`, or template literals.

## Examples

### Example 1: Object in fs.writeFileSync()

**Before:**

```js
const fs = require("node:fs");

const data = { toString: () => "file content" };
fs.writeFileSync("file.txt", data);
```

**After:**

```js
const fs = require("node:fs");

const data = { toString: () => "file content" };
fs.writeFileSync("file.txt", data.toString());
```

### Example 2: Object in fs.writeFile()

**Before:**

```js
const fs = require("node:fs");

const obj = { toString: () => "content" };
fs.writeFile("file.txt", obj, (err) => {
  if (err) throw err;
});
```

**After:**

```js
const fs = require("node:fs");

const obj = { toString: () => "content" };
fs.writeFile("file.txt", obj.toString(), (err) => {
  if (err) throw err;
});
```

### Example 3: Object in fs.appendFileSync()

**Before:**

```js
const fs = require("node:fs");

const data = { toString: () => "appended data" };
fs.appendFileSync("file.txt", data);
```

**After:**

```js
const fs = require("node:fs");

const data = { toString: () => "appended data" };
fs.appendFileSync("file.txt", data.toString());
```

### Example 4: Object in fs.appendFile()

**Before:**

```js
const fs = require("node:fs");

const content = { toString: () => "more content" };
fs.appendFile("file.txt", content, (err) => {
  if (err) throw err;
});
```

**After:**

```js
const fs = require("node:fs");

const content = { toString: () => "more content" };
fs.appendFile("file.txt", content.toString(), (err) => {
  if (err) throw err;
});
```

### Example 5: Object in fs.write()

**Before:**

```js
const fs = require("node:fs");

const fd = fs.openSync("file.txt", "w");
const data = { toString: () => "buffer content" };
fs.write(fd, data, (err) => {
  if (err) throw err;
  fs.closeSync(fd);
});
```

**After:**

```js
const fs = require("node:fs");

const fd = fs.openSync("file.txt", "w");
const data = { toString: () => "buffer content" };
fs.write(fd, data.toString(), (err) => {
  if (err) throw err;
  fs.closeSync(fd);
});
```

### Example 6: Using String() conversion

**Before:**

```js
const fs = require("node:fs");

const myObj = {
  value: 42,
  toString() {
    return `Value: ${this.value}`;
  }
};
fs.writeFileSync("output.txt", myObj);
```

**After:**

```js
const fs = require("node:fs");

const myObj = {
  value: 42,
  toString() {
    return `Value: ${this.value}`;
  }
};
fs.writeFileSync("output.txt", String(myObj));
```

### Example 7: ESM with promises API

**Before:**

```js
import { writeFile } from "node:fs/promises";

const data = { toString: () => "async content" };
await writeFile("file.txt", data);
```

**After:**

```js
import { writeFile } from "node:fs/promises";

const data = { toString: () => "async content" };
await writeFile("file.txt", data.toString());
```

### Example 8: Valid types (no change needed)

**Before:**

```js
const fs = require("node:fs");

// These are all valid and don't need changes
fs.writeFileSync("file1.txt", "string");
fs.writeFileSync("file2.txt", Buffer.from("buffer"));
fs.writeFileSync("file3.txt", new Uint8Array([1, 2, 3]));
```

**After:**

```js
const fs = require("node:fs");

// These are all valid and don't need changes
fs.writeFileSync("file1.txt", "string");
fs.writeFileSync("file2.txt", Buffer.from("buffer"));
fs.writeFileSync("file3.txt", new Uint8Array([1, 2, 3]));
```

## Refs

- [DEP0162: `fs.write()`, `fs.writeFileSync()` coercion to string](https://nodejs.org/api/deprecations.html#dep0162)
- [fs.write() coercion removal node#42796](https://github.com/nodejs/node/pull/42796)
