"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genLayoutLightStyle = function genLayoutLightStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    colorBgContainer = token.colorBgContainer,
    colorBgBody = token.colorBgBody,
    colorText = token.colorText;
  return (0, _defineProperty2["default"])({}, componentCls + "-sider-light", (_ref = {
    background: colorBgContainer
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-sider-trigger", {
    color: colorText,
    background: colorBgContainer
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-sider-zero-width-trigger", {
    color: colorText,
    background: colorBgContainer,
    border: "1px solid " + colorBgBody,
    borderInlineStart: 0
  }), _ref));
};
var _default = genLayoutLightStyle;
exports["default"] = _default;