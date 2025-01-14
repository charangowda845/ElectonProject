const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/renderer.js', // Preload for IPC
        },
    });

    // Load the first screen
    mainWindow.loadFile('pages/index.html');

    // Handle navigation between screens
    ipcMain.on('navigate-to-second', () => {
        mainWindow.loadFile('pages/second.html');
    });

    ipcMain.on('navigate-to-third', () => {
        mainWindow.loadFile('pages/third.html');
    });
    ipcMain.on('navigate-to-fourth', () => {
        mainWindow.loadFile('pages/fourth.html');
    });


    // coming back to old screen 
    ipcMain.on('navigate-to-first', () => {
        mainWindow.loadFile('pages/index.html');
    });

    ipcMain.on('navigate-to-second-from-third', () => {
        mainWindow.loadFile('pages/second.html');
    });
    ipcMain.on('navigate-to-third-from-fourth', () => {
        mainWindow.loadFile('pages/third.html');
    });
});
