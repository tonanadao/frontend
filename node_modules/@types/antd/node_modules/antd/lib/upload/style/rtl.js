"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
// =========================== Motion ===========================
var genRtlStyle = function genRtlStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-rtl", {
    direction: 'rtl'
  });
};
var _default = genRtlStyle;
exports["default"] = _default;