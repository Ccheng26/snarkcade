

const remote = require('electron').remote
const main = remote.require('./main.js')


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
