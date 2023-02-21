"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStepsCustomIconStyle = function genStepsCustomIconStyle(token) {
  var _ref5;
  var componentCls = token.componentCls,
    stepsIconCustomTop = token.stepsIconCustomTop,
    stepsIconCustomSize = token.stepsIconCustomSize,
    stepsIconCustomFontSize = token.stepsIconCustomFontSize;
  return _ref5 = {}, (0, _defineProperty2["default"])(_ref5, componentCls + "-item-custom", (0, _defineProperty2["default"])({}, "> " + componentCls + "-item-container > " + componentCls + "-item-icon", (0, _defineProperty2["default"])({
    height: 'auto',
    background: 'none',
    border: 0
  }, "> " + componentCls + "-icon", {
    top: stepsIconCustomTop,
    width: stepsIconCustomSize,
    height: stepsIconCustomSize,
    fontSize: stepsIconCustomFontSize,
    lineHeight: stepsIconCustomSize + "px"
  }))), (0, _defineProperty2["default"])(_ref5, "&:not(" + componentCls + "-vertical)", (0, _defineProperty2["default"])({}, componentCls + "-item-custom", (0, _defineProperty2["default"])({}, componentCls + "-item-icon", {
    width: 'auto',
    background: 'none'
  }))), _ref5;
};
var _default = genStepsCustomIconStyle;
exports["default"] = _default;