"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStepsRTLStyle = function genStepsRTLStyle(token) {
  var _ref5;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, "&" + componentCls + "-rtl", (_ref5 = {
    direction: 'rtl'
  }, (0, _defineProperty2["default"])(_ref5, componentCls + "-item", {
    '&-subtitle': {
      "float": 'left'
    }
  }), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-navigation", (0, _defineProperty2["default"])({}, componentCls + "-item::after", {
    transform: 'rotate(-45deg)'
  })), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-vertical", (0, _defineProperty2["default"])({}, "> " + componentCls + "-item", (0, _defineProperty2["default"])({
    '&::after': {
      transform: 'rotate(225deg)'
    }
  }, componentCls + "-item-icon", {
    "float": 'right'
  }))), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-dot", (0, _defineProperty2["default"])({}, componentCls + "-item-icon " + componentCls + "-icon-dot, &" + componentCls + "-small " + componentCls + "-item-icon " + componentCls + "-icon-dot", {
    "float": 'right'
  })), _ref5));
};
var _default = genStepsRTLStyle;
exports["default"] = _default;