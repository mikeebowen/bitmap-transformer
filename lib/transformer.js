'use strict';

exports = module.exports = {};

function transform (arr) {
  for (var i = 54; i < arr.length; i++) {
    arr[i] = arr[i] / 2;
  }
  // console.log(arr);
  return arr;
}

exports.transform = transform;
