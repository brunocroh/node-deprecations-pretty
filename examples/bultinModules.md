## Description

Since `repl.builtinModules` is deprecated in Node.js v24.2.0, we should provide a codemod to replace it.

- The codemod should replace all instances of `repl.builtinModules` with `module.builtinModules`.
- The codemod should also replace `const repl = require('node:repl');` with `const module = require('node:module');` (also ESM import statement) if it exists in the file. And if repl is used for something else, don't replace it.
- if the `node:repl` import is destructured, it should be replaced with `node:module` destructured import. And it's should not replace the whole import if there are other imports from `node:repl` that are not `builtinModules`.

## Additional Information

Note that `repl.builtinModules` is deprecated in favor of `module.builtinModules`. But `module.builtinModules` have more api listed than `repl.builtinModules`, so we need to document that so if the user is using `repl.builtinModules` to get the list of builtin modules, they should be aware that the list will be different.

## Examples

### Case 1:

**Before:**

```js
const { builtinModules } = require("node:repl");

console.log(builtinModules);
```

**After:**

```js
const { builtinModules } = require("node:module");

console.log(builtinModules);
```

### Case 2:

**Before:**

```js
const repl = require("node:repl");

console.log(repl.builtinModules);
```

**After:**

```js
const module = require("node:module");

console.log(module.builtinModules);
```

### Case 3:

**Before:**

```js
const { builtinModules, foo } = require("node:repl");

console.log(builtinModules);

foo(); // does something else
```

**After:**

```js
const { foo } = require("node:repl");
const { builtinModules } = require("node:module");

console.log(builtinModules);

foo(); // does something else
```

## REFS

- [DEP0191: `repl.builtinModules`](https://nodejs.org/docs/latest-v24.x/api/deprecations.html#dep0191-replbuiltinmodules)
