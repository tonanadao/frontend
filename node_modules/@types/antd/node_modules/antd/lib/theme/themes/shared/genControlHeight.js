"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var genControlHeight = function genControlHeight(token) {
  var controlHeight = token.controlHeight;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
var _default = genControlHeight;
exports["default"] = _default;