'use strict';

exports = module.exports = {};

function transform (arr) {
  // transform the array starting from the item at index 54
  for (var i = 54; i < arr.length; i++) {
    arr[i] = arr[i] * Math.random();
  }
  return arr;
}

exports.transform = transform;
