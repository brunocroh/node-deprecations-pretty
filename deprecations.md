# Node.js Deprecations by Version

This document lists Node.js deprecations organized by major version.

## Node.js v25

Total Deprecations: **22**  
End-of-Life Deprecations: **19**

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

Total Deprecations: **18**  
End-of-Life Deprecations: **12**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0194](https://nodejs.org/api/deprecations.html#DEP0194) | HTTP/2 priority signaling | v24.2.0 | End-of-Life |
| [DEP0178](https://nodejs.org/api/deprecations.html#DEP0178) | `dirent.path` | v24.0.0 | End-of-Life |
| [DEP0081](https://nodejs.org/api/deprecations.html#DEP0081) | `fs.truncate()` using a file descriptor | v24.0.0 | End-of-Life |
| [DEP0121](https://nodejs.org/api/deprecations.html#DEP0121) | `net._setSimultaneousAccepts()` | v24.0.0 | End-of-Life |
| [DEP0066](https://nodejs.org/api/deprecations.html#DEP0066) | `OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames` | v24.0.0 | End-of-Life |
| [DEP0127](https://nodejs.org/api/deprecations.html#DEP0127) | `timers._unrefActive()` | v24.0.0 | End-of-Life |
| [DEP0126](https://nodejs.org/api/deprecations.html#DEP0126) | `timers.active()` | v24.0.0 | End-of-Life |
| [DEP0095](https://nodejs.org/api/deprecations.html#DEP0095) | `timers.enroll()` | v24.0.0 | End-of-Life |
| [DEP0096](https://nodejs.org/api/deprecations.html#DEP0096) | `timers.unenroll()` | v24.0.0 | End-of-Life |
| [DEP0064](https://nodejs.org/api/deprecations.html#DEP0064) | `tls.createSecurePair()` | v24.0.0 | End-of-Life |
| [DEP0043](https://nodejs.org/api/deprecations.html#DEP0043) | `tls.SecurePair` | v24.0.0 | End-of-Life |
| [DEP0122](https://nodejs.org/api/deprecations.html#DEP0122) | `tls` `Server.prototype.setOptions()` | v24.0.0 | End-of-Life |
| [DEP0200](https://nodejs.org/api/deprecations.html#DEP0200) | Closing fs.Dir on garbage collection | v24.9.0 | Documentation-only |
| [DEP0197](https://nodejs.org/api/deprecations.html#DEP0197) | `util.types.isNativeError()` | v24.2.0 | Documentation-only |
| [DEP0169](https://nodejs.org/api/deprecations.html#DEP0169) | Insecure url.parse() | v24.0.0 | Application |
| [DEP0184](https://nodejs.org/api/deprecations.html#DEP0184) | Instantiating `node:zlib` classes without `new` | v24.0.0 | Runtime |
| [DEP0190](https://nodejs.org/api/deprecations.html#DEP0190) | Passing `args` to `node:child_process` `execFile`/`spawn` with `shell` option `true` | v24.0.0 | Runtime |
| [DEP0187](https://nodejs.org/api/deprecations.html#DEP0187) | Passing invalid argument types to `fs.existsSync` | v24.0.0 | Runtime |

## Node.js v23

Total Deprecations: **20**  
End-of-Life Deprecations: **18**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0165](https://nodejs.org/api/deprecations.html#DEP0165) | `--trace-atomics-wait` | v23.0.0 | End-of-Life |
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
| [DEP0093](https://nodejs.org/api/deprecations.html#DEP0093) | `crypto.fips` is deprecated and replaced | v23.0.0 | Runtime |
| [DEP0182](https://nodejs.org/api/deprecations.html#DEP0182) | Short GCM authentication tags without explicit `authTagLength` | v23.0.0 | Runtime |

## Node.js v22

Total Deprecations: **15**  
End-of-Life Deprecations: **1**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0106](https://nodejs.org/api/deprecations.html#DEP0106) | `crypto.createCipher` and `crypto.createDecipher` | v22.0.0 | End-of-Life |
| [DEP0163](https://nodejs.org/api/deprecations.html#DEP0163) | `channel.subscribe(onMessage)`, `channel.unsubscribe(onMessage)` | v22.20.0 | Deprecation revoked |
| [DEP0199](https://nodejs.org/api/deprecations.html#DEP0199) | `require('node:_http_*')` | v22.19.0 | Documentation-only |
| [DEP0196](https://nodejs.org/api/deprecations.html#DEP0196) | Calling `node:child_process` functions with `options.shell` as an empty string | v22.17.0 | Documentation-only |
| [DEP0195](https://nodejs.org/api/deprecations.html#DEP0195) | Instantiating `node:http` classes without `new` | v22.17.0 | Documentation-only |
| [DEP0193](https://nodejs.org/api/deprecations.html#DEP0193) | `require('node:_stream_*')` | v22.17.0 | Runtime |
| [DEP0192](https://nodejs.org/api/deprecations.html#DEP0192) | `require('node:_tls_common')` and `require('node:_tls_wrap')` | v22.17.0 | Runtime |
| [DEP0191](https://nodejs.org/api/deprecations.html#DEP0191) | `repl.builtinModules` | v22.16.0 | Documentation-only |
| [DEP0188](https://nodejs.org/api/deprecations.html#DEP0188) | `process.features.ipv6` and `process.features.uv` | v22.13.0 | Documentation-only |
| [DEP0189](https://nodejs.org/api/deprecations.html#DEP0189) | `process.features.tls_*` | v22.13.0 | Documentation-only |
| [DEP0180](https://nodejs.org/api/deprecations.html#DEP0180) | `fs.Stats` constructor | v22.0.0 | Runtime |
| [DEP0179](https://nodejs.org/api/deprecations.html#DEP0179) | `Hash` constructor | v22.0.0 | Runtime |
| [DEP0181](https://nodejs.org/api/deprecations.html#DEP0181) | `Hmac` constructor | v22.0.0 | Runtime |
| [DEP0060](https://nodejs.org/api/deprecations.html#DEP0060) | `util._extend()` | v22.0.0 | Runtime |
| [DEP0044](https://nodejs.org/api/deprecations.html#DEP0044) | `util.isArray()` | v22.0.0 | Runtime |

## Node.js v21

Total Deprecations: **2**  
End-of-Life Deprecations: **0**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0040](https://nodejs.org/api/deprecations.html#DEP0040) | `node:punycode` module | v21.0.0 | Runtime |
| [DEP0174](https://nodejs.org/api/deprecations.html#DEP0174) | calling `promisify` on a function that returns a `Promise` | v21.0.0 | Runtime |

## Node.js v20

Total Deprecations: **5**  
End-of-Life Deprecations: **3**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0177](https://nodejs.org/api/deprecations.html#DEP0177) | `util.types.isWebAssemblyCompiledModule` | v20.12.0 | End-of-Life |
| [DEP0091](https://nodejs.org/api/deprecations.html#DEP0091) | `crypto.DEFAULT_ENCODING` | v20.0.0 | End-of-Life |
| [DEP0164](https://nodejs.org/api/deprecations.html#DEP0164) | `process.exit(code)`, `process.exitCode` coercion to integer | v20.0.0 | End-of-Life |
| [DEP0183](https://nodejs.org/api/deprecations.html#DEP0183) | OpenSSL engine-based APIs | v20.16.0 | Documentation-only |
| [DEP0175](https://nodejs.org/api/deprecations.html#DEP0175) | `util.toUSVString` | v20.8.0 | Documentation-only |

## Node.js v19

Total Deprecations: **3**  
End-of-Life Deprecations: **2**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0162](https://nodejs.org/api/deprecations.html#DEP0162) | `fs.write()`, `fs.writeFileSync()` coercion to string | v19.0.0 | End-of-Life |
| [DEP0150](https://nodejs.org/api/deprecations.html#DEP0150) | Changing the value of `process.config` | v19.0.0 | End-of-Life |
| [DEP0166](https://nodejs.org/api/deprecations.html#DEP0166) | Double slashes in imports and exports targets | v19.0.0 | Runtime |

## Node.js v18

Total Deprecations: **6**  
End-of-Life Deprecations: **4**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0153](https://nodejs.org/api/deprecations.html#DEP0153) | `dns.lookup` and `dnsPromises.lookup` options type coercion | v18.0.0 | End-of-Life |
| [DEP0159](https://nodejs.org/api/deprecations.html#DEP0159) | `ERR_INVALID_CALLBACK` | v18.0.0 | End-of-Life |
| [DEP0076](https://nodejs.org/api/deprecations.html#DEP0076) | `tls.parseCertString()` | v18.0.0 | End-of-Life |
| [DEP0157](https://nodejs.org/api/deprecations.html#DEP0157) | Thenable support in streams | v18.0.0 | End-of-Life |
| [DEP0116](https://nodejs.org/api/deprecations.html#DEP0116) | Legacy URL API | v18.13.0 | Deprecation revoked |
| [DEP0171](https://nodejs.org/api/deprecations.html#DEP0171) | Setters for `http.IncomingMessage` headers and trailers | v18.13.0 | Documentation-only |

## Node.js v17

Total Deprecations: **2**  
End-of-Life Deprecations: **1**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0148](https://nodejs.org/api/deprecations.html#DEP0148) | Folder mappings in `"exports"` (trailing `"/"`) | v17.0.0 | End-of-Life |
| [DEP0155](https://nodejs.org/api/deprecations.html#DEP0155) | Trailing slashes in pattern specifier resolutions | v17.0.0 | Runtime |

## Node.js v16

Total Deprecations: **10**  
End-of-Life Deprecations: **2**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0109](https://nodejs.org/api/deprecations.html#DEP0109) | `http`, `https`, and `tls` support for invalid URLs | v16.0.0 | End-of-Life |
| [DEP0130](https://nodejs.org/api/deprecations.html#DEP0130) | `Module.createRequireFromPath()` | v16.0.0 | End-of-Life |
| [DEP0167](https://nodejs.org/api/deprecations.html#DEP0167) | Weak `DiffieHellmanGroup` instances (`modp1`, `modp2`, `modp5`) | v16.18.0 | Documentation-only |
| [DEP0168](https://nodejs.org/api/deprecations.html#DEP0168) | Unhandled exception in Node-API callbacks | v16.17.0 | Runtime |
| [DEP0158](https://nodejs.org/api/deprecations.html#DEP0158) | `buffer.slice(start, end)` | v16.15.0 | Documentation-only |
| [DEP0161](https://nodejs.org/api/deprecations.html#DEP0161) | `process._getActiveRequests()` and `process._getActiveHandles()` | v16.15.0 | Documentation-only |
| [DEP0156](https://nodejs.org/api/deprecations.html#DEP0156) | `.aborted` property and `'abort'`, `'aborted'` event in `http` | v16.12.0 | Documentation-only |
| [DEP0149](https://nodejs.org/api/deprecations.html#DEP0149) | `http.IncomingMessage#connection` | v16.0.0 | Documentation-only |
| [DEP0151](https://nodejs.org/api/deprecations.html#DEP0151) | Main index lookup and extension searching | v16.0.0 | Runtime |
| [DEP0128](https://nodejs.org/api/deprecations.html#DEP0128) | modules with an invalid `main` entry and an `index.js` file | v16.0.0 | Runtime |

## Node.js v15

Total Deprecations: **9**  
End-of-Life Deprecations: **9**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0068](https://nodejs.org/api/deprecations.html#DEP0068) | `node debug` | v15.0.0 | End-of-Life |
| [DEP0074](https://nodejs.org/api/deprecations.html#DEP0074) | `REPLServer.bufferedCommand` | v15.0.0 | End-of-Life |
| [DEP0075](https://nodejs.org/api/deprecations.html#DEP0075) | `REPLServer.parseREPLKeyword()` | v15.0.0 | End-of-Life |
| [DEP0082](https://nodejs.org/api/deprecations.html#DEP0082) | `REPLServer.prototype.memory()` | v15.0.0 | End-of-Life |
| [DEP0078](https://nodejs.org/api/deprecations.html#DEP0078) | `REPLServer.turnOffEditorMode()` | v15.0.0 | End-of-Life |
| [DEP0020](https://nodejs.org/api/deprecations.html#DEP0020) | `Server.connections` | v15.0.0 | End-of-Life |
| [DEP0143](https://nodejs.org/api/deprecations.html#DEP0143) | `Transform._transformState` | v15.0.0 | End-of-Life |
| [DEP0018](https://nodejs.org/api/deprecations.html#DEP0018) | Unhandled promise rejections | v15.0.0 | End-of-Life |
| [DEP0124](https://nodejs.org/api/deprecations.html#DEP0124) | using `REPLServer.rli` | v15.0.0 | End-of-Life |

## Node.js v14

Total Deprecations: **10**  
End-of-Life Deprecations: **5**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0003](https://nodejs.org/api/deprecations.html#DEP0003) | `_writableState.buffer` | v14.0.0 | End-of-Life |
| [DEP0009](https://nodejs.org/api/deprecations.html#DEP0009) | `crypto.pbkdf2` without digest | v14.0.0 | End-of-Life |
| [DEP0016](https://nodejs.org/api/deprecations.html#DEP0016) | `GLOBAL`/`root` | v14.0.0 | End-of-Life |
| [DEP0001](https://nodejs.org/api/deprecations.html#DEP0001) | `http.OutgoingMessage.prototype.flush` | v14.0.0 | End-of-Life |
| [DEP0022](https://nodejs.org/api/deprecations.html#DEP0022) | `os.tmpDir()` | v14.0.0 | End-of-Life |
| [DEP0146](https://nodejs.org/api/deprecations.html#DEP0146) | `new crypto.Certificate()` | v14.9.0 | Documentation-only |
| [DEP0145](https://nodejs.org/api/deprecations.html#DEP0145) | `socket.bufferSize` | v14.6.0 | Documentation-only |
| [DEP0142](https://nodejs.org/api/deprecations.html#DEP0142) | `repl._builtinLibs` | v14.3.0 | Documentation-only |
| [DEP0141](https://nodejs.org/api/deprecations.html#DEP0141) | `repl.inputStream` and `repl.outputStream` | v14.3.0 | Documentation-only |
| [DEP0138](https://nodejs.org/api/deprecations.html#DEP0138) | `process.mainModule` | v14.0.0 | Documentation-only |

## Node.js v13

Total Deprecations: **2**  
End-of-Life Deprecations: **1**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0131](https://nodejs.org/api/deprecations.html#DEP0131) | Legacy HTTP parser | v13.0.0 | End-of-Life |
| [DEP0140](https://nodejs.org/api/deprecations.html#DEP0140) | Use `request.destroy()` instead of `request.abort()` | v13.14.0 | Documentation-only |

## Node.js v12

Total Deprecations: **22**  
End-of-Life Deprecations: **15**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0006](https://nodejs.org/api/deprecations.html#DEP0006) | `child_process` `options.customFds` | v12.0.0 | End-of-Life |
| [DEP0113](https://nodejs.org/api/deprecations.html#DEP0113) | `Cipher.setAuthTag()`, `Decipher.getAuthTag()` | v12.0.0 | End-of-Life |
| [DEP0114](https://nodejs.org/api/deprecations.html#DEP0114) | `crypto._toBuf()` | v12.0.0 | End-of-Life |
| [DEP0062](https://nodejs.org/api/deprecations.html#DEP0062) | `node --debug` | v12.0.0 | End-of-Life |
| [DEP0023](https://nodejs.org/api/deprecations.html#DEP0023) | `os.getNetworkInterfaces()` | v12.0.0 | End-of-Life |
| [DEP0019](https://nodejs.org/api/deprecations.html#DEP0019) | `require('.')` resolved outside directory | v12.0.0 | End-of-Life |
| [DEP0021](https://nodejs.org/api/deprecations.html#DEP0021) | `Server.listenFD` | v12.0.0 | End-of-Life |
| [DEP0028](https://nodejs.org/api/deprecations.html#DEP0028) | `util.debug()` | v12.0.0 | End-of-Life |
| [DEP0029](https://nodejs.org/api/deprecations.html#DEP0029) | `util.error()` | v12.0.0 | End-of-Life |
| [DEP0026](https://nodejs.org/api/deprecations.html#DEP0026) | `util.print()` | v12.0.0 | End-of-Life |
| [DEP0027](https://nodejs.org/api/deprecations.html#DEP0027) | `util.puts()` | v12.0.0 | End-of-Life |
| [DEP0098](https://nodejs.org/api/deprecations.html#DEP0098) | AsyncHooks embedder `AsyncResource.emitBefore` and `AsyncResource.emitAfter` APIs | v12.0.0 | End-of-Life |
| [DEP0117](https://nodejs.org/api/deprecations.html#DEP0117) | Native crypto handles | v12.0.0 | End-of-Life |
| [DEP0084](https://nodejs.org/api/deprecations.html#DEP0084) | requiring bundled internal dependencies | v12.0.0 | End-of-Life |
| [DEP0120](https://nodejs.org/api/deprecations.html#DEP0120) | Windows Performance Counter support | v12.0.0 | End-of-Life |
| [DEP0144](https://nodejs.org/api/deprecations.html#DEP0144) | `module.parent` | v12.19.0 | Documentation-only |
| [DEP0139](https://nodejs.org/api/deprecations.html#DEP0139) | `process.umask()` with no arguments | v12.19.0 | Documentation-only |
| [DEP0136](https://nodejs.org/api/deprecations.html#DEP0136) | `http` `finished` | v12.16.0 | Documentation-only |
| [DEP0133](https://nodejs.org/api/deprecations.html#DEP0133) | `http` `connection` | v12.12.0 | Documentation-only |
| [DEP0134](https://nodejs.org/api/deprecations.html#DEP0134) | `process._tickCallback` | v12.12.0 | Documentation-only |
| [DEP0089](https://nodejs.org/api/deprecations.html#DEP0089) | `require('node:assert')` | v12.8.0 | Deprecation revoked |
| [DEP0125](https://nodejs.org/api/deprecations.html#DEP0125) | `require('node:_stream_wrap')` | v12.0.0 | Runtime |

## Node.js v11

Total Deprecations: **10**  
End-of-Life Deprecations: **7**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0010](https://nodejs.org/api/deprecations.html#DEP0010) | `crypto.createCredentials` | v11.0.0 | End-of-Life |
| [DEP0011](https://nodejs.org/api/deprecations.html#DEP0011) | `crypto.Credentials` | v11.0.0 | End-of-Life |
| [DEP0105](https://nodejs.org/api/deprecations.html#DEP0105) | `decipher.finaltol` | v11.0.0 | End-of-Life |
| [DEP0061](https://nodejs.org/api/deprecations.html#DEP0061) | `fs.SyncWriteStream` | v11.0.0 | End-of-Life |
| [DEP0107](https://nodejs.org/api/deprecations.html#DEP0107) | `tls.convertNPNProtocols()` | v11.0.0 | End-of-Life |
| [DEP0079](https://nodejs.org/api/deprecations.html#DEP0079) | Custom inspection function on objects via `.inspect()` | v11.0.0 | End-of-Life |
| [DEP0090](https://nodejs.org/api/deprecations.html#DEP0090) | Invalid GCM authentication tag lengths | v11.0.0 | End-of-Life |
| [DEP0111](https://nodejs.org/api/deprecations.html#DEP0111) | `process.binding()` | v11.12.0 | Added support for `--pending-deprecation` |
| [DEP0115](https://nodejs.org/api/deprecations.html#DEP0115) | `crypto.prng()`, `crypto.pseudoRandomBytes()`, `crypto.rng()` | v11.0.0 | Documentation-only |
| [DEP0119](https://nodejs.org/api/deprecations.html#DEP0119) | `process.binding('uv').errname()` private API | v11.0.0 | Documentation-only |

## Node.js v10

Total Deprecations: **21**  
End-of-Life Deprecations: **12**

| Code | Display Name | Version | Deprecation Type |
| --- | --- | --- | --- |
| [DEP0101](https://nodejs.org/api/deprecations.html#DEP0101) | `--with-lttng` | v10.0.0 | End-of-Life |
| [DEP0004](https://nodejs.org/api/deprecations.html#DEP0004) | `CryptoStream.prototype.readyState` | v10.0.0 | End-of-Life |
| [DEP0013](https://nodejs.org/api/deprecations.html#DEP0013) | `fs` asynchronous function without callback | v10.0.0 | End-of-Life |
| [DEP0041](https://nodejs.org/api/deprecations.html#DEP0041) | `NODE_REPL_HISTORY_FILE` environment variable | v10.0.0 | End-of-Life |
| [DEP0065](https://nodejs.org/api/deprecations.html#DEP0065) | `repl.REPL_MODE_MAGIC` and `NODE_REPL_MODE=magic` | v10.0.0 | End-of-Life |
| [DEP0042](https://nodejs.org/api/deprecations.html#DEP0042) | `tls.CryptoStream` | v10.0.0 | End-of-Life |
| [DEP0069](https://nodejs.org/api/deprecations.html#DEP0069) | `vm.runInDebugContext(string)` | v10.0.0 | End-of-Life |
| [DEP0085](https://nodejs.org/api/deprecations.html#DEP0085) | AsyncHooks sensitive API | v10.0.0 | End-of-Life |
| [DEP0083](https://nodejs.org/api/deprecations.html#DEP0083) | Disabling ECDH by setting `ecdhCurve` to `false` | v10.0.0 | End-of-Life |
| [DEP0086](https://nodejs.org/api/deprecations.html#DEP0086) | Remove `runInAsyncIdScope` | v10.0.0 | End-of-Life |
| [DEP0073](https://nodejs.org/api/deprecations.html#DEP0073) | Several internal properties of `net.Server` | v10.0.0 | End-of-Life |
| [DEP0102](https://nodejs.org/api/deprecations.html#DEP0102) | Using `noAssert` in `Buffer#(read|write)` operations | v10.0.0 | End-of-Life |
| [DEP0103](https://nodejs.org/api/deprecations.html#DEP0103) | `process.binding('util').is[...]` typechecks | v10.9.0 | Superseded by [DEP0111](#DEP0111) |
| [DEP0037](https://nodejs.org/api/deprecations.html#DEP0037) | `fs.lchown(path, uid, gid, callback)` | v10.6.0 | Deprecation revoked |
| [DEP0038](https://nodejs.org/api/deprecations.html#DEP0038) | `fs.lchownSync(path, uid, gid)` | v10.6.0 | Deprecation revoked |
| [DEP0110](https://nodejs.org/api/deprecations.html#DEP0110) | `vm.Script` cached data | v10.6.0 | Documentation-only |
| [DEP0099](https://nodejs.org/api/deprecations.html#DEP0099) | Async context-unaware `node::MakeCallback` C++ APIs | v10.0.0 | Compile-time |
| [DEP0104](https://nodejs.org/api/deprecations.html#DEP0104) | `process.env` string coercion | v10.0.0 | Documentation-only |
| [DEP0092](https://nodejs.org/api/deprecations.html#DEP0092) | Top-level `this` bound to `module.exports` | v10.0.0 | Documentation-only |
| [DEP0005](https://nodejs.org/api/deprecations.html#DEP0005) | `Buffer()` constructor | v10.0.0 | Runtime |
| [DEP0097](https://nodejs.org/api/deprecations.html#DEP0097) | `MakeCallback` with `domain` property | v10.0.0 | Runtime |
