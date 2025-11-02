# Cipher.setAuthTag() and Decipher.getAuthTag()

## Description

Since `Cipher.setAuthTag()` and `Decipher.getAuthTag()` are deprecated (DEP0113) and have reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace them.

- The codemod should replace `Cipher.setAuthTag()` with `Cipher.setAAD()` (for setting additional authenticated data).
- The codemod should replace `Decipher.getAuthTag()` with `Cipher.getAuthTag()` on cipher instances.
- The codemod should handle GCM and CCM cipher modes.
- The codemod should work with both CommonJS and ESM imports.

## Additional Information

Note that `Cipher.setAuthTag()` and `Decipher.getAuthTag()` were removed in Node.js v12.0.0. These methods were incorrectly named and placed on the wrong objects:
- `setAuthTag()` should only be on `Decipher` (for decryption)
- `getAuthTag()` should only be on `Cipher` (for encryption)

The authentication tag is generated during encryption and must be provided during decryption for authenticated encryption modes like GCM and CCM.

## Examples

### Example 1: getAuthTag moved to Cipher

**Before:**

```js
const crypto = require("node:crypto");

const decipher = crypto.createDecipheriv("aes-128-gcm", key, iv);
// This was wrong - trying to get auth tag from decipher
const tag = decipher.getAuthTag();
```

**After:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipheriv("aes-128-gcm", key, iv);
// Get auth tag from cipher after encryption
const tag = cipher.getAuthTag();
```

### Example 2: setAuthTag remains on Decipher

**Before:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
// This was wrong - trying to set auth tag on cipher
cipher.setAuthTag(tag);
```

**After:**

```js
const crypto = require("node:crypto");

const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
// Set auth tag on decipher for decryption
decipher.setAuthTag(tag);
```

### Example 3: Proper encryption flow

**Before:**

```js
const crypto = require("node:crypto");

function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv("aes-192-gcm", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
```

**After:**

```js
const crypto = require("node:crypto");

function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv("aes-192-gcm", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag();
  return { encrypted, authTag: authTag.toString("hex") };
}
```

### Example 4: Proper decryption flow

**Before:**

```js
const crypto = require("node:crypto");

function decrypt(encrypted, key, iv) {
  const decipher = crypto.createDecipheriv("aes-192-gcm", key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
```

**After:**

```js
const crypto = require("node:crypto");

function decrypt(encrypted, authTag, key, iv) {
  const decipher = crypto.createDecipheriv("aes-192-gcm", key, iv);
  decipher.setAuthTag(Buffer.from(authTag, "hex"));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
```

### Example 5: ESM with CCM mode

**Before:**

```js
import crypto from "node:crypto";

const cipher = crypto.createCipheriv("aes-128-ccm", key, iv, {
  authTagLength: 16
});
```

**After:**

```js
import crypto from "node:crypto";

const cipher = crypto.createCipheriv("aes-128-ccm", key, iv, {
  authTagLength: 16
});

// After encryption
const authTag = cipher.getAuthTag();
```

### Example 6: Complete encrypt/decrypt cycle

**Before:**

```js
const crypto = require("node:crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(12);

// Encryption
const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
const encrypted = cipher.update("secret", "utf8", "hex") + cipher.final("hex");

// Decryption
const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
const decrypted = decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
```

**After:**

```js
const crypto = require("node:crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(12);

// Encryption
const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
const encrypted = cipher.update("secret", "utf8", "hex") + cipher.final("hex");
const authTag = cipher.getAuthTag();

// Decryption
const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
decipher.setAuthTag(authTag);
const decrypted = decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
```

## Refs

- [DEP0113: `Cipher.setAuthTag()`, `Decipher.getAuthTag()`](https://nodejs.org/api/deprecations.html#dep0113)
- [Cipher/Decipher auth tag methods cleanup node#26249](https://github.com/nodejs/node/pull/26249)
