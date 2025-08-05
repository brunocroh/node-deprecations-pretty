## Description

We need to brainstorm ideas for the `mocha-to-node-test-runner` codemod. It's will support converting Mocha v8 to node v22, v24.

## Important points

- It's must not touch to the imports **except** `mocha` imports and `node:test` imports.
- It's should not convert the CB style from `function()` to arrow functions `() => {}` or vice versa.
- CJS/ESM should both be supported.

## Examples

### Example 1: Basic Test Case

**Before:**

```js
const assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      const arr = [1, 2, 3];
      assert.strictEqual(arr.indexOf(4), -1);
    });
  });
});
```

**After:**

```js
const assert = require("assert");
const { describe, it } = require("node:test");
describe("Array", function () {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", function () {
      const arr = [1, 2, 3];
      assert.strictEqual(arr.indexOf(4), -1);
    });
  });
});
```

### Example 2: Async Test Case

**Before:**

```js
const assert = require("assert");
describe("Async Test", function () {
  it("should complete after a delay", async function (done) {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(42), 100),
    );
    assert.strictEqual(result, 42);
  });
});
```

**After:**

```js
const assert = require("assert");
const { describe, it } = require("node:test");
describe("Async Test", () => {
  it("should complete after a delay", async () => {
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(42), 100),
    );
    assert.strictEqual(result, 42);
  });
});
```

### Example 3: Hooks

**Before:**

```js
const assert = require("assert");
const fs = require("fs");
describe("File System", function () {
  before(function () {
    fs.writeFileSync("test.txt", "Hello, World!");
  });

  after(function () {
    fs.unlinkSync("test.txt");
  });

  it("should read the file", function () {
    const content = fs.readFileSync("test.txt", "utf8");
    assert.strictEqual(content, "Hello, World!");
  });
});
```

**After:**

```js
const assert = require("assert");
const fs = require("fs");
const { describe, before, after, it } = require("node:test");
describe("File System", () => {
  before(() => {
    fs.writeFileSync("test.txt", "Hello, World!");
  });

  after(() => {
    fs.unlinkSync("test.txt");
  });

  it("should read the file", () => {
    const content = fs.readFileSync("test.txt", "utf8");
    assert.strictEqual(content, "Hello, World!");
  });
});
```

### Example 4: `done` Callback

**Before:**

```js
const assert = require("assert");
describe("Callback Test", function () {
  it("should call done when complete", function (done) {
    setTimeout(() => {
      assert.strictEqual(1 + 1, 2);
      done();
    }, 100);
  });
});
```

**After:**

```js
const assert = require("assert");
const { describe, it } = require("node:test");
describe("Callback Test", () => {
  it("should call done when complete", (t, done) => {
    setTimeout(() => {
      assert.strictEqual(1 + 1, 2);
      done();
    }, 100);
  });
});
```

### Example 5: Skipped Tests

**Before:**

```js
const assert = require("assert");
describe("Skipped Test", function () {
  it.skip("should not run this test", function () {
    assert.strictEqual(1 + 1, 3);
  });
  it("should also be skipped", function () {
    this.skip();
    assert.strictEqual(1 + 1, 3);
  });
});
```

**After:**

```js
const assert = require("assert");
const { describe, it } = require("node:test");
describe("Skipped Test", () => {
  it.skip("should not run this test", () => {
    assert.strictEqual(1 + 1, 3);
  });
  it("should also be skipped", (t) => {
    assert.strictEqual(1 + 1, 3);
    t.skip();
  });
});
```

### Example 6: Dynamic/generated tests

**Before:**

```js
const assert = require("assert");
describe("Dynamic Tests", function () {
  const tests = [1, 2, 3];
  tests.forEach((test) => {
    it(`should handle test ${test}`, function () {
      assert.strictEqual(test % 2, 0);
    });
  });
});
```

**After:**

```js
const assert = require("assert");
const { describe, it } = require("node:test");
describe("Dynamic Tests", () => {
  const tests = [1, 2, 3];
  tests.forEach((test) => {
    it(`should handle test ${test}`, () => {
      assert.strictEqual(test % 2, 0);
    });
  });
});
```

### Example 7: Timeouts handling

This timeout handling work for `describe`, `it` and hooks.

**Before:**

```js
const assert = require("assert");
describe("Timeout Test", function () {
  this.timeout(500);

  it("should complete within 100ms", function (done) {
    this.timeout(100);
    setTimeout(done, 500); // This will fail
  });

  it("should complete within 200ms", function () {
    this.timeout(200);
    setTimeout(done, 100); // This will pass
  });
});
```

**After:**

```js
const assert = require("assert");
const { describe, it } = require("node:test");
describe("Timeout Test", { timeout: 500 }, () => {
  it("should complete within 100ms", { timeout: 100 }, (t, done) => {
    setTimeout(done, 500); // This will fail
  });

  it("should complete within 200ms", { timeout: 200 }, (t, done) => {
    setTimeout(done, 100); // This will pass
  });
});
```

## Caveats

- `node:test` doesn't support the `retry` option that Mocha has, so any tests using that will need to be handled separately.

## REFS

- [Node Test Runner](https://nodejs.org/api/test.html)
- [Mocha](https://mochajs.org/)
