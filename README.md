# vscode插件开发学习及实践

## 开始

确保必要的工具都安装好了

> npm install -g yo generator-code

## 项目

### helloworld

国际惯例，简简单单的一个hello world

### deleteFunction

按照资料2实现的，删除光标位置的函数的扩展

## 注意

- 此项目不能在其它子项目中跑，因为`.vscode`配置可能会互相影响导致跑不起来
- 由于这里此项目包含了多个扩展，所以将debug配置放在了`.vscode/launch.json`根目录位置，否则会相互相互影响

![](https://p.ipic.vip/zwt1od.png)

## 资料

- [一个中文文档](https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/)
- [编写一个 Vscode 插件 | 从创建到发布 |一键删除函数- 教程视频](https://www.bilibili.com/video/BV1bG4y1n78A/)
