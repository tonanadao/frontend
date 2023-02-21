"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
// ========================= Placeholder ==========================
var genEmptyStyle = function genEmptyStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, componentCls + "-tbody > tr" + componentCls + "-placeholder", {
    textAlign: 'center',
    color: token.colorTextDisabled,
    '&:hover > td': {
      background: token.colorBgContainer
    }
  }));
};
var _default = genEmptyStyle;
exports["default"] = _default;