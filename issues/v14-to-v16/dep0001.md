# http.OutgoingMessage.prototype.flush

## Description

Since `OutgoingMessage.prototype.flush()` is deprecated (DEP0001) and has reached End-of-Life status in Node.js v14.0.0, we should provide a codemod to replace it.

- The codemod should replace `OutgoingMessage.prototype.flush()` with `OutgoingMessage.prototype.flushHeaders()`.
- The codemod should handle both direct method calls and chained method calls.
- The codemod should work with both `http` and `https` module imports.
- The codemod should preserve method chaining where applicable.

## Additional Information

Note that `OutgoingMessage.prototype.flush()` was removed in Node.js v14.0.0. The method was deprecated because it was a legacy alias that was never officially documented. Instead of `flush()`, developers should use `flushHeaders()`, which explicitly sends the buffered headers to the client.

The `flushHeaders()` method has the same behavior as `flush()` but has a more descriptive name that clearly indicates what the method does.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.flush();
  res.end("Hello World");
});
```

**After:**

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.flushHeaders();
  res.end("Hello World");
});
```

### Example 2: With https module

**Before:**

```js
const https = require("node:https");

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.flush();
  res.write("data");
});
```

**After:**

```js
const https = require("node:https");

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.flushHeaders();
  res.write("data");
});
```

### Example 3: ESM import

**Before:**

```js
import http from "node:http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.flush();
  res.end(JSON.stringify({ status: "ok" }));
});
```

**After:**

```js
import http from "node:http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.flushHeaders();
  res.end(JSON.stringify({ status: "ok" }));
});
```

### Example 4: In a conditional statement

**Before:**

```js
const http = require("node:http");

http.createServer((req, res) => {
  if (req.headers["x-flush"]) {
    res.flush();
  }
  res.end("response");
});
```

**After:**

```js
const http = require("node:http");

http.createServer((req, res) => {
  if (req.headers["x-flush"]) {
    res.flushHeaders();
  }
  res.end("response");
});
```

### Example 5: With ServerResponse variable

**Before:**

```js
const http = require("node:http");

function handleRequest(response) {
  response.writeHead(200);
  response.flush();
  response.end();
}

http.createServer((req, res) => {
  handleRequest(res);
});
```

**After:**

```js
const http = require("node:http");

function handleRequest(response) {
  response.writeHead(200);
  response.flushHeaders();
  response.end();
}

http.createServer((req, res) => {
  handleRequest(res);
});
```

### Example 6: Multiple flush calls

**Before:**

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.flush();
  res.write("chunk 1");
  res.flush();
  res.end("chunk 2");
});
```

**After:**

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.flushHeaders();
  res.write("chunk 1");
  res.flushHeaders();
  res.end("chunk 2");
});
```

## Refs

- [DEP0001: `http.OutgoingMessage.prototype.flush`](https://nodejs.org/api/deprecations.html#dep0001)
- [http.OutgoingMessage.prototype.flush removal node#31164](https://github.com/nodejs/node/pull/31164)
