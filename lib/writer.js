'use strict';

var fs = require('fs');
exports = module.exports = {};

function write (file) {
  // use the fs.writeFile() method to write the transformed image to a new file and either throw an error or console.log that the file saved
  fs.writeFile('new-bit-map.bmp', file, function (err, inputFile) {
      if(err) {
          throw err;
      } else {
        console.log('The file was saved!');
      }
  })
}
// export the write function
exports.write = write;
