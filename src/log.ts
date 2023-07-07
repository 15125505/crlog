// Create by zhoufeng
// Description: 日志模块
// Date: 2023-07-07 09:52


export default class Log {
    static debug(...args: any[]) {
        console.log(this.color(args.join(' '), 37));
    }

    static log(...args: any[]) {
        console.log(this.color(args.join(' '), 32));
    }

    static info(...args: any[]) {
        console.log(this.color(args.join(' '), 36));
    }

    static warn(...args: any[]) {
        console.log(this.color(args.join(' '), 33));
    }

    static error(...args: any[]) {
        console.log(this.color(args.join(' '), 31));
    }

    private static color(text: string, crText: number): string {
        let colorText = '\x1b[0;' + crText + 'm' + text + '\x1b[0m';
        if (this.showStack) {
            const ret = /Error.*?at.*?at.*?at\s+?(\S+?)\s+?.*?[\\/]([^\\/]+?)\)/ms.exec(new Error().stack);
            if (ret) {
                colorText = `${ret[1]} ${ret[2]} ` + colorText;
            }
        }
        return colorText;
    }

    /**
     * 是否显示堆栈信息
     */
    static showStack = false;
}

export {Log};
