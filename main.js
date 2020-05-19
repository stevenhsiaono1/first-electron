const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', () =>{
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true,   // 如此在renderer.js可以調用nodejs的API
        }

    });

    mainWindow.loadFile('index.html');

    // 測試接收從renderer的訊息
    ipcMain.on('message', (event, arg)=>{
        console.log(arg);    //此時可以在command看到打印出來!
        // 收到後可以再跟sender說已收到
        event.sender.send('reply', 'hello from main!');
    });


    // 可以開兩個window
    // const secondWindow = new BrowserWindow({
    //     width: 400,
    //     height: 300,
    //     webPreferences:{
    //         nodeIntegration: true,   // 如此在renderer.js可以調用nodejs的API
    //     },
    //     parent:mainWindow   // 如此父窗口關閉  子窗口即關閉

    // });

    // secondWindow.loadFile('second.html');


});