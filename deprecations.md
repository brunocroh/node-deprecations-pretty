# Node.js Deprecations by Version

This document lists Node.js deprecations organized by major version.

## Node.js v25

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0129](https://nodejs.org/api/deprecations.html#DEP0129) | `ChildProcess._channel` | v25.0.0 | End-of-Life |
| [DEP0112](https://nodejs.org/api/deprecations.html#DEP0112) | `dgram` private APIs | v25.0.0 | End-of-Life |
| [DEP0118](https://nodejs.org/api/deprecations.html#DEP0118) | `dns.lookup()` support for a falsy host name | v25.0.0 | End-of-Life |
| [DEP0176](https://nodejs.org/api/deprecations.html#DEP0176) | `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` | v25.0.0 | End-of-Life |
| [DEP0147](https://nodejs.org/api/deprecations.html#DEP0147) | `fs.rmdir(path, { recursive: true })` | v25.0.0 | End-of-Life |
| [DEP0077](https://nodejs.org/api/deprecations.html#DEP0077) | `Module._debug()` | v25.0.0 | End-of-Life |
| [DEP0160](https://nodejs.org/api/deprecations.html#DEP0160) | `process.on('multipleResolves', handler)` | v25.0.0 | End-of-Life |
| [DEP0030](https://nodejs.org/api/deprecations.html#DEP0030) | `SlowBuffer` | v25.0.0 | End-of-Life |
| [DEP0132](https://nodejs.org/api/deprecations.html#DEP0132) | `worker.terminate()` with callback | v25.0.0 | End-of-Life |
| [DEP0135](https://nodejs.org/api/deprecations.html#DEP0135) | `WriteStream.open()` and `ReadStream.open()` are internal | v25.0.0 | End-of-Life |
| [DEP0137](https://nodejs.org/api/deprecations.html#DEP0137) | Closing fs.FileHandle on garbage collection | v25.0.0 | End-of-Life |
| [DEP0152](https://nodejs.org/api/deprecations.html#DEP0152) | Extension PerformanceEntry properties | v25.0.0 | End-of-Life |
| [DEP0185](https://nodejs.org/api/deprecations.html#DEP0185) | Instantiating `node:repl` classes without `new` | v25.0.0 | End-of-Life |
| [DEP0170](https://nodejs.org/api/deprecations.html#DEP0170) | Invalid port when using `url.parse()` | v25.0.0 | End-of-Life |
| [DEP0154](https://nodejs.org/api/deprecations.html#DEP0154) | RSA-PSS generate key pair options | v25.0.0 | End-of-Life |
| [DEP0123](https://nodejs.org/api/deprecations.html#DEP0123) | setting the TLS ServerName to an IP address | v25.0.0 | End-of-Life |
| [DEP0173](https://nodejs.org/api/deprecations.html#DEP0173) | the `assert.CallTracker` class | v25.0.0 | End-of-Life |
| [DEP0172](https://nodejs.org/api/deprecations.html#DEP0172) | The `asyncResource` property of `AsyncResource` bound functions | v25.0.0 | End-of-Life |
| [DEP0094](https://nodejs.org/api/deprecations.html#DEP0094) | Using `assert.fail()` with more than one argument | v25.0.0 | End-of-Life |
| [DEP0031](https://nodejs.org/api/deprecations.html#DEP0031) | `ecdh.setPublicKey()` | v25.0.0 | Runtime |
| [DEP0063](https://nodejs.org/api/deprecations.html#DEP0063) | `ServerResponse.prototype.writeHeader()` | v25.0.0 | Runtime |
| [DEP0198](https://nodejs.org/api/deprecations.html#DEP0198) | Creating SHAKE-128 and SHAKE-256 digests without an explicit `options.outputLength` | v25.0.0 | Runtime |

## Node.js v24

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0194](https://nodejs.org/api/deprecations.html#DEP0194) | HTTP/2 priority signaling | v24.2.0 | End-of-Life |
| [DEP0194](https://nodejs.org/api/deprecations.html#DEP0194) | HTTP/2 priority signaling | v24.2.0 | End-of-Life |
| [DEP0178](https://nodejs.org/api/deprecations.html#DEP0178) | `dirent.path` | v24.0.0 | End-of-Life |
| [DEP0176](https://nodejs.org/api/deprecations.html#DEP0176) | `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` | v24.0.0 | End-of-Life |
| [DEP0081](https://nodejs.org/api/deprecations.html#DEP0081) | `fs.truncate()` using a file descriptor | v24.0.0 | End-of-Life |
| [DEP0121](https://nodejs.org/api/deprecations.html#DEP0121) | `net._setSimultaneousAccepts()` | v24.0.0 | End-of-Life |
| [DEP0066](https://nodejs.org/api/deprecations.html#DEP0066) | `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v24.0.0 | End-of-Life |
| [DEP0030](https://nodejs.org/api/deprecations.html#DEP0030) | `SlowBuffer` | v24.0.0 | End-of-Life |
| [DEP0127](https://nodejs.org/api/deprecations.html#DEP0127) | `timers._unrefActive()` | v24.0.0 | End-of-Life |
| [DEP0126](https://nodejs.org/api/deprecations.html#DEP0126) | `timers.active()` | v24.0.0 | End-of-Life |
| [DEP0095](https://nodejs.org/api/deprecations.html#DEP0095) | `timers.enroll()` | v24.0.0 | End-of-Life |
| [DEP0096](https://nodejs.org/api/deprecations.html#DEP0096) | `timers.unenroll()` | v24.0.0 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v24.0.0 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v24.0.0 | End-of-Life |
| [DEP0122](https://nodejs.org/api/deprecations.html#DEP0122) | `tls` `Server.prototype.setOptions()` | v24.0.0 | End-of-Life |
| [DEP0185](https://nodejs.org/api/deprecations.html#DEP0185) | Instantiating `node:repl` classes without `new` | v24.0.0 | End-of-Life |
| [DEP0200](https://nodejs.org/api/deprecations.html#DEP0200) | Closing fs.Dir on garbage collection | v24.9.0 | Documentation-only |
| [DEP0163](https://nodejs.org/api/deprecations.html#DEP0163) | `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v24.8.0 | Deprecation revoked |
| [DEP0199](https://nodejs.org/api/deprecations.html#DEP0199) | `require('node:_http_*')` | v24.6.0 | Documentation-only |
| [DEP0198](https://nodejs.org/api/deprecations.html#DEP0198) | Creating SHAKE-128 and SHAKE-256 digests without an explicit `options.outputLength` | v24.4.0 | Runtime |
| [DEP0197](https://nodejs.org/api/deprecations.html#DEP0197) | `util.types.isNativeError()` | v24.2.0 | Documentation-only |
| [DEP0196](https://nodejs.org/api/deprecations.html#DEP0196) | Calling `node:child_process` functions with `options.shell` as an empty string | v24.2.0 | Documentation-only |
| [DEP0195](https://nodejs.org/api/deprecations.html#DEP0195) | Instantiating `node:http` classes without `new` | v24.2.0 | Documentation-only |
| [DEP0193](https://nodejs.org/api/deprecations.html#DEP0193) | `require('node:_stream_*')` | v24.2.0 | Runtime |
| [DEP0192](https://nodejs.org/api/deprecations.html#DEP0192) | `require('node:_tls_common')` and `require('node:_tls_wrap')` | v24.2.0 | Runtime |
| [DEP0169](https://nodejs.org/api/deprecations.html#DEP0169) | Insecure url.parse() | v24.0.0 | Application |
| [DEP0191](https://nodejs.org/api/deprecations.html#DEP0191) | `repl.builtinModules` | v24.0.0 | Documentation-only |
| [DEP0184](https://nodejs.org/api/deprecations.html#DEP0184) | Instantiating `node:zlib` classes without `new` | v24.0.0 | Runtime |
| [DEP0190](https://nodejs.org/api/deprecations.html#DEP0190) | Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v24.0.0 | Runtime |
| [DEP0187](https://nodejs.org/api/deprecations.html#DEP0187) | Passing invalid argument types to `fs.existsSync` | v24.0.0 | Runtime |

## Node.js v23

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0165](https://nodejs.org/api/deprecations.html#DEP0165) | `--trace-atomics-wait` | v23.0.0 | End-of-Life |
| [DEP0178](https://nodejs.org/api/deprecations.html#DEP0178) | `dirent.path` | v23.0.0 | End-of-Life |
| [DEP0100](https://nodejs.org/api/deprecations.html#DEP0100) | `process.assert()` | v23.0.0 | End-of-Life |
| [DEP0045](https://nodejs.org/api/deprecations.html#DEP0045) | `util.isBoolean()` | v23.0.0 | End-of-Life |
| [DEP0046](https://nodejs.org/api/deprecations.html#DEP0046) | `util.isBuffer()` | v23.0.0 | End-of-Life |
| [DEP0047](https://nodejs.org/api/deprecations.html#DEP0047) | `util.isDate()` | v23.0.0 | End-of-Life |
| [DEP0048](https://nodejs.org/api/deprecations.html#DEP0048) | `util.isError()` | v23.0.0 | End-of-Life |
| [DEP0049](https://nodejs.org/api/deprecations.html#DEP0049) | `util.isFunction()` | v23.0.0 | End-of-Life |
| [DEP0050](https://nodejs.org/api/deprecations.html#DEP0050) | `util.isNull()` | v23.0.0 | End-of-Life |
| [DEP0051](https://nodejs.org/api/deprecations.html#DEP0051) | `util.isNullOrUndefined()` | v23.0.0 | End-of-Life |
| [DEP0052](https://nodejs.org/api/deprecations.html#DEP0052) | `util.isNumber()` | v23.0.0 | End-of-Life |
| [DEP0053](https://nodejs.org/api/deprecations.html#DEP0053) | `util.isObject()` | v23.0.0 | End-of-Life |
| [DEP0054](https://nodejs.org/api/deprecations.html#DEP0054) | `util.isPrimitive()` | v23.0.0 | End-of-Life |
| [DEP0055](https://nodejs.org/api/deprecations.html#DEP0055) | `util.isRegExp()` | v23.0.0 | End-of-Life |
| [DEP0056](https://nodejs.org/api/deprecations.html#DEP0056) | `util.isString()` | v23.0.0 | End-of-Life |
| [DEP0057](https://nodejs.org/api/deprecations.html#DEP0057) | `util.isSymbol()` | v23.0.0 | End-of-Life |
| [DEP0058](https://nodejs.org/api/deprecations.html#DEP0058) | `util.isUndefined()` | v23.0.0 | End-of-Life |
| [DEP0059](https://nodejs.org/api/deprecations.html#DEP0059) | `util.log()` | v23.0.0 | End-of-Life |
| [DEP0108](https://nodejs.org/api/deprecations.html#DEP0108) | `zlib.bytesRead` | v23.0.0 | End-of-Life |
| [DEP0190](https://nodejs.org/api/deprecations.html#DEP0190) | Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v23.11.0 | Runtime |
| [DEP0188](https://nodejs.org/api/deprecations.html#DEP0188) | `process.features.ipv6` and `process.features.uv` | v23.4.0 | Documentation-only |
| [DEP0189](https://nodejs.org/api/deprecations.html#DEP0189) | `process.features.tls_*` | v23.4.0 | Documentation-only |
| [DEP0187](https://nodejs.org/api/deprecations.html#DEP0187) | Passing invalid argument types to `fs.existsSync` | v23.4.0 | Runtime |
| [DEP0093](https://nodejs.org/api/deprecations.html#DEP0093) | `crypto.fips` is deprecated and replaced | v23.0.0 | Runtime |
| [DEP0182](https://nodejs.org/api/deprecations.html#DEP0182) | Short GCM authentication tags without explicit `authTagLength` | v23.0.0 | Runtime |

## Node.js v22

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0194](https://nodejs.org/api/deprecations.html#DEP0194) | HTTP/2 priority signaling | v22.17.0 | End-of-Life |
| [DEP0185](https://nodejs.org/api/deprecations.html#DEP0185) | Instantiating `node:repl` classes without `new` | v22.9.0 | End-of-Life |
| [DEP0165](https://nodejs.org/api/deprecations.html#DEP0165) | `--trace-atomics-wait` | v22.0.0 | End-of-Life |
| [DEP0106](https://nodejs.org/api/deprecations.html#DEP0106) | `crypto.createCipher` and `crypto.createDecipher` | v22.0.0 | End-of-Life |
| [DEP0045](https://nodejs.org/api/deprecations.html#DEP0045) | `util.isBoolean()` | v22.0.0 | End-of-Life |
| [DEP0046](https://nodejs.org/api/deprecations.html#DEP0046) | `util.isBuffer()` | v22.0.0 | End-of-Life |
| [DEP0047](https://nodejs.org/api/deprecations.html#DEP0047) | `util.isDate()` | v22.0.0 | End-of-Life |
| [DEP0048](https://nodejs.org/api/deprecations.html#DEP0048) | `util.isError()` | v22.0.0 | End-of-Life |
| [DEP0049](https://nodejs.org/api/deprecations.html#DEP0049) | `util.isFunction()` | v22.0.0 | End-of-Life |
| [DEP0050](https://nodejs.org/api/deprecations.html#DEP0050) | `util.isNull()` | v22.0.0 | End-of-Life |
| [DEP0051](https://nodejs.org/api/deprecations.html#DEP0051) | `util.isNullOrUndefined()` | v22.0.0 | End-of-Life |
| [DEP0052](https://nodejs.org/api/deprecations.html#DEP0052) | `util.isNumber()` | v22.0.0 | End-of-Life |
| [DEP0053](https://nodejs.org/api/deprecations.html#DEP0053) | `util.isObject()` | v22.0.0 | End-of-Life |
| [DEP0054](https://nodejs.org/api/deprecations.html#DEP0054) | `util.isPrimitive()` | v22.0.0 | End-of-Life |
| [DEP0055](https://nodejs.org/api/deprecations.html#DEP0055) | `util.isRegExp()` | v22.0.0 | End-of-Life |
| [DEP0056](https://nodejs.org/api/deprecations.html#DEP0056) | `util.isString()` | v22.0.0 | End-of-Life |
| [DEP0057](https://nodejs.org/api/deprecations.html#DEP0057) | `util.isSymbol()` | v22.0.0 | End-of-Life |
| [DEP0058](https://nodejs.org/api/deprecations.html#DEP0058) | `util.isUndefined()` | v22.0.0 | End-of-Life |
| [DEP0059](https://nodejs.org/api/deprecations.html#DEP0059) | `util.log()` | v22.0.0 | End-of-Life |
| [DEP0163](https://nodejs.org/api/deprecations.html#DEP0163) | `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v22.20.0 | Deprecation revoked |
| [DEP0199](https://nodejs.org/api/deprecations.html#DEP0199) | `require('node:_http_*')` | v22.19.0 | Documentation-only |
| [DEP0198](https://nodejs.org/api/deprecations.html#DEP0198) | Creating SHAKE-128 and SHAKE-256 digests without an explicit `options.outputLength` | v22.18.0 | Runtime |
| [DEP0196](https://nodejs.org/api/deprecations.html#DEP0196) | Calling `node:child_process` functions with `options.shell` as an empty string | v22.17.0 | Documentation-only |
| [DEP0195](https://nodejs.org/api/deprecations.html#DEP0195) | Instantiating `node:http` classes without `new` | v22.17.0 | Documentation-only |
| [DEP0193](https://nodejs.org/api/deprecations.html#DEP0193) | `require('node:_stream_*')` | v22.17.0 | Runtime |
| [DEP0192](https://nodejs.org/api/deprecations.html#DEP0192) | `require('node:_tls_common')` and `require('node:_tls_wrap')` | v22.17.0 | Runtime |
| [DEP0191](https://nodejs.org/api/deprecations.html#DEP0191) | `repl.builtinModules` | v22.16.0 | Documentation-only |
| [DEP0190](https://nodejs.org/api/deprecations.html#DEP0190) | Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v22.15.0 | Runtime |
| [DEP0188](https://nodejs.org/api/deprecations.html#DEP0188) | `process.features.ipv6` and `process.features.uv` | v22.13.0 | Documentation-only |
| [DEP0189](https://nodejs.org/api/deprecations.html#DEP0189) | `process.features.tls_*` | v22.13.0 | Documentation-only |
| [DEP0187](https://nodejs.org/api/deprecations.html#DEP0187) | Passing invalid argument types to `fs.existsSync` | v22.13.0 | Runtime |
| [DEP0184](https://nodejs.org/api/deprecations.html#DEP0184) | Instantiating `node:zlib` classes without `new` | v22.9.0 | Runtime |
| [DEP0183](https://nodejs.org/api/deprecations.html#DEP0183) | OpenSSL engine-based APIs | v22.4.0 | Documentation-only |
| [DEP0180](https://nodejs.org/api/deprecations.html#DEP0180) | `fs.Stats` constructor | v22.0.0 | Runtime |
| [DEP0179](https://nodejs.org/api/deprecations.html#DEP0179) | `Hash` constructor | v22.0.0 | Runtime |
| [DEP0181](https://nodejs.org/api/deprecations.html#DEP0181) | `Hmac` constructor | v22.0.0 | Runtime |
| [DEP0060](https://nodejs.org/api/deprecations.html#DEP0060) | `util._extend()` | v22.0.0 | Runtime |
| [DEP0044](https://nodejs.org/api/deprecations.html#DEP0044) | `util.isArray()` | v22.0.0 | Runtime |

## Node.js v21

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0177](https://nodejs.org/api/deprecations.html#DEP0177) | `util.types.isWebAssemblyCompiledModule` | v21.7.0 | End-of-Life |
| [DEP0178](https://nodejs.org/api/deprecations.html#DEP0178) | `dirent.path` | v21.5.0 | End-of-Life |
| [DEP0177](https://nodejs.org/api/deprecations.html#DEP0177) | `util.types.isWebAssemblyCompiledModule` | v21.3.0 | End-of-Life |
| [DEP0179](https://nodejs.org/api/deprecations.html#DEP0179) | `Hash` constructor | v21.5.0 | Runtime |
| [DEP0040](https://nodejs.org/api/deprecations.html#DEP0040) | `node:punycode` module | v21.0.0 | Runtime |
| [DEP0174](https://nodejs.org/api/deprecations.html#DEP0174) | calling `promisify` on a function that returns a `Promise` | v21.0.0 | Runtime |

## Node.js v20

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0185](https://nodejs.org/api/deprecations.html#DEP0185) | Instantiating `node:repl` classes without `new` | v20.18.0 | End-of-Life |
| [DEP0178](https://nodejs.org/api/deprecations.html#DEP0178) | `dirent.path` | v20.12.0 | End-of-Life |
| [DEP0177](https://nodejs.org/api/deprecations.html#DEP0177) | `util.types.isWebAssemblyCompiledModule` | v20.12.0 | End-of-Life |
| [DEP0177](https://nodejs.org/api/deprecations.html#DEP0177) | `util.types.isWebAssemblyCompiledModule` | v20.11.0 | End-of-Life |
| [DEP0176](https://nodejs.org/api/deprecations.html#DEP0176) | `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` | v20.8.0 | End-of-Life |
| [DEP0173](https://nodejs.org/api/deprecations.html#DEP0173) | the `assert.CallTracker` class | v20.1.0 | End-of-Life |
| [DEP0091](https://nodejs.org/api/deprecations.html#DEP0091) | `crypto.DEFAULT_ENCODING` | v20.0.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v20.0.0 | End-of-Life |
| [DEP0170](https://nodejs.org/api/deprecations.html#DEP0170) | Invalid port when using `url.parse()` | v20.0.0 | End-of-Life |
| [DEP0154](https://nodejs.org/api/deprecations.html#DEP0154) | RSA-PSS generate key pair options | v20.0.0 | End-of-Life |
| [DEP0172](https://nodejs.org/api/deprecations.html#DEP0172) | The `asyncResource` property of `AsyncResource` bound functions | v20.0.0 | End-of-Life |
| [DEP0198](https://nodejs.org/api/deprecations.html#DEP0198) | Creating SHAKE-128 and SHAKE-256 digests without an explicit `options.outputLength` | v20.19.5 | Runtime |
| [DEP0187](https://nodejs.org/api/deprecations.html#DEP0187) | Passing invalid argument types to `fs.existsSync` | v20.19.3 | Runtime |
| [DEP0184](https://nodejs.org/api/deprecations.html#DEP0184) | Instantiating `node:zlib` classes without `new` | v20.18.0 | Runtime |
| [DEP0183](https://nodejs.org/api/deprecations.html#DEP0183) | OpenSSL engine-based APIs | v20.16.0 | Documentation-only |
| [DEP0180](https://nodejs.org/api/deprecations.html#DEP0180) | `fs.Stats` constructor | v20.13.0 | Runtime |
| [DEP0181](https://nodejs.org/api/deprecations.html#DEP0181) | `Hmac` constructor | v20.13.0 | Runtime |
| [DEP0182](https://nodejs.org/api/deprecations.html#DEP0182) | Short GCM authentication tags without explicit `authTagLength` | v20.13.0 | Runtime |
| [DEP0179](https://nodejs.org/api/deprecations.html#DEP0179) | `Hash` constructor | v20.12.0 | Runtime |
| [DEP0175](https://nodejs.org/api/deprecations.html#DEP0175) | `util.toUSVString` | v20.8.0 | Documentation-only |
| [DEP0174](https://nodejs.org/api/deprecations.html#DEP0174) | calling `promisify` on a function that returns a `Promise` | v20.8.0 | Runtime |

## Node.js v19

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0170](https://nodejs.org/api/deprecations.html#DEP0170) | Invalid port when using `url.parse()` | v19.2.0 | End-of-Life |
| [DEP0162](https://nodejs.org/api/deprecations.html#DEP0162) | `fs.write()`, `fs.writeFileSync()` coercion to string | v19.0.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v19.0.0 | End-of-Life |
| [DEP0150](https://nodejs.org/api/deprecations.html#DEP0150) | Changing the value of `process.config` | v19.0.0 | End-of-Life |
| [DEP0169](https://nodejs.org/api/deprecations.html#DEP0169) | Insecure url.parse() | v19.9.0 | Added support for `--pending-deprecation` |
| [DEP0171](https://nodejs.org/api/deprecations.html#DEP0171) | Setters for `http.IncomingMessage` headers and trailers | v19.3.0 | Documentation-only |
| [DEP0116](https://nodejs.org/api/deprecations.html#DEP0116) | Legacy URL API | v19.0.0 | Deprecation revoked |
| [DEP0169](https://nodejs.org/api/deprecations.html#DEP0169) | Insecure url.parse() | v19.0.0 | Documentation-only |
| [DEP0166](https://nodejs.org/api/deprecations.html#DEP0166) | Double slashes in imports and exports targets | v19.0.0 | Runtime |

## Node.js v18

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0178](https://nodejs.org/api/deprecations.html#DEP0178) | `dirent.path` | v18.20.0 | End-of-Life |
| [DEP0170](https://nodejs.org/api/deprecations.html#DEP0170) | Invalid port when using `url.parse()` | v18.13.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v18.10.0 | End-of-Life |
| [DEP0165](https://nodejs.org/api/deprecations.html#DEP0165) | `--trace-atomics-wait` | v18.8.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v18.7.0 | End-of-Life |
| [DEP0153](https://nodejs.org/api/deprecations.html#DEP0153) | `dns.lookup` and `dnsPromises.lookup` options type coercion | v18.0.0 | End-of-Life |
| [DEP0159](https://nodejs.org/api/deprecations.html#DEP0159) | `ERR_INVALID_CALLBACK` | v18.0.0 | End-of-Life |
| [DEP0162](https://nodejs.org/api/deprecations.html#DEP0162) | `fs.write()`, `fs.writeFileSync()` coercion to string | v18.0.0 | End-of-Life |
| [DEP0160](https://nodejs.org/api/deprecations.html#DEP0160) | `process.on('multipleResolves', handler)` | v18.0.0 | End-of-Life |
| [DEP0076](https://nodejs.org/api/deprecations.html#DEP0076) | `tls.parseCertString()` | v18.0.0 | End-of-Life |
| [DEP0157](https://nodejs.org/api/deprecations.html#DEP0157) | Thenable support in streams | v18.0.0 | End-of-Life |
| [DEP0169](https://nodejs.org/api/deprecations.html#DEP0169) | Insecure url.parse() | v18.17.0 | Added support for `--pending-deprecation` |
| [DEP0116](https://nodejs.org/api/deprecations.html#DEP0116) | Legacy URL API | v18.13.0 | Deprecation revoked |
| [DEP0169](https://nodejs.org/api/deprecations.html#DEP0169) | Insecure url.parse() | v18.13.0 | Documentation-only |
| [DEP0171](https://nodejs.org/api/deprecations.html#DEP0171) | Setters for `http.IncomingMessage` headers and trailers | v18.13.0 | Documentation-only |
| [DEP0167](https://nodejs.org/api/deprecations.html#DEP0167) | Weak `DiffieHellmanGroup` instances (`modp1`, `modp2`, `modp5`) | v18.10.0 | Documentation-only |
| [DEP0166](https://nodejs.org/api/deprecations.html#DEP0166) | Double slashes in imports and exports targets | v18.10.0 | Runtime |
| [DEP0163](https://nodejs.org/api/deprecations.html#DEP0163) | `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v18.7.0 | Deprecation revoked |
| [DEP0168](https://nodejs.org/api/deprecations.html#DEP0168) | Unhandled exception in Node-API callbacks | v18.3.0 | Runtime |

## Node.js v17

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0162](https://nodejs.org/api/deprecations.html#DEP0162) | `fs.write()`, `fs.writeFileSync()` coercion to string | v17.8.0 | End-of-Life |
| [DEP0160](https://nodejs.org/api/deprecations.html#DEP0160) | `process.on('multipleResolves', handler)` | v17.6.0 | End-of-Life |
| [DEP0157](https://nodejs.org/api/deprecations.html#DEP0157) | Thenable support in streams | v17.2.0 | End-of-Life |
| [DEP0153](https://nodejs.org/api/deprecations.html#DEP0153) | `dns.lookup` and `dnsPromises.lookup` options type coercion | v17.0.0 | End-of-Life |
| [DEP0148](https://nodejs.org/api/deprecations.html#DEP0148) | Folder mappings in `"exports"` (trailing `"/"`) | v17.0.0 | End-of-Life |
| [DEP0161](https://nodejs.org/api/deprecations.html#DEP0161) | `process._getActiveRequests()` and `process._getActiveHandles()` | v17.6.0 | Documentation-only |
| [DEP0158](https://nodejs.org/api/deprecations.html#DEP0158) | `buffer.slice(start, end)` | v17.5.0 | Documentation-only |
| [DEP0156](https://nodejs.org/api/deprecations.html#DEP0156) | `.aborted` property and `'abort'`, `'aborted'` event in `http` | v17.0.0 | Documentation-only |
| [DEP0155](https://nodejs.org/api/deprecations.html#DEP0155) | Trailing slashes in pattern specifier resolutions | v17.0.0 | Runtime |

## Node.js v16

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0165](https://nodejs.org/api/deprecations.html#DEP0165) | `--trace-atomics-wait` | v16.18.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v16.18.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v16.17.0 | End-of-Life |
| [DEP0162](https://nodejs.org/api/deprecations.html#DEP0162) | `fs.write()`, `fs.writeFileSync()` coercion to string | v16.15.0 | End-of-Life |
| [DEP0160](https://nodejs.org/api/deprecations.html#DEP0160) | `process.on('multipleResolves', handler)` | v16.15.0 | End-of-Life |
| [DEP0157](https://nodejs.org/api/deprecations.html#DEP0157) | Thenable support in streams | v16.14.0 | End-of-Life |
| [DEP0154](https://nodejs.org/api/deprecations.html#DEP0154) | RSA-PSS generate key pair options | v16.10.0 | End-of-Life |
| [DEP0153](https://nodejs.org/api/deprecations.html#DEP0153) | `dns.lookup` and `dnsPromises.lookup` options type coercion | v16.8.0 | End-of-Life |
| [DEP0147](https://nodejs.org/api/deprecations.html#DEP0147) | `fs.rmdir(path, { recursive: true })` | v16.0.0 | End-of-Life |
| [DEP0109](https://nodejs.org/api/deprecations.html#DEP0109) | `http`, `https`, and `tls` support for invalid URLs | v16.0.0 | End-of-Life |
| [DEP0130](https://nodejs.org/api/deprecations.html#DEP0130) | `Module.createRequireFromPath()` | v16.0.0 | End-of-Life |
| [DEP0150](https://nodejs.org/api/deprecations.html#DEP0150) | Changing the value of `process.config` | v16.0.0 | End-of-Life |
| [DEP0152](https://nodejs.org/api/deprecations.html#DEP0152) | Extension PerformanceEntry properties | v16.0.0 | End-of-Life |
| [DEP0148](https://nodejs.org/api/deprecations.html#DEP0148) | Folder mappings in `"exports"` (trailing `"/"`) | v16.0.0 | End-of-Life |
| [DEP0167](https://nodejs.org/api/deprecations.html#DEP0167) | Weak `DiffieHellmanGroup` instances (`modp1`, `modp2`, `modp5`) | v16.18.0 | Documentation-only |
| [DEP0163](https://nodejs.org/api/deprecations.html#DEP0163) | `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v16.17.0 | Deprecation revoked |
| [DEP0168](https://nodejs.org/api/deprecations.html#DEP0168) | Unhandled exception in Node-API callbacks | v16.17.0 | Runtime |
| [DEP0158](https://nodejs.org/api/deprecations.html#DEP0158) | `buffer.slice(start, end)` | v16.15.0 | Documentation-only |
| [DEP0161](https://nodejs.org/api/deprecations.html#DEP0161) | `process._getActiveRequests()` and `process._getActiveHandles()` | v16.15.0 | Documentation-only |
| [DEP0156](https://nodejs.org/api/deprecations.html#DEP0156) | `.aborted` property and `'abort'`, `'aborted'` event in `http` | v16.12.0 | Documentation-only |
| [DEP0155](https://nodejs.org/api/deprecations.html#DEP0155) | Trailing slashes in pattern specifier resolutions | v16.10.0 | Runtime |
| [DEP0040](https://nodejs.org/api/deprecations.html#DEP0040) | `node:punycode` module | v16.6.0 | Runtime |
| [DEP0149](https://nodejs.org/api/deprecations.html#DEP0149) | `http.IncomingMessage#connection` | v16.0.0 | Documentation-only |
| [DEP0151](https://nodejs.org/api/deprecations.html#DEP0151) | Main index lookup and extension searching | v16.0.0 | Runtime |
| [DEP0128](https://nodejs.org/api/deprecations.html#DEP0128) | modules with an invalid `main` entry and an `index.js` file | v16.0.0 | Runtime |

## Node.js v15

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0148](https://nodejs.org/api/deprecations.html#DEP0148) | Folder mappings in `"exports"` (trailing `"/"`) | v15.1.0 | End-of-Life |
| [DEP0147](https://nodejs.org/api/deprecations.html#DEP0147) | `fs.rmdir(path, { recursive: true })` | v15.0.0 | End-of-Life |
| [DEP0068](https://nodejs.org/api/deprecations.html#DEP0068) | `node debug` | v15.0.0 | End-of-Life |
| [DEP0074](https://nodejs.org/api/deprecations.html#DEP0074) | `REPLServer.bufferedCommand` | v15.0.0 | End-of-Life |
| [DEP0075](https://nodejs.org/api/deprecations.html#DEP0075) | `REPLServer.parseREPLKeyword()` | v15.0.0 | End-of-Life |
| [DEP0082](https://nodejs.org/api/deprecations.html#DEP0082) | `REPLServer.prototype.memory()` | v15.0.0 | End-of-Life |
| [DEP0078](https://nodejs.org/api/deprecations.html#DEP0078) | `REPLServer.turnOffEditorMode()` | v15.0.0 | End-of-Life |
| [DEP0020](https://nodejs.org/api/deprecations.html#DEP0020) | `Server.connections` | v15.0.0 | End-of-Life |
| [DEP0143](https://nodejs.org/api/deprecations.html#DEP0143) | `Transform._transformState` | v15.0.0 | End-of-Life |
| [DEP0018](https://nodejs.org/api/deprecations.html#DEP0018) | Unhandled promise rejections | v15.0.0 | End-of-Life |
| [DEP0124](https://nodejs.org/api/deprecations.html#DEP0124) | using `REPLServer.rli` | v15.0.0 | End-of-Life |
| [DEP0116](https://nodejs.org/api/deprecations.html#DEP0116) | Legacy URL API | v15.13.0 | Deprecation revoked |
| [DEP0151](https://nodejs.org/api/deprecations.html#DEP0151) | Main index lookup and extension searching | v15.8.0 | Runtime |

## Node.js v14

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0147](https://nodejs.org/api/deprecations.html#DEP0147) | `fs.rmdir(path, { recursive: true })` | v14.14.0 | End-of-Life |
| [DEP0148](https://nodejs.org/api/deprecations.html#DEP0148) | Folder mappings in `"exports"` (trailing `"/"`) | v14.13.0 | End-of-Life |
| [DEP0143](https://nodejs.org/api/deprecations.html#DEP0143) | `Transform._transformState` | v14.5.0 | End-of-Life |
| [DEP0003](https://nodejs.org/api/deprecations.html#DEP0003) | `_writableState.buffer` | v14.0.0 | End-of-Life |
| [DEP0009](https://nodejs.org/api/deprecations.html#DEP0009) | `crypto.pbkdf2` without digest | v14.0.0 | End-of-Life |
| [DEP0016](https://nodejs.org/api/deprecations.html#DEP0016) | `GLOBAL`/`root` | v14.0.0 | End-of-Life |
| [DEP0001](https://nodejs.org/api/deprecations.html#DEP0001) | `http.OutgoingMessage.prototype.flush` | v14.0.0 | End-of-Life |
| [DEP0022](https://nodejs.org/api/deprecations.html#DEP0022) | `os.tmpDir()` | v14.0.0 | End-of-Life |
| [DEP0177](https://nodejs.org/api/deprecations.html#DEP0177) | `util.types.isWebAssemblyCompiledModule` | v14.0.0 | End-of-Life |
| [DEP0137](https://nodejs.org/api/deprecations.html#DEP0137) | Closing fs.FileHandle on garbage collection | v14.0.0 | End-of-Life |
| [DEP0151](https://nodejs.org/api/deprecations.html#DEP0151) | Main index lookup and extension searching | v14.18.0 | Runtime |
| [DEP0116](https://nodejs.org/api/deprecations.html#DEP0116) | Legacy URL API | v14.17.0 | Deprecation revoked |
| [DEP0146](https://nodejs.org/api/deprecations.html#DEP0146) | `new crypto.Certificate()` | v14.9.0 | Documentation-only |
| [DEP0144](https://nodejs.org/api/deprecations.html#DEP0144) | `module.parent` | v14.6.0 | Documentation-only |
| [DEP0145](https://nodejs.org/api/deprecations.html#DEP0145) | `socket.bufferSize` | v14.6.0 | Documentation-only |
| [DEP0142](https://nodejs.org/api/deprecations.html#DEP0142) | `repl._builtinLibs` | v14.3.0 | Documentation-only |
| [DEP0141](https://nodejs.org/api/deprecations.html#DEP0141) | `repl.inputStream` and `repl.outputStream` | v14.3.0 | Documentation-only |
| [DEP0140](https://nodejs.org/api/deprecations.html#DEP0140) | Use `request.destroy()` instead of `request.abort()` | v14.1.0 | Documentation-only |
| [DEP0138](https://nodejs.org/api/deprecations.html#DEP0138) | `process.mainModule` | v14.0.0 | Documentation-only |
| [DEP0139](https://nodejs.org/api/deprecations.html#DEP0139) | `process.umask()` with no arguments | v14.0.0 | Documentation-only |

## Node.js v13

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0129](https://nodejs.org/api/deprecations.html#DEP0129) | `ChildProcess._channel` | v13.0.0 | End-of-Life |
| [DEP0130](https://nodejs.org/api/deprecations.html#DEP0130) | `Module.createRequireFromPath()` | v13.0.0 | End-of-Life |
| [DEP0135](https://nodejs.org/api/deprecations.html#DEP0135) | `WriteStream.open()` and `ReadStream.open()` are internal | v13.0.0 | End-of-Life |
| [DEP0131](https://nodejs.org/api/deprecations.html#DEP0131) | Legacy HTTP parser | v13.0.0 | End-of-Life |
| [DEP0140](https://nodejs.org/api/deprecations.html#DEP0140) | Use `request.destroy()` instead of `request.abort()` | v13.14.0 | Documentation-only |
| [DEP0136](https://nodejs.org/api/deprecations.html#DEP0136) | `http` `finished` | v13.4.0 | Documentation-only |

## Node.js v12

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0131](https://nodejs.org/api/deprecations.html#DEP0131) | Legacy HTTP parser | v12.22.0 | End-of-Life |
| [DEP0132](https://nodejs.org/api/deprecations.html#DEP0132) | `worker.terminate()` with callback | v12.5.0 | End-of-Life |
| [DEP0131](https://nodejs.org/api/deprecations.html#DEP0131) | Legacy HTTP parser | v12.3.0 | End-of-Life |
| [DEP0130](https://nodejs.org/api/deprecations.html#DEP0130) | `Module.createRequireFromPath()` | v12.2.0 | End-of-Life |
| [DEP0006](https://nodejs.org/api/deprecations.html#DEP0006) | `child_process` `options.customFds` | v12.0.0 | End-of-Life |
| [DEP0113](https://nodejs.org/api/deprecations.html#DEP0113) | `Cipher.setAuthTag()`, `Decipher.getAuthTag()` | v12.0.0 | End-of-Life |
| [DEP0114](https://nodejs.org/api/deprecations.html#DEP0114) | `crypto._toBuf()` | v12.0.0 | End-of-Life |
| [DEP0121](https://nodejs.org/api/deprecations.html#DEP0121) | `net._setSimultaneousAccepts()` | v12.0.0 | End-of-Life |
| [DEP0062](https://nodejs.org/api/deprecations.html#DEP0062) | `node --debug` | v12.0.0 | End-of-Life |
| [DEP0023](https://nodejs.org/api/deprecations.html#DEP0023) | `os.getNetworkInterfaces()` | v12.0.0 | End-of-Life |
| [DEP0066](https://nodejs.org/api/deprecations.html#DEP0066) | `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v12.0.0 | End-of-Life |
| [DEP0019](https://nodejs.org/api/deprecations.html#DEP0019) | `require('.')` resolved outside directory | v12.0.0 | End-of-Life |
| [DEP0021](https://nodejs.org/api/deprecations.html#DEP0021) | `Server.listenFD` | v12.0.0 | End-of-Life |
| [DEP0122](https://nodejs.org/api/deprecations.html#DEP0122) | `tls` `Server.prototype.setOptions()` | v12.0.0 | End-of-Life |
| [DEP0028](https://nodejs.org/api/deprecations.html#DEP0028) | `util.debug()` | v12.0.0 | End-of-Life |
| [DEP0029](https://nodejs.org/api/deprecations.html#DEP0029) | `util.error()` | v12.0.0 | End-of-Life |
| [DEP0026](https://nodejs.org/api/deprecations.html#DEP0026) | `util.print()` | v12.0.0 | End-of-Life |
| [DEP0027](https://nodejs.org/api/deprecations.html#DEP0027) | `util.puts()` | v12.0.0 | End-of-Life |
| [DEP0098](https://nodejs.org/api/deprecations.html#DEP0098) | AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v12.0.0 | End-of-Life |
| [DEP0117](https://nodejs.org/api/deprecations.html#DEP0117) | Native crypto handles | v12.0.0 | End-of-Life |
| [DEP0084](https://nodejs.org/api/deprecations.html#DEP0084) | requiring bundled internal dependencies | v12.0.0 | End-of-Life |
| [DEP0123](https://nodejs.org/api/deprecations.html#DEP0123) | setting the TLS ServerName to an IP address | v12.0.0 | End-of-Life |
| [DEP0124](https://nodejs.org/api/deprecations.html#DEP0124) | using `REPLServer.rli` | v12.0.0 | End-of-Life |
| [DEP0120](https://nodejs.org/api/deprecations.html#DEP0120) | Windows Performance Counter support | v12.0.0 | End-of-Life |
| [DEP0144](https://nodejs.org/api/deprecations.html#DEP0144) | `module.parent` | v12.19.0 | Documentation-only |
| [DEP0139](https://nodejs.org/api/deprecations.html#DEP0139) | `process.umask()` with no arguments | v12.19.0 | Documentation-only |
| [DEP0136](https://nodejs.org/api/deprecations.html#DEP0136) | `http` `finished` | v12.16.0 | Documentation-only |
| [DEP0133](https://nodejs.org/api/deprecations.html#DEP0133) | `http` `connection` | v12.12.0 | Documentation-only |
| [DEP0134](https://nodejs.org/api/deprecations.html#DEP0134) | `process._tickCallback` | v12.12.0 | Documentation-only |
| [DEP0089](https://nodejs.org/api/deprecations.html#DEP0089) | `require('node:assert')` | v12.8.0 | Deprecation revoked |
| [DEP0125](https://nodejs.org/api/deprecations.html#DEP0125) | `require('node:_stream_wrap')` | v12.0.0 | Runtime |
| [DEP0128](https://nodejs.org/api/deprecations.html#DEP0128) | modules with an invalid `main` entry and an `index.js` file | v12.0.0 | Runtime |

## Node.js v11

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0129](https://nodejs.org/api/deprecations.html#DEP0129) | `ChildProcess._channel` | v11.14.0 | End-of-Life |
| [DEP0127](https://nodejs.org/api/deprecations.html#DEP0127) | `timers._unrefActive()` | v11.14.0 | End-of-Life |
| [DEP0126](https://nodejs.org/api/deprecations.html#DEP0126) | `timers.active()` | v11.14.0 | End-of-Life |
| [DEP0113](https://nodejs.org/api/deprecations.html#DEP0113) | `Cipher.setAuthTag()`, `Decipher.getAuthTag()` | v11.0.0 | End-of-Life |
| [DEP0114](https://nodejs.org/api/deprecations.html#DEP0114) | `crypto._toBuf()` | v11.0.0 | End-of-Life |
| [DEP0106](https://nodejs.org/api/deprecations.html#DEP0106) | `crypto.createCipher` and `crypto.createDecipher` | v11.0.0 | End-of-Life |
| [DEP0010](https://nodejs.org/api/deprecations.html#DEP0010) | `crypto.createCredentials` | v11.0.0 | End-of-Life |
| [DEP0011](https://nodejs.org/api/deprecations.html#DEP0011) | `crypto.Credentials` | v11.0.0 | End-of-Life |
| [DEP0009](https://nodejs.org/api/deprecations.html#DEP0009) | `crypto.pbkdf2` without digest | v11.0.0 | End-of-Life |
| [DEP0105](https://nodejs.org/api/deprecations.html#DEP0105) | `decipher.finaltol` | v11.0.0 | End-of-Life |
| [DEP0112](https://nodejs.org/api/deprecations.html#DEP0112) | `dgram` private APIs | v11.0.0 | End-of-Life |
| [DEP0118](https://nodejs.org/api/deprecations.html#DEP0118) | `dns.lookup()` support for a falsy host name | v11.0.0 | End-of-Life |
| [DEP0061](https://nodejs.org/api/deprecations.html#DEP0061) | `fs.SyncWriteStream` | v11.0.0 | End-of-Life |
| [DEP0109](https://nodejs.org/api/deprecations.html#DEP0109) | `http`, `https`, and `tls` support for invalid URLs | v11.0.0 | End-of-Life |
| [DEP0107](https://nodejs.org/api/deprecations.html#DEP0107) | `tls.convertNPNProtocols()` | v11.0.0 | End-of-Life |
| [DEP0108](https://nodejs.org/api/deprecations.html#DEP0108) | `zlib.bytesRead` | v11.0.0 | End-of-Life |
| [DEP0079](https://nodejs.org/api/deprecations.html#DEP0079) | Custom inspection function on objects via `.inspect()` | v11.0.0 | End-of-Life |
| [DEP0090](https://nodejs.org/api/deprecations.html#DEP0090) | Invalid GCM authentication tag lengths | v11.0.0 | End-of-Life |
| [DEP0117](https://nodejs.org/api/deprecations.html#DEP0117) | Native crypto handles | v11.0.0 | End-of-Life |
| [DEP0120](https://nodejs.org/api/deprecations.html#DEP0120) | Windows Performance Counter support | v11.0.0 | End-of-Life |
| [DEP0111](https://nodejs.org/api/deprecations.html#DEP0111) | `process.binding()` | v11.12.0 | Added support for `--pending-deprecation` |
| [DEP0116](https://nodejs.org/api/deprecations.html#DEP0116) | Legacy URL API | v11.0.0 | Deprecation revoked |
| [DEP0115](https://nodejs.org/api/deprecations.html#DEP0115) | `crypto.prng()`, `crypto.pseudoRandomBytes()`, `crypto.rng()` | v11.0.0 | Documentation-only |
| [DEP0119](https://nodejs.org/api/deprecations.html#DEP0119) | `process.binding('uv').errname()` private API | v11.0.0 | Documentation-only |

## Node.js v10

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0101](https://nodejs.org/api/deprecations.html#DEP0101) | `--with-lttng` | v10.0.0 | End-of-Life |
| [DEP0106](https://nodejs.org/api/deprecations.html#DEP0106) | `crypto.createCipher` and `crypto.createDecipher` | v10.0.0 | End-of-Life |
| [DEP0091](https://nodejs.org/api/deprecations.html#DEP0091) | `crypto.DEFAULT_ENCODING` | v10.0.0 | End-of-Life |
| [DEP0004](https://nodejs.org/api/deprecations.html#DEP0004) | `CryptoStream.prototype.readyState` | v10.0.0 | End-of-Life |
| [DEP0105](https://nodejs.org/api/deprecations.html#DEP0105) | `decipher.finaltol` | v10.0.0 | End-of-Life |
| [DEP0013](https://nodejs.org/api/deprecations.html#DEP0013) | `fs` asynchronous function without callback | v10.0.0 | End-of-Life |
| [DEP0041](https://nodejs.org/api/deprecations.html#DEP0041) | `NODE_REPL_HISTORY_FILE` environment variable | v10.0.0 | End-of-Life |
| [DEP0100](https://nodejs.org/api/deprecations.html#DEP0100) | `process.assert()` | v10.0.0 | End-of-Life |
| [DEP0065](https://nodejs.org/api/deprecations.html#DEP0065) | `repl.REPL_MODE_MAGIC` and `NODE_REPL_MODE=magic` | v10.0.0 | End-of-Life |
| [DEP0095](https://nodejs.org/api/deprecations.html#DEP0095) | `timers.enroll()` | v10.0.0 | End-of-Life |
| [DEP0096](https://nodejs.org/api/deprecations.html#DEP0096) | `timers.unenroll()` | v10.0.0 | End-of-Life |
| [DEP0107](https://nodejs.org/api/deprecations.html#DEP0107) | `tls.convertNPNProtocols()` | v10.0.0 | End-of-Life |
| [DEP0042](https://nodejs.org/api/deprecations.html#DEP0042) | `tls.CryptoStream` | v10.0.0 | End-of-Life |
| [DEP0069](https://nodejs.org/api/deprecations.html#DEP0069) | `vm.runInDebugContext(string)` | v10.0.0 | End-of-Life |
| [DEP0108](https://nodejs.org/api/deprecations.html#DEP0108) | `zlib.bytesRead` | v10.0.0 | End-of-Life |
| [DEP0098](https://nodejs.org/api/deprecations.html#DEP0098) | AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v10.0.0 | End-of-Life |
| [DEP0085](https://nodejs.org/api/deprecations.html#DEP0085) | AsyncHooks sensitive API | v10.0.0 | End-of-Life |
| [DEP0079](https://nodejs.org/api/deprecations.html#DEP0079) | Custom inspection function on objects via `.inspect()` | v10.0.0 | End-of-Life |
| [DEP0083](https://nodejs.org/api/deprecations.html#DEP0083) | Disabling ECDH by setting `ecdhCurve` to `false` | v10.0.0 | End-of-Life |
| [DEP0090](https://nodejs.org/api/deprecations.html#DEP0090) | Invalid GCM authentication tag lengths | v10.0.0 | End-of-Life |
| [DEP0086](https://nodejs.org/api/deprecations.html#DEP0086) | Remove `runInAsyncIdScope` | v10.0.0 | End-of-Life |
| [DEP0084](https://nodejs.org/api/deprecations.html#DEP0084) | requiring bundled internal dependencies | v10.0.0 | End-of-Life |
| [DEP0073](https://nodejs.org/api/deprecations.html#DEP0073) | Several internal properties of `net.Server` | v10.0.0 | End-of-Life |
| [DEP0094](https://nodejs.org/api/deprecations.html#DEP0094) | Using `assert.fail()` with more than one argument | v10.0.0 | End-of-Life |
| [DEP0102](https://nodejs.org/api/deprecations.html#DEP0102) | Using `noAssert` in `Buffer#(read|write)` operations | v10.0.0 | End-of-Life |
| [DEP0111](https://nodejs.org/api/deprecations.html#DEP0111) | `process.binding()` | v10.9.0 | Documentation-only |
| [DEP0103](https://nodejs.org/api/deprecations.html#DEP0103) | `process.binding('util').is[...]` typechecks | v10.9.0 | Superseded by [DEP0111](#DEP0111) |
| [DEP0037](https://nodejs.org/api/deprecations.html#DEP0037) | `fs.lchown(path, uid, gid, callback)` | v10.6.0 | Deprecation revoked |
| [DEP0038](https://nodejs.org/api/deprecations.html#DEP0038) | `fs.lchownSync(path, uid, gid)` | v10.6.0 | Deprecation revoked |
| [DEP0110](https://nodejs.org/api/deprecations.html#DEP0110) | `vm.Script` cached data | v10.6.0 | Documentation-only |
| [DEP0099](https://nodejs.org/api/deprecations.html#DEP0099) | Async context-unaware `node::MakeCallback` C++ APIs | v10.0.0 | Compile-time |
| [DEP0103](https://nodejs.org/api/deprecations.html#DEP0103) | `process.binding('util').is[...]` typechecks | v10.0.0 | Documentation-only |
| [DEP0104](https://nodejs.org/api/deprecations.html#DEP0104) | `process.env` string coercion | v10.0.0 | Documentation-only |
| [DEP0092](https://nodejs.org/api/deprecations.html#DEP0092) | Top-level `this` bound to `module.exports` | v10.0.0 | Documentation-only |
| [DEP0005](https://nodejs.org/api/deprecations.html#DEP0005) | `Buffer()` constructor | v10.0.0 | Runtime |
| [DEP0093](https://nodejs.org/api/deprecations.html#DEP0093) | `crypto.fips` is deprecated and replaced | v10.0.0 | Runtime |
| [DEP0097](https://nodejs.org/api/deprecations.html#DEP0097) | `MakeCallback` with `domain` property | v10.0.0 | Runtime |

## Node.js v9

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0098](https://nodejs.org/api/deprecations.html#DEP0098) | AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v9.6.0 | End-of-Life |
| [DEP0085](https://nodejs.org/api/deprecations.html#DEP0085) | AsyncHooks sensitive API | v9.4.0 | End-of-Life |
| [DEP0086](https://nodejs.org/api/deprecations.html#DEP0086) | Remove `runInAsyncIdScope` | v9.4.0 | End-of-Life |
| [DEP0083](https://nodejs.org/api/deprecations.html#DEP0083) | Disabling ECDH by setting `ecdhCurve` to `false` | v9.2.0 | End-of-Life |
| [DEP0072](https://nodejs.org/api/deprecations.html#DEP0072) | `async_hooks.AsyncResource.triggerId()` | v9.0.0 | End-of-Life |
| [DEP0070](https://nodejs.org/api/deprecations.html#DEP0070) | `async_hooks.currentId()` | v9.0.0 | End-of-Life |
| [DEP0071](https://nodejs.org/api/deprecations.html#DEP0071) | `async_hooks.triggerId()` | v9.0.0 | End-of-Life |
| [DEP0012](https://nodejs.org/api/deprecations.html#DEP0012) | `Domain.dispose` | v9.0.0 | End-of-Life |
| [DEP0081](https://nodejs.org/api/deprecations.html#DEP0081) | `fs.truncate()` using a file descriptor | v9.0.0 | End-of-Life |
| [DEP0017](https://nodejs.org/api/deprecations.html#DEP0017) | `Intl.v8BreakIterator` | v9.0.0 | End-of-Life |
| [DEP0077](https://nodejs.org/api/deprecations.html#DEP0077) | `Module._debug()` | v9.0.0 | End-of-Life |
| [DEP0074](https://nodejs.org/api/deprecations.html#DEP0074) | `REPLServer.bufferedCommand` | v9.0.0 | End-of-Life |
| [DEP0075](https://nodejs.org/api/deprecations.html#DEP0075) | `REPLServer.parseREPLKeyword()` | v9.0.0 | End-of-Life |
| [DEP0024](https://nodejs.org/api/deprecations.html#DEP0024) | `REPLServer.prototype.convertToContext()` | v9.0.0 | End-of-Life |
| [DEP0082](https://nodejs.org/api/deprecations.html#DEP0082) | `REPLServer.prototype.memory()` | v9.0.0 | End-of-Life |
| [DEP0078](https://nodejs.org/api/deprecations.html#DEP0078) | `REPLServer.turnOffEditorMode()` | v9.0.0 | End-of-Life |
| [DEP0076](https://nodejs.org/api/deprecations.html#DEP0076) | `tls.parseCertString()` | v9.0.0 | End-of-Life |
| [DEP0069](https://nodejs.org/api/deprecations.html#DEP0069) | `vm.runInDebugContext(string)` | v9.0.0 | End-of-Life |
| [DEP0007](https://nodejs.org/api/deprecations.html#DEP0007) | Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v9.0.0 | End-of-Life |
| [DEP0073](https://nodejs.org/api/deprecations.html#DEP0073) | Several internal properties of `net.Server` | v9.0.0 | End-of-Life |
| [DEP0089](https://nodejs.org/api/deprecations.html#DEP0089) | `require('node:assert')` | v9.9.0 | Deprecation revoked |
| [DEP0080](https://nodejs.org/api/deprecations.html#DEP0080) | `path._makeLong()` | v9.0.0 | Documentation-only |

## Node.js v8

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0098](https://nodejs.org/api/deprecations.html#DEP0098) | AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v8.12.0 | End-of-Life |
| [DEP0085](https://nodejs.org/api/deprecations.html#DEP0085) | AsyncHooks sensitive API | v8.10.0 | End-of-Life |
| [DEP0086](https://nodejs.org/api/deprecations.html#DEP0086) | Remove `runInAsyncIdScope` | v8.10.0 | End-of-Life |
| [DEP0079](https://nodejs.org/api/deprecations.html#DEP0079) | Custom inspection function on objects via `.inspect()` | v8.7.0 | End-of-Life |
| [DEP0076](https://nodejs.org/api/deprecations.html#DEP0076) | `tls.parseCertString()` | v8.6.0 | End-of-Life |
| [DEP0072](https://nodejs.org/api/deprecations.html#DEP0072) | `async_hooks.AsyncResource.triggerId()` | v8.2.0 | End-of-Life |
| [DEP0070](https://nodejs.org/api/deprecations.html#DEP0070) | `async_hooks.currentId()` | v8.2.0 | End-of-Life |
| [DEP0071](https://nodejs.org/api/deprecations.html#DEP0071) | `async_hooks.triggerId()` | v8.2.0 | End-of-Life |
| [DEP0009](https://nodejs.org/api/deprecations.html#DEP0009) | `crypto.pbkdf2` without digest | v8.0.0 | End-of-Life |
| [DEP0014](https://nodejs.org/api/deprecations.html#DEP0014) | `fs.read` legacy String interface | v8.0.0 | End-of-Life |
| [DEP0015](https://nodejs.org/api/deprecations.html#DEP0015) | `fs.readSync` legacy String interface | v8.0.0 | End-of-Life |
| [DEP0061](https://nodejs.org/api/deprecations.html#DEP0061) | `fs.SyncWriteStream` | v8.0.0 | End-of-Life |
| [DEP0062](https://nodejs.org/api/deprecations.html#DEP0062) | `node --debug` | v8.0.0 | End-of-Life |
| [DEP0068](https://nodejs.org/api/deprecations.html#DEP0068) | `node debug` | v8.0.0 | End-of-Life |
| [DEP0066](https://nodejs.org/api/deprecations.html#DEP0066) | `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v8.0.0 | End-of-Life |
| [DEP0065](https://nodejs.org/api/deprecations.html#DEP0065) | `repl.REPL_MODE_MAGIC` and `NODE_REPL_MODE=magic` | v8.0.0 | End-of-Life |
| [DEP0002](https://nodejs.org/api/deprecations.html#DEP0002) | `require('_linklist')` | v8.0.0 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v8.0.0 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v8.0.0 | End-of-Life |
| [DEP0069](https://nodejs.org/api/deprecations.html#DEP0069) | `vm.runInDebugContext(string)` | v8.0.0 | End-of-Life |
| [DEP0089](https://nodejs.org/api/deprecations.html#DEP0089) | `require('node:assert')` | v8.13.0 | Deprecation revoked |
| [DEP0067](https://nodejs.org/api/deprecations.html#DEP0067) | `OutgoingMessage.prototype._renderHeaders` | v8.0.0 | Documentation-only |
| [DEP0063](https://nodejs.org/api/deprecations.html#DEP0063) | `ServerResponse.prototype.writeHeader()` | v8.0.0 | Runtime |

## Node.js v7

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0061](https://nodejs.org/api/deprecations.html#DEP0061) | `fs.SyncWriteStream` | v7.0.0 | End-of-Life |
| [DEP0013](https://nodejs.org/api/deprecations.html#DEP0013) | `fs` asynchronous function without callback | v7.0.0 | End-of-Life |
| [DEP0017](https://nodejs.org/api/deprecations.html#DEP0017) | `Intl.v8BreakIterator` | v7.0.0 | End-of-Life |
| [DEP0022](https://nodejs.org/api/deprecations.html#DEP0022) | `os.tmpDir()` | v7.0.0 | End-of-Life |
| [DEP0024](https://nodejs.org/api/deprecations.html#DEP0024) | `REPLServer.prototype.convertToContext()` | v7.0.0 | End-of-Life |
| [DEP0007](https://nodejs.org/api/deprecations.html#DEP0007) | Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v7.0.0 | End-of-Life |
| [DEP0018](https://nodejs.org/api/deprecations.html#DEP0018) | Unhandled promise rejections | v7.0.0 | End-of-Life |
| [DEP0040](https://nodejs.org/api/deprecations.html#DEP0040) | `node:punycode` module | v7.0.0 | Runtime |

## Node.js v6

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0003](https://nodejs.org/api/deprecations.html#DEP0003) | `_writableState.buffer` | v6.12.0 | End-of-Life |
| [DEP0006](https://nodejs.org/api/deprecations.html#DEP0006) | `child_process` `options.customFds` | v6.12.0 | End-of-Life |
| [DEP0010](https://nodejs.org/api/deprecations.html#DEP0010) | `crypto.createCredentials` | v6.12.0 | End-of-Life |
| [DEP0011](https://nodejs.org/api/deprecations.html#DEP0011) | `crypto.Credentials` | v6.12.0 | End-of-Life |
| [DEP0009](https://nodejs.org/api/deprecations.html#DEP0009) | `crypto.pbkdf2` without digest | v6.12.0 | End-of-Life |
| [DEP0004](https://nodejs.org/api/deprecations.html#DEP0004) | `CryptoStream.prototype.readyState` | v6.12.0 | End-of-Life |
| [DEP0012](https://nodejs.org/api/deprecations.html#DEP0012) | `Domain.dispose` | v6.12.0 | End-of-Life |
| [DEP0014](https://nodejs.org/api/deprecations.html#DEP0014) | `fs.read` legacy String interface | v6.12.0 | End-of-Life |
| [DEP0015](https://nodejs.org/api/deprecations.html#DEP0015) | `fs.readSync` legacy String interface | v6.12.0 | End-of-Life |
| [DEP0016](https://nodejs.org/api/deprecations.html#DEP0016) | `GLOBAL`/`root` | v6.12.0 | End-of-Life |
| [DEP0001](https://nodejs.org/api/deprecations.html#DEP0001) | `http.OutgoingMessage.prototype.flush` | v6.12.0 | End-of-Life |
| [DEP0041](https://nodejs.org/api/deprecations.html#DEP0041) | `NODE_REPL_HISTORY_FILE` environment variable | v6.12.0 | End-of-Life |
| [DEP0023](https://nodejs.org/api/deprecations.html#DEP0023) | `os.getNetworkInterfaces()` | v6.12.0 | End-of-Life |
| [DEP0002](https://nodejs.org/api/deprecations.html#DEP0002) | `require('_linklist')` | v6.12.0 | End-of-Life |
| [DEP0019](https://nodejs.org/api/deprecations.html#DEP0019) | `require('.')` resolved outside directory | v6.12.0 | End-of-Life |
| [DEP0020](https://nodejs.org/api/deprecations.html#DEP0020) | `Server.connections` | v6.12.0 | End-of-Life |
| [DEP0021](https://nodejs.org/api/deprecations.html#DEP0021) | `Server.listenFD` | v6.12.0 | End-of-Life |
| [DEP0030](https://nodejs.org/api/deprecations.html#DEP0030) | `SlowBuffer` | v6.12.0 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v6.12.0 | End-of-Life |
| [DEP0042](https://nodejs.org/api/deprecations.html#DEP0042) | `tls.CryptoStream` | v6.12.0 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v6.12.0 | End-of-Life |
| [DEP0028](https://nodejs.org/api/deprecations.html#DEP0028) | `util.debug()` | v6.12.0 | End-of-Life |
| [DEP0029](https://nodejs.org/api/deprecations.html#DEP0029) | `util.error()` | v6.12.0 | End-of-Life |
| [DEP0045](https://nodejs.org/api/deprecations.html#DEP0045) | `util.isBoolean()` | v6.12.0 | End-of-Life |
| [DEP0046](https://nodejs.org/api/deprecations.html#DEP0046) | `util.isBuffer()` | v6.12.0 | End-of-Life |
| [DEP0047](https://nodejs.org/api/deprecations.html#DEP0047) | `util.isDate()` | v6.12.0 | End-of-Life |
| [DEP0048](https://nodejs.org/api/deprecations.html#DEP0048) | `util.isError()` | v6.12.0 | End-of-Life |
| [DEP0049](https://nodejs.org/api/deprecations.html#DEP0049) | `util.isFunction()` | v6.12.0 | End-of-Life |
| [DEP0050](https://nodejs.org/api/deprecations.html#DEP0050) | `util.isNull()` | v6.12.0 | End-of-Life |
| [DEP0051](https://nodejs.org/api/deprecations.html#DEP0051) | `util.isNullOrUndefined()` | v6.12.0 | End-of-Life |
| [DEP0052](https://nodejs.org/api/deprecations.html#DEP0052) | `util.isNumber()` | v6.12.0 | End-of-Life |
| [DEP0053](https://nodejs.org/api/deprecations.html#DEP0053) | `util.isObject()` | v6.12.0 | End-of-Life |
| [DEP0054](https://nodejs.org/api/deprecations.html#DEP0054) | `util.isPrimitive()` | v6.12.0 | End-of-Life |
| [DEP0055](https://nodejs.org/api/deprecations.html#DEP0055) | `util.isRegExp()` | v6.12.0 | End-of-Life |
| [DEP0056](https://nodejs.org/api/deprecations.html#DEP0056) | `util.isString()` | v6.12.0 | End-of-Life |
| [DEP0057](https://nodejs.org/api/deprecations.html#DEP0057) | `util.isSymbol()` | v6.12.0 | End-of-Life |
| [DEP0058](https://nodejs.org/api/deprecations.html#DEP0058) | `util.isUndefined()` | v6.12.0 | End-of-Life |
| [DEP0059](https://nodejs.org/api/deprecations.html#DEP0059) | `util.log()` | v6.12.0 | End-of-Life |
| [DEP0026](https://nodejs.org/api/deprecations.html#DEP0026) | `util.print()` | v6.12.0 | End-of-Life |
| [DEP0027](https://nodejs.org/api/deprecations.html#DEP0027) | `util.puts()` | v6.12.0 | End-of-Life |
| [DEP0007](https://nodejs.org/api/deprecations.html#DEP0007) | Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v6.12.0 | End-of-Life |
| [DEP0009](https://nodejs.org/api/deprecations.html#DEP0009) | `crypto.pbkdf2` without digest | v6.0.0 | End-of-Life |
| [DEP0014](https://nodejs.org/api/deprecations.html#DEP0014) | `fs.read` legacy String interface | v6.0.0 | End-of-Life |
| [DEP0015](https://nodejs.org/api/deprecations.html#DEP0015) | `fs.readSync` legacy String interface | v6.0.0 | End-of-Life |
| [DEP0016](https://nodejs.org/api/deprecations.html#DEP0016) | `GLOBAL`/`root` | v6.0.0 | End-of-Life |
| [DEP0030](https://nodejs.org/api/deprecations.html#DEP0030) | `SlowBuffer` | v6.0.0 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v6.0.0 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v6.0.0 | End-of-Life |
| [DEP0059](https://nodejs.org/api/deprecations.html#DEP0059) | `util.log()` | v6.0.0 | End-of-Life |
| [DEP0007](https://nodejs.org/api/deprecations.html#DEP0007) | Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v6.0.0 | End-of-Life |
| [DEP0005](https://nodejs.org/api/deprecations.html#DEP0005) | `Buffer()` constructor | v6.12.0 | A deprecation code has been assigned |
| [DEP0037](https://nodejs.org/api/deprecations.html#DEP0037) | `fs.lchown(path, uid, gid, callback)` | v6.12.0 | Deprecation revoked |
| [DEP0038](https://nodejs.org/api/deprecations.html#DEP0038) | `fs.lchownSync(path, uid, gid)` | v6.12.0 | Deprecation revoked |
| [DEP0033](https://nodejs.org/api/deprecations.html#DEP0033) | `EventEmitter.listenerCount()` | v6.12.0 | Documentation-only |
| [DEP0034](https://nodejs.org/api/deprecations.html#DEP0034) | `fs.exists(path, callback)` | v6.12.0 | Documentation-only |
| [DEP0035](https://nodejs.org/api/deprecations.html#DEP0035) | `fs.lchmod(path, mode, callback)` | v6.12.0 | Documentation-only |
| [DEP0036](https://nodejs.org/api/deprecations.html#DEP0036) | `fs.lchmodSync(path, mode)` | v6.12.0 | Documentation-only |
| [DEP0032](https://nodejs.org/api/deprecations.html#DEP0032) | `node:domain` module | v6.12.0 | Documentation-only |
| [DEP0039](https://nodejs.org/api/deprecations.html#DEP0039) | `require.extensions` | v6.12.0 | Documentation-only |
| [DEP0008](https://nodejs.org/api/deprecations.html#DEP0008) | `require('node:constants')` | v6.12.0 | Documentation-only |
| [DEP0031](https://nodejs.org/api/deprecations.html#DEP0031) | `ecdh.setPublicKey()` | v6.12.0 | Runtime |
| [DEP0025](https://nodejs.org/api/deprecations.html#DEP0025) | `require('node:sys')` | v6.12.0 | Runtime |
| [DEP0060](https://nodejs.org/api/deprecations.html#DEP0060) | `util._extend()` | v6.12.0 | Runtime |
| [DEP0044](https://nodejs.org/api/deprecations.html#DEP0044) | `util.isArray()` | v6.12.0 | Runtime |
| [DEP0008](https://nodejs.org/api/deprecations.html#DEP0008) | `require('node:constants')` | v6.3.0 | Documentation-only |
| [DEP0005](https://nodejs.org/api/deprecations.html#DEP0005) | `Buffer()` constructor | v6.0.0 | Documentation-only |
| [DEP0060](https://nodejs.org/api/deprecations.html#DEP0060) | `util._extend()` | v6.0.0 | Runtime |

## Node.js v5

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0002](https://nodejs.org/api/deprecations.html#DEP0002) | `require('_linklist')` | v5.0.0 | End-of-Life |
| [DEP0031](https://nodejs.org/api/deprecations.html#DEP0031) | `ecdh.setPublicKey()` | v5.2.0 | Runtime |

## Node.js v4

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0003](https://nodejs.org/api/deprecations.html#DEP0003) | `_writableState.buffer` | v4.8.6 | End-of-Life |
| [DEP0006](https://nodejs.org/api/deprecations.html#DEP0006) | `child_process` `options.customFds` | v4.8.6 | End-of-Life |
| [DEP0010](https://nodejs.org/api/deprecations.html#DEP0010) | `crypto.createCredentials` | v4.8.6 | End-of-Life |
| [DEP0011](https://nodejs.org/api/deprecations.html#DEP0011) | `crypto.Credentials` | v4.8.6 | End-of-Life |
| [DEP0004](https://nodejs.org/api/deprecations.html#DEP0004) | `CryptoStream.prototype.readyState` | v4.8.6 | End-of-Life |
| [DEP0012](https://nodejs.org/api/deprecations.html#DEP0012) | `Domain.dispose` | v4.8.6 | End-of-Life |
| [DEP0014](https://nodejs.org/api/deprecations.html#DEP0014) | `fs.read` legacy String interface | v4.8.6 | End-of-Life |
| [DEP0015](https://nodejs.org/api/deprecations.html#DEP0015) | `fs.readSync` legacy String interface | v4.8.6 | End-of-Life |
| [DEP0001](https://nodejs.org/api/deprecations.html#DEP0001) | `http.OutgoingMessage.prototype.flush` | v4.8.6 | End-of-Life |
| [DEP0041](https://nodejs.org/api/deprecations.html#DEP0041) | `NODE_REPL_HISTORY_FILE` environment variable | v4.8.6 | End-of-Life |
| [DEP0023](https://nodejs.org/api/deprecations.html#DEP0023) | `os.getNetworkInterfaces()` | v4.8.6 | End-of-Life |
| [DEP0019](https://nodejs.org/api/deprecations.html#DEP0019) | `require('.')` resolved outside directory | v4.8.6 | End-of-Life |
| [DEP0020](https://nodejs.org/api/deprecations.html#DEP0020) | `Server.connections` | v4.8.6 | End-of-Life |
| [DEP0021](https://nodejs.org/api/deprecations.html#DEP0021) | `Server.listenFD` | v4.8.6 | End-of-Life |
| [DEP0042](https://nodejs.org/api/deprecations.html#DEP0042) | `tls.CryptoStream` | v4.8.6 | End-of-Life |
| [DEP0028](https://nodejs.org/api/deprecations.html#DEP0028) | `util.debug()` | v4.8.6 | End-of-Life |
| [DEP0029](https://nodejs.org/api/deprecations.html#DEP0029) | `util.error()` | v4.8.6 | End-of-Life |
| [DEP0045](https://nodejs.org/api/deprecations.html#DEP0045) | `util.isBoolean()` | v4.8.6 | End-of-Life |
| [DEP0046](https://nodejs.org/api/deprecations.html#DEP0046) | `util.isBuffer()` | v4.8.6 | End-of-Life |
| [DEP0047](https://nodejs.org/api/deprecations.html#DEP0047) | `util.isDate()` | v4.8.6 | End-of-Life |
| [DEP0048](https://nodejs.org/api/deprecations.html#DEP0048) | `util.isError()` | v4.8.6 | End-of-Life |
| [DEP0049](https://nodejs.org/api/deprecations.html#DEP0049) | `util.isFunction()` | v4.8.6 | End-of-Life |
| [DEP0050](https://nodejs.org/api/deprecations.html#DEP0050) | `util.isNull()` | v4.8.6 | End-of-Life |
| [DEP0051](https://nodejs.org/api/deprecations.html#DEP0051) | `util.isNullOrUndefined()` | v4.8.6 | End-of-Life |
| [DEP0052](https://nodejs.org/api/deprecations.html#DEP0052) | `util.isNumber()` | v4.8.6 | End-of-Life |
| [DEP0053](https://nodejs.org/api/deprecations.html#DEP0053) | `util.isObject()` | v4.8.6 | End-of-Life |
| [DEP0054](https://nodejs.org/api/deprecations.html#DEP0054) | `util.isPrimitive()` | v4.8.6 | End-of-Life |
| [DEP0055](https://nodejs.org/api/deprecations.html#DEP0055) | `util.isRegExp()` | v4.8.6 | End-of-Life |
| [DEP0056](https://nodejs.org/api/deprecations.html#DEP0056) | `util.isString()` | v4.8.6 | End-of-Life |
| [DEP0057](https://nodejs.org/api/deprecations.html#DEP0057) | `util.isSymbol()` | v4.8.6 | End-of-Life |
| [DEP0058](https://nodejs.org/api/deprecations.html#DEP0058) | `util.isUndefined()` | v4.8.6 | End-of-Life |
| [DEP0026](https://nodejs.org/api/deprecations.html#DEP0026) | `util.print()` | v4.8.6 | End-of-Life |
| [DEP0027](https://nodejs.org/api/deprecations.html#DEP0027) | `util.puts()` | v4.8.6 | End-of-Life |
| [DEP0045](https://nodejs.org/api/deprecations.html#DEP0045) | `util.isBoolean()` | v4.0.0 | End-of-Life |
| [DEP0046](https://nodejs.org/api/deprecations.html#DEP0046) | `util.isBuffer()` | v4.0.0 | End-of-Life |
| [DEP0047](https://nodejs.org/api/deprecations.html#DEP0047) | `util.isDate()` | v4.0.0 | End-of-Life |
| [DEP0048](https://nodejs.org/api/deprecations.html#DEP0048) | `util.isError()` | v4.0.0 | End-of-Life |
| [DEP0049](https://nodejs.org/api/deprecations.html#DEP0049) | `util.isFunction()` | v4.0.0 | End-of-Life |
| [DEP0050](https://nodejs.org/api/deprecations.html#DEP0050) | `util.isNull()` | v4.0.0 | End-of-Life |
| [DEP0051](https://nodejs.org/api/deprecations.html#DEP0051) | `util.isNullOrUndefined()` | v4.0.0 | End-of-Life |
| [DEP0052](https://nodejs.org/api/deprecations.html#DEP0052) | `util.isNumber()` | v4.0.0 | End-of-Life |
| [DEP0053](https://nodejs.org/api/deprecations.html#DEP0053) | `util.isObject()` | v4.0.0 | End-of-Life |
| [DEP0054](https://nodejs.org/api/deprecations.html#DEP0054) | `util.isPrimitive()` | v4.0.0 | End-of-Life |
| [DEP0055](https://nodejs.org/api/deprecations.html#DEP0055) | `util.isRegExp()` | v4.0.0 | End-of-Life |
| [DEP0056](https://nodejs.org/api/deprecations.html#DEP0056) | `util.isString()` | v4.0.0 | End-of-Life |
| [DEP0057](https://nodejs.org/api/deprecations.html#DEP0057) | `util.isSymbol()` | v4.0.0 | End-of-Life |
| [DEP0058](https://nodejs.org/api/deprecations.html#DEP0058) | `util.isUndefined()` | v4.0.0 | End-of-Life |
| [DEP0037](https://nodejs.org/api/deprecations.html#DEP0037) | `fs.lchown(path, uid, gid, callback)` | v4.8.6 | Deprecation revoked |
| [DEP0038](https://nodejs.org/api/deprecations.html#DEP0038) | `fs.lchownSync(path, uid, gid)` | v4.8.6 | Deprecation revoked |
| [DEP0033](https://nodejs.org/api/deprecations.html#DEP0033) | `EventEmitter.listenerCount()` | v4.8.6 | Documentation-only |
| [DEP0034](https://nodejs.org/api/deprecations.html#DEP0034) | `fs.exists(path, callback)` | v4.8.6 | Documentation-only |
| [DEP0035](https://nodejs.org/api/deprecations.html#DEP0035) | `fs.lchmod(path, mode, callback)` | v4.8.6 | Documentation-only |
| [DEP0036](https://nodejs.org/api/deprecations.html#DEP0036) | `fs.lchmodSync(path, mode)` | v4.8.6 | Documentation-only |
| [DEP0032](https://nodejs.org/api/deprecations.html#DEP0032) | `node:domain` module | v4.8.6 | Documentation-only |
| [DEP0039](https://nodejs.org/api/deprecations.html#DEP0039) | `require.extensions` | v4.8.6 | Documentation-only |
| [DEP0025](https://nodejs.org/api/deprecations.html#DEP0025) | `require('node:sys')` | v4.8.6 | Runtime |
| [DEP0044](https://nodejs.org/api/deprecations.html#DEP0044) | `util.isArray()` | v4.8.6 | Runtime |
| [DEP0044](https://nodejs.org/api/deprecations.html#DEP0044) | `util.isArray()` | v4.0.0 | Runtime |

## Node.js v3

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0045](https://nodejs.org/api/deprecations.html#DEP0045) | `util.isBoolean()` | v3.3.1 | End-of-Life |
| [DEP0046](https://nodejs.org/api/deprecations.html#DEP0046) | `util.isBuffer()` | v3.3.1 | End-of-Life |
| [DEP0047](https://nodejs.org/api/deprecations.html#DEP0047) | `util.isDate()` | v3.3.1 | End-of-Life |
| [DEP0048](https://nodejs.org/api/deprecations.html#DEP0048) | `util.isError()` | v3.3.1 | End-of-Life |
| [DEP0049](https://nodejs.org/api/deprecations.html#DEP0049) | `util.isFunction()` | v3.3.1 | End-of-Life |
| [DEP0050](https://nodejs.org/api/deprecations.html#DEP0050) | `util.isNull()` | v3.3.1 | End-of-Life |
| [DEP0051](https://nodejs.org/api/deprecations.html#DEP0051) | `util.isNullOrUndefined()` | v3.3.1 | End-of-Life |
| [DEP0052](https://nodejs.org/api/deprecations.html#DEP0052) | `util.isNumber()` | v3.3.1 | End-of-Life |
| [DEP0053](https://nodejs.org/api/deprecations.html#DEP0053) | `util.isObject()` | v3.3.1 | End-of-Life |
| [DEP0054](https://nodejs.org/api/deprecations.html#DEP0054) | `util.isPrimitive()` | v3.3.1 | End-of-Life |
| [DEP0055](https://nodejs.org/api/deprecations.html#DEP0055) | `util.isRegExp()` | v3.3.1 | End-of-Life |
| [DEP0056](https://nodejs.org/api/deprecations.html#DEP0056) | `util.isString()` | v3.3.1 | End-of-Life |
| [DEP0057](https://nodejs.org/api/deprecations.html#DEP0057) | `util.isSymbol()` | v3.3.1 | End-of-Life |
| [DEP0058](https://nodejs.org/api/deprecations.html#DEP0058) | `util.isUndefined()` | v3.3.1 | End-of-Life |
| [DEP0041](https://nodejs.org/api/deprecations.html#DEP0041) | `NODE_REPL_HISTORY_FILE` environment variable | v3.0.0 | End-of-Life |
| [DEP0044](https://nodejs.org/api/deprecations.html#DEP0044) | `util.isArray()` | v3.3.1 | Runtime |
| [DEP0033](https://nodejs.org/api/deprecations.html#DEP0033) | `EventEmitter.listenerCount()` | v3.2.0 | Documentation-only |

## Node.js v1

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0019](https://nodejs.org/api/deprecations.html#DEP0019) | `require('.')` resolved outside directory | v1.8.1 | End-of-Life |
| [DEP0001](https://nodejs.org/api/deprecations.html#DEP0001) | `http.OutgoingMessage.prototype.flush` | v1.6.0 | End-of-Life |
| [DEP0032](https://nodejs.org/api/deprecations.html#DEP0032) | `node:domain` module | v1.4.2 | Documentation-only |
| [DEP0034](https://nodejs.org/api/deprecations.html#DEP0034) | `fs.exists(path, callback)` | v1.0.0 | Documentation-only |
| [DEP0025](https://nodejs.org/api/deprecations.html#DEP0025) | `require('node:sys')` | v1.0.0 | Runtime |

## Node.js v0

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0003](https://nodejs.org/api/deprecations.html#DEP0003) | `_writableState.buffer` | v0.11.15 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v0.11.15 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v0.11.15 | End-of-Life |
| [DEP0006](https://nodejs.org/api/deprecations.html#DEP0006) | `child_process` `options.customFds` | v0.11.14 | End-of-Life |
| [DEP0010](https://nodejs.org/api/deprecations.html#DEP0010) | `crypto.createCredentials` | v0.11.13 | End-of-Life |
| [DEP0011](https://nodejs.org/api/deprecations.html#DEP0011) | `crypto.Credentials` | v0.11.13 | End-of-Life |
| [DEP0012](https://nodejs.org/api/deprecations.html#DEP0012) | `Domain.dispose` | v0.11.7 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v0.11.3 | End-of-Life |
| [DEP0042](https://nodejs.org/api/deprecations.html#DEP0042) | `tls.CryptoStream` | v0.11.3 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v0.11.3 | End-of-Life |
| [DEP0028](https://nodejs.org/api/deprecations.html#DEP0028) | `util.debug()` | v0.11.3 | End-of-Life |
| [DEP0029](https://nodejs.org/api/deprecations.html#DEP0029) | `util.error()` | v0.11.3 | End-of-Life |
| [DEP0026](https://nodejs.org/api/deprecations.html#DEP0026) | `util.print()` | v0.11.3 | End-of-Life |
| [DEP0027](https://nodejs.org/api/deprecations.html#DEP0027) | `util.puts()` | v0.11.3 | End-of-Life |
| [DEP0020](https://nodejs.org/api/deprecations.html#DEP0020) | `Server.connections` | v0.9.7 | End-of-Life |
| [DEP0021](https://nodejs.org/api/deprecations.html#DEP0021) | `Server.listenFD` | v0.7.12 | End-of-Life |
| [DEP0023](https://nodejs.org/api/deprecations.html#DEP0023) | `os.getNetworkInterfaces()` | v0.6.0 | End-of-Life |
| [DEP0006](https://nodejs.org/api/deprecations.html#DEP0006) | `child_process` `options.customFds` | v0.5.10 | End-of-Life |
| [DEP0004](https://nodejs.org/api/deprecations.html#DEP0004) | `CryptoStream.prototype.readyState` | v0.4.0 | End-of-Life |
| [DEP0100](https://nodejs.org/api/deprecations.html#DEP0100) | `process.assert()` | v0.3.7 | End-of-Life |
| [DEP0014](https://nodejs.org/api/deprecations.html#DEP0014) | `fs.read` legacy String interface | v0.1.96 | End-of-Life |
| [DEP0015](https://nodejs.org/api/deprecations.html#DEP0015) | `fs.readSync` legacy String interface | v0.1.96 | End-of-Life |
| [DEP0039](https://nodejs.org/api/deprecations.html#DEP0039) | `require.extensions` | v0.10.6 | Documentation-only |
| [DEP0037](https://nodejs.org/api/deprecations.html#DEP0037) | `fs.lchown(path, uid, gid, callback)` | v0.4.7 | Deprecation revoked |
| [DEP0038](https://nodejs.org/api/deprecations.html#DEP0038) | `fs.lchownSync(path, uid, gid)` | v0.4.7 | Deprecation revoked |
| [DEP0035](https://nodejs.org/api/deprecations.html#DEP0035) | `fs.lchmod(path, mode, callback)` | v0.4.7 | Documentation-only |
| [DEP0036](https://nodejs.org/api/deprecations.html#DEP0036) | `fs.lchmodSync(path, mode)` | v0.4.7 | Documentation-only |
