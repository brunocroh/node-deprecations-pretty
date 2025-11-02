# Thenable support in streams

## Description

Since thenable support in streams implementation is deprecated (DEP0157) and has reached End-of-Life status in Node.js v18.0.0, we should provide a codemod to replace it.

- The codemod should convert async stream implementation methods to callback-based implementations.
- The codemod should remove `await` usage within stream implementation methods.
- The codemod should ensure callbacks are properly invoked.
- The codemod should handle `_write`, `_writev`, `_read`, `_transform`, `_flush`, and `_final` methods.

## Additional Information

Note that in Node.js v18.0.0, thenable support in streams was removed. This was an undocumented feature where stream implementation methods could return promises or use async/await. This feature caused unexpected problems where users implemented functions in callback style but used async methods, which would cause errors since mixing promise and callback semantics is not valid.

Developers should now always use callback-based implementations for stream methods. If you need to perform asynchronous operations, use callbacks or promises within the method but ensure the callback parameter is called to signal completion.

## Examples

### Example 1: Async _write method

**Before:**

```js
const { Writable } = require("node:stream");

const writable = new Writable({
  async write(chunk, encoding, callback) {
    await someAsyncOperation(chunk);
    callback();
  }
});
```

**After:**

```js
const { Writable } = require("node:stream");

const writable = new Writable({
  write(chunk, encoding, callback) {
    someAsyncOperation(chunk)
      .then(() => callback())
      .catch(err => callback(err));
  }
});
```

### Example 2: Async _final method

**Before:**

```js
const { Writable } = require("node:stream");

const writable = new Writable({
  write(chunk, encoding, callback) {
    // write implementation
    callback();
  },
  async final(callback) {
    await cleanup();
    callback();
  }
});
```

**After:**

```js
const { Writable } = require("node:stream");

const writable = new Writable({
  write(chunk, encoding, callback) {
    // write implementation
    callback();
  },
  final(callback) {
    cleanup()
      .then(() => callback())
      .catch(err => callback(err));
  }
});
```

### Example 3: Async _transform method

**Before:**

```js
const { Transform } = require("node:stream");

const transform = new Transform({
  async transform(chunk, encoding, callback) {
    const result = await processChunk(chunk);
    callback(null, result);
  }
});
```

**After:**

```js
const { Transform } = require("node:stream");

const transform = new Transform({
  transform(chunk, encoding, callback) {
    processChunk(chunk)
      .then(result => callback(null, result))
      .catch(err => callback(err));
  }
});
```

### Example 4: Async _flush method

**Before:**

```js
const { Transform } = require("node:stream");

const transform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  },
  async flush(callback) {
    await finalizeStream();
    callback();
  }
});
```

**After:**

```js
const { Transform } = require("node:stream");

const transform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  },
  flush(callback) {
    finalizeStream()
      .then(() => callback())
      .catch(err => callback(err));
  }
});
```

### Example 5: Async _read method

**Before:**

```js
const { Readable } = require("node:stream");

const readable = new Readable({
  async read(size) {
    const data = await fetchData(size);
    this.push(data);
  }
});
```

**After:**

```js
const { Readable } = require("node:stream");

const readable = new Readable({
  read(size) {
    fetchData(size)
      .then(data => this.push(data))
      .catch(err => this.destroy(err));
  }
});
```

### Example 6: Class-based stream with async methods

**Before:**

```js
const { Writable } = require("node:stream");

class MyWritable extends Writable {
  async _write(chunk, encoding, callback) {
    await this.processChunk(chunk);
    callback();
  }
  
  async processChunk(chunk) {
    // async processing
  }
}
```

**After:**

```js
const { Writable } = require("node:stream");

class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    this.processChunk(chunk)
      .then(() => callback())
      .catch(err => callback(err));
  }
  
  async processChunk(chunk) {
    // async processing
  }
}
```

### Example 7: Multiple async operations

**Before:**

```js
const { Transform } = require("node:stream");

const transform = new Transform({
  async transform(chunk, encoding, callback) {
    const step1 = await operation1(chunk);
    const step2 = await operation2(step1);
    callback(null, step2);
  }
});
```

**After:**

```js
const { Transform } = require("node:stream");

const transform = new Transform({
  transform(chunk, encoding, callback) {
    operation1(chunk)
      .then(step1 => operation2(step1))
      .then(step2 => callback(null, step2))
      .catch(err => callback(err));
  }
});
```

### Example 8: ESM with async stream methods

**Before:**

```js
import { Writable } from "node:stream";

export const writable = new Writable({
  async write(chunk, encoding, callback) {
    await database.insert(chunk.toString());
    callback();
  }
});
```

**After:**

```js
import { Writable } from "node:stream";

export const writable = new Writable({
  write(chunk, encoding, callback) {
    database.insert(chunk.toString())
      .then(() => callback())
      .catch(err => callback(err));
  }
});
```

### Example 9: Using util.promisify pattern

**Before:**

```js
const { Writable } = require("node:stream");

const writable = new Writable({
  async write(chunk, encoding, callback) {
    try {
      await someAsyncWork(chunk);
      callback();
    } catch (err) {
      callback(err);
    }
  }
});
```

**After:**

```js
const { Writable } = require("node:stream");

const writable = new Writable({
  write(chunk, encoding, callback) {
    someAsyncWork(chunk)
      .then(() => callback())
      .catch(err => callback(err));
  }
});
```

## Important points

- Stream implementation methods should never use `async` keyword
- Always invoke the callback parameter to signal completion
- Use promise chains (`.then()/.catch()`) instead of `await` within implementation methods
- For error handling, pass errors to the callback rather than throwing
- The callback pattern ensures proper backpressure handling in streams

## Refs

- [DEP0157: Thenable support in streams](https://nodejs.org/api/deprecations.html#dep0157)
- [Remove thenable support in streams node#40773](https://github.com/nodejs/node/pull/40773)
