# Dragonframe-seq-tool序列帧处理工具

------
##虽然这个软件应该没有什么人用，用的人也鲜有人的工作习惯如我，但是我还是写一下吧哈哈哈哈……

为定格动画软件**Dragonframe**辅助设计，是直接从**electron-quick-start**开始制作
的，如果需要了解**electron**请访问https://electronjs.org
如果你也想做一个，访问[Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start)


因为我有以下工作习惯：

> * 喜欢在dragonframe里面调摄影表
> * 在AE或PR中序列帧导入做后期
> * 不喜欢dragonframe中的导出方式和效果
> * 喜欢把所有镜头都放在一个take里面
> * 不希望图像质量有损失

所以，我直接找到Dragonframe工程文件中的照片源文件夹和摄影表，重新按照摄影表排序了序列帧的顺序。

目前还有一些问题：
> * 只支持.jpg的源文件
> * 肯定还有其他BUG
> * 其他的我再想想
> * 慢慢来



##使用方式：

```bash
# Clone this repository
git clone https://github.com/ToToMay/Dragonframe-Seq-Tool
# Go into the repository
cd Dragonframe-Seq-Tool
# Install dependencies
npm install
# Run the app
npm start
```
打开软件后，选择照片源文件夹（文件名通常是：`项目名_场景号_take号_X1`）和摄影表文件（文件名通常是：`take.xml`）就可以了。
如果有上千张图片的话，大概需要十分钟以上的等待缓存写入时间。



------



**我是坨坨美，这是我在github上的第一个代码**
*制作时间：从2019年10月29日——2019年11月1日*

------

##附electron-quick-start的使用说明：
**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

### To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

### Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs