## Description

Since instantiating `node:zlib` classes without `new` is deprecated (DEP0184) and has reached Runtime status, we should provide a codemod to replace them.

- The codemod should add the `new` qualifier to all zlib class instantiations that are missing it.
- The codemod should handle all zlib classes: `Deflate`, `DeflateRaw`, `Gunzip`, `Gzip`, `Inflate`, `InflateRaw`, `Unzip`, `BrotliCompress`, `BrotliDecompress`, `ZstdCompress`, `ZstdDecompress`, and `Zlib`.
- The codemod should work with both CommonJS and ESM import patterns.
- The codemod should handle destructured imports, namespace imports, and direct property access.

## Additional Information

Note that instantiating classes without the `new` qualifier exported by the `node:zlib` module was deprecated in Node.js v24.0.0 and became a runtime deprecation. This pattern was deprecated because it goes against JavaScript best practices and class instantiation conventions. Using `new` makes the code more explicit and follows standard JavaScript patterns.

All zlib classes should be instantiated with the `new` keyword to create proper instances and avoid potential issues with `this` context and prototype chain.

## Examples

### Case 1: Direct class instantiation with namespace import

**Before:**

```js
const zlib = require('node:zlib');

const deflate = zlib.Deflate();
const gzip = zlib.Gzip();
const gunzip = zlib.Gunzip();
```

**After:**

```js
const zlib = require('node:zlib');

const deflate = new zlib.Deflate();
const gzip = new zlib.Gzip();
const gunzip = new zlib.Gunzip();
```

### Case 2: ESM namespace import

**Before:**

```js
import * as zlib from 'node:zlib';

const deflate = zlib.Deflate();
const inflate = zlib.Inflate();
const brotli = zlib.BrotliCompress();
```

**After:**

```js
import * as zlib from 'node:zlib';

const deflate = new zlib.Deflate();
const inflate = new zlib.Inflate();
const brotli = new zlib.BrotliCompress();
```

### Case 3: Destructured import

**Before:**

```js
const { Deflate, Gzip, Gunzip, Inflate } = require('node:zlib');

const deflate = Deflate();
const gzip = Gzip();
const gunzip = Gunzip();
const inflate = Inflate();
```

**After:**

```js
const { Deflate, Gzip, Gunzip, Inflate } = require('node:zlib');

const deflate = new Deflate();
const gzip = new Gzip();
const gunzip = new Gunzip();
const inflate = new Inflate();
```

### Case 4: ESM destructured import

**Before:**

```js
import { BrotliCompress, BrotliDecompress, ZstdCompress } from 'node:zlib';

const brotliComp = BrotliCompress();
const brotliDecomp = BrotliDecompress();
const zstdComp = ZstdCompress();
```

**After:**

```js
import { BrotliCompress, BrotliDecompress, ZstdCompress } from 'node:zlib';

const brotliComp = new BrotliCompress();
const brotliDecomp = new BrotliDecompress();
const zstdComp = new ZstdCompress();
```

### Case 5: With options parameter

**Before:**

```js
const zlib = require('node:zlib');

const gzip = zlib.Gzip({ level: 9 });
const deflate = zlib.Deflate({ windowBits: 15 });
```

**After:**

```js
const zlib = require('node:zlib');

const gzip = new zlib.Gzip({ level: 9 });
const deflate = new zlib.Deflate({ windowBits: 15 });
```

### Case 6: In function calls and expressions

**Before:**

```js
import { DeflateRaw, InflateRaw } from 'node:zlib';

function createCompressor() {
  return DeflateRaw({ level: 6 });
}

const stream = InflateRaw().pipe(process.stdout);
```

**After:**

```js
import { DeflateRaw, InflateRaw } from 'node:zlib';

function createCompressor() {
  return new DeflateRaw({ level: 6 });
}

const stream = new InflateRaw().pipe(process.stdout);
```

### Case 7: All zlib classes

**Before:**

```js
const zlib = require('node:zlib');

const deflate = zlib.Deflate();
const deflateRaw = zlib.DeflateRaw();
const gzip = zlib.Gzip();
const gunzip = zlib.Gunzip();
const inflate = zlib.Inflate();
const inflateRaw = zlib.InflateRaw();
const unzip = zlib.Unzip();
const brotliComp = zlib.BrotliCompress();
const brotliDecomp = zlib.BrotliDecompress();
```

**After:**

```js
const zlib = require('node:zlib');

const deflate = new zlib.Deflate();
const deflateRaw = new zlib.DeflateRaw();
const gzip = new zlib.Gzip();
const gunzip = new zlib.Gunzip();
const inflate = new zlib.Inflate();
const inflateRaw = new zlib.InflateRaw();
const unzip = new zlib.Unzip();
const brotliComp = new zlib.BrotliCompress();
const brotliDecomp = new zlib.BrotliDecompress();
```

### Case 8: Mixed with factory functions (should not change)

**Before:**

```js
const zlib = require('node:zlib');

// These should NOT be changed (factory functions)
const gzipStream = zlib.createGzip();
const deflateStream = zlib.createDeflate();

// These should be changed (class constructors)
const gzipClass = zlib.Gzip();
const deflateClass = zlib.Deflate();
```

**After:**

```js
const zlib = require('node:zlib');

// These should NOT be changed (factory functions)
const gzipStream = zlib.createGzip();
const deflateStream = zlib.createDeflate();

// These should be changed (class constructors)
const gzipClass = new zlib.Gzip();
const deflateClass = new zlib.Deflate();
```

### Case 9: Experimental Zstd classes

**Before:**

```js
import { ZstdCompress, ZstdDecompress } from 'node:zlib';

const compressor = ZstdCompress({ level: 10 });
const decompressor = ZstdDecompress();
```

**After:**

```js
import { ZstdCompress, ZstdDecompress } from 'node:zlib';

const compressor = new ZstdCompress({ level: 10 });
const decompressor = new ZstdDecompress();
```

## Refs

- [DEP0184: Instantiating `node:zlib` classes without `new`](https://nodejs.org/api/deprecations.html#dep0184-instantiating-nodezlib-classes-without-new)
- [zlib: deprecate classes usage without `new` node#55718](https://github.com/nodejs/node/pull/55718)
