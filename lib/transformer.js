'use strict';

exports = module.exports = {};

function transform (arr) {
  // transform the array starting from the item at index 54
  for (var i = 54; i < arr.length; i++) {
    arr[i] = 255 - arr[i];
  }
  return arr;
}

exports.transform = transform;
