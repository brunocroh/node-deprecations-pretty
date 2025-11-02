# crypto._toBuf()

## Description

Since `crypto._toBuf()` is deprecated (DEP0114) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace `crypto._toBuf()` with `Buffer.from()`.
- The codemod should handle various input types (strings, arrays, buffers).
- The codemod should preserve encoding parameters where applicable.
- The codemod should work with both CommonJS and ESM imports.

## Additional Information

Note that `crypto._toBuf()` was removed in Node.js v12.0.0. This was an internal API that was never intended for public use and was exposed by accident. The underscore prefix indicates it was a private API.

Developers should use the standard `Buffer.from()` method instead, which provides proper buffer creation with explicit encoding support.

## Examples

### Example 1: Basic string conversion

**Before:**

```js
const crypto = require("node:crypto");

const buf = crypto._toBuf("hello world");
```

**After:**

```js
const buf = Buffer.from("hello world");
```

### Example 2: With encoding

**Before:**

```js
const crypto = require("node:crypto");

const buf = crypto._toBuf("48656c6c6f", "hex");
```

**After:**

```js
const buf = Buffer.from("48656c6c6f", "hex");
```

### Example 3: Array input

**Before:**

```js
const crypto = require("node:crypto");

const buf = crypto._toBuf([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
```

**After:**

```js
const buf = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
```

### Example 4: Already a buffer

**Before:**

```js
const crypto = require("node:crypto");

const existingBuf = Buffer.from("test");
const buf = crypto._toBuf(existingBuf);
```

**After:**

```js
const existingBuf = Buffer.from("test");
const buf = Buffer.from(existingBuf);
```

### Example 5: ESM import

**Before:**

```js
import crypto from "node:crypto";

const data = crypto._toBuf("data");
```

**After:**

```js
const data = Buffer.from("data");
```

### Example 6: In crypto operations

**Before:**

```js
const crypto = require("node:crypto");

const hash = crypto.createHash("sha256");
hash.update(crypto._toBuf("message"));
const digest = hash.digest();
```

**After:**

```js
const crypto = require("node:crypto");

const hash = crypto.createHash("sha256");
hash.update(Buffer.from("message"));
const digest = hash.digest();
```

### Example 7: Base64 encoding

**Before:**

```js
const crypto = require("node:crypto");

const buf = crypto._toBuf("SGVsbG8gV29ybGQ=", "base64");
```

**After:**

```js
const buf = Buffer.from("SGVsbG8gV29ybGQ=", "base64");
```

### Example 8: In function

**Before:**

```js
const crypto = require("node:crypto");

function processData(input) {
  const buffer = crypto._toBuf(input, "utf8");
  return buffer.toString("hex");
}
```

**After:**

```js
function processData(input) {
  const buffer = Buffer.from(input, "utf8");
  return buffer.toString("hex");
}
```

## Refs

- [DEP0114: `crypto._toBuf()`](https://nodejs.org/api/deprecations.html#dep0114)
- [crypto._toBuf() removal node#25338](https://github.com/nodejs/node/pull/25338)
