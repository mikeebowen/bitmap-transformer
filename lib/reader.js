'use strict';

exports = module.exports = {};
var fs = require('fs');
var transformer = require('./transformer.js')
var writer = require('./writer.js');

function read (input) {
  fs.readFile(input, function (err, data) {
    if (err) {
      throw err;
    } else {
      var changed;
      var temp = [];
      for (var i = 0; i < data.length; i++) {
        data[i] = data.readUInt8(i);
        temp.push(data[i]);
      }
      changed = transformer.transform(temp);
      var newBuffer = new Buffer(changed);
      writer.write(newBuffer);
    }
  });
}

exports.read = read;


// Uint32Array(buffer, 4, 4);


