"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStyle = function genStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper-rtl", (_ref = {
    direction: 'rtl',
    table: {
      direction: 'rtl'
    }
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-pagination-left", {
    justifyContent: 'flex-end'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-pagination-right", {
    justifyContent: 'flex-start'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-row-expand-icon", {
    '&::after': {
      transform: 'rotate(-90deg)'
    },
    '&-collapsed::before': {
      transform: 'rotate(180deg)'
    },
    '&-collapsed::after': {
      transform: 'rotate(0deg)'
    }
  }), _ref));
};
var _default = genStyle;
exports["default"] = _default;