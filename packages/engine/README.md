<h1 align="center">LowCodeEngine</h1>

<div align="center">

一套面向扩展设计的企业级低代码技术体系

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url]

[![][issues-helper-image]][issues-helper-url] [![Issues need help][help-wanted-image]][help-wanted-url]

[![codecov][codecov-image-url]][codecov-url] [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/lowcode-workspace/awesome-lowcode-engine)

[npm-image]: https://img.shields.io/npm/v/@felce/lowcode-engine.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@felce/lowcode-engine
[download-image]: https://img.shields.io/npm/dm/@felce/lowcode-engine.svg?style=flat-square
[download-url]: https://npmjs.org/package/@felce/lowcode-engine
[help-wanted-image]: https://flat.badgen.net/github/label-issues/fe-lce/lowcode-engine/help%20wanted/open
[help-wanted-url]: https://github.com/fe-lce/lowcode-engine/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
[issues-helper-image]: https://img.shields.io/badge/using-issues--helper-orange?style=flat-square
[issues-helper-url]: https://github.com/actions-cool/issues-helper
[codecov-image-url]: https://codecov.io/gh/fe-lce/lowcode-engine/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/fe-lce/lowcode-engine

</div>

[![](https://img.alicdn.com/imgextra/i2/O1CN01UhoS7C1sNNhySvfWi_!!6000000005754-2-tps-2878-1588.png)](https://lowcode-engine.cn)

简体中文 | [English](packages/engine/README-en_US.md)

## ✨ 特性

- 🌈 提炼自企业级低代码平台的面向扩展设计的内核引擎，奉行最小内核，最强生态的设计理念
- 📦 开箱即用的高质量生态元素，包括 物料体系、设置器、插件 等
- ⚙️ 完善的工具链，支持 物料体系、设置器、插件 等生态元素的全链路研发周期
- 🔌 强大的扩展能力，已支撑 100+ 个各种类型低代码平台
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件

## 🎯 兼容环境

- 现代浏览器（Chrome >= 80, Edge >= 80, last 2 safari versions, last 2 firefox versions）

## 📚 引擎协议

引擎完整实现了《低代码引擎搭建协议规范》和《低代码引擎物料协议规范》，协议栈是低代码领域的物料能否流通的关键部分。

![image](https://img.alicdn.com/imgextra/i3/O1CN01IisBcy1dNBIg16QFM_!!6000000003723-2-tps-1916-1070.png)

## 🌰 使用示例

```bash
npm install @felce/lowcode-engine --save-dev
```

> **TIPS：仅支持 cdn 方式引入，npm 包用于提供 typings 等代码提示能力**

```ts
import { init, skeleton } from '@felce/lowcode-engine';

skeleton.add({
  area: 'topArea',
  type: 'Widget',
  name: 'logo',
  content: YourFantasticLogo,
  contentProps: {
    logo: 'https://img.alicdn.com/tfs/TB1_SocGkT2gK0jSZFkXXcIQFXa-66-66.png',
    href: '/',
  },
  props: {
    align: 'left',
    width: 100,
  },
});

init(document.getElementById('lce'));
```

### 工程化配置

```json
{
  "externals": {
    "@felce/lowcode-engine": "var window.AliLowCodeEngine",
    "@felce/lowcode-engine-ext": "var window.AliLowCodeEngineExt"
  }
}
```

### cdn 可选方式

#### unpkg

```html
https://unpkg.com/@felce/lowcode-engine@1.4.1/dist/js/engine-core.js
<!-- react画布 -->
https://unpkg.com/@felce/lowcode-react-simulator-renderer@1.4.1/dist/js/react-simulator-renderer.js
<!-- vue 画布 -->
https://unpkg.com/@felce/lowcode-vue-simulator-renderer@1.6.0/dist/vue-simulator-renderer.js
```

#### npmmirror

✨ 国内用户推荐

```html
https://registry.npmmirror.com/@felce/lowcode-engine/1.4.1/files/dist/js/engine-core.js
<!-- react画布 -->
https://registry.npmmirror.com/@felce/lowcode-react-simulator-renderer/1.4.1/files/dist/js/react-simulator-renderer.js
<!-- vue 画布 -->
https://registry.npmmirror.com/@felce/lowcode-vue-simulator-renderer/1.6.0/files/dist/vue-simulator-renderer.js
```

#### jsdelivr

```html
https://cdn.jsdelivr.net/npm/@felce/lowcode-engine@1.4.1/dist/js/engine-core.js
<!-- react画布 -->
https://cdn.jsdelivr.net/npm/@felce/lowcode-react-simulator-renderer@1.4.1/dist/js/react-simulator-renderer.js
<!-- vue 画布 -->
https://cdn.jsdelivr.net/npm/@felce/lowcode-vue-simulator-renderer@1.6.0/dist/react-simulator-renderer.js
```

## 🧺渲染器

| 工具名称                                                                       | 版本                                                                                   | 描述             |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---------------- |
| [@felce/lowcode-engine-ext][github-ext-url]                                    | [![NPM version][npm-ext-image]][npm-ext-url]                                           | 引擎设置器集     |
| [@felce/lowcode-react-renderer-core][github-react-renderer-core-url]           | [![NPM version][npm-react-renderer-core-image]][npm-react-renderer-core-url]           | React 渲染器核心 |
| [@felce/lowcode-react-renderer][github-react-renderer-url]                     | [![NPM version][npm-react-renderer-image]][npm-react-renderer-url]                     | React 渲染器     |
| [@felce/lowcode-react-simulator-renderer][github-react-simulator-renderer-url] | [![NPM version][npm-react-simulator-renderer-image]][npm-react-simulator-renderer-url] | React 渲染器画布 |
| [@felce/lowcode-vue-renderer-core][github-vue-renderer-core-url]               | [![NPM version][npm-vue-renderer-core-image]][npm-vue-renderer-core-url]               | Vue 渲染器核心   |
| [@felce/lowcode-vue-renderer][github-vue-renderer-url]                         | [![NPM version][npm-vue-renderer-image]][npm-vue-renderer-url]                         | Vue 渲染器       |
| [@felce/lowcode-vue-simulator-renderer][github-vue-simulator-renderer-url]     | [![NPM version][npm-vue-simulator-renderer-image]][npm-vue-simulator-renderer-url]     | Vue 渲染器画布   |

<!-- setter -->

[npm-ext-image]: https://img.shields.io/npm/v/@felce/lowcode-engine-ext.svg?style=flat-square
[npm-ext-url]: http://npmjs.org/package/@felce/lowcode-engine-ext
[github-ext-url]: https://github.com/fe-lce/lowcode-engine-ext
[download-ext-image]: https://img.shields.io/npm/dm/@felce/lowcode-engine-ext.svg?style=flat-square
[download-ext-url]: https://npmjs.org/package/@felce/lowcode-engine-ext

<!-- React 系列 -->

[npm-react-renderer-core-url]: http://npmjs.org/package/@felce/lowcode-react-renderer-core
[npm-react-renderer-core-image]: https://img.shields.io/npm/v/@felce/lowcode-react-renderer-core.svg?style=flat-square
[github-react-renderer-core-url]: https://github.com/fe-lce/lowcode-engine-react/tree/main/packages/renderer-core
[npm-react-renderer-url]: http://npmjs.org/package/@felce/lowcode-react-renderer
[npm-react-renderer-image]: https://img.shields.io/npm/v/@felce/lowcode-react-renderer.svg?style=flat-square
[github-react-renderer-url]: https://github.com/fe-lce/lowcode-engine-react/tree/main/packages/react-renderer
[npm-react-simulator-renderer-url]: http://npmjs.org/package/@felce/lowcode-react-simulator-renderer
[npm-react-simulator-renderer-image]: https://img.shields.io/npm/v/@felce/lowcode-react-simulator-renderer.svg?style=flat-square
[github-react-simulator-renderer-url]: https://github.com/fe-lce/lowcode-engine-react/tree/main/packages/react-simulator-renderer

<!-- Vue 系列 -->

[npm-vue-renderer-core-url]: http://npmjs.org/package/@felce/lowcode-vue-renderer-core
[npm-vue-renderer-core-image]: https://img.shields.io/npm/v/@felce/lowcode-vue-renderer-core.svg?style=flat-square
[github-vue-renderer-core-url]: https://github.com/fe-lce/lowcode-engine-vue/tree/main/packages/renderer-core
[npm-vue-renderer-url]: http://npmjs.org/package/@felce/lowcode-vue-renderer
[npm-vue-renderer-image]: https://img.shields.io/npm/v/@felce/lowcode-vue-renderer.svg?style=flat-square
[github-vue-renderer-url]: https://github.com/fe-lce/lowcode-engine-vue/tree/main/packages/vue-renderer
[npm-vue-simulator-renderer-url]: http://npmjs.org/package/@felce/lowcode-vue-simulator-renderer
[npm-vue-simulator-renderer-image]: https://img.shields.io/npm/v/@felce/lowcode-vue-simulator-renderer.svg?style=flat-square
[github-vue-simulator-renderer-url]: https://github.com/fe-lce/lowcode-engine-vue/tree/main/packages/vue-simulator-renderer

## 🔗 相关链接

- [官网首页](https://lowcode-engine.cn/)
- [Demo 马上玩](https://lowcode-engine.cn/demo) | [引擎 Demo 仓库](https://github.com/fe-lce/lowcode-demo)
- [阿里物料](https://github.com/fe-lce/lowcode-materials)
- [官方设置器（setter）](https://github.com/fe-lce/lowcode-engine-ext)
- [官方插件（plugin）](https://github.com/fe-lce/lowcode-plugins)
- [生态元素（物料、setter、插件）工具链](https://lowcode-engine.cn/site/docs/guide/expand/editor/cli)
- [用户文档](https://lowcode-engine.cn/doc)
- [API](https://lowcode-engine.cn/site/docs/api/)

[awesome-lowcode-engine](https://github.com/lowcode-workspace/awesome-lowcode-engine) 中包含了一系列围绕引擎建设的工具、解决方案等，如果你有类似的解决方案或者工具，欢迎提 PR 到该仓库，让更多人了解到

## 💻 本地调试

```bash
git clone git@github.com:fe-lce/lowcode-engine.git
cd lowcode-engine
npm install
npm run setup
npm start
```

> 📢 npm 访问速度较慢，建议使用 cnpm 或者指定镜像 registry。
>
> 📢 windows 环境必须使用 [WSL](https://docs.microsoft.com/zh-cn/windows/wsl/install)，其他终端不保证能正常运行

lowcode-engine 启动后，提供了几个 umd 文件，可以结合 [lowcode-demo](https://github.com/fe-lce/lowcode-demo) 项目做调试，文件代理规则参考[这里](https://lowcode-engine.cn/site/docs/participate/prepare#2-配置资源代理)。

## 🤝 参与共建

请先阅读：

1. [如何配置引擎调试环境？](https://lowcode-engine.cn/site/docs/participate/prepare)
2. [关于引擎的研发协作流程](https://lowcode-engine.cn/site/docs/participate/flow)
3. [引擎的工程化配置](https://lowcode-engine.cn/site/docs/participate/config)

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。（此段参考 [antd](https://github.com/ant-design/ant-design)）

关于提交 PR：
请将目标合并分支设置为 **develop**，不要指定 **main** 分支，在发布正式版本后，develop 分支将会合入 main 分支。

### 计划

当前主要任务：

- [ ] 修复积压问题
- [x] 修改namespace
- [x] 支持自定义workbentch
- [ ] 升级到react18
- [ ] 升级build-scripts（或者替换成vite）
- [ ] 合并vue画布和renderer到工程内部
- [ ] 核心模块重构，实现框架无关
- [ ] 独立内置插件，实现自定义加载
- [ ] 独立settings插件
- [ ] 优化渲染性能

## 声明

本工程 fork 于[alibaba/lowcode-engine](https://github.com/alibaba/lowcode-engine) （2024 年 9 月 6 日 v1.3.2）。

## 联系方式

微信搜索 kunsile-002 添加我的微信，或者扫码加群：

<img src="https://jxxg-wangjian.oss-cn-beijing.aliyuncs.com/static/lce-group-qrcode.jpg" width="200" />

## ❤️ 致谢

感谢所有为引擎项目贡献力量的同学们~

<p>
<a href="https://github.com/fe-lce/lowcode-engine/graphs/contributors"><img src="https://contrib.rocks/image?repo=fe-lce/lowcode-engine" /></a>
</p>
