'use strict';

const exec = require('child_process').exec;

function copyToClipboard(string, cb) {
    exec('printf ' + string + ' | pbcopy', cb);
}

module.exports = copyToClipboard;
