//const { app, BrowserWindow, nativeImage } = require('electron')
const shutdown = require('electron-shutdown-command')
const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const extendedContextMenu = require('electron-context-menu');
const url = require('url')
const path = require('path')

function createWindow() {
  //require(path.join(__dirname, './server'))
  let mainWindow = new BrowserWindow({
    width: 800, // 窗口宽度
    height: 600, // 窗口高度
    //title: 'Electron', // 窗口标题,如果由loadURL()加载的HTML文件中含有标签<title>，该属性可忽略
    //icon: nativeImage.createFromPath('src/public/favicon.ico'), // "string" || nativeImage.createFromPath('src/image/icons/256x256.ico')从位于 path 的文件创建新的 NativeImage 实例
    webPreferences: {
      //nodeIntegration: true, // 是否启用node集成 渲染进程的内容有访问node的能力
      //webviewTag: true, // 是否使用<webview>标签 在一个独立的 frame 和进程里显示外部 web 内容
      //webSecurity: false, // 禁用同源策略
      //nodeIntegrationInSubFrames: true, // 是否允许在子页面(iframe)或子窗口(child window)中集成Node.js
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    fullscreenable: true,
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.setFullScreen(true)
  mainWindow.setSimpleFullScreen(true)
  // 加载应用 --打包react应用后，__dirname为当前文件路径
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, './build/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }));

  // 加载应用 --开发阶段  需要运行 npm run start
  mainWindow.loadURL('http://localhost:2997/')

  // 解决应用启动白屏问题
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  // 当窗口关闭时发出。在你收到这个事件后，你应该删除对窗口的引用，并避免再使用它。
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  ipcMain.on('minimize', (event, data) => {
    console.log(data)
    mainWindow.minimize()
  })
    ipcMain.on('close', (event, data) => {
      console.log(data)
       app.quit()
    })
  ipcMain.on('toggleDevTools', (e) => {
    //this.window.webContents.openDevTools()
    //getBrowserWindow().webContents.toggleDevTools()
    e.sender.toggleDevTools()
  })
  ipcMain.on('shutdown', (e) => {
  shutdown.shutdown(); 
  })


  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open', type: 'normal', click: function () {
        show(display);
      }
    },
    {
      label: 'Quit', type: 'normal', click: function () {
        app.isQuiting = true;
        app.quit();
      }
    }
  ])
  
  //add the context menu implemented in the plugin 
  extendedContextMenu({});
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
