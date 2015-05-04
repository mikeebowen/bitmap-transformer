'use strics';

exports = module.exports = {};
// require chai
var expect = require('chai').expect;
// require fs
var fs = require('fs');
var headerReader = require('../lib/headerReader.js');
var bitmap = fs.readFile('../img/bitmap1.bmp');
