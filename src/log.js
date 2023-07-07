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
        console.log(this.color(args.join(' '), 37));
    };
    Log.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.color(args.join(' '), 32));
    };
    Log.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.color(args.join(' '), 36));
    };
    Log.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.color(args.join(' '), 33));
    };
    Log.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.color(args.join(' '), 31));
    };
    Log.color = function (text, crText) {
        var colorText = '\x1b[0;' + crText + 'm' + text + '\x1b[0m';
        if (this.showStack) {
            var ret = /Error.*?at.*?at.*?at\s+?(\S+?)\s+?.*?[\\/]([^\\/]+?)\)/ms.exec(new Error().stack);
            if (ret) {
                colorText = ret[1] + " " + ret[2] + " " + colorText;
            }
        }
        return colorText;
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