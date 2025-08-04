# Node.js Deprecations by Version


## ## Node.js v24
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0030: `SlowBuffer` | v24.0.0 | Runtime deprecation. |
| DEP0043: `tls.SecurePair` | v24.0.0 | End-of-Life. |
| DEP0064: `tls.createSecurePair()` | v24.0.0 | End-of-Life. |
| DEP0066: `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v24.0.0 | End-of-Life. |
| DEP0081: `fs.truncate()` using a file descriptor | v24.0.0 | End-of-Life. |
| DEP0095: `timers.enroll()` | v24.0.0 | End-of-Life. |
| DEP0096: `timers.unenroll()` | v24.0.0 | End-of-Life. |
| DEP0121: `net._setSimultaneousAccepts()` | v24.0.0 | End-of-Life. |
| DEP0122: `tls` `Server.prototype.setOptions()` | v24.0.0 | End-of-Life. |
| DEP0126: `timers.active()` | v24.0.0 | End-of-Life. |
| DEP0127: `timers._unrefActive()` | v24.0.0 | End-of-Life. |
| DEP0169: Insecure url.parse() | v24.0.0 | Application deprecation. |
| DEP0176: `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` | v24.0.0 | Runtime deprecation. |
| DEP0178: `dirent.path` | v24.0.0 | End-of-Life. |
| DEP0184: Instantiating `node:zlib` classes without `new` | v24.0.0 | Runtime deprecation. |
| DEP0185: Instantiating `node:repl` classes without `new` | v24.0.0 | Runtime deprecation. |
| DEP0187: Passing invalid argument types to `fs.existsSync` | v24.0.0 | Runtime deprecation. |
| DEP0190: Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v24.0.0 | Runtime deprecation. |
| DEP0191: `repl.builtinModules` | v24.0.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0192: `require('node:_tls_common')` and `require('node:_tls_wrap')` | v24.2.0 | Documentation-only deprecation. |
| DEP0193: `require('node:_stream_*')` | v24.2.0 | Documentation-only deprecation. |
| DEP0194: HTTP/2 priority signaling | v24.2.0 | End-of-Life. |
| DEP0194: HTTP/2 priority signaling | v24.2.0 | Documentation-only deprecation. |
| DEP0195: Instantiating `node:http` classes without `new` | v24.2.0 | Documentation-only deprecation. |
| DEP0196: Calling `node:child_process` functions with `options.shell` as an empty string | v24.2.0 | Documentation-only deprecation. |
| DEP0197: `util.types.isNativeError()` | v24.2.0 | Documentation-only deprecation. |
| DEP0198: Creating SHAKE-128 and SHAKE-256 digests without an explicit `options.outputLength` | v24.4.0 | Documentation-only deprecation with support for `--pending-deprecation`. |

## ## Node.js v23
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0045: `util.isBoolean()` | v23.0.0 | End-of-Life deprecation. |
| DEP0046: `util.isBuffer()` | v23.0.0 | End-of-Life deprecation. |
| DEP0047: `util.isDate()` | v23.0.0 | End-of-Life deprecation. |
| DEP0048: `util.isError()` | v23.0.0 | End-of-Life deprecation. |
| DEP0049: `util.isFunction()` | v23.0.0 | End-of-Life deprecation. |
| DEP0050: `util.isNull()` | v23.0.0 | End-of-Life deprecation. |
| DEP0051: `util.isNullOrUndefined()` | v23.0.0 | End-of-Life deprecation. |
| DEP0052: `util.isNumber()` | v23.0.0 | End-of-Life deprecation. |
| DEP0053: `util.isObject()` | v23.0.0 | End-of-Life deprecation. |
| DEP0054: `util.isPrimitive()` | v23.0.0 | End-of-Life deprecation. |
| DEP0055: `util.isRegExp()` | v23.0.0 | End-of-Life deprecation. |
| DEP0056: `util.isString()` | v23.0.0 | End-of-Life deprecation. |
| DEP0057: `util.isSymbol()` | v23.0.0 | End-of-Life deprecation. |
| DEP0058: `util.isUndefined()` | v23.0.0 | End-of-Life deprecation. |
| DEP0059: `util.log()` | v23.0.0 | End-of-Life deprecation. |
| DEP0093: `crypto.fips` is deprecated and replaced | v23.0.0 | Runtime deprecation. |
| DEP0100: `process.assert()` | v23.0.0 | End-of-Life. |
| DEP0108: `zlib.bytesRead` | v23.0.0 | End-of-Life. |
| DEP0165: `--trace-atomics-wait` | v23.0.0 | End-of-Life. |
| DEP0178: `dirent.path` | v23.0.0 | Runtime deprecation. |
| DEP0182: Short GCM authentication tags without explicit `authTagLength` | v23.0.0 | Runtime deprecation. |
| DEP0187: Passing invalid argument types to `fs.existsSync` | v23.4.0 | Documentation-only. |
| DEP0188: `process.features.ipv6` and `process.features.uv` | v23.4.0 | Documentation-only deprecation. |
| DEP0189: `process.features.tls_*` | v23.4.0 | Documentation-only deprecation. |
| DEP0190: Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v23.11.0 | Documentation-only deprecation. |

## ## Node.js v22
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0044: `util.isArray()` | v22.0.0 | Runtime deprecation. |
| DEP0045: `util.isBoolean()` | v22.0.0 | Runtime deprecation. |
| DEP0046: `util.isBuffer()` | v22.0.0 | Runtime deprecation. |
| DEP0047: `util.isDate()` | v22.0.0 | Runtime deprecation. |
| DEP0048: `util.isError()` | v22.0.0 | Runtime deprecation. |
| DEP0049: `util.isFunction()` | v22.0.0 | Runtime deprecation. |
| DEP0050: `util.isNull()` | v22.0.0 | Runtime deprecation. |
| DEP0051: `util.isNullOrUndefined()` | v22.0.0 | Runtime deprecation. |
| DEP0052: `util.isNumber()` | v22.0.0 | Runtime deprecation. |
| DEP0053: `util.isObject()` | v22.0.0 | Runtime deprecation. |
| DEP0054: `util.isPrimitive()` | v22.0.0 | Runtime deprecation. |
| DEP0055: `util.isRegExp()` | v22.0.0 | Runtime deprecation. |
| DEP0056: `util.isString()` | v22.0.0 | Runtime deprecation. |
| DEP0057: `util.isSymbol()` | v22.0.0 | Runtime deprecation. |
| DEP0058: `util.isUndefined()` | v22.0.0 | Runtime deprecation. |
| DEP0059: `util.log()` | v22.0.0 | Runtime deprecation. |
| DEP0060: `util._extend()` | v22.0.0 | Runtime deprecation. |
| DEP0106: `crypto.createCipher` and `crypto.createDecipher` | v22.0.0 | End-of-Life. |
| DEP0165: `--trace-atomics-wait` | v22.0.0 | Runtime deprecation. |
| DEP0179: `Hash` constructor | v22.0.0 | Runtime deprecation. |
| DEP0180: `fs.Stats` constructor | v22.0.0 | Runtime deprecation. |
| DEP0181: `Hmac` constructor | v22.0.0 | Runtime deprecation. |
| DEP0183: OpenSSL engine-based APIs | v22.4.0 | Documentation-only deprecation. |
| DEP0184: Instantiating `node:zlib` classes without `new` | v22.9.0 | Documentation-only deprecation. |
| DEP0185: Instantiating `node:repl` classes without `new` | v22.9.0 | Documentation-only deprecation. |
| DEP0187: Passing invalid argument types to `fs.existsSync` | v22.13.0 | Documentation-only. |
| DEP0188: `process.features.ipv6` and `process.features.uv` | v22.13.0 | Documentation-only deprecation. |
| DEP0189: `process.features.tls_*` | v22.13.0 | Documentation-only deprecation. |
| DEP0190: Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v22.15.0 | Documentation-only deprecation. |

## ## Node.js v21
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0040: `node:punycode` module | v21.0.0 | Runtime deprecation. |
| DEP0174: calling `promisify` on a function that returns a `Promise` | v21.0.0 | Runtime deprecation. |
| DEP0177: `util.types.isWebAssemblyCompiledModule` | v21.7.0 | End-of-Life. |
| DEP0177: `util.types.isWebAssemblyCompiledModule` | v21.3.0 | A deprecation code has been assigned. |
| DEP0178: `dirent.path` | v21.5.0 | Documentation-only deprecation. |
| DEP0179: `Hash` constructor | v21.5.0 | Documentation-only deprecation. |

## ## Node.js v20
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0091: `crypto.DEFAULT_ENCODING` | v20.0.0 | End-of-Life. |
| DEP0154: RSA-PSS generate key pair options | v20.0.0 | Runtime deprecation. |
| DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer | v20.0.0 | End-of-Life. |
| DEP0170: Invalid port when using `url.parse()` | v20.0.0 | Runtime deprecation. |
| DEP0172: The `asyncResource` property of `AsyncResource` bound functions | v20.0.0 | Runtime-deprecation. |
| DEP0173: the `assert.CallTracker` class | v20.1.0 | Runtime deprecation. |
| DEP0174: calling `promisify` on a function that returns a `Promise` | v20.8.0 | Documentation-only deprecation. |
| DEP0175: `util.toUSVString` | v20.8.0 | Documentation-only deprecation. |
| DEP0176: `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` | v20.8.0 | Documentation-only deprecation. |
| DEP0177: `util.types.isWebAssemblyCompiledModule` | v20.12.0 | End-of-Life. |
| DEP0177: `util.types.isWebAssemblyCompiledModule` | v20.11.0 | A deprecation code has been assigned. |
| DEP0178: `dirent.path` | v20.12.0 | Documentation-only deprecation. |
| DEP0179: `Hash` constructor | v20.12.0 | Documentation-only deprecation. |
| DEP0180: `fs.Stats` constructor | v20.13.0 | Documentation-only deprecation. |
| DEP0181: `Hmac` constructor | v20.13.0 | Documentation-only deprecation. |
| DEP0182: Short GCM authentication tags without explicit `authTagLength` | v20.13.0 | Documentation-only deprecation. |
| DEP0183: OpenSSL engine-based APIs | v20.16.0 | Documentation-only deprecation. |
| DEP0184: Instantiating `node:zlib` classes without `new` | v20.18.0 | Documentation-only deprecation. |
| DEP0185: Instantiating `node:repl` classes without `new` | v20.18.0 | Documentation-only deprecation. |

## ## Node.js v19
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0116: Legacy URL API | v19.0.0 | \`url.parse()` is deprecated again in DEP0169. |
| DEP0150: Changing the value of `process.config` | v19.0.0 | End-of-Life. |
| DEP0162: `fs.write()`, `fs.writeFileSync()` coercion to string | v19.0.0 | End-of-Life. |
| DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer | v19.0.0 | Runtime deprecation. |
| DEP0166: Double slashes in imports and exports targets | v19.0.0 | Runtime deprecation. |
| DEP0169: Insecure url.parse() | v19.9.0 | Added support for `--pending-deprecation`. |
| DEP0169: Insecure url.parse() | v19.0.0 | Documentation-only deprecation. |
| DEP0170: Invalid port when using `url.parse()` | v19.2.0 | Documentation-only deprecation. |
| DEP0171: Setters for `http.IncomingMessage` headers and trailers | v19.3.0 | Documentation-only deprecation. |

## ## Node.js v18
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0076: `tls.parseCertString()` | v18.0.0 | End-of-Life. |
| DEP0116: Legacy URL API | v18.13.0 | \`url.parse()` is deprecated again in DEP0169. |
| DEP0153: `dns.lookup` and `dnsPromises.lookup` options type coercion | v18.0.0 | End-of-Life. |
| DEP0157: Thenable support in streams | v18.0.0 | End-of-life. |
| DEP0159: `ERR_INVALID_CALLBACK` | v18.0.0 | End-of-Life. |
| DEP0160: `process.on('multipleResolves', handler)` | v18.0.0 | Runtime deprecation. |
| DEP0162: `fs.write()`, `fs.writeFileSync()` coercion to string | v18.0.0 | Runtime deprecation. |
| DEP0163: `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v18.7.0 | Documentation-only deprecation. |
| DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer | v18.10.0 | Documentation-only deprecation of `process.exitCode` integer coercion. |
| DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer | v18.7.0 | Documentation-only deprecation of `process.exit(code)` integer coercion. |
| DEP0165: `--trace-atomics-wait` | v18.8.0 | Documentation-only deprecation. |
| DEP0166: Double slashes in imports and exports targets | v18.10.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0167: Weak `DiffieHellmanGroup` instances (`modp1`, `modp2`, `modp5`) | v18.10.0 | Documentation-only deprecation. |
| DEP0168: Unhandled exception in Node-API callbacks | v18.3.0 | Runtime deprecation. |
| DEP0169: Insecure url.parse() | v18.17.0 | Added support for `--pending-deprecation`. |
| DEP0169: Insecure url.parse() | v18.13.0 | Documentation-only deprecation. |
| DEP0170: Invalid port when using `url.parse()` | v18.13.0 | Documentation-only deprecation. |
| DEP0171: Setters for `http.IncomingMessage` headers and trailers | v18.13.0 | Documentation-only deprecation. |
| DEP0178: `dirent.path` | v18.20.0 | Documentation-only deprecation. |

## ## Node.js v17
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0148: Folder mappings in `"exports"` (trailing `"/"`) | v17.0.0 | End-of-Life. |
| DEP0153: `dns.lookup` and `dnsPromises.lookup` options type coercion | v17.0.0 | Runtime deprecation. |
| DEP0155: Trailing slashes in pattern specifier resolutions | v17.0.0 | Runtime deprecation. |
| DEP0156: `.aborted` property and `'abort'`, `'aborted'` event in `http` | v17.0.0 | Documentation-only deprecation. |
| DEP0157: Thenable support in streams | v17.2.0 | Documentation-only deprecation. |
| DEP0158: `buffer.slice(start, end)` | v17.5.0 | Documentation-only deprecation. |
| DEP0160: `process.on('multipleResolves', handler)` | v17.6.0 | Documentation-only deprecation. |
| DEP0161: `process._getActiveRequests()` and `process._getActiveHandles()` | v17.6.0 | Documentation-only deprecation. |
| DEP0162: `fs.write()`, `fs.writeFileSync()` coercion to string | v17.8.0 | Documentation-only deprecation. |

## ## Node.js v16
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0040: `node:punycode` module | v16.6.0 | Added support for `--pending-deprecation`. |
| DEP0109: `http`, `https`, and `tls` support for invalid URLs | v16.0.0 | End-of-Life. |
| DEP0128: modules with an invalid `main` entry and an `index.js` file | v16.0.0 | Runtime deprecation. |
| DEP0130: `Module.createRequireFromPath()` | v16.0.0 | End-of-life. |
| DEP0147: `fs.rmdir(path, { recursive: true })` | v16.0.0 | Runtime deprecation. |
| DEP0148: Folder mappings in `"exports"` (trailing `"/"`) | v16.0.0 | Runtime deprecation. |
| DEP0149: `http.IncomingMessage#connection` | v16.0.0 | Documentation-only deprecation. |
| DEP0150: Changing the value of `process.config` | v16.0.0 | Runtime deprecation. |
| DEP0151: Main index lookup and extension searching | v16.0.0 | Runtime deprecation. |
| DEP0152: Extension PerformanceEntry properties | v16.0.0 | Runtime deprecation. |
| DEP0153: `dns.lookup` and `dnsPromises.lookup` options type coercion | v16.8.0 | Documentation-only deprecation. |
| DEP0154: RSA-PSS generate key pair options | v16.10.0 | Documentation-only deprecation. |
| DEP0155: Trailing slashes in pattern specifier resolutions | v16.10.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0156: `.aborted` property and `'abort'`, `'aborted'` event in `http` | v16.12.0 | Documentation-only deprecation. |
| DEP0157: Thenable support in streams | v16.14.0 | Documentation-only deprecation. |
| DEP0158: `buffer.slice(start, end)` | v16.15.0 | Documentation-only deprecation. |
| DEP0160: `process.on('multipleResolves', handler)` | v16.15.0 | Documentation-only deprecation. |
| DEP0161: `process._getActiveRequests()` and `process._getActiveHandles()` | v16.15.0 | Documentation-only deprecation. |
| DEP0162: `fs.write()`, `fs.writeFileSync()` coercion to string | v16.15.0 | Documentation-only deprecation. |
| DEP0163: `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v16.17.0 | Documentation-only deprecation. |
| DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer | v16.18.0 | Documentation-only deprecation of `process.exitCode` integer coercion. |
| DEP0164: `process.exit(code)`, `process.exitCode` coercion to integer | v16.17.0 | Documentation-only deprecation of `process.exit(code)` integer coercion. |
| DEP0165: `--trace-atomics-wait` | v16.18.0 | Documentation-only deprecation. |
| DEP0167: Weak `DiffieHellmanGroup` instances (`modp1`, `modp2`, `modp5`) | v16.18.0 | Documentation-only deprecation. |
| DEP0168: Unhandled exception in Node-API callbacks | v16.17.0 | Runtime deprecation. |

## ## Node.js v15
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0018: Unhandled promise rejections | v15.0.0 | End-of-Life. |
| DEP0020: `Server.connections` | v15.0.0 | Server.connections has been removed. |
| DEP0068: `node debug` | v15.0.0 | The legacy `node debug` command was removed. |
| DEP0074: `REPLServer.bufferedCommand` | v15.0.0 | End-of-Life. |
| DEP0075: `REPLServer.parseREPLKeyword()` | v15.0.0 | End-of-Life. |
| DEP0078: `REPLServer.turnOffEditorMode()` | v15.0.0 | End-of-Life. |
| DEP0082: `REPLServer.prototype.memory()` | v15.0.0 | End-of-Life. |
| DEP0116: Legacy URL API | v15.13.0 | Deprecation revoked. Status changed to "Legacy". |
| DEP0124: using `REPLServer.rli` | v15.0.0 | End-of-Life. |
| DEP0143: `Transform._transformState` | v15.0.0 | End-of-Life. |
| DEP0147: `fs.rmdir(path, { recursive: true })` | v15.0.0 | Runtime deprecation for permissive behavior. |
| DEP0148: Folder mappings in `"exports"` (trailing `"/"`) | v15.1.0 | Runtime deprecation for self-referencing imports. |
| DEP0151: Main index lookup and extension searching | v15.8.0 | Documentation-only deprecation with `--pending-deprecation` support. |

## ## Node.js v14
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0001: `http.OutgoingMessage.prototype.flush` | v14.0.0 | End-of-Life. |
| DEP0003: `_writableState.buffer` | v14.0.0 | End-of-Life. |
| DEP0009: `crypto.pbkdf2` without digest | v14.0.0 | End-of-Life (for `digest === null`). |
| DEP0016: `GLOBAL`/`root` | v14.0.0 | End-of-Life. |
| DEP0022: `os.tmpDir()` | v14.0.0 | End-of-Life. |
| DEP0116: Legacy URL API | v14.17.0 | Deprecation revoked. Status changed to "Legacy". |
| DEP0137: Closing fs.FileHandle on garbage collection | v14.0.0 | Runtime deprecation. |
| DEP0138: `process.mainModule` | v14.0.0 | Documentation-only deprecation. |
| DEP0139: `process.umask()` with no arguments | v14.0.0 | Documentation-only deprecation. |
| DEP0140: Use `request.destroy()` instead of `request.abort()` | v14.1.0 | Documentation-only deprecation. |
| DEP0141: `repl.inputStream` and `repl.outputStream` | v14.3.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0142: `repl._builtinLibs` | v14.3.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0143: `Transform._transformState` | v14.5.0 | Runtime deprecation. |
| DEP0144: `module.parent` | v14.6.0 | Documentation-only deprecation. |
| DEP0145: `socket.bufferSize` | v14.6.0 | Documentation-only deprecation. |
| DEP0146: `new crypto.Certificate()` | v14.9.0 | Documentation-only deprecation. |
| DEP0147: `fs.rmdir(path, { recursive: true })` | v14.14.0 | Documentation-only deprecation. |
| DEP0148: Folder mappings in `"exports"` (trailing `"/"`) | v14.13.0 | Documentation-only deprecation. |
| DEP0151: Main index lookup and extension searching | v14.18.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0177: `util.types.isWebAssemblyCompiledModule` | v14.0.0 | Documentation-only deprecation. |

## ## Node.js v13
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0129: `ChildProcess._channel` | v13.0.0 | Runtime deprecation. |
| DEP0130: `Module.createRequireFromPath()` | v13.0.0 | Runtime deprecation. |
| DEP0131: Legacy HTTP parser | v13.0.0 | This feature has been removed. |
| DEP0135: `WriteStream.open()` and `ReadStream.open()` are internal | v13.0.0 | Runtime deprecation. |
| DEP0136: `http` `finished` | v13.4.0 | Documentation-only deprecation. |
| DEP0140: Use `request.destroy()` instead of `request.abort()` | v13.14.0 | Documentation-only deprecation. |

## ## Node.js v12
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0006: `child_process` `options.customFds` | v12.0.0 | End-of-Life. |
| DEP0019: `require('.')` resolved outside directory | v12.0.0 | Removed functionality. |
| DEP0021: `Server.listenFD` | v12.0.0 | End-of-Life. |
| DEP0023: `os.getNetworkInterfaces()` | v12.0.0 | End-of-Life. |
| DEP0026: `util.print()` | v12.0.0 | End-of-Life. |
| DEP0027: `util.puts()` | v12.0.0 | End-of-Life. |
| DEP0028: `util.debug()` | v12.0.0 | End-of-Life. |
| DEP0029: `util.error()` | v12.0.0 | End-of-Life. |
| DEP0062: `node --debug` | v12.0.0 | End-of-Life. |
| DEP0066: `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v12.0.0 | Runtime deprecation. |
| DEP0084: requiring bundled internal dependencies | v12.0.0 | This functionality has been removed. |
| DEP0089: `require('node:assert')` | v12.8.0 | Deprecation revoked. |
| DEP0098: AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v12.0.0 | End-of-Life. |
| DEP0113: `Cipher.setAuthTag()`, `Decipher.getAuthTag()` | v12.0.0 | End-of-Life. |
| DEP0114: `crypto._toBuf()` | v12.0.0 | End-of-Life. |
| DEP0117: Native crypto handles | v12.0.0 | End-of-Life. |
| DEP0120: Windows Performance Counter support | v12.0.0 | End-of-Life. |
| DEP0121: `net._setSimultaneousAccepts()` | v12.0.0 | Runtime deprecation. |
| DEP0122: `tls` `Server.prototype.setOptions()` | v12.0.0 | Runtime deprecation. |
| DEP0123: setting the TLS ServerName to an IP address | v12.0.0 | Runtime deprecation. |
| DEP0124: using `REPLServer.rli` | v12.0.0 | Runtime deprecation. |
| DEP0125: `require('node:_stream_wrap')` | v12.0.0 | Runtime deprecation. |
| DEP0128: modules with an invalid `main` entry and an `index.js` file | v12.0.0 | Documentation-only. |
| DEP0130: `Module.createRequireFromPath()` | v12.2.0 | Documentation-only. |
| DEP0131: Legacy HTTP parser | v12.22.0 | Runtime deprecation. |
| DEP0131: Legacy HTTP parser | v12.3.0 | Documentation-only. |
| DEP0132: `worker.terminate()` with callback | v12.5.0 | Runtime deprecation. |
| DEP0133: `http` `connection` | v12.12.0 | Documentation-only deprecation. |
| DEP0134: `process._tickCallback` | v12.12.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0136: `http` `finished` | v12.16.0 | Documentation-only deprecation. |
| DEP0139: `process.umask()` with no arguments | v12.19.0 | Documentation-only deprecation. |
| DEP0144: `module.parent` | v12.19.0 | Documentation-only deprecation. |

## ## Node.js v11
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0009: `crypto.pbkdf2` without digest | v11.0.0 | Runtime deprecation (for `digest === null`). |
| DEP0010: `crypto.createCredentials` | v11.0.0 | End-of-Life. |
| DEP0011: `crypto.Credentials` | v11.0.0 | End-of-Life. |
| DEP0061: `fs.SyncWriteStream` | v11.0.0 | End-of-Life. |
| DEP0079: Custom inspection function on objects via `.inspect()` | v11.0.0 | End-of-Life. |
| DEP0090: Invalid GCM authentication tag lengths | v11.0.0 | End-of-Life. |
| DEP0105: `decipher.finaltol` | v11.0.0 | End-of-Life. |
| DEP0106: `crypto.createCipher` and `crypto.createDecipher` | v11.0.0 | Runtime deprecation. |
| DEP0107: `tls.convertNPNProtocols()` | v11.0.0 | End-of-Life. |
| DEP0108: `zlib.bytesRead` | v11.0.0 | Runtime deprecation. |
| DEP0109: `http`, `https`, and `tls` support for invalid URLs | v11.0.0 | Runtime deprecation. |
| DEP0111: `process.binding()` | v11.12.0 | Added support for `--pending-deprecation`. |
| DEP0112: `dgram` private APIs | v11.0.0 | Runtime deprecation. |
| DEP0113: `Cipher.setAuthTag()`, `Decipher.getAuthTag()` | v11.0.0 | Runtime deprecation. |
| DEP0114: `crypto._toBuf()` | v11.0.0 | Runtime deprecation. |
| DEP0115: `crypto.prng()`, `crypto.pseudoRandomBytes()`, `crypto.rng()` | v11.0.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0116: Legacy URL API | v11.0.0 | Documentation-only deprecation. |
| DEP0117: Native crypto handles | v11.0.0 | Runtime deprecation. |
| DEP0118: `dns.lookup()` support for a falsy host name | v11.0.0 | Runtime deprecation. |
| DEP0119: `process.binding('uv').errname()` private API | v11.0.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0120: Windows Performance Counter support | v11.0.0 | Runtime deprecation. |
| DEP0126: `timers.active()` | v11.14.0 | Runtime deprecation. |
| DEP0127: `timers._unrefActive()` | v11.14.0 | Runtime deprecation. |
| DEP0129: `ChildProcess._channel` | v11.14.0 | Documentation-only. |

## ## Node.js v10
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0004: `CryptoStream.prototype.readyState` | v10.0.0 | End-of-Life. |
| DEP0005: `Buffer()` constructor | v10.0.0 | Runtime deprecation. |
| DEP0013: `fs` asynchronous function without callback | v10.0.0 | End-of-Life. |
| DEP0037: `fs.lchown(path, uid, gid, callback)` | v10.6.0 | Deprecation revoked. |
| DEP0038: `fs.lchownSync(path, uid, gid)` | v10.6.0 | Deprecation revoked. |
| DEP0041: `NODE_REPL_HISTORY_FILE` environment variable | v10.0.0 | End-of-Life. |
| DEP0042: `tls.CryptoStream` | v10.0.0 | End-of-Life. |
| DEP0065: `repl.REPL_MODE_MAGIC` and `NODE_REPL_MODE=magic` | v10.0.0 | End-of-Life. |
| DEP0069: `vm.runInDebugContext(string)` | v10.0.0 | End-of-Life. |
| DEP0073: Several internal properties of `net.Server` | v10.0.0 | End-of-Life. |
| DEP0079: Custom inspection function on objects via `.inspect()` | v10.0.0 | Runtime deprecation. |
| DEP0083: Disabling ECDH by setting `ecdhCurve` to `false` | v10.0.0 | End-of-Life. |
| DEP0084: requiring bundled internal dependencies | v10.0.0 | Runtime deprecation. |
| DEP0085: AsyncHooks sensitive API | v10.0.0 | End-of-Life. |
| DEP0086: Remove `runInAsyncIdScope` | v10.0.0 | End-of-Life. |
| DEP0090: Invalid GCM authentication tag lengths | v10.0.0 | Runtime deprecation. |
| DEP0091: `crypto.DEFAULT_ENCODING` | v10.0.0 | Runtime deprecation. |
| DEP0092: Top-level `this` bound to `module.exports` | v10.0.0 | Documentation-only deprecation. |
| DEP0093: `crypto.fips` is deprecated and replaced | v10.0.0 | Documentation-only deprecation. |
| DEP0094: Using `assert.fail()` with more than one argument | v10.0.0 | Runtime deprecation. |
| DEP0095: `timers.enroll()` | v10.0.0 | Runtime deprecation. |
| DEP0096: `timers.unenroll()` | v10.0.0 | Runtime deprecation. |
| DEP0097: `MakeCallback` with `domain` property | v10.0.0 | Runtime deprecation. |
| DEP0098: AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v10.0.0 | Runtime deprecation. |
| DEP0099: Async context-unaware `node::MakeCallback` C++ APIs | v10.0.0 | Compile-time deprecation. |
| DEP0100: `process.assert()` | v10.0.0 | Runtime deprecation. |
| DEP0101: `--with-lttng` | v10.0.0 | End-of-Life. |
| DEP0102: Using `noAssert` in `Buffer#(read|write)` operations | v10.0.0 | End-of-Life. |
| DEP0103: `process.binding('util').is[...]` typechecks | v10.9.0 | Superseded by [DEP0111](#DEP0111). |
| DEP0103: `process.binding('util').is[...]` typechecks | v10.0.0 | Documentation-only deprecation. |
| DEP0104: `process.env` string coercion | v10.0.0 | Documentation-only deprecation with `--pending-deprecation` support. |
| DEP0105: `decipher.finaltol` | v10.0.0 | Runtime deprecation. |
| DEP0106: `crypto.createCipher` and `crypto.createDecipher` | v10.0.0 | Documentation-only deprecation. |
| DEP0107: `tls.convertNPNProtocols()` | v10.0.0 | Runtime deprecation. |
| DEP0108: `zlib.bytesRead` | v10.0.0 | Documentation-only deprecation. |
| DEP0110: `vm.Script` cached data | v10.6.0 | Documentation-only deprecation. |
| DEP0111: `process.binding()` | v10.9.0 | Documentation-only deprecation. |

## ## Node.js v9
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0007: Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v9.0.0 | End-of-Life. |
| DEP0012: `Domain.dispose` | v9.0.0 | End-of-Life. |
| DEP0017: `Intl.v8BreakIterator` | v9.0.0 | End-of-Life. |
| DEP0024: `REPLServer.prototype.convertToContext()` | v9.0.0 | End-of-Life. |
| DEP0069: `vm.runInDebugContext(string)` | v9.0.0 | Runtime deprecation. |
| DEP0070: `async_hooks.currentId()` | v9.0.0 | End-of-Life. |
| DEP0071: `async_hooks.triggerId()` | v9.0.0 | End-of-Life. |
| DEP0072: `async_hooks.AsyncResource.triggerId()` | v9.0.0 | End-of-Life. |
| DEP0073: Several internal properties of `net.Server` | v9.0.0 | Runtime deprecation. |
| DEP0074: `REPLServer.bufferedCommand` | v9.0.0 | Runtime deprecation. |
| DEP0075: `REPLServer.parseREPLKeyword()` | v9.0.0 | Runtime deprecation. |
| DEP0076: `tls.parseCertString()` | v9.0.0 | Runtime deprecation. |
| DEP0077: `Module._debug()` | v9.0.0 | Runtime deprecation. |
| DEP0078: `REPLServer.turnOffEditorMode()` | v9.0.0 | Runtime deprecation. |
| DEP0080: `path._makeLong()` | v9.0.0 | Documentation-only deprecation. |
| DEP0081: `fs.truncate()` using a file descriptor | v9.0.0 | Runtime deprecation. |
| DEP0082: `REPLServer.prototype.memory()` | v9.0.0 | Runtime deprecation. |
| DEP0083: Disabling ECDH by setting `ecdhCurve` to `false` | v9.2.0 | Runtime deprecation. |
| DEP0085: AsyncHooks sensitive API | v9.4.0 | Runtime deprecation. |
| DEP0086: Remove `runInAsyncIdScope` | v9.4.0 | Runtime deprecation. |
| DEP0089: `require('node:assert')` | v9.9.0 | Documentation-only deprecation. |
| DEP0098: AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v9.6.0 | Runtime deprecation. |

## ## Node.js v8
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0002: `require('_linklist')` | v8.0.0 | End-of-Life. |
| DEP0009: `crypto.pbkdf2` without digest | v8.0.0 | End-of-Life (for `digest === undefined`). |
| DEP0014: `fs.read` legacy String interface | v8.0.0 | End-of-Life. |
| DEP0015: `fs.readSync` legacy String interface | v8.0.0 | End-of-Life. |
| DEP0043: `tls.SecurePair` | v8.0.0 | Runtime deprecation. |
| DEP0061: `fs.SyncWriteStream` | v8.0.0 | Runtime deprecation. |
| DEP0062: `node --debug` | v8.0.0 | Runtime deprecation. |
| DEP0063: `ServerResponse.prototype.writeHeader()` | v8.0.0 | Documentation-only deprecation. |
| DEP0064: `tls.createSecurePair()` | v8.0.0 | Runtime deprecation. |
| DEP0065: `repl.REPL_MODE_MAGIC` and `NODE_REPL_MODE=magic` | v8.0.0 | Documentation-only deprecation. |
| DEP0066: `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v8.0.0 | Documentation-only deprecation. |
| DEP0067: `OutgoingMessage.prototype._renderHeaders` | v8.0.0 | Documentation-only deprecation. |
| DEP0068: `node debug` | v8.0.0 | Runtime deprecation. |
| DEP0069: `vm.runInDebugContext(string)` | v8.0.0 | Documentation-only deprecation. |
| DEP0070: `async_hooks.currentId()` | v8.2.0 | Runtime deprecation. |
| DEP0071: `async_hooks.triggerId()` | v8.2.0 | Runtime deprecation. |
| DEP0072: `async_hooks.AsyncResource.triggerId()` | v8.2.0 | Runtime deprecation. |
| DEP0076: `tls.parseCertString()` | v8.6.0 | Documentation-only deprecation. |
| DEP0079: Custom inspection function on objects via `.inspect()` | v8.7.0 | Documentation-only deprecation. |
| DEP0085: AsyncHooks sensitive API | v8.10.0 | Runtime deprecation. |
| DEP0086: Remove `runInAsyncIdScope` | v8.10.0 | Runtime deprecation. |
| DEP0089: `require('node:assert')` | v8.13.0 | Documentation-only deprecation. |
| DEP0098: AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v8.12.0 | Runtime deprecation. |

## ## Node.js v7
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0007: Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v7.0.0 | Runtime deprecation. |
| DEP0013: `fs` asynchronous function without callback | v7.0.0 | Runtime deprecation. |
| DEP0017: `Intl.v8BreakIterator` | v7.0.0 | Runtime deprecation. |
| DEP0018: Unhandled promise rejections | v7.0.0 | Runtime deprecation. |
| DEP0022: `os.tmpDir()` | v7.0.0 | Runtime deprecation. |
| DEP0024: `REPLServer.prototype.convertToContext()` | v7.0.0 | Runtime deprecation. |
| DEP0040: `node:punycode` module | v7.0.0 | Documentation-only deprecation. |
| DEP0061: `fs.SyncWriteStream` | v7.0.0 | Documentation-only deprecation. |

## ## Node.js v6
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0001: `http.OutgoingMessage.prototype.flush` | v6.12.0 | A deprecation code has been assigned. |
| DEP0002: `require('_linklist')` | v6.12.0 | A deprecation code has been assigned. |
| DEP0003: `_writableState.buffer` | v6.12.0 | A deprecation code has been assigned. |
| DEP0004: `CryptoStream.prototype.readyState` | v6.12.0 | A deprecation code has been assigned. |
| DEP0005: `Buffer()` constructor | v6.12.0 | A deprecation code has been assigned. |
| DEP0005: `Buffer()` constructor | v6.0.0 | Documentation-only deprecation. |
| DEP0006: `child_process` `options.customFds` | v6.12.0 | A deprecation code has been assigned. |
| DEP0007: Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v6.12.0 | A deprecation code has been assigned. |
| DEP0007: Replace `cluster` `worker.suicide` with `worker.exitedAfterDisconnect` | v6.0.0 | Documentation-only deprecation. |
| DEP0008: `require('node:constants')` | v6.12.0 | A deprecation code has been assigned. |
| DEP0008: `require('node:constants')` | v6.3.0 | Documentation-only deprecation. |
| DEP0009: `crypto.pbkdf2` without digest | v6.12.0 | A deprecation code has been assigned. |
| DEP0009: `crypto.pbkdf2` without digest | v6.0.0 | Runtime deprecation (for `digest === undefined`). |
| DEP0010: `crypto.createCredentials` | v6.12.0 | A deprecation code has been assigned. |
| DEP0011: `crypto.Credentials` | v6.12.0 | A deprecation code has been assigned. |
| DEP0012: `Domain.dispose` | v6.12.0 | A deprecation code has been assigned. |
| DEP0014: `fs.read` legacy String interface | v6.12.0 | A deprecation code has been assigned. |
| DEP0014: `fs.read` legacy String interface | v6.0.0 | Runtime deprecation. |
| DEP0015: `fs.readSync` legacy String interface | v6.12.0 | A deprecation code has been assigned. |
| DEP0015: `fs.readSync` legacy String interface | v6.0.0 | Runtime deprecation. |
| DEP0016: `GLOBAL`/`root` | v6.12.0 | A deprecation code has been assigned. |
| DEP0016: `GLOBAL`/`root` | v6.0.0 | Runtime deprecation. |
| DEP0019: `require('.')` resolved outside directory | v6.12.0 | A deprecation code has been assigned. |
| DEP0020: `Server.connections` | v6.12.0 | A deprecation code has been assigned. |
| DEP0021: `Server.listenFD` | v6.12.0 | A deprecation code has been assigned. |
| DEP0023: `os.getNetworkInterfaces()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0025: `require('node:sys')` | v6.12.0 | A deprecation code has been assigned. |
| DEP0026: `util.print()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0027: `util.puts()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0028: `util.debug()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0029: `util.error()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0030: `SlowBuffer` | v6.12.0 | A deprecation code has been assigned. |
| DEP0030: `SlowBuffer` | v6.0.0 | Documentation-only deprecation. |
| DEP0031: `ecdh.setPublicKey()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0032: `node:domain` module | v6.12.0 | A deprecation code has been assigned. |
| DEP0033: `EventEmitter.listenerCount()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0034: `fs.exists(path, callback)` | v6.12.0 | A deprecation code has been assigned. |
| DEP0035: `fs.lchmod(path, mode, callback)` | v6.12.0 | A deprecation code has been assigned. |
| DEP0036: `fs.lchmodSync(path, mode)` | v6.12.0 | A deprecation code has been assigned. |
| DEP0037: `fs.lchown(path, uid, gid, callback)` | v6.12.0 | A deprecation code has been assigned. |
| DEP0038: `fs.lchownSync(path, uid, gid)` | v6.12.0 | A deprecation code has been assigned. |
| DEP0039: `require.extensions` | v6.12.0 | A deprecation code has been assigned. |
| DEP0041: `NODE_REPL_HISTORY_FILE` environment variable | v6.12.0 | A deprecation code has been assigned. |
| DEP0042: `tls.CryptoStream` | v6.12.0 | A deprecation code has been assigned. |
| DEP0043: `tls.SecurePair` | v6.12.0 | A deprecation code has been assigned. |
| DEP0043: `tls.SecurePair` | v6.0.0 | Documentation-only deprecation. |
| DEP0044: `util.isArray()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0045: `util.isBoolean()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0046: `util.isBuffer()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0047: `util.isDate()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0048: `util.isError()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0049: `util.isFunction()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0050: `util.isNull()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0051: `util.isNullOrUndefined()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0052: `util.isNumber()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0053: `util.isObject()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0054: `util.isPrimitive()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0055: `util.isRegExp()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0056: `util.isString()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0057: `util.isSymbol()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0058: `util.isUndefined()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0059: `util.log()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0059: `util.log()` | v6.0.0 | Documentation-only deprecation. |
| DEP0060: `util._extend()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0060: `util._extend()` | v6.0.0 | Documentation-only deprecation. |
| DEP0064: `tls.createSecurePair()` | v6.12.0 | A deprecation code has been assigned. |
| DEP0064: `tls.createSecurePair()` | v6.0.0 | Documentation-only deprecation. |

## ## Node.js v5
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0002: `require('_linklist')` | v5.0.0 | Runtime deprecation. |
| DEP0031: `ecdh.setPublicKey()` | v5.2.0 | Documentation-only deprecation. |

## ## Node.js v4
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0001: `http.OutgoingMessage.prototype.flush` | v4.8.6 | A deprecation code has been assigned. |
| DEP0003: `_writableState.buffer` | v4.8.6 | A deprecation code has been assigned. |
| DEP0004: `CryptoStream.prototype.readyState` | v4.8.6 | A deprecation code has been assigned. |
| DEP0006: `child_process` `options.customFds` | v4.8.6 | A deprecation code has been assigned. |
| DEP0010: `crypto.createCredentials` | v4.8.6 | A deprecation code has been assigned. |
| DEP0011: `crypto.Credentials` | v4.8.6 | A deprecation code has been assigned. |
| DEP0012: `Domain.dispose` | v4.8.6 | A deprecation code has been assigned. |
| DEP0014: `fs.read` legacy String interface | v4.8.6 | A deprecation code has been assigned. |
| DEP0015: `fs.readSync` legacy String interface | v4.8.6 | A deprecation code has been assigned. |
| DEP0019: `require('.')` resolved outside directory | v4.8.6 | A deprecation code has been assigned. |
| DEP0020: `Server.connections` | v4.8.6 | A deprecation code has been assigned. |
| DEP0021: `Server.listenFD` | v4.8.6 | A deprecation code has been assigned. |
| DEP0023: `os.getNetworkInterfaces()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0025: `require('node:sys')` | v4.8.6 | A deprecation code has been assigned. |
| DEP0026: `util.print()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0027: `util.puts()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0028: `util.debug()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0029: `util.error()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0032: `node:domain` module | v4.8.6 | A deprecation code has been assigned. |
| DEP0033: `EventEmitter.listenerCount()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0034: `fs.exists(path, callback)` | v4.8.6 | A deprecation code has been assigned. |
| DEP0035: `fs.lchmod(path, mode, callback)` | v4.8.6 | A deprecation code has been assigned. |
| DEP0036: `fs.lchmodSync(path, mode)` | v4.8.6 | A deprecation code has been assigned. |
| DEP0037: `fs.lchown(path, uid, gid, callback)` | v4.8.6 | A deprecation code has been assigned. |
| DEP0038: `fs.lchownSync(path, uid, gid)` | v4.8.6 | A deprecation code has been assigned. |
| DEP0039: `require.extensions` | v4.8.6 | A deprecation code has been assigned. |
| DEP0041: `NODE_REPL_HISTORY_FILE` environment variable | v4.8.6 | A deprecation code has been assigned. |
| DEP0042: `tls.CryptoStream` | v4.8.6 | A deprecation code has been assigned. |
| DEP0044: `util.isArray()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0044: `util.isArray()` | v4.0.0 | Documentation-only deprecation. |
| DEP0045: `util.isBoolean()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0045: `util.isBoolean()` | v4.0.0 | Documentation-only deprecation. |
| DEP0046: `util.isBuffer()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0046: `util.isBuffer()` | v4.0.0 | Documentation-only deprecation. |
| DEP0047: `util.isDate()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0047: `util.isDate()` | v4.0.0 | Documentation-only deprecation. |
| DEP0048: `util.isError()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0048: `util.isError()` | v4.0.0 | Documentation-only deprecation. |
| DEP0049: `util.isFunction()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0049: `util.isFunction()` | v4.0.0 | Documentation-only deprecation. |
| DEP0050: `util.isNull()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0050: `util.isNull()` | v4.0.0 | Documentation-only deprecation. |
| DEP0051: `util.isNullOrUndefined()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0051: `util.isNullOrUndefined()` | v4.0.0 | Documentation-only deprecation. |
| DEP0052: `util.isNumber()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0052: `util.isNumber()` | v4.0.0 | Documentation-only deprecation. |
| DEP0053: `util.isObject()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0053: `util.isObject()` | v4.0.0 | Documentation-only deprecation. |
| DEP0054: `util.isPrimitive()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0054: `util.isPrimitive()` | v4.0.0 | Documentation-only deprecation. |
| DEP0055: `util.isRegExp()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0055: `util.isRegExp()` | v4.0.0 | Documentation-only deprecation. |
| DEP0056: `util.isString()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0056: `util.isString()` | v4.0.0 | Documentation-only deprecation. |
| DEP0057: `util.isSymbol()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0057: `util.isSymbol()` | v4.0.0 | Documentation-only deprecation. |
| DEP0058: `util.isUndefined()` | v4.8.6 | A deprecation code has been assigned. |
| DEP0058: `util.isUndefined()` | v4.0.0 | Documentation-only deprecation. |

## ## Node.js v3
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0033: `EventEmitter.listenerCount()` | v3.2.0 | Documentation-only deprecation. |
| DEP0041: `NODE_REPL_HISTORY_FILE` environment variable | v3.0.0 | Documentation-only deprecation. |
| DEP0044: `util.isArray()` | v3.3.1 | Documentation-only deprecation. |
| DEP0045: `util.isBoolean()` | v3.3.1 | Documentation-only deprecation. |
| DEP0046: `util.isBuffer()` | v3.3.1 | Documentation-only deprecation. |
| DEP0047: `util.isDate()` | v3.3.1 | Documentation-only deprecation. |
| DEP0048: `util.isError()` | v3.3.1 | Documentation-only deprecation. |
| DEP0049: `util.isFunction()` | v3.3.1 | Documentation-only deprecation. |
| DEP0050: `util.isNull()` | v3.3.1 | Documentation-only deprecation. |
| DEP0051: `util.isNullOrUndefined()` | v3.3.1 | Documentation-only deprecation. |
| DEP0052: `util.isNumber()` | v3.3.1 | Documentation-only deprecation. |
| DEP0053: `util.isObject()` | v3.3.1 | Documentation-only deprecation. |
| DEP0054: `util.isPrimitive()` | v3.3.1 | Documentation-only deprecation. |
| DEP0055: `util.isRegExp()` | v3.3.1 | Documentation-only deprecation. |
| DEP0056: `util.isString()` | v3.3.1 | Documentation-only deprecation. |
| DEP0057: `util.isSymbol()` | v3.3.1 | Documentation-only deprecation. |
| DEP0058: `util.isUndefined()` | v3.3.1 | Documentation-only deprecation. |

## ## Node.js v1
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0001: `http.OutgoingMessage.prototype.flush` | v1.6.0 | Runtime deprecation. |
| DEP0019: `require('.')` resolved outside directory | v1.8.1 | Runtime deprecation. |
| DEP0025: `require('node:sys')` | v1.0.0 | Runtime deprecation. |
| DEP0032: `node:domain` module | v1.4.2 | Documentation-only deprecation. |
| DEP0034: `fs.exists(path, callback)` | v1.0.0 | Documentation-only deprecation. |

## ## Node.js v0
| Display Name | Version | Deprecation Type |
| --- | --- | --- |
| DEP0003: `_writableState.buffer` | v0.11.15 | Runtime deprecation. |
| DEP0004: `CryptoStream.prototype.readyState` | v0.4.0 | Documentation-only deprecation. |
| DEP0006: `child_process` `options.customFds` | v0.11.14 | Runtime deprecation. |
| DEP0006: `child_process` `options.customFds` | v0.5.10 | Documentation-only deprecation. |
| DEP0010: `crypto.createCredentials` | v0.11.13 | Runtime deprecation. |
| DEP0011: `crypto.Credentials` | v0.11.13 | Runtime deprecation. |
| DEP0012: `Domain.dispose` | v0.11.7 | Runtime deprecation. |
| DEP0014: `fs.read` legacy String interface | v0.1.96 | Documentation-only deprecation. |
| DEP0015: `fs.readSync` legacy String interface | v0.1.96 | Documentation-only deprecation. |
| DEP0020: `Server.connections` | v0.9.7 | Runtime deprecation. |
| DEP0021: `Server.listenFD` | v0.7.12 | Runtime deprecation. |
| DEP0023: `os.getNetworkInterfaces()` | v0.6.0 | Runtime deprecation. |
| DEP0026: `util.print()` | v0.11.3 | Runtime deprecation. |
| DEP0027: `util.puts()` | v0.11.3 | Runtime deprecation. |
| DEP0028: `util.debug()` | v0.11.3 | Runtime deprecation. |
| DEP0029: `util.error()` | v0.11.3 | Runtime deprecation. |
| DEP0035: `fs.lchmod(path, mode, callback)` | v0.4.7 | Documentation-only deprecation. |
| DEP0036: `fs.lchmodSync(path, mode)` | v0.4.7 | Documentation-only deprecation. |
| DEP0037: `fs.lchown(path, uid, gid, callback)` | v0.4.7 | Documentation-only deprecation. |
| DEP0038: `fs.lchownSync(path, uid, gid)` | v0.4.7 | Documentation-only deprecation. |
| DEP0039: `require.extensions` | v0.10.6 | Documentation-only deprecation. |
| DEP0042: `tls.CryptoStream` | v0.11.3 | Documentation-only deprecation. |
| DEP0043: `tls.SecurePair` | v0.11.15 | Deprecation revoked. |
| DEP0043: `tls.SecurePair` | v0.11.3 | Runtime deprecation. |
| DEP0064: `tls.createSecurePair()` | v0.11.15 | Deprecation revoked. |
| DEP0064: `tls.createSecurePair()` | v0.11.3 | Runtime deprecation. |
| DEP0100: `process.assert()` | v0.3.7 | Documentation-only deprecation. |
