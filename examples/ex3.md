## Description

Since `fs.truncate()` and `fs.truncateSync()` with file descriptors are deprecated (DEP0081) and have reached End-of-Life status, we should provide a codemod to replace them.

- The codemod should replace all instances of `fs.truncate(fd, ...)` with `fs.ftruncate(fd, ...)` when the first argument is a file descriptor.
- The codemod should replace all instances of `fs.truncateSync(fd, ...)` with `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor.
- The codemod should update import/require statements to include `ftruncate` and `ftruncateSync` when needed.
- The codemod should NOT replace `fs.truncate(path, ...)` calls where the first argument is a file path string.

## Additional Information

Note that `fs.truncate()` and `fs.truncateSync()` with file descriptors are deprecated in favor of `fs.ftruncate()` and `fs.ftruncateSync()`. The behavior is identical, but the new functions have clearer naming to indicate they work with file descriptors. Using `fs.truncate()` with file paths (strings) remains valid and supported.

## Detection Strategy

The codemod should identify file descriptor usage by analyzing the context:

- If the first argument to truncate/truncateSync is a variable that was assigned from fs.open/fs.openSync calls
- If the first argument is a numeric literal or variable with numeric type hints
- If the call is within a callback from fs.open() where the second parameter is typically the file descriptor

## Examples

### Case 1: Destructured import with callback version

**Before:**

```js
const { truncate, open, close } = require("node:fs");

open("file.txt", "w", (err, fd) => {
  if (err) throw err;
  truncate(fd, 10, (err) => {
    if (err) throw err;
    close(fd, () => {});
  });
});
```

**After:**

```js
const { ftruncate, open, close } = require("node:fs");

open("file.txt", "w", (err, fd) => {
  if (err) throw err;
  ftruncate(fd, 10, (err) => {
    if (err) throw err;
    close(fd, () => {});
  });
});
```

### Case 2: Namespace import with sync version

**Before:**

```js
const fs = require("node:fs");

const fd = fs.openSync("file.txt", "w");
try {
  fs.truncateSync(fd, 10);
} finally {
  fs.closeSync(fd);
}
```

**After:**

```js
const fs = require("node:fs");

const fd = fs.openSync("file.txt", "w");
try {
  fs.ftruncateSync(fd, 10);
} finally {
  fs.closeSync(fd);
}
```

### Case 3: Mixed usage (file descriptor and file path)

**Before:**

```js
const {
  truncate,
  truncateSync,
  open,
  openSync,
  close,
  closeSync,
} = require("node:fs");

// This should be replaced (file descriptor)
const fd = openSync("file.txt", "w");
truncateSync(fd, 10);
closeSync(fd);

// This should NOT be replaced (file path)
truncate("other.txt", 5, (err) => {
  if (err) throw err;
});
```

**After:**

```js
const {
  truncate,
  ftruncateSync,
  open,
  openSync,
  close,
  closeSync,
} = require("node:fs");

// This should be replaced (file descriptor)
const fd = openSync("file.txt", "w");
ftruncateSync(fd, 10);
closeSync(fd);

// This should NOT be replaced (file path)
truncate("other.txt", 5, (err) => {
  if (err) throw err;
});
```

### Case 4: ESM import

**Before:**

```js
import { truncate, open, close } from "node:fs";

open("file.txt", "w", (err, fd) => {
  if (err) throw err;
  truncate(fd, 10, (err) => {
    if (err) throw err;
    close(fd, () => {});
  });
});
```

**After:**

```js
import { ftruncate, open, close } from "node:fs";

open("file.txt", "w", (err, fd) => {
  if (err) throw err;
  ftruncate(fd, 10, (err) => {
    if (err) throw err;
    close(fd, () => {});
  });
});
```

## REFS

[DEP0081: `fs.truncate()` using a file descriptor](https://nodejs.org/docs/latest/api/deprecations.html#DEP0081)

```

```
