# tls.parseCertString()

## Description

Since `tls.parseCertString()` is deprecated (DEP0076) and has reached End-of-Life status in Node.js v18.0.0, we should provide a codemod to replace it.

- The codemod should remove usage of `tls.parseCertString()`.
- The codemod should suggest using proper certificate parsing libraries instead.
- The codemod should add comments explaining why the function was removed.
- The codemod should handle both CommonJS and ESM import patterns.

## Additional Information

Note that `tls.parseCertString()` was removed in Node.js v18.0.0. This function was a trivial parsing helper that was made public by mistake. While it was supposed to parse certificate subject and issuer strings, it never handled multi-value Relative Distinguished Names (RDNs) correctly.

Earlier versions of the documentation suggested using `querystring.parse()` as an alternative, but that also does not handle all certificate subjects correctly. Instead, developers should use proper certificate parsing libraries or the `crypto` module's X509Certificate API for working with certificates.

## Examples

### Example 1: Basic usage with CommonJS

**Before:**

```js
const tls = require("node:tls");

const subject = "C=US/ST=California/L=San Francisco/O=Example/CN=example.com";
const parsed = tls.parseCertString(subject);
console.log(parsed);
```

**After:**

```js
// tls.parseCertString() has been removed
// For certificate parsing, use the X509Certificate API from node:crypto
const { X509Certificate } = require("node:crypto");

// If you have a certificate object, use its subject property directly
// const cert = new X509Certificate(certPem);
// const subject = cert.subject;

// For simple string parsing (not recommended for production):
const subject = "C=US/ST=California/L=San Francisco/O=Example/CN=example.com";
const parsed = Object.fromEntries(
  subject.split("/")
    .filter(Boolean)
    .map(pair => pair.split("="))
);
console.log(parsed);
```

### Example 2: Parsing certificate subject

**Before:**

```js
const tls = require("node:tls");

const socket = tls.connect(443, "example.com", () => {
  const cert = socket.getPeerCertificate();
  const subject = tls.parseCertString(cert.subject);
  console.log("Subject:", subject);
});
```

**After:**

```js
const tls = require("node:tls");

const socket = tls.connect(443, "example.com", () => {
  const cert = socket.getPeerCertificate();
  // cert.subject is already a parsed object, no parsing needed
  console.log("Subject:", cert.subject);
});
```

### Example 3: Parsing certificate issuer

**Before:**

```js
const tls = require("node:tls");

const cert = socket.getPeerCertificate();
const issuer = tls.parseCertString(cert.issuer);
```

**After:**

```js
const tls = require("node:tls");

const cert = socket.getPeerCertificate();
// cert.issuer is already a parsed object
const issuer = cert.issuer;
```

### Example 4: ESM import

**Before:**

```js
import tls from "node:tls";

const parsed = tls.parseCertString("CN=example.com/O=Example");
```

**After:**

```js
// tls.parseCertString() has been removed
// Use the X509Certificate API for proper certificate handling
import { X509Certificate } from "node:crypto";

// For certificate objects, access properties directly:
// const cert = new X509Certificate(certPem);
// const commonName = cert.subject;

// Manual parsing (simplified, may not handle all cases):
const certString = "CN=example.com/O=Example";
const parsed = Object.fromEntries(
  certString.split("/")
    .filter(Boolean)
    .map(pair => pair.split("="))
);
```

### Example 5: Using X509Certificate API

**Before:**

```js
const tls = require("node:tls");
const fs = require("node:fs");

const certPem = fs.readFileSync("cert.pem");
const certStr = extractSubjectString(certPem);
const parsed = tls.parseCertString(certStr);
```

**After:**

```js
const { X509Certificate } = require("node:crypto");
const fs = require("node:fs");

const certPem = fs.readFileSync("cert.pem");
const cert = new X509Certificate(certPem);
// Access certificate properties directly
const subject = cert.subject;
const issuer = cert.issuer;
const commonName = cert.subjectAltName;
```

### Example 6: Destructured import

**Before:**

```js
const { parseCertString } = require("node:tls");

const result = parseCertString("C=US/CN=test");
```

**After:**

```js
// parseCertString has been removed
// Use X509Certificate for proper certificate handling
const { X509Certificate } = require("node:crypto");

// For manual parsing (not recommended):
const certString = "C=US/CN=test";
const result = Object.fromEntries(
  certString.split("/")
    .filter(Boolean)
    .map(pair => pair.split("="))
);
```

### Example 7: Extracting specific fields

**Before:**

```js
const tls = require("node:tls");

const certString = "C=US/ST=CA/L=SF/O=Acme/CN=example.com";
const parsed = tls.parseCertString(certString);
const commonName = parsed.CN;
```

**After:**

```js
// tls.parseCertString() has been removed
// If working with actual certificates, use X509Certificate
const { X509Certificate } = require("node:crypto");

// For a PEM certificate:
// const cert = new X509Certificate(certPem);
// const commonName = cert.subject.split('\n')
//   .find(line => line.startsWith('CN='))
//   ?.substring(3);

// For simple string parsing:
const certString = "C=US/ST=CA/L=SF/O=Acme/CN=example.com";
const parsed = Object.fromEntries(
  certString.split("/")
    .filter(Boolean)
    .map(pair => pair.split("="))
);
const commonName = parsed.CN;
```

## Caveats

- The simple string parsing approach shown in examples does not handle multi-value RDNs correctly
- For production use, always use proper certificate parsing with the `X509Certificate` API
- The `querystring.parse()` alternative mentioned in older documentation is also not recommended
- Certificate subject and issuer in `getPeerCertificate()` are already parsed objects

## Refs

- [DEP0076: `tls.parseCertString()`](https://nodejs.org/api/deprecations.html#dep0076)
- [tls.parseCertString() removal node#41479](https://github.com/nodejs/node/pull/41479)
