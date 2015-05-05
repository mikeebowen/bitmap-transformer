'use strict';

var fs = require('fs');
exports = module.exports = {};

function write (file, callback) {
  // use the fs.writeFile() method to write the transformed image to a new file and either throw an error or console.log that the file saved
  fs.writeFile('new-bit-map.bmp', file, function (err, inputFile) {
    if (err) {
      throw err;
    } else {
      if (typeof callback === 'function') {
        callback();
      }
    }
  });
}
// export the write function
exports.write = write;
