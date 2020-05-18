const {app, BrowserWindow} = require('electron')

app.on('ready', () =>{
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,   // 如此在renderer.js可以調用nodejs的API
        }

    });

    mainWindow.loadFile('index.html');

    const secondWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences:{
            nodeIntegration: true,   // 如此在renderer.js可以調用nodejs的API
        },
        parent:mainWindow   // 如此父窗口關閉  子窗口即關閉

    });

    secondWindow.loadFile('second.html');


});