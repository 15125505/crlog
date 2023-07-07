export default class Log {
    static debug(...args: any[]): void;
    static log(...args: any[]): void;
    static info(...args: any[]): void;
    static warn(...args: any[]): void;
    static error(...args: any[]): void;
    private static color;
}
export { Log };
