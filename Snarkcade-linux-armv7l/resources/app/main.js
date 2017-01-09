// require the electron API
const electron = require('electron')
// electron is an object so we can pull off a few things off that object, like so:
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
// or you can use ES6 destructuring
const {app, BrowserWindow, Menu, MenuItem} = require('electron')

// call this function, on ready
app.on('ready', () => {
  // this will make a new browser window for us, with a width of 800 and height of 600, you can change these values if you'd like
  var mainWindow = new BrowserWindow({
 		width: 1024,
		height: 768,
		frame: false
	})
  // this will load a window for us, you can put any url in here like 'http://google.com' or you can use a file path

  // file://${__dirname} checks in our local directory, remember to use backticks ` for this
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  global.loadPage = function(path) {
  	mainWindow.removeAllListeners();
  	mainWindow.loadURL(`file://${__dirname}/${path}index.html`)
  }
const menu = new Menu.buildFromTemplate([
	{
		menu: 'snarkcade',
		submenu: [
		{
			label: 'Minimize',
			accelerator: 'CmdOrCtrl+M',
			role: 'minimize'
		},
		{
			label:'Main Menu',
			click: function() {
  			mainWindow.loadURL(`file://${__dirname}/index.html`)
			}
		},
		{
			label:'Esperanto Vortludo',
			click: function() {
				game1()
				}
		},
		{
			label:'Dont Be Late',
			click: function() {
				game2()
				}
		},
		{
			label:'Drumkit',
			click: function() {
				game3()
				}
		},
		{
			label: 'Close',
			accelerator: 'CmdOrCtrl+W',
			role: 'close'
		}
	]
	}
])

// attaches menu to application
Menu.setApplicationMenu(menu);


function min() {
	mainWindow.minimize();
};

function bye() {
	mainWindow.close();
};



 function game1() {
 	loadPage('esperantoVortludo/')
	}
 function game2() {
  loadPage('dontBeLate/')
	}
 function game3() {
  loadPage('drumkit/')
	}

  // mainWindow.openDevTools();
})
