'use strict';

exports = module.exports = {};
var fs = require('fs');

function readHeader (imageFile) {
  var headerData = {};
  headerData.type = imageFile.toString('utf-8', 0, 2);
  headerData.size = imageFile.readUInt32LE(14);
  headerData.width = imageFile.readUInt32LE(18);
  headerData.height = imageFile.readUInt32LE(32);
  headerData['number of color planes'] = imageFile.readUInt16LE(26);
  headerData['color depth'] = imageFile.readUInt16LE(28);
  headerData.compression = imageFile.readUInt32LE(30);
  headerData['image size'] = imageFile.readUInt32LE(34);
  headerData['horizontal resolution'] = imageFile.readUInt32LE(38);
  headerData['vertical resolution'] = imageFile.readUInt32LE(42);
  headerData['number of colors'] = imageFile.readUInt32LE(46);
  headerData['number of important colors'] = imageFile.readUInt32LE(50);
  // console.log('image size: ' + headerData['image size']);
  return headerData;
}

exports.readHeader = readHeader;
