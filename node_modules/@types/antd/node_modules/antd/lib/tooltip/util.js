"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseColor = parseColor;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var _colors = require("../_util/colors");
/* eslint-disable import/prefer-default-export */

var PresetColorRegex = new RegExp("^(" + _colors.PresetColorTypes.join('|') + ")(-inverse)?$");
function parseColor(prefixCls, color) {
  var className = (0, _classnames["default"])((0, _defineProperty2["default"])({}, prefixCls + "-" + color, color && PresetColorRegex.test(color)));
  var overlayStyle = {};
  var arrowStyle = {};
  if (color && !PresetColorRegex.test(color)) {
    overlayStyle.background = color;
    // @ts-ignore
    arrowStyle['--antd-arrow-background-color'] = color;
  }
  return {
    className: className,
    overlayStyle: overlayStyle,
    arrowStyle: arrowStyle
  };
}