# process.exit(code) and process.exitCode coercion to integer

## Description

Since passing non-integer values to `process.exit(code)` and `process.exitCode` is deprecated (DEP0164) and has reached End-of-Life status in Node.js v20.0.0, we should provide a codemod to replace them.

- The codemod should convert non-integer values passed to `process.exit()` to proper integers or remove them.
- The codemod should convert non-integer values assigned to `process.exitCode` to proper integers or `undefined`.
- The codemod should preserve `undefined`, `null`, integer numbers, and integer strings (e.g., `'1'`).
- The codemod should add explicit integer conversion for floating-point numbers or other numeric values.

## Additional Information

Note that in Node.js v20.0.0, passing values other than `undefined`, `null`, integer numbers, and integer strings to `process.exit()` or assigning them to `process.exitCode` now throws an `ERR_INVALID_ARG_TYPE` error.

Exit codes should always be integers between 0-255, where 0 indicates success and non-zero indicates an error. The automatic coercion of non-integer values was removed because it could lead to unexpected behavior.

## Examples

### Example 1: Boolean value in process.exit()

**Before:**

```js
process.exit(true);
```

**After:**

```js
process.exit(1); // true coerced to 1
```

### Example 2: Boolean false in process.exit()

**Before:**

```js
process.exit(false);
```

**After:**

```js
process.exit(0); // false coerced to 0
```

### Example 3: Floating-point number in process.exit()

**Before:**

```js
process.exit(1.5);
```

**After:**

```js
process.exit(Math.floor(1.5)); // Explicitly convert to integer: 1
```

### Example 4: Object assigned to process.exitCode

**Before:**

```js
process.exitCode = { code: 1 };
```

**After:**

```js
process.exitCode = 1; // Extract the integer value
```

### Example 5: String (non-integer) in process.exit()

**Before:**

```js
process.exit("error");
```

**After:**

```js
process.exit(1); // Use appropriate error code
```

### Example 6: Conditional with boolean

**Before:**

```js
const hasError = true;
process.exit(hasError);
```

**After:**

```js
const hasError = true;
process.exit(hasError ? 1 : 0);
```

### Example 7: process.exitCode with boolean

**Before:**

```js
const success = false;
process.exitCode = success;
```

**After:**

```js
const success = false;
process.exitCode = success ? 0 : 1;
```

### Example 8: Valid integer string (no change needed)

**Before:**

```js
process.exit("1");
```

**After:**

```js
process.exit("1"); // Integer strings are still valid
```

### Example 9: Valid values (no change needed)

**Before:**

```js
process.exit(0);
process.exit(1);
process.exit(undefined);
process.exit(null);
process.exitCode = 0;
process.exitCode = undefined;
```

**After:**

```js
process.exit(0);
process.exit(1);
process.exit(undefined);
process.exit(null);
process.exitCode = 0;
process.exitCode = undefined;
```

### Example 10: Arithmetic expression

**Before:**

```js
process.exit(0.5 + 0.7); // Results in 1.2
```

**After:**

```js
process.exit(Math.floor(0.5 + 0.7)); // Explicitly convert to integer: 1
```

## Refs

- [DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer](https://nodejs.org/api/deprecations.html#dep0164)
- [process.exit() and process.exitCode coercion removal node#43716](https://github.com/nodejs/node/pull/43716)
