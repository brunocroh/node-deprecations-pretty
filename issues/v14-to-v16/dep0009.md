# crypto.pbkdf2 without digest

## Description

Since calling `crypto.pbkdf2()` or `crypto.pbkdf2Sync()` without specifying a digest is deprecated (DEP0009) and has reached End-of-Life status in Node.js v14.0.0, we should provide a codemod to replace it.

- The codemod should detect calls to `crypto.pbkdf2()` and `crypto.pbkdf2Sync()` with missing digest parameters.
- The codemod should add a digest parameter (defaulting to `'sha256'` or another secure algorithm).
- The codemod should handle both CommonJS and ESM imports.
- The codemod should work with both destructured and namespace imports.
- The codemod should preserve all other arguments and callback patterns.

## Additional Information

Note that calling `crypto.pbkdf2()` or `crypto.pbkdf2Sync()` without a digest argument was deprecated in Node.js v6.0.0 and became End-of-Life in v14.0.0. The functions previously defaulted to using the insecure `'SHA1'` digest. Developers must now explicitly specify a digest algorithm.

Modern applications should use `'sha256'`, `'sha512'`, or other secure hash functions. The explicit requirement ensures developers make conscious security decisions rather than relying on potentially weak defaults.

## Examples

### Example 1: Basic pbkdf2 async with CommonJS

**Before:**

```js
const crypto = require("node:crypto");

crypto.pbkdf2("password", "salt", 100000, 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});
```

**After:**

```js
const crypto = require("node:crypto");

crypto.pbkdf2("password", "salt", 100000, 64, "sha256", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});
```

### Example 2: pbkdf2Sync with CommonJS

**Before:**

```js
const crypto = require("node:crypto");

const key = crypto.pbkdf2Sync("password", "salt", 100000, 64);
console.log(key.toString("hex"));
```

**After:**

```js
const crypto = require("node:crypto");

const key = crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha256");
console.log(key.toString("hex"));
```

### Example 3: Destructured import CommonJS

**Before:**

```js
const { pbkdf2, pbkdf2Sync } = require("node:crypto");

const key = pbkdf2Sync("mypassword", "somesalt", 10000, 32);
pbkdf2("secret", "salt", 50000, 64, (err, key) => {
  console.log(key);
});
```

**After:**

```js
const { pbkdf2, pbkdf2Sync } = require("node:crypto");

const key = pbkdf2Sync("mypassword", "somesalt", 10000, 32, "sha256");
pbkdf2("secret", "salt", 50000, 64, "sha256", (err, key) => {
  console.log(key);
});
```

### Example 4: ESM import

**Before:**

```js
import crypto from "node:crypto";

const key = crypto.pbkdf2Sync("password", "salt", 100000, 64);
```

**After:**

```js
import crypto from "node:crypto";

const key = crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha256");
```

### Example 5: ESM named import

**Before:**

```js
import { pbkdf2, pbkdf2Sync } from "node:crypto";

const derivedKey = pbkdf2Sync("pass", "salt", 1000, 32);
```

**After:**

```js
import { pbkdf2, pbkdf2Sync } from "node:crypto";

const derivedKey = pbkdf2Sync("pass", "salt", 1000, 32, "sha256");
```

### Example 6: Using sha512 instead of sha256

**Before:**

```js
const crypto = require("node:crypto");

const key = crypto.pbkdf2Sync("password", "salt", 100000, 64);
```

**After:**

```js
const crypto = require("node:crypto");

const key = crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
```

### Example 7: In a function with variables

**Before:**

```js
const crypto = require("node:crypto");

function deriveKey(password, salt, iterations, keylen) {
  return crypto.pbkdf2Sync(password, salt, iterations, keylen);
}
```

**After:**

```js
const crypto = require("node:crypto");

function deriveKey(password, salt, iterations, keylen) {
  return crypto.pbkdf2Sync(password, salt, iterations, keylen, "sha256");
}
```

### Example 8: Async with promise wrapper

**Before:**

```js
const crypto = require("node:crypto");
const { promisify } = require("node:util");

const pbkdf2Promise = promisify(crypto.pbkdf2);

async function getKey() {
  const key = await pbkdf2Promise("password", "salt", 100000, 32);
  return key;
}
```

**After:**

```js
const crypto = require("node:crypto");
const { promisify } = require("node:util");

const pbkdf2Promise = promisify(crypto.pbkdf2);

async function getKey() {
  const key = await pbkdf2Promise("password", "salt", 100000, 32, "sha256");
  return key;
}
```

### Example 9: Multiple calls in same file

**Before:**

```js
const crypto = require("node:crypto");

const key1 = crypto.pbkdf2Sync("pass1", "salt1", 10000, 32);
const key2 = crypto.pbkdf2Sync("pass2", "salt2", 20000, 64);

crypto.pbkdf2("pass3", "salt3", 50000, 32, (err, key3) => {
  console.log(key3);
});
```

**After:**

```js
const crypto = require("node:crypto");

const key1 = crypto.pbkdf2Sync("pass1", "salt1", 10000, 32, "sha256");
const key2 = crypto.pbkdf2Sync("pass2", "salt2", 20000, 64, "sha256");

crypto.pbkdf2("pass3", "salt3", 50000, 32, "sha256", (err, key3) => {
  console.log(key3);
});
```

## Refs

- [DEP0009: `crypto.pbkdf2` without digest](https://nodejs.org/api/deprecations.html#dep0009)
- [crypto.pbkdf2 without digest removal node#31166](https://github.com/nodejs/node/pull/31166)
