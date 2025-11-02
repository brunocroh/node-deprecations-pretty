# http, https, and tls support for invalid URLs

## Description

Since support for invalid URLs in `http`, `https`, and `tls` modules is deprecated (DEP0109) and has reached End-of-Life status in Node.js v16.0.0, we should provide a codemod to help identify and fix invalid URLs.

- The codemod should detect URL strings passed to `http.request()`, `https.request()`, `http.get()`, and `https.get()` methods.
- The codemod should validate URLs and flag invalid ones that would have been accepted in earlier versions.
- The codemod should suggest using the `URL` constructor to properly parse and validate URLs.
- The codemod should handle both string URLs and URL objects.
- The codemod should work with CommonJS and ESM imports.

## Additional Information

Note that support for invalid URLs was removed in Node.js v16.0.0. Prior to this, the `http`, `https`, and `tls` modules would accept and attempt to use malformed URLs, which could lead to unexpected behavior or security issues. Node.js now requires URLs to be properly formatted according to WHATWG URL standards.

Invalid URLs include those with:
- Invalid characters in the hostname
- Missing or malformed protocol
- Improperly formatted IPv6 addresses
- Invalid port numbers

Developers should use the `URL` constructor to parse and validate URLs before passing them to HTTP/HTTPS requests.

## Examples

### Example 1: Basic http request with URL validation

**Before:**

```js
const http = require("node:http");

// This might contain an invalid URL
http.request("http://example.com:invalid/path", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
const http = require("node:http");

// Validate and parse URL first
const url = new URL("http://example.com:80/path");
http.request(url, (res) => {
  console.log(res.statusCode);
});
```

### Example 2: Using URL object for https

**Before:**

```js
const https = require("node:https");

https.get("https://example..com/api", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
const https = require("node:https");

// URL constructor will throw for invalid URLs
const url = new URL("https://example.com/api");
https.get(url, (res) => {
  console.log(res.statusCode);
});
```

### Example 3: ESM import with URL validation

**Before:**

```js
import http from "node:http";

const options = {
  hostname: "invalid..hostname",
  port: 80,
  path: "/api"
};

http.request(options, (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
import http from "node:http";

// Construct a valid URL
const url = new URL("http://valid-hostname/api");

http.request(url, (res) => {
  console.log(res.statusCode);
});
```

### Example 4: Handling user input URLs

**Before:**

```js
const https = require("node:https");

function fetchUrl(userUrl) {
  return https.get(userUrl, (res) => {
    // Process response
  });
}
```

**After:**

```js
const https = require("node:https");

function fetchUrl(userUrl) {
  try {
    const url = new URL(userUrl);
    return https.get(url, (res) => {
      // Process response
    });
  } catch (err) {
    throw new Error(`Invalid URL: ${userUrl}`);
  }
}
```

### Example 5: TLS with invalid hostname

**Before:**

```js
const tls = require("node:tls");

tls.connect(443, "invalid_hostname", () => {
  console.log("connected");
});
```

**After:**

```js
const tls = require("node:tls");

// Validate hostname format
const hostname = "valid-hostname.com";
const url = new URL(`https://${hostname}`);

tls.connect(443, url.hostname, () => {
  console.log("connected");
});
```

### Example 6: Request with options object

**Before:**

```js
const http = require("node:http");

const options = {
  host: "example..com",
  port: 8080,
  path: "/api/data"
};

http.request(options, (res) => {
  console.log(res.statusCode);
}).end();
```

**After:**

```js
const http = require("node:http");

// Build and validate URL first
const url = new URL("http://example.com:8080/api/data");

const options = {
  hostname: url.hostname,
  port: url.port,
  path: url.pathname + url.search
};

http.request(options, (res) => {
  console.log(res.statusCode);
}).end();
```

### Example 7: Dynamic URL construction

**Before:**

```js
const https = require("node:https");

function makeRequest(host, path) {
  const url = `https://${host}${path}`;
  return https.get(url);
}

makeRequest("example..com", "/api");
```

**After:**

```js
const https = require("node:https");

function makeRequest(host, path) {
  // URL constructor validates the hostname
  const url = new URL(`https://${host}${path}`);
  return https.get(url);
}

makeRequest("example.com", "/api");
```

### Example 8: IPv6 address handling

**Before:**

```js
const http = require("node:http");

// Invalid IPv6 format
http.get("http://[::1:invalid]/", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
const http = require("node:http");

// Proper IPv6 format
const url = new URL("http://[::1]/");
http.get(url, (res) => {
  console.log(res.statusCode);
});
```

### Example 9: Handling port validation

**Before:**

```js
const https = require("node:https");

// Invalid port number
https.get("https://example.com:99999/api", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
const https = require("node:https");

// URL constructor will throw for invalid ports
try {
  const url = new URL("https://example.com:443/api");
  https.get(url, (res) => {
    console.log(res.statusCode);
  });
} catch (err) {
  console.error("Invalid URL:", err.message);
}
```

### Example 10: Promise-based request with validation

**Before:**

```js
const https = require("node:https");

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      resolve(res);
    }).on("error", reject);
  });
}

fetchData("https://example..com/api");
```

**After:**

```js
const https = require("node:https");

function fetchData(urlString) {
  return new Promise((resolve, reject) => {
    try {
      const url = new URL(urlString);
      https.get(url, (res) => {
        resolve(res);
      }).on("error", reject);
    } catch (err) {
      reject(new Error(`Invalid URL: ${err.message}`));
    }
  });
}

fetchData("https://example.com/api");
```

## Refs

- [DEP0109: `http`, `https`, and `tls` support for invalid URLs](https://nodejs.org/api/deprecations.html#dep0109)
- [Invalid URLs support removal node#26270](https://github.com/nodejs/node/pull/26270)
