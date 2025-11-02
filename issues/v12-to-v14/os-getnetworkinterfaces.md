# os.getNetworkInterfaces()

## Description

Since `os.getNetworkInterfaces()` is deprecated (DEP0023) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace all calls to `os.getNetworkInterfaces()` with `os.networkInterfaces()`.
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with destructured imports and namespace imports.
- The codemod should preserve the context in which the method is called.

## Additional Information

Note that `os.getNetworkInterfaces()` was removed in Node.js v12.0.0. The method was deprecated because it used inconsistent naming compared to other Node.js APIs. The replacement `os.networkInterfaces()` follows the standard Node.js naming convention.

Both methods return an object containing network interfaces that have been assigned a network address. The functionality is identical.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const os = require("node:os");

const interfaces = os.getNetworkInterfaces();
console.log(interfaces);
```

**After:**

```js
const os = require("node:os");

const interfaces = os.networkInterfaces();
console.log(interfaces);
```

### Example 2: Destructured import CommonJS

**Before:**

```js
const { getNetworkInterfaces } = require("node:os");

const nets = getNetworkInterfaces();
```

**After:**

```js
const { networkInterfaces } = require("node:os");

const nets = networkInterfaces();
```

### Example 3: ESM import

**Before:**

```js
import os from "node:os";

const interfaces = os.getNetworkInterfaces();
```

**After:**

```js
import os from "node:os";

const interfaces = os.networkInterfaces();
```

### Example 4: ESM named import

**Before:**

```js
import { getNetworkInterfaces } from "node:os";

const networkInfo = getNetworkInterfaces();
```

**After:**

```js
import { networkInterfaces } from "node:os";

const networkInfo = networkInterfaces();
```

### Example 5: Iterating over interfaces

**Before:**

```js
const os = require("node:os");

const nets = os.getNetworkInterfaces();
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    console.log(name, net.address);
  }
}
```

**After:**

```js
const os = require("node:os");

const nets = os.networkInterfaces();
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    console.log(name, net.address);
  }
}
```

### Example 6: Finding IPv4 address

**Before:**

```js
const os = require("node:os");

function getLocalIp() {
  const interfaces = os.getNetworkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
}
```

**After:**

```js
const os = require("node:os");

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
}
```

### Example 7: Aliased import

**Before:**

```js
const { getNetworkInterfaces: getNetInfo } = require("node:os");

const info = getNetInfo();
```

**After:**

```js
const { networkInterfaces: getNetInfo } = require("node:os");

const info = getNetInfo();
```

### Example 8: In object property

**Before:**

```js
const os = require("node:os");

const systemInfo = {
  interfaces: os.getNetworkInterfaces(),
  platform: os.platform()
};
```

**After:**

```js
const os = require("node:os");

const systemInfo = {
  interfaces: os.networkInterfaces(),
  platform: os.platform()
};
```

### Example 9: As callback argument

**Before:**

```js
const os = require("node:os");

function logInterfaces(interfaces) {
  console.log(interfaces);
}

logInterfaces(os.getNetworkInterfaces());
```

**After:**

```js
const os = require("node:os");

function logInterfaces(interfaces) {
  console.log(interfaces);
}

logInterfaces(os.networkInterfaces());
```

### Example 10: Multiple calls

**Before:**

```js
const os = require("node:os");

const nets1 = os.getNetworkInterfaces();
console.log("First call:", nets1);

setTimeout(() => {
  const nets2 = os.getNetworkInterfaces();
  console.log("Second call:", nets2);
}, 1000);
```

**After:**

```js
const os = require("node:os");

const nets1 = os.networkInterfaces();
console.log("First call:", nets1);

setTimeout(() => {
  const nets2 = os.networkInterfaces();
  console.log("Second call:", nets2);
}, 1000);
```

## Refs

- [DEP0023: `os.getNetworkInterfaces()`](https://nodejs.org/api/deprecations.html#dep0023)
- [os.getNetworkInterfaces() removal node#25280](https://github.com/nodejs/node/pull/25280)
