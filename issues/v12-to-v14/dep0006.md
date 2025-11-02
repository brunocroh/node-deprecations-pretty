# child_process options.customFds

## Description

Since `options.customFds` in `child_process` methods is deprecated (DEP0006) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace `options.customFds` with `options.stdio`.
- The codemod should handle `spawn()`, `fork()`, and `exec()` methods.
- The codemod should convert the array format appropriately.
- The codemod should work with both CommonJS and ESM imports.

## Additional Information

Note that `options.customFds` was removed in Node.js v12.0.0. This option was deprecated because `options.stdio` provides a more flexible and powerful way to configure file descriptors for child processes.

The `customFds` option took an array of three file descriptors for stdin, stdout, and stderr. The `stdio` option provides the same functionality with additional options like 'pipe', 'ignore', 'inherit', and stream objects.

## Examples

### Example 1: Basic spawn with customFds

**Before:**

```js
const { spawn } = require("node:child_process");

const child = spawn("ls", {
  customFds: [0, 1, 2]
});
```

**After:**

```js
const { spawn } = require("node:child_process");

const child = spawn("ls", {
  stdio: [0, 1, 2]
});
```

### Example 2: fork with customFds

**Before:**

```js
const { fork } = require("node:child_process");

const child = fork("worker.js", {
  customFds: [process.stdin, process.stdout, process.stderr]
});
```

**After:**

```js
const { fork } = require("node:child_process");

const child = fork("worker.js", {
  stdio: [process.stdin, process.stdout, process.stderr]
});
```

### Example 3: exec with customFds

**Before:**

```js
const { exec } = require("node:child_process");
const fs = require("node:fs");

const logFile = fs.openSync("output.log", "a");

exec("npm install", {
  customFds: [-1, logFile, logFile]
});
```

**After:**

```js
const { exec } = require("node:child_process");
const fs = require("node:fs");

const logFile = fs.openSync("output.log", "a");

exec("npm install", {
  stdio: ["ignore", logFile, logFile]
});
```

### Example 4: ESM import

**Before:**

```js
import { spawn } from "node:child_process";

const child = spawn("echo", ["hello"], {
  customFds: [0, 1, 2]
});
```

**After:**

```js
import { spawn } from "node:child_process";

const child = spawn("echo", ["hello"], {
  stdio: [0, 1, 2]
});
```

### Example 5: Using inherit option

**Before:**

```js
const { spawn } = require("node:child_process");

const child = spawn("node", ["script.js"], {
  customFds: [process.stdin.fd, process.stdout.fd, process.stderr.fd]
});
```

**After:**

```js
const { spawn } = require("node:child_process");

const child = spawn("node", ["script.js"], {
  stdio: "inherit"
});
```

### Example 6: Mixed file descriptors

**Before:**

```js
const { spawn } = require("node:child_process");
const fs = require("node:fs");

const outFd = fs.openSync("out.log", "w");

spawn("command", {
  customFds: [0, outFd, 2]
});
```

**After:**

```js
const { spawn } = require("node:child_process");
const fs = require("node:fs");

const outFd = fs.openSync("out.log", "w");

spawn("command", {
  stdio: [0, outFd, 2]
});
```

## Refs

- [DEP0006: `child_process` `options.customFds`](https://nodejs.org/api/deprecations.html#dep0006)
- [options.customFds removal node#25279](https://github.com/nodejs/node/pull/25279)
