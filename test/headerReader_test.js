'use strict';

exports = module.exports = {};
// require chai
var expect = require('chai').expect;
// require fs
var fs = require('fs');
var headerReader = require('../lib/headerReader.js');
var image;
var testObject;

describe('Test bitmap image header info', function () {
  before(function (done) {
    image = fs.readFile('new-bit-map.bmp', function (error, data) {
      if (error) {
        throw error;
      }
      testObject = headerReader.readHeader(data);
      console.log('this should be something: ' + testObject.type);
      done();
    });
  });
  it ('File type should be BM', function() {
    expect(testObject.type).to.equal('BM');
  });
});
