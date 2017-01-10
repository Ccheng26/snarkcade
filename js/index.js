// remote process, need to require from
const {remote} = require('electron')
// remote is requiring menu from main process
const {Menu, MenuItem, dialog} = remote

// this is going to be an array, check the top left corner, it is the menu bar
const newPage = remote.getGlobal('loadPage');

var mainWindow = remote.getCurrentWindow();

function min() {
	mainWindow.minimize();
};

function bye() {
	mainWindow.close();
};


 function game2() {
  newPage('dontBeLate/')
	}
 function game3() {
  newPage('drumkit/')
	}
