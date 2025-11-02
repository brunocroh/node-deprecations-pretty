# Changing the value of process.config

## Description

Since changing the value of `process.config` is deprecated (DEP0150) and has reached End-of-Life status in Node.js v19.0.0, we should provide a codemod to address it.

- The codemod should identify attempts to modify `process.config`.
- The codemod should remove or comment out assignments to `process.config` properties.
- The codemod should add comments explaining that `process.config` is now immutable.
- The codemod should preserve read-only access to `process.config`.

## Additional Information

Note that in Node.js v19.0.0, `process.config` has been made immutable. The property provides access to Node.js compile-time settings, but it was previously mutable and therefore subject to tampering. This could lead to unexpected behavior and security issues.

Developers can still read from `process.config`, but any attempts to modify its values will now throw an error. If you need to store configuration, use a separate configuration object or module instead.

## Examples

### Example 1: Direct assignment to process.config

**Before:**

```js
process.config.target_defaults = { cflags: [] };
```

**After:**

```js
// process.config is now immutable and cannot be modified
// Store custom configuration in a separate object instead
const customConfig = { target_defaults: { cflags: [] } };
```

### Example 2: Modifying nested property

**Before:**

```js
process.config.variables.node_prefix = "/custom/path";
```

**After:**

```js
// process.config is now immutable and cannot be modified
// Use a separate configuration object for custom values
const myConfig = { variables: { node_prefix: "/custom/path" } };
```

### Example 3: Adding new property

**Before:**

```js
process.config.custom = "value";
```

**After:**

```js
// process.config is now immutable and cannot be modified
// Create a separate configuration object
const appConfig = { custom: "value" };
```

### Example 4: Reading process.config (valid, no change needed)

**Before:**

```js
const nodeVersion = process.config.variables.node_version;
console.log("Node version:", nodeVersion);
```

**After:**

```js
const nodeVersion = process.config.variables.node_version;
console.log("Node version:", nodeVersion);
```

### Example 5: Conditional modification

**Before:**

```js
if (someCondition) {
  process.config.variables.debug = true;
}
```

**After:**

```js
// process.config is now immutable and cannot be modified
// Use a separate debug configuration object
const debugConfig = {};
if (someCondition) {
  debugConfig.debug = true;
}
```

### Example 6: Using Object.assign

**Before:**

```js
Object.assign(process.config, { custom: "settings" });
```

**After:**

```js
// process.config is now immutable and cannot be modified
// Create a new configuration object that includes process.config values
const config = Object.assign({}, process.config, { custom: "settings" });
```

### Example 7: Deleting property

**Before:**

```js
delete process.config.variables.some_property;
```

**After:**

```js
// process.config is now immutable - properties cannot be deleted
// If you need a modified copy, create a new object
const config = { ...process.config };
delete config.variables.some_property;
```

### Example 8: Spread operator with modifications

**Before:**

```js
const config = { ...process.config };
process.config.updated = true;
```

**After:**

```js
// process.config is now immutable and cannot be modified
// Work with the copied object instead
const config = { ...process.config };
config.updated = true;
```

## Refs

- [DEP0150: Changing the value of `process.config`](https://nodejs.org/api/deprecations.html#dep0150)
- [Make process.config immutable node#43627](https://github.com/nodejs/node/pull/43627)
