'use strict';

var fs = require('fs');

function read (input) {
  fs.readFile(input, function (err, data) {
    if (err) {
      throw err;
    } else {
      var temp = data.toString('utf8', 0, 100);
      console.log(temp);
      return temp;
    }
  });
}

// read("../img/bitmap1.bmp");
exports.read = read;
