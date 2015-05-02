'use strict';

exports = module.exports = {};
var fs = require('fs');
var transformer = require('./transformer.js')
var writer = require('./writer.js');

function read (input) {
  fs.readFile(input, function (err, data) {
    // if there is a error throw the error
    if (err) {
      throw err;
    } else {
      // declare variables
      var changed;
      var temp = [];
      // loop over the buffer from the bitmap that has been input
      for (var i = 0; i < data.length; i++) {
        // declare variable to hold converted value
        var tmpData;
        // for each byte in the image, read it with readUInt8() and assign it to the tmpData variable
        tmpData = data.readUInt8(i);
        // push the read data to the temp array
        temp.push(tmpData);
      }
      // use the transformer.transform method on the temp array and assign it the the changed variable
      changed = transformer.transform(temp);
      // use new Buffer() to convert changed array into a buffer and assign it to the newBuffer variable
      var newBuffer = new Buffer(changed);
      // use the write method to write the newBuffer buffer to a file
      writer.write(newBuffer);
    }
  })
}
// export the read function
exports.read = read;



