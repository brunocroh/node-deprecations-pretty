# Server.listenFD

## Description

Since `Server.listenFD()` is deprecated (DEP0021) and has reached End-of-Life status in Node.js v12.0.0, we should provide a codemod to replace it.

- The codemod should replace `Server.listenFD(fd)` with `Server.listen({ fd })`.
- The codemod should handle both `net.Server` and `http.Server` instances.
- The codemod should preserve callback functions.
- The codemod should work with both CommonJS and ESM imports.

## Additional Information

Note that `Server.listenFD()` was removed in Node.js v12.0.0. This method was deprecated because `Server.listen()` with an options object provides a more consistent and flexible API.

The replacement syntax uses `Server.listen({ fd: <number> })` which is consistent with other listen options like port, host, and path.

## Examples

### Example 1: Basic HTTP server

**Before:**

```js
const http = require("node:http");

const server = http.createServer();
server.listenFD(3);
```

**After:**

```js
const http = require("node:http");

const server = http.createServer();
server.listen({ fd: 3 });
```

### Example 2: With callback

**Before:**

```js
const http = require("node:http");

const server = http.createServer();
server.listenFD(3, () => {
  console.log("Server listening");
});
```

**After:**

```js
const http = require("node:http");

const server = http.createServer();
server.listen({ fd: 3 }, () => {
  console.log("Server listening");
});
```

### Example 3: Net server

**Before:**

```js
const net = require("node:net");

const server = net.createServer();
server.listenFD(4);
```

**After:**

```js
const net = require("node:net");

const server = net.createServer();
server.listen({ fd: 4 });
```

### Example 4: ESM import

**Before:**

```js
import http from "node:http";

const server = http.createServer();
server.listenFD(3);
```

**After:**

```js
import http from "node:http";

const server = http.createServer();
server.listen({ fd: 3 });
```

### Example 5: With file descriptor variable

**Before:**

```js
const http = require("node:http");

const fd = parseInt(process.env.LISTEN_FD);
const server = http.createServer();
server.listenFD(fd);
```

**After:**

```js
const http = require("node:http");

const fd = parseInt(process.env.LISTEN_FD);
const server = http.createServer();
server.listen({ fd });
```

### Example 6: HTTPS server

**Before:**

```js
const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options);
server.listenFD(443);
```

**After:**

```js
const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options);
server.listen({ fd: 443 });
```

### Example 7: With additional options

**Before:**

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("ok");
});

server.listenFD(3, () => {
  console.log("Listening on fd 3");
});
```

**After:**

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("ok");
});

server.listen({ fd: 3 }, () => {
  console.log("Listening on fd 3");
});
```

### Example 8: Systemd socket activation

**Before:**

```js
const http = require("node:http");

// Systemd passes fd 3 for socket activation
const server = http.createServer();
if (process.env.LISTEN_FDS) {
  server.listenFD(3);
} else {
  server.listen(8080);
}
```

**After:**

```js
const http = require("node:http");

// Systemd passes fd 3 for socket activation
const server = http.createServer();
if (process.env.LISTEN_FDS) {
  server.listen({ fd: 3 });
} else {
  server.listen(8080);
}
```

## Refs

- [DEP0021: `Server.listenFD`](https://nodejs.org/api/deprecations.html#dep0021)
- [Server.listenFD removal node#27127](https://github.com/nodejs/node/pull/27127)
