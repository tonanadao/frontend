"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genButtonStyle = function genButtonStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    paddingXS = token.paddingXS,
    opacityLoading = token.opacityLoading;
  return (0, _defineProperty2["default"])({}, componentCls + "-button", (0, _defineProperty2["default"])({
    whiteSpace: 'nowrap'
  }, "&" + antCls + "-btn-group > " + antCls + "-btn", (_ref = {}, (0, _defineProperty2["default"])(_ref, "&-loading, &-loading + " + antCls + "-btn", {
    cursor: 'default',
    pointerEvents: 'none',
    opacity: opacityLoading
  }), (0, _defineProperty2["default"])(_ref, "&:last-child:not(:first-child):not(" + antCls + "-btn-icon-only)", {
    paddingInline: paddingXS
  }), _ref)));
};
var _default = genButtonStyle;
exports["default"] = _default;