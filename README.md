# gmgn.ai 复刻


## Available Scripts


### 启动项目
```base
npm start
```

### 打包构建
```base
npm run build
```

### 发布github
```base
npm run deploy
```
### 目录结构
gmgn-clone
├── public           <span style="color:#999; margin-left: 80px;">不处理静态资源</span>
├── src              <span style="color:#999; margin-left: 102px;">源代码目录</span>
    ├── assets       <span style="color:#999; margin-left: 58px;">合约abi文件</span>
│   ├── assets       <span style="color:#999; margin-left: 58px;">静态资源</span>
│   ├── components   <span style="color:#999; margin-left: 15px;">公共组件</span>
│   ├── hooks        <span style="color:#999; margin-left: 60px;">常用hooks封装</span>
│   ├── pages        <span style="color:#999; margin-left: 60px;">常用页面组件</span>
│   ├── routes       <span style="color:#999; margin-left: 60px;">路由配置</span>
│   ├── store        <span style="color:#999; margin-left: 69px;">状态管理</span>
│   ├── styles       <span style="color:#999; margin-left: 60px;">全局样式</span>
│   ├── utils        <span style="color:#999; margin-left: 72px;">工具函数</span>
├── package.json
└── tailwind.config.js
# 📱  UX 流程文档

> 本文档用于指导 GMGN.AI Web 克隆项目的用户体验设计与前端开发，实现与原版一致的交互流程与页面结构。目标是快速开发并部署像素级还原版本，用于展示、演示或商业化 MVP。

---

## 🎯 一、用户画像（Persona）

| 属性       | 描述                                       |
|------------|--------------------------------------------|
| 目标用户   | 加密货币投资者、策略追随者、DeFi 玩家      |
| 技术水平   | 中高级（懂钱包连接、了解基础交易流程）     |
| 使用设备   | 以手机为主（移动优先设计），兼容桌面端     |
| 使用动机   | 快速跟随盈利策略，实现被动收益              |

---

## 📍 二、已实现部分（以下功能数据全部是mock）

- ✅ 连接加密钱包（MetaMask / WalletConnect）
- ✅ 断开连接 退出登录状态（清除token/登录态/断开钱包）
- ✅ 战壕/新币/热门/跟单/监控KOL 数据展示
- ✅ 我的钱包数据展示
- ✅ 首页chain 切换下拉（数据切换没实现没有真实接口）
- ✅ 点击登录注册按钮并弹出相应 Modal
- ✅ 登录和注册切换是去除动画保证动画混乱（正常点击有弹框动画） 
- ✅ 连接插件钱包交易 实现钱包连接（未来得及测试）


