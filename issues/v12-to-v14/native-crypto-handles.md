# Native crypto handles

## Description

Since accessing native crypto handles is deprecated (DEP0117) and has reached End-of-Life status in Node.js v12.0.0, we should provide guidance for migration.

- The codemod should detect usage of `._handle` property on crypto objects.
- The codemod should flag uses of internal crypto handles.
- The codemod should suggest using public crypto APIs instead.
- The codemod should identify code that may be accessing Node.js internal structures.

## Additional Information

Note that native crypto handles were removed in Node.js v12.0.0. The `._handle` property on crypto objects exposed internal C++ handles, which were never intended to be part of the public API.

Applications should use the documented public crypto APIs instead of accessing internal handles. The underscore prefix indicates these were private implementation details.

## Examples

### Example 1: Accessing cipher handle

**Before:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
const handle = cipher._handle;  // Accessing internal handle
```

**After:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
// Use public cipher methods instead
```

### Example 2: Hash handle access

**Before:**

```js
const crypto = require("node:crypto");

const hash = crypto.createHash("sha256");
const nativeHandle = hash._handle;
```

**After:**

```js
const crypto = require("node:crypto");

const hash = crypto.createHash("sha256");
// Use hash.update() and hash.digest() instead
```

### Example 3: Sign handle

**Before:**

```js
const crypto = require("node:crypto");

const sign = crypto.createSign("RSA-SHA256");
const handle = sign._handle;
```

**After:**

```js
const crypto = require("node:crypto");

const sign = crypto.createSign("RSA-SHA256");
// Use sign.update() and sign.sign() instead
```

### Example 4: Verify handle

**Before:**

```js
const crypto = require("node:crypto");

const verify = crypto.createVerify("RSA-SHA256");
const handle = verify._handle;
```

**After:**

```js
const crypto = require("node:crypto");

const verify = crypto.createVerify("RSA-SHA256");
// Use verify.update() and verify.verify() instead
```

### Example 5: DiffieHellman handle

**Before:**

```js
const crypto = require("node:crypto");

const dh = crypto.createDiffieHellman(2048);
const handle = dh._handle;
```

**After:**

```js
const crypto = require("node:crypto");

const dh = crypto.createDiffieHellman(2048);
// Use public DiffieHellman methods instead
```

### Example 6: Use public APIs

**Before:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
if (cipher._handle) {
  // Do something with handle
}
```

**After:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
// Use cipher's public methods:
// cipher.update(), cipher.final(), cipher.setAutoPadding(), etc.
```

## Refs

- [DEP0117: Native crypto handles](https://nodejs.org/api/deprecations.html#dep0117)
- [Native crypto handles removal node#27011](https://github.com/nodejs/node/pull/27011)
