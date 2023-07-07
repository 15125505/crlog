// Create by zhoufeng
// Description: 用于实现控制台输出颜色的工具
// Date: 2023-07-05 17:32
//
// 前景色            背景色           颜色
// ---------------------------------------
// 30                40              黑色
// 31                41              红色
// 32                42              绿色
// 33                43              黃色
// 34                44              蓝色
// 35                45              紫红色
// 36                46              青蓝色
// 37                47              白色

export class Color {

    /**
     * 为字符串添加颜色
     */
    static color(text: string, crText: number): string {
        if (crText < 30 || crText > 37) {
            return text;
        }
        return '\x1b[0;' + crText + 'm' + text + '\x1b[0m';
    }
}
