# node --debug

## Description

Since the `--debug` command-line flag is deprecated (DEP0062) and has reached End-of-Life status in Node.js v12.0.0, we should provide guidance for migration.

- The codemod should detect usage of the `--debug` flag in scripts and documentation.
- The codemod should replace `--debug` with `--inspect`.
- The codemod should update port specifications from `--debug=port` to `--inspect=port`.
- The codemod should handle `--debug-brk` to `--inspect-brk` conversion.

## Additional Information

Note that the `--debug` flag was removed in Node.js v12.0.0. This flag activated the legacy V8 debugger interface, which was removed in V8 5.8. The Inspector protocol, activated with `--inspect`, replaced it and provides a more powerful and modern debugging experience.

The Inspector protocol is compatible with Chrome DevTools and other debugging tools that support the Chrome DevTools Protocol.

## Examples

### Example 1: Basic debug flag

**Before:**

```bash
node --debug app.js
```

**After:**

```bash
node --inspect app.js
```

### Example 2: Debug with port

**Before:**

```bash
node --debug=5858 server.js
```

**After:**

```bash
node --inspect=5858 server.js
```

### Example 3: Debug-brk flag

**Before:**

```bash
node --debug-brk test.js
```

**After:**

```bash
node --inspect-brk test.js
```

### Example 4: Package.json scripts

**Before:**

```json
{
  "scripts": {
    "debug": "node --debug server.js",
    "debug-brk": "node --debug-brk=5858 server.js"
  }
}
```

**After:**

```json
{
  "scripts": {
    "debug": "node --inspect server.js",
    "debug-brk": "node --inspect-brk=5858 server.js"
  }
}
```

### Example 5: With specific host and port

**Before:**

```bash
node --debug=0.0.0.0:5858 app.js
```

**After:**

```bash
node --inspect=0.0.0.0:5858 app.js
```

### Example 6: Multiple flags

**Before:**

```bash
node --debug --harmony app.js
```

**After:**

```bash
node --inspect --harmony app.js
```

### Example 7: NPM debug script

**Before:**

```json
{
  "scripts": {
    "start": "node app.js",
    "debug": "node --debug --nolazy app.js"
  }
}
```

**After:**

```json
{
  "scripts": {
    "start": "node app.js",
    "debug": "node --inspect --nolazy app.js"
  }
}
```

### Example 8: Docker command

**Before:**

```dockerfile
CMD ["node", "--debug=0.0.0.0:9229", "server.js"]
```

**After:**

```dockerfile
CMD ["node", "--inspect=0.0.0.0:9229", "server.js"]
```

### Example 9: Makefile

**Before:**

```makefile
debug:
	node --debug-brk=5858 app.js
```

**After:**

```makefile
debug:
	node --inspect-brk=5858 app.js
```

### Example 10: Process spawn

**Before:**

```js
const { spawn } = require("node:child_process");

const child = spawn("node", ["--debug", "worker.js"]);
```

**After:**

```js
const { spawn } = require("node:child_process");

const child = spawn("node", ["--inspect", "worker.js"]);
```

## Refs

- [DEP0062: `node --debug`](https://nodejs.org/api/deprecations.html#dep0062)
- [--debug flag removal node#25828](https://github.com/nodejs/node/pull/25828)
