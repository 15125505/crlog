// Create by zhoufeng
// Description: 日志模块
// Date: 2023-07-07 09:52

import {Color} from "./color";

export class z {
    static debug(...args: any[]) {
        console.log(...args);
    }

    static log(...args: any[]) {
        console.log(Color.fg(args.join(' '), 32));
    }

    static info(...args: any[]) {
        console.log(Color.fg(args.join(' '), 36));
    }

    static warn(...args: any[]) {
        console.log(Color.fg(args.join(' '), 33));
    }

    static error(...args: any[]) {
        console.log(Color.fg(args.join(' '), 31));
    }

}
