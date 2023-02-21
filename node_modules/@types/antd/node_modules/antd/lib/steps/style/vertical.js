"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStepsVerticalStyle = function genStepsVerticalStyle(token) {
  var _ref, _ref2, _ref3;
  var componentCls = token.componentCls,
    stepsSmallIconSize = token.stepsSmallIconSize,
    stepsIconSize = token.stepsIconSize;
  return (0, _defineProperty2["default"])({}, "&" + componentCls + "-vertical", (_ref3 = {
    display: 'flex',
    flexDirection: 'column'
  }, (0, _defineProperty2["default"])(_ref3, "> " + componentCls + "-item", (_ref = {
    display: 'block',
    flex: '1 0 auto',
    paddingInlineStart: 0,
    overflow: 'visible'
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-item-icon", {
    "float": 'left',
    marginInlineEnd: token.margin
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-item-content", {
    display: 'block',
    minHeight: token.controlHeight * 1.5,
    overflow: 'hidden'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-item-title", {
    lineHeight: stepsIconSize + "px"
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-item-description", {
    paddingBottom: token.paddingSM
  }), _ref)), (0, _defineProperty2["default"])(_ref3, "> " + componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    position: 'absolute',
    top: 0,
    insetInlineStart: token.stepsIconSize / 2 - token.lineWidth,
    width: token.lineWidth,
    height: '100%',
    padding: stepsIconSize + token.marginXXS * 1.5 + "px 0 " + token.marginXXS * 1.5 + "px",
    '&::after': {
      width: token.lineWidth,
      height: '100%'
    }
  }), (0, _defineProperty2["default"])(_ref3, "> " + componentCls + "-item:not(:last-child) > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    display: 'block'
  }), (0, _defineProperty2["default"])(_ref3, " > " + componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-content > " + componentCls + "-item-title", {
    '&::after': {
      display: 'none'
    }
  }), (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-small " + componentCls + "-item-container", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, componentCls + "-item-tail", {
    position: 'absolute',
    top: 0,
    insetInlineStart: token.stepsSmallIconSize / 2 - token.lineWidth,
    padding: stepsSmallIconSize + token.marginXXS * 1.5 + "px 0 " + token.marginXXS * 1.5 + "px"
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-title", {
    lineHeight: stepsSmallIconSize + "px"
  }), _ref2)), _ref3));
};
var _default = genStepsVerticalStyle;
exports["default"] = _default;