// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron');
var execPath = remote.process.execPath;

exports.loadAsar = function(filepath) {
    console.log(execPath, filepath)
    require('child_process').execFile(execPath, [filepath], {
        detached: true,
        stdio: 'ignore'
    }).unref();
}