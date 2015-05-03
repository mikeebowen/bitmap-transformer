'use strict';

exports = module.exports = {};

function transform (arr) {
  // transform the array starting from the item at index 54
  for (var i = 54; i < arr.length; i++) {
    // console.log(arr[i]);
    arr[i] = arr[i] * .9;
  }
  return arr;
}

exports.transform = transform;
