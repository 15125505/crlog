# 一个用于在nodejs中美化日志输出的工具

下面是一个预览图

![preview](preview.png)

## 1. 安装

```shell
npm install crlog
```

## 2. 使用

```typescript
import Log from "crlog";

Log.debug('这是一条debug信息');
Log.log('这是一条log信息');
Log.info('这是一条info信息');
Log.warn('这是一条warn信息');
Log.error('这是一条error信息');
```

然后你就会看到这样的输出效果：

![preview](preview.png)
 
 
