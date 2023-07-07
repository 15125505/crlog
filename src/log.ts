// Create by zhoufeng
// Description: 日志模块
// Date: 2023-07-07 09:52


export class Log {
    static debug(...args: any[]) {
        console.log(...args);
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
        if (crText < 30 || crText > 37) {
            return text;
        }
        return '\x1b[0;' + crText + 'm' + text + '\x1b[0m';
    }

}
