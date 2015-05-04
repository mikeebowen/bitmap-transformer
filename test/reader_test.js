'use strict';

exports = module.exports = {};
// require chai
var expect = require('chai').expect;
// require fs
var fs = require('fs');
var reader = require('../lib/reader.js').read;
var testImage;

describe('Test reader.js function', function () {
  before(function (done) {
    reader('./img/bitmap1.bmp');
    done();
  });
  it ('There should be a new file named new-bit-map.bmp', function() {
    expect(fs.existsSync('./new-bit-map.bmp')).to.eql(true);
  });
});

