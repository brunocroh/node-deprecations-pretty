# crypto.DEFAULT_ENCODING

## Description

Since `crypto.DEFAULT_ENCODING` is deprecated (DEP0091) and has reached End-of-Life status in Node.js v20.0.0, we should provide a codemod to replace it.

- The codemod should remove references to `crypto.DEFAULT_ENCODING`.
- The codemod should replace usage with explicit encoding parameters where needed.
- The codemod should identify where the default encoding was being read or set.
- The codemod should add comments suggesting explicit encoding usage.

## Additional Information

Note that `crypto.DEFAULT_ENCODING` was removed in Node.js v20.0.0. This property only existed for compatibility with Node.js releases prior to version 0.9.3. The property allowed changing the default encoding for crypto operations, but this practice led to unpredictable behavior.

Instead of relying on a default encoding, developers should explicitly specify the encoding in each crypto operation. This makes the code more explicit and easier to understand.

## Examples

### Example 1: Reading DEFAULT_ENCODING

**Before:**

```js
const crypto = require("node:crypto");

const encoding = crypto.DEFAULT_ENCODING;
```

**After:**

```js
// crypto.DEFAULT_ENCODING has been removed
// Use explicit encoding in crypto operations instead
const encoding = "binary"; // or your preferred default encoding
```

### Example 2: Setting DEFAULT_ENCODING

**Before:**

```js
const crypto = require("node:crypto");

crypto.DEFAULT_ENCODING = "hex";
```

**After:**

```js
// crypto.DEFAULT_ENCODING has been removed
// Always specify encoding explicitly in crypto operations
// For example: hash.digest("hex")
```

### Example 3: Using DEFAULT_ENCODING in hash operations

**Before:**

```js
const crypto = require("node:crypto");

crypto.DEFAULT_ENCODING = "hex";
const hash = crypto.createHash("sha256");
hash.update("some data");
const result = hash.digest(); // Uses DEFAULT_ENCODING
```

**After:**

```js
const crypto = require("node:crypto");

const hash = crypto.createHash("sha256");
hash.update("some data");
const result = hash.digest("hex"); // Explicitly specify encoding
```

### Example 4: Conditional encoding based on DEFAULT_ENCODING

**Before:**

```js
const crypto = require("node:crypto");

const encoding = crypto.DEFAULT_ENCODING || "binary";
const hash = crypto.createHash("md5").update("data").digest(encoding);
```

**After:**

```js
const crypto = require("node:crypto");

const encoding = "binary"; // Specify your preferred default
const hash = crypto.createHash("md5").update("data").digest(encoding);
```

### Example 5: ESM import with DEFAULT_ENCODING

**Before:**

```js
import crypto from "node:crypto";

if (crypto.DEFAULT_ENCODING === "hex") {
  // do something
}
```

**After:**

```js
// crypto.DEFAULT_ENCODING has been removed
// Use explicit encoding parameters in crypto operations
// Consider using a constant for your application's default encoding
const DEFAULT_ENCODING = "hex";

if (DEFAULT_ENCODING === "hex") {
  // do something
}
```

## Refs

- [DEP0091: `crypto.DEFAULT_ENCODING`](https://nodejs.org/api/deprecations.html#dep0091)
- [crypto.DEFAULT_ENCODING removal node#47182](https://github.com/nodejs/node/pull/47182)
