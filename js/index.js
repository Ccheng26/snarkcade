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

var esperantoButton = document.createElement('button')
esperantoButton.textContent = 'Esperanto Vortludo'
esperantoButton.addEventListener('click', () => {
  main.openEsperanto()
}, false)
document.body.appendChild(esperantoButton)


var dblButton = document.createElement('button')
dblButton.textContent = 'Don\'t Be Late'
dblButton.addEventListener('click', () => {
  main.openDbl()
}, false)
document.body.appendChild(dblButton)

var drumkitButton = document.createElement('button')
drumkitButton.textContent = 'Drum Kit'
drumkitButton.addEventListener('click', () => {
  main.openDrumkit()
}, false)
document.body.appendChild(drumkitButton)
