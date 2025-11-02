# Legacy HTTP parser

## Description

Since the legacy HTTP parser is deprecated (DEP0131) and has reached End-of-Life status in Node.js v13.0.0, we should provide guidance for migration.

- The codemod should detect usage of the `--http-parser=legacy` flag.
- The codemod should identify code that may rely on legacy parser behavior.
- The codemod should suggest migration to the llhttp parser (default since Node.js v12).
- The codemod should flag potential compatibility issues with strict header parsing.

## Additional Information

Note that the legacy HTTP parser was removed in Node.js v13.0.0. Node.js switched from the old http-parser to llhttp as the default HTTP parser in v12.0.0. The legacy parser was kept as an option via the `--http-parser=legacy` flag, but this option was removed in v13.0.0.

The llhttp parser is stricter and more compliant with HTTP specifications. Code that worked with the legacy parser might fail with llhttp if it relied on lenient parsing of malformed HTTP messages or headers.

## Examples

### Example 1: Removing command-line flag

**Before:**

```bash
node --http-parser=legacy app.js
```

**After:**

```bash
node app.js
```

### Example 2: Package.json scripts

**Before:**

```json
{
  "scripts": {
    "start": "node --http-parser=legacy server.js"
  }
}
```

**After:**

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

### Example 3: HTTP header validation

**Before:**

```js
const http = require("node:http");

// Legacy parser was lenient with header values
http.createServer((req, res) => {
  res.setHeader("X-Custom-Header", "value\r\nwith\r\nnewlines");
  res.end("ok");
});
```

**After:**

```js
const http = require("node:http");

// llhttp requires properly formatted headers
http.createServer((req, res) => {
  res.setHeader("X-Custom-Header", "value with spaces");
  res.end("ok");
});
```

### Example 4: Handling malformed requests

**Before:**

```js
const http = require("node:http");

// Legacy parser was more forgiving
http.createServer((req, res) => {
  // May have accepted requests with malformed headers
  res.end("ok");
}).listen(3000);
```

**After:**

```js
const http = require("node:http");

// llhttp is stricter - handle parsing errors
http.createServer((req, res) => {
  res.end("ok");
}).on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
}).listen(3000);
```

### Example 5: Content-Length validation

**Before:**

```js
const http = require("node:http");

// Legacy parser was lenient with Content-Length
http.request({
  hostname: "example.com",
  headers: {
    "Content-Length": "10 "  // Trailing space
  }
});
```

**After:**

```js
const http = require("node:http");

// llhttp requires strict Content-Length format
http.request({
  hostname: "example.com",
  headers: {
    "Content-Length": "10"  // No trailing whitespace
  }
});
```

### Example 6: Environment variable configuration

**Before:**

```js
// Setting via environment
process.env.NODE_OPTIONS = "--http-parser=legacy";
require("./server");
```

**After:**

```js
// Remove legacy parser option
// process.env.NODE_OPTIONS is no longer needed for parser selection
require("./server");
```

## Refs

- [DEP0131: Legacy HTTP parser](https://nodejs.org/api/deprecations.html#dep0131)
- [Legacy HTTP parser removal node#30674](https://github.com/nodejs/node/pull/30674)
