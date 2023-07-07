// Create by zhoufeng
// Description: test
// Date: 2023-07-07 17:56

import Log from "./src/log";

Log.showStack = true;

Log.debug('这是一条debug信息');
Log.log('这是一条log信息');
Log.info('这是一条info信息');
Log.warn('这是一条warn信息');
Log.error('这是一条error信息');

// const str = `Error
//     at Log.color (Y:\\_node\\tlog\\src\\log.js:52:25)
//     at Log.error (Y:\\_node\\tlog\\src\\log.js:43:26)
//     at Object.<anonymous> (Y:\\_node\\tlog\\test.js:12:15)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47`;
//
// const ret = /Error.*?at.*?at.*?at\s+?(\S+?)\s+?.+?[\\/]([^\\/]*?)\)/ms.exec(str);
//
// ret && console.log('1', ret[1], 2, ret[2]);
