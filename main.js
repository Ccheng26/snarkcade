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
  var mainWindow = new BrowserWindow({
 		width: 800,
		height: 600,
		frame: false,
		resizable: false})
  // this will load a window for us, you can put any url in here like 'http://google.com' or you can use a file path
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // file://${__dirname} checks in our local directory, remember to use backticks ` for this
  mainWindow.openDevTools();
  exports.openMiko= () => {
  let miko = mainWindow
  miko.loadURL(`file://${__dirname}/miko/index.html`)
	}

	exports.openConnie = () => {
 	 let connie = mainWindow
 	 connie.loadURL(`file://${__dirname}/connie/index.html`)
	}

	exports.openCarson= () => {
 	 let carson = mainWindow
 	 carson.loadURL(`file://${__dirname}/carson/index.html`)
	}

})
