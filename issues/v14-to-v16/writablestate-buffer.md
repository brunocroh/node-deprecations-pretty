# _writableState.buffer

## Description

Since `_writableState.buffer` is deprecated (DEP0003) and has reached End-of-Life status in Node.js v14.0.0, we should provide a codemod to replace it.

- The codemod should replace `_writableState.buffer` with `_writableState.getBuffer()`.
- The codemod should handle property access patterns on stream objects.
- The codemod should work with both direct property access and chained access.
- The codemod should preserve the context in which the property is accessed.

## Additional Information

Note that `_writableState.buffer` was removed in Node.js v14.0.0. The property was deprecated because it exposed internal implementation details. Instead of accessing `_writableState.buffer` directly, developers should use the `_writableState.getBuffer()` method, which provides a proper API for accessing the internal buffer.

The `_writableState` object is an internal implementation detail and accessing it directly is discouraged. However, if access is necessary, use the `getBuffer()` method instead of the `buffer` property.

## Examples

### Example 1: Direct property access

**Before:**

```js
const { Writable } = require("node:stream");

const stream = new Writable({
  write(chunk, encoding, callback) {
    callback();
  }
});

const buffer = stream._writableState.buffer;
```

**After:**

```js
const { Writable } = require("node:stream");

const stream = new Writable({
  write(chunk, encoding, callback) {
    callback();
  }
});

const buffer = stream._writableState.getBuffer();
```

### Example 2: Accessing buffer length

**Before:**

```js
const stream = require("node:stream");

function getBufferSize(writable) {
  return writable._writableState.buffer.length;
}
```

**After:**

```js
const stream = require("node:stream");

function getBufferSize(writable) {
  return writable._writableState.getBuffer().length;
}
```

### Example 3: In conditional statement

**Before:**

```js
const { Writable } = require("node:stream");

const writable = new Writable();

if (writable._writableState.buffer.length > 0) {
  console.log("Buffer has data");
}
```

**After:**

```js
const { Writable } = require("node:stream");

const writable = new Writable();

if (writable._writableState.getBuffer().length > 0) {
  console.log("Buffer has data");
}
```

### Example 4: ESM import

**Before:**

```js
import { Writable } from "node:stream";

const stream = new Writable({
  write(chunk, encoding, callback) {
    callback();
  }
});

const bufferContents = stream._writableState.buffer;
```

**After:**

```js
import { Writable } from "node:stream";

const stream = new Writable({
  write(chunk, encoding, callback) {
    callback();
  }
});

const bufferContents = stream._writableState.getBuffer();
```

### Example 5: Iterating over buffer

**Before:**

```js
const { Writable } = require("node:stream");

function logBufferContents(writable) {
  for (const item of writable._writableState.buffer) {
    console.log(item);
  }
}
```

**After:**

```js
const { Writable } = require("node:stream");

function logBufferContents(writable) {
  for (const item of writable._writableState.getBuffer()) {
    console.log(item);
  }
}
```

### Example 6: Custom writable stream

**Before:**

```js
const { Writable } = require("node:stream");

class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    const pending = this._writableState.buffer;
    console.log(`Pending chunks: ${pending.length}`);
    callback();
  }
}
```

**After:**

```js
const { Writable } = require("node:stream");

class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    const pending = this._writableState.getBuffer();
    console.log(`Pending chunks: ${pending.length}`);
    callback();
  }
}
```

## Refs

- [DEP0003: `_writableState.buffer`](https://nodejs.org/api/deprecations.html#dep0003)
- [_writableState.buffer removal node#31165](https://github.com/nodejs/node/pull/31165)
