# crypto.createCipher() and crypto.createDecipher()

## Description

Since `crypto.createCipher()` and `crypto.createDecipher()` are deprecated (DEP0106) and have reached End-of-Life status in Node.js v22.0.0, we should provide a codemod to replace them.

- The codemod should replace `crypto.createCipher()` with `crypto.createCipheriv()` and add key derivation using `crypto.scrypt()` or `crypto.pbkdf2()`.
- The codemod should replace `crypto.createDecipher()` with `crypto.createDecipheriv()` and add key derivation using `crypto.scrypt()` or `crypto.pbkdf2()`.
- The codemod should generate or suggest generation of random initialization vectors (IV).
- The codemod should add proper salt generation for key derivation.
- The codemod should preserve the original algorithm and password parameters.
- The codemod should add appropriate comments explaining the security improvements.

## Additional Information

Note that `crypto.createCipher()` and `crypto.createDecipher()` were removed in Node.js v22.0.0. These functions were deprecated because they use a weak key derivation function (MD5 with no salt) and static initialization vectors, which are security vulnerabilities. Instead of these deprecated functions, developers should derive a key using `crypto.pbkdf2()` or `crypto.scrypt()` with random salts and use `crypto.createCipheriv()` and `crypto.createDecipheriv()` respectively.

The deprecated functions automatically derived keys from passwords using MD5 without salt, which is cryptographically weak. The new approach requires explicit key derivation with proper salts and initialization vectors, providing much stronger security guarantees.

## Detection Strategy

The codemod should identify usage of `crypto.createCipher()` and `crypto.createDecipher()` by analyzing the context:

- Detect direct calls to `crypto.createCipher(algorithm, password)` 
- Detect direct calls to `crypto.createDecipher(algorithm, password)`
- Detect destructured imports like `const { createCipher, createDecipher } = require('node:crypto')`
- Check for both CommonJS and ESM import patterns
- Identify the algorithm and password arguments being used

## Important points

- The migration requires additional parameters (salt, IV) that weren't in the original API
- Key derivation is an asynchronous operation, which may require refactoring synchronous code
- The IV (Initialization Vector) must be stored/transmitted alongside the encrypted data for decryption
- Different algorithms may require different key and IV lengths
- For encryption, a random IV should be generated; for decryption, the same IV used during encryption must be provided

## Caveats

- The codemod cannot automatically determine the appropriate key length and IV length for all algorithms
- The transformation may require changing synchronous code to asynchronous if using `crypto.scrypt()` or `crypto.pbkdf2()`
- Users must ensure that IVs are properly stored and transmitted with encrypted data
- The salt used for key derivation should be stored/transmitted for decryption operations
- Some code may need manual adjustment to handle the promise-based or callback-based key derivation APIs

## Examples

### Example 1: Basic createCipher with CommonJS

**Before:**

```js
const crypto = require("node:crypto");

const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

const cipher = crypto.createCipher(algorithm, password);

let encrypted = cipher.update("some clear text data", "utf8", "hex");
encrypted += cipher.final("hex");
```

**After:**

```js
const crypto = require("node:crypto");

const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

// Generate a random salt and derive the key
const salt = crypto.randomBytes(16);
const key = crypto.scryptSync(password, salt, 24); // 24 bytes = 192 bits for aes-192
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update("some clear text data", "utf8", "hex");
encrypted += cipher.final("hex");

// Note: You must store/transmit salt and iv along with encrypted data
```

### Example 2: Basic createDecipher with CommonJS

**Before:**

```js
const crypto = require("node:crypto");

const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

const decipher = crypto.createDecipher(algorithm, password);

let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
```

**After:**

```js
const crypto = require("node:crypto");

const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

// Use the same salt and IV that were used during encryption
// These should be retrieved from storage/transmission
const key = crypto.scryptSync(password, salt, 24); // 24 bytes = 192 bits for aes-192

const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
```

### Example 3: Using pbkdf2 instead of scrypt (async version)

**Before:**

```js
const crypto = require("node:crypto");

const cipher = crypto.createCipher("aes-256-cbc", "my-secret-password");
```

**After:**

```js
const crypto = require("node:crypto");

const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(16);

crypto.pbkdf2("my-secret-password", salt, 100000, 32, "sha256", (err, key) => {
  if (err) throw err;
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  // Continue with encryption...
  // Remember to store/transmit salt and iv
});
```

### Example 4: Destructured import CommonJS

**Before:**

```js
const { createCipher } = require("node:crypto");

const cipher = createCipher("aes-128-cbc", "password123");
```

**After:**

```js
const { createCipheriv, randomBytes, scryptSync } = require("node:crypto");

const salt = randomBytes(16);
const key = scryptSync("password123", salt, 16); // 16 bytes = 128 bits for aes-128
const iv = randomBytes(16);
const cipher = createCipheriv("aes-128-cbc", key, iv);
// Remember to store/transmit salt and iv
```

### Example 5: ESM import

**Before:**

```js
import crypto from "node:crypto";

const cipher = crypto.createCipher("aes-256-cbc", "my-password");
```

**After:**

```js
import crypto from "node:crypto";

const salt = crypto.randomBytes(16);
const key = crypto.scryptSync("my-password", salt, 32); // 32 bytes = 256 bits
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
// Remember to store/transmit salt and iv
```

### Example 6: ESM named import

**Before:**

```js
import { createCipher, createDecipher } from "node:crypto";

const cipher = createCipher("aes-192-cbc", "secret");
const decipher = createDecipher("aes-192-cbc", "secret");
```

**After:**

```js
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from "node:crypto";

// For encryption
const salt = randomBytes(16);
const key = scryptSync("secret", salt, 24); // 24 bytes = 192 bits
const iv = randomBytes(16);
const cipher = createCipheriv("aes-192-cbc", key, iv);
// Remember to store/transmit salt and iv

// For decryption (using stored/transmitted salt and iv)
const decryptKey = scryptSync("secret", salt, 24);
const decipher = createDecipheriv("aes-192-cbc", decryptKey, iv);
```

### Example 7: In a function with full encryption/decryption cycle

**Before:**

```js
const crypto = require("node:crypto");

function encrypt(text, password) {
  const cipher = crypto.createCipher("aes-256-cbc", password);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encrypted, password) {
  const decipher = crypto.createDecipher("aes-256-cbc", password);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
```

**After:**

```js
const crypto = require("node:crypto");

function encrypt(text, password) {
  const salt = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, salt, 32);
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  
  // Return salt and iv along with encrypted data
  return {
    encrypted: encrypted,
    salt: salt.toString("hex"),
    iv: iv.toString("hex")
  };
}

function decrypt(encryptedData, password) {
  const salt = Buffer.from(encryptedData.salt, "hex");
  const iv = Buffer.from(encryptedData.iv, "hex");
  const key = crypto.scryptSync(password, salt, 32);
  
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedData.encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  
  return decrypted;
}
```

### Example 8: Using promises with pbkdf2

**Before:**

```js
const crypto = require("node:crypto");

function encryptData(data, password) {
  const cipher = crypto.createCipher("aes-256-cbc", password);
  return cipher.update(data, "utf8", "base64") + cipher.final("base64");
}
```

**After:**

```js
const crypto = require("node:crypto");
const { promisify } = require("node:util");
const pbkdf2 = promisify(crypto.pbkdf2);

async function encryptData(data, password) {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(16);
  const key = await pbkdf2(password, salt, 100000, 32, "sha256");
  
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = cipher.update(data, "utf8", "base64") + cipher.final("base64");
  
  return {
    encrypted: encrypted,
    salt: salt.toString("base64"),
    iv: iv.toString("base64")
  };
}
```

## Refs

- [DEP0106: `crypto.createCipher` and `crypto.createDecipher`](https://nodejs.org/api/deprecations.html#dep0106)
- [crypto.createCipher and crypto.createDecipher removal node#50973](https://github.com/nodejs/node/pull/50973)
