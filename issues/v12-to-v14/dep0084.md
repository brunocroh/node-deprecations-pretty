# Requiring bundled internal dependencies

## Description

Since requiring bundled internal dependencies is deprecated (DEP0084) and has reached End-of-Life status in Node.js v12.0.0, we should provide guidance for migration.

- The codemod should detect `require()` calls for internal Node.js modules.
- The codemod should flag usage of internal modules like `internal/*`.
- The codemod should suggest using public APIs or userland alternatives.
- The codemod should identify dependencies on Node.js internals.

## Additional Information

Note that requiring bundled internal dependencies was removed in Node.js v12.0.0. Internal modules in Node.js are prefixed with `internal/` and are not meant to be used by external code.

These internal modules can change without notice and are not part of Node.js's public API. Applications should use documented public APIs or install equivalent functionality from npm.

## Examples

### Example 1: Internal util module

**Before:**

```js
const internalUtil = require("internal/util");
```

**After:**

```js
// Use public util module or userland alternative
const util = require("node:util");
```

### Example 2: Internal errors

**Before:**

```js
const errors = require("internal/errors");
```

**After:**

```js
// Create custom error classes or use standard Error
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}
```

### Example 3: Internal streams

**Before:**

```js
const { Stream } = require("internal/streams");
```

**After:**

```js
// Use public stream module
const { Stream } = require("node:stream");
```

### Example 4: Internal process

**Before:**

```js
const processUtil = require("internal/process");
```

**After:**

```js
// Use the global process object
// or specific process APIs
const process = global.process;
```

### Example 5: Internal modules

**Before:**

```js
const moduleUtil = require("internal/module");
```

**After:**

```js
// Use public module API
const Module = require("node:module");
```

### Example 6: Internal validators

**Before:**

```js
const { validateString } = require("internal/validators");
```

**After:**

```js
// Implement validation yourself or use a validation library
function validateString(value, name) {
  if (typeof value !== "string") {
    throw new TypeError(`${name} must be a string`);
  }
}
```

## Refs

- [DEP0084: requiring bundled internal dependencies](https://nodejs.org/api/deprecations.html#dep0084)
- [Internal dependencies restriction node#26710](https://github.com/nodejs/node/pull/26710)
