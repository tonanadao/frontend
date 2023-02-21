"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var getRTLStyle = function getRTLStyle(_ref) {
  var _ref3;
  var componentCls = _ref.componentCls,
    menuArrowOffset = _ref.menuArrowOffset;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-rtl", {
    direction: 'rtl'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-submenu-rtl", {
    transformOrigin: '100% 0'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-rtl" + componentCls + "-vertical,\n    " + componentCls + "-submenu-rtl " + componentCls + "-vertical", (0, _defineProperty2["default"])({}, componentCls + "-submenu-arrow", {
    '&::before': {
      transform: "rotate(-45deg) translateY(-" + menuArrowOffset + ")"
    },
    '&::after': {
      transform: "rotate(45deg) translateY(" + menuArrowOffset + ")"
    }
  })), _ref3;
};
var _default = getRTLStyle;
exports["default"] = _default;