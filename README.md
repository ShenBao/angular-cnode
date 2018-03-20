# Angular-Cnode

## 前言

 感谢cnodejs社区提供的API，感谢[Angular](https://angular.cn/)



 github地址：
 [https://github.com/ShenBao/angular-cnode.git](https://github.com/ShenBao/angular-cnode.git)

 反馈：
 [https://github.com/ShenBao/angular-cnode.git/issues](https://github.com/ShenBao/angular-cnode.git/issues) 

 预览：
 [https://ShenBao.github.io/angular-cnode](https://ShenBao.github.io/angular-cnode)

 二维码：

 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 <img src="./picture/qrcode.png" alt="code" width="150" height="150">

## TECHNOLOGY

```
- node           9.2.0
- npm            5.5.1
- Angular CLI：  1.5.5
- Angular：      5.0.0
- rxjs:          5.5.2
- typescript:    2.4.2
- tslint:        5.7.0
```

## USE

```
1. 克隆项目：                git clone https://github.com/ShenBao/angular-cnode.git
1. 安装依赖：                npm install
1. 启动服务：                ng serve --open  自动打开 `http://localhost:4200/`
1. 打包代码：                ng build --prod
```

## 组件拆分
```
- 页面
    - 首页                Home
    - 发布                Publish
    - 消息                Message
    - 我的(登录、未登录)   Mine
    - 登录                Login
    - 详情页              Detail
    - 关于                About

- 组件
    - loading
    - 底部主导航             navbar
    - 公共头部（左、文字、右）header
    - 左上角返回             header left
    - 浏览量
    - 评论个数
    - 精华
    - 置顶
    - 评论item
    - 评论组件

- 管道
    - xxxx前

```

##  功能
- 首页列表，上拉加载
- 主题详情，回复，点赞
- 消息列表
- 消息提醒
- 消息标记为已读
- 个人主页
- 用户信息
- 登录
- 退出
- 关于
- 页面后退，数据还原
- 页面后退，滚动位置还原
- ajax请求拦截器
- 页面跳转，不再执行此页面的ajax请求回调方法
- 启动图


## 项目目录说明

```

|-- e2e
|-- node_modules
|-- src                                                          // 源码目录
|   |-- app
|       |-- constants
|       |-- utils
|       |-- components
|       |-- pipe
|       |-- services
|        
|       |-- app.component.css
|       |-- app.component.html
|       |-- app.component.spec.ts
|       |-- app.component.ts
|       |-- app.module.ts
|       |-- app-routing.module.ts
|       
|   |-- assets
|       |--
|   |-- environments
|       |-- environment.prod.ts
|       |-- environment.ts
|   |-- favicon.ico
|   |-- index.html
|   |-- main.ts
|   |-- polyfills.ts
|   |-- styles.css
|   |-- test.ts
|   |-- tsconfig.app.json
|   |-- tsconfig.spec.json
|   |-- typings.d.ts
|
|-- .angular-cli.json
|-- .editorconfig
|-- karma.conf.js
|-- protractor.conf.js
|-- tsconfig.json
|-- tslint.json
|-- proxy.conf.json
|-- package.json                                                // 配置项目相关信息
|-- README.md                                                   // 项目说明
```

## 贡献

有任何意见或建议都欢迎提issue，或者直接提给[@ShenBao](mailto:shenbaoone@gmail.com)


## License

- Angular-Cnode is MIT licensed.