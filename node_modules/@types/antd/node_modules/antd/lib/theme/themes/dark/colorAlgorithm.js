"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSolidColor = exports.getAlphaColor = void 0;
var _tinycolor = require("@ctrl/tinycolor");
var getAlphaColor = function getAlphaColor(baseColor, alpha) {
  return new _tinycolor.TinyColor(baseColor).setAlpha(alpha).toRgbString();
};
exports.getAlphaColor = getAlphaColor;
var getSolidColor = function getSolidColor(baseColor, brightness) {
  var instance = new _tinycolor.TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
exports.getSolidColor = getSolidColor;