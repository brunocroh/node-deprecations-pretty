# AsyncHooks embedder AsyncResource.emitBefore and AsyncResource.emitAfter APIs

## Description

Since `AsyncResource.emitBefore()` and `AsyncResource.emitAfter()` are deprecated (DEP0098) and have reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace them.

- The codemod should replace `emitBefore()` and `emitAfter()` with `runInAsyncScope()`.
- The codemod should handle AsyncResource instances.
- The codemod should refactor code to use the callback-based API.
- The codemod should work with both CommonJS and ESM imports.

## Additional Information

Note that `AsyncResource.emitBefore()` and `AsyncResource.emitAfter()` were removed in Node.js v12.0.0. These low-level APIs were replaced by `AsyncResource.runInAsyncScope()`, which provides a safer and more convenient way to run a function within the async context.

The `runInAsyncScope()` method automatically calls the before and after hooks and handles errors properly, reducing the chance of misuse.

## Examples

### Example 1: Basic emitBefore/emitAfter usage

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("MyResource");

resource.emitBefore();
doSomething();
resource.emitAfter();
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("MyResource");

resource.runInAsyncScope(doSomething);
```

### Example 2: With function arguments

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("DBQuery");

resource.emitBefore();
processResult(data);
resource.emitAfter();
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("DBQuery");

resource.runInAsyncScope(processResult, null, data);
```

### Example 3: With this context

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

class Handler {
  constructor() {
    this.resource = new AsyncResource("Handler");
  }

  handle() {
    this.resource.emitBefore();
    this.process();
    this.resource.emitAfter();
  }

  process() {
    console.log("Processing");
  }
}
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

class Handler {
  constructor() {
    this.resource = new AsyncResource("Handler");
  }

  handle() {
    this.resource.runInAsyncScope(this.process, this);
  }

  process() {
    console.log("Processing");
  }
}
```

### Example 4: ESM import

**Before:**

```js
import { AsyncResource } from "node:async_hooks";

const resource = new AsyncResource("Task");

resource.emitBefore();
await executeTask();
resource.emitAfter();
```

**After:**

```js
import { AsyncResource } from "node:async_hooks";

const resource = new AsyncResource("Task");

await resource.runInAsyncScope(executeTask);
```

### Example 5: With error handling

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("Operation");

resource.emitBefore();
try {
  riskyOperation();
} finally {
  resource.emitAfter();
}
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("Operation");

// runInAsyncScope handles cleanup automatically
resource.runInAsyncScope(riskyOperation);
```

### Example 6: Callback pattern

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

function asyncOperation(callback) {
  const resource = new AsyncResource("AsyncOp");
  
  setTimeout(() => {
    resource.emitBefore();
    callback();
    resource.emitAfter();
  }, 100);
}
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

function asyncOperation(callback) {
  const resource = new AsyncResource("AsyncOp");
  
  setTimeout(() => {
    resource.runInAsyncScope(callback);
  }, 100);
}
```

### Example 7: Multiple operations

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("MultiOp");

resource.emitBefore();
operation1();
resource.emitAfter();

resource.emitBefore();
operation2();
resource.emitAfter();
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("MultiOp");

resource.runInAsyncScope(operation1);
resource.runInAsyncScope(operation2);
```

### Example 8: With return value

**Before:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("Compute");

resource.emitBefore();
const result = compute(x, y);
resource.emitAfter();
return result;
```

**After:**

```js
const { AsyncResource } = require("node:async_hooks");

const resource = new AsyncResource("Compute");

return resource.runInAsyncScope(compute, null, x, y);
```

## Refs

- [DEP0098: AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs](https://nodejs.org/api/deprecations.html#dep0098)
- [AsyncResource.emitBefore/emitAfter removal node#26530](https://github.com/nodejs/node/pull/26530)
