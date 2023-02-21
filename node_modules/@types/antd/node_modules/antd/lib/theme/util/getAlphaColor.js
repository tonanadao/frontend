"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tinycolor = require("@ctrl/tinycolor");
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  var _TinyColor$toRgb = new _tinycolor.TinyColor(frontColor).toRgb(),
    fR = _TinyColor$toRgb.r,
    fG = _TinyColor$toRgb.g,
    fB = _TinyColor$toRgb.b,
    originAlpha = _TinyColor$toRgb.a;
  if (originAlpha < 1) {
    return frontColor;
  }
  var _TinyColor$toRgb2 = new _tinycolor.TinyColor(backgroundColor).toRgb(),
    bR = _TinyColor$toRgb2.r,
    bG = _TinyColor$toRgb2.g,
    bB = _TinyColor$toRgb2.b;
  for (var fA = 0.01; fA <= 1; fA += 0.01) {
    var r = Math.round((fR - bR * (1 - fA)) / fA);
    var g = Math.round((fG - bG * (1 - fA)) / fA);
    var b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) return new _tinycolor.TinyColor({
      r: r,
      g: g,
      b: b,
      a: Math.round(fA * 100) / 100
    }).toRgbString();
  }
  // fallback
  /* istanbul ignore next */
  return new _tinycolor.TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var _default = getAlphaColor;
exports["default"] = _default;