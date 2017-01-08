// remote process, need to require from
const {remote} = require('electron')
// remote is requiring menu from main process
const {Menu, MenuItem} = remote

// this is going to be an array, check the top left corner, it is the menu bar
const menu = new Menu.buildFromTemplate([
	{
		menu: 'snarkcade',
		submenu: [
		{
			label: 'Close',
			accelerator: 'CmdOrCtrl+W',
			role: 'close'
		},
		{
			label: 'Minimize',
			accelerator: 'CmdOrCtrl+M',
			role: 'minimize'
		},
		{
			label:'Prefs',
			click: function() {
				}
		}
		]
	}
])

// attaches menu to application
Menu.setApplicationMenu(menu);
console.log("hi")

function min() {
	var mainWindow = remote.getCurrentWindow();
	mainWindow.minimize();
};

function bye() {
	var mainWindow = remote.getCurrentWindow();
	mainWindow.close();
};



