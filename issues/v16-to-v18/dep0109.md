# http, https, and tls support for invalid URLs

## Description

Since support for invalid URLs in `http`, `https`, and `tls` modules is deprecated (DEP0109) and has reached End-of-Life status in Node.js v16.0.0, we should provide a codemod to fix them.

- The codemod should detect invalid URLs passed to `http.request()`, `http.get()`, `https.request()`, `https.get()`, and `tls.checkServerIdentity()`.
- The codemod should validate and correct URL formats to comply with WHATWG URL standards.
- The codemod should ensure hostnames are properly formatted.
- The codemod should add comments where manual URL correction is needed.

## Additional Information

Note that in Node.js v16.0.0, passing invalid URLs to http, https, and tls APIs now throws an error. Previously, some invalid URLs were accepted because these APIs used the legacy `url.parse()` which was more lenient. The APIs now use the WHATWG URL parser that requires strictly valid URLs.

Common invalid URL patterns that were previously accepted include:
- URLs with invalid characters in the hostname
- URLs with malformed protocol definitions
- URLs with improper port specifications
- URLs with invalid path characters

Developers should ensure all URLs conform to the WHATWG URL Standard.

## Examples

### Example 1: URL with spaces in hostname

**Before:**

```js
const http = require("node:http");

http.get("http://my server.com/path", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
const http = require("node:http");

// Spaces in hostname are invalid - encode or fix the URL
http.get("http://my-server.com/path", (res) => {
  console.log(res.statusCode);
});
```

### Example 2: URL with invalid port

**Before:**

```js
const https = require("node:https");

https.request("https://example.com:abc/path", (res) => {
  // handle response
});
```

**After:**

```js
const https = require("node:https");

// Port must be numeric
https.request("https://example.com:443/path", (res) => {
  // handle response
});
```

### Example 3: Malformed protocol

**Before:**

```js
const http = require("node:http");

http.get("htp://example.com", callback);
```

**After:**

```js
const http = require("node:http");

// Protocol must be valid (http: or https:)
http.get("http://example.com", callback);
```

### Example 4: Invalid characters in hostname

**Before:**

```js
const https = require("node:https");

https.get("https://exam ple@com/path", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
const https = require("node:https");

// Fix invalid characters in hostname
https.get("https://example.com/path", (res) => {
  console.log(res.statusCode);
});
```

### Example 5: tls.checkServerIdentity with invalid hostname

**Before:**

```js
const tls = require("node:tls");

const cert = getCertificate();
tls.checkServerIdentity("invalid hostname", cert);
```

**After:**

```js
const tls = require("node:tls");

const cert = getCertificate();
// Hostname must be valid
tls.checkServerIdentity("valid-hostname.com", cert);
```

### Example 6: Using URL object for validation

**Before:**

```js
const https = require("node:https");

// Potentially invalid URL string
const urlString = getUserProvidedURL();
https.get(urlString, callback);
```

**After:**

```js
const https = require("node:https");

// Validate URL using WHATWG URL API
const urlString = getUserProvidedURL();
try {
  const url = new URL(urlString);
  https.get(url, callback);
} catch (err) {
  console.error("Invalid URL:", err.message);
}
```

### Example 7: http.request with options object

**Before:**

```js
const http = require("node:http");

http.request({
  hostname: "my invalid host.com",
  port: 80,
  path: "/api"
}, callback);
```

**After:**

```js
const http = require("node:http");

http.request({
  hostname: "my-invalid-host.com", // Fixed hostname
  port: 80,
  path: "/api"
}, callback);
```

### Example 8: Encoding URL components

**Before:**

```js
const https = require("node:https");

const path = "/search?q=hello world";
https.get(`https://api.example.com${path}`, callback);
```

**After:**

```js
const https = require("node:https");

// Properly encode URL components
const query = encodeURIComponent("hello world");
const path = `/search?q=${query}`;
https.get(`https://api.example.com${path}`, callback);
```

### Example 9: Validating with URL constructor

**Before:**

```js
const http = require("node:http");

function makeRequest(urlStr) {
  http.get(urlStr, callback);
}
```

**After:**

```js
const http = require("node:http");

function makeRequest(urlStr) {
  // Validate URL before making request
  try {
    const url = new URL(urlStr);
    http.get(url, callback);
  } catch (err) {
    throw new Error(`Invalid URL: ${urlStr}`);
  }
}
```

### Example 10: ESM with https.get

**Before:**

```js
import https from "node:https";

https.get("https://site with spaces.com", (res) => {
  console.log(res.statusCode);
});
```

**After:**

```js
import https from "node:https";

// Fix spaces in hostname
https.get("https://site-with-spaces.com", (res) => {
  console.log(res.statusCode);
});
```

## Important points

- All URLs must conform to the WHATWG URL Standard
- Use the `URL` constructor to validate URLs before making requests
- Encode special characters in URL components using `encodeURIComponent()`
- Hostnames cannot contain spaces or invalid characters
- Ports must be valid numbers
- Protocol must be properly formatted (e.g., `http:` or `https:`)

## Caveats

- The codemod cannot automatically fix all invalid URLs as it may not know the intended correct format
- URLs from user input should always be validated
- Some legacy systems may generate URLs that need significant restructuring

## Refs

- [DEP0109: `http`, `https`, and `tls` support for invalid URLs](https://nodejs.org/api/deprecations.html#dep0109)
- [Remove support for invalid URLs node#36853](https://github.com/nodejs/node/pull/36853)
