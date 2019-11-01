const {  Menu } = require('electron')
const shell = require('electron').shell;

const template = [
{
  label: "Help and Issue",
  click: function () {shell.openExternal("https://github.com/ToToMay/Dragonframe-Seq-Tool")},
}]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu);
