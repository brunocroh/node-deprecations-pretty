# GLOBAL and root

## Description

Since the `GLOBAL` and `root` aliases for the `global` property are deprecated (DEP0016) and have reached End-of-Life status in Node.js v14.0.0, we should provide a codemod to replace them.

- The codemod should replace all references to `GLOBAL` with `global`.
- The codemod should replace all references to `root` with `global`.
- The codemod should handle property assignments, property access, and usage in expressions.
- The codemod should work in both CommonJS and ESM contexts.
- The codemod should preserve the context and usage patterns.

## Additional Information

Note that `GLOBAL` and `root` were removed in Node.js v14.0.0. These were legacy aliases for the `global` object that were deprecated because they were non-standard and inconsistent with JavaScript specifications. The standard `global` property should be used instead.

In modern JavaScript, developers should use `global` in Node.js or `globalThis` for cross-platform code that works in both Node.js and browsers.

## Examples

### Example 1: Basic GLOBAL usage

**Before:**

```js
GLOBAL.myVariable = "value";
console.log(GLOBAL.myVariable);
```

**After:**

```js
global.myVariable = "value";
console.log(global.myVariable);
```

### Example 2: Basic root usage

**Before:**

```js
root.myFunction = function() {
  return "hello";
};
```

**After:**

```js
global.myFunction = function() {
  return "hello";
};
```

### Example 3: Property access

**Before:**

```js
if (GLOBAL.process) {
  console.log("Running in Node.js");
}
```

**After:**

```js
if (global.process) {
  console.log("Running in Node.js");
}
```

### Example 4: Mixed usage

**Before:**

```js
GLOBAL.config = { debug: true };
root.logger = console.log;

function init() {
  root.logger(GLOBAL.config.debug);
}
```

**After:**

```js
global.config = { debug: true };
global.logger = console.log;

function init() {
  global.logger(global.config.debug);
}
```

### Example 5: In module exports

**Before:**

```js
module.exports = {
  getGlobal: function() {
    return GLOBAL;
  },
  setGlobal: function(key, value) {
    root[key] = value;
  }
};
```

**After:**

```js
module.exports = {
  getGlobal: function() {
    return global;
  },
  setGlobal: function(key, value) {
    global[key] = value;
  }
};
```

### Example 6: Checking existence

**Before:**

```js
if (typeof GLOBAL !== "undefined") {
  GLOBAL.myApp = { version: "1.0.0" };
}

if (typeof root !== "undefined") {
  root.myLib = {};
}
```

**After:**

```js
if (typeof global !== "undefined") {
  global.myApp = { version: "1.0.0" };
}

if (typeof global !== "undefined") {
  global.myLib = {};
}
```

### Example 7: ESM context

**Before:**

```js
GLOBAL.sharedData = new Map();

export function getData(key) {
  return GLOBAL.sharedData.get(key);
}

export function setData(key, value) {
  root.sharedData.set(key, value);
}
```

**After:**

```js
global.sharedData = new Map();

export function getData(key) {
  return global.sharedData.get(key);
}

export function setData(key, value) {
  global.sharedData.set(key, value);
}
```

### Example 8: In object literals

**Before:**

```js
const config = {
  environment: GLOBAL.process.env.NODE_ENV,
  globals: root
};
```

**After:**

```js
const config = {
  environment: global.process.env.NODE_ENV,
  globals: global
};
```

### Example 9: Destructuring

**Before:**

```js
const { console: globalConsole } = GLOBAL;
const { process: nodeProcess } = root;
```

**After:**

```js
const { console: globalConsole } = global;
const { process: nodeProcess } = global;
```

### Example 10: Function parameters and returns

**Before:**

```js
function attachToGlobal(name, value) {
  GLOBAL[name] = value;
  return root[name];
}
```

**After:**

```js
function attachToGlobal(name, value) {
  global[name] = value;
  return global[name];
}
```

## Refs

- [DEP0016: `GLOBAL`/`root`](https://nodejs.org/api/deprecations.html#dep0016)
- [GLOBAL/root removal node#31167](https://github.com/nodejs/node/pull/31167)
