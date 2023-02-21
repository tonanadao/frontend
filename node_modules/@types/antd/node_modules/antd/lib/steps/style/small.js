"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStepsSmallStyle = function genStepsSmallStyle(token) {
  var _ref2;
  var componentCls = token.componentCls,
    stepsSmallIconSize = token.stepsSmallIconSize,
    fontSizeSM = token.fontSizeSM,
    fontSize = token.fontSize,
    colorTextDescription = token.colorTextDescription;
  return (0, _defineProperty2["default"])({}, "&" + componentCls + "-small", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, "&" + componentCls + "-horizontal:not(" + componentCls + "-label-vertical) " + componentCls + "-item", {
    paddingInlineStart: token.paddingSM,
    '&:first-child': {
      paddingInlineStart: 0
    }
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-icon", {
    width: stepsSmallIconSize,
    height: stepsSmallIconSize,
    // margin: stepsSmallIconMargin,
    marginTop: 0,
    marginBottom: 0,
    marginInline: "0 " + token.marginXS + "px",
    fontSize: fontSizeSM,
    lineHeight: stepsSmallIconSize + "px",
    textAlign: 'center',
    borderRadius: stepsSmallIconSize
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-title", {
    paddingInlineEnd: token.paddingSM,
    fontSize: fontSize,
    lineHeight: stepsSmallIconSize + "px",
    '&::after': {
      top: stepsSmallIconSize / 2
    }
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-description", {
    color: colorTextDescription,
    fontSize: fontSize
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-tail", {
    top: stepsSmallIconSize / 2 - token.paddingXXS
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-custom " + componentCls + "-item-icon", (0, _defineProperty2["default"])({
    width: 'inherit',
    height: 'inherit',
    lineHeight: 'inherit',
    background: 'none',
    border: 0,
    borderRadius: 0
  }, "> " + componentCls + "-icon", {
    fontSize: stepsSmallIconSize,
    lineHeight: stepsSmallIconSize + "px",
    transform: 'none'
  })), _ref2));
};
var _default = genStepsSmallStyle;
exports["default"] = _default;