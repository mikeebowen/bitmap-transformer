'use strict';

exports = module.exports = {};
// require chai
var expect = require('chai').expect;
// require fs
var fs = require('fs');
var headerReader = require('../lib/headerReader.js');
var reader = require('../lib/reader.js').read;
var testObject;

describe('Test reader.js function', function () {
  before(function (done) {
    reader('./img/bitmap1.bmp', function () {
      fs.readFile('new-bit-map.bmp', function (error, data) {
      if (error) {
        throw error;
      }
      testObject = headerReader.readHeader(data);
      done();
    });
    });
  });
  it ('File type should be BM', function() {
    expect(testObject.type).to.equal('BM');
  });
});
