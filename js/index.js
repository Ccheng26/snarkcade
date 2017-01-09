// remote process, need to require from
const {remote} = require('electron')
// remote is requiring menu from main process
const {Menu, MenuItem} = remote
const main = remote.require('./main.js')
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
			label:'Game1',
			click: function() {
				}
		},
		{
			label:'Game2',
			click: function() {
				}
		},
		{
			label:'Game3',
			click: function() {
				}
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

var mikoButton = document.createElement('button')
mikoButton.textContent = 'Miko\'s Game'
mikoButton.addEventListener('click', () => {
  main.openMiko()
}, false)
document.body.appendChild(mikoButton)


var connieButton = document.createElement('button')
connieButton.textContent = 'Connie\'s Game'
connieButton.addEventListener('click', () => {
  main.openConnie()
}, false)
document.body.appendChild(connieButton)

var carsonButton = document.createElement('button')
carsonButton.textContent = 'Carson\'s Game'
carsonButton.addEventListener('click', () => {
  main.openCarson()
}, false)
document.body.appendChild(carsonButton)
