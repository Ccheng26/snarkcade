// 'use strict';
// const electron = require('electron');
// const remote = require('electron').remote;
// const app = electron.app;

// // adds debug features like hotkeys for triggering dev tools and reload
// require('electron-debug')();

// // prevent window being garbage collected
// let mainWindow;

// function onClosed() {
// 	// dereference the window
// 	// for multiple windows store them in an array
// 	mainWindow = null;
// }

// function createMainWindow() {
// 	const win = new electron.BrowserWindow({
// 		width: 800,
// 		height: 600,
// 		frame: false,
// 		resizable: false
// 	});

// 	win.loadURL(`file://${__dirname}/app/index.html`);
// 	win.on('closed', onClosed);

// 	return win;
// }

// app.on('window-all-closed', () => {
// 	if (process.platform !== 'darwin') {
// 		app.quit();
// 	}
// });

// 	function minimizeWin(){
//     	var window = remote.getCurrentWindow();
//     window.minimize();
//   }

//  	function closeWin(){
//     var window = remote.getCurrentWindow();
//     window.close();
//   }

// app.on('activate', () => {
// 	if (!mainWindow) {
// 		mainWindow = createMainWindow();
// 	}
// });

// app.on('ready', () => {
// 	mainWindow = createMainWindow();
// });

// require the electron API
const electron = require('electron')
// electron is an object so we can pull off a few things off that object, like so:
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
// or you can use ES6 destructuring
const {app, BrowserWindow} = require('electron')

// call this function, on ready
app.on('ready', () => {
  // this will make a new browser window for us, with a width of 800 and height of 600, you can change these values if you'd like
  const mainWindow = new BrowserWindow({ width: 800, height:600})
  // this will load a window for us, you can put any url in here like 'http://google.com' or you can use a file path
  mainWindow.loadURL(`file://${__dirname}/app/index.html`)
  // file://${__dirname} checks in our local directory, remember to use backticks ` for this
  mainWindow.openDevTools();

})
