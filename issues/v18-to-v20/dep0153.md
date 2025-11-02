# dns.lookup() and dnsPromises.lookup() options type coercion

## Description

Since using non-proper types for options in `dns.lookup()` and `dnsPromises.lookup()` is deprecated (DEP0153) and has reached End-of-Life status in Node.js v18.0.0, we should provide a codemod to replace them.

- The codemod should ensure `family` option is a nullish value or an integer.
- The codemod should ensure `hints` option is a nullish value or a number.
- The codemod should ensure `all` option is a nullish value or a boolean.
- The codemod should ensure `verbatim` option is a nullish value or a boolean.
- The codemod should add explicit type conversions where needed.

## Additional Information

Note that in Node.js v18.0.0, passing non-proper types for dns.lookup options now throws an `ERR_INVALID_ARG_TYPE` error. This change enforces proper type usage:
- `family`: must be `undefined`, `null`, or an integer (0, 4, or 6)
- `hints`: must be `undefined`, `null`, or a number
- `all`: must be `undefined`, `null`, or a boolean
- `verbatim`: must be `undefined`, `null`, or a boolean

The automatic type coercion was removed to prevent unexpected behavior and make the API more predictable.

## Examples

### Example 1: String family option

**Before:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { family: "4" }, (err, address) => {
  console.log(address);
});
```

**After:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { family: 4 }, (err, address) => {
  console.log(address);
});
```

### Example 2: String all option

**Before:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { all: "true" }, (err, addresses) => {
  console.log(addresses);
});
```

**After:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { all: true }, (err, addresses) => {
  console.log(addresses);
});
```

### Example 3: Number verbatim option

**Before:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { verbatim: 1 }, (err, address) => {
  console.log(address);
});
```

**After:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { verbatim: true }, (err, address) => {
  console.log(address);
});
```

### Example 4: Promises API with string family

**Before:**

```js
const { lookup } = require("node:dns").promises;

const address = await lookup("example.com", { family: "6" });
```

**After:**

```js
const { lookup } = require("node:dns").promises;

const address = await lookup("example.com", { family: 6 });
```

### Example 5: ESM with multiple invalid options

**Before:**

```js
import { lookup } from "node:dns/promises";

const result = await lookup("example.com", {
  family: "4",
  all: 1,
  verbatim: 0
});
```

**After:**

```js
import { lookup } from "node:dns/promises";

const result = await lookup("example.com", {
  family: 4,
  all: true,
  verbatim: false
});
```

### Example 6: Dynamic family value

**Before:**

```js
const dns = require("node:dns");

const familyStr = "4";
dns.lookup("example.com", { family: familyStr }, callback);
```

**After:**

```js
const dns = require("node:dns");

const familyStr = "4";
dns.lookup("example.com", { family: parseInt(familyStr, 10) }, callback);
```

### Example 7: Hints option with string

**Before:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { hints: "0" }, (err, address) => {
  console.log(address);
});
```

**After:**

```js
const dns = require("node:dns");

dns.lookup("example.com", { hints: 0 }, (err, address) => {
  console.log(address);
});
```

### Example 8: Valid options (no change needed)

**Before:**

```js
const dns = require("node:dns");

dns.lookup("example.com", {
  family: 4,
  hints: dns.ADDRCONFIG,
  all: false,
  verbatim: true
}, (err, address) => {
  console.log(address);
});
```

**After:**

```js
const dns = require("node:dns");

dns.lookup("example.com", {
  family: 4,
  hints: dns.ADDRCONFIG,
  all: false,
  verbatim: true
}, (err, address) => {
  console.log(address);
});
```

### Example 9: Null and undefined values (no change needed)

**Before:**

```js
const dns = require("node:dns");

dns.lookup("example.com", {
  family: undefined,
  all: null,
  verbatim: undefined
}, callback);
```

**After:**

```js
const dns = require("node:dns");

dns.lookup("example.com", {
  family: undefined,
  all: null,
  verbatim: undefined
}, callback);
```

## Refs

- [DEP0153: `dns.lookup` and `dnsPromises.lookup` options type coercion](https://nodejs.org/api/deprecations.html#dep0153)
- [dns.lookup options type coercion removal node#41431](https://github.com/nodejs/node/pull/41431)
