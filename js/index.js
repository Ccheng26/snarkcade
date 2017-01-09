// remote process, need to require from
const {remote} = require('electron')
// remote is requiring menu from main process
const {Menu, MenuItem, dialog} = remote

// this is going to be an array, check the top left corner, it is the menu bar
remote.getCurrentWindow().removeAllListeners();
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
console.log("hi")
var mainWindow = remote.getCurrentWindow();

function min() {
	mainWindow.minimize();
};

function bye() {
	mainWindow.close();
};

 function game1() {
  mainWindow.loadURL(`file://${__dirname}/esperantoVortludo/index.html`)
	}
 function game2() {
  mainWindow.loadURL(`file://${__dirname}/dontBeLate/index.html`)
	}
 function game3() {
  mainWindow.loadURL(`file://${__dirname}/drumkit/index.html`)
	}
