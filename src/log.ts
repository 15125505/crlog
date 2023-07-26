// Create by zhoufeng
// Description: 日志模块
// Date: 2023-07-07 09:52


export default class Log {
    static debug(...args: any[]) {
        Log.colorOut(args, 37);
    }

    static log(...args: any[]) {
        Log.colorOut(args, 32);
    }

    static info(...args: any[]) {
        Log.colorOut(args, 36);
    }

    static warn(...args: any[]) {
        Log.colorOut(args, 33);
    }

    static error(...args: any[]) {
        Log.colorOut(args, 31);
    }

    private static colorOut(args: any[], crText: number) {
        const crBegin = '\x1b[0;' + crText + 'm';
        const crEnd = '\x1b[0m';
        if (this.showStack) {
            const ret = /Error.*?at.*?at.*?at\s+?(\S+?)\s+?.*?[\\/]([^\\/]+?)\)/ms.exec(new Error().stack);
            if (ret) {
                args.unshift(`${ret[1]} ${ret[2]}`)
            }
        }
        args.unshift(crBegin);
        args.push(crEnd);
        console.log(...args);
    }

    /**
     * 是否显示堆栈信息
     */
    static showStack = false;
}

export {Log};
