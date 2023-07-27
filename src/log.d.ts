export default class Log {
    static debug(...args: any[]): void;
    static log(...args: any[]): void;
    static info(...args: any[]): void;
    static warn(...args: any[]): void;
    static error(...args: any[]): void;
    private static colorOut;
    /**
     * 是否显示堆栈信息
     */
    static showStack: boolean;
}
export { Log };
