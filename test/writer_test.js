/*'use strict';

exports = module.exports = {};
// require chai
var expect = require('chai').expect;
// require fs
var fs = require('fs');
var writer = require('../lib/writer.js');
// var originalImage = require('../img/bitmap1.bmp');
var image = fs.readFile('../new-bit-map.bmp');


describe('Test file creation', function () {
  before(function (done) {
    fs.readFile(image, function (error, data) {
      if (error) {
        throw error;
      }
      writer.write(data);
      done();
    });
  });
  it ('There should be a new file named new-bit-map.bmp', function() {
    expect(fs.exists('new-bit-map.bmp')).to.eql(true);
  });
});

*/
