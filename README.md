# snarkcade

Feeling a bout of nostalgia? You've come to the right place.

Snarkcade is desktop application based off old school game packs using the wonders of Electron.
which used to run on your parent's shiny flat donut things (we used to call them CDs).

## Built With
+ HTML, CSS, JavaScript
+ [Node.js](https://nodejs.org/en/)
+ [Electron](http://electron.atom.io/)
+ [jQuery](https://jquery.com/)

## Dependencies
+ [Node Package Manager](https://www.npmjs.com/)
+ [Electron](http://electron.atom.io/)

Electron FAQ
======

## Cool... well what is it?

**[Electron](http://electron.atom.io/)** (previously Atom Shell) is a framework that lets you make cross-platform desktop applications. Electron uses **[Chromium](https://www.chromium.org/)**, an open-source web browser project (Google Chrome is based off its source code) and **[Node.js](https://nodejs.org/en/)**.

## Perks
Since Electron utilizes Chromium, your desktop application can be created much like any other web application, through HTML, CSS, and JavaScript. Checking compatability for desktop programs on various operating systems takes time and energy that starving developers don't have, so Electron does this for us through rich JS API calls. Write it once, run it on everything. Electron also lets us interact with the local file system as a part of app packaging. Package implementation and testing is also simple with Node.js's package manager and runtime environment. The Node.js integration also lets us access low level systems from web pages.

## Sounds great! Why doesn't everyone use Electron?
Some reasons that people prefer not to use Electron are:
+ It's pretty big, especially when you're bundling Chromium with every update (compressed app size is around 40 MB)
+ Can't hit the Mac App Store and Windows Marketplace
+ Users have also reported that large applications effect performance (app bloating)

Alternatives
------
There are other applications you can use for desktop app creation. But the main competitor is [NW.js](https://nwjs.io/) (previously node-webkit project).
Some key differences are in NW.js are:
+ main entry point is a web page, you need to specify a url. In Electron, the entry point is a JS script. You create a browser window in the script file and load the HTML file using the API and listen to window events to quit the application. The APIs in Electron are lower level so you can use it for browser testing instead of Phantom JS.
+ Electron uses libchromium content instead of the whole Chromium's Content API.
+ patching Chromium is not required for Electron because of the way LibUV Loops are integrated


How do I do the things?
------

Working with the assumption you have some idea of how to use HTML, CSS, JavaScript and Node.js start by opening your desired directory.

Be sure to name your npm entry point to main.js, this will let electron know which script the main process is going to run
```
$ npm init
```

For global installations
```
$ npm install electron --g
```

To add to your package.json file.
```
$ npm install electron --save
```

Create a main.js file, in it start off by requiring the Electron API
```javascript
const electron = require('electron')
```

Electron is an object. We can pull off a few things off that object, like so:
```javascript
const app = electon.app
const BrowserWindow = electron.BrowserWindow
```
or you can use the hip cool things like ES6 destructuring
```javascript
const {app, BrowserWindow} = electron
```

This function will call the application on ready
You'll want to define the Browser Window size and load the content via the loadUrl method

+ You can put any url in here like 'http://google.com' or you can use a file path
```javascript
file://${__dirname}
```
+ Checks in our local directory, remember to use backticks ` for this
	 + This is where you'll render your page. Link your html page.

```javascript
app.on('ready', () => {
  let win = new BrowserWindow({ width: 800, height:600})
  win.loadURL(`file://${__dirname}/index.html`)
})
```

Man! That's a lot of things for set up... (TL;DR)
------
Tell me about it... well, here's quick
+ Here's a good list of [boiler plates](http://electron.atom.io/community/#boilerplates)
+ We've used and thus recommend cloning and forking [electron-quick-start](https://github.com/electron/electron-quick-start) repository.

Resources
------
+ We would've compiled a list of resources but someone else did it better at[awesome-electron](https://github.com/sindresorhus/awesome-electron)
+ Our Recommendations:
 + Kyle Robinson Young's Electron [videos](https://www.youtube.com/user/kylerobinsonyoung/search?query=electron) are really helpful for getting started from scratch

Builds the app for macOS, Linux, and Windows, using [electron-packager](https://github.com/electron-userland/electron-packager).


## License

MIT © [carson hyde](https://github.com/donutdespair/snarkcade)

## Contributors:
**_Name_** | **_LinkedIn_** | **_GitHub_** | **_Email_**
---------| -------------|------------|------------
Carson Hyde | [LinkedIn](https://www.linkedin.com/in/carsonmhyde) | [GitHub](https://github.com/donutdespair) |
Connie Cheng | [LinkedIn](https://www.linkedin.com/in/ccheng52) | [GitHub](https://github.com/Ccheng26/) |
Micheal Brandini | [LinkedIn](https://www.linkedin.com/in/) | [GitHub](https://github.com/) |
