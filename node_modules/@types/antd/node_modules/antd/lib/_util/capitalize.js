"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = capitalize;
function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }
  var ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}