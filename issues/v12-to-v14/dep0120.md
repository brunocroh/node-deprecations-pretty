# Windows Performance Counter support

## Description

Since Windows Performance Counter support is deprecated (DEP0120) and has reached End-of-Life status in Node.js v12.0.0, we should provide guidance for migration.

- The codemod should detect usage of `process.binding('performance')` on Windows.
- The codemod should flag Windows-specific performance counter access.
- The codemod should suggest using `perf_hooks` module or other alternatives.
- The codemod should identify platform-specific performance monitoring code.

## Additional Information

Note that Windows Performance Counter support was removed in Node.js v12.0.0. This was a Windows-specific feature accessed through `process.binding()` that was never part of the public API.

Applications should use the `perf_hooks` module for cross-platform performance monitoring, or Windows-specific npm packages if Windows Performance Counters are specifically needed.

## Examples

### Example 1: Performance binding

**Before:**

```js
const { Performance } = process.binding("performance");
```

**After:**

```js
// Use the public perf_hooks module
const { performance, PerformanceObserver } = require("node:perf_hooks");
```

### Example 2: Measuring performance

**Before:**

```js
if (process.platform === "win32") {
  const perf = process.binding("performance");
  const counters = perf.getCounters();
}
```

**After:**

```js
const { performance } = require("node:perf_hooks");

// Cross-platform performance measurement
const start = performance.now();
// ... operation ...
const end = performance.now();
console.log(`Duration: ${end - start}ms`);
```

### Example 3: Performance Observer

**Before:**

```js
const perf = process.binding("performance");
perf.setupObservers();
```

**After:**

```js
const { PerformanceObserver, performance } = require("node:perf_hooks");

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries());
});
obs.observe({ entryTypes: ["measure"] });
```

### Example 4: Marks and measures

**Before:**

```js
const perf = process.binding("performance");
perf.mark("start");
// ... operation ...
perf.mark("end");
```

**After:**

```js
const { performance } = require("node:perf_hooks");

performance.mark("start");
// ... operation ...
performance.mark("end");
performance.measure("operation", "start", "end");
```

### Example 5: ESM import

**Before:**

```js
// No ESM equivalent for process.binding
const perf = process.binding("performance");
```

**After:**

```js
import { performance, PerformanceObserver } from "node:perf_hooks";

// Use standard performance APIs
```

### Example 6: Windows-specific monitoring

**Before:**

```js
if (process.platform === "win32") {
  const counters = process.binding("performance");
  console.log(counters.getMemoryUsage());
}
```

**After:**

```js
// Use cross-platform alternatives
const memUsage = process.memoryUsage();
console.log(memUsage);

// Or install a Windows-specific package from npm
// npm install windows-perfmon
```

## Refs

- [DEP0120: Windows Performance Counter support](https://nodejs.org/api/deprecations.html#dep0120)
- [Windows Performance Counter removal node#27053](https://github.com/nodejs/node/pull/27053)
