'use strict';

var fs = require('fs');

exports = module.exports = {};

function write (file) {
  fs.writeFile('test.bmp', file, function (err, inputFile) {
      if(err) {
          throw err;
      } else {
        console.log('The file was saved!');
      }
  })
}

exports.write = write;
