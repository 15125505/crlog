"use strict";
// Create by zhoufeng
// Description: 日志模块
// Date: 2023-07-07 09:52
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.colorOut(args, 37);
    };
    Log.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.colorOut(args, 32);
    };
    Log.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.colorOut(args, 36);
    };
    Log.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.colorOut(args, 33);
    };
    Log.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.colorOut(args, 31);
    };
    Log.colorOut = function (args, crText) {
        var crBegin = '\x1b[0;' + crText + 'm';
        var crEnd = '\x1b[0m';
        if (this.showStack) {
            var ret = /Error.*? at .*? at .*? at (\S+?)\s+?.*?[\\/]([^\\/]+?)\)/ms.exec(new Error().stack);
            if (ret) {
                args.unshift(ret[1] + " " + ret[2]);
            }
        }
        args.unshift(crBegin);
        args.push(crEnd);
        console.log.apply(console, args);
    };
    /**
     * 是否显示堆栈信息
     */
    Log.showStack = false;
    return Log;
}());
exports.Log = Log;
exports.default = Log;
//# sourceMappingURL=log.js.map