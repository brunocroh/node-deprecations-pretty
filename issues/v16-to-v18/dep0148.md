# Folder mappings in "exports" (trailing "/")

## Description

Since using a trailing `"/"` to define subpath folder mappings in package.json `"exports"` or `"imports"` fields is deprecated (DEP0148) and has reached End-of-Life status in Node.js v17.0.0, we should provide a codemod to replace them.

- The codemod should convert trailing slash folder mappings to subpath patterns.
- The codemod should replace `"./folder/"` exports with `"./folder/*"` patterns.
- The codemod should update both `"exports"` and `"imports"` fields in package.json.
- The codemod should preserve other export configurations.

## Additional Information

Note that in Node.js v17.0.0, using a trailing `"/"` to define subpath folder mappings is no longer supported. This syntax was deprecated because it was ambiguous and could lead to unexpected behavior. Instead of folder mappings like `"./folder/"`, developers should use subpath patterns like `"./folder/*"`.

Subpath patterns provide explicit control over how subpaths are resolved and are more flexible for defining package exports and imports.

## Examples

### Example 1: Basic folder export mapping

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    "./utils/": "./src/utils/"
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    "./utils/*": "./src/utils/*"
  }
}
```

### Example 2: Multiple folder mappings

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    "./lib/": "./dist/lib/",
    "./components/": "./dist/components/"
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    "./lib/*": "./dist/lib/*",
    "./components/*": "./dist/components/*"
  }
}
```

### Example 3: Mixed exports with conditions

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    ".": "./index.js",
    "./features/": {
      "import": "./esm/features/",
      "require": "./cjs/features/"
    }
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    ".": "./index.js",
    "./features/*": {
      "import": "./esm/features/*",
      "require": "./cjs/features/*"
    }
  }
}
```

### Example 4: Imports field with folder mapping

**Before:**

```json
{
  "name": "my-package",
  "imports": {
    "#internal/": "./src/internal/"
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "imports": {
    "#internal/*": "./src/internal/*"
  }
}
```

### Example 5: Complex exports with multiple targets

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    "./": "./",
    "./lib/": "./lib/",
    "./package.json": "./package.json"
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    "./*": "./*",
    "./lib/*": "./lib/*",
    "./package.json": "./package.json"
  }
}
```

### Example 6: Nested folder mappings

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    "./dist/": {
      "node": "./dist/node/",
      "default": "./dist/browser/"
    }
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    "./dist/*": {
      "node": "./dist/node/*",
      "default": "./dist/browser/*"
    }
  }
}
```

### Example 7: Both exports and imports

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    "./public/": "./build/public/"
  },
  "imports": {
    "#lib/": "./lib/",
    "#utils/": "./src/utils/"
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    "./public/*": "./build/public/*"
  },
  "imports": {
    "#lib/*": "./lib/*",
    "#utils/*": "./src/utils/*"
  }
}
```

### Example 8: Root folder export

**Before:**

```json
{
  "name": "my-package",
  "exports": {
    "./": "./"
  }
}
```

**After:**

```json
{
  "name": "my-package",
  "exports": {
    "./*": "./*"
  }
}
```

## Important points

- The trailing slash syntax was used to map entire folders
- Subpath patterns with `*` wildcards are the modern replacement
- The `*` matches any string and can be used to preserve the subpath structure
- This change applies to both `"exports"` and `"imports"` fields in package.json
- The migration is straightforward: replace trailing `/` with `/*`

## Refs

- [DEP0148: Folder mappings in `"exports"` (trailing `"/"`)](#https://nodejs.org/api/deprecations.html#dep0148)
- [Remove folder mapping support in exports field node#40121](https://github.com/nodejs/node/pull/40121)
