## Description

Since `util.types.isNativeError()` is deprecated in Node.js v24.2.0, we should provide a codemod to replace it.

- The codemod should remove import if it's only thing imported or remove the member if not anymore used.
- The codemod should modify any call expression of this api.

## Examples

**Before:**

```js
import { types } from "node:util";

if (types.isNativeError(err)) {
  // handle the error
}
```

**After:**

```js
if (Error.isError(err)) {
  // handle the error
}
```

## REFS

- [DEP0197: `util.types.isNativeError()`](https://nodejs.org/docs/latest/api/deprecations.html#dep0197-utiltypesisnativeerror)
