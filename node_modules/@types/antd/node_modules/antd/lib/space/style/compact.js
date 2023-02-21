"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genSpaceCompactStyle = function genSpaceCompactStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, {
    display: 'inline-flex',
    '&-block': {
      display: 'flex',
      width: '100%'
    },
    '&-vertical': {
      flexDirection: 'column'
    }
  });
};
// ============================== Export ==============================
var _default = genSpaceCompactStyle;
exports["default"] = _default;